<template>
  <div class="container">
    <Dashboard />
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div
      class="modal fade"
      id="perdidoModal"
      tabindex="-1"
      aria-labelledby="anuncioModalLabel"
      aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title">
              Anuncio
            </h5>

            <button
              @click="resetMaintenancePerdido()"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close">
            </button>
          </div>

          <div class="modal-body">
            <form>
              

              <div class="form-group mt-4">
                <label>Titulo</label>
                <input
                  v-model="maintenancePerdido.titulo"
                  type="text"
                  class="form-control"
                  placeholder="Titulo" />
              </div>

              <div class="form-check mt-4">
                <label>Encontrado</label>
                <input
                  v-model="maintenancePerdido.status_id"
                  type="checkbox"
                  class="form-check-input">
              </div>

              
            </form>
          </div>

          <div class="modal-footer">
            <button
              @click="resetMaintenancePerdido()"
              ref="closeBtn"
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal">
              Fechar
            </button>


            <button
              @click="editPerdidos()"
              type="button"
              class="btn btn-primary">
              Editar anúncio
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-lg-12">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Id do Perdido</th>
              <th scope="col">Titulo do Perdido</th>
              <th scope="col">Descrição</th>
              <th scope="col">Estado</th>
              <th scope="col">Data</th>
              
            </tr>
          </thead>

          <tbody>
            <tr
              v-if="!hasPerdidos">
              <td
                colspan="5">
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
    </main>
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
        status: null,
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
      this.axios.get('http://localhost:3000/perdidosD').then((response) => {
        this.perdidos = response.data
        
      })
    },

    removePerdido (perdidoId) {
      this.axios.delete('http://localhost:3000/perdidos/' + perdidoId,).then((response) => {
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

      this.axios.put('http://localhost:3000/perdidos/' + this.maintenancePerdido.id,
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