<template>
	<div class="play-music">
		<PlayView :data="palyData" />
	</div>
</template>

<script>
	import PlayView from "../components/PlayView"

	export default{
		name:"PlayMusic",
		data(){
			return{
				palyData:{},
				flag:false
			}
		},
		components:{
			PlayView
		},
		mounted(){
			this.$axios.get(this.HOST + "/v1/restserver/ting?method=baidu.ting.song.play&songid="+this.$route.params.id)
			.then(res => {
				this.palyData = res.data
				this.flag = true
			})
			.catch(error => {
				console.log(error)
			})
		}
	}
</script>

<style lang="css" scoped>

</style>
