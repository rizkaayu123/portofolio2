<script>
import BaseInput from '@/components/base/BaseInput.vue';
import TextArea from '../components/base/BaseTextArea.vue';
//import {resetObject} from '@/utils/helper';
import helper from '../utils/helper';

export default{
    name: 'TestView',
    components: {
    BaseInput,
    TextArea,
},
    data: () => ({
        title: 'Contact',
    input: {
      nama: '',
      email: '',
      telepon: '',
      pesan: '',

    },
    
    }),
    methods: {
      submit(){
       console.log({...this.input});
      },
      reset(){
        this.input = helper.resetform(this.input);
      },
    },
}
</script>

<template>
  <div class="container my-3">
    <div class="row d-flex justify-content-center">
        <div class="col-md-7">
            <div class="card p-2 ">
                <div class="text-center">
                  <h1>{{ title }}</h1>
                </div>
                <div class="text-center">
                  <form @submit.prevent="submit" @reset="reset" >
                  <div class="row px-4">
                  <BaseInput name="Nama Lengkap" label="Name" v-model="input.name" type="text"/>
                  <BaseInput name="email@gmail.com" label="Email" v-model="input.email" type="email"/>
                  <BaseInput name="NoTelepon" label="No.Tlp" v-model="input.telepon" type="tel"/>
                  <TextArea name="Pesan" label="Pesan" rows="4" v-model="input.pesan"></TextArea>
                  </div>
                  <button type="submit" class="btn btn-primary mx-1">Submit</button>
                  <button type="reset" class="btn btn-danger mx-1">Reset</button>
                </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>

.card {
   background-color: rgb(103, 223, 94);
}


.fonts{
    font-size:11px;
    color: black;
}
</style>