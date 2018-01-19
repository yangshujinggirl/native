import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Alert from 'alert';//引入alert组件
import LoginOver from 'loginOver';//引入登录超时组件
import Input from 'input';//引入input组件
import InputGroup from 'inputGroup';//引入input组件
import Button from 'button';//引入按钮组件
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
let pageInfo={};//页面信息
let sessionKey=bussinessUtil.getSessionKey();
let usableBalance=parseFloat(bussinessUtil.getUsableBalance());//获取用户金额
let freeCounter=bussinessUtil.getFreeCounter();//获取提现次数
let birdCoin=parseFloat(bussinessUtil.getBirdCoin());//获取鸟币
let serviceCharge=0;//手续费
//组合组件
export default class Container extends Component{
	constructor(props){
		super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      money: '',//用户输入金额
      currentMoney: 0,//实际金额
      disabled: true,//按钮是否禁用
      moneyIsTrue: false,//金额是否正确
      moneyErrorText: '',//金额错误提示
      isLoading: true,//是否加载中
      isLoading2: false,//是否提交中
      loginShow: false, //是否显示登录超时
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
  //初始化手续费
  initServiceCharge=()=>{
    if(freeCounter=='0'&&birdCoin<2){
      serviceCharge=2;
    }
  }
  //组件渲染之前
  componentWillMount(){
    let pageName='withdraw';
    let pageUrl=window.location.href;
    bussinessUtil.dealPage(pageName,pageUrl);
    this.initServiceCharge();//初始化手续费
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
          pageInfo=ele;//信息存储到提现页面信息里面
        }
      });

      this.setState({isLoading: false});
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
      this.updateText(e,true);//更新弹窗
    }
    dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
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
   * 清空值
   * @return {[type]} [description]
   */
  cleanValue=(e)=>{
    switch(e.target.title){
      case '1':
      this.setState({money: '',moneyIsTrue: false,disabled:true,currentMoney:0});
      break;      
    }
  }
  //同步用户更新的内容
  updateValue=(text,type,isTrue,errorText)=>{
    switch(type){
      case '1':
        //判断需要验证的规则是否正确
        if(isTrue){
            /**
             * 获取实际金额
             * @type {[type]}
             */
            let money=this.updateCurrentMoney(parseFloat(text));
            //提现金额大于实际金额
            if(money>usableBalance){
              this.updateText('提现金额不能大于账户余额',true);//更新弹窗
              return false;
            }
            this.setState({money: text,moneyIsTrue: isTrue,currentMoney:money,disabled: false,moneyErrorText:errorText});       
        }else{
            this.setState({money: text,moneyIsTrue: isTrue,disabled: true,currentMoney:0,moneyErrorText:errorText});  
        }
      break;
    }
  }

  /**
   * 更新用户实际金额
   */
  updateCurrentMoney=(money)=>{
    if(strUtil.isNum(money)){
      /**
       * 没有体现次数了
       * @param  {[type]} freeCounter [description]
       * @return {[type]}             [description]
       */
      if(freeCounter==0){
        /**
         * 鸟币余额小于2
         */
        if(birdCoin<2){
          /**
           * 判断体现金额是否小于账户余额
           */
          if(money<=usableBalance){
            /**
             * 提现金额加上2元手续费大于账号余额,则从提现金额中扣除
             * @param  {[type]} money [description]
             * @return {[type]}       [description]
             */
            if((money+2)>=usableBalance){
              return money-2;
            }else{
              return money;
            }
          }else{
            return money;
          }
        }else{
          return money;
        }
      }else{
        return money;
      }
    }else{
      return 0;
    }
  }
  /**
   * 提现全部
   */
  getAll=()=>{
    let money=this.updateCurrentMoney(usableBalance);
    this.setState({money: usableBalance,moneyIsTrue: true,currentMoney:money,disabled: false,moneyErrorText:''});  
  }
  //点击提现
  btnClick=()=>{
    //判断错误提示是否都为空
    /**
     * 验证金额错误提示是否存在
     * @param  {[type]} strUtil.isEmpty(this.state.phoneErrorText) [description]
     * @return {[type]}                                            [description]
     */
    if(strUtil.isEmpty(this.state.moneyErrorText)){
      pageInfo.currentMoney=this.state.currentMoney;//实际到账金额
      pageInfo.money=this.state.money;//提现金额
      pageInfo.freeCounter=freeCounter;//提现次数
      pageInfo.serviceCharge=serviceCharge;//提现手续费
      pageInfo.cardNo=cardNo;//银行卡号
      //判断鸟币
      if(freeCounter=='0'&&birdCoin>2){
        pageInfo.birdCoin=2;
      }else{
        pageInfo.birdCoin=0;
      }
      bussinessUtil.setPageInfo(pageInfo);
      window.location.href='../confirm_withdraw/confirm_withdraw.html';
    }else{
      this.updateText(this.state.moneyErrorText,true);
    }
   
  }
	render(){
      //判断按钮是否可用
        let dealBtn=()=>{
          if(this.state.disabled){
            return < Button type="disabled" disabled parentCss='parent' btnCss='sure' btnText='提现' btnClick={this.btnClick} />
          }else{
            return < Button type="hollow" parentCss='parent' btnCss='sure' btnText='提现'  btnClick={this.btnClick} />
          }
        }
        let btn=dealBtn();
        let dealCon=()=>{
          if(this.state.isLoading){
             return <div> 
                    <Loading loading={this.state.isLoading} />
                    </div>         
          }else{
            return <div className="Container">
              <div className="bank">
                <div className="t1">
                  <img src={strUtil.formatData(cardInfo.logoUrl)} alt="" className="bankIcon"/>
                  <span className="bankName">{strUtil.formatData(cardInfo.bankName)}</span>
                </div>
                <div className="t2">
                  <p>尾号{strUtil.formatData(cardNo).substring(strUtil.formatData(cardNo).length-4,strUtil.formatData(cardNo).length)}</p>
                </div>
              </div>
              <p className="balance">账户余额：{usableBalance}元<span className="all" onClick={this.getAll}>全部提现</span></p>
              <InputGroup className='recharge'>
                <span className="moneyNum">提现金额</span>
                <Input type="tel" className='moneyInput' 
                errorTip='请输入有效金额' startMoney='1' startMoneyTip='最小提现金额为1元'
                endMoney={usableBalance} endMoneyTip={`最大提现金额为${usableBalance}元`}
                dataType='money' index='1' value={this.state.money}
                updateValue={this.updateValue} placeholder='请输入提现金额' />
                <Icon iconType='del' iconCss={`icon-type ${this.state.moneyIsTrue?'show-inline':'hide-hidden'}`} 
                title='1' onClick={this.cleanValue} />
              </InputGroup>
              <div className="service">
                <p className="em">手续费：{serviceCharge}元，</p>
                <p className="em">实际到账金额：<span className="high">{this.state.currentMoney}</span>元</p>
              </div>
              {btn}
              <div className="tips">
                <p className="content">
                  您还有{freeCounter}次免费提现机会，默认在没有免费提现机会时用鸟币抵扣，没有鸟币，提现扣2元人民币/次,手续费优先从账户剩余的可用余额中扣除，若不够，则从到账金额中扣除，可能会使到账金额小于提现金额
                </p>
              </div>
              <Alert text={this.state.alertText} show={this.state.alertShow} />      
              <LoginOver type='2' show={this.state.loginShow} />
              <Loading loading={this.state.isLoading2} />
            </div>
          }
        }
        let con=dealCon();
        return(
          <div>{con}</div>    
        );
  }
}