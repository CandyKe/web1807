<script>

export default{
  name:"Tab",
  data(){
    return{
    
    }
  },
  mounted(){
    //向panes添加内容,this指向当前组件
    // console.log(this);
    this.$parent.panes.push(this);
  },
  computed:{
    active(){
      return this.$parent.value == this.index;
    }
  },
  props:{
    label:{
      type:String,
      default:"tab"
    },
    index:{
      type:[String,Number],
      required:true
    }
  },
  methods:{
    handlerClick(event){
      this.$parent.onChanges(this.index)
    }
  },
  render(){
    let tab = this.$slots.label || this.label;
    let classNames = {
      tab:true,
      active:this.active
    }
    return(
      <li class={classNames} onClick={this.handlerClick}>{tab}</li>
    )
  }
}


</script>

<style lang="css" scoped>

.tab{
  text-align: center;
  flex: 1;
  list-style:none;
  line-height:40px;
  margin-right:30px;
  position:relative;
  bottom:-2px;
  cursor:pointer;
}

.tab.active{
  color: #d33a31;
}

.tab.last-child{
  margin-right:0;
}

</style>