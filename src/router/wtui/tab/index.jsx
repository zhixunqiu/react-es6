import React from 'react'
import {Tabs, TabPane} from 'Components/tabs/index'
// import Tabs from 'Components/tabs/tabs'
// import TabPane from 'Components/tabs/tabPane'

const TabDemo = () => (
    <Tabs classPrefix={'tabs'} defaultActiveIndex={0}>
        <TabPane order={1} tabs={'标题1'}>第一个Tab里的内容</TabPane>
        <TabPane order={2} tabs={'标题2'}>第二个Tab里的内容</TabPane>
        <TabPane order={3} tabs={'标题3'}>第三个Tab里的内容</TabPane>
    </Tabs>
)
export default TabDemo