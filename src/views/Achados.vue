<template>
  <div>
  <div>
    <Header />
     </div>
  <section class="catalog" id="catalog">
      <div class="content">
        <div class="title-wrapper-catalog">
          <p>Encontre o seu item perdido aqui!</p>
          <h3>Achados</h3>
        </div>

        <div>

          <button @click="goToCreateAnuncio ()" class="search-button">
            Criar um Achado
          </button>
        </div>
        <div class="row">
          <tr v-if="!hasAnuncios">
            <td colspan="6">
              Não existem anuncios criados!
            </td>
          </tr>

          <div class="col-md-4" v-else v-for="anuncio in anuncios"
              :key="anuncio.id">
            <div
              class="card bg-light"
              
            > 
              <img 
                class="card-img-top"
                :src="'http://localhost:3000/' + anuncio.filename"
                alt="Card image cap" 
              /><div class="shape">
					<div class="shape-text">
						{{ anuncio.tipo }}								
					</div>
				</div>
              <div class="card-body"> 
                <h5 class="card-title border-bottom pb-3">
                  {{ anuncio.titulo }} 

                  <a
                    href="#"
                    class="float-right btn btn-sm btn-info d-inline-flex share"
                    ><i class="fas fa-share-alt"></i
                  ></a>
                </h5>
                <p class="card-text">
                  {{ anuncio.descricao }}
                  
                </p>
                <a @click="goToDetails(anuncio.id)" class="btn btn-sm btn-info float-right"
                  >Read more <i class="fas fa-angle-double-right"></i
                ></a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '@/components/Headers'


export default {
  name: 'Achados',

  components: {
    Header
      },
      data() {
    return {
      anuncios: []
    };
  },
  computed: {
    hasAnuncios() {
      return this.anuncios.length > 0;
    },
  },
  methods: {
    getAnuncios() {
      
      
      this.axios.get("http://localhost:3000/achados").then((response) => {
        this.anuncios = response.data;
        
      });
    },
    goToDetails (anuncioId) {
      
      this.$router.push('/anuncios/' + anuncioId)
    },
    
    goToCreateAnuncio () {
      let loggedUser = localStorage.getItem("user");
      if (loggedUser) {
        loggedUser = JSON.parse(loggedUser);
      }
      if (loggedUser == null) {
            alert("Faça login primeiro!");
            this.$router.push('/');
          } else {
        this.$router.push('/criaranuncio')    
          }
        
    },
  },
  created() {
    this.getAnuncios();
  },
}
</script>

<style>

</style>