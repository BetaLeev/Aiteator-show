import { Button, Row, Col, Icon, Field, Swipe, SwipeItem, TreeSelect, Tab, Tabs, Tabbar, TabbarItem } from 'vant';
const VantElement = [Button, Row, Col, Icon, Field, Swipe, SwipeItem, TreeSelect, Tab, Tabs, Tabbar, TabbarItem]

export default Vue => {
    VantElement.forEach(item => {
        Vue.use(item)
    })
}