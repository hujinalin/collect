(function(){
	var data = [
		{name:'Ant Motion', desc:'使用 Ant Motion 能够快速在 React 框架中使用动画。', url:'https://motion.ant.design/index-cn'},
		{name:'React 中国', desc:'React中国-Reactjs中文教程-React中文资料-react中文文档-react中文api-react 中文官网-react.js api', url:'https://tianxiangbing.github.io/react-cn/index.html'},
		{name:'es6快速入门 - _marven - 博客园', desc:'es6快速入门 - _marven - 博客园', url:'https://www.cnblogs.com/zhouyangla/p/7225335.html'},
		{name:'大白话讲解Promise（一） - 吕大豹 - 博客园', desc:'大白话讲解Promise（一） - 吕大豹 - 博客园', url:'https://www.cnblogs.com/lvdabao/p/es6-promise-1.html'},
		{name:'使用ES6的Promise完美解决回调地狱 - 帅舅舅 - 博客园', desc:'使用ES6的Promise完美解决回调地狱 - 帅舅舅 - 博客园', url:'https://www.cnblogs.com/qq9694526/p/5714124.html'},
		{name:'ES6中的异步编程：Generators函数+Promise:最强大的异步处理方式 - sutaking全栈之路 - SegmentFault 思否', desc:'ES6中的异步编程：Generators函数+Promise:最强大的异步处理方式 - sutaking全栈之路 - SegmentFault 思否', url:'https://segmentfault.com/a/1190000007546512'},
		{name:'基于vue构建的spa项目总结(一) - CSDN博客', desc:'基于vue构建的spa项目总结(一) - CSDN博客', url:'http://blog.csdn.net/liajoy/article/details/53536669'},
		{name:'深刻理解Vue中的组件 - 个人文章 - SegmentFault 思否', desc:'深刻理解Vue中的组件 - 个人文章 - SegmentFault 思否', url:'https://segmentfault.com/a/1190000010527064'},
		{name:'Router 实例 · vue-router', desc:'Router 实例 · vue-router', url:'https://router.vuejs.org/zh-cn/api/router-instance.html'},
		{name:'用 Vue + vue-router + Webpack 构建单页 Web APP (SPA)', desc:'用 Vue + vue-router + Webpack 构建单页 Web APP (SPA)', url:'https://zhuanlan.zhihu.com/p/26281732'},
		{name:'Vue 爬坑之路（四）—— 与 Vuex 的第一次接触 - WiseWrong - 博客园', desc:'Vue 爬坑之路（四）—— 与 Vuex 的第一次接触 - WiseWrong - 博客园', url:'https://www.cnblogs.com/wisewrong/p/6344390.html'},
		{name:'开始 · Vuex', desc:'开始 · Vuex', url:'https://vuex.vuejs.org/zh-cn/getting-started.html'},
		{name:'State · Vuex', desc:'State · Vuex', url:'https://vuex.vuejs.org/zh-cn/state.html'},
		{name:'网页模板,网站模板,DIV+CSS模板,企业网站模板下载-模板之家', desc:'网页模板,网站模板,DIV+CSS模板,企业网站模板下载-模板之家', url:'http://www.cssmoban.com/'},
		{name:'整理总结的一些前端面试题 - WEB前端 - 伯乐在线', desc:'整理总结的一些前端面试题 - WEB前端 - 伯乐在线', url:'http://web.jobbole.com/88041/'},
		{name:'vue项目中引入字体库（icon）（详细步骤） - 简书', desc:'vue项目中引入字体库（icon）（详细步骤） - 简书', url:'https://www.jianshu.com/p/e7329afafb4b'},
		{name:'Font Awesome Icons', desc:'字体图标', url:'https://fontawesome.com/v4.7.0/icons/'},
		{name:'vuejs-折腾系列（一）vue-fontawesome使用 - CSDN博客', desc:'vuejs-折腾系列（一）vue-fontawesome使用 - CSDN博客', url:'http://blog.csdn.net/gccll/article/details/72457829'},
		{name:'vue初级学习--组件的使用(自定义组件) - atjinna - 博客园', desc:'vue初级学习--组件的使用(自定义组件) - atjinna - 博客园	', url:'http://www.cnblogs.com/atjinna/p/7800456.html'},
		{name:'vue axios全攻略 - 最骚的就是你 - 博客园', desc:'vue axios全攻略 - 最骚的就是你 - 博客园', url:'https://www.cnblogs.com/libin-1/p/6607945.html'},
		{name:'使用说明 · Axios 中文说明 · 看云', desc:'使用说明 · Axios 中文说明 · 看云', url:'https://www.kancloud.cn/yunye/axios/234845'},
		{name:'大学生毕业设计（论文）管理系统', desc:'大学生毕业设计（论文）管理系统', url:'http://jxau.co.cnki.net/Main.html'},
		{name:'Javascript字符串常用方法详解_javascript技巧_脚本之家', desc:'Javascript字符串常用方法详解_javascript技巧_脚本之家', url:'http://www.jb51.net/article/89018.htm'},
		{name:'D3.js-基础知识 - CSDN博客', desc:'D3.js-基础知识 - CSDN博客	', url:'http://blog.csdn.net/ligang2585116/article/details/52653830'},
		{name:'前端学习总结（二十二）——常见数据结构与算法javascript实现 - CSDN博客', desc:'前端学习总结（二十二）——常见数据结构与算法javascript实现 - CSDN博客', url:'https://blog.csdn.net/haoshidai/article/details/52263191'},
		{name:'前端必读：浏览器内部工作原理 - 舒润 - 博客园', desc:'前端必读：浏览器内部工作原理 - 舒润 - 博客园', url:'https://www.cnblogs.com/rainy-shurun/p/5603686.html'},
		{name:'微信小程序实战之百思不得姐精简版 - CSDN博客', desc:'微信小程序实战之百思不得姐精简版 - CSDN博客', url:'https://blog.csdn.net/u014360817/article/details/52753565?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io'},
		{name:'史上最全的微信小程序代码大全 - CSDN博客', desc:'史上最全的微信小程序代码大全 - CSDN博客', url:'https://blog.csdn.net/fenxiangjun/article/details/54429666'},
		{name:'快速实现JS图片懒加载(可视区域加载)示例代码_javascript技巧_脚本之家', desc:'快速实现JS图片懒加载(可视区域加载)示例代码_javascript技巧_脚本之家', url:'http://www.jb51.net/article/102049.htm'},
		{name:'API 文档 | Node.js 中文网', desc:'API 文档 | Node.js 中文网', url:'http://nodejs.cn/api/'},
		{name:'Babel · 用于编写下一代 JavaScript 的编译器 | Babel中文网', desc:'Babel · 用于编写下一代 JavaScript 的编译器 | Babel中文网', url:'https://babeljs.cn/'},
		{name:'js正则表达式基本语法(精粹)_正则表达式_脚本之家', desc:'js正则表达式基本语法(精粹)_正则表达式_脚本之家', url:'http://www.jb51.net/article/72044.htm'},
		{name:'最全前端面试问题及答案总结 - AutismTune - 博客园', desc:'最全前端面试问题及答案总结 - AutismTune - 博客园', url:'https://www.cnblogs.com/autismtune/p/5210116.html'},
		{name:'gulp.js - 基于流的自动化构建工具。 | gulp.js 中文网', desc:'gulp.js - 基于流的自动化构建工具。 | gulp.js 中文网', url:'https://www.gulpjs.com.cn/'},
		{name:'使用webpack+npm多元化命令 - CSDN博客', desc:'使用webpack+npm多元化命令 - CSDN博客', url:'https://blog.csdn.net/u010312740/article/details/52389758'},
		{name:'AudioContext - Web API 接口 | MDN', desc:'AudioContext - Web API 接口 | MDN', url:'https://developer.mozilla.org/zh-CN/docs/Web/API/AudioContext'},
		{name:'利用HTML5 Web Audio API给网页JS交互增加声音 « 张鑫旭-鑫空间-鑫生活', desc:'利用HTML5 Web Audio API给网页JS交互增加声音 « 张鑫旭-鑫空间-鑫生活', url:'https://www.zhangxinxu.com/wordpress/2017/06/html5-web-audio-api-js-ux-voice/'},
		{name:'前端图像处理指南 - 动感小前端的专栏 - SegmentFault 思否', desc:'前端图像处理指南 - 动感小前端的专栏 - SegmentFault 思否', url:'https://segmentfault.com/a/1190000008044204'},
		{name:'孤傲苍狼 - 博客园', desc:'孤傲苍狼 - 博客园', url:'https://www.cnblogs.com/xdp-gacl/'},
		{name:'node.js - nodejs搭建linux服务器如何启动项目？ - SegmentFault 思否', desc:'node.js - nodejs搭建linux服务器如何启动项目？ - SegmentFault 思否', url:'https://segmentfault.com/q/1010000014869923'},
		{name:'深入浅出Object.defineProperty() - 简书', desc:'深入浅出Object.defineProperty() - 简书', url:'https://www.jianshu.com/p/8fe1382ba135'},
		{name:'RegExp对象 -- JavaScript 标准参考教程（alpha）', desc:'RegExp对象 -- JavaScript 标准参考教程（alpha）', url:'http://javascript.ruanyifeng.com/stdlib/regexp.html#toc3'},
		{name:'webpack', desc:'webpack中文文档', url:'https://webpack.docschina.org/concepts/'},
		{name:'前端教程-蚂蚁部落', desc:'前端教程-蚂蚁部落', url:'http://www.softwhy.com/qiduan/'},
		{name:'html5--移动端视频video的android兼容，去除播放控件、全屏等 - 前端填坑 - SegmentFault 思否', desc:'html5--移动端视频video的android兼容，去除播放控件、全屏等 - 前端填坑 - SegmentFault 思否', url:'https://segmentfault.com/a/1190000006857675?utm_source=tag-newest'},
		{name:'three.js文档-技术博客', desc:'three.js文档-技术博客', url:'http://www.yanhuangxueyuan.com/threejs/docs/index.html'},
		{name:'Three.js 中文教程 | 参考手册 | 使用指南 | 动画特效实例 | 踏得网', desc:'Three.js 中文教程 | 参考手册 | 使用指南 | 动画特效实例 | 踏得网', url:'https://techbrood.com/threejs/docs/'},
		{name:'Flex布局 - Javascript小白 - 博客园', desc:'Flex布局 - Javascript小白 - 博客园', url:'https://www.cnblogs.com/dreamperson/p/9367008.html'},
		{name:'Vue 项目初步总结（在项目中遇到的问题以及解决办法） - 简书', desc:'Vue 项目初步总结（在项目中遇到的问题以及解决办法） - 简书', url:'https://www.jianshu.com/p/2e99b511d910'},
		{name:'正则表达式练习（js） - 若水弹丸之地 - CSDN博客', desc:'正则表达式练习（js） - 若水弹丸之地 - CSDN博客', url:'https://blog.csdn.net/b954960630/article/details/82634008'},
		{name:'TortoiseGit安装、配置 - 修行者HT - 博客园', desc:'TortoiseGit安装、配置 - 修行者HT - 博客园', url:'https://www.cnblogs.com/xiuxingzhe/p/9312929.html'},
		{name:'TinyPNG – Compress PNG images while preserving transparency', desc:'图片无损压缩', url:'https://tinypng.com/'},
		{name:'MUI-最接近原生APP体验的高性能前端框架', desc:'MUI-最接近原生APP体验的高性能前端框架', url:'https://dev.dcloud.net.cn/mui/'},
		{name:'草料微信小程序参数二维码生成器', desc:'草料微信小程序参数二维码生成器', url:'https://cli.im/weapp'},
		{name:'ECharts个性化图表样式的实现_w3cschool', desc:'ECharts个性化图表样式的实现_w3cschool', url:'https://www.w3cschool.cn/echarts_tutorial/echarts_tutorial-nw9328xh.html'},
		{name:'Palettes | Flat UI Colors 🎨 280 handpicked colors ready for COPY & PASTE', desc:'UI设计配色', url:'https://flatuicolors.com/'},
		{name:'优设网 - UISDC - 设计师交流学习平台 - 看设计文章，学软件教程，找灵感素材，尽在优设网！', desc:'优设网 - UISDC - 设计师交流学习平台 - 看设计文章，学软件教程，找灵感素材，尽在优设网！', url:'https://www.uisdc.com/'},
		{name:'DCloud - HBuilder、HBuilderX、uni-app、uniapp、5+、mui、wap2app、流应用、快应用开发工具、HTML5', desc:'DCloud - HBuilder、HBuilderX、uni-app、uniapp、5+、mui、wap2app、流应用、快应用开发工具、HTML5', url:'https://dcloud.io/'},
		{name:'微信小程序后台搭建踩坑日记 - 简书', desc:'微信小程序后台搭建踩坑日记 - 简书', url:'https://www.jianshu.com/p/184a5077beb7'},
		{name:'Swagger UI', desc:'Swagger UI', url:'http://39.107.72.184/bmicpd/swagger-ui.html'},
		{name:'kepler快速开始', desc:'kepler快速开始', url:'https://docs.keplerjs.io/quick-start.html'},
		{name:'北京责任规划师首页', desc:'北京责任规划师首页', url:'http://www.bjcsghxh.com/pub/main.html'},
		{name:'doyoudo', desc:'视频特效、剪辑', url:'http://www.doyoudo.com/'},
		{name:'1000+ Free English Lessons with ESL Worksheets - ESLBuzz Learning English', desc:'1000+ Free English Lessons with ESL Worksheets - ESLBuzz Learning English', url:'https://www.eslbuzz.com/'},
		{name:'第一教程网(diyijc.com) - 提供视频教程免费在线观看学习!', desc:'第一教程网(diyijc.com) - 提供视频教程免费在线观看学习!', url:'http://diyijc.com/'},
		{name:'BootCDN - Bootstrap 中文网开源项目免费 CDN 加速服务', desc:'BootCDN - Bootstrap 中文网开源项目免费 CDN 加速服务', url:'https://www.bootcdn.cn/'},
		{name:'kepler.gl/a-add-data-to-the-map.md，掌握者·keplergl / kepler.gl·GitHub', desc:'kepler如何添加数据、使用', url:'https://github.com/keplergl/kepler.gl/blob/master/docs/user-guides/b-kepler-gl-workflow/a-add-data-to-the-map.md#supported-file-formats'},
		{name:'Examples - Apache ECharts (incubating)', desc:'echarts飞机航线特效案例', url:'https://www.echartsjs.com/examples/zh/editor.html?c=geo-lines'},
		{name:'Echarts从入门到上手实战视频教程 70课-2019_哔哩哔哩 (゜-゜)つロ 干杯~-bilibili', desc:'Echarts从入门到上手实战视频教程 70课-2019_哔哩哔哩 (゜-゜)つロ 干杯~-bilibili', url:'https://www.bilibili.com/video/av53820080?from=search&seid=2563580310822267210'},
		{name:'Index | Node.js v13.0.1 Documentation', desc:'Index | Node.js v13.0.1 Documentation', url:'https://nodejs.org/api/'},
		{name:'Components | BootstrapVue', desc:'Components | BootstrapVue', url:'https://bootstrap-vue.js.org/docs/components/'},
		{name:'GeoHey|极海云', desc:'GeoHey|极海云', url:'http://geohey.com/data/public-data'},
		{name:'Git for Windows 国内下载站', desc:'Git for Windows 国内下载站', url:'https://github.com/waylau/git-for-win'},
		{name:'inMap', desc:'inMap', url:'http://inmap.talkingdata.com/#/docs/v2/introduce'},
		{name:'panzoid', desc:'视频剪辑，开头', url:'https://panzoid.com'},
		{name:'removebg', desc:'在线抠图，去除背景', url:'http://www.remove.bg'},
		{name:'字体家', desc:'免费字体，下载', url:'https://www.zitijia.com'},
		{name:'airdroid', desc:'录屏，手机电脑文件传输，直播', url:'https://web.airdroid.com'},
		{name:'今日热榜', desc:'几乎所有平台的热点新闻', url:'https://tophub.today'},
		{name:'壁纸网', desc:'壁纸，高清', url:'https://www.pexels.com'},
		{name:'网站大全', desc:'找网站，网站大全', url:'https://www.addog.vip'},
		{name:'', desc:'', url:''},
	];
	var str = ``;
	for(var i = 0, len = data.length; i < len; i++){
		str += `
			<div class='website-item'>
				<a href="${data[i].url}" target="_blank">
					<h3 class='website-name'>${data[i].name}</h3>
				</a>
				<p class='website-desc'><span>${data[i].desc}</span></p>
			</div>
		`;
	}
	document.getElementById('website-content').innerHTML = str;
})()