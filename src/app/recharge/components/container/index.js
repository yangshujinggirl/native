import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Alert from 'alert';//引入alert组件
import LoginOver from 'loginOver';//引入登录超时组件
import Input from 'input';//引入input组件
import InputGroup from 'inputGroup';//引入input组件
import Button from 'button';//引入按钮组件
import Switch from 'switch';//引入开关组件
import Loading from 'loading';//引入loading组件
import Icon from 'icon';//引入图标组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,bussinessUtil } from 'publicJs';

let cardNo=bussinessUtil.getCardNo();//获取银行卡号
let cardname=bussinessUtil.getCardname();//获取银行名称
let cardInfo={};//绑定银行卡的信息
let isCZ=bussinessUtil.isCZ();//是否充值免密
let sessionKey=bussinessUtil.getSessionKey();
let usableBalance=bussinessUtil.getUsableBalance();//获取用户金额
let rechargeInfo=new Object();//充值页面的信息
//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      alert2Show: false,
      money: '',
      disabled: true,//按钮是否禁用
      moneyIsTrue: false,//金额是否正确
      moneyErrorText: '',//金额错误提示
      isLoading: true,//是否加载中
      isLoading2: false,//是否提交中
      switchState: 'default-off',//默认开关为不打开
      loginShow: false, //是否显示登录超时
    }
	}
  /**
   * 获取银行卡数据
   * @return {[type]} [description]
   */
  getData=()=>{
    let url=`/bank/bankList`;
    let param='';
    let successCall=(data)=>{
      /**
       * 循环银行列表,提前出用户绑定银行的信息
       * @param  {[type]} (ele, index         [description]
       * @return {[type]}       [description]
       */
      data.data.list.map((ele, index)=>{
        if(ele.bankName==cardname){
          cardInfo=ele;//信息存储到银行信息里面
          rechargeInfo=ele;//信息存储到充值页面信息里面
        }
      });

      this.setState({isLoading: false});
    }
    let errorCall=(data)=>{
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
      this.updateText(e,true);//更新弹窗
    }
    dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
  }
  //组件渲染之前
  componentWillMount(){
    let pageName='recharge';
    let pageUrl=window.location.href;
    bussinessUtil.dealPage(pageName,pageUrl);
  }
	//组件完成加载
	componentDidMount(){
		/**
       * 适配屏幕
       */
      bussinessUtil.configScreen();
      this.getData();
	}
  //更新开关的状态
  updateSwitch=(status)=>{
    this.setState({switchState: status});
  }
  //修改提示框内容
  updateText=(text,show)=>{
    this.setState({alertText: text,alertShow: show});
    //如果show为true
    if(show){
      setTimeout(()=>{this.setState({alertShow: false});},config.alertTime);
    }
  }
  //同步用户更新的内容
  updateValue=(text,type,isTrue,errorText)=>{
    switch(type){
      case '1':
        //判断需要验证的规则是否正确
        if(isTrue){
            this.setState({money: text,moneyIsTrue: isTrue,disabled: false,moneyErrorText:errorText}); 
          
        }else{
            this.setState({money: text,moneyIsTrue: isTrue,disabled: true,moneyErrorText:errorText});  
        }
      break;
    }
  }
  /**
   * 存储页面信息
   */
  savePageInfo=()=>{
    rechargeInfo.usableBalance=usableBalance;//用户余额
    rechargeInfo.userRechargeMoney=this.state.money;//用户充值金额
    rechargeInfo.cardNo=cardNo;//充值卡号
    bussinessUtil.setPageInfo(rechargeInfo);//传递信息到确认页面
  }
  //充值按钮点击事件
  btnClick=()=>{
    //判断错误提示是否都为空
    /**
     * 验证金额错误提示是否存在
     * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
     * @return {[type]}                                            [description]
     */
    if(strUtil.isEmpty(this.state.moneyErrorText)){
      bussinessUtil.setOtherPage(bussinessUtil.getCurrentPage());//存入充值之前的页面
      /**
       * 如果已经充值免密或者用户没有选中免密,则跳转确认充值页面
       * @param  {Boolean} isCz [description]
       * @return {[type]}       [description]
       */
      if(isCZ){
        this.savePageInfo();
        window.location.href='../confirm_recharge/confirm_recharge.html';
      }else{
        if(this.state.switchState=='default-off'||this.state.switchState=='off'){
          this.setState({isLoading2: true});
          let url=`/user/recharge`;
          let param=`sessionKey=${sessionKey}&orderAmount=${this.state.money}`;
          let successCall=(data)=>{
            this.setState({isLoading2: false});
            window.location.href=data.data.url;
          }
          let errorCall=(data)=>{
            this.setState({isLoading2: false});
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
        }else{
          //跳转充值免密页面
          this.bindCZ();
        }
        
      }
      
    }else{
      this.updateText(this.state.moneyErrorText,true);
    }  
  }

  /**
   * 签约充值免密
   */
   bindCZ=()=>{
    this.setState({isLoading2:true});
    let url=`/user/agreement`;
    let param=`agreement_type=ZCZP0800&unbind=0&sessionKey=${sessionKey}`;
    let successCall=(data)=>{
      this.savePageInfo();
      bussinessUtil.setCurrentPage('/native/confirm_recharge/confirm_recharge.html');//当前页面传入session
      this.setState({isLoading2:false});
      window.location.href=data.data.url;
    }
    let errorCall=(data)=>{
      /**
       * 如果resultCode等于10000006,则弹出去登录的弹窗,否则就是正常的提示弹窗
       */
        if(data.resultCode==config.loginTimeOver){
            this.setState({isLoading2: false,loginShow: true});
        }else{
          let error=dataUtil.getMessage(data.resultCode);
          this.updateText(error,true);//更新弹窗
        } 
    }
    let errorCall2=(e)=>{
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
      this.setState({money: '',moneyIsTrue: false,disabled:true});
      break;      
    }
  }

  /**
   * 显示免密充值的介绍
   */
  showAlert=()=>{
    this.setState({alert2Show:true});
  }
  /**
   * 隐藏免密充值的介绍
   */
  hideAlert=()=>{
    this.setState({alert2Show:false});
  }

	render(){
        //判断按钮是否可用
        var dealBtn=()=>{
          if(this.state.disabled){
            return < Button type="disabled" disabled parentCss='parent' btnCss='sure' btnText='充值' btnClick={this.btnClick} />
          }else{
            return < Button type="hollow" parentCss='parent' btnCss='sure' btnText='充值'  btnClick={this.btnClick} />
          }
        }
        var btn=dealBtn();
        /**
         * 处理switch开关
         */
        let dealSwitch=()=>{
          if(isCZ){
            return <div></div> 
          }else{
            return <div className="open">
                <div className="t1">开通免密支付
                  <span className='icon-info' onClick={this.showAlert}></span>
                </div>
                <div className="t2">
                <Switch updateSwitch={this.updateSwitch} switchState={this.state.switchState} />
                </div>
            </div>
          }
        }
        let CZ=dealSwitch();
        /**
         * 处理充值内容
         * @return {[type]} [description]
         */
        let dealCon=()=>{
          if(this.state.isLoading){
             return <div> 
             <Loading loading={this.state.isLoading} />
             <Alert text={this.state.alertText} show={this.state.alertShow} />
             </div>         
          }else{
             return <div className="Container">
              <div className="top">
                <div className="bank">
                  <div className="t1">
                    <img src={strUtil.formatData(cardInfo.logoUrl)} alt="" className="bankIcon"/>
                    <span className="bankName">{cardInfo.bankName}</span>
                  </div>
                  <div className="t2">
                    <p>尾号{strUtil.formatData(cardNo).substring(strUtil.formatData(cardNo).length-4,strUtil.formatData(cardNo).length)}</p>
                  </div>
                </div>
                <p className="limit">单笔限额{cardInfo.chargeTimeLimit}万元，单日限额{cardInfo.chargeDateLimit}万元</p>
              </div>

              <p className="balance">账户余额：{usableBalance}元</p>
              <InputGroup className='recharge'>
                <span className="moneyNum">充值金额</span>
                <Input type="tel" className='moneyInput' 
                errorTip='请输入有效金额' startMoney='1' startMoneyTip='最小充值金额为1元'
                endMoney={parseFloat(cardInfo.chargeTimeLimit)*10000} endMoneyTip={`最大充值金额为${cardInfo.chargeTimeLimit}万元`}
                dataType='money' index='1' value={this.state.money}
                updateValue={this.updateValue} placeholder='请输入充值金额' />
                <Icon iconType='del' iconCss={`icon-type ${this.state.moneyIsTrue?'show-inline':'hide-hidden'}`} 
                title='1' onClick={this.cleanValue} />
              </InputGroup>
              <Alert text={this.state.alertText} show={this.state.alertShow} />      
              <LoginOver type='2' show={this.state.loginShow} />
              <Loading loading={this.state.isLoading2} />
              <Alert  type='2'  show={this.state.alert2Show}
              title='什么是免密充值'  btn1Text='确定' btn1Click={this.hideAlert}>
               <p className='alert-content'>开通免密充值后，以后每次充值将无需再输入支付密码。由于领投鸟理财采用资金同卡进出制度，这将充分确保您的资金安全。</p>
               <p className='alert-content'>您也可以在账户设置中随时关闭该功能。</p>
              </Alert>
              { CZ }
              { btn }
            </div>
          }
        }
        let con=dealCon();
        return(
            <div>
            {con}
            </div>
            );
  }
}