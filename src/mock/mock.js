import Mock from 'mockjs';
import data from './data';
import apis from '../apis';
import Utils from '../utils/utils';

Mock.setup({
    timeout: 1500
});

Mock.exeMock = (apiMain, callback) => {
    Mock.mock(apis.baseUrl + apiMain.url, apis.method, (response) => {
        return callback(response);
    });
}

Mock.exeMock(apis.selectAccount, (response) => {
    return data.data1;
});


Mock.exeMock(apis.selectProducts, (response) => {
    let util = new Utils();
    const newData = util.handlerPagination(data.data2);
    util = null;
    return newData;
});