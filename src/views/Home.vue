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

          <button @click="getUsuarios()" class="search-button">
            Pesquisar
          </button>
        </div>
        <div class="row">
          <tr v-if="!hasUsuarios">
            <td colspan="6">
              Não existem usuarios criados!
            </td>
          </tr>

          <div class="col-md-4" v-else>
            <div
              class="card bg-light"
              v-for="usuario in usuarios"
              :key="usuario.id"
            >
              <img
                class="card-img-top"
                src="../assets/gato-persa-3.jpg"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title border-bottom pb-3">
                  {{ usuario.nome }}

                  <a
                    href="#"
                    class="float-right btn btn-sm btn-info d-inline-flex share"
                    ><i class="fas fa-share-alt"></i
                  ></a>
                </h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-sm btn-info float-right"
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
      usuarios: {
        nome: "",
        telefone: "",
        username: "",
      },
    };
  },
  computed: {
    hasUsuarios() {
      return this.usuarios.length > 0;
    },
  },
  methods: {
    getUsuarios() {
      this.axios.get("http://localhost:3000/users").then((response) => {
        this.usuarios = response.data.data;
      });
    },
  },
  created() {
    this.getUsuarios();
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

/*  sobre  */
.sobre {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 10px;
}
.sobre-content {
  max-width: 1000px;
  min-width: 300px;
  height: 600px;
  background: #dedede3b;
  margin: 0 auto;
  border-radius: 8px;
  z-index: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.left {
  width: 25%;
  min-width: 300px;
  height: 100%;
  border-radius: 8px;
  background: #000000a1;
}
.right {
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 10%;
}
.right h3 {
  text-align: right;
  width: 90%;
  margin-bottom: 20px;
}
.right p {
  max-width: 90%;
  font-size: 1em;
  letter-spacing: 2px;
  text-align: right;
  color: rgba(0, 0, 0, 0.4);
}
/* Recursos */
.recurso {
  width: 100%;
  height: 100%;
  background: var(--gray);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
}
.title-wrapper-recurso {
  padding: 20px 0px;
}
.recurso-card-block {
  max-width: 1000px;
  min-width: 300px;
  height: 250px;
  background: white;
  margin: 0 auto;
  border-radius: 8px;
  z-index: 10px;
  padding: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  grid-gap: 30px;
}
.recurso-card-item {
  max-width: 420px;
  height: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #dedede3b;
  border-radius: 4px;
}
.recurso-text-content {
  max-width: 60%;
  margin: 5px;
}
.recurso-card-item img {
  width: 64px;
  height: 64px;
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
