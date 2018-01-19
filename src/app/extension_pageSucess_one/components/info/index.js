import React,{Component} from 'react';//引入react
import './index.scss?l';//引入样式
export default class Info extends Component{
  //构建函数
  constructor(props){
    super(props);
  }

  //组件完成更新
  componentDidUpdate(){
  }
  
  render(){
    var statuStyle = 'info '+this.props.statuStyle
    return(
      <div className={statuStyle}>
        <p className="line">{this.props.showText}</p>
        <p className="yes">{this.props.tipsText}</p>
      </div>
    )
  }
}