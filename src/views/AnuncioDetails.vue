<template>
  <div class="card">
    <Header />
    <div class="row">
      <aside class="col-sm-5 border-right">
        <article class="gallery-wrap">
          <div class="img-big-wrap">
            <div>
              <a href="#"
                ><img 
                :src="'http://localhost:3000/' + anuncio.filename"
              /></a>
            </div>
          </div>
          <!-- slider-product.// -->
          
          <!-- slider-nav.// -->
        </article>
        <!-- gallery-wrap .end// -->
      </aside>
      <aside class="col-sm-7">
        <article class="card-body p-5">
          <h3 class="title mb-3">{{anuncio.titulo}}</h3>

          <p class="price-detail-wrap">
            <span class="price h3 text-warning"> Recompensa:
              <span class="currency">MZN </span><span class="num">{{anuncio.recompensa}}</span>
            </span>
          </p>
          <!-- price-detail-wrap .// -->
          <dl class="item-property">
            <dt>Descrição</dt>
            <dd>
              <p>
              {{anuncio.descricao}}
              </p>
            </dd>
          </dl>
          <dl class="item-property">
            <dt>Data:</dt>
            <dd>
              <p>
              {{formatDate(anuncio.data)}}
              </p>
            </dd>
          </dl>
          <!-- item-property-hor .// -->
          <dl class="param param-feature">
            <dt>Contacto:</dt>
            <dd>{{anuncio.telefones}}</dd>
          </dl>
          <!-- item-property-hor .// -->
          <dl class="param param-feature">
            <dt>Local</dt>
            <dd>{{anuncio.local_sucedido}}</dd>
          </dl>
          <!-- item-property-hor .// -->
<!-- row.// -->
          <hr />
        </article>
        <!-- card-body.// -->
      </aside>
      <!-- col.// -->
    </div>
    <!-- row.// -->
  </div>
  <!-- card.// -->
</template>
<script>
import moment from 'moment'

import Header from '@/components/Headers'
export default {
  name: "AnuncioDetails",

  components: {
    Header
  },

  computed: {},

  data() {
    return {
      anuncio: null,
      local: null

    };
  },

  methods: {
    getAnuncios() {
      this.axios
        .get("http://localhost:3000/detalhes/" + this.$route.params.anuncioId)
        .then((response) => {
          this.anuncio = response.data.data;
        });
    },
    formatDate (date) {
      var splitedDate = date.split('.')[0]

      return moment(splitedDate, 'YYYY-MM-DDTHH:mm:ss').format('DD/MM/YYYY HH:mm:ss')
    },
    getLocal() {
      this.axios
        .get("http://localhost:3000/localizacao")
        .then((response) => {
          this.local = response.data.data;
        });
    },
    
  },

  created() {
    this.getAnuncios();
    this.getLocal();
  },
};
</script>

<style>
.pagination {
  justify-content: center;
}

.disabled {
  color: currentColor;
  cursor: not-allowed;
  opacity: 0.5;
  text-decoration: none;
}
.gallery-wrap .img-big-wrap img {
    height: 450px;
    width: auto;
    display: inline-block;
    cursor: zoom-in;
}


.gallery-wrap .img-small-wrap .item-gallery {
    width: 60px;
    height: 60px;
    border: 1px solid #ddd;
    margin: 7px 2px;
    display: inline-block;
    overflow: hidden;
}

.gallery-wrap .img-small-wrap {
    text-align: center;
}
.gallery-wrap .img-small-wrap img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    border-radius: 4px;
    cursor: zoom-in;
}
</style>
