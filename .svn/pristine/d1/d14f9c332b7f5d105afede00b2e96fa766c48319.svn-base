import React,{Component} from 'react';//引入react
import './index.scss?l';//引入样式
export default class Info extends Component{
  //构建函数
  constructor(props){
    super(props);
  }

  //组件完成更新
  componentDidUpdate(){
  }
  
  render(){
    var copyRightStyles="sameCopy "+this.props.copyRightStyles;
    var whyStyles="sameWhy "+this.props.whyStyles;
    var headStyles="sameHead "+this.props.headStyles;
    return(
      <div className="info">
        <div className="moneyIcon"></div>
        <div className="wrapInfo">
          <div className={whyStyles}>为什么选择领投鸟？</div>
          <p className="introduce">
            领投鸟（lingtouniao.com）是上海吾悠互联网金融信息服务有限公司打造的互联网金融平台，为上海金融信息行业协会理事单位，专注于不动产理财。
          </p>
          <ul className="list">
            <li className="item">
              <img src="../image/extension/extision_icon2.png" alt="" className="bigIcon"/>
              <div className="wind">
                <h1 className={headStyles}>风控保障</h1>
                <p className="text">标的信息披露，透明可查，<br/>百人风控团队全面审核。</p>
              </div>
            </li>
            <li className="item">
              <img src="../image/extension/extision_icon3.png" alt="" className="bigIcon"/>
              <div className="wind">
                <h1 className={headStyles}>资金安全</h1>
                <p className="text">
                  项目由第三方支付机构联动<br/>
                  优势协同银行存管，平台不<br/>
                  触碰资金。</p>
              </div>
            </li>
            <li className="item">
              <img src="../image/extension/extision_icon4.png" alt="" className="bigIcon"/>
              <div className="wind">
                <h1 className={headStyles}>灵活高收益</h1>
                <p className="text">
                  期限灵活多样，资金零闲置，<br/>
                  8.8%-15%高年化收益，<br/>
                  100元起。
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className={copyRightStyles}>
          <p>上海吾悠互联网金融信息服务有限公司</p>
          <p className='serveNum'>服务电话：<a href="tel:400-999-9980" className="num">400-999-9980</a></p>
          <p>投资有风险，入市需谨慎</p>
        </div>
      </div>
    )
  }
}