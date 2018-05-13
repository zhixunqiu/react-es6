import React, {Component,PureComponent} from 'react'
class Item extends Component{
    render(){console.log('Item')
        return (
            <div>
                <span>hello</span>
                {this.props.children}
            </div>
        )
    }
}

class NameItem extends PureComponent{
    render(){console.log('NameItem')
        return (
            <Item>
                <span>DEMO4</span>
            </Item>
        )
    }
}


export default class Demo4 extends Component{
    constructor(props){
        super(props)
        this.state = {
            val : ''
        }
        this.changeInput = this.changeInput.bind(this)
        this.jumpToDemo2 = this.jumpToDemo2.bind(this)
    }

    changeInput(e){
        let val = e.target.value
        this.setState({val})
    }

    jumpToDemo2(){
        this.props.history.push("/performancedemo/demo2")
    }

    render(){ console.log('Demo4')
        return (
            <div>
                <input type="text" value={this.state.iptVal} onChange={this.changeInput}/>
                <div onClick={this.jumpToDemo2}>跳转到demo2</div>
                <NameItem />
            </div>
        )
    }
}