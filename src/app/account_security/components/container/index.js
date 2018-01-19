import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Button from 'button';//引入button组件
import Alert from 'alert';//引入alert组件
import Loading from 'loading';//引入loading组件
import Icon from 'icon';//引入图标组件
import LoginOver from 'loginOver';//引入登录超时组件
import Input from 'input';//引入input组件
import InputGroup from 'inputGroup';//引入input组件
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,bussinessUtil,sessionUtil } from 'publicJs';
var sessionKey=sessionUtil.get('sessionKey');//获取sessionkey
//组合组件

export default class Container extends Component{
  constructor(props){
    super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      isLoading: true,//loading状态
      isLoading2: false,//loading状态
      loginShow: false, //是否显示登录超时
      disabled: true,//按钮状态
      couponCode: '',//理财金券兑换码
      couponCodeIsTrue: '',//兑换码是否正确
      couponCodeErrorText: '',//兑换码错误提示
      couponList:[],//金券列表
    }
  }
  //组件完成加载
  componentDidMount(){
    /**
       * 适配屏幕
       */
    bussinessUtil.configScreen();
    this.getData();
  }
  //组件渲染之前
  componentWillMount(){
    let pageName='account_sercurity';
    let pageUrl=window.location.href;
    bussinessUtil.dealPage(pageName,pageUrl);
  }
  /**
   * 获取理财金券数据
   * @return {[type]} [description]
   */
  getData=()=>{
    let url=`/user/account/myFinancialCoupon`;
    let param=`sessionKey=${sessionKey}`;
    let successCall=(data)=>{
      this.setState({isLoading: false,couponList:data.data.coupons});
    }
    let errorCall=(data)=>{

      /**
       * 如果resultCode等于10000006,则弹出去登录的弹窗,否则就是正常的提示弹窗
       */
        if(data.resultCode==config.loginTimeOver){
            this.setState({loginShow: true,isLoading:false});
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
  //同步用户更新的内容
  updateValue=(text,type,isTrue,errorText)=>{
    switch(type){
      case '1':
        //判断需要验证的规则是否正确
        if(isTrue){
          this.setState({couponCode: text,couponCodeIsTrue: isTrue,couponCodeErrorText:errorText,disabled: false});
        }else{
          this.setState({couponCode: text,couponCodeIsTrue: isTrue,couponCodeErrorText:errorText,disabled: true});
        }
      break;
    }
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
   * btnClick 兑换事件
   */
  btnClick=()=>{
    this.setState({isLoading2: false});
    let url=`/user/exchangeCode/exchange`;
    let param=`sessionKey=${sessionKey}&code=${this.state.couponCode}`;
    let successCall=(data)=>{
      this.updateText('兑换成功',true);//更新弹窗
      this.setState({isLoading2: false,couponList:data.data.coupons.concat(this.state.couponList)});

    }
    let errorCall=(data)=>{

      /**
       * 如果resultCode等于10000006,则弹出去登录的弹窗,否则就是正常的提示弹窗
       */
        if(data.resultCode==config.loginTimeOver){
            this.setState({loginShow: true,isLoading:false});
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
  /**
   * 清空值
   * @return {[type]} [description]
   */
  cleanValue=(e)=>{
    switch(e.target.title){
      case '1':
      this.setState({couponCode: '',couponCodeIsTrue: false,disabled:true});
      break;
    }
  }
  render(){
    var dealBtn=()=>{
      if(this.state.disabled){
        return < Button  btnCss='but disabled' disabled btnText='兑换'/>
      }else{
        return < Button  btnCss='but' btnClick={this.btnClick} btnText='兑换'/>
      }

    }
    var btn=dealBtn();
    var con;
    var dealCon=()=>{
      if(this.state.isLoading){
        con=<Loading loading={this.state.isLoading} />
      }else{
        var couponList=[];
        var dealCouponList=()=>{

          if(!strUtil.isEmpty(this.state.couponList)){
            this.state.couponList.map((ele,index)=>{
            var couponState;
            var dealCouponState=()=>{
              if(ele.status=='YX'){
                couponState=<div></div>;
              }else if(ele.status=='SYZ'){
                couponState=<div className='expired1'></div>
              }else if(ele.status=='GQ'){
                couponState=<div className='expired2'></div>
              }
            }
            dealCouponState();
            couponList.push(
              <div className={`return-tickets ${ele.status=='YX'?'':'return-tickets2'}`} key={index}>
              <span className="tickets-left">
                <div className="item">{ele.amount}<span class="samll">{ele.activityType=='加息券'?'%':'元'}</span></div>
                <div className="filed">{ele.activityType}</div>
              </span>
              <span className="tickets-right">
                <div className="tickets-jine">{ele.couponName}</div>
                <div className="cont">{ele.desc}</div>
                <div className="expirydate">有效期至：{ele.couponDate}</div>
              </span>
              {couponState}
            </div>
              )
            });
          }
        }
        dealCouponList();
        con=<div className="account-security">
        <div className="security-content">
          <div className="security-top">
          <InputGroup className='wrap-input'>
                <Icon iconType='telephone' iconCss='icon-type' />
                <Input type="text" className='input' placeholder='请输入理财金券兑换码'
                  dataType='couponCode' index='1' value={this.state.couponCode}
                  updateValue={this.updateValue} />
                <Icon iconType='del' iconCss={`icon-type ${this.state.couponCodeIsTrue?'show-inline':'hide-hidden'}`}
                title='1' onClick={this.cleanValue} />
          </InputGroup>
            { btn }
          </div>
          <div className="security-bottom">
            {couponList}
          </div>
        </div>
        <Loading loading={this.state.isLoading2} />
        <Alert text={this.state.alertText} show={this.state.alertShow} />
        <LoginOver type='2' show={this.state.loginShow} />
      </div>
      }
    }
    dealCon();
    return(
      <div>
      {con}
      </div>
    )
  }
}
