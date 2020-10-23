<template>
  <div class="Image-slider">
      <div class="slider-container">
        <img :src="images[Math.abs(currentNumber) % images.length]" />
        <a class="next" @click="next" href="#">&#10094; next</a>
        <a class="prev" @click="prev" href="#">&#10095; previous</a>
      </div>
  </div>
</template>

<script>
export default {
data() {
  return{
    images: [
      "./assets/slider/slider1.PNG",
      "./assets/slider/slider2.PNG",
      "./assets/slider/slider3.PNG"
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
    this.timer = setInterval(this.next, 3000);
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
