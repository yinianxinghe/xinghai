<template>
	<div id="daka">
		<div id="calender"><img src="../assets/icon_more_dk.png"></div>
		<div id="time">{{time}}</div>
		<div id="dk">打卡</div>
	</div>
</template>

<script>
	export default {
		name: 'daka',
		data() {
			return {
				time: ''
			}
		},
		methods: {
			currentTime() {
				setInterval(this.nowTime, 1000)
			},
			nowTime() {
				let now = new Date();
				let hours = (now.getHours()) < 10 ? "0" + (now.getHours()) : (now.getHours());
				let minutes = (now.getMinutes()) < 10 ? "0" + (now.getMinutes()) : (now.getMinutes());
				let seconds = (now.getSeconds()) < 10 ? "0" + (now.getSeconds()) : (now.getSeconds());
				this.time = hours + ":" + minutes + ":" + seconds;
			}
		},
		mounted() {
			this.currentTime()
		},
		// 销毁定时器
		beforeDestroy: function() {
			if (this.nowTime()) {
				clearInterval(this.nowTime) // 在Vue实例销毁前，清除时间定时器
			}
		}


	}
</script>

<style>
	#daka {
		position: fixed;
		bottom: 20%;
		right: 0;
		width: 5rem;
		height: 5rem;
		font-size: 0.875rem;
		line-height: 1.0625rem;
		border: 0.125rem solid #189aff;
		box-shadow: 0 0.625rem 0.9375rem -0.3125rem rgba(0,106,239,0.19);
		border-radius: 50%;
		background-color: #FFFFFF;
	}

	#calender {
		margin-top: 0.5rem;
	}

	#calender img {
		width: 1.625rem;
	}

	#dk {
		color: #189AFF;
	}
</style>
