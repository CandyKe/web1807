<template lang="html">
  <div class="hot-category">
    <div class="container clearfix">
      <div class="row">
        <div class="hot-bg hot-l col-xs-4" @click="getHotCategory({categoryName:'流行',value:1})">流行</div>
        <div class="hot-bg col-xs-4">
          <div class="row">
            <div class="hot-bg-son col-xs-12" @click="getHotCategory({categoryName:'民谣',value:2})">
              民谣
            </div>
            <div class="topborder hot-bg-son col-xs-12" @click="getHotCategory({categoryName:'儿歌',value:22})">
              儿歌
            </div>
          </div>
        </div>
        <div class="hot-bg col-xs-4">
          <div class="row">
            <div class="hot-bg-son col-xs-12" @click="getHotCategory({categoryName:'网络歌曲',value:23})">
              网络歌曲
            </div>
            <div class="hot-bg-son topborder col-xs-12" @click="getHotCategory({categoryName:'乐器',value:24})">
              乐器
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"HotCategory",
  data(){
    return{
      
    }
  },
  methods:{
    getHotCategory(data){
      this.$emit("hotCategoryEvent",data)
    }
  }
}
</script>

<style lang="css" scoped>

.hot-category{
  padding: 10px;
}
.container{
  border-top: 2px solid #f1f1f1;
  border-bottom: 2px solid #f1f1f1;
}
.hot-l{
  border-left: 2px solid #f1f1f1;
}
.hot-bg{
  background: #fff;
  height: 60px;
  border-right: 2px solid #f1f1f1;
  line-height: 60px;
  text-align:center;
  font-size: 14px;
}

.topborder{
  border-top: 2px solid #f1f1f1;
}

.hot-bg-son{
  height: 30px;
  line-height: 30px;
  text-align:center;
  font-size: 14px;
}

</style>
