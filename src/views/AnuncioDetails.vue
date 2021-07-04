<template>
  <div class="container">
    Página de detalhes de um anuncio

    {{ JSON.stringify(anuncio) }}
  </div>
</template>
<script>
// import moment from 'moment'

export default {
  name: 'AnuncioDetails',

  components: {
  },

  computed: {
  },

  data () {
    return {
      anuncio: null
    }
  },

  methods: {
    getUsers () {
      this.axios.get("http://localhost:3000/users/" + this.$route.params.anuncioId).then((response) => {
        this.anuncio = response.data.data
      })
    }
  },

  created () {
    this.getUsers()
  }
}
</script>

<style>
  .pagination {
    justify-content: center;
  }

  .disabled {
    color: currentColor;
    cursor: not-allowed;
    opacity: 0.5;
    text-decoration: none;
  }
</style>
