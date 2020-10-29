<template>
    <div class="news">
        <div class="news-container">
            <h2>Latest news</h2>
            <div class="news-container__item">
                  <div class="news-container__item-image">
                </div>
                <div class="news-container__item-text">
                    <h2>news title</h2>
                    <p>Posted by "insert name"</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error iusto, repellendus commodi atque ducimus animi eius,</p>
                    <p>read more >></p>
                </div>
              
            </div>

            <div class="news-container__item">
                 <div class="news-container__item-image">
                </div>
                <div class="news-container__item-text">
                    <h2>news title</h2>
                    <p>Posted by "insert name"</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error iusto, repellendus commodi atque ducimus animi eius, </p>
                    <p>read more >></p>
                </div>
               
            </div>

            <div class="news-container__item">
                <div class="news-container__item-image">
                </div>
                <div class="news-container__item-text">
                    <h2>news title</h2>
                    <p>Posted by "insert name"</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error iusto, repellendus commodi atque ducimus animi eius,</p>
                    <p>read more >></p>
                </div>
                
            </div>

            <div class="news-container__item">
                <div class="news-container__item-image">
                </div>
                <div class="news-container__item-text">
                    <h2>news title</h2>
                    <p>Posted by "insert name"</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate error iusto, repellendus commodi atque ducimus animi eius, </p>
                    <p>read more >></p>
                </div>
                
            </div>

        </div>
    </div>
</template>

<style scoped>
.news{
width: 70%;
}
.news{
display: flex;
height: 1000px;
margin-left: 26px;
}
.news-container > h2{
    text-align: start;
    border-bottom: solid #dddddd 2px;

}
.news-container{
    display: flex;
    flex-direction: column;
}
.news-container__item{
display: flex;
width: 570px;
border-bottom: inset whitesmoke 1px;

}
.news-container__item-image{
    width: 162px;
    height: 162px;
    background: red;
    margin-right: 16px;
    margin-top: 10px;
    margin-bottom: 50px;
    
}
.news-container__item-text{
    display: flex;
    flex-direction: column;
    width: calc(570px - 162px);
    text-align: start;
    font-size: 12px;
}
.news-container__item-text :nth-child(2){
    opacity: 90%;
}
.news-container__item-text :nth-child(4){
flex-grow: 1;
margin-left:auto;
margin-top: auto;
}
</style>