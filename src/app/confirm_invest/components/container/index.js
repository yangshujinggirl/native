import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Alert from 'alert';//引入alert组件
import Loading from 'loading';//引入loading组件
import Button from 'button';//引入button组件
import LoginOver from 'loginOver';//引入登录超时组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,bussinessUtil,sessionUtil,dataUtil,bigDataUtil } from 'publicJs';
let pageInfo=bussinessUtil.getPageInfo();//获取页面传递过来的数据
let sessionKey=bussinessUtil.getSessionKey();
//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      isLoading: false,//loading状态
      loginShow: false,//登录超时
    };
	}
	//组件完成加载
	componentDidMount(){
		/**
       * 适配屏幕
       */
      bussinessUtil.configScreen();
	}

  //修改提示框内容
  updateText=(text,show)=>{
    this.setState({alertText: text,alertShow: show});
    //如果show为true
    if(show){
      setTimeout(()=>{this.setState({alertShow: false});},config.alertTime);
    }
  }
  /**
   * 提交确定按钮
   * @return {[type]} [description]
   */
  btnClick=()=>{
    this.setState({isLoading: true});
    let url=`/product/buy/confirm`;
    let birdCoin=pageInfo.isBirdCoin?pageInfo.birdCoin:0;//判断是否勾选了鸟币了
      let param=`sessionKey=${sessionKey}&orderAmount=${pageInfo.userOrderMoney}&productId=${pageInfo.productId}&birdCoin=${birdCoin}&userCouponId=${strUtil.isEmpty(pageInfo.couponSel)?'':pageInfo.couponSel.userCouponId}`;
      let successCall=(data)=>{
        this.setState({isLoading: false});
        this.updateText('下单成功!',true);//更新弹窗
        window.location.href='../account_viewall/account_viewall.html'
      }
      let errorCall=(data)=>{
        this.setState({isLoading: false});
        /**
         * 如果resultCode等于10000006,则弹出去登录的弹窗,否则就是正常的提示弹窗
         */
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
        /**
         * 处理鸟币抵扣
         * @type {String}
         */
        let birdCoin;
        let dealBirdCoin=()=>{
          if(pageInfo.isBirdCoin){
            birdCoin=<li className="item">
                  <p className="t1">鸟币抵扣</p>
                  <p className="t2">{strUtil.formatData(pageInfo.birdCoin)}元</p>
                </li>
          }else{
            birdCoin=<div></div>
          }
        }
        dealBirdCoin();
        /**********鸟币抵扣处理完成***********/
        /**
         * 处理理财金券
         * @type {String}
         */
        let coupon;
        let dealCoupon=()=>{
          if(strUtil.isEmpty(pageInfo.couponSel)){
            coupon=<div></div>
          }else{
            coupon=<li className="item">
                  <p className="t1">已使用理财金券</p>
                  <p className="t2">{strUtil.formatData(pageInfo.couponSel.couponName)}</p>
                </li>
          }
        }
        dealCoupon();
        /**********理财金券处理完成***********/
        return(
            <div className="Container">
              <ul className="list">
                <li className="item">
                  <p className="t1">购买金额</p>
                  <p className="t2">{pageInfo.userOrderMoney}元</p>
                </li>
                <li className="item">
                  <p className="t1">待收收益</p>
                  <p className="t2 red">{strUtil.formatData(pageInfo.revenue2)}元</p>
                </li>
                {birdCoin}
                {coupon}
                <li className="item">
                  <p className="t1">实际支付</p>
                  <p className="t2">{strUtil.formatData(pageInfo.money)}元</p>
                </li>
              </ul>
              <p className="time">到期日期：{strUtil.formatData(pageInfo.productExpireDate)}</p>
              <LoginOver type='2' show={this.state.loginShow} />
              <Loading loading={this.state.isLoading} />
              <Alert text={this.state.alertText} show={this.state.alertShow} />
              <Button btnCss='sure' btnText='确认购买' parentCss='parent' btnClick={this.btnClick}/>
            </div>
            );
  }
}
