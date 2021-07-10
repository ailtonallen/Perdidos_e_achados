<template>
  <header>
    <div class="content">
      <nav>
         <router-link to="/">
        <p class="brand">Perdidos e<strong> Achados</strong></p>
</router-link>
        <ul>
          <li>
            <router-link to="/perdidos">Perdidos</router-link>
          </li>
          <li>
            <router-link to="/achados">Achados</router-link>
          </li>
          <li>
            <router-link to="/sobre">Sobre</router-link>
          </li>
          <li v-if="isLoggedIn">
            <a @click="logout">Logout</a>
          </li>
          <li v-else>
            <router-link to="/register">Register</router-link> |
            <router-link to="/login">Login</router-link>
          </li>
        </ul>
      </nav>
      <div class="header-block">
        <div class="text">
          <h2>
            Serviço gratuito para ajuda <br />
            a encontrar itens perdidos
          </h2>
          <p>
            Seu item perdido pode estar por aqui! <br />
            Cadastre as informaçoes no site:
          </p>
        </div>
        
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Headers",

  methods: {
        logout(){
      localStorage.removeItem('user')
     localStorage.removeItem('token')
        this.$router.push('/login')
      },
goToHome () {
      
      this.$router.push('/')
    },
      
  },
  computed:{
    isLoggedIn(){
      if (localStorage.getItem('token')){
        return true
      }else {
        return false
      }
      
    }
  }
};
</script>

<style>
header {
  width: 100%;
  height: 400px;
  background: var(--lightblue);
}
.brand {
  font-size: 24px;
  color: var(--blue);
  cursor: pointer;
}
nav ul {
  display: flex;
  flex-direction: row;
}
nav ul li {
  list-style: none;
  padding: 10px;
  cursor: pointer;
}
nav ul li a {
  color: var(--blue);
  text-decoration: none;
}
nav ul li a:hover {
  color: #00285f83;
}
nav ul button {
  border: 1px solid var(--blue);
  background: transparent;
  padding: 8px 40px;
  cursor: pointer;
  margin-left: 30px;
  color: var(--blue);
  font-weight: bold;
  border-radius: 4px;
}
nav ul button:hover {
  transition: background, color 0.6s;
  background: var(--blue);
  color: white;
}
.content .header-block {
  max-width: 1000px;
  min-width: 300px;
  height: 250px;
  background: var(--blue);
  border-radius: 8px;
  box-shadow: 1px 0px 10px 0px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 1px 0px 10px 0px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 1px 0px 10px 0px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 10;
  padding: 10px;
}
.header-block img {
  width: 50%;
  position: absolute;
  right: 2%;
  bottom: 2%;
}
.header-block .text {
  position: absolute;
  bottom: 30%;
  left: 15%;
}
.header-block .text h2 {
  color: white;
  margin-bottom: 20px;
  text-align: right;
  transform: translateX(-20px);
  transition: transform 0.5s;
}
.header-block .text p {
  max-width: 280px;
  color: white;
  text-align: right;
  transform: translateX(-20px);
  transition: transform 0.4s;
}
nav {
  width: 100%;
  height: 125px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
</style>
