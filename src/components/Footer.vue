<template>
<footer class="kilimanjaro_area">
        <!-- Top Footer Area Start -->
        <div class="foo_top_header_one section_padding_100_70">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="kilimanjaro_part">
                            <h5>About Us</h5>
                            <p>It includes rich features & contents. It's designed & developed based on One Page/ Multi-page Layout,blog themes,world press themes and blogspot. You can use any layout from any demo anywhere.</p>
                            <p>webblogoverflow is completely creative, clean & 100% responsive website. Put your business into next level with Webublogoverflow.</p>
                        </div>
                        <div class="kilimanjaro_part m-top-15">
                            <h5>Social Links</h5>
                            <ul class="kilimanjaro_social_links">
                                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> Facebook</a></li>
                                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a></li>
                                <li><a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i> Pinterest</a></li>
                                <li><a href="#"><i class="fa fa-youtube" aria-hidden="true"></i> YouTube</a></li>
                                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i> Linkedin</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="kilimanjaro_part">
                            <h5>Tags Widget</h5>
                            <ul class=" kilimanjaro_widget">
                                <li><a href="#">Achado</a></li>
                                <li><a href="#">Perdido</a></li>
                                <li><a href="#">Encontrado</a></li>
                                <li><a href="#">One Page</a></li>
                                </ul>
                        </div>

                        <div class="kilimanjaro_part m-top-15">
                            <h5>Important Links</h5>
                            <ul class="kilimanjaro_links">
                                <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Terms & Conditions</a></li>
                                <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>About Licences</a></li>
                                <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Help & Support</a></li>
                                <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Privacy Policy</a></li>
                                <li><a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Community & Forum</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="kilimanjaro_part">
                            <h5>Ultimos anúncios</h5>
                            <div v-for="ultimo in ultimos"
              :key="ultimo.id" class="kilimanjaro_blog_area">
                                <div class="kilimanjaro_thumb">
								<img class="img-fluid" :src="'http://localhost:3000/' + ultimo.filename">
                                </div>
                                <a href="#">{{ultimo.titulo}}</a>
                                <p class="kilimanjaro_date">{{formatDate(ultimo.data)}}</p>
                                <p>{{ultimo.descricao}}</p>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="kilimanjaro_part">
                            <h5>Quick Contact</h5>
                            <div class="kilimanjaro_single_contact_info">
                                <h5>Phone:</h5>
                                <p>+258 84 05 88 122 <br> +258 87 90 96 726</p>
                            </div>
                            <div class="kilimanjaro_single_contact_info">
                                <h5>Email:</h5>
                                <p>ailtonallen@ideiasdinamicas.com <br> ailtonallen@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer Bottom Area Start -->
        <div class=" kilimanjaro_bottom_header_one section_padding_50 text-center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <p>© All Rights Reserved by <a href="#">Ailton Allen<i class="fa fa-love"></i></a></p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import moment from 'moment'
export default {
name: "Footer",
data() {
    return {
      ultimos: null,
      

    };
  },
methods: {
    getUltimos(){
      this.axios.get("http://localhost:3000/ultimos").then((response)=>{
      this.ultimos = response.data;
    });
    },
    formatDate (date) {
      var splitedDate = date.split('.')[0]

      return moment(splitedDate, 'YYYY-MM-DDTHH:mm:ss').format('DD/MM/YYYY HH:mm:ss')
    },
},
created() {
    this.getUltimos();
}
}
</script>

<style>
.kilimanjaro_area {
    position: relative;
    z-index: 1;
	}
	.foo_top_header_one {
    background-color: #15151e;
    color: #fff;
}
.section_padding_100_70 {
    padding-top: 100px;
    padding-bottom: 70px;
}
.foo_top_header_one {
    color: #fff;
}.kilimanjaro_part {
    margin-bottom: 30px;
}
.foo_top_header_one .kilimanjaro_part > h5 {
    color: #fff;
}
.kilimanjaro_part h4, .kilimanjaro_part h5 {
    margin-bottom: 30px;
}
.kilimanjaro_single_contact_info > p, .kilimanjaro_single_contact_info > h5, .kilimanjaro_blog_area > a, .foo_top_header_one .kilimanjaro_part > p {
    color: rgba(255,255,255,.5);
}
p, ul li, ol li {
    font-weight: 300;
}
ul {
    margin: 0;
    padding: 0;
}
.kilimanjaro_bottom_header_one {
    background-color: #111;
}
.section_padding_50 {
    padding: 50px 0;
}
.kilimanjaro_bottom_header_one p {
    color: #fff;
    margin: 0;
}
p, ul li, ol li {
    font-weight: 300;
}
.kilimanjaro_bottom_header_one a {
    color: inherit;
    font-size: 14px;
}
a, h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
}
.m-top-15 {
    margin-top: 15px;
}
ul {
    margin: 0;
    padding: 0;
}

.kilimanjaro_widget > li {
    display: inline-block;
}
p, ul li, ol li {
    font-weight: 300;
}
ol li, ul li {
    list-style: outside none none;
}
.kilimanjaro_widget a {
    border: 1px solid #333;
    border-radius: 6px;
    color: #888;
    display: inline-block;
    font-size: 13px;
    margin-bottom: 4px;
    padding: 7px 12px;
}
ul {
    margin: 0;
    padding: 0;
}
.kilimanjaro_links a {
    border-bottom: 1px solid #333;
    color: rgba(255,255,255,.5);
    display: block;
    font-size: 13px;
    margin-bottom: 5px;
    padding-bottom: 10px;
}
.kilimanjaro_links a {
    color: rgba(255,255,255,.5);
    font-size: 13px;
}
top-15 {
    margin-top: 15px;
}
.foo_top_header_one .kilimanjaro_part > h5 {
    color: #fff;
}
.kilimanjaro_part h4, .kilimanjaro_part h5 {
    margin-bottom: 30px;
}
.kilimanjaro_social_links > li {
    display: inline-block;
}
p, ul li, ol li {
    font-weight: 300;
}
.kilimanjaro_social_links a {
    border: 1px solid #333;
    border-radius: 6px;
    color: #888;
    display: inline-block;
    font-size: 13px;
    margin-bottom: 3px;
    padding: 7px 12px;
}
.kilimanjaro_blog_area .kilimanjaro_date {
    color: #27ae60;
    font-size: 13px;
    margin-bottom: 5px;
}
.kilimanjaro_blog_area > p {
    color: rgba(255,255,255,.5);
    line-height: 1.3;
    margin-bottom: 0;
}
.kilimanjaro_works > a {
    display: inline-block;
    float: left;
    position: relative;
    width: 33.33333333%;
    z-index: 1;
}
.kilimanjaro_thumb {
    left: 0;
    position: absolute;
    top: 0;
    width: 75px;
}
.kilimanjaro_links a i {
    padding-right: 10px;
}
  /* :: 18.0 Footer Area CSS */

    .footer_area {
        position: relative;
        z-index: 1;
    }
 .footer_bottom p > i,
    .footer_bottom p > a:hover {
        color: #27ae60;
    }	

    .social_links_area {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        padding: 50px 0 30px 0;
        text-align: center;
        position: relative;
        z-index: 1;
    }
 .social_links_area > a:hover {
        color: #27ae60;
    }

    .inline-style .social_links_area > a:hover {
        background-color: transparent;
        color: #27ae60;
        border: 0px solid transparent;
    }
 .single_feature:hover .feature_text h4 {
        color: #27ae60;
    }
.kilimanjaro_blog_area {
    border-bottom: 1px solid #333;
    margin-bottom: 15px;
    padding: 0 0 15px 90px;
    position: relative;
    z-index: 1;
}
.kilimanjaro_links a {
    border-bottom: 1px solid #333;
    color: rgba(255,255,255,.5);
    display: block;
    font-size: 13px;
    margin-bottom: 5px;
    padding-bottom: 10px;
}
</style>