<template>
	<view class="payorder">
		<Head title="支付订单"></Head>
		<view :style="{width: '100%',height:nav_height + 'px' }"></view>
		<view class="payorder-content">
			<view class="payorder-content-top">
				<view class="d-flex" style="margin-top: 50upx;">
					<view class="await-pay">等待支付</view>
					<view class="await-price"> <text style="font-size: 32upx;">￥</text>{{payInfo.total}}</view>
				</view>
				<view class="residue-time d-flex">
					<text>剩余时间：</text>
					<uni-countdown  :show-day="false" :hour="1" />
				</view>
			</view>
			<view class="payorder-content-main">
				<view class="pay-title" style="">支付方式</view>
				<view class="pay-why d-flex j-sb a-center">
					<image style="height: 92upx;width: 92upx;" src="../../static/img/pay_WeChat.png" mode=""></image>
					<view class="aa">微信支付</view>
					<label class="radio">
						<radio value="" :checked="pay_way==='app_wechat'?true:false" @click="cutPay('app_wechat')"/><text></text>
					</label>
				</view>
				<!-- #ifdef H5-->
				<view class="pay-why d-flex j-sb a-center" >
					<image style="height: 92upx;width: 92upx;" src="../../static/img/pay_Alipay.png" mode=""></image>
					<view class="aa">支付宝支付</view>
					<label class="radio">
						<radio value="" :checked="pay_way==='app_wechat'?false:true" @click="cutPay('alipay')" /><text></text>
					</label>
				</view>
				<!-- #endif-->
			</view>
		</view>
		<view class="" style="width: 100%; height: 138upx;"></view>
		<view class="address-footer" >
			<view class="address-footer-main" @click="goBuy">
				<view class="add-btn d-flex j-center a-center">去支付</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Head from "@/components/head.vue"
	import uniCountdown from '@/components/uni/uni-countdown/uni-countdown.vue'
	import uniSection from '@/components/uni/uni-section/uni-section.vue'
	export default{
		data(){
			return{
				nav_height:0,
				pay_way:'app_wechat',//支付方式  app_wechat-微信支付，alipay-支付宝,
				coupon_id:'',//
				product:[],
				payInfo:'',//支付信息
			}
		},
		components:{
			Head,
			uniCountdown,
			uniSection
		},
		methods:{
			cutPay(type){
				console.log(type)
				this.pay_way = type
			},
			//支付
			goBuy(){
				this.$http.post("",{
					access_id:uni.getStorageSync('access_id'),
					store_id:1,
					store_type:2,
					module:'app',
					action:"pay",
					app:"",
					type:this.pay_way,
					sNo:this.payInfo.sNo
				}).then(res=>{
					console.log(res)
					if(res.data.code == 200){
						let paymentData = res.data
						this.zhifu(paymentData)
					}
				})
			},
			zhifu(paymentData){
				let provider = this.pay_way === 'app_wechat'?'wxpay':'alipay'
				console.log(paymentData)
				console.log(provider)
				uni.requestPayment({
				    provider: provider,
				    timeStamp: String(paymentData.timestamp),
				    nonceStr: paymentData.noncestr,
				    package: paymentData.package,
				    signType: 'MD5',
				    paySign: paymentData.sign,
				    success: (res) => {
						console.log(res)
					},
					fail(e) {
						console.log('e',e)
					}
				})
			},
			//下单请求 
			placeOrderRequest(){
				this.$http.post("",{
					access_id:uni.getStorageSync('access_id'),
					store_id:1,
					store_type:2,
					module:'app',
					action:"order",
					app:"payment",
					coupon_id:this.coupon_id,
					product:this.product,
					address_id:uni.getStorageSync('address_id') || ''
				}).then(res=>{
					console.log(res)
					if(res.data.code === "200"){
						this.payInfo = res.data.data
					}
				})
			}
		},
		created() {
			this.nav_height = uni.getStorageSync('nav_height')
		},
		onLoad(options) {
			console.log('options',options)
			console.log(uni.getStorageSync('address_id') )
			this.coupon_id = options.coupon_id
			this.product = options.product
			this.placeOrderRequest()
		}
	}
</script>

<style lang="less" scoped>
	.payorder{
		height: 100%;
		width: 100%;
		background: #f4f4f4;
	}
	.payorder-content{
		box-sizing: border-box;
		padding: 20upx 30upx; 
		width: 100%;
		&-top{
			width: 100%;
			height: 240upx;
			background: #FFFFFF;
			border-radius: 20upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.await-pay{
				font-size: 40upx;
				font-weight: 500;
				color: #333333;
				line-height: 56upx;
				
			}
			.await-price{
				color: #FA6E39;
				font-size: 40upx;
				font-weight: 500;
				line-height: 56upx;
			}
			.residue-time{
				font-size: 36upx;
				font-weight: 400;
				color: #333333;
				line-height: 50upx;
				margin-top: 15upx;
			}
		}
		&-main{
			margin-top: 20upx;
			width: 100%;
			height: 334upx;
			background: #FFFFFF;
			border-radius: 20upx;
			overflow: hidden;
			.pay-title{
				font-size: 36upx;
				color: #333333;
				font-weight: 500;
				margin: 15upx 20upx 35upx;
			}
			.pay-why{
				margin: 20upx 20upx;
				.aa{
					font-size: 36upx;
					font-weight: 400;
					color: #333333;
					line-height: 50px;
					margin-right: 100upx;
				}
			}
			
		}
	}
	
	.address-footer{
		height: 138upx;
		width:100% ;
		border-top: 2upx solid #979797;
		position: fixed;
		bottom: 0;
		background: #FFFFFF;
		&-main{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			.add-btn{
				width: 690upx;
				height: 80upx;
				background: linear-gradient(to right, #FD8A03 0%, #FD5700 100%);
				border-radius: 40upx;
				color: #FFFFFF;
				line-height: 44px;
				font-size: 32upx;
			}
		}
	}
	
</style>
