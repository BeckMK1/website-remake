<template>
    <div class="featured-shows">
        <div class="sidebar">
        <h2>Featured Shows</h2>
        <div class="sidebar__featured">
            <div class="sidebar__featured-images"></div>
                <div class="sidebar__featured-text">
                    <p> <strong>"Title"</strong></p>
                    <p>"number of episodes"</p>
                </div>

        </div>
        </div>
    </div>
</template>
<style scoped>
.featured-shows{
    height: 98%;
    border-left: #dddddd solid 2px;
    margin-top: 26px;
}
.sidebar{
margin-left: 34px;
}
.sidebar h2{
font-size: 20px;
text-align: start;
color: black;
}
.sidebar__featured-images{
    width: 50px;
    height: 75px;
    background: red;
}
.sidebar__featured{
    display: flex;
    flex-direction: row;
}
.sidebar__featured-images{
    margin-right: 8px;
}
.sidebar__featured-text p{
    text-align: start;
    font-size: 14px;
    margin: 0;
}
.sidebar__featured-text :nth-child(2){
    opacity: 90%;
}
</style>