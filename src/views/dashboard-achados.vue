<template>
  <div class="container">
    <Dashboard />
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <div
      class="modal fade"
      id="achadoModal"
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
              @click="resetMaintenanceAchado()"
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close">
            </button>
          </div>

          <div class="modal-body">
            
              

              <div class="form-group mt-4">
                <label>Titulo</label>
                <input
                  v-model="maintenanceAchado.titulo"
                  type="text"
                  class="form-control"
                  placeholder="Titulo" />
              </div>

              <div class="form-check mt-4">
                <label>Devolvido</label>
                <input
                
                  type="checkbox"
                  class="form-check-input">
              </div>

              
            
          </div>

          <div class="modal-footer">
            <button
              @click="resetMaintenanceAchado()"
              ref="closeBtn"
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal">
              Fechar
            </button>


            <button
              @click="editAchados()"
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
              <th scope="col">Id do Achado</th>
              <th scope="col">Titulo do achado</th>
              <th scope="col">Descrição</th>
              <th scope="col">Estado</th>
              <th scope="col">Data</th>
              
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
              v-for="achado in achados"
              :key="achado.id">
              <td>{{ achado.id }}</td>
              <td>{{ achado.titulo }}</td>
              <td>{{ achado.descricao }}</td>
              <td>{{ achado.status }}</td>
              <td>{{ formatDate(achado.data) }}</td>
              <td>
                <button
                  @click="openEditAchadoModal(achado)"
                  type="button"
                  class="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#achadoModal">
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
  name: 'Achados',

  components: { Dashboard
  },

  computed: {
    hasAchados () {
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
      this.axios.get('http://localhost:3000/achados').then((response) => {
        this.achados = response.data
        
      })
    },

    removeAchado (achadoId) {
      this.axios.delete('http://localhost:3000/achados/' + achadoId,).then((response) => {
        if (response.data.code === 200) {
          this.getAchados()
        } else {
          alert(response.data.data.message)
        }
      })
    },

    editAchados () {

      this.axios.put('http://localhost:3000/achados/' + this.maintenanceAchado.id,
      this.maintenanceAchado).then((response) => {
        if (response.data.code === 200) {
          this.getAchados()

          this.resetMaintenanceAchado()
        } else {
          alert('Sucesso ao editar o anuncio!')
        }
      })
    },

    openEditAchadoModal (achado) {
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