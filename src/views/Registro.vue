<template>
  <div>
    <h1>Registro</h1>
    <form @submit.prevent="crearUsuario({email:email,pass:pass1})">
      <input type="email" v-model="$v.email.$model" placeholder="Email" class="form-control my-2" />
      <small class="text-danger d-block" v-if="!$v.email.required">* Campo Requerido</small>
      <small class="text-danger d-block" v-if="!$v.email.email">* Email no valido</small>
      <input type="password" v-model="pass1" placeholder="Password" class="form-control my-2" />
      <small class="text-danger d-block" v-if="!$v.pass1.minLength">* Minimo 6 caracteres</small>
      <input
        type="password"
        v-model="pass2"
        placeholder="Confirm Password"
        class="form-control my-2"
      />
      <small class="text-danger d-block" v-if="!$v.pass2.sameAs">* Contraseña no coinciden</small>
      <button type="submit" class="btn btn-info" :disabled="!desactivar">Crear Usuario</button>
    </form>
    <p v-if="error === 'auth/email-already-in-use'" class="text-danger">* Email ya en uso</p>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
export default {
  name: "registro",
  data() {
    return {
      email: "",
      pass1: "",
      pass2: ""
    };
  },
  methods: {
    ...mapActions(["crearUsuario"])
  },
  computed: {
    ...mapState(["error"]),
    desactivar() {
      return this.pass1 === this.pass2 && this.pass1 != "" && this.email != "";
    }
  },
  validations: {
    email: { email, required },
    pass1: { minLength: minLength(6) },
    pass2: { sameAs: sameAs("pass1") }
  }
};
</script>