import FastClick from 'fastclick';//引入快速点击
import Cookies from 'js-cookie';
/**
 * 配置对象
 * @type {Object}
 */
export var config = {
		// baseUrl:'http://120.55.184.234:8080',
		// baseUrl: 'http://192.168.18.194:8080/v3',
		// baseUrl: 'http://192.168.18.195:8081',
		baseUrl: 'https://www.lingtouniao.com/v3',
		// baseUrl: 'https://test.lingtouniao.net',
		baseHash: '#!',
		pageSize: 10,
		alertTime: '1500',//alert消失的时间
		weixinDownUrl: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.wy.lingtouniao',//微信下载地址
		iosDownUrl: "https://itunes.apple.com/cn/app/ling-tou-niao-li-cai/id1073508943?mt=8",//ios下载地址
		androidDownUrl: "https://www.lingtouniao.com/app/lingtouniao.apk",//android下载地址
		//大数据事件
		bigDataEvent : {
			'register':'register',//注册事件
			'realname': 'auth_name',//实名
			'bindCard': 'bind_card',//绑卡
			'recharge': 'recharge',//充值
			'withdraw': 'withdraw',//提现
			'invest': 'invest'//投资
		},
		code: {
			'-1':'请重新输入验证码',
			'1':"未兑换成功：您已经使用过该兑换码",
			'01060999':"交易超时，请查询确认交易状态后再试！",
			'00001':'充值金额必须大于0',
			'00240417': '用户账户余额不足',
			'00080537': '亲,您的银行账户余额不足,请您核实后再来交易',
			'10000001': '图形验证码错误',
			'10000002': '手机验证码校验失败',
			'10000001': '图形验证码校验失败',
			'10000002': '手机验证码校验失败',
			'10000003': '手机号码 错误',
			'10000004': '密码不对',
			'10000005': '用户未登陆',
			'10000006': '登录超时，没找到找个人',
			'10000007': '没选择已阅读按钮',
			'10000008': '密码校验有问题',
			'10000009': '手机号码校验有问题',
			'10000010': '发送手机验证码错误',
			'10000011': '该用户已经注册',
			'10000012': '该用户未注册',
			'10000013': '重置密码出错，请重新再试！',
			'10000014': '查询账户信息出错！',
			'10000015': '查询返现券信息出错！',
			'10000016': '更新用户信息失败！',
			'10000017': '身份证号码校验失败！',
			'10000018': '已经实名认证！',
			'10000019': '请先进行实名认证！',
			'10000020': '联动优势验签失败！',
			'10000021': '已经绑定过银行卡！',
			'10000022': '查询账户信息出错！',
			'10000023': '查询账户信息出错！',
			'10000024': '插入账户流水失败！',
			'10000025': '没有找到该用户！',
			'10000026': '余额不足，请充值！',
			'10000027': '该身份证已经绑定',
			'10000028': '请先绑定银行卡！',
			'10000030': '',
			'10000029': '',
			'10000031': '输入版本号不存在',
			'10000032': '最新版本不存在',
			'10000033': '鸟币余额不足',
			'10000034': '推荐人未进行实名认证',
			'10000035': '推荐人不能为本人',
			'10000036': '发送短信失败',
			'10000037': '推荐人不存在',
			'10000038': '推荐人已存在',
			'10000039': '你填写的号码推荐人是本人',
			'10000040': '超出单笔金额',
			'10000041': '手机验证码已失效，请重新获取!',
			'10000042': '超出当日限额',
			'10000043': '请选择银行名称!',
			'10000044': '请输入银行卡号!',
			'10000045': '内部员工',
			'10000046': '线下数据导入出错',
			'20000001': '您已经使用过体验金券了！',
			'20000002': '订单金额大于可用余额!请充值！',
			'20000003': '鸟币不满足1：5的使用规范!',
			'20000004': '下单失败!',
			'20000005': '鸟币处理失败!',
			'20000006': '更新账户可用余额失败!',
			'20000007': '订单金额小于返现券限定金额',
			'20000008': '订单标的时常小于返现券最小时长',
			'20000009': '返现券状态错误',
			'200000010': '订单用户和返现券用户不匹配',
			'20000011': '订单用户和返现券用户不匹配',
			'200000012': '订单标的时常小于标的起投金额！',
			'200000013': '订单金额应该为起投金额的倍数',
			'200000014': '返现券不存在',
			'200000015': '产品状态错误',
			'200000016': '订单金额大于产品剩余可投金额',
			'200000017': '更新产品信息失败',
			'200000018': '产品募集日期已结束',
			'200000019': '余额明细列表查询失败',
			'200000020': '该标的不存在',
			'200000021': '订单金额不能小于10000元',
			'200000022': '产品剩余金额小于订单金额',
			'200000023': '没有找到相应的订单',
			'200000024': '已经购买过新手单了',
			'200000025': '用户不符合新手标要求',
			'200000026': '新手标不允许使用返现券',
			'200000027': '新手标不允许使用鸟币',
			'200000028': '免密支付失败',
			'200000029': '新手标投资金额不能大于10000元',
			'201000000': '更新活期产品账户失败',
			'201000001': '超过今日限额',
			'201000002': '更新用户活期账户失败',
			'201000003': '活期账户余额小于提取金额',
			'201000004': '保存订单失败',
			'201000005': '订单金额错误',
			'201000007': '活期购买，之前没购买过正常标',
			'500000001': '身份证格式不正确',
			'500000002': '超出每日可用实名认证次数',
			'500000003': '超出每日可用绑卡认证次数',
			'500000004': '只能查看自己的订单',
			'500000005': '判断是否为乐巢投和乐巢投系列',
			'30000001': '获取响应数据失败.原因为',
			'30000002': '联动优势返回空的html代码',
			'30000002': '响应码错误',
			'30000003': '',
			'30000004': '已超过当天发送短信总条数！',
			'30000006': '服务器可能有点开小差，请稍后再试',
			'40000001': '推送连接失败！',
			'40000002': '推送请求失败！',
			'40000003': '用户ID为空！',
			'600000002': '没有抽奖机会了!',
			'800005': '手机号码输入错误!',
			'80000001': '该账户为企业账户，请访问领投鸟官网（www.lingtouniao.com）进行登录。',
			'9999': '服务器异常',
			'2200010':'因平台上线银行资金存管系统，领投鸟理财将于明天起进行全站系统升级，预计持续48-72小时。升级期间平台官网、APP部分服务不可使用，升级完成后我们将短信告知您，给您带来的不便敬请谅解。'
		},
		loginTimeOver: '10000006',//登录超时对应的码
		/**
		 * 需要登录页面的名称
		 * @type {Array}
		 */
		loginPage: ['user_realname','user_card','user_install','recharge','withdraw','account_invest','account_security','account_viewall'],
		/**
		 * 需要实名页面的名称
		 * @type {Array}
		 */
		realnamePage: ['user_card','recharge','withdraw'],
		/**
		 * 需要绑卡页面的名称
		 * @type {Array}
		 */
		cardPage: ['recharge','withdraw']
	}
/**
 * 字符串帮助类
 */
export class strUtil {
	/*
	 * 判断字符串是否为空
	 * @param str 传入的字符串
	 * @returns {Boolean}
	 */
	static isEmpty = (str) => {
		if (str == null || typeof(str) == 'undefined' || (str == ''&&typeof(str)!='number')) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 是否包含str
	 * @param  {[type]} str1 [description]
	 * @param  {[type]} str1 [description]
	 * @return {[type]}     [description]
	 */
	static hasStr=(str1,str2) =>{
		let index=str1.indexOf(str2);
		if(index>-1){
			return true;
		}else{
			return false;
		}
	}

	/*
	 * 判断两个字符串子否相同
	 * @param str1
	 * @param str2
	 * @returns {Boolean}
	 */
	static isEquals = (str1, str2) => {
		if (str1 == str2) {
			return true;
		} else {
			return false;
		}
	}

	/*
	 * 忽略大小写判断字符串是否相同
	 * @param str1
	 * @param str2
	 * @returns {Boolean}
	 */
	static isEqualsIgnorecase = (str1, str2) => {
		if (str1.toUpperCase() == str2.toUpperCase()) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 判断是否是数字
	 * @param value
	 * @returns {Boolean}
	 */
	static isNum = (str) => {
		if (!isNaN(str)) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 判断是否是中文
	 * @param str
	 * @returns {Boolean}
	 */
	static isChina = (str) => {
		var reg = /^([u4E00-u9FA5]|[uFE30-uFFA0])*$/;
		if (reg.test(str)) {
			return false;
		}
		return true;
	}

	/**
	 * 转换成数组
	 * @param str
	 * @returns {array}
	 */
	static toCharArray = (str) => {
		return str.split("");
	}

	/**
	 * 字符串反转
	 * @param str
	 * @returns {str}
	 */
	static reverse = (str) => {
		return str.split("").reverse().join("");
	}

	/**
	 * 测试是否是整数
	 * @param str
	 * @returns {str}
	 */
	static isInt = (str) => {
		if (str == "NaN")
			return false;
		return str == parseInt(str).toString();
	}

	/**
	 * 数组是否包含元素
	 */
	static arrayIndexOf=(arr=[],str)=>{
		let index=arr.indexOf(str)
		if(index>-1){
			return true;
		}else{
			return false;
		}
	}

	/**
	 * 除去左边空白
	 * @param str
	 * @returns {str}
	 */
	static lTrim = (str) => {
		return str.replace(/(^\s*)/g, "");
	}


	/**
	 * 除去右边空白
	 * @param str
	 * @returns {str}
	 */
	static rTrim = (str) => {
		return str.replace(/(\s*$)/g, "");
	}


	/**
	 * 除去两边空白
	 * @param str
	 * @returns {str}
	 */
	static trim = (str) => {
		return str.replace(/(^\s*)|(\s*$)/g, "");
	}

	/**
	 * Json转换成字符串
	 * @param json
	 * @returns {str}
	 */
	static json2str = (str) => {
		if (!strUtil.isEmpty(str)) return JSON.parse(str);
	}

	/**
	 * 字符串转换成Json
	 * @param str
	 * @returns {json}
	 */
	static str2json = (str) => {
		return JSON.stringify(str);
	}

	/**
	 * 截取小数点,四舍五入
	 */
	static toFixed(str,number){
		return parseFloat(str).toFixed(number);
	}

	/**
	 * 截取小数点,不进行四舍五入
	 */
	static toDecimal(str,number){
		let a='1';
		for(let i=0;i<number;i++){
			a+='0';
		}
		let s=Math.floor(parseFloat(str) * a)/a;
		return s;
	}


	/**
	 * 字符串-获取以ASCII编码字节数 英文占1字节 中文占2字节
	 * @param str
	 * @returns {json}
	 */
	static lenASCII = (str) => {
		return str.replace(/[^\x00-\xff]/g, 'xx').length; //将所有非\x00-\xff字符换为xx两个字符,再计算字符串
	}

	/**
	 * 格式化百分比
	 * @param str
	 * @returns {str}
	 */
	static formatPercent = (str) => {
		let reg = /\%/g;
		str=str.toString().replace(reg,'');
		return str;
	}

	/**
	 * 格式化千分位
	 * @param str
	 * @returns {str}
	 */
	static formatKilo = (str) => {
		str = str.toString();
		if (/[^0-9\.]/.test(str)) return "invalid value";
		str = str.replace(/^(\d*)$/, "$1.");
		str = str.replace(/(\d*\.\d\d)\d*/, "$1");
		str = str.replace(".", ",");
		var re = /(\d)(\d{3},)/;
		while (re.test(str))
			str = str.replace(re, "$1,$2");
		str = str.replace(/.(\d*)$/, ".$1");
		str = str.substr(str.length - 1, 1) == '.' ? str.substring(0, str.length - 1) : str;
		if(!(/\./.test(str))){
			str+='.00';
		}
		return str.replace(/^\./, "0.");
	}


	//获取唯一机器码
	static getGuid = () => {
		return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}


	/**
	 * 格式化字符串
	 * @param  {[type]} str [description]
	 *
	 * @param  {[type]} type[格式化的类型 name telephone identity]
	 * @param  {[type]} punctuation [用来格式化的符号]
	 * @return {[type]} [description]
	 */
	static formatStr = (str,type='name',punctuation='*') => {
		str = str.split('');
		var newStr = [];
		for (var i = 0; i < str.length; i++) {
			if (type == 'name') {
				if (i == 0) {
					newStr.push(str[i]);
				} else {
					newStr.push(punctuation);
				}
			} else if (type == 'telephone') {
				if (i > 2 && i < 7) {
					newStr.push(punctuation);
				} else {
					newStr.push(str[i]);
				}
			} else if (type == 'identity') {
				if (i > 5 && i < 14) {
					newStr.push(punctuation);
				} else {
					newStr.push(str[i]);
				}
			}

		}
		return newStr.join('');
	}

	//清除Html标签文本
	static clearHtml = (str) => {
		var reg = /<[^<>]+>/g;
		return str.replace(reg, '');
	}


	/*
	 * author toni
	 * 金钱取万,如果小于万就返回对应金额加上元,大于万就四舍五入到万加上万
	 */
	static formatMiriade = (money) => {
		var money=parseFloat(money);
		var str;
		if(money>=10000){
			str=( money / 10000).toFixed()+'万';
		}else{
			str=money+'元';
		}
		return str;
	}

	/**
	 * 累投金额格式化,取出亿和万
	 */
	static formatMoney=(str)=>{
		let reg = /\,/g;
		let number=parseFloat(str.replace(reg,''));
		let Num=new Object();
		Num.hundredMillion=Math.floor(number/100000000);//获取亿
		Num.kiloMillion=Math.floor(number%100000000/10000);//获取万
		return Num;
	}

	/**
	 * 平台人数格式化,取出万和单个
	 */
	static formatPerson=(str)=>{
		let reg = /\,/g;
		let number=parseFloat(str.toString().replace(reg,''));
		let Num=new Object();
		Num.million=Math.floor(number/10000);//获取万
		Num.single=Math.floor(number%10000);//获取单个
		return Num;
	}

	/**
	 *格式化数据
	 */
	static formatData=(str)=>{
		if(strUtil.isEmpty(str)){
			return '';
		}else{
			return str;
		}
	}
}


/**
 * url帮助类
 */
export class urlUtil {

	/**
	 * 获取对应的url
	 * @return {[type]} [description]
	 */
	static getUrl = () => {
		return decodeURI(window.location.pathname + window.location.search + window.location.hash);
	}

	/**
	 * 获取浏览器hash
	 * @return {[type]} [description]
	 */
	static getHash = () => {
		return window.location.hash;
	}

	/**
	 * 获取对应下标的hash值
	 * @param  {[type]} index [description]
	 * @return {[type]}       [description]
	 */
	static getHashParts = (index) => {
		var hash = urlUtil.getHash().split("/");
		hash.shift();
		return index !== undefined ? hash[index] : hash;
	}

	/**
	 * 设置hash
	 * @param  {[type]} hashList [description]
	 * @return {[type]}          [description]
	 */
	static setHash = (hashList) => {
		hashList.unshift(config.baseHash);
		window.location.hash = hashList.join('/');
	}
	/**
	 * 获取浏览器中可能会传递过来带有?的页面地址,获取url参数
	 */
	static getFromUrl=(param=url)=>{
		let param1=urlUtil.getSearch(param);
		let url = urlUtil.getUrl();
		let param2;
		if(url.split("?").length==3){
			param2=url.split("?")[2];
			return param1+'?'+param2;
		}else if(url.split("?").length==2){
			return param1;
		}else{
			return '';
		}

	}
	/**
	 * 根据option获取对应的值
	 */
	static getSearch = (option) => {
		var paraStr, paras,
			url = urlUtil.getUrl();
		if (url) {
			paraStr = url.split("?")[1];
			if (paraStr) {
				paras = {};
				paraStr = paraStr.split("&");
				for (var n in paraStr) {
					var name = paraStr[n].split("=")[0];
					var value = paraStr[n].split("=")[1];
					paras[name] = value;
				}
			} else {
				return '';
			}
			if (!option) {
				return paras;
			} else {
				return paras[option] ? paras[option] : "";
			}
		}
	}


	/**
	 * 重设url参数取值，若无此参数则进行创建,若参数赋值为null则进行删除
	 */
	static setSearch = (option) => {
		let paras = urlUtil.getSearch();
		var i, name, val;
		if (arguments.length == 2) {
			name = arguments[0];
			val = arguments[1];
			option = {
				name: val
			};
		}
		if ("string" === typeof option) {
			paras[option] = "";
		} else if ("object" === typeof option) {
			for (i in option) {
				if (option[i] === null) {
					delete paras[i];
				} else {
					paras[i] = option[i];
				}
			}
		} else {

		}
		return urlUtil.build(paras);
	}

	/**
	 * 删除url中指定参数返回新url
	 */
	static removeSearch = (option) => {
		let paras = urlUtil.getSearch();
		var i;
		if ("string" === typeof option) {
			option = option.split(",");
			for (i in option) {
				delete paras[option[i]]
			}

		}
		return urlUtil.build(paras);
	}


	/**
	 * 根据url和处理过的paras重新构件url
	 * @return {[type]} [description]
	 */
	static build = (paras) => {
		let url = urlUtil.getUrl();
		let str = url.split("?");
		let pathname = str.length > 0 ? str[0] : '';
		var i,
			newUrl = pathname + "?";

		for (i in paras) {
			newUrl += (i + "=" + paras[i] + "&");
		}

		return newUrl.substr(0, newUrl.length - 1);
	}

}

/**
 * 时间帮助类
 */
export class dateUtil{
	/**
	 * 获取当前时间
	 * @return {[type]} [description]
	 */
	static getTime=(time)=>{
		if(strUtil.isEmpty(time)){
			return new Date();
		}else{
			time=time.replace(/-/g,"/");
			time=time.replace(/\.\d/g,"");
			return new Date(time);
		}

	}

	/**
	 * 获取年份 如2015
	 * @return {[type]} [description]
	 */
	static getFullYear=(time)=>{
			return dateUtil.getTime(time).getFullYear();
	}

	/**
	 * 获取年份 如115
	 * @return {[type]} [description]
	 */
	static 	getYear=(time)=> {
		return dateUtil.getTime(time).getYear();
	}

	/**
	 * 获取月份 返回0-11 0表示一月 11表示十二月
	 */
	static getMonth=(time)=> {
		return dateUtil.getTime(time).getMonth();
	}

	/**
	 * 获取星期几  返回的是0-6的数字，0 表示星期天
	 * @return {[type]} [description]
	 */
	static 	getWeek=(time)=> {
		return dateUtil.getTime(time).getDay();
	}

	/**
	 * 获取当天日期
	 * @return {[type]} [description]
	 */
	static getDate=(time)=> {
		return dateUtil.getTime(time).getDate();
	}

	/**
	 * 获取小时数
	 */
	static getHours=(time)=> {
		return dateUtil.getTime(time).getHours();
	}

	/**
	 * 获取分钟数
	 */
	static getMinutes=(time)=> {
		return dateUtil.getTime(time).getMinutes();
	}

	/**
	 * 获取秒数
	 */
	static getSeconds=(time)=> {
		return dateUtil.getTime(time).getSeconds(); //获取秒数
	}

	/**
	 * 获取当前日期：
	 * formatStr：可选，格式字符串，默认格式：yyyy-MM-dd hh:mm:ss
	 * 约定如下格式：
	 * （1）YYYY/yyyy/YY/yy 表示年份
	 * （2）MM/M 月份
	 * （3）W/w 星期
	 * （4）dd/DD/d/D 日期
	 * （5）hh/HH/h/H 时间
	 * （6）mm/m 分钟
	 * （7）ss/SS/s/S 秒
	 * （8）iii 毫秒
	 */

	static formatDate=(formatStr,time)=> {
		var str = formatStr;
		if (!formatStr) {
			str = "yyyy-MM-dd hh:mm:ss"; //默认格式
		}
		var Week = ['日', '一', '二', '三', '四', '五', '六'];
		str = str.replace(/yyyy|YYYY/, dateUtil.getFullYear(time));
		str = str.replace(/yy|YY/, (dateUtil.getYear(time) % 100) > 9 ? (dateUtil.getYear(time) % 100).toString() : '0' + (dateUtil.getYear(time) % 100));
		str = str.replace(/MM/, dateUtil.getMonth(time) >= 9 ? (parseInt(dateUtil.getMonth(time)) + 1).toString() : '0' + (parseInt(dateUtil.getMonth(time)) + 1));
		str = str.replace(/M/g, (parseInt(dateUtil.getMonth(time)) + 1));
		str = str.replace(/w|W/g, Week[dateUtil.getWeek(time)]);
		str = str.replace(/dd|DD/, dateUtil.getDate(time) > 9 ? dateUtil.getDate(time).toString() : '0' + dateUtil.getDate(time));
		str = str.replace(/d|D/g, dateUtil.getDate(time));
		str = str.replace(/hh|HH/, dateUtil.getHours(time) > 9 ? dateUtil.getHours(time).toString() : '0' + dateUtil.getHours(time));
		str = str.replace(/h|H/g, dateUtil.getHours(time));
		str = str.replace(/mm/, dateUtil.getMinutes(time) > 9 ? dateUtil.getMinutes(time).toString() : '0' + dateUtil.getMinutes(time));
		str = str.replace(/m/g, dateUtil.getMinutes(time));
		str = str.replace(/ss|SS/, dateUtil.getSeconds(time) > 9 ? dateUtil.getSeconds(time).toString() : '0' + dateUtil.getSeconds(time));
		str = str.replace(/s|S/g, dateUtil.getSeconds(time));
		str = str.replace(/iii/g, dateUtil.millSecond < 10 ? '00' + dateUtil.millSecond : (dateUtil.millSecond < 100 ? '0' + dateUtil.millSecond : dateUtil.millSecond));
		return str;
	}

	/**
	 * 判断闰年 ：一般规律为：四年一闰，百年不闰，四百年再闰。
	 */
	static isLeapYear=(str)=> {
		return (str % 4 == 0 && ((str != 0) || (str % 400 == 0)));
	}
}


/**
 * session 帮助类
 */
export class sessionUtil{
	/**
	 * session前缀
	 * @return {[type]} [description]
	 */
	static _key=(key)=>{
		return "ltn_" + key;
	}

	/**
	 * 根据key获取session
	 * @param  {[type]} key [description]
	 * @return {[type]}     [description]
	 */
	static get=(key)=> {
		return sessionStorage.getItem(sessionUtil._key(key));
	}

	/**
	 * 设置session
	 * @param  {[type]} key [description]
	 * @param  {[type]} val [description]
	 * @return {[type]}     [description]
	 */
	static set=(key,val)=> {
		return sessionStorage.setItem(sessionUtil._key(key),val);
	}

	/**
	 * 删除指定的session
	 * @param  {[type]} key [description]
	 * @return {[type]}     [description]
	 */
	static del=(key)=> {
		return sessionStorage.removeItem(sessionUtil._key(key));
	}

	/**
	 * 清空session
	 * @return {[type]} [description]
	 */
	static clear=()=> {
		return sessionStorage.clear();
	}
}
//cookie处理///////////////////////
//获取
export class cookieUtil{

	static _key=(key)=>{
		return "ltn_" + key;
	}

	static get=(name)=>{
		return Cookies.get(cookieUtil._key(name));
	}

	static set = (name,value) => {
		console.log(name)
		console.log(value)
		let domain;
		if(window.location.host.indexOf('lingtouniao.com') != -1){
		   domain='lingtouniao.com'
		}else{
		   domain = window.location.host
		}

	  if (typeof name === 'undefined') {
	    throw new Error('cookie name must be not undefined');
	  } else {
	    Cookies.set(cookieUtil._key(name), value, {domain:domain});
			console.log('cccccccccc')
	  }
	};

}

/**
 * localStorage 帮助类
 */
export class localStorageUtil{
	/**
	 * localStorage前缀
	 * @return {[type]} [description]
	 */
	static _key=(key)=>{
		return "ltn_" + key;
	}

	/**
	 * 根据key获取localStorage
	 * @param  {[type]} key [description]
	 * @return {[type]}     [description]
	 */
	static get=(key)=> {
		return localStorage.getItem(localStorageUtil._key(key));
	}

	/**
	 * 设置localStorage
	 * @param  {[type]} key [description]
	 * @param  {[type]} val [description]
	 * @return {[type]}     [description]
	 */
	static set=(key,val)=> {
		return localStorage.setItem(localStorageUtil._key(key),val);
	}

	/**
	 * 删除指定的localStorage
	 * @param  {[type]} key [description]
	 * @return {[type]}     [description]
	 */
	static del=(key)=> {
		return localStorage.removeItem(localStorageUtil._key(key));
	}

	/**
	 * 清空localStorage
	 * @return {[type]} [description]
	 */
	static clear=()=> {
		return localStorage.clear();
	}
}


/**
 * avigator帮助类
 */
export class avigatorUtil{
	/**
	 * 头部信息
	 * @type {[type]}
	 */
	static userAgent=navigator.userAgent;

	/**
	 * 是否为ipad
	 */
	static isIPad= () => {
    	return (avigatorUtil.userAgent.indexOf("iPad") > -1);
	}

	/**
	 * 是否为iphone
	 * @param  {[type]}  userAgent [description]
	 * @return {Boolean}           [description]
	 */
	static isIPhone = ()=> {
    	return (avigatorUtil.userAgent.indexOf("iPhone") > -1);
	}

	/**
	 * 是否为ios系统
	 * @param  {[type]}  userAgent [description]
	 * @return {Boolean}           [description]
	 */

	static isIOS = ()=> {
	    return avigatorUtil.isIPad(avigatorUtil.userAgent) || avigatorUtil.isIPhone(avigatorUtil.userAgent);
	}

	/**
	 * 是否为Android系统
	 * @param  {[type]}  userAgent [description]
	 * @return {Boolean}           [description]
	 */
	static isAndroid = ()=> {
	    return (avigatorUtil.userAgent.indexOf("Android") > -1) ||
	        (avigatorUtil.userAgent.indexOf("Linux") > -1);
	}

	/**
	 * 判断是否为微信
	 */
	static isWeixin= () =>{
		return (avigatorUtil.userAgent.indexOf("MicroMessenger") > -1);
	}
}

/**
 * 数据帮助类
 */
export class dataUtil{
	/**
	 * [获取数据方法]
	 * @param  {[type]} url         [访问接口地址]
	 * @param  {[type]} method      [get post]
	 * @param  {[type]} param       [传递过去的参数 字符串格式 如 "clientType='M'&userName='小钱'"]
	 * @param  {[type]} successCall [成功回调函数]
	 * @param  {[type]} errorCall   [resultCode不等于0回调函数]
	 * @param  {[type]} errorCall2   [访问出错的回调函数]
	 * @return {[type]}             [description]
	 */
	static getData=(url,method='post',param,successCall,errorCall,errorCall2)=>{
    	if(strUtil.isEmpty(param)){
    		param=`clientType=W`;
    	}else{
    		if(param.indexOf('clientType')>=0){
    			param=param;
    		} else {
					param=`clientType=W&${param}`;
				}
    	}
    	url=`${config.baseUrl}${url}`;
    	fetch(url,{
    		method: method,
    		headers: {
        		"Content-Type": "application/x-www-form-urlencoded"
   			},
    		body: param
    	})
    	.then((res) => {
    		if (res.ok) {
		        res.json().then((data)=> {
		        	if(data.resultCode=='0'){
		        		successCall(data);
		        	}else{
		        		errorCall(data);
		        	}
		        })
		    }
    	})
		.catch((e) => {
			errorCall2('服务器异常');
		});
	}

	/**
	 * 根据resultCode获取错误提示
	 * @param  {[type]} resultCode [description]
	 * @return {[type]}            [description]
	 */
	static getMessage=(resultCode)=>{
		let message=config.code[resultCode];
		return message;
	}
}


/**
 * 业务帮助类
 */
export class bussinessUtil{
	/**
	 * 适配屏幕方法
	 * @return {[type]} [description]
	 */
	static configScreen=()=>{
		let width=document.body.clientWidth;
		let point=width/16;//按照320屏幕为基础
		//当屏幕为ipad时候
		if(width==768)
		{
			point=16;
		}
		document.querySelectorAll("html")[0].style.fontSize=point+"px";

		if ('addEventListener' in document) {
	      document.addEventListener('DOMContentLoaded', function() {
	          FastClick.attach(document.body);
	      }, false);
	    }
	}

	/**
	 * 获取sessionKey
	 */
	static getSessionKey=()=>{
		return strUtil.formatData(sessionUtil.get('sessionKey'));
	}

	/**
	 * 设置手机号码
	 */
	static setMobile=(telphone)=>{
		sessionUtil.set('telphone',telphone);
	}

	/**
	 * 获取手机号码
	 */
	static getMobile=()=>{
		return strUtil.formatData(sessionUtil.get('telphone'));
	}

	/**
	 * 是否登录
	 */
	static isLogin=()=>{
		if(strUtil.isEmpty(sessionUtil.get('sessionKey'))){
			return false;
		}else{
			return true;
		}
	}

	/**
	 * 是否实名
	 */
	static isRealname=()=>{
		if(sessionUtil.get('certification')=='1'){
			return true;
		}else{
			return false;
		}
	}

	/**
	 * 设置实名
	 */
	static setRealname=(status)=>{
		sessionUtil.set('certification',status);
	}

	/**
	 * 是否绑卡
	 */
	static isCard=()=>{
		if(sessionUtil.get('bankAuthStatus')=='1'){
			return true;
		}else{
			return false;
		}
	}

	/**
	 * 设置绑卡
	 */
	static setCard=(status)=>{
		sessionUtil.set('bankAuthStatus',status);
	}

	/**
	 * 是否充值免密
	 */
	static isCZ=()=>{
		if(strUtil.formatData(sessionUtil.get('agreementCZ'))=='1'){
			return true;
		}else{
			return false;
		}
	}
	/**
	 * 设置充值免密
	 */
	static setCZ=(status)=>{
		sessionUtil.set('agreementCZ',status);
	}

	/**
	 * 是否投资免密
	 */
	static isTZ=()=>{
		if(sessionUtil.get('agreementTZ')=='1'){
			return true;
		}else{
			return false;
		}
	}

	/**
	 * 设置投资免密
	 */
	static setTZ=(status)=>{
		sessionUtil.set('agreementTZ',status);
	}

	/**
	 * 获取用户姓名
	 */
	static getUsername=()=>{
		return strUtil.formatData(sessionUtil.get('username'));
	}

	/**
	 * 设置用户姓名
	 */
	static setUsername=(str)=>{
		sessionUtil.set('username',str);
	}
	/**
	 * 获取银行卡号
	 */
	static getCardNo=()=>{
		return strUtil.formatData(sessionUtil.get('cardNo'));
	}

	/**
	 * 设置银行卡号
	 */
	static setCardNo=(str)=>{
		sessionUtil.set('cardNo',str);
	}

	/**
	 * 获取银行名称
	 */
	static getCardname=()=>{
		return strUtil.formatData(sessionUtil.get('cardname'));
	}

	/**
	 * 设置银行名称
	 */
	static setCardname=(str)=>{
		sessionUtil.set('cardname',str);
	}

	/**
	 * 获取用户可用金额
	 */
	static getUsableBalance=()=>{
		return strUtil.formatData(sessionUtil.get('usableBalance'));
	}

	/**
	 * 设置用户可用金额
	 */
	static setUsableBalance=(str)=>{
		sessionUtil.set('usableBalance',str);
	}

	/**
	 * 获取可用鸟币
	 */
	static getBirdCoin=()=>{
		return strUtil.formatData(sessionUtil.get('birdCoin'));
	}

	/**
	 * 设置可用鸟币
	 */
	static setBirdCoin=(str)=>{
		sessionUtil.set('birdCoin',str);
	}
	/**
	 * 获取提现次数
	 */
	static getFreeCounter=()=>{
		return strUtil.formatData(sessionUtil.get('freeCounter'));
	}
	/**
	 * 设置提现次数
	 */
	static setFreeCounter=(str)=>{
		sessionUtil.set('freeCounter',str);
	}
	/**
	 * 更新用户信息
	 */
	static updateUserInfo=(data)=>{
	  let certification=strUtil.formatData(data.data.certification);//实名状态
      let bankAuthStatus=strUtil.formatData(data.data.bankAuthStatus);//绑卡状态
      let agreementCZ=strUtil.formatData(data.data.agreementCZ);//充值免密
      let agreementTZ=strUtil.formatData(data.data.agreementTZ);//投资免密
      let username=strUtil.formatData(data.data.userName);//用户姓名
      let cardNo=strUtil.formatData(data.data.bankNo);//银行卡号
      let cardname=strUtil.formatData(data.data.belongBank);//银行名称
      bussinessUtil.setRealname(certification);
      bussinessUtil.setCard(bankAuthStatus);
      bussinessUtil.setCZ(agreementCZ);
      bussinessUtil.setTZ(agreementTZ);
      bussinessUtil.setUsername(username);
      bussinessUtil.setCardNo(cardNo);
      bussinessUtil.setCardname(cardname);
	}

	/**
	 * 更新用户账户信息
	 */
	static updateUserAccountInfo=(data)=>{
		let usableBalance=strUtil.formatData(data.data.usableBalance);//可用余额
		let birdCoin=strUtil.formatData(data.data.birdCoin);//可用鸟币
		let freeCounter=strUtil.formatData(data.data.freeCounter);//提现机会
		bussinessUtil.setUsableBalance(usableBalance);
      	bussinessUtil.setBirdCoin(birdCoin);
      	bussinessUtil.setFreeCounter(freeCounter);
	}

	/**
	 *当前页面存入session
	 */
	static setCurrentPage=(url=location.href)=>{
		sessionUtil.set('currentPage',url);
	}

	/**
	 *获取传入的页面地址
	 */
	static getCurrentPage=()=>{
		return strUtil.formatData(sessionUtil.get('currentPage'));
	}

	/**
	 *页面存入session
	 */
	static setOtherPage=(url=location.href)=>{
		sessionUtil.set('otherPage',url);
	}

	/**
	 *获取传入的页面地址
	 */
	static getOtherPage=()=>{
		return strUtil.formatData(sessionUtil.get('otherPage'));
	}

	/**
	 * 页面间传递数据
	 */
	static setPageInfo=(obj)=>{
		let s=strUtil.str2json(obj);
		sessionUtil.set('pageInfo',s);
	}

	/**
	 * 获取页面间传递过来的数据
	 */
	static getPageInfo=()=>{
		let info=strUtil.formatData(sessionUtil.get('pageInfo'));
		info=strUtil.json2str(info);
		return info;
	}

	/**
	 * 销毁页面传递过来的数据
	 */
	static delPageInfo=()=>{
		sessionUtil.del('pageInfo');//销毁数据
	}

	/**
	 * 跳转登录页面,并带上当前页面的地址
	 * @param  {[type]} pageUrl [description]
	 * @return {[type]}         [description]
	 */
	static goLogin=(pageUrl)=>{
		window.location.href=`../user_login/user_login.html?url=${encodeURI(pageUrl)}`;
	}
	/**
	 * 跳转实名页面,并带上当前页面的地址
	 * @param  {[type]} pageUrl [description]
	 * @return {[type]}         [description]
	 */
	static goRealname=(pageUrl)=>{
		window.location.href=`../user_realname/user_realname.html?url=${encodeURI(pageUrl)}`;
	}
	/**
	 * 跳转绑卡页面,并带上当前页面的地址
	 * @param  {[type]} pageUrl [description]
	 * @return {[type]}         [description]
	 */
	static goCard=(pageUrl)=>{
		window.location.href=`../user_card/user_card.html?url=${encodeURI(pageUrl)}`;
	}
	/**
	 * 跳转充值页面,并带上当前页面的地址
	 * @param  {[type]} pageUrl [description]
	 * @return {[type]}         [description]
	 */
	static goRecharge=(pageUrl)=>{
		bussinessUtil.setCurrentPage(pageUrl);//当前页面记录
		window.location.href=`../recharge/recharge.html`;
	}
	/**
	 * 需要登录页面的处理,未登录则跳转登录页面,并且把当前页面传递过去
	 * 需要实名页面的处理,未实名则跳转实名页面,并把当前页面传递过去
	 * 需要绑卡的页面的处理,未绑卡则跳转绑卡页面,并把当前页面传递过去
	 * 如果存在realnameCall方法则执行未实名回调,不进行页面跳转
	 * 如果存在cardCall方法则执行未绑卡回调,不进行页面跳转
	 * @param  {[type]} pageName [页面名称]
	 * @param  {[type]} pageUrl  [页面地址]
	 * @param  {[type]} realnameCall  []
	 * @param  {[type]} cardCall  [description]
	 * @return {[type]}          [description]
	 */
	 static dealPage=(pageName,pageUrl,realnameCall,cardCall)=>{
	 	/**
	 	 * 登录配置是否包含pageName
	 	 * @type {Boolean}
	 	 */
	 	let isExist=strUtil.arrayIndexOf(config.loginPage,pageName);
	 	//需要登录验证的页面
	 	if(isExist){
	 		//未登录跳转登录页面,并把当前页面传递过去
	 		if(!bussinessUtil.isLogin()){
	 			bussinessUtil.goLogin(pageUrl);
	 		}else{
	 			/**
			 	 * 实名配置是否包含pageName
			 	 * @type {Boolean}
			 	 */
			 	let isExist=strUtil.arrayIndexOf(config.realnamePage,pageName);
			 	//需要实名验证的页面
			 	if(isExist){
			 		//跳转实名页面,并把当前页面传递过去
			 		if(!bussinessUtil.isRealname()){
			 			if(strUtil.isEmpty(realnameCall)){
							bussinessUtil.goRealname(pageUrl);
			 			}else{
			 				realnameCall();
			 			}

			 		}else{
			 			/**
					 	 * 绑卡配置是否包含pageName
					 	 * @type {Boolean}
					 	 */
					 	let isExist=strUtil.arrayIndexOf(config.cardPage,pageName);
					 	//需要绑卡验证的页面
					 	if(isExist){
					 		//跳转绑卡页面,并把当前页面传递过去
					 		if(!bussinessUtil.isCard()){
					 			if(strUtil.isEmpty(realnameCall)){
					 				bussinessUtil.goCard(pageUrl);
					 			}else{
					 				cardCall();
					 			}
					 		}else{
					 			if(pageUrl!=location.href){
					 				window.location.href=pageUrl;
					 			}

					 		}
					 	}else{
					 		if(pageUrl!=location.href){
				 				window.location.href=pageUrl;
				 			}
					 	}
			 		}
			 	}else{
			 		if(pageUrl!=location.href){
		 				window.location.href=pageUrl;
		 			}
			 	}
	 		}
	 	}

	 }
}

/**
 * 大数据帮助类
 */
export class bigDataUtil{
	/**
	 * 传入大数据需要的参数
	 */
	static setBigDataNeedParam = (bigData={"index":'0',"name":'',"value":'',"page":'page'}) => {
		//传入参数下标,参数名,参数值
		window._paq.push(['setCustomVariable', bigData.index, bigData.name,bigData.value,bigData.page]);
	}

	/**
	 * 传入大数据用户标识
	 */
	static setBigDataUserId = (mobile) => {
		window._paq.push(['setUserId', mobile]);
	}

	/**
	 * 传入大数据事件
	 */
	static setBigDataEvent = (action) => {
		window._paq.push(['trackEvent','wx',action]);
	}
}

export const getCookie = name => Cookies.get('ltn_'+name);
//存取
export const setCookie = ({ name, value }) => {
	let domain;
	if(window.location.host.indexOf('lingtouniao.com') != -1){
		 domain='lingtouniao.com'
	}else{
		 domain = window.location.host
	}
  if (typeof name === 'undefined') {
    throw new Error('cookie name must be not undefined');
  } else {
    Cookies.set('ltn_'+name,value,{ domain: domain});
  }
};
//删除
export const delCookie = name => {
  Cookies.remove('ltn'+name);
};
