<template>
  <div class="container">
    <Dashboard />
    <div class="row mt-4">
      <div class="col-lg-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id do Achado</th>
              <th scope="col">Titulo do achado</th>
              <th scope="col">Descrição</th>
              <th scope="col">Estado</th>
              <th scope="col">Data</th>
              <th scope="col">Categoria</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-if="!hasAchados">
              <td
                colspan="6">
                Não existem achados criadas!
              </td>
            </tr>
            <tr
              v-else
              v-for="perdido in perdidos"
              :key="perdido.id">
              <td>{{ perdido.id }}</td>
              <td>{{ perdido.titulo }}</td>
              <td>{{ perdido.descricao }}</td>
              <td>{{ perdido.status }}</td>
              <td>{{ formatDate(perdido.data) }}</td>
              <td>
                <button
                  @click="openEditAchadoModal(perdido)"
                  type="button"
                  class="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#perdidoModal">
                  Editar
                </button>
              </td>
              <td>
                <button
                  @click="removeAchado(achado.id)"
                  type="button"
                  class="btn btn-outline-danger">
                  Remover
                </button>
              </td>
              <td>
                <button
                  @click="goToDetails(achado.id)"
                  type="button"
                  class="btn btn-outline-success">
                  Detalhes
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row mt-4">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a
              @click.prevent="previousPage()"
              class="page-link"
              :class="{'disabled': pagination.page == 1}"
              href="#">
              Página Anterior
            </a>
          </li>

          <li class="page-item">
            <a class="page-link" href="#">{{ pagination.page }}</a>
          </li>

          <li class="page-item">
            <a
              @click.prevent="nextPage()"
              :class="{'disabled': pagination.page == pagination.pages}"
              class="page-link"
              href="#">
              Página Seguinte
            </a>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
import moment from 'moment'
import Dashboard from '../components/Dashboard.vue'

export default {
  name: 'Achados',

  components: { Dashboard
  },

  computed: {
    hasTodos () {
      return this.achados.length > 0
    }
  },

  data () {
    return {
      maintenanceAchado: {
        id: null,
        titulo: null,
        status: null,
      },

      achados: [],

      pagination: {
        total: null,
        pages: null,
        page: 1,
        limit: null
      }
    }
  },

  methods: {
    getAchados () {
      this.axios.get('http://localhost:3000/achados' + this.pagination.page).then((response) => {
        this.achados = response.data.data
        this.pagination = response.data.meta.pagination
      })
    },

    removeAchado (achadoId) {
      this.axios.delete('' + achadoId,).then((response) => {
        if (response.data.code === 200) {
          this.getAchados()
        } else {
          alert(response.data.data.message)
        }
      })
    },

    editAchados () {
      let apiAchados = {
        titulo: this.maintenanceAchados.titulo,
        status: this.maintenanceAchados.status,
        
      }

      this.axios.put('http://localhost:3000/achados' + this.maintenanceAchado.id,
      apiAchados,
      ).then((response) => {
        if (response.data.code === 200) {
          this.getAchados()

          this.resetMaintenanceAchado()
        } else {
          alert('Erro ao editar achado!')
        }
      })
    },

    openEditTodoModal (achado) {
      this.maintenanceAchado = {
        id: achado.id,
        titulo: achado.titulo,
        status: achado.status,
              }
    },

    formatDate (date) {
      var splitedDate = date.split('.')[0]

      return moment(splitedDate, 'YYYY-MM-DDTHH:mm:ss').format('DD/MM/YYYY HH:mm:ss')
    },

    previousPage () {
      if (this.pagination.page > 1) {
        this.pagination.page--
      }

      this.getAchados()
    },

    nextPage () {
      if (this.pagination.page < this.pagination.pages) {
        this.pagination.page++
      }

      this.getAchados()
    },

    resetMaintenanceAchado () {
      this.maintenanceAchado = {
        id: null,
        titulo: null,
        status:null,
        
      }
    }
  },

  created () {
    this.getAchados()
  }
}
</script>

<style>

</style>