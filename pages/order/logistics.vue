<template>
	<view class="">
		<view class="" v-for="(item,index) in abb">
			<button type="default" @click="btnClick" :data-id="item.id">{{item.name}}</button>
		</view>
	</view>
</template>

<script>
	export default{
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
		onLoad(options) {
			console.log(options)
		}
	}
</script>

<style>
</style>
