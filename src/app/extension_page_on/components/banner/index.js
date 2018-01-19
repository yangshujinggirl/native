import React,{Component} from 'react';//引入react
import './index.scss?l';//引入样式
export default class Banner extends Component{
  //构建函数
  constructor(props){
    super(props);
  }

  //组件完成更新
  componentDidUpdate(){
  }
  
  render(){
    
    return(
      <img src="../image/extension/extension_page1_banner.jpg" alt="" className="banner"/>
    )
  }
}