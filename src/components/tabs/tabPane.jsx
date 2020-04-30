import React from 'react'
import classnames from 'classnames'
import PropType from 'prop-types'

export default class TabPane extends React.Component{
    static propTypes = {
        classPrefix : PropType.string,
        className : PropType.string,
        isActive : PropType.bool,
        children : PropType.oneOfType[
            PropType.node,
            PropType.string
        ]
    }

    render(){
        const { classPrefix, className, isActive, children } = this.props
        const classes = classnames({
            [className] : className,
            [`${classPrefix}-panel`] : true,
            [`${classPrefix}-active`] : isActive
        })

        return (
            <div 
                role="tabpane"
                className={classes}
                aria-hidden={!isActive}>
                {children}
            </div>
        )
    }
}