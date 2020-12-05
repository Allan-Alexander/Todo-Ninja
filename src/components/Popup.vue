<template>
 <v-dialog max-width="600px" v-model="dialog" persistent>
    <template v-slot:activator="{on}">
      <v-btn color="success" v-on="on" dark>Add a new project</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <p class="grey--text">Add a new project</p>
      </v-card-title>
      <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field label="Title" :rules="inputRules" v-model="title" prepend-icon="mdi-folder-plus"></v-text-field>
            <v-textarea label="Information" :rules="inputRules" v-model="content" prepend-icon="mdi-pencil"></v-textarea>
            
            <template>
                <v-menu max-width="290">
                     <template v-slot:activator="{ on }">
                                <v-text-field max-width="200" :rules="inputRules" :value="formattedDate" label="Due date" prepend-icon="mdi-calendar-range" v-on="on"></v-text-field>
                     </template>
                  <v-date-picker v-model="due"></v-date-picker>
                </v-menu>
                <v-spacer/>
                </template>
            
            
            
            <v-btn depressed class="success mx-0 mt-3" @click="submit" :loading="load" >Add project</v-btn>
          </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
<script>
import db from '@/fb'
export default {
  data(){
      return{
          title:'',
          content:'',
          dialog: false,
          due: null,
          inputRules: [
            v => v.length >= 3 || 'Minimum length is 3 characters'
          ],
          load : false
      }
  },
  methods:{
      submit(){
          if(this.$refs.form.validate()){
            this.load = true
            const project = {
              title: this.title,
              content : this.content,
              due: this.formattedDate,
              person : 'Test Name',
              status : 'ongoing'
              }
            db.collection('projects').add(project).then(()=>{
              this.load = false
              this.dialog = false
              this.$emit('projectAdded')
            })  
            
          }
          
      },
      save (date) {
        this.$refs.menu.save(date)
      }
  },
  computed:{
      formattedDate(){
          return this.due ? new Date(this.due).toUTCString().substring(0,16) : ''
      }
  },
  watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
}
</script>