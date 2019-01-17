import Home from "../containers/home/Index";
import Life from "../containers/life/Index";
import Cart from "../containers/cart/Index";
import Mine from "../containers/mine/Index";
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
    Home: {
        name: 'Home',
        path: '/Home',
        meta: {index: 1},
        component: () => {
            return Home;
        }
    },
    Life: {
        name: 'Life',
        path: '/Life',
        meta: {index: 1},
        component: () => {
            return Life;
        }
    },
    Cart: {
        name: 'Cart',
        path: '/Cart',
        meta: {index: 1},
        component: () => {
            return Cart;
        }
    },
    Mine: {
        name: 'Mine',
        path: '/Mine',
        meta: {index: 1},
        component: () => {
            return Mine;
        }
    },


};

export default routes;