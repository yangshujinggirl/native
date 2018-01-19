import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Alert from 'alert';//引入alert组件
import Loading from 'loading';//引入loading组件
import Button from 'button';//引入button组件
import LoginOver from 'loginOver';//引入登录超时组件
import Switch from 'switch';//引入开关组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,bussinessUtil,sessionUtil,dataUtil,bigDataUtil } from 'publicJs';
let pageInfo=bussinessUtil.getPageInfo();//获取页面传递过来的数据
let sessionKey=bussinessUtil.getSessionKey();
let couponSel;//选中的理财金券
let coupons;//理财金券
let isTZ=bussinessUtil.isTZ();//是否开通投资免密
let isBirdCoin=false;//是否鸟币抵扣
let money=pageInfo.userOrderMoney;//实际金额
//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      isLoading: false,//loading状态
      loginShow: false,//登录超时
      switchState: 'default-off',//默认开关为不打开
      couponIndex: 0,//选中金券的下标
      selectActive: true,//选中标的选中状态
      revenue:strUtil.formatData(pageInfo.revenue),//待收收益
      couponIsShow:false,//理财金券是否显示
      payMoney: strUtil.formatData(pageInfo.userOrderMoney),//实际支付金额
    };
	}

	//组件完成加载
	componentDidMount(){
		/**
     * 适配屏幕
     */
    bussinessUtil.configScreen();
	}
  //组件渲染之前
  componentWillMount(){
    this.initCoupon();
  }

  /**
   * 初始化理财金券
   * @return {[type]} [description]
   */
  initCoupon=()=>{
    if(pageInfo.coupons.length>0){
      coupons=strUtil.formatData(pageInfo.coupons);//赋值到理财金券列表
      couponSel=strUtil.formatData(pageInfo.coupons[0]);//赋值选中的理财金券,默认为第一个
      let money;
      /**
       * 返现券
       * @param  {[type]} couponSel.couponTypeDes [description]
       * @return {[type]}                         [description]
       */
      if(strUtil.formatData(couponSel.couponTypeDes)=='FXQ'){
        money=`${pageInfo.revenue}+${couponSel.amount}`;

      }else if(strUtil.formatData(couponSel.couponTypeDes)=='JXQ'){
        /**
         * 加息券
         */
        money=`${strUtil.formatData(pageInfo.revenue)}+${strUtil.toFixed(parseFloat(strUtil.formatData(couponSel.amount))/100*parseFloat(strUtil.formatData(pageInfo.revenue)),2)}`;
      }
      this.setState({revenue:money});
    }
  }

  /**
   * 选择其他理财金券
   */
  selectCoupon=()=>{

    this.setState({couponIsShow:true});
  }
  /**
   * 关闭理财金券
   */
  closeCoupon=()=>{
    this.setState({couponIsShow:false});
  }
  /**
   * 理财金券选中事件
   */
  couponClick=(index)=>{
    couponSel=coupons[index];//选中金券
    let money;
    /**
     * 返现券
     * @param  {[type]} couponSel.couponTypeDes [description]
     * @return {[type]}                         [description]
     */
    if(couponSel.couponTypeDes=='FXQ'){
      money=`${strUtil.formatData(pageInfo.revenue)}+${strUtil.formatData(couponSel.amount)}`;

    }else if(strUtil.formatData(couponSel.couponTypeDes)=='JXQ'){
      /**
       * 加息券
       */
      money=`${strUtil.formatData(pageInfo.revenue)}+${strUtil.toFixed(parseFloat(strUtil.formatData(couponSel.amount))/100*parseFloat(strUtil.formatData(pageInfo.revenue)),2)}`;
    }
    this.setState({couponIndex:index,couponIsShow:false,revenue:money,selectActive:true});
  }
  //更新开关的状态
  updateSwitch=(status)=>{
    if(status=='on'){
      isBirdCoin=true;//鸟币抵扣
      money=parseFloat(strUtil.formatData(pageInfo.userOrderMoney))-parseFloat(strUtil.formatData(pageInfo.birdCoin));
    }else{
      isBirdCoin=false;//鸟币不抵扣
      money=strUtil.formatData(pageInfo.userOrderMoney);
    }
    this.setState({switchState: status,payMoney:money});
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
   * 选中优惠券的勾选
   */
  selectCouponSelect=()=>{
    let money;
    if(this.state.selectActive){
      money=pageInfo.revenue;
    }else{
      /**
       * 返现券
       * @param  {[type]} couponSel.couponTypeDes [description]
       * @return {[type]}                         [description]
       */
      if(strUtil.formatData(couponSel.couponTypeDes)=='FXQ'){
        money=`${pageInfo.revenue}+${couponSel.amount}`;

      }else if(strUtil.formatData(couponSel.couponTypeDes)=='JXQ'){
        /**
         * 加息券
         */
        money=`${strUtil.formatData(pageInfo.revenue)}+${strUtil.toFixed(parseFloat(strUtil.formatData(couponSel.amount))/100*parseFloat(strUtil.formatData(pageInfo.revenue)),2)}`;
      }
    }
    this.setState({revenue:money,selectActive:!this.state.selectActive,couponIndex:-1});
  }
  /**
   * 存储页面信息
   * @return {[type]}     [description]
   */
  savePageInfo=()=>{
    pageInfo.isBirdCoin=isBirdCoin;//鸟币是否抵扣
    //是否选中
    if(this.state.selectActive){
      pageInfo.couponSel=couponSel;
    }else{
      pageInfo.couponSel='';//选中的理财金券
    }
    pageInfo.money=money;
    pageInfo.revenue2=this.state.revenue;//待收收益
    bussinessUtil.setPageInfo(pageInfo);//传递数据

  }
  //点击购买
  btnClick=()=>{

    /**
     * 是否投资免密
     */
    if(isTZ){
      this.savePageInfo();
      window.location.href='../confirm_invest/confirm_invest.html';
    }else{
      let url=`/user/agreement`;
      let param=`sessionKey=${sessionKey}&agreement_type=ZTBB0G00&unbind=0`;
      let successCall=(data)=>{
        this.savePageInfo();
        let phone=bussinessUtil.getMobile();//获取手机号码
        let bigData={
          "index": '1',
          "name": 'mobile',
          "value": phone
        }
        //传入大数据需要的参数
        bigDataUtil.setBigDataNeedParam(bigData);
        //传入大数据标识
        bigDataUtil.setBigDataUserId(phone);
        //传入大数据事件
        bigDataUtil.setBigDataEvent(config.bigDataEvent.invest);
        bussinessUtil.setCurrentPage('/native/confirm_invest/confirm_invest.html');
        window.location.href=data.data.url;
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
  }

	render(){
        /**
         * 处理理财金券
         * @type {Array}
         */
        let coupon;
        let dealCoupon=()=>{
          if(pageInfo.coupons.length==0){
            coupon=<div></div>
          }else{
            let couponList=[];
            let dealCouponList=()=>{
                pageInfo.coupons.map((ele,index)=>{
                   couponList.push(
                        <li className="ite" key={index}  onClick={this.couponClick.bind(this,index)}>
                          <div className="contant">
                            <div className="detail">
                              <p className="t1">{strUtil.formatData(ele.couponName)}</p>
                              <p className="t2">有效期：{strUtil.formatData(ele.couponDate)}</p>
                            </div>
                            <p className="desc">{strUtil.formatData(ele.desc)}</p>
                            <span className={`yesIcon ${index==this.state.couponIndex?'active':''}`}></span>
                          </div>
                        </li>
                   )
                });
            }
            dealCouponList();
            coupon=
              <div>
              <div className="security">
                <div className="change">
                  <div className="t1">
                    <span className="securityIcon"></span>
                    选择理财金券
                  </div>
                  <div className="t2" onClick={this.selectCoupon}>选择其他代金券</div>
                </div>
                <div className="contant" onClick={this.selectCouponSelect}>
                  <div className="detail">
                    <p className="t1">{strUtil.formatData(couponSel.couponName)}</p>
                    <p className="t2">有效期：{couponSel.couponDate}</p>
                  </div>
                  <p className="desc">{strUtil.formatData(couponSel.desc)}</p>
                  <span className={`yesIcon ${this.state.selectActive?'active':''}`}></span>
                </div>
                </div>
                <div className={`alert ${this.state.couponIsShow?'show':'hide'}`}>
                  <h1 className="title">
                    选择返现券
                    <span className="close" onClick={this.closeCoupon}></span>
                  </h1>
                  <ul className="tickitList">
                    { couponList }
                  </ul>
                </div>
                <div className={`cover ${this.state.couponIsShow?'show':'hide'}`}></div>
              </div>
          }
        }
        dealCoupon();
        /*处理理财金券end*/
        /**
         * 处理鸟币抵扣
         * @type {[type]}
         */
        let birdCoin;
        let dealBirdCoin=()=>{
          if(pageInfo.birdCoin==0){
            birdCoin=<div></div>
          }else{
            birdCoin=<li className="item">
              <div className="t1">
                <p>鸟币抵扣<span className="num">{strUtil.formatData(pageInfo.birdCoin)}鸟币抵扣{strUtil.formatData(pageInfo.birdCoin)}元</span></p>
              </div>
              <div className="t2">
                <Switch updateSwitch={this.updateSwitch} switchState={this.state.switchState} />
              </div>
            </li>
          }
        }
        dealBirdCoin();
        /**处理鸟币抵扣end*/
        /**
         */
        return(
            <div className="Container">
              <div className="buyMoney">
                <p className="t1">购买金额</p>
                <p className="t2">{strUtil.formatData(pageInfo.userOrderMoney)}元</p>
              </div>
              <p className="gettime">到期日期：{strUtil.formatData(pageInfo.productExpireDate)}</p>
              { coupon }
              <ul className="list">
                <li className="item">
                  <div className="t1 pay">待收收益</div>
                  <div className="t2 num">{this.state.revenue}元</div>
                </li>
                {birdCoin}
                <li className="item">
                  <div className="t1 pay">实际支付</div>
                  <div className="t2 payMoney">{this.state.payMoney}元</div>
                </li>
              </ul>
              <LoginOver type='2' show={this.state.loginShow} />
              <Loading loading={this.state.isLoading} />
              <Alert text={this.state.alertText} show={this.state.alertShow} />
              <Button btnCss='sure' btnText='确认购买' parentCss='parent' btnClick={this.btnClick}/>
            </div>
            );
  }
}
