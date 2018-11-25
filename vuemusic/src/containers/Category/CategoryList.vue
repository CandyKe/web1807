<template lang="html">
  <div class="category-list">
    <h3>{{ title.categoryName }}</h3>
  </div>
</template>

<script>
export default {
  name:"CategoryList",
  data(){
    return{

    }
  },
  props:{
    title:{
      type:Object,
      default:function(){
        return{}
      }
    }
  },
  mounted(){
    this.http();
  },
  updated(){
    this.http();
  },
  methods:{
    http(){
      this.$axios.get(this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+ this.title.value +"&size=10")
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
