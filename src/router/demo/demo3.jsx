import React, {Component, PureComponent} from 'react'
import Immutable, { List, Map, is } from 'immutable'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as InitAction from 'Actions/init'

class ListItem extends PureComponent{
    render(){
        let data = this.props.data
        let index = this.props.index
        console.log('item'+index)
        // checkbox选择框是一个受限组件，用数据来决定它是否选中
        return (
            <li>
                <input type="checkbox" data-index={index} checked={data.get('checked')} onChange={this.props.toggleChecked}/>
                <span>{data.get('name')}</span>
            </li>
        )
    }
}

function mapStateToProps(state) {
  const {
    list
  } = state.get("initReducer").toObject()

  return {
    list
  }
}

function mapDispatchToProps(dispatch){
  return {
    InitAction : bindActionCreators(InitAction,dispatch)
  }
}

class Demo3 extends Component{
    constructor(props){
        super(props)
        this.state = {
            list : List([]),
            val : ''
        }
        this.toggleChecked = this.toggleChecked.bind(this)
        this.changeInput = this.changeInput.bind(this)
    }

    componentWillMount(){
        this.props.InitAction.getInvite()
    }

    componentWillReceiveProps(nextProps){
        this.setState({list:nextProps.list})
    }

    toggleChecked(event){
        let checked = event.target.checked
        let index = event.target.getAttribute("data-index")
        
        const list = this.state.list.setIn([index,'checked'],checked)
        
        this.setState({list})
    }

    changeInput(e){
        let val = e.target.value
        this.setState({val})
    }

    render(){console.log('renderdemo1')
        return (
            <div>
                <input type="text" value={this.state.iptVal} onChange={this.changeInput}/>
                <ul>
                    {this.state.list.map((data, index)=>{
                        return (
                            <ListItem data={data}
                                index={index} key={data.get('name')}
                                toggleChecked={this.toggleChecked}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Demo3)