<template>
  <section class="testimonial py-5" id="testimonial">
    <div class="container">
      <div class="row ">
        <div class="col-md-4 py-5 bg-primary text-white text-center ">
          <div class=" ">
            <div class="card-body">
              <img
                src="http://www.ansonika.com/mavia/img/registration_bg.svg"
                style="width:30%"
              />
              <h2 class="py-3">Criar um anuncio</h2>
              <p>
                Tation argumentum et usu, dicit viderer evertitur te has. Eu
                dictas concludaturque usu, facete detracto patrioque an per,
                lucilius pertinacia eu vel.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-8 py-5 border">
          <h4 class="pb-4">Insira os detalhes do anúncio</h4>
          <form>
            <div class="form-row">
              <div class="form-group col-md-6"> Titulo do anúncio
                <input
                  id="Full Name"
                  name="Full Name"
                  placeholder="Titulo do anúncio"
                  class="form-control"
                  type="text"
                />
              </div>
              <div class="form-group col-md-6"> Recompensa:
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Recompensa"
                />
              </div>
              <div class="form-group col-md-6"> Data em que ocorreu:
                <input
                  id="Full Name"
                  name="Full Name"
                  placeholder="Data"
                  class="form-control"
                  type="date"
                />
              </div>
              <div class="form-group col-md-6"> Local do sucessido: 
                <input
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Local Perdido"
                />
              </div><br>
              <div class="form-group col-md-6"> Categoria: <br>
                <select class="custom-select" style="max-width: 400px;">
            <option selected disabled>Escolha...</option>
            <option></option>
                </select>
              </div><br>
              <div class="form-group col-md-6"> Seleciona o estado do anuncio: <br>
                <select class="custom-select" style="max-width: 400px;">
            <option selected >Escolha...</option>
            <option >{{statuses.descricao}}</option>
                </select>
              </div>
            </div><br>
            <div class="form-row">
              <div class="form-group col-md-6">Escolha o tipo de anuncio: <br>
                <select class="custom-select" style="max-width: 400px;">
            <option selected disabled>Escolha...</option>
            <option >{{tipos.descricao}}</option>
                </select>
              </div>
              <br>
              <div class="form-group col-md-12"> Uma breve descrição do anuncio:
                <textarea placeholder="Descrição do anuncio"
                  id="comment"
                  name="comment"
                  cols="40"
                  rows="5"
                  class="form-control"
                ></textarea>
                <br>
                Faça upload de uma foto: <br>
                <input type="file" name="" id="">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <div class="form-group">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="invalidCheck2"
                      required
                    />
                    <label class="form-check-label" for="invalidCheck2">
                      <small
                        >By clicking Submit, you agree to our Terms &
                        Conditions, Visitor Agreement and Privacy Policy.</small
                      >
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div class="form-row">
              <button type="button" class="btn btn-danger">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CriarAnuncio', 
  data () {
    return {
      maintenanceAnuncios: {
        id: null,
        descricao: null,
        recompensa: null,
        data: null,
        localizacao: null,
        categoria: null,
        status: null,
        tipo: null
      },
       anuncios: [],
       locais: [],
       categorias: [],
       tipos: [],
       statuses: []
    };
  },

       methods:{
         getAnuncios() {
      this.axios.get("http://localhost:3000/anuncio").then((response) => {
        this.anuncios = response.data.data;
        
      });
    }, 
    getLocalizacao() {
      this.axios.get("http://localhost:3000/localizacao").then((response) => {
        this.locais = response.data.data;
        
      });
    }, 
    getCategoria() {
      this.axios.get("http://localhost:3000/categoria").then((response) => {
        this.categorias = response.data.data;
        
      });
    }, 
    getStatus() {
      this.axios.get("http://localhost:3000/status").then((response) => {
        this.statuses = response.data.data;
        
      });
    }, 
    getTipo() {
      this.axios.get("http://localhost:3000/tipo").then((response) => {
        this.tipo = response.data.data;
        
      });
    }, 
    
    addAnuncios () {
      let apiAnuncios = {
        descricao: this.maintenanceAnuncios.descricao,
        recompensa: this.maintenanceAnuncios.recompensa,
        data: this.maintenanceAnuncios.data,
        localizacao: this.maintenanceAnuncios.localizacao,
        categoria: this.maintenanceAnuncios.categoria,
        status:this.maintenanceAnuncios.status,
        tipo: this.maintenanceAnuncios.tipo
      }

      this.axios.post("http://localhost:3000/anuncio",
      apiAnuncios).then((response) => {
        if (response.data.code === 201) {
          this.getAnuncios()

          this.resetMaintenanceAnuncios()
        } else {
          alert('Erro a criar anuncio!')
        }
      })
    },
    resetMaintenanceAnuncios () {
      this.maintenanceAnuncios = {
         id: null,
        descricao: null,
        recompensa: null,
        data: null,
        localizacao: null,
        categoria: null,
        status: null,
        tipo: null
      }
    }
  },
  created(){ 
this.getAnuncios();
this.getCategoria();
this.getStatus;
this.getTipo();
this.getLocalizacao();
  }
  };
  
</script>

<style>
</style>
