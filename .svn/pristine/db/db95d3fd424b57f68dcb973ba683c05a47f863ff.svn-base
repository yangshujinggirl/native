import React,{Component} from 'react';//引入react
import './index.scss?l';//引入css文件
import {bussinessUtil} from 'publicJs';

//组合组件
export default class Container extends Component{
  constructor(props){
    super(props);
  }
  //组件完成加载
  componentDidMount(){
    /**
       * 适配屏幕
       */
      bussinessUtil.configScreen();
  }
  render(){
    return(
      <div className="newregister">
        <div className="banner"></div>
        <div className="thousands">
          <p className="thousands-cont">
            1.凡在领投鸟注册,即可获得 10000 元体验金。 <br/>
            2.体验金可用于投资体验标,到期后将获得13.18 鸟币,鸟币参与投资后可提现。 <br/>
            3.体验金券有效期 90 天,可在“理财金券”中查看。
          </p>
        </div>
        <div className="security">
          <div className="bigicon">
            <span className="icon new1"></span>
            <span className="icon new2"></span>
            <span className="icon new3"></span>
            <p className="security-cont">返现券投资时使用(不含新手标),一次只能使用一张,投资到期后与收益一起返现。 
              红包自领取之日起 30 天内有效,可在“理财金券”中查看。</p>
          </div>
        </div>
        <div className="double">
          <div className="first">
            <span className="first1">
              <div className="prod">
                <div className="filed one">
                  <div className="big">18<span className="teshu">%</span></div>
                  <div className="small">年化收益率</div>
                </div>
                <div className="item">
                  <div className="big">3<span className="teshu">天</span></div>
                  <div className="small">投资期限</div>
                </div>
              </div>
              <div className="qitou">100元起投，已有17人购买</div>
            </span>
            <span className="first1 juli">
              <div className="prod">
                <div className="filed one">
                  <div className="big">15<span className="teshu">%</span></div>
                  <div className="small">年化收益率</div>
                </div>
                <div className="item">
                  <div className="big">30<span className="teshu">天</span></div>
                  <div className="small">投资期限</div>
                </div>
              </div>
              <div className="qitou">500元起投，已有5人购买</div>
            </span>
          </div>
          <div className="new2-pk"></div>
          <div className="footer">新手专享标为首次投资专享,凡投资过其他非新手标类产品,不再享有此特权。 平台设有两个新手标,投资者只可选择其中一个投资。</div>
        </div>
        <div className="last">本活动最终解释权归领投鸟平台所有,如有疑问请致电<br/> 400-999-9980,或咨询“领投鸟”公众号。<br/><br/></div>
      </div>
    )
  }
}