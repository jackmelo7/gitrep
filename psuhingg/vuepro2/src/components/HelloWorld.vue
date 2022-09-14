<template>
  <v-app>
     <v-form
     ref="form"
     v-model="valid"
     lazy-validation
   >
   <v-dialog
   v-model="Add"
  >
  <template v-slot:activator="{ on,attr }">
    <v-flex text-right align-self-middle>
      <v-btn
      elevation='40'
          color="red"
          v-bind="attr"
          v-on="on"
        >
          <h3>click</h3>
        </v-btn>
      </v-flex>
      </template>
      <v-card text class="white">
        <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Enter your name"
        required
      ></v-text-field>
     
     
      <v-text-field
       v-model="email"
       :rules="emailRules"
       label="Email"
       required
     ></v-text-field>
     
     
    
     <v-select
       v-model="select"
       :items="location"
       :rules="[v => !!v || 'Location is required']"
       label="Location"
       required
     ></v-select>
     <br>
     <h3>Gender</h3>
     <v-radio-group
     v-model="gender"
     column
     >
     <v-radio
     label="male"
     value="male"
     ></v-radio>
     <v-radio
     label="female"
     value="female"
     ></v-radio>
     <v-radio
     label="other"
     value="other"
     ></v-radio>

    </v-radio-group>
    <h3>Interests</h3>
      <v-checkbox
     v-model="Interests"
       v-for="(interest) in choice"
       :key="interest.id"
       :label="interest.name"
       :value="interest.name"
       required
     ></v-checkbox>
     <v-text-field
       v-model="otherinterests"
       label="Mention if others"
     ></v-text-field>
      <v-btn
       v-if="button"
       :disabled="!valid"
       color="success"
       class="mr-4"
       @click="validate"
     >
       Validate
     </v-btn>
     <v-btn
     v-if="!button"
     :disabled="!valid"
     color="success"
     class="mr-4"
     @click="update"
   >
     update
   </v-btn>
    </v-card>
    </v-dialog>
   </v-form>
   <table>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Location</th>
      <th>Gender</th>
      <th>interest</th>
  
    </tr>
    <tr
      v-for="(item,i) in arr"
      :key="i">
      <td>{{item.name}}</td>
      <td>{{item.emailid}}</td>
      <td>{{item.location}}</td>
      <td>{{item.gender}}</td>
      <td>{{item.interests}}</td>
      <td><v-btn class= "pink" @click="editing(item) " color  ="secondary" elevation="24">edit</v-btn></td>
      <td><v-btn class= "pink" @click="deleteing(item) " color  ="secondary" elevation="24">delete</v-btn></td>
     
    </tr>

   </table>
    </v-app>
    
</template>
<script>
  import  Vue from 'vue' 
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
     data: () => ({
       valid: true,
       tmp:{},
       name: '',
       nameRules: [
         name=>!!name||'Name is required',
         v => /^[a-zA-Z]+$/.test(v) || 'Name must be valid'
       ],
       email: '',
       emailRules: [
         email => !!email || 'E-mail is required',
         v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
       ],
      
       select: null,
       location: [
        'tamilnadu','kerala','karnataka','assam','delhi'
       ],
       choice: [
      {id :1,name:'music'},
      {id:2,name:'cricket'},
      {id:3,name:'books'},
      {id:4,name:'others'}],
      Interests:[],
      arr:[],
      Add:true,
      button:true,
      Fmodel:undefined
     }),
     mounted(){
     Vue.axios.get("http://127.0.0.1:3333/read").
            then((res)=>{
            this.arr=res.data;
            console.warn(res.data);
      })},

     methods: { 
      deleteing(name){
        Vue.axios.delete(`http://127.0.0.1:3333/delete${name}`)

      },
      read(){
            Vue.axios.get("http://127.0.0.1:3333/read").
            then((res)=>{
            this.forms=res.data;
            console.warn(res.data);
            })
        },
       validate () {
        this.button=true
           const arr = this.arr
           this.$refs.form.validate()
           this.arr.push({
           name : this.name,
           email : this.email,
           select: this.select,
           gender :this.gender,
           Interests: this.Interests,
          }),
       
         console.log(JSON.stringify(arr))
       },
       editing(item) {
        this.Add=true
        this.button =false
        this.tmp=item
            this.name=item.name
            this.email=item.email
            this.select=item.select
            this.gender=item.gender
            this.Interests=item.Interests
        },
        // deleteing(item){
        //   this.edit = this.arr.indexOf(item)
        //   this.editItem = Object.assign({}, item)
        //   this.arr.splice(this.edit, 1)
        //   this.button=false
        // },
        update () {
        
        let test = this.arr.findIndex(temp => temp.id == this.tmp.id)
        
          this.arr[test].name = this.name
          this.arr[test].email = this.email
          this.arr[test].gender =this.gender
          this.arr[test].Hobbies= this.Hobbies
          this.arr[test].select= this.select
         this.button=true
        
      }
      
}
}
</script>