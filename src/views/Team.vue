<template>

  <div class="team">
  <h1 class="subtitle-1 grey--text">Team</h1>
  
   <v-container class="my-5">
     <v-layout row wrap>
       <v-flex xs12 sm6 md4 lg3 v-for="team in teams" :key="team.name">
         <v-card class="text-center ma-3">
           
           <v-responsive class="pt-4"><!-- padding top -->
              <v-avatar size="100" class="grey lighten-2">
                <img :src="team.avatar">
              </v-avatar>
           </v-responsive>

           <v-card-text>
              <div class="subheading">{{ team.name }}</div>
              <div class="grey--text">{{ team.role }}</div> 
           </v-card-text>

           <v-card-action>
             <v-btn flat depressed color="white grey--text">
               <v-icon small left>mdi-message</v-icon>
               <span>Message</span>
             </v-btn>
           </v-card-action>

         </v-card>
       </v-flex>  
     </v-layout>    
   </v-container>
  
  </div>
</template>


<script>

export default {
  data() {
    return {
      teams:[
        { name: 'The Net Ninja', role:'Web Development',avatar:'/avatar-1.png' },
        { name: 'Ryu', role:'Graphic Designer',avatar:'/avatar-2.png' },
        { name: 'Chun Li', role:'Social Media Maverick',avatar:'/avatar-3.png' },
        { name: 'Yoshi', role:'Sales Guru',avatar:'/avatar-4.png' },
        { name: 'Gogan', role:'Ninja Man',avatar:'/avatar-5.png' }  
      ]
    }
  },
}
</script>