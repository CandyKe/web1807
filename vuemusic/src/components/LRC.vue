<template lang="html">
	<div class="lrcContainer">
		<div class="lrc" ref="lrc">
			<p :class="{'active':keyArr[index]<currentTime && currentTime<keyArr[index+1]}" class="lrc-p" v-for="(item,key,index) in lrcsData" :key="index">{{item}}{{ getScrollTop(index) }}</p>
		</div>
	</div>
</template>

<script>
	
export default{
	name:"LRC",
	data(){
		return{
			lrcsData:null,
			keyArr:[]
		}
	},
	props:{
		currentTime:{
			type:[Number,String],
			default:0
		},
		durationTime:{
      type:[Number,String],
      default:0
    },
    id:{
    	type:[String,Number],
    	default:0
    }
	},
	mounted(){
		this.$axios.get(this.HOST + "/v1/restserver/ting?method=baidu.ting.song.lry&songid="+this.id)
		.then(res => {
			//数据解析
			this.lrcData(res.data)
			// console.log(res.data)
		})
		.catch(error => {
			console.log(error)
		})
	},
	methods:{
		getAllKey(){
			for(var i in this.lrcsData){
				this.keyArr.push(i);
			}
		},
		getScrollTop(index){
			if(this.keyArr[index]<this.currentTime && this.currentTime<this.keyArr[index+1]){
				this.$refs.lrc.style.top = -30*(index-2) + "px"
			}
		},
		lrcData(data){
			var lyrics = data.lrcContent.split("\n");
			var lrcObj = {};
			for(var i=0;i<lyrics.length;i++){
				var lyric = decodeURIComponent(lyrics[i]);
				var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
				var timeRegExpArr = lyric.match(timeReg);
				if(!timeRegExpArr)continue;
				var clause = lyric.replace(timeReg,'')
				// console.log(clause)//歌词
				for(var k = 0,h = timeRegExpArr.length;k < h;k++){
          var t = timeRegExpArr[k];
          var min = Number(String(t.match(/\[\d*/i)).slice(1)),
              sec = Number(String(t.match(/\:\d*/i)).slice(1));
          var time = min * 60 + sec;
          lrcObj[time] = clause;
				}
			}
			this.lrcsData = lrcObj;
			this.getAllKey();
		}
	}
}	

</script>

<style lang="css" scoped>

.lrcContainer{
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: relative;
}

.lrc{
	width: 100%;
  position: absolute;
  top: 0;
}
.active{
  color: #ff5555 !important;
  font-size: 18px;
}
.lrc-p{
  height: 30px;
	line-height: 30px;
}

.up30{
	margin-top: -30px;
}

</style>
