import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Alert from 'alert';//引入alert组件
import LoginOver from 'loginOver';//引入登录超时组件
import Input from 'input';//引入input组件
import InputGroup from 'inputGroup';//引入input组件
import Icon from 'icon';//引入图标组件
import Loading from 'loading';//引入loading组件
import Button from 'button';//引入button组件
import Select from 'select';//引入select组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,dataUtil,bussinessUtil,sessionUtil,bigDataUtil } from 'publicJs';
var sessionKey=sessionUtil.get('sessionKey');//获取sessionkey
var userName=bussinessUtil.getUsername();//获取用户名称
//组合组件
export default class Container extends Component{
  //构建函数
  constructor(props){
    super(props);
    this.state={
      bankdata:[],//银行列表
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      bankcard: '',//银行卡号
      disabled: true,//按钮是否禁用
      bankcardIsTrue: false,//银行卡号是否正确
      bankcardErrorText: '',//银行卡号错误提示
      bankName:'',//银行名称
      bankMessage: '',//银行提示
      isLoading: false//是否加载中
    }
  }

  //组件渲染之前
  componentWillMount(){
    let pageName='user_card';
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
            this.setState({bankcard: text,bankcardIsTrue: isTrue,bankcardErrorText:errorText,disabled: false});

        }else{
            this.setState({bankcard: text,bankcardIsTrue: isTrue,bankcardErrorText:errorText,disabled: true});
        }
      break;
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
      this.setState({bankdata:data.data.list,bankName:data.data.list[0].bankName,
        bankCode:data.data.list[0].bankCode,bankMessage:data.data.list[0].bankMessage});
    }
    let errorCall=(data)=>{
      let error=dataUtil.getMessage(data.resultCode);
      this.updateText(error,true);//更新弹窗
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
      this.setState({bankcard: '',bankcardIsTrue: false,disabled:true});
      break;
    }
  }
  /**
   * 银行选择事件
   * @return {[type]} [description]
   */
  bankChange=(e)=>{
    /**
     * 更新用户选择的银行名称
     * @type {[type]}
     */
    let bankName=e.target.value;
    let bankMessage=e.target.children[e.target.selectedIndex].getAttribute('data-message');
    this.setState({bankName:bankName,bankMessage:bankMessage});
  }

  /**
   * 提交银行信息
   * @return {[type]} [description]
   */
  btnClick=()=>{
    this.setState({isLoading: true});
    let url=`/user/bindBankCard`;
    let param=`sessionKey=${sessionKey}&belongBank=${this.state.bankName}&cardId=${this.state.bankcard}`;
    let successCall=(data)=>{
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
      bigDataUtil.setBigDataEvent(config.bigDataEvent.bindCard);
      this.setState({isLoading: false});
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
      this.updateText(e,true);//更新弹窗
    }
    dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
  }
  render(){
    //判断按钮是否可用
    var dealBtn=()=>{
      if(this.state.disabled){
        return < Button type="disabled" btnCss='button' btnText='下一步' />
      }else{
        return < Button btnClick={this.btnClick} type="hollow" btnCss='button' btnText='下一步' />
      }
    }
    var btn=dealBtn();

    let option=[];
    let dealOption=()=>{
      this.state.bankdata.map((ele)=>{
        option.push(<option value={ele.bankName} data-bankcode={ele.bankCode} data-message={ele.bankMessage} key={ele.id}>{ele.bankName}</option>);
      });
    }
    dealOption();
    return(
      <div className="user-card">
        <div className="card-top">
          <div className="name">
            <span className="holdCrd">持卡人姓名：</span>
            <span className="holdName">{strUtil.formatStr(userName,'name')}</span>
          </div>
          <div className="points"><span className="icon"></span>{this.state.bankMessage}</div>
        </div>
        <div className="card-input">
          <div className="wrap-input">
            <Select onChange={this.bankChange} keyName='bankname' className='select' >
              { option }
            </Select>
            <span className="list-icon"></span>
          </div>
          <InputGroup className='wrap-input'>
              <Input type="text" className='input'
                dataType='bankcard' index='1' value={this.state.bankcard}
                updateValue={this.updateValue} />
              <Icon iconType='del' iconCss={`icon-type ${this.state.bankcardIsTrue?'show-inline':'hide-hidden'}`}
              title='1' onClick={this.cleanValue} />
          </InputGroup>
          { btn }
          <div className="card_last">
            <div className="card_icon"></div>
            <div className="card_font">仅支持储蓄卡、借记卡，不支持信用卡；<br/>
              手机App支持的银行有：工商银行、农业银行、建设银行、中国银行、光大银行、兴业银行、民生银行、华夏银行、浦发银行、交通银行、广发银行、中信银行、招商银行、平安银行。<br/>其他银行可以通过领投鸟理财网页版进行使用；<br/>
              如果充值金额超过银行卡每日快捷支付额度限制，您可以访问领投鸟理财网页版，使用网银进行充值；<br/>
              领投鸟理财网页版地址：www.lingtouniao.com<br/>
              如遇其他问题，可拨打服务热线400-9999-980</div>
          </div>
        </div>
        <Alert text={this.state.alertText} show={this.state.alertShow} />
        <LoginOver type='2' show={this.state.loginShow} />
        <Loading loading={this.state.isLoading} />
      </div>
    )
  }
}
