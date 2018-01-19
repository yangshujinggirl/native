import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import {bussinessUtil} from 'publicJs';

//组合组件

export default class Container extends Component{
  constructor(props){
    super(props);
  }
  //组件完成加载
  componentDidMount(){
    /**
       * 适配屏幕
       */
    bussinessUtil.configScreen();
  }
  render(){
    return(
      <div className="set_safe">
        <ul className="list">
          <li className="install-login">
            <a href="https://www.lingtouniao.com/v3/h5/mobile/index.html#/brand-introduction">
            <span className="list-left">关于领投鸟</span>
            <span className="list-icon"></span>
            </a>
          </li>
          <li>
            <a href="https://www.lingtouniao.com/v3/h5/link-info.html">
            <span className="list-left">联动优势</span>
            <span className="list-icon"></span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
