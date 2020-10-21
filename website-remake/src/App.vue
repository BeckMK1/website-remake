<template>
  <div id="nav">
    <div class="nav-points">
    <router-link class="nav-points__logo" to="/"><img src="./assets/crunchyroll.png" alt=""></router-link>
    <router-link class="nave-points__text" to="/shows">shows</router-link>
    </div>
  </div>
      <router-view/>
</template>

<style>
body{
margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
padding: 16px;
-webkit-box-shadow: 0px 7px 6px -1px rgba(0,0,0,0.15);
-moz-box-shadow: 0px 7px 6px -1px rgba(0,0,0,0.15);
box-shadow: 0px 7px 6px -1px rgba(0,0,0,0.15);
position: relative;
z-index: 1;
width: 100vw;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.nav-points{
position: relative;
left: 30%;
display: flex;
align-items: center;
}
.nave-points__text{
text-decoration: none;
}
.nav-points__logo img{
  width: 130px;
 position: relative;
 margin-right: 36px;
}
</style>
