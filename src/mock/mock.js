import Mock from 'mockjs';
import data from './data';
import apis from '../apis';

Mock.setup({
    timeout: 1500
});

Mock.exeMock = (apiMain, callback) => {
    Mock.mock(apis.baseUrl + apiMain.url, apis.method, (response) => {
        return callback(response);
    });
}


Mock.exeMock(apis.selectProducts, (response) => {
    console.log(response);
    return data.data1;
});