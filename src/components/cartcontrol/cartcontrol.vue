<template>
    <div class="cartcontrol">
        <transition name="move">
            <div class="cart-decrease icon-remove_circle_outline" v-show="food.count > 0" @click="decreaseCart"></div>
        </transition>
        <div class="cart-count" v-show="food.count > 0">{{food.count}}</div>
        <div class="cart-add icon-add_circle" @click.stop.prevent="addCart($event)"></div>
    </div>
</template>


<script type="text/ecmascript-6">
    import Vue from 'vue'



    export default{
        props:{
            food:{
                type:Object,
                default:{}
            }
        },
        created(){
            // console.log(this.food)
        },
        methods:{
            addCart(event){
                if(!this.food.count){
                    if (!event._constructed) {
                        return;
                    };
                    // this.food.count = 1  直接赋值  vue是检测不到的
                    Vue.set(this.food,'count',1)
                }else{
                    this.food.count ++
                }
                this.$emit('cart-add',event.target);
            },
            decreaseCart(){
                console.log(12);
                if (!event._constructed) {
                    return;
                };
                if(this.food.count){
                    this.food.count--
                }
            }
        }
    }
</script>

<style  lang="stylus" rel="stylesheet/stylus">
.cartcontrol
  font-size: 0
  .cart-decrease
    display: inline-block
    padding: 6px
    line-height: 24px
    font-size: 24px
    color: rgb(0, 160, 220)
    transform-origin: center
    &.move-enter-active, &.move-leave-active
      transition: all 0.4s linear
    &.move-enter, &.move-leave-to
      opacity: 0
      transform: translate3D(24px, 0, 0) rotate(180deg)// ??
  .cart-count
    display: inline-block
    vertical-align: top
    width: 12px
    padding-top: 6px
    line-height: 24px
    text-align: center
    font-size: 10px
    color: rgb(147, 153, 159)
  .cart-add  
    display: inline-block
    padding: 6px
    line-height: 24px
    font-size: 24px
    color: rgb(0, 160, 220)

</style>



