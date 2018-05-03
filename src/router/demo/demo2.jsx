import React, {Component, PureComponent} from 'react'
import Immutable, { List, Map, is } from 'immutable'

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


export default class Demo2 extends Component{
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
        // const a = Immutable.fromJS({a:12,b:{c:11}})
        // console.log(a.getIn(['b','c']))

        // 构造一个2000个数据的数组
        let dataArr = [];
        for(let i = 0; i < 20; i++){
            let checked = Math.random() < 0.5
            dataArr.push({
                name: i,
                checked
            })
        }
        this.setState({list:Immutable.fromJS(dataArr)})
    }

    componentDidMount(){
        
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