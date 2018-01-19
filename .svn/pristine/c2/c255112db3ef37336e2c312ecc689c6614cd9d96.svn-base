import React,{Component} from 'react';//引入react
import './index.scss?l'//引入样式
import { strUtil } from 'publicJs';
/**
 * 验证为空：required 默认为验证
 * 为空提示：emptyTip
 * 错误提示：errorTip
 * 表单类型：dataType
 * username:只能输入2-4个中文
 * password:只能输入6-18个字母与数字的组合,没有特殊字符
 * telephone:手机号码
 * identity: 身份证
 * email：邮件
 * url: 网址
 * imgCode: 图形验证码
 * phoneCode: 手机验证码
 * bankcard: 银行卡
 * money: 金钱
 * couponCode:兑换码
 */
/**
 * 验证规则
 * @type {Object}
 */
var rules={
	'username': '^[\u4e00-\u9fa5]{2,4}$',
	'password': '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$',
	'telephone': '^1[3|4|5|7|8][0-9]{9}$',
	'identity': '^(\\d{18})|\\d{17}(\\d|X|x)$',
	'email': "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
	'url': '^((http|https):\/\/(\\w+:{0,1}\\w*@)?(\\S+)|)(:[0-9]+)?(\/|\/([\\w#!:.?+=&%@!\-\/]))?$',
	'imgCode': '^[a-zA-Z0-9]{4}$',
	'phoneCode': '^[a-zA-Z0-9]{4}$',
	'bankcard': '^\\d{12,19}$',
	'couponCode': '^[a-zA-Z0-9]*$',
	'money': '^[0-9]{1}[\\d]*\.?[\\d]{0,2}$'
}
/**
 * 为空提示
 * @type {Object}
 */
var emptyTips={
	'username': '姓名不能为空!',
	'password': '密码不能为空!',
	'telephone': '手机号码不能为空!',
	'identity': '身份证号码不能为空!',
	'email': "邮箱不能为空",
	'url': '网址不能为空!',
	'imgCode': '图形验证码不能为空!',
	'phoneCode': '手机验证码不能为空!',
	'bankcard': '银行卡号不能为空!',
	'couponCode':'兑换码不能为空',
	'money': '金钱不能为空!'
}

/**
 * 错误提示
 * @type {Object}
 */
var errorTips={
	'username': '姓名为2-4个中文',
	'password': '密码为6-18个字母与数字的组合,没有特殊字符',
	'telephone': '手机号码为11位有效号码',
	'identity': '身份证格式错误',
	'email': "邮箱格式错误",
	'url': '网址格式错误',
	'imgCode': '图形验证码错误',
	'phoneCode': '手机验证码错误',
	'bankcard': '银行卡号不符合规则',
	'couponCode':'兑换码不符合规则',
	'money': '金钱不符合规则'
}

/**
 * 默认placeholder值
 * @type {Object}
 */
var placeholders={
	'username': '请输入用户名',
	'password': '请输入6-18位字母与数字的组合',
	'telephone': '请输入手机号码',
	'identity': '请输入身份证号码',
	'email': "请输入邮箱",
	'url': '请输入网址',
	'imgCode': '请输入图形验证码',
	'phoneCode': '请输入手机验证码',
	'bankcard': '请输入银行卡号',
	'couponCode':'请输入兑换码',
	'money': '请输入金额'
}

/**
 * 默认maxLength值
 * @type {Object}
 */
var maxLengths={
	'username': '',
	'password': '18',
	'telephone': '11',
	'identity': '18',
	'email': "",
	'url': '',
	'imgCode': '4',
	'phoneCode': '4',
	'bankcard': '19',
	'money': '10'
}

var rule;//input验证规则
var emptyTip;//为空提示
var errorTip;//错误提示
var placeholder;//placeholder
var maxLength;//最大长度限制
/**
 * input 组件
 * 默认为需要验证 required 为空
 * errorTip emptyTip placeholder 默认存在,可以选择性填写
 * rule 验证规则默认存在,可以选择性填写
 * dataType 类型根据input需要类型填写
 */
export default class Input extends Component{
	//设置默认props
	static defaultProps={
		dataType: '',
		placeholder:'',
		rule: '',
		emptyTip: '',
		errorTip: '',
		required: true,
		isBlur: false //是否需要光标离开
	}
	//构建函数
	constructor(props){
		super(props);
	}
	//获取input的验证规则
	initAttr(){
		//验证规则初始化
		if(strUtil.isEmpty(this.props.rule)){
			rule=rules[this.props.dataType];
		}else{
			rule=this.props.rule;//获取input的验证规则
		}
		//为空提示初始化
		if(strUtil.isEmpty(this.props.emptyTip)){
			emptyTip=emptyTips[this.props.dataType];
		}else{
			emptyTip=this.props.emptyTip;//获取为空提示
		}
		//错误提示初始化
		if(strUtil.isEmpty(this.props.errorTip)){
			errorTip=errorTips[this.props.dataType];
		}else{
			errorTip=this.props.errorTip;//获取错误提示
		}
		//placeholder初始化
		if(strUtil.isEmpty(this.props.placeholder)){
			placeholder=placeholders[this.props.dataType];
		}else{
			placeholder=this.props.placeholder;//获取placeholder
		}
		//maxLength初始化
		if(strUtil.isEmpty(this.props.maxlength)){
			maxLength=maxLengths[this.props.dataType];
		}else{
			maxLength=this.props.maxlength;//获取maxlength
		}
	}
	//inputChange
	inputChange=(e)=>{
		let text=e.target.value;
		let type=this.props.index;

		let isTrue=true;//验证用户输入的规则,记录是否正确 不为空就是正确
		let errorText;//错误的提示
		//是否需要验证
		if(this.props.required){
			//用户输入是否为空
			if(strUtil.isEmpty(text)){
				isTrue=false;//为空就是错误
			}else{
				errorText=this.testValue2(text);//返回用户错误的提示
			}
		}
		this.props.updateValue(text,type,isTrue,errorText);//更新用户输入的内容
	}
	/**
	 * [验证是否符合规则],执行对应的操作,弹窗提示框
	 */
	testValue=(str)=>{
		this.initAttr();
		if(strUtil.isEmpty(str)){
			this.props.updateText(emptyTip,true);
		}else{
			var testRegex=new RegExp(rule);
			//如果匹配
			if(testRegex.test(str)){
				/**
				 * 起始金额判断
				 * @param  {[type]} !strUtil.isEmpty(this.props.startMoney) [description]
				 * @return {[type]}                                         [description]
				 */
				if(!strUtil.isEmpty(this.props.startMoney)){
					if(parseFloat(str)<parseFloat(this.props.startMoney)){
						this.props.updateText(`起投金额为${this.props.startMoney}元`,true);
					}
				}

				/**
				 * 结束金额判断
				 * @param  {[type]} !strUtil.isEmpty(this.props.startMoney) [description]
				 * @return {[type]}                                         [description]
				 */
				if(!strUtil.isEmpty(this.props.endMoney)){
					if(parseFloat(str)<parseFloat(this.props.endMoney)){
						this.props.updateText(`最多可投金额为${this.props.endMoney}元`,true);
					}
				}
			}else{//不匹配
				this.props.updateText(errorTip,true);
			}

		}
	}
	/**
	 * [验证是否符合规则],执行对应的操作,返回错误提示,不弹窗
	 */
	testValue2=(str)=>{
		let errorText;
		this.initAttr();
		if(strUtil.isEmpty(str)){
			errorText=emptyTip;
		}else{
			var testRegex=new RegExp(rule);
			//如果匹配
			if(testRegex.test(str)){

				/**
				 * 最小金额判断
				 * @param  {[type]} !strUtil.isEmpty(this.props.startMoney) [description]
				 * @return {[type]}                                         [description]
				 */
				if(!strUtil.isEmpty(this.props.startMoney)){
					if(parseFloat(str)<parseFloat(this.props.startMoney)){
						if(!strUtil.isEmpty(this.props.startMoneyTip)){
							errorText=this.props.startMoneyTip;
						}else{
							errorText=`最小金额为${this.props.startMoney}元`;
						}

					}
				}

				/**
				 * 最大金额判断
				 * @param  {[type]} !strUtil.isEmpty(this.props.startMoney) [description]
				 * @return {[type]}                                         [description]
				 */
				if(!strUtil.isEmpty(this.props.endMoney)){
					if(parseFloat(str)>parseFloat(this.props.endMoney)){
						if(!strUtil.isEmpty(this.props.endMoneyTip)){
							errorText=this.props.endMoneyTip;
						}else{
							errorText=`最多金额为${this.props.endMoney}元`;
						}

					}
				}
			}else{//不匹配
				errorText=errorTip;
			}
		}
		return errorText;
	}
	//inputBlur
	inputBlur=(e)=>{
		let value=e.target.value;
		//是否需要验证
		if(this.props.required){
			this.testValue(value);
		}
	}
	render(){
		this.initAttr();
		let blur;
		let dealBlur=()=>{
			if(this.props.isBlur){
				blur=this.inputBlur;
			}else{
				blur='';
			}
		}
		return(
			<input className={this.props.className}  value={this.props.value}
			maxLength={maxLength} placeholder={placeholder} onChange={this.inputChange}
			 onBlur={blur} type={this.props.type} />
		)

	}
	shouldComponentUpdate(nextProps){
		return this.props!==nextProps;
	}
}
/**
 * 组件属性校正
 * @type {Object}
 */
Input.propTypes={
 /**
 * 验证为空：required 默认为验证
 * 为空提示：emptyTip
 * 错误提示：errorTip
 * 表单类型：dataType
 * username;只能输入2-4个中文
 * password;只能输入6-18个字母与数字的组合,没有特殊字符
 * telephone:手机号码
 * identity: 身份证
 * email：邮件
 * url: 网址
 * imgCode: 图形验证码
 * phoneCode: 手机验证码
 * bankcard: 银行卡
 * money: 金钱
 * 验证规则: rule
 * index: 当前input的下标 表示为第几个input
 * maxlength: 最大长度限制
 * startMoney: 起投金额
 * endMoney: 限制金额
 */
  required: React.PropTypes.bool,
  emptyTip: React.PropTypes.string,
  errorTip: React.PropTypes.string,
  dataType: React.PropTypes.string.isRequired,
  maxlength: React.PropTypes.string,
  rule: React.PropTypes.string,
  startMoney:React.PropTypes.number,
  endMoney:React.PropTypes.number,
  index: React.PropTypes.string
}
