<template>
  <div class="container">
    <Dashboard />
    <div class="row mt-4">
      <div class="col-lg-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id do Perdido</th>
              <th scope="col">Titulo do Perdido</th>
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
              v-if="!hasPerdidos">
              <td
                colspan="6">
                Não existem perdidos criadas!
              </td>
            </tr>
            <tr
              v-else
              v-for="perdido in perdidos"
              :key="perdido.id">
              <td>{{ perdido.id }}</td>
              <td>{{ perdido.titulo }}</td>
              <td>{{ perdido.descricao }}</td>
              <td> {{ perdido.status}}</td>
              <td>{{ formatDate(perdido.data) }}</td>
              <td>{{ perdido.categoria }}</td>
              
              <td>
                <button
                  @click="openEditPerdidoModal(perdido)"
                  type="button"
                  class="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#perdidoModal">
                  Editar
                </button>
              </td>
              <td>
                <button
                  @click="removePerdido(perdido.id)"
                  type="button"
                  class="btn btn-outline-danger">
                  Remover
                </button>
              </td>
              <td>
                <button
                  @click="goToDetails(perdido.id)"
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
  name: 'Perdidos',

  components: { Dashboard
  },

  computed: {
    hasPerdidos () {
      return this.perdidos.length > 0
    }
  },

  data () {
    return {
      maintenancePerdido: {
        id: null,
        titulo: null,
        descricao: null,
        data: null
      },

      perdidos: [],

      pagination: {
        total: null,
        pages: null,
        page: 1,
        limit: null
      }
    }
  },

  methods: {
    getPerdidos () {
      this.axios.get('http://localhost:3000/perdidos' + this.pagination.page).then((response) => {
        this.perdidos = response.data.data
        this.pagination = response.data.meta.pagination
      })
    },

    removePerdido (perdidoId) {
      this.axios.delete('http://localhost:3000/perdidos' + perdidoId,).then((response) => {
        if (response.data.code === 200) {
          this.getPerdidos()
        } else {
          alert(response.data.data.message)
        }
      })
    },

    editPerdidos () {
      let apiPerdido = {
        titulo: this.maintenancePerdido.titulo,
        status: this.maintenancePerdido.status,
      }

      this.axios.put('http://localhost:3000/perdidos' + this.maintenancePerdido.id,
      apiPerdido,
      ).then((response) => {
        if (response.data.code === 200) {
          this.getPerdidos()

          this.resetMaintenancePerdido()
        } else {
          alert('Erro ao editar Perdido!')
        }
      })
    },

    openEditPerdidoModal (perdido) {
      this.maintenancePerdido = {
        id: perdido.id,
        titulo: perdido.titulo,
        status: perdido.status,
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

      this.getPerdidos()
    },

    nextPage () {
      if (this.pagination.page < this.pagination.pages) {
        this.pagination.page++
      }

      this.getPerdidos()
    },

    resetMaintenancePerdido () {
      this.maintenancePerdido = {
        id: null,
        titulo: null,
        status: null,
         }
    }
  },

  created () {
    this.getPerdidos()
  }
}
</script>

<style>

</style>