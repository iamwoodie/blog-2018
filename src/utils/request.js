import axios from 'axios'
import $store from '@/store'
import $router from '@/router'
import {
	Message,
	MessageBox
} from 'element-ui'

const service = axios.create({
	baseURL: process.env.NODE_ENV === 'development'?'http://127.0.0.1:9001':'http://139.199.177.20:9001', // api的base_url
	timeout: 20000,
	withCredentials: true
})

service.interceptors.request.use(config => {
	return config
}, error => {
	Promise.reject(error)
})

service.interceptors.response.use(
	response => {
		const res = response.data

		// 判断请求是否成功，0表示成功，601表示号码已注册, 602表示设备已注册
		if (response.status === 200 && res.result === 1) {
			return res.data
		} else {
			if (res.description) {
				Message({
					message: res.description,
					type: 'error',
					duration: 1.5 * 1000
				})
			}
			return Promise.reject(res)
		}
	},
	error => {
		const response = error.response
		if (response === undefined) {
			Message({
				message: '服务请求超时！',
				type: 'error',
				duration: 3 * 1000
			})
			return Promise.reject(error)
		}
		if (response.status === 401) {
			MessageBox('登录超时，请重新登录', '提示', {
				confirmButtonText: '确定',
			}).then(action => {
				$store.dispatch('LogOut').then(() => {
					$router.push('/login')
					return Promise.reject(error)
				})
			}).catch(error => {
				console.log(error)
				$store.dispatch('LogOut').then(() => {
					$router.push('/login')
					return Promise.reject(error)
				})
			});
		}
		if (response.status === 504) {
			Message({
				message: '后端服务异常，请重试！',
				type: 'error',
				duration: 3 * 1000
			})
			return Promise.reject(error)
		}
		const info = response.data
		Message({
			message: info.message,
			type: 'error',
			duration: 3 * 1000
		})
		return Promise.reject(error)
	}
)

export default service
