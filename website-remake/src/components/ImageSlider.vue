<template>
  <div class="Image-slider">
      <div class="slider-container">
        <div>
        <img :src="images[Math.abs(currentNumber) % images.length]" />
        </div>
        <div class="slider-container__arrows">
        <a class="slider-container__arrows__prev" @click="prev" href="#">&#10094;</a>
        <a class="slider-container__arrows__next" @click="next" href="#">&#10095;</a>
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
.Image-slider{
width: 70%;
}
.slider-container{
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 64px;
  margin-top: 26px;
  margin-left: 26px;
}
 .slider-container__arrows{
    position: absolute;
    display: flex;
    width: 570px;
    justify-content: start;
 }
.slider-container__arrows :nth-child(1){
  margin-right: auto;
  text-decoration: none;
  color: white;
  position: relative;
  left: 15px;
}
.slider-container__arrows :nth-child(2){
   margin-left:auto;
  text-decoration: none;
  color: white;
  position: relative;
  right: 15px;

}
</style>
