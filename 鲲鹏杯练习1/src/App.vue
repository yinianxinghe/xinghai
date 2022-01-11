<template>
	<div id="app">
		<div id="daohang">
			<span id="gongzuotai">
				<router-link to="/"><img src="./assets/icon_32x_bottom_gzt_on.png">
					<p>工作台</p>
				</router-link>
			</span>
			<span id="daiban">
				<router-link to="daiban"><img src="./assets/icon_32x_bottom_gw_off.png">
					<p>公文待办</p><em><h5>99</h5></em>
				</router-link>
			</span>
			<span id="other">
				<router-link to="other"><img src="./assets/icon_32x_bottom_qt_off.png">
					<p>其他事务</p><em><h5>9</h5></em>
				</router-link>
			</span>
			<span id="msg">
				<router-link to="msg"><img src="./assets/icon_32x_bottom_hy_off.png">
					<p>会议通知</p>
				</router-link>
			</span>
			<span id="self">
				<router-link to="self"><img src="./assets/icon_32x_bottom_wd_off.png">
					<p>我的</p>
				</router-link>
			</span>
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

	html {
		/* CSS3 抗锯齿形,让文字显示更清晰*/
		-webkit-font-smoothing: antialiased;
		font: 16px/1.5 Microsoft YaHei, Heiti SC, tahoma, Hiragino Sans GB Avenir, Helvetica, Arial, "\5B8B\4F53", sans-serif;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #262626;
	}

	#app {
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
		color: #262626;
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
		justify-content: space-between;
		position: fixed;
		bottom: 0;
		right: 0;
		width: 100%;
		padding: 0.625rem 0.9375rem 0.0625rem 0.9375rem;
		background-color: #fff;
		border-top-left-radius: 0.625rem;
		border-top-right-radius: 0.625rem;
	}

	#daohang span {
		flex: 1;
		font-size: 0.875rem;
	}

	#daohang img {
		width: 2rem;
	}

	#daiban em {
		position: absolute;
		top: calc(16%);
		left: calc(33.5%);
		padding: 0 0.0625rem;
		background: #ff4b4b;
		border: 0.0625rem solid #FFFFFF;
		border-radius: 50% 50% 50% 0;
		box-shadow: 0rem 0.125rem 0.25rem 0rem rgba(0,0,0,0.08);
	}
	#daiban em h5{
		font-size: 0.625rem;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: center;
		color: #ffffff;
		line-height: 0.875rem;
		letter-spacing: 0.010625rem;
		padding: 0.0625rem;
	}
	
	#other em {
		position: absolute;
		top: calc(16%);
		left: calc(52%);
		padding: 0 0.0625rem;
		background: #ff4b4b;
		border: 0.0625rem solid #FFFFFF;
		border-radius: 50% 50% 50% 0;
		box-shadow: 0rem 0.125rem 0.25rem 0rem rgba(0,0,0,0.08);
	}
	#other em h5{
		font-size: 0.625rem;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: center;
		color: #ffffff;
		line-height: 0.875rem;
		letter-spacing: 0.010625rem;
		padding: 0.0625rem;
	}

	#daohang a {
		color: #565656;
	}

	#daohang a.router-link-exact-active {
		color: #348eff;
		font-weight: 500;
	}
</style>
