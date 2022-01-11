<template>
	<div id="workThing">
		<ul>
			<li><span><img src="../assets/icon_more_point.png"><em>系统bug</em></span><em><img src="../assets/icon_16x_arrow_Down.png"></em></li>
			<li><em><img src="../assets/tag_1.png"></em><em>公文待办标题文字内容</em></li>
			<li><em>2018/9/20 10:00</em><em>新</em><em>标签一</em><em>标签二</em><em>标签三</em></li>
		</ul>
		<ul>
			<li><span><img src="../assets/icon_more_point_1.png"><em>协同任务</em></span><em><img src="../assets/icon_16x_arrow_Down.png"></em></li>
			<li><em><img src="../assets/tag.png"></em><em>协同任务标题文字内容</em></li>
			<li><em>2018/9/20 10:00</em><em>新</em><em>标签一</em><em>标签二</em><em>标签三</em></li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'workThing',
		props: {
			msg: String
		}
	}
</script>

<style scoped="scoped">
	#workThing {
		/* margin-top: 1rem; */
		margin: 0.6875rem 0.9375rem;
	}

	#workThing ul {
		display: flex;
		flex-direction: column;
		margin-bottom: 0.75rem;
		background-color: #FFFFFF;
		box-shadow: 0rem 0.5625rem 0.625rem -0.1875rem rgba(109,151,197,0.18);
		border-radius: 0.625rem;
	}
	
	ul li{
		display: flex;
		margin-left: 0.9375rem;
	}
	ul li img {
		width: 20%;
	}
	ul li:first-child {
		display: flex;
		justify-content: space-between;
		color: #000000;
		font-size: 1.0625rem;
		font-weight: 500;
		line-height: 1.5rem;
		padding: 0.875rem 0.625rem 0.59375rem 0;
		border-bottom: 0.0625rem solid #f0f0f0;
	}
	
	ul li:first-child img {
		width: 1rem;
	}

	ul li:nth-child(2) {
		display: flex;
		justify-content: flex-start;
		color: #343434;
		font-size: 1rem;
		line-height: 1.25rem;
		font-weight: 500;
		padding-top: 0.90625rem;
	}
	
	ul li:nth-child(2) em:first-child img{
		width: 2rem;
		margin-right: 0.375rem;
	}
	ul li:last-child {
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
		line-height: 1.25rem;
		padding: 0.625rem 1.5rem 0.9375rem 0;
	}
	
	ul li:last-child em:nth-child(1){
		color: #575757;
	}
	
	ul li:last-child em:nth-child(2){
		color: #189AFF;
		font-size: 0.8125rem;
		margin-left: 0.625rem;
		padding: 0 0.1875rem;
		border-radius: 0.375rem;
		background-color: rgba(23,153,255,0.12);
	}
	ul li:last-child em:nth-child(3){
		color: #4ca845;
		font-size: 0.8125rem;
		margin-left: 0.53125rem;
		padding: 0 0.28125rem;
		border-radius: 0.375rem;
		background-color: rgba(76,168,69,0.12);
	}
	ul li:last-child em:nth-child(4){
		color: #ea7f1a;
		font-size: 0.8125rem;
		margin-left: 0.3125rem;
		padding: 0 0.28125rem;
		border-radius: 0.375rem;
		background-color: rgba(241,136,36,0.12);
	}
	ul li:last-child em:nth-child(5){
		color: #d93e46;
		font-size: 0.8125rem;
		margin-left: 0.3125rem;
		padding: 0 0.28125rem;
		border-radius: 0.375rem;
		background-color: rgba(220,80,88,0.12);
	}
</style>
