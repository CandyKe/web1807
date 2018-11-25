<template>
	<div class="play">
		<div class="header">
			<div class="title">
				<router-link to="/index">
           <i class="iconfont icon-shouye left"></i>
         </router-link>
				<div class="music-info">
					<p v-if="data.songinfo">{{ data.songinfo.title  }}</p>
           <p v-if="data.songinfo" class="author">{{ data.songinfo.author }}</p>
				</div>
				<a href="#">
           <i class="iconfont icon-sousuo right"></i>
        </a>
			</div>
		</div>

		<div class="song-info">,
			<div class="song-info-img">
				<img v-if="data.songinfo" :src="data.songinfo.pic_big" alt="">
				<LRC v-if="data.songinfo" :currentTime="currentTime" :durationTime="durationTime" :id="data.songinfo.song_id" />
			</div>
			<div class="iconbox">
				<i class="iconfont icon-shoucang2 left"></i>
				<i class="box"></i>
				<i class="iconfont icon-xiazai right"></i>
			</div>
		</div>

		 <div class="song">
       <audio ref="player" v-if="data.bitrate" :src="data.bitrate.show_link" controls></audio>
     </div>

	</div>
</template>

<script>

import LRC from "./LRC"

export default{
	name:"Play",
	data(){
		return{
			currentTime:0,
			durationTime:0,
			n:0
		}
	},
	components:{
		LRC
	},
	props:{
		data:{
			type:Object,
			default:function(){
				return{}
			}
		},
		flag:{
			type:Boolean,
			default:false
		}
	},
	updated(){
    if(this.data.songinfo && this.n == 0){
      this.addEventListener()
      this.n++;
    }
  },
	beforeDestroy(){
    this.removeEventListener()
  },
	methods:{
		//添加事件监听
		addEventListener(){
			this.$refs.player.addEventListener("timeupdate",this._currentTime)
			this.$refs.player.addEventListener("canplay",this._durationTime)
		},

		//移除事件监听
		removeEventListener(){
	      this.$refs.player.removeEventListener("timeupdate",this._currentTime)
	      this.$refs.player.removeEventListener("canplay",this._durationTime)
	   	},

		//当前播放时长
		_currentTime(){
			this.currentTime = this.$refs.player.currentTime;
			// console.log(this.currentTime)
		},
		//总时长
		_durationTime(){
			this.durationTime = this.$refs.player.duration;
			// console.log(this.durationTime)
		}
	}
}
</script>

<style lang="css" scoped>

.header{
	padding:15px;
}

.music-info{
	flex: 1;
	font-size: 20px;
}

.title{
	display: flex;
	text-align: center;
}

.left{
	font-size: 30px;
}

.ca{
  color: red;
}

.right{
	font-size: 30px;
}

.song-info{
	padding: 15px;
}

.song-info-img{
	text-align: center;
}

.song-info-img img{
	width: 50%;
	border-radius: 5px;
	box-shadow: 0 0 10px 0 rgba(50,50,50,.31);
}

.song-lrc{
	margin-top: 10px;
  min-height: 50px;
}

.iconbox{
	display: flex;
	margin-top: 30px;
}

.iconbox .box{
	flex: 1;
}

.song{
	width: 100%;
	text-align: center;
}

.song audio{
	width: 80%;
}

.active{
  color: #222;
}

.author{
  font-size: 12px;
  color: #999;
}

</style>
