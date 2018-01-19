import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import {avigatorUtil,config,bussinessUtil} from 'publicJs';
import Button from 'button';//引入button组件

//组合组件
export default class Container extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  //组件完成加载
  componentDidMount(){
    /**
       * 适配屏幕
       */
      bussinessUtil.configScreen();
  }
  //按钮点击事件
  btnClick=()=>{
    if (avigatorUtil.isWeixin()) {
      window.location.href=config.weixinDownUrl;
    }else{
    
      //判断是否为iOS
      if (avigatorUtil.isIOS()) {
        window.location.href=config.iosDownUrl;
      }else{
        window.location.href=config.androidDownUrl;
      }
    }
  }
  render(){
    var dealBtn=()=>{
        return < Button  btnCss='button download-but' btnText='立即下载' btnClick={this.btnClick}/>
    }
    var btn=dealBtn();
    return(
      <div className="download-app">
        <div className="download-top">
          <div className="more">想要查看更多详情</div>
          <div className="downloadapp"></div>
          { btn }
        </div>
        <div className="download-icon"></div>
      </div>
    )
  }
}