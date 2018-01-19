import React,{Component} from 'react';//引入react
import Head from 'head';
import Alert from 'alert';//引入alert组件
import FooterNew from 'footerNew';
import Loading from 'loading';//引入loading组件
import Banner from 'banner';//引入banner组件
import { config,bussinessUtil,sessionUtil,strUtil,dataUtil } from 'publicJs';
import 'fetchJs';
import 'whatwg-fetch';

import './index.scss?l'//引入样式

let sessionKey=sessionUtil.get('sessionKey');//获取sessionkey
let index=0;//加载次数

//banner
class PlatformData extends Component {
	//构建函数
	constructor(props){
		super(props);
	}
	goPlantinfo() {
		window.location.href ="https://www.lingtouniao.com/newmobile/#/static/plantinfo"
	}
	goActivity() {
		window.location.href='../activity_list/activity_list.html';
	}
	goSafe() {
		window.location.href='https://www.lingtouniao.com/newmobile/#/static/safe';
	}
	goSecurity() {
		if(sessionKey==''||sessionKey==null) {
			window.location.href='../user_login/user_login.html';
		} else {
			window.location.href='../account_security/account_security.html';
		}

	}
	render() {
		let { platformAllAmount,platformRegisterNum ,sumRevenue} = this.props.platformData||{};
		return(
			<div className="platform-content">
				<img src="../image/home_new/banner.png" />
				<div className="main-content">
					<div className="main-wrap">
						<div className="top-part">
							<div className="item-top" onClick={this.goPlantinfo}>
								<img src="../image/home_new/icon_0.png" className="icon-type"></img>
								<p>品牌介绍</p>
							</div>
							<div className="item-top" onClick={this.goActivity}>
								<img src="../image/home_new/icon_1.png" className="icon-type"></img>
								<p>热门活动</p>
							</div>
							<div className="item-top" onClick={this.goSecurity}>
								<img src="../image/home_new/icon_2.png" className="icon-type"></img>
								<p>理财金券</p>
							</div>
							<div className="item-top" onClick={this.goSafe}>
								<img src="../image/home_new/icon_3.png" className="icon-type"></img>
								<p>安全保障</p>
							</div>
						</div>
						<div className="bottom-part">
							<div className="item-bottom">
								<p className="value">{platformAllAmount}</p>
								<p>平台累计投资</p>
							</div>
							<div className="item-bottom">
								<p className="value">{platformRegisterNum}</p>
								<p>平台用户突破</p>
							</div>
							<div className="item-bottom">
								<p className="value">{sumRevenue}</p>
								<p>用户赚取收益</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
//精选理财
class Financing extends Component {
	constructor(props) {
		super(props)
	}
	goProduct() {
		window.location.href='../product_list/product_list.html';
	}
	render() {
		return(
			<div className="financing-content">
				<div className="top-part">
					<div className="item-head">
						精选理财
					</div>
					<div className="item-head" onClick={this.goProduct}>
						<span className="more">更多</span>
						<span className="arrow"></span>
					</div>
				</div>
				<div className="bottom-part" onClick={this.goProduct}>
					<div className="title">超值新手标</div>
					<div className="info-list">
						<div className="item-info">
							<p className="value-accrual">
								15
								<span className="unit">%</span>
							</p>
							<p className="tb">历史年化收益</p>
						</div>
						<div className="item-info">
							<p className="value">30天</p>
							<p className="tb">投资期限</p>
						</div>
						<div className="item-info">
							<p className="value">不足20万</p>
							<p className="tb">剩余金额</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
//活动
class Activity extends Component {
	constructor(props) {
		super(props)
	}

	goActivity() {
		window.location.href='../activity_list/activity_list.html';
	}
	render() {
		return(
			<div className="activity-content">
				<div className="top-part">
					<div className="item-head">
						热门活动
					</div>
					<div className="item-head" onClick={this.goActivity}>
						<span className="more">更多</span>
						<span className="arrow"></span>
					</div>
				</div>
				<Banner list={this.props.bannerList} />
			</div>
		)
	}
}

class Container extends Component{
	//构建函数
	constructor(props){
		super(props);
		this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
			isLoading: true,//loading状态
      loginShow: false, //是否显示登录超时
			platformData:{},
			bannerList:[]
		};
	}

	componentDidMount(){
    //适配屏幕
    bussinessUtil.configScreen();
		this.getPageData();
		this.getBannerData()
	}
	//修改提示框内容
  updateText=(text,show)=>{
    this.setState({alertText: text,alertShow: show});
    if(show){
      setTimeout(()=>{this.setState({alertShow: false});},config.alertTime);
    }
  }
	//平台数据据
	getPageData=()=>{
    let url=`/homepage/recommendnew`;
    let param=`currentPage=1&pageSize=10`;
    let successCall=(data)=>{
			this.setState({
				platformData:data.data
			})
			this.setState({isLoading: false});
    }
    let errorCall=(data)=>{
      this.setState({isLoading: false});
      //如果resultCode等于10000006,则弹出去登录的弹窗,否则就是正常的提示弹窗
      if(data.resultCode==config.loginTimeOver){
          this.setState({loginShow: true});
      }else{
        let error=dataUtil.getMessage(data.resultCode);
        this.updateText(error,true);//更新弹窗
      }
    }
    let errorCall2=(e)=>{
      this.setState({isLoading: false});
      this.updateText(e,true);//更新弹窗
    }
    dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
  }
	getBannerData=()=>{
    let url=`/page/banner`;
		let param="clientType=I&location=1";
    let successCall=(data)=>{
			this.setState({
				bannerList:data.data.bannerList
			});
    }
    let errorCall=(data)=>{
      this.setState({isLoading: false});
        if(data.resultCode==config.loginTimeOver){
            this.setState({loginShow: true});
        }else{
          let error=dataUtil.getMessage(data.resultCode);
        }
    }
    let errorCall2=(e)=>{
      this.setState({isLoading: false});
      this.updateText(e,true);//更新弹窗
    }
    dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
  }
	render(){
		let home;
		let initHome =()=> {
			if(this.state.isLoading) {
				home=
				<div>
					<Loading loading={this.state.isLoading} />
					<Alert text={this.state.alertText} show={this.state.alertShow} />
				</div>
			} else {
				home=
				<div className="home-content">
					<Head />
					<PlatformData platformData={this.state.platformData}/>
					<Financing />
					<Activity bannerList={this.state.bannerList}/>
					<FooterNew type="1"/>
        </div>
			}
		}
		initHome()

		return(
        <div>
					{ home }
        </div>
		)
	}
}

export default Container;
