import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import Alert from 'alert';//引入alert组件
import Head from 'head';
import Loading from 'loading';//引入loading组件
import FooterNew from 'footerNew';//引入公共底部组件
import LoginOver from 'loginOver';//引入登录超时组件
import LazyLoad from 'lazyLoad';//引入lazyLoad组件
import Button from 'button';//引入button组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,bussinessUtil,sessionUtil,dataUtil } from 'publicJs';


let sessionKey=sessionUtil.get('sessionKey');//获取sessionkey

//新手标
class XsblList extends Component {
	constructor(props) {
		super(props)
	}
	goDetail =(id)=> {
		window.location.href=`../productDetail/productDetail.html?id=${id}`;
	}
	render() {
		let data = this.props.data;
		let dataMap =()=> {
			return data.map((el,index) => (
							<div className="item-pr" key={index} onClick={this.goDetail.bind(this,el.productId)}>
								<div className="item-title">
									<div className="ll">{el.productName}</div>
									<div className="rl">
										<div>
											<span className="xiangou">限购一个</span>
											<span className="solid-arrow"></span>
										</div>
									</div>
								</div>
								<div className="item-process">
									<div className="inner"
										style={{width:strUtil.toFixed(
													(parseFloat(strUtil.formatData(el.productTotalAmount))
													-
													parseFloat(strUtil.formatData(el.productRemainAmount))
												)*100/(parseFloat(strUtil.formatData(el.productTotalAmount))),0)
												+'%'
										}}>
										<div className="circle"></div>
									</div>
								</div>
								<div className="item-content">
									<div className="row">
										<p>历史年化收益</p>
										<p className="value-prece">{el.annualIncomeText}</p>
									</div>
									<div className="row-thr">
										<div className="item-thr">
											<img src="../image/icon/new_h5/icon-product1.png"  className="icon-item"></img>
											<span className="value">{strUtil.formatMiriade(strUtil.formatData(el.productRemainAmount))}</span>
										</div>
										<div className="item-thr">
											<img src="../image/icon/new_h5/icon-product2.png"  className="icon-item"></img>
											<span className="value">{el.convertDay}天</span>
										</div>
										<div className="item-thr">
											<img src="../image/icon/new_h5/icon-product0.png"  className="icon-item"></img>
											<span className="value">{el.staInvestAmount}元起</span>
										</div>
									</div>
								</div>
							</div>
						))
		}
		return(
			<div className="product-normal">
				{
					data.length>0?
					<div className="product-normal-wrap">
						<div className="title">{this.props.title}</div>
						<div className="list-wrap">
							<div className="product-list">
								{
									dataMap()
								}
							</div>
						</div>
					</div>
					:
					""
				}
			</div>
		)
	}
}
//募集中，已结束
class NormalList extends Component {
	constructor(props) {
		super(props)
	}
	goDetail =(id)=> {
		window.location.href=`../productDetail/productDetail.html?id=${id}`;
	}

	render() {
		let data = this.props.data;
		//可用鸟币和金券
		let useBirdCoupon=(el)=> {
				if(el.useBirdCoinTag!="0"&&el.useCouponTag!="0") {
					return <div>
										<img src="../image/icon/new_h5/niaobi.png"  className="bird-quan"></img>
										<img src="../image/icon/new_h5/quan.png"  className="bird-quan"></img>
									</div>
				}else if(el.useBirdCoinTag=="0"&&el.useCouponTag!="0") {
					return <img src="../image/icon/new_h5/quan.png"  className="bird-quan"></img>
				} else if(el.useBirdCoinTag!="0"&&el.useCouponTag=="0") {
					return <img src="../image/icon/new_h5/niaobi.png"  className="bird-quan"></img>
				}
		}
		//含理财金券，可转让，送礼品，限时加息
		let typeShow =(el) => {
			let isCoupon;
			let isAssignment;
			let activityTags;
			let icons_list=[];

			if(el.productStatus>=2) {
				return false;
			}
			if(el.isCoupon) {
				isCoupon = <span className="item-icon">含理财金券</span>
			} else {
				isCoupon=<span></span>
			}
			if(el.isAssignment) {
				isAssignment = <span className="item-icon">可转让</span>
			} else {
				isAssignment = <span></span>
			}
			if(el.activityTags) {
				let activityArr = el.activityTags.split(',');
				activityTags = activityArr.map((eee,index)=>{
					return <span className="item-icon" key={index}>{eee}</span>
				})
			} else {
				activityTags = <span></span>
			}
			icons_list.push(isCoupon,isAssignment,activityTags)
			return icons_list
		}
		//数据渲染
		let dataMap =()=> {
			return data.map((el,index) => (
								<div className="item-pr" key={index} onClick={this.goDetail.bind(this,el.productId)}>
									<div className="item-title">
										<div className="ll">
											<span>{el.productName}</span>
											<div className="icons-list ">
												{ typeShow(el) }
											</div>
										</div>
										<div className="rl">
											{
												el.productStatus>="2"?'':useBirdCoupon(el)
											}
										</div>
									</div>
									<div className={`item-process ${el.productStatus<2?'':'stoped'}`}>
										<div className="inner"
											style={{width:strUtil.toFixed(
														(parseFloat(strUtil.formatData(el.productTotalAmount))
														-
														parseFloat(strUtil.formatData(el.productRemainAmount))
													)*100/(parseFloat(strUtil.formatData(el.productTotalAmount))),0)
													+'%'
											}}>
											<div className="circle"></div>
										</div>
									</div>
									<div className="item-content">
										<div className="row">
											<p>历史年化收益</p>
											<p className={`value-prece ${el.productStatus<2?'':'stoped'}`}>{el.annualIncomeText}</p>
										</div>
										<div className="row-thr">
											<div className="item-thr">
												<img src="../image/icon/new_h5/icon-product1.png"  className="icon-item"></img>
												<span className="value">{strUtil.formatMiriade(strUtil.formatData(el.productRemainAmount))}</span>
											</div>
											<div className="item-thr">
												<img src="../image/icon/new_h5/icon-product2.png"  className="icon-item"></img>
												<span className="value">{el.convertDay}天</span>
											</div>
											<div className="item-thr">
												<img src="../image/icon/new_h5/icon-product0.png"  className="icon-item"></img>
												<span className="value">{el.staInvestAmount}元起</span>
											</div>
										</div>
									</div>
								</div>
						))
		}
		return(
			<div className="product-normal">
				{
					data.length>0?
					<div className="product-normal-wrap">
						<div className="title">{this.props.title}</div>
						<div className="list-wrap">
							<div className="product-list">
								{
									dataMap()
								}
							</div>
						</div>
					</div>
					:
					""
				}
			</div>
		)
	}
}
//体验标
class TybList extends Component {
	constructor(props) {
		super(props)
	}
	goDetail =(id)=> {
		window.location.href=`../experience/experience.html?id=${id}`;
	}
	render() {
		let data = this.props.data;
		return(
			<div className="product-tyb">
				{
					data.annualIncomeText?
					<div className="product-tyb-wrap" onClick={this.goDetail.bind(this,data.productId)}>
						<div className="title">体验标</div>
						<div className="info-content">
							<div className="item-info">
								<p className="value">{data.annualIncomeText}</p>
								<p className="lable">历史年化收益</p>
							</div>
							<div className="item-info">
								<p className="use-tickit">
									<span className="icon-use">
										<img src="../image/icon/new_h5/icon-product2.png"></img>
									</span>
									{data.convertDay}天
								</p>
								<p className="use-tickit">
									<span className="icon-use">
										<img src="../image/icon/new_h5/icon-product0.png"></img>
									</span>
									使用体验金券
								</p>
							</div>
						</div>
						<button className="experience-btn" onClick={this.goDetail.bind(this,data.productId)}>我要体验</button>
					</div>
					:
					""
				}
			</div>
		)
	}
}

class ProductLIst extends Component {
	constructor(props) {
		super(props)
		this.state ={
			tybData:{},
			xsbData:[],
			mjzData:[],
			zrbData:[]
		}
	}
	componentWillMount() {
		this.dataHand()
	}
	dataHand =()=> {
		let xsbArr = []
		let mjzArr = [];
		let zsrArr = []
		this.props.list.map((el,index) =>{
			if(el.productType=="TYB") {//体验标
				this.setState({
					tybData:el
				})
			}else if(el.productStatus<2) {
				if(el.productType=="XSB") {//新手标
					xsbArr.push(el)
					this.setState({
						xsbData:xsbArr
					})
				}else if(el.productType=="ZRB") {//转让标
					zsrArr.push(el)
					this.setState({
						zrbData:zsrArr
					})
				} else {//常规标
					mjzArr.push(el)
					this.setState({
						mjzData:mjzArr
					})
				}
			}
		})
	}
	render() {
		return(
			<div className="product-list-content">
				<TybList data={this.state.tybData}/>
				<XsblList title="新手标" data={this.state.xsbData}/>
				<NormalList title="募集中" data={this.state.mjzData}/>
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
			productList:[]//列表数据
		};
	}
	componentWillMount(){
		bussinessUtil.configScreen();
		this.getListData();
	}

  //修改提示框内容
  updateText=(text,show)=>{
    this.setState({alertText: text,alertShow: show});
    if(show){
      setTimeout(()=>{this.setState({alertShow: false});},config.alertTime);
    }
  }

  //获取理财列表数据
  getListData=()=>{
    let url=`/product/lists`;
    let param=`sessionKey=${sessionKey}&currentPage=0&pageSize=25`;
    let successCall=(data)=>{
			this.setState({
				productList:strUtil.formatData(data.data.productList)
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

	render(){
        let home;
        let dealHome=()=>{
						if(this.state.isLoading){
							home=
							<div>
								<Loading loading={this.state.isLoading} />
								<Alert text={this.state.alertText} show={this.state.alertShow} />
							</div>
						}else{
							home=
							<div>
								<Head />
								<ProductLIst list={this.state.productList}/>
								<Alert text={this.state.alertText} show={this.state.alertShow} />
								<LoginOver type='2' show={this.state.loginShow} />
								<FooterNew type="2"/>
							</div>
						}

		    }
    dealHome();
		return(
        <div className="product-main-wrap">
	        { home }
        </div>
		)
	}
}

export default Container;
