/**
 * @author  B022MC
 * @date  2023/9/18 15:26
 * @Software: WebStorm moonlight_admin
 * @version 1.0
 */
import {createStore} from 'vuex'

export default createStore({
        state: {
            collapsed: true,         // 初始状态为不折叠
            openKeys: [],             // 初始打开的菜单项
            preOpenKeys: [],          // 预打开的菜单项
            selectedKeys: ['1'],      // 初始选择
        },
        mutations: {
            toggleCollapsed(state) {
                state.collapsed = !state.collapsed;
                state.openKeys = state.collapsed ? [] : state.preOpenKeys;
                // 其他 mutations...
            },
            // actions: {
            //     // actions...
            // },
            // modules: {
            //     // modules...
            // },
        },
    }
)

