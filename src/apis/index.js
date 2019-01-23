const apis = {
    baseUrl: '/api',
    method: 'post',
    timeout: 20000,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json; charset=UTF-8'
    },
    selectAccount: {
        url: '/selectAccount',
        params: {
            username: '',
            password: ''
        }
    },
    selectProducts: {
        url: '/selectProducts',
        params: {
            pageCode: 1,
            pageSize: 10
        }
    }
}

export default apis;