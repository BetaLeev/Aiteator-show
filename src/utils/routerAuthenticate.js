import router from '../router'
import store from '../store'
export default {

}
router.beforeEach((to, from, next) => {
    let toPath = to.path;
    let requireAuthPath = ['/mine', '/cart'];
    //     // 对每一个需要验证的路径进行判断

    requireAuthPath.forEach((path) => {
        if (toPath == path) {
            // alert('清闲自在')
            router.push({ path: '/authentication' });
        } else {
            next();
        }
    })
})