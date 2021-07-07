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
              <div class="form-group col-md-6">
                Titulo do anúncio
                <input
                  v-model="maintenanceAnuncios.titulo"
                  id="Full Name"
                  name="Full Name"
                  placeholder="Titulo do anúncio"
                  class="form-control"
                  type="text"
                />
              </div>
              <div class="form-group col-md-6">
                Recompensa:
                <input
                  v-model="maintenanceAnuncios.recompensa"
                  type="number"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Recompensa"
                />
              </div>
              <div class="form-group col-md-6">
                Data em que ocorreu:
                <input
                  v-model="maintenanceAnuncios.data"
                  id="Full Name"
                  name="Full Name"
                  placeholder="Data"
                  class="form-control"
                  type="date"
                />
              </div>
              <div class="form-group col-md-6">
                Local do sucessido: <br />
                   <input
                  v-model="maintenanceAnuncios.local_sucedido"
                  id="Full Name"
                  name="Full Name"
                  placeholder="Local do sucedido"
                  class="form-control"
                  type="text"
                />                  
                
              </div>
              
              <div class="form-group col-md-6">
                Cidade <br />
                <select
                  v-model="maintenanceAnuncios.localizacao_id"
                  class="custom-select"
                  style="max-width: 400px;"
                >
                  <option selected disabled>Escolha...</option>
                  <option
                    v-for="localizacao in locais"
                    :key="localizacao.id"
                    :value="localizacao.id"
                    selected
                  >
                    {{ localizacao.cidade }}
                  </option>
                </select>
              </div>
              
              <div class="form-group col-md-6">
                Categoria: <br />
                <select
                  v-model="maintenanceAnuncios.categoria_id"
                  class="custom-select"
                  style="max-width: 400px;"
                >
                  <option selected disabled>Escolha...</option>
                  <option
                    v-for="categoria in categorias"
                    :key="categoria.id"
                    :value="categoria.id"
                    selected
                  >
                    {{ categoria.descricao }}
                  </option>
                </select>
              </div>
              
              <div class="form-group col-md-6">
                Seleciona o estado do anuncio: <br />
                <select
                  class="custom-select"
                  v-model="maintenanceAnuncios.status_id"
                  style="max-width: 400px;"
                >
                  <option
                    v-for="status in statuses"
                    :key="status.id"
                    :value="status.id"
                    selected
                  >
                    {{ status.descricao }}
                  </option>
                </select>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group col-md-6">
                Escolha o tipo de anuncio: <br />
                <select
                  class="custom-select"
                  style="max-width: 400px;"
                  v-model="maintenanceAnuncios.tipo_id"
                >
                  <option selected disabled>Escolha...</option>
                  <option
                    v-for="tipo in tipos"
                    :key="tipo.id"
                    :value="tipo.id"
                    selected
                  >
                    {{ tipo.descricao }}
                  </option>
                </select>
              </div>
              <br />
              <div class="form-group col-md-12">
                Uma breve descrição do anuncio:
                <textarea
                  v-model="maintenanceAnuncios.descricao"
                  placeholder="Descrição do anuncio"
                  id="comment"
                  name="comment"
                  cols="40"
                  rows="5"
                  class="form-control"
                ></textarea>
                <br />
                Faça upload de uma foto: <br />
                <input type="file" name="" id="" />
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
              <button
                type="button"
                @click="addAnuncios()"
                class="btn btn-danger"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CriarAnuncio",
  data() {
    return {
      maintenanceAnuncios: {
        id: null,
        titulo: null,
        descricao: null,
        recompensa: null,
        data: null,
        localizacao_id: null,
        tipo_id: null,
        categoria_id: null,
        status_id: null,
        local_sucedido: null,
        contacto: null
      },

      locais: [],
      statuses: [],
      tipos: [],
      categorias: [],
      users: [],
    };
  },
  methods: {
    getLocalizacao() {
      this.axios.get("http://localhost:3000/localizacao").then((response) => {
        this.locais = response.data;
      });
    },
    getCategoria() {
      this.axios.get("http://localhost:3000/categoria").then((response) => {
        this.categorias = response.data;
      });
    },
    getStatus() {
      this.axios.get("http://localhost:3000/status").then((response) => {
        this.statuses = response.data;
      });
    },
    getTipo() {
      this.axios.get("http://localhost:3000/tipo").then((response) => {
        this.tipos = response.data;
      });
    },
    

    addAnuncios() {
      let loggedUser = localStorage.getItem("user");
      if (loggedUser) {
        loggedUser = JSON.parse(loggedUser);
      }

      console.log(loggedUser)

      let apiAnuncios = {
        titulo: this.maintenanceAnuncios.titulo,
        descricao: this.maintenanceAnuncios.descricao,
        recompensa: this.maintenanceAnuncios.recompensa,
        data: this.maintenanceAnuncios.data,
        localizacao_id: this.maintenanceAnuncios.localizacao_id,
        categoria_id: this.maintenanceAnuncios.categoria_id,
        status_id: this.maintenanceAnuncios.status_id,
        tipo_id: this.maintenanceAnuncios.tipo_id,
        user_id: loggedUser.id,
        contacto: this.maintenanceAnuncios.contacto,
        local_sucedido: this.maintenanceAnuncios.local_sucedido
      };

      this.axios
        .post("http://localhost:3000/anuncio", apiAnuncios)
        .then((response) => {
          if (response.data.code === 200) {
            alert("Anuncio criado com sucesso!");
            this.resetMaintenanceAnuncios();
          } else {
            alert("Erro a criar anuncio!");
          }
        });
    },
    resetMaintenanceAnuncios() {
      this.maintenanceAnuncios = {
        id: null,
        titulo: null,
        descricao: null,
        recompensa: null,
        data: null,
        localizacao_id: null,
        categoria_id: null,
        status_id: null,
        tipo_id: null,
      };
    },
  },
  created() {
    this.getCategoria();
    this.getStatus();
    this.getTipo();
    this.getLocalizacao();
},
};
</script>

<style></style>
