<template>
    <div>
        <h1>Ingreso</h1>
        <form @submit.prevent="ingresoUsuario({email:$v.email.$model,pass:$v.pass.$model})" >
            <input type="email" placeholder="Email" v-model="$v.email.$model" class="form-control my-2">
            <small class="text-danger d-block" v-if="!$v.email.required">* Campo Requerido</small>
            <small class="text-danger d-block" v-if="!$v.email.email">* Email no valido</small>
            <input type="password" placeholder="Password" v-model="$v.pass.$model" class="form-control my-2">
            <small class="text-danger d-block" v-if="!$v.pass.required">* Password Requerido</small>
            <input type="submit"  value="Acceder" class="btn btn-info" :disabled="$v.$invalid">
        </form>
        <p v-if="error === 'auth/user-not-found'" class="text-danger">* Usuario Incorrecto</p>
        <p v-if="error === 'auth/wrong-password'" class="text-danger">* Usuario/Contraseña Incorrecto</p>
        <!--{{$v.email}}-->
    </div>
</template>

<script>

import {mapActions,mapState} from 'vuex'
import { required, minLength,email} from 'vuelidate/lib/validators'
export default {
    name:'ingreso',
    data(){
        return{
            email:'',
            pass: ''
        }
    },
    methods:{
        ...mapActions(['ingresoUsuario'])
    },
    computed:{
        ...mapState(['error'])
    },
    validations:{
        email:{required,email},
        pass:{required}
    }
}
</script>