<template>
	<div id="helpThing">
		<ul>
			<li><span><img src="../assets/icon_more_point.png"><em>委托任务</em></span><em><img src="../assets/icon_16x_arrow_Down.png"></em></li>
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
		name: 'helpThing',
		props: {
			msg: String
		}
	}
</script>

<style scoped="scoped">
	#helpThing {
		/* margin-top: 1rem; */
		margin: 0 0.5rem;
	}

	#helpThing ul {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
		background-color: #FFFFFF;
		box-shadow: 0rem 0.5rem 0.2rem rgba(211, 211, 211, 0.3);
		border-radius: 0.625rem;
	}
	
	ul li{
		display: flex;
		margin: 0 0.5rem;
		padding: 0.5rem 0;
	}
	ul li img {
		width: 20%;
	}
	ul li:first-child {
		display: flex;
		justify-content: space-between;
		margin-top: 0.5rem;
		border-bottom: 0.0625rem solid #f0f0f0;
	}

	ul li:nth-child(2) {
		display: flex;
		justify-content: flex-start;
	}

	ul li:last-child {
		display: flex;
		justify-content: space-between;
		font-size: 0.75rem;
		padding-bottom: 1rem;
	}
	
	ul li:nth-child(2) em:first-child img{
		width: 60%;
	}
	ul li:last-child em:nth-child(2){
		color: #2D77F6;
		padding: 0.1rem 0.2rem;
		border-radius: 0.375rem;
		background-color: #e3f2ff;
	}
	ul li:last-child em:nth-child(3){
		color: #4ca845;
		padding: 0.1rem 0.3rem;
		border-radius: 0.375rem;
		background-color: #e9f4e8;
	}
	ul li:last-child em:nth-child(4){
		color: #ea7f1a;
		padding: 0.1rem 0.3rem;
		border-radius: 0.375rem;
		background-color: #fdf0e4;
	}
	ul li:last-child em:nth-child(5){
		color: #d93e46;
		padding: 0.1rem 0.3rem;
		border-radius: 0.375rem;
		background-color: #faeaeb;
	}
</style>
