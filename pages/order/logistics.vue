<template>
	<view class="">
		<view class="" v-for="(item,index) in abb">
			<button type="default" @click="btnClick" :data-id="item.id">{{item.name}}</button>
		</view>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	export default{
		components: {
            Head,
		},
		data(){
			return{
				abb:[
					{id:1,name:'geng'},
					{id:2,name:'hao'}
				]
			}
		},
		methods:{
			btnClick(e){
				console.log(e)
			}
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
		onLoad(options){
			console.log(options,'fff')
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
			let curParam = routes[routes.length - 1].options; //获取路由参数
			this.orderId=curParam.id; //订单商品id
			this.orderId=12143;
			console.log(this.orderId,'ggg')
			this.init()
			
		},
		methods:{
			//初始化
			init(){
				this.$http.post(
				 '',
				 {
					access_id:uni.getStorageSync('access_id'),
					store_id:'1',
					store_type:'2',
					module:'app',
					action:"order",
					app:"express",
					id:this.orderId,
				 }).then((res)=>{
					console.log(res,'hh')
					if(res.data.code==200){
					    this.wuDetail=res.data.data[0]
					}else{
						uni.showToast({
							title:res.data.message
						})
					}
				})
			},
		　
			
		}
	}
</script>

<style scoped lang="less">
	.fen{
			height:100%;
			width:100%;
			font-family: '苹方-简 常规体';
			background: #f4f4f4;
			display: flex;
			flex-direction: column;
			.header{
				width: 100%;
			}
		}
	.main{
		background-color: #F4F4F4;
		padding:20upx 30upx;
	}
	.status{
		width:650upx;
		height:152upx;
		padding:20upx;
		border-radius: 20upx;
		background:#fff;
		margin-bottom:20upx;
		.status1{
			background:#F4F4F4;
			image{
				width:152upx;
				height:152upx;
				margin-right:20upx;
				vertical-align: middle;
			}
			text{
				font-size:36upx;
				color:#333;
				font-weight:bold;
				line-height:152upx;
			}
		}
		
	}
	.wu{
		background-color: #fff;
	}
	.wu-head{
		width:650upx;
		padding:0 20upx;
		background:#F9F9F9;
		height:88upx;
		line-height:88upx;
		font-size:36upx;
	}
	.wu-content{
		width:646upx;
		padding:0 22upx 20upx;
	}
	.wu-list{
		width:646upx;
		display:flex;
		flex-wrap: wrap;
	}
	.wu-time{
		padding:20upx 0;
		width:105upx;
		padding-right:53upx;
		display:inline-block;
		// vertical-align: middle;
		text-align:right;
		border-right:2upx solid #BABABA;
		position:relative;
		.dian{
				position:absolute;
				right:-12upx;
				top:50upx;
				width:24upx;
				height:24upx;
				background-color: #BABABA;
				border-radius: 50%;
		}
		.shou{
			position:absolute;
			right:-35upx;
			top:50upx;
			width:60upx;
			height:60upx;
			border-radius: 50%;
			background:url('../../static/img/shou.png') no-repeat center;
			background-size: 100%;
		}
		
	}
	
	.wu-mess{
		padding:20upx 0;
		font-size:36upx;
		line-height:50upx;
		color:#333;
		width:438upx;
		padding-left:50upx;
	}
</style>
