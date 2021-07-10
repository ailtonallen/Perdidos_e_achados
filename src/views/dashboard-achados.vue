<template>
  <div class="container">
    
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
              v-if="!hasTodos">
              <td
                colspan="6">
                Não existem achados criadas!
              </td>
            </tr>
            <tr
              v-else
              v-for="todo in todos"
              :key="todo.id">
              <td>{{ todo.id }}</td>
              <td>{{ todo.user_id }}</td>
              <td>{{ todo.title }}</td>
              <td>
                <i
                  v-if="todo.completed"
                  class="fas fa-check text-success">
                </i>
                <i
                  v-else
                  class="fas fa-times text-danger">
                </i>
              </td>
              <td>{{ formatDate(todo.created_at) }}</td>
              <td>{{ formatDate(todo.updated_at) }}</td>
              <td>
                <button
                  @click="openEditTodoModal(todo)"
                  type="button"
                  class="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#todoModal">
                  Editar
                </button>
              </td>
              <td>
                <button
                  @click="removeTodo(todo.id)"
                  type="button"
                  class="btn btn-outline-danger">
                  Remover
                </button>
              </td>
              <td>
                <button
                  @click="goToDetails(todo.id)"
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

export default {
  name: 'Todos',

  components: {
  },

  computed: {
    hasTodos () {
      return this.todos.length > 0
    }
  },

  data () {
    return {
      maintenanceTodo: {
        id: null,
        userId: null,
        title: '',
        completed: false
      },

      todos: [],

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
      this.axios.get('' + this.pagination.page).then((response) => {
        this.todos = response.data.data
        this.pagination = response.data.meta.pagination
      })
    },

    removeAchado (todoId) {
      this.axios.delete('https://gorest.co.in/public-api/todos/' + todoId,).then((response) => {
        if (response.data.code === 200) {
          this.getAchados()
        } else {
          alert(response.data.data.message)
        }
      })
    },

    editAchados () {
      let apiAchados = {
        titulo: this.maintenanceTodo.userId,
        status: this.maintenanceTodo.title,
        completed: this.maintenanceTodo.completed,
      }

      this.axios.put('https://gorest.co.in/public-api/todos/' + this.maintenanceTodo.id,
      apiTodo,
      {
        headers: {
          Authorization: 'Bearer 19cba85ee0aae784b1ebd27da60e9fda8750deaa140b5da0411cbcefc2f2a2c3'
        }
      }).then((response) => {
        if (response.data.code === 200) {
          this.getTodos()

          this.resetMaintenanceTodo()
        } else {
          alert('Erro ao editar tarefa!')
        }
      })
    },

    openEditTodoModal (todo) {
      this.maintenanceTodo = {
        id: todo.id,
        userId: todo.user_id,
        title: todo.title,
        completed: todo.completed
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

    resetMaintenanceTodo () {
      this.maintenanceTodo = {
        id: null,
        userId: null,
        title: '',
        completed: false
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