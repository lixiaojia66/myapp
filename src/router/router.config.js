import IndexPage from '../view/index/index';
import UndefinedPage from '../view/404/index';

const router_list = [
    {
        path:'/',
        exact:true,
        render(props){
            return <IndexPage {...props}/>
        }
    },
    {
        path:'',
        exact:true,
        render(props){
            return <UndefinedPage {...props}/>
        }
    },

]

const navs=[
    {
        to:'/',
        title:'首页'
    },
    {
        to:'/getStart',
        title:'新手入门'
    },
    {
        to:'/api',
        title:'API'
    },
    {
        to:'/about',
        title:'关于'
    }

]
export {router_list,navs};

