import request from '@/utils/request'

// 获取文章列表
export function getLatestArticle() {
	return request({
		url: '/api/blog/latest_article',
		method: 'get'
	})
}

// 获取文章信息
export function getArticle(s_id) {
    return request({
        url: '/api/blog/get_article',
        method: 'get',
        params: {
            s_id
        }
    })
}
