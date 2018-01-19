import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Button from 'button';//引入button组件
import Alert from 'alert';//引入alert组件
import Loading from 'loading';//引入loading组件
import NoInfo from 'noInfo';//引入noInfo组件
import LoginOver from 'loginOver';//引入登录超时组件
import ScrollLoad from 'scrollLoad';//引入上拉加载组件
/**
 * 引入fetch
 */
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
      loginShow: false, //是否显示登录超时
      investments: [],//持有产品列表
      status: 2,//tap状态,默认持有中
      isLoading2:false,//上拉加载状态
      noInfoShow: false,//无数据是否显示
      isNeedLoading: true,//是否需要加载数据
    }
  }
  //组件完成加载
  componentDidMount(){
      /**
       * 适配屏幕
       */
      bussinessUtil.configScreen();
      this.getData(0,2,true);
  }
  //组件渲染之前
  componentWillMount(){
    let pageName='account_invest';
    let pageUrl=window.location.href;
    bussinessUtil.dealPage(pageName,pageUrl);
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
   * 获取投资列表数据
   * @return {[type]} [description]
   */
  getData=(currentPage,status=this.state.status,isStart=false)=>{
    if(!isStart){
      this.setState({isLoading2: true});
    }
    let url=`/user/account/myInvestment`;
    let param=`sessionKey=${sessionKey}&currentPage=${currentPage}&pageSize=${config.pageSize}&status=${status}`;
    let successCall=(data)=>{
      if(isStart){
        if(data.data.investments.length==0){
          this.setState({isLoading: false,noInfoShow:true});
        }else{
            this.setState({isLoading: false,investments:this.state.investments.concat(data.data.investments)});
        }
      }else{
        if(data.data.investments.length<config.pageSize){
          if(data.data.investments.length==0&currentPage==0){
            this.setState({isLoading2: false,noInfoShow:true});
          }else{
            this.setState({isLoading2: false,isNeedLoading:false,investments:this.state.investments.concat(data.data.investments)});
          }     
        }else{
          this.setState({isLoading2: false,investments:this.state.investments.concat(data.data.investments)});
        }
        
      }
      
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
   * tap点击事件
   * @return {[type]} [description]
   */
  tapClick=(e)=>{
    let index=e.target.title;
    if(this.state.status!=index){ 
      this.setState({status: index,investments:[],isNeedLoading:true,noInfoShow:false});
      this.getData(0,index); 
    }
  }
  render(){
    let con;
    let dealCon=()=>{
      if(this.state.isLoading){
             con=<Loading loading={this.state.isLoading} />      
      }else{
        let investList=[];
        let dealList=()=>{
          this.state.investments.map(function(ele, index) {
            investList.push(
              <li className="hold" key={index}>
                  <div className="title">{strUtil.formatData(ele.productName)}<span className="list-icon"></span></div>
                  <div className="detail">
                      <div className="profit">
                        <div className="field">{strUtil.formatData(ele.orderAmount)}</div>
                        <div className="caption">投资金额</div>
                      </div>
                      <div className="period">
                        <div className="field teshu">{strUtil.formatData(ele.orderRevenue)}</div>
                        <div className="caption">到期收益(元)</div>
                      </div>
                      <div className="threshold">
                        <div className="field">{strUtil.formatData(ele.annualIncomeText)}</div>
                        <div className="caption">年化收益</div>
                      </div>
                  </div>
                  <div className="time">交易时间：{strUtil.formatData(ele.orderDate)} &nbsp; &nbsp;到期日期：{strUtil.formatData(ele.expireDate)}</div>
              </li>
            )
          })
        }
        dealList();
        con=<div className="Container">
          <div className="invest_top">
            <div title='1' className={`caption ${this.state.status=='1'?'current':''}`} onClick={this.tapClick}>投标中</div>
            <div title='2' className={`caption ${this.state.status=='2'?'current':''}`} onClick={this.tapClick}>持有中</div>
            <div title='4' className={`caption ${this.state.status=='4'?'current':''}`} onClick={this.tapClick}>还款中</div>
            <div title='3' className={`caption ${this.state.status=='3'?'current':''}`} onClick={this.tapClick}>已还款</div>
          </div>
          <ul className="invest_list">
              {investList}
          </ul>
          <LoginOver type='2' show={this.state.loginShow} />
          <Alert text={this.state.alertText} show={this.state.alertShow} />   
          <ScrollLoad  getData={this.getData} isNeedLoading={this.state.isNeedLoading} />
          <Loading loading={this.state.isLoading2} />  
          <NoInfo show={this.state.noInfoShow} />
      </div>
      }
    }
    
    dealCon();
    return(
      <div>
      {con}
      </div>
    );
  }
}