<template>
  <div class="Image-slider">
      <div class="slider-container">
        <div>
        <img :src="images[Math.abs(currentNumber) % images.length]" />
        </div>
        <div class="arrows">
        <a class="prev" @click="prev" href="#">&#10094;</a>
        <a class="next" @click="next" href="#">&#10095;</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
data() {
  return{
    images: [
      "https://firebasestorage.googleapis.com/v0/b/wow-list-f94a6.appspot.com/o/slider1.PNG?alt=media&token=9432daab-847e-4192-9c81-cbd9f150f91d",
      "https://firebasestorage.googleapis.com/v0/b/wow-list-f94a6.appspot.com/o/slider2.PNG?alt=media&token=e7fcb5c9-8ab2-4fa2-8fca-1b7b066f5324",
      "https://firebasestorage.googleapis.com/v0/b/wow-list-f94a6.appspot.com/o/slider3.PNG?alt=media&token=45c15ccb-51da-4649-a814-12dd0d31db3c"
    ],
    timer: null,
    currentNumber: 0
  };

},
mounted: function (){
  this.startRotation();
},
methods: {
  startRotation: function(){
    this.timer = setInterval(this.next, 10000);
  },
  next: function(){
    this.currentNumber += 1;
  },
  prev: function(){
    this.currentNumber -= 1;
  }
}

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
 .arrows{
    position: fixed;
    display: flex;
    width: 100%;
    justify-content: center;
 }
.arrows a{
  margin-right: 260px;
  margin-left: 260px;
  text-decoration: none;
  color: white;
}
</style>
