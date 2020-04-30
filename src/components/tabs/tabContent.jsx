import React from 'react'
import classnames from 'classnames'
import PropType from 'prop-types'

export default class TabContent extends React.Component{
    static propTypes = {
        classPrefix : PropType.string,
        activeIndex : PropType.number,
        panels : PropType.node
    }

    getTabPanes(){
        const { panels, classPrefix , activeIndex } = this.props
        return React.Children.map(panels,(child) => {
            if(!child) return
            const order = child.props.order
            const isActive = order === activeIndex
            return React.cloneElement(child,{
                classPrefix,
                isActive,
                children: child.props.children,
                key: `tabpane-${order}`
            })
        })
    }

    render(){
        const { classPrefix } = this.props
        const classes = classnames({
            [`${classPrefix}-content`] : true
        })

        return (
            <div className={classes}>
                {this.getTabPanes()}
            </div>
        )
    }
}