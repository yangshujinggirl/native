import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,bussinessUtil,sessionUtil,goLogin} from 'publicJs';
let sessionKey=bussinessUtil.getSessionKey();

//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
    this.state={
      alertShow:false,
    }
	}
  //组件完成加载
  componentDidMount(){
    /**
     * 适配屏幕
     */
    bussinessUtil.configScreen();
  }
  //弹窗出现
  alertShow=()=>{
    console.log('a');
    if(sessionKey=='') {
      console.log(sessionKey)
      // window.location.href = 'http://192.168.18.194:8080/native/user_login/user_login.html?url=http://192.168.18.194:8080/native/activity_backHome/activity_backHome.html';
      window.location.href = 'https://www.lingtouniao.com/native/user_login/user_login.html?url=https://www.lingtouniao.com/native/activity_backHome/activity_backHome.html';
    } else {
      console.log(sessionKey)
      this.setState({alertShow:true});
    }
  }
  closeEvent=()=>{
    console.log('a');
    this.setState({alertShow:false});
  }
  // 到首页
  goHome=()=>{
    window.location.href = '../home/home.html';
  }


	render(){

		return(
			<div className="container">
        <div className="partOne">
					<p className="headText">
            你我相识缘于偶然，之后却在茫茫人海中慢慢淡忘。此去经年，各自安好，你不在的日子，我们日以继夜地努力，在万千对手竞争中一路向前！
          </p>
				</div>
        <div className="part partTwo">
          <img src="../image/activity_backHome/titleOne.png" alt="" className="titleBg"/>
          <p className="titleText">
            拼搏难免遍体鳞伤，回到家的温暖总能让你焕然新生！
          </p>
          <ul className="list">
            <li className="item">
              <img src="../image/activity_backHome/tickits0.png" alt="" />
            </li>
            <li className="item">
              <img src="../image/activity_backHome/tickits1.png" alt="" />
            </li>
            <li className="item">
              <img src="../image/activity_backHome/tickits2.png" alt="" />
            </li>
          </ul>
          <div className="btn" onClick={this.alertShow}></div>
        </div>
        <div className="part partThr">
          <img src="../image/activity_backHome/titleTwo.png" alt="" className="titleBg"/>
          <p className="titleText">
            人生终归还须拼搏，时常打打电话告诉家人你可安好？
          </p>
          <ul className="list">
            <li className="item">
              <img src="../image/activity_backHome/tickits4.png" alt="" />
            </li>
            <li className="item">
              <img src="../image/activity_backHome/tickits5.png" alt="" />
            </li>
            <li className="item">
              <img src="../image/activity_backHome/tickits6.png" alt="" />
            </li>
          </ul>
          <div className="btn" onClick={this.goHome}></div>
        </div>
        <div className="part partFour">
          <img src="../image/activity_backHome/titleFour.png" alt="" className="titleBg"/>
          <p className="titleText">
            自己在拼搏中成长，而不觉中家也越来越好越来越大!
          </p>
          <img src="../image/activity_backHome/bg0.png" alt="" className="img"/>
          <div className="btn" onClick={this.goHome}></div>
        </div>
        <div className="part partFive">
          <img src="../image/activity_backHome/titleFive.png" alt="" className="titleBg"/>
          <p className="text">
            1、以上活动仅限2016年10月31日前注册未投资用户；<br/>
            2、投资获得话费将在活动结束后5个工作日内给您充值，请留意短信；<br/>
            3、复活的新手券有效期截止到11月6日；
          </p>
          <p className="info">
            本活动解释权归领投鸟平台所有
          </p>
        </div>
        <div className={`cover ${this.state.alertShow?'show':''}`}></div>
        <div className={`alert ${this.state.alertShow?'show':''}`}>
          <p className="content">
            三张新手投资返现券已发送至您的账户, 立马投资吧 ！
          </p>
          <p className="tips">
            *10月31日前绑卡且投资老用户不参与此活动
          </p>
          <div className="btn" onClick={this.closeEvent}></div>
        </div>
			</div>
		)
	}
}
