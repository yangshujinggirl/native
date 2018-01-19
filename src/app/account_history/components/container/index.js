import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import Loading from 'loading';//引入loading组件
import Alert from 'alert';//引入alert组件
import LoginOver from 'loginOver';//引入登录超时组件
import NoInfo from 'noInfo';//引入noInfo组件
import ScrollLoad from 'scrollLoad';//引入上拉加载组件
/**
 * 引入fetch
 */
import 'fetchJs';
import 'whatwg-fetch';
import { config,strUtil,bussinessUtil,sessionUtil,dataUtil,urlUtil,dateUtil } from 'publicJs';
var id=urlUtil.getSearch('id');//产品id
var sessionKey=sessionUtil.get('sessionKey');//获取sessionkey
var prodHistory;//产品购买记录
var pageSize=15;
//组合组件
export default class Container extends Component{
  constructor(props){
    super(props);
    this.state={
      alertText: '',//提示框文本
      alertShow: false,//提示框默认不显示
      isLoading: true,//loading状态
      loginShow: false, //是否显示登录超时
      isLoading2:false,//上拉加载状态
      currentPage: 0,//当前页
      isNeedLoading: true,//是否需要加载数据
      purchaseHistoryList: [],//记录数据
    }
  }
  //组件完成加载
  componentDidMount(){
    /**
     * 适配屏幕
     */
    bussinessUtil.configScreen();
    this.getData(0);
  }
  /**
   * 获取购买记录
   * @return {[type]} [description]
   */
  getData=(currentPage,isStart=false)=>{
    if(!isStart){
      this.setState({isLoading2: true});
    }
    let url=`/product/purchasehistory`;
    let param=`sessionKey=${sessionKey}&productId=${id}&currentPage=${currentPage}&pageSize=${pageSize}`;
    let successCall=(data)=>{
        this.setState({isLoading: false});
        if(data.data.purchaseHistoryList.length<pageSize){
          if(data.data.purchaseHistoryList.length==0&currentPage==0){
            this.setState({isLoading2: false,noInfoShow:true});
          }else{
            this.setState({isLoading2: false,isNeedLoading:false,purchaseHistoryList:this.state.purchaseHistoryList.concat(data.data.purchaseHistoryList)});
          }
        }else{
          this.setState({isLoading2: false,purchaseHistoryList:this.state.purchaseHistoryList.concat(data.data.purchaseHistoryList)});
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
      this.updateText(e,true);//更新弹窗
    }
    dataUtil.getData(url,'POST',param,successCall,errorCall,errorCall2);
  }
  render(){
    let dealCon=()=>{
      if(this.state.isLoading){
        return <Loading loading={this.state.isLoading} />
      }else{
        let dealData=()=>{
            if(strUtil.isEmpty(this.state.purchaseHistoryList)){
              return <div></div>
            }else{
              let historys=[];
              let dealHistory=()=>{
                this.state.purchaseHistoryList.map((ele, index)=>{
                  historys.push(
                    <li className="under" key={index}>
                      <span className="telephone">{strUtil.formatData(ele.userName)}</span>
                      <span className="money">{strUtil.formatData(ele.orderAmount)}</span>
                      <span className="time">{dateUtil.formatDate('MM-dd hh:mm',strUtil.formatData(ele.orderDate))}</span>
                    </li>
                  )
                })
              }
              dealHistory();
              return(
                <ul>
                  {historys}
                </ul>
              )
            }
        }
        let data=dealData();
        return(
        <div className="account-history">
        <div className="history-content">
          <div className="cont-top">
            <div className="item">投资人</div>
            <div className="item">投资金额</div>
            <div className="item">投资时间</div>
          </div>
          <div className="cont-bottom">
            { data }
          </div>
        </div>
        <ScrollLoad  getData={this.getData} isNeedLoading={this.state.isNeedLoading} />
        <Loading loading={this.state.isLoading2} />
        <Alert text={this.state.alertText} show={this.state.alertShow} />
        <LoginOver type='2' show={this.state.loginShow} />
        <NoInfo show={this.state.noInfoShow} />
      </div>
      )
      }
    }
    let con=dealCon();
    return(
      <div>
      { con }
      </div>
    )
  }
}
