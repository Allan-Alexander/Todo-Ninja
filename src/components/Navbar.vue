<template>
  <nav> 
      <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
          <span>Awesome! Added a new project
              <v-btn depressed color="success white--text" class="ml-6" @click="snackbar = false">Close</v-btn>
          </span>
        
      </v-snackbar>
    <v-toolbar text app class="grey lighten-4">
        
        <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <!-- Title -->
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Todo</span>
            <span>Ninja</span>
        </v-toolbar-title>
        
        <v-spacer/>


       <!-- Drop down -->
       <div class="text-center">
        <v-menu offset-y transition="slide-y-transition" bottom>
            <template v-slot:activator="{on,attrs}">
                    <v-btn depressed color="grey--text" v-bind="attrs" v-on="on">
                        <v-icon left>mdi-arrow-down</v-icon>
                       Menu
                    </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-title>
                        {{ link.text }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
       </div>




        <!-- Button -->
        <v-btn depressed class=" lighten-4 grey--text">
          <span>Sign Out</span>
          <v-icon right >mdi-exit-to-app</v-icon>
        </v-btn>
    </v-toolbar>


    <!-- change the color of primary -->
    <v-navigation-drawer app v-model="drawer" temporary class="primary">
      <v-layout column align-center>
          <v-flex class="mt-5">
              <v-avatar size="100">
                  <img src="/avatar-1.png">
              </v-avatar>
              <p class="white--text subheading mt-">
                  The Net Ninja
              </p>
          </v-flex>
          <v-flex class="mt-4 mb-3">
              <Popup @projectAdded="snackbar = true"/>
          </v-flex>
      </v-layout> 
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon right class="white--text">{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content >
                    <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

  </nav>    
</template>



<script>
import Popup from './Popup'
export default {
    components:{
        Popup
    },
   data(){
       return{
           drawer:false,
           links:[
               { icon: 'mdi-view-dashboard',text:'Dashboard',route:'/' },
               { icon: 'mdi-folder',text:'My Project',route:'/projects' },
               { icon: 'mdi-account',text:'Team',route:'/team' },
           ],
           snackbar: false
       }
   }
}
</script>