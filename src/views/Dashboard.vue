<template>

  <div class="Dashboard">
  <h1 class="subtitle-1 grey--text">Dashboard</h1>
    
    <v-container class="my-5">

      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
           <v-btn small depressed color="grey--text mx-2" @click="sortBy('title')" v-bind="attrs" v-on="on">
             <v-icon left small>mdi-folder</v-icon>
             <span class="caption text-lowercase">By Project Name</span>
           </v-btn>
          </template>
          <span>sort by project name</span>
        </v-tooltip>
        
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }"> 
            <v-btn small depressed color="grey--text" @click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-human</v-icon>
              <span class="caption text-lowercase">By Person </span>
            </v-btn>
          </template>
          <span>sort by person</span>
        </v-tooltip>
      </v-layout>
       
       <v-card depressed class="pa-3" v-for="project in projects" :key="project.title">
         <v-layout row wrap :class="`pa-3 project ${project.status}`">
           <v-flex xs12 md6>
             <div class="caption grey--text">Project Title</div>
              <div>{{ project.title }}</div>
           </v-flex>
           <v-flex xs6 sm4 md2>
             <div class="caption grey--text">Person</div>
              <div>{{ project.person }}</div>
           </v-flex>
           <v-flex xs6 sm4 md2>
             <div class="caption grey--text">Due By</div>
              <div>{{ project.due }}</div>
           </v-flex>
           <v-flex xs6 sm4 md2>
             <!--<div class="caption grey--text">Status</div>
              <div>{{ project.status }}</div>-->
              <div class="text-right">
                <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
              </div>
           </v-flex>
         </v-layout>
         <v-divider/>
       </v-card>

    </v-container>
  
  </div>
</template>


<script>
import db from '@/fb'
export default {
  data() {
    return {
       projects:[
      ]
    }
  },
  methods:{
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop]?-1:1);
    }
  },
  created(){
    db.collection('projects').onSnapshot(res =>{
      const changes = res.docChanges();
      changes.forEach(change =>{
        if(change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
        }
      })
    })
  }
}
</script>

<style>
.project.complete{
  border-left : 4px solid #3cd1c2;
}
.project.ongoing{
  border-left : 4px solid orange;
}
.project.overdue{
  border-left : 4px solid tomato;
}
.v-chip.ongoing {
    background: #ffaa2c !important;
}
.v-chip.complete {
    background: #3cd1c2 !important;
}
.v-chip.overdue {
    background: #f83e70 !important;
}


</style>