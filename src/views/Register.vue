<template>
  <div class="card bg-light">
    <article class="card-body mx-auto" style="max-width: 400px;">
      <h4 class="card-title mt-3 text-center">Criar uma Conta</h4>
      <p class="text-center">Get started with your free account</p>
      <p>
        <a href="" class="btn btn-block btn-twitter">
          <i class="fab fa-twitter"></i> Login via Twitter</a
        >
        <a href="" class="btn btn-block btn-facebook">
          <i class="fab fa-facebook-f"></i> Login via facebook</a
        >
      </p>
      <p class="divider-text">
        <span class="bg-light">OR</span>
      </p>
      <form>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-user"></i> </span>
          </div>
          <input v-model="maintenanceUsers.nome"
            name=""
            class="form-control"
            placeholder="Full name"
            type="text"
          />
        </div>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-user"></i> </span>
          </div>
          <input v-model="maintenanceUsers.username"
            name=""
            class="form-control"
            placeholder="Username"
            type="text"
          />
        </div>
        <!-- form-group// -->
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
          <input v-model="maintenanceUsers.email"
            name=""
            class="form-control"
            placeholder="Email address"
            type="email"
          />
        </div>
        <!-- form-group// -->
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
          </div>
          <select class="custom-select" style="max-width: 120px;">
            <option selected="">+258</option>
            <option value="1">+244</option>
            <option value="2">+55</option>
            <option value="3">+386</option>
          </select>
          <input v-model="maintenanceUsers.telefone"
            name=""
            class="form-control"
            placeholder="Phone number"
            type="text"
          />
        </div>
        <!-- form-group end.// -->
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
          </div>
          <input v-model="maintenanceUsers.password"
            class="form-control"
            placeholder="Create password"
            type="password"
          />
        </div>
        <!-- form-group// -->
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
          </div>
          <input v-model="maintenanceUsers.passwordSame"
            class="form-control"
            placeholder="Repeat password"
            type="password"
          />
        </div>
        <!-- form-group// -->
        <div class="form-group">
          <button v-if="!maintenanceUsers.id"
              @click="addUsers()" type="submit" class="btn btn-primary btn-block" >
            Create Account
          </button>
        </div>
        <!-- form-group// -->
        <p class="text-center">Have an account? <a href="">Log In</a></p>
      </form>
    </article>
  </div>
  <!-- card.// -->
</template>

<script>
export default {
  name: 'Register',

  data () {
    return {
      maintenanceUsers: {
        id: null,
        nome: null,
        username: null,
        telefone: null,
        email: null,
        password: null,
        passwordSame: null
      },

      users: [],

      pagination: {
        total: null,
        pages: null,
        page: 1,
        limit: null
      }
    }
  },
  methods:{
    getUsuarios() {
      this.axios.get("http://localhost:3000/users").then((response) => {
        this.users = response.data.data;
      });
    }, 
    addUsers () {
      let apiUsers = {
        nome: this.maintenanceUsers.nome,
        email: this.maintenanceUsers.email,
        telefone: this.maintenanceUsers.telefone,
        username: this.maintenanceUsers.username,
        password: this.maintenanceUsers.password,
        passwordSame:this.maintenanceUsers.password,
      }

      this.axios.post("http://localhost:3000/users",
      apiUsers).then((response) => {
        if (response.data.code === 201) {
          this.getUsers()

          this.resetMaintenanceUsers()
        } else {
          alert('Erro a criar usuario!')
        }
      })
    },
    resetMaintenanceUsers () {
      this.maintenanceUsers = {
        id: null,
        nome: null,
        username: '',
        telefone: '',
        email: null,
        password: null
      }
    }
  }
};


</script>

<style>.divider-text {
    position: relative;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
.divider-text span {
    padding: 7px;
    font-size: 12px;
    position: relative;   
    z-index: 2;
}
.divider-text:after {
    content: "";
    position: absolute;
    width: 100%;
    border-bottom: 1px solid #ddd;
    top: 55%;
    left: 0;
    z-index: 1;
}

.btn-facebook {
    background-color: #405D9D;
    color: #fff;
}
.btn-twitter {
    background-color: #42AEEC;
    color: #fff;
}</style>
