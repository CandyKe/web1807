<template lang="html">
  <div class="more-list">
    <div class="container clearfix">
      <div class="row">
        <router-link tag="div" :to="{name:'PlayMusic',params:{id:item.song_id}}" class="col-xs-6" v-for="(item,index) in data" :key="index">
          <div class="wrapper-one">
            <div class="image-wrapper">
              <img :src="item.pic_s500" alt="">
            </div>
            <div>
              <div class="tag">
                {{ setTitle(item.title) }}
              </div>
              <div class="title">
                {{ item.author }}
              </div>
            </div>
          </div>
        </router-link>

      </div>
    </div>
    <div @click="loadMoreHandler" class="load-more">
      加载更多
    </div>
  </div>
</template>

<script>
export default {
  name:"MoreList",
  data(){
    return{

    }
  },
  methods:{
    setTitle(title){
      if(title.length > 10){
        return title.substring(0,12)+"...";
      }
      return title;
    },
    loadMoreHandler(event){
      this.loadEvent()
    }
  },
  props:{
    data:{
      type:Array,
      default:function(){
        return[];
      }
    },
    loadEvent:{
      type:Function,
      default:function(){
        return null;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.more-list{
  padding-top: 10px;
  background: #fff;
}
.image-wrapper{
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  height: 0;
  background-color: #eee;
}
.tag{
  line-height: 24px;
  font-size: 12px;
  color: #999;
}
.title{
  font-size: 12px;
  height: 40px;
  margin-bottom: 20px;
  overflow: hidden;
}

.load-more{
  text-align:center;
  padding-bottom: 20px;
}

</style>
