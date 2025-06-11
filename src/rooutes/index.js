import HomePage from "../pages/HomePage/HomePage";
import OderPage from "../pages/OderPage/OderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import SiginPage from "../pages/SiginPage/SiginPage";
import SignupPage from "../pages/SigupPage/SignupPage";
import ProductDetail from "../pages/ProductDetailPage/ProductDetail";

export const routers = [
    {
        path: '/',
        page: HomePage,
        isShowHeader: true
    },
    {
        path: '/oder',
        page: OderPage,
        isShowHeader: true
    },
    {
        path: '/products',
        page: ProductsPage,
        isShowHeader: true
    },
    {
        path: '/type',
        page: TypeProductPage,
        isShowHeader: true
    },
    {
        path: '/sign-in',
        page: SiginPage,
        isShowHeader: true
    },
    {
        path: '/sign-up',
        page: SignupPage,
        isShowHeader: true
    },
    {
        path: '/product-details',
        page: ProductDetail,
        isShowHeader: true
    },
    {
        path: '*',
        page: NotFoundPage

    }
]