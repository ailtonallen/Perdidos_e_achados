<template>
  <div>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default {
  name: "App",

  components: {
    Footer,
  },

  mounted() {
    var token = localStorage.getItem("token");
    
    if (!token) {
      this.$router.push("/");
    }
  },
};
</script>

<style></style>
