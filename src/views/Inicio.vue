<template>
  <div>
    <h1>Lista de tareas:</h1>
    <router-link :to="{name: 'agregar'}">
      <button class="btn btn-primary btn-block">Agregar</button>
    </router-link>

    <form @submit.prevent="buscador(texto)">
    <input type="text" class="form-control mt-5" v-model="texto" placeholder="Buscar.." :keyup="buscador(texto)">
  </form>

    <div v-if="carga" class="text-center mt-5">
      <h3>Cargando Contenido...</h3>
      <pulse-loader :loading="carga"></pulse-loader>
    </div>

  

    <ul class="list-group mt-5" v-if="!carga">
      <li class="list-group-item list-group-item-primary" v-for="item of arrayFiltrado" :key="item.id">
        {{item.id}} - {{item.nombre}}
        <div class="float-right">
          <router-link :to="{name: 'editar',params:{id: item.id}}">
            <button class="btn btn-warning mr-2">Editar</button>
          </router-link>
          <button class="btn btn-danger" @click="eliminarTarea(item.id)">Eliminar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions,mapGetters} from "vuex";
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
export default {
  name: "inicio",
  data(){
    return{
      texto:''
    }
  },
  computed: {
    ...mapState(['usuario','tareas','carga']),
    ...mapGetters(['arrayFiltrado'])
    },
    methods: {
      ...mapActions(['getTareas','eliminarTarea','buscador'])
    },
    created() {
      this.getTareas();
    },
    components: {
    PulseLoader
  }
  
};
</script>