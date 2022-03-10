const baseUrl = "https://www.uninav.com";
const $https = (obj) => {
	let {
		url,
		data,
		method = 'GET',
		dataType = 'json',
	} = obj;
	console.log(url,method)
	uni.showLoading({
		title: '加载中'
	});
	return new Promise((resolve,reject)=>{
		uni.request({
		url: url,
		data,
		method,
		success: function(res) {
			resolve(res);
		},
		fail: function(res) {
			reject(res)
		},
		complete: function() {
			uni.hideLoading();
		}
	})	
	})
	
}

export default $https;
