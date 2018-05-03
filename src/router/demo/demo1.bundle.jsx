import React, {Component} from 'react'
//import { is } from 'immutable'

class ListItem extends Component{
    // shouldComponentUpdate(nextProps, nextState){
    //     if(this.props.data.checked !== nextProps.data.checked){
    //         return true
    //     }
    //     return false
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     const thisProps = this.props || {};
    //     const thisState = this.state || {};
    //     if (Object.keys(thisProps).length !== Object.keys(nextProps).length || Object.keys(thisState).length !== Object.keys(nextState).length) {
    //         return true; 
    //     }
    //     for (const key in nextProps) {
    //         if (nextProps.hasOwnProperty(key) &&
    //         !is(thisProps[key], nextProps[key])) { return true;
    //         } 
    //     }
    //     for (const key in nextState) {
    //         if (nextState.hasOwnProperty(key) &&
    //         !is(thisState[key], nextState[key])) { return true;
    //         } 
    //     }
    //     return false; 
    // }

    render(){
        let data = this.props.data
        let index = this.props.index
        console.log('item'+index)
        // checkbox选择框是一个受限组件，用数据来决定它是否选中
        return (
            <li>
                <input type="checkbox" data-index={index} checked={data.checked} onChange={this.props.toggleChecked}/>
                <span>{data.name}</span>
            </li>
        )
    }
}


export default class Demo1 extends Component{
    constructor(props){
        super(props)
        this.state = {
            list : [],
            val : ''
        }
        this.toggleChecked = this.toggleChecked.bind(this)
        this.changeInput = this.changeInput.bind(this)
        this.clickTodemo3 = this.clickTodemo3.bind(this)
    }

    componentWillMount(){
        // 构造一个2000个数据的数组
        let dataArr = [];
        for(let i = 0; i < 20; i++){
            let checked = Math.random() < 0.5
            dataArr.push({
                name: i,
                checked
            })
        }
        // console.log(is({a:1},{a:1}))
        // console.log('------------------')
        this.setState({list:dataArr})
    }

    clickTodemo3(){
        this.props.history.push('/demo3')
    }

    componentDidMount(){
        
    }

    toggleChecked(event){
        let checked = event.target.checked
        let index = event.target.getAttribute("data-index")
        let list = this.state.list
        list[index].checked = checked

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
                <div onClick={this.clickTodemo3}>click to demo3</div>
                <ul>
                    {this.state.list.map((data, index)=>{
                        return (
                            <ListItem data={data}
                                index={index} key={data.name}
                                toggleChecked={this.toggleChecked}
                            />
                        )
                    })}
                </ul>
            </div>
        )
    }
}