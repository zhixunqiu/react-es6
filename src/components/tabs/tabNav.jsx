import React from 'react'
import classnames from 'classnames'
import PropType from 'prop-types'

export default class TabNav extends React.Component{
    static propTypes = {
        classPrefix : PropType.string,
        activeIndex : PropType.number,
        panels :  PropType.node
    }

    getTabs(){
        const { panels, classPrefix , activeIndex } = this.props
        
        return React.Children.map(panels,(child) => {
                if(!child) return
                const order = child.props.order

                let classes = classnames({
                    [`${classPrefix}-tab`] : true,
                    [`${classPrefix}-active`] : activeIndex === order,
                    [`${classPrefix}-disable`] : child.props.disabled
                })

                let events = {}
                if(!child.props.disabled){
                    events = {
                        onClick : this.props.onTabClick.bind(this,order)
                    }
                }

                const ref = {}
                if(activeIndex === order){
                    ref.ref = 'activeTab'
                }
                
                return (
                    <li 
                        role="tab"
                        aria-disabled={child.props.disabled ? 'true' : 'false'}
                        aria-select={activeIndex === order ? 'true' : 'false'}
                        {...events}
                        className={classes}
                        key={order}
                        {...ref}>
                            {child.props.tabs}
                    </li>
                )
        })
    }

    render(){
        const { classPrefix } = this.props
        const rootClasses = classnames({
            [`${classPrefix}-bar`]: true
        })
        const classes = classnames({
            [`${classPrefix}-nav`]: true
        })
        return (
            <section className={rootClasses} role="tablist">
                <ul className={classes}>
                    {this.getTabs()}
                </ul>
            </section>
        )
    }
}