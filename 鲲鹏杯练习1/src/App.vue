<template>
	<div id="app">
		<div id="daohang">
			<span id="gongzuotai"><router-link to="/"><img src="./assets/icon_32x_bottom_gzt_on.png">
					<p>工作台</p>
				</router-link>
			</span>
			<span id="daiban"><router-link to="daiban"><img src="./assets/icon_32x_bottom_gw_off.png">
			<p>公文待办</p>
			</router-link></span>
			<span id="other"><router-link to="other"><img src="./assets/icon_32x_bottom_qt_off.png">
			<p>其他事务</p>
			</router-link></span>
			<span id="msg"><router-link to="msg"><img src="./assets/icon_32x_bottom_hy_off.png">
			<p>会议通知</p>
			</router-link></span>
			<span id="self"><router-link to="self"><img src="./assets/icon_32x_bottom_wd_off.png">
			<p>我的</p>
			</router-link></span>
		</div>
		<router-view />
	</div>
</template>

<style>
	/* 所有标签内外边距清零 */
	* {
		margin: 0;
		padding: 0;
		/* CSS3盒子模型 */
		box-sizing: border-box;
	}
	
	#app {
		/* CSS3 抗锯齿形,让文字显示更清晰*/
		-webkit-font-smoothing: antialiased;
		font: 1rem/1.5 Microsoft YaHei, Heiti SC, tahoma, Hiragino Sans GB Avenir, Helvetica, Arial, "\5B8B\4F53", sans-serif;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #262626;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
		background-color: #ffffff;
	}
	
	/* em和i斜体的文字不倾斜 */
	em,
	i {
		font-style: normal;
	}
	
	/* 去掉li的小圆点 */
	li {
		list-style: none;
	}
	
	img {
		/* border 0 照顾低版本浏览器 如果 图片外面包含了链接会有边框问题 */
		border: 0;
		/* 取消图片底侧有空白间隙的问题 */
		vertical-align: middle;
	}
	
	button {
		/* 当鼠标经过button按钮时,鼠标箭头变小手 */
		cursor: pointer;
	}
	
	a {
		color: #666;
		text-decoration: none;
	}
	
	button,
	input {
		/* "\5B8B\4F53" 就是宋体的意思,这样浏览器兼容性比较好 */
		font-family: Microsoft YaHei, Heiti SC, tahoma, arial, Hiragino Sans GB, "\5B8B\4F53", sans-serif;
		outline: none;
		/* 默认有灰色边框,不需要则手动去掉 */
		border: 0;
	}
	
	.hide,
	.none {
		display: none
	}
	
	/* 清除浮动 */
	.clearfix:after {
		visibility: hidden;
		clear: both;
		display: block;
		content: ".";
		height: 0
	}
	
	.clearfix {
		*zoom: 1
	}

	#daohang {
		display: flex;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
		padding: 0.5rem ;
		background-color: #fff;
		border-top-left-radius: 0.625rem;
		border-top-right-radius: 0.625rem;
	}
	
	#daohang span {
		flex: 1;
		font-size: 0.5rem;
	}
	#daohang img {
		width: 50%;
	}
	#daiban p::after{
		position: absolute;
		top: 0.4375rem;
		content: '99';
		color: #FFFFFF;
		font-size: 0.625rem;
		background-color: #ff4b4b;
		padding: 0 0.0625rem;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		border-bottom-right-radius: 50%;
	}
	#other p::after{
		position: absolute;
		top: 0.4375rem;
		content: '9';
		color: #FFFFFF;
		font-size: 0.625rem;
		background-color: #ff4b4b;
		padding: 0 0.0625rem;
		border-top-left-radius: 50%;
		border-top-right-radius: 50%;
		border-bottom-right-radius: 50%;
	}

	#daohang a.router-link-exact-active {
		color: #348eff;
		font-weight: 700;
	}
</style>
