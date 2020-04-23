<template>
    <div>
            <v-col
            cols="12"
            md="6"
            sm="12"
            >
            <p data-aos="fade-up" data-aos-duration="1000" class="sectionTitle">Preceptor Placement:</p>
            </v-col>
        <v-row cols="12">
            
            <v-col
            cols="12"
            md="6"
            sm="12"
            >

                <div class="precept">            
                    <p data-aos="fade-lef" data-aos-duration="1000">{{p1}}</p>
                    <p data-aos="fade-left" data-aos-duration="1000">{{p2}}</p>
                </div>
            </v-col>
            <v-col color="blue"
            cols="12"
            md="6"
            sm="12"
            >
                <ul>
                    <li data-aos="fade-right" data-aos-duration="1000">
            
                        <img src="@/assets/connection.png" />   
                         <p>Access an expansive network of professionals</p>
                    
                    </li>
                    <li data-aos="fade-right" data-aos-duration="1000">
                        <img src="@/assets/hospitalBlue.png" />
                        <p>Placement at local hospitals</p>
                    </li>
                    <li data-aos="fade-right" data-aos-duration="1000">
                        <img src="@/assets/blackboardBlue.png" />
                       <p> Making your education practical</p>
                    </li>
                </ul>
            </v-col>
        </v-row>
        <p class="outro"> {{p3}} </p>
    </div>
</template>
<script>
export default {
    name: 'Education',
    data(){
        return{
            p1:"We are a nurse practitioner-owned education company that works nationwide to provide preceptor placement solutions for the nurse practitioner profession in order to develop excellent nurse practitioner graduates. We support those involved in preceptor education, from NP students, schools, sites, and preceptors in successfully preparing NP students for practice.",
            p2:"Our vision is to create a business that provides excellent comprehensive solutions to the current nationwide preceptor crisis. We will work collaboratively with all involved parties to reduce barriers to precepting, demonstrate to preceptors that their role holds value, and provide quality and comprehensive clinical education for NP students and preceptors.",
            p3:"Whether you need a nurse practitioner clinical rotation last minute or you want to precept, we are dedicated to helping YOU!  Our team is committed to serving you.  No one knows matching NP preceptors better than we do!",
        }
    }
}
</script>
<style scoped>
li{
    list-style: none;
}
li p{
    color: rgb(65,189,255)
}
.outro{
    font-size: 1.5em;
    font-weight:800;
    width: 60%;
    text-align: center;
    margin-left:10%;
}
.precept{
    border-right: 3px solid rgb(65,189,255);
    border-bottom: 3px solid rgb(65,189,255);
    padding: 10px;
    margin: 10px;
    width: 65%;
    text-align: right;
    margin-left: 30%;
}
.sectionTitle{
    font-weight:bolder;
    font-size: 3em;
    text-align: right;
}
</style>