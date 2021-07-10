<template>
  <div>
    <div>
      <Header />
      <router-view />
    </div>
    <section class="catalog" id="catalog">
      <div class="content">
        <div class="title-wrapper-catalog">
          <p>Encontre o seu item perdido aqui!</p>
          <h3>Perdidos e Achados</h3>
        </div>

        <div class="filter-card">
          <input
            type="text"
            class="search-input"
            placeholder="Encontre o seu perdido"
          />

          <button @click="getAnuncios()" class="search-button">
            Pesquisar
          </button>
        </div>
        <div class="row">
          <tr v-if="!hasAnuncios">
            <td colspan="6">
              Não existem anuncios criados!
            </td>
          </tr>

          <div
            class="col-md-4"
            v-else
            v-for="anuncio in anuncios"
            :key="anuncio.id"
          >
            <div class="card bg-light">
              <img
                class="card-img-top"
                src="../assets/gato-persa-3.jpg"
                alt="Card image cap"
              />
              <div class="shape">
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
                <a
                  @click="goToDetails(anuncio.id)"
                  class="btn btn-sm btn-info float-right"
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
import Header from "@/components/Headers";

export default {
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      anuncios: [],
    };
  },
  computed: {
    hasAnuncios() {
      return this.anuncios.length > 0;
    },
  },
  methods: {
    getAnuncios() {
      this.axios.get("http://localhost:3000/anuncios").then((response) => {
        this.anuncios = response.data;
      });
    },
    goToDetails(anuncioId) {
      this.$router.push("/anuncios/" + anuncioId);
    },
  },
  created() {
    this.getAnuncios();
  },
};
</script>

<style>
.social-card-header {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 96px;
}
.social-card-header i {
  font-size: 32px;
  color: #fff;
}
.bg-facebook {
  background-color: #3b5998;
}
.text-facebook {
  color: #3b5998;
}
.bg-google-plus {
  background-color: #dd4b39;
}
.text-google-plus {
  color: #dd4b39;
}
.bg-twitter {
  background-color: #1da1f2;
}
.text-twitter {
  color: #1da1f2;
}
.bg-pinterest {
  background-color: #bd081c;
}
.text-pinterest {
  color: #bd081c;
}
.share:hover {
  text-decoration: none;
  opacity: 0.8;
}
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  outline: none;
  font-family: "Roboto", sans-serif;
}
:root {
  --lightblue: #2a91a3;
  --blue: #00285f;
  --gray: #ededed;
}
html,
body {
  width: 100%;
  overflow-x: hidden;
}
.content {
  max-width: 1000px;
  min-width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
/*    page catalogo                          */
section .catalog {
  width: 100vw;
  padding: 100px;
}

section .filter-card {
  width: 980px;
  height: 150px;
  background: var(--lightblue);
  border-radius: 8px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.search-input {
  width: 700px;
  height: 50px;
  border: none;
  border-radius: 4px 0px 0px 4px;
  text-indent: 10px;
}

.search-button {
  width: 150px;
  height: 50px;
  border-radius: 0px 4px 4px 0px;
  border: none;
  background: var(--blue);
  color: white;
  cursor: pointer;
  font-size: 1.1em;
  transition: 0.2s ease;
}

.search-button:hover {
  background: #dedede;
  color: var(--blue);
}

.title-wrapper-catalog {
  margin-top: 10px;
  padding-bottom: 20px;
}

.shape {
  border-color: rgba(255, 255, 255, 0) #d9534f rgba(255, 255, 255, 0)
    rgba(255, 255, 255, 0);
  border-color: transparent #999999 transparent transparent;
}
.shape-text {
  color: black;
  font-size: 12px;
  font-weight: bold;
  position: relative;
  right: -245px;
  bottom: 105px;
  white-space: nowrap;
  -ms-transform: rotate(30deg); /* IE 9 */
  -o-transform: rotate(360deg); /* Opera 10.5 */
  -webkit-transform: rotate(30deg); /* Safari and Chrome */
  transform: rotate(30deg);
}

/* Ajustes responssivo */
@media (max-width: 576px) {
  nav ul li {
    display: none;
  }
  .header-block img {
    width: 70%;
    position: absolute;
    right: 16%;
    top: 30%;
  }
  .header-block .text {
    position: absolute;
    bottom: 10%;
    left: 15;
  }
  section .filter-card {
    width: 370px;
    padding: 0px 10px;
  }
  .search-input {
    max-width: 700px;
    min-width: 240px;
  }
  .search-button {
    max-width: 10px;
    min-width: 80px;
  }
  .sobre {
    margin-top: 100px;
  }
  .title-wrapper-sobre {
    margin-bottom: 20px;
  }
  .sobre-content {
    flex-direction: column;
    height: 100%;
  }
  .left {
    display: none;
  }
  .right {
    width: 90%;
  }
  .right p {
    width: 100%;
    margin: 0px;
    text-align: left;
  }
  .recurso {
    height: 100%;
  }
  .recurso-card-block {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  footer {
    height: 100%;
  }
  footer .main {
    height: 100%;
  }
  .footer-link {
    flex-direction: column;
    padding-left: 10%;
  }
}
</style>
© 2021 GitHub, Inc.
