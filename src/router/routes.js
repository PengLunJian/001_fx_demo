import Home from "../containers/home/Index";
import User from "../containers/user/Index";
import Login from "../containers/login/Index";

const routes = [
    {
        name: 'Login',
        path: '/',
        exact: true,
        meta: {index: 1},
        component: Login
    },
    {
        name: 'Login',
        path: '/Login',
        meta: {index: 1},
        component: Login
    },
    {
        name: 'User',
        path: '/User',
        meta: {index: 1},
        component: User
    },
    {
        name: 'Home',
        path: '/Home',
        meta: {index: 1},
        component: Home
    }
];

export default routes;