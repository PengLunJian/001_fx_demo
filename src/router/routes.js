import Home from "../containers/home/Index";
import User from "../containers/user/Index";
import Login from "../containers/login/Index";

const routes = {
    Login: {
        name: 'Login',
        path: '/',
        exact: true,
        meta: {index: 1},
        component: () => {
            return Login;
        }
    },
    User: {
        name: 'User',
        path: '/User',
        meta: {index: 1},
        component: () => {
            return User;
        }
    },
    Home: {
        name: 'Home',
        path: '/Home',
        meta: {index: 1},
        component: () => {
            return Home;
        }
    }
};

export default routes;