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

// 根据文章分类进行请求列表
export function getCateArticle(cateParam) {
	const cateDict = {
		python: 3,
		javascript: 4,
		read: 5,
		study: 6,
		zone: 7
	}
	let cId = cateDict[cateParam.cateType];
    return request({
        url: '/api/blog/get_cate_article',
        method: 'get',
        params: {
            cId,
			pageIndex: cateParam.pageIndex
        }
    })
}
