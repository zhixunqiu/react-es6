import React from 'react'
import PropType from 'prop-types'
import classnames from 'classnames'

import TabNav from './tabNav'
import TabContent from './tabContent'

export  default class Tabs extends React.Component{ 
    constructor(props){
        super(props)
        this.handleTabClick = this.handleTabClick.bind(this)
        const currentProps = this.props
        let activeIndex
        
        if('activeIndex' in currentProps){
            activeIndex = currentProps.activeIndex
        }else if('defaultActiveIndex' in currentProps){
            activeIndex = currentProps.defaultActiveIndex
        }

        this.state = {
            activeIndex,
            prevIndex : activeIndex
        }
    }

    static propTypes = {
        className : PropType.string,
        classPrefix : PropType.string,
        defaultActiveIndex : PropType.number,
        activeIndex : PropType.number,
        onChange : PropType.func,
        children : PropType.oneOfType([
            PropType.arrayOf(PropType.node),
            PropType.node
        ])
    }

    static defaultProps = {
        classPrefix : 'tabs',
        onChange : () => {}
    }

    static getDerivedStateFromProps(nextProps,prevState){
        if('activeIndex' in nextProps){
            const { activeIndex } = nextProps
            return {
                activeIndex
            }
        }
        return null
    }

    handleTabClick(activeIndex){
        const prevIndex = this.state.activeIndex
        if(activeIndex !== prevIndex && 'defaultActiveIndex' in this.props){
            this.setState({
                activeIndex,
                prevIndex
            })
        }
    }

    renderTabNav(){
        const {classPrefix } = this.props
        return (
            <TabNav 
                key = "tabBar"
                classPrefix = {classPrefix}
                panels = {this.props.children}
                onTabClick = {this.handleTabClick}
                activeIndex = {this.state.activeIndex}
            />
        )
    }

    renderTabContent(){
        const {classPrefix , children} = this.props
        return (
            <TabContent 
                key = "tabContent"
                classPrefix = {classPrefix}
                panels = {children}
                activeIndex = {this.state.activeIndex}
            />
        )
    }

    render(){
        const { className } = this.props
        const classes = classnames(className,'ui-tabs')
        return (
            <section className={classes}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </section>
        )
    }
}


