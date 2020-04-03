<template>
<div>
    <div data-aos="fade-left" data-aos-duration="1800" class="divider">
        <p data-aos="slide-left" data-aos-duration="2200">{{header}}</p>
    </div>
</div>
</template>
<script>
export default {
    props:{
        header:String
    }
};
</script>
<style scoped>
.divider{
    width: 100vw;
    background-color: rgb(65,189,255);
    color: white;
    font-size: 4em;
    min-height: 100px;
    text-align:center;
}
@media screen and (max-width: 400px){
    .divider{
    width: 100vw;
    background-color: rgb(65,189,255);
    color: white;
    font-size: 2em;
    min-height: 100px;
    text-align:center;
}
}
</style>
