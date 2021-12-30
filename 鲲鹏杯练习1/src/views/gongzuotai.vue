<template>
	<div id="gongzuotai">
		<!-- 搜索+添加模块 -->
		<div id="searchindex">
			<div id="sousuo">
				<a href="">
					<img src="../assets/icon_16x_search.png" />
				</a>
			</div>
			<p>工作台</p>
			<div id="other">
				<a href="">
					<img src="../assets/icon_16x_add_1.png" />
				</a>
			</div>
		</div>
		<!-- 焦点图模块 -->
		<div id="focus">
			<img src="../assets/banner1.png" />
		</div>
		<div id="nav">
			<ul>
				<li><a href="#"><img src="../assets/icon_64x_m_gwfw.png">
						<p>公文发文</p>
					</a></li>
				<li><a href="#"><img src="../assets/icon_64x_m_gwsw.png">
						<p>公文收文</p>
					</a></li>
				<li><a href="#"><img src="../assets/icon_64x_m_gzxt.png">
						<p>工作协同</p>
					</a></li>
				<li><a href="#"><img src="../assets/icon_64x_m_hytz.png">
						<p>会议通知</p>
					</a></li>
				<li><a href="#"><img src="../assets/icon_64x_m_qjsq.png">
						<p>请假申请</p>
					</a></li>
				<li><a href="#"><img src="../assets/icon_64x_m_wcsq.png">
						<p>外出申请</p>
					</a></li>
				<li><a href="#"><img src="../assets/icon_64x_m_ycsq.png">
						<p>用车申请</p>
					</a></li>
				<li><a href="#"><img src="../assets/icon_64x_m_gd.png">
						<p>更多</p>
					</a></li>
			</ul>
		</div>
		<div class="Thing">
			<div id="thing_nav">
				<a v-for="(item,index) in tabList" :key="index" style="cursor:pointer"
					@click="changeView(index)">{{item}}</a>
				<!-- <a href="#" @click="showTag(flase)">
					<p>个人事项</p><img src="../assets/point_1.png">
				</a>
				<a href="#">
					<p>岗位事项</p><img src="../assets/point_1.png">
				</a>
				<a href="#">
					<p>委托事项</p><img src="../assets/point_1.png">
				</a> -->
			</div>
			<component :is="currentView"></component>
			<!-- <selfThing v-show="tag_visible">{{msg}}</selfThing>
			<workThing>{{msg}}</workThing>
			<helpThing>{{msg}}</helpThing> -->
		</div>
		<div style="height: 4rem;">
		</div>
		<daka></daka>
	</div>

</template>
<script>
	import selfThing from '../components/selfThing.vue'
	import workThing from '../components/workThing.vue'
	import helpThing from '../components/helpThing.vue'
	import daka from '../components/daka.vue'
	export default {
		name: 'gongzuotai',
		components: {
			selfThing,
			workThing,
			helpThing,
			daka
		},
		data() {
			return {
				index: 0,
				arr: ["selfThing", "workThing", "helpThing"],
				tabList: ["个人事项", "岗位事项", "委托事项"],
			}
		},
		computed: {
			currentView() {
				return this.arr[this.index];
			}
		},
		methods: {
			changeView(index) {
				this.index = index;
			}
		},
	}
</script>

<style scoped="scoped">
	#gongzuotai {
		display: flex;
		flex-direction: column;
		background: url(../assets/head_bg.png) no-repeat 0rem -2rem;
		background-size: contain;
	}

	#searchindex {
		display: flex;
		justify-content: space-between;
		padding-top: 0.5rem;
	}

	#sousuo {
		flex: 1;
	}

	#searchindex img {
		width: 50%;
	}

	#searchindex p {
		flex: 5;
		font-size: 1rem;
		color: #FFFFFF;
	}

	#other {
		flex: 1;
	}

	#focus img {
		width: 95%;
		padding-top: 1rem;
	}

	#nav {
		display: flex;
		font-size: 0.75rem;
		margin: 0.25rem 1rem;
	}

	#nav ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;

	}

	#nav ul li {
		display: flex;
		/* flex: auto; */
		width: 20%;
		flex-direction: column;
		align-items: center;
		margin-bottom: 0.75rem;
		margin-right: 1rem;
	}

	#nav ul li a {
		width: 100%;
	}

	#nav ul li:nth-child(4) {
		margin-right: 0;
	}

	#nav ul li:nth-child(8) {
		margin-right: 0;
	}

	#nav ul li:last-child p {
		padding: 0 0.8rem;
	}

	#nav img {
		width: 60%;
	}

	.Thing {
		display: flex;
		flex-direction: column;
		background-color: #f8f9fd;
		border-radius: 0.625rem;
	}

	#thing_nav {
		display: flex;
		justify-content: space-between;
	}

	.Thing a {
		margin: 0.7rem 1rem 0 1rem;
	}

	.Thing a img {
		width: 50%;
		vertical-align: top;
	}
</style>
