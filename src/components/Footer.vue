<template>
  <footer>
      <div class="main">
          <div class="content footer-link">
              <div class="footer-company">
                  <h4>Empresa</h4>
                  <h4>Sobre</h4>
                  <h6>Contato</h6>

              </div>
              <div class="footer-rental">
                  <h4>Serviços</h4>
                  <h6>Achados e Perdidos</h6>
                  <h6>Help</h6>

              </div>
              <div class="footer-social">
                  <h4>Stay connected</h4>
                  <div class="social-icom">
                      <img src="../assets/instagram.png" alt="Instagram" >
                      <img src="../assets/facebook.png" alt="Facebook" >
                  </div>
              </div>
              <div class="footer-contact">
                  <h4>Contact US</h4>
                  <h6>+258 840588122</h6>
                  <h6>ailtonallen@gmail.com</h6>
                  <h6>Zambézia - Quelimane</h6>

              </div>

          </div>

      </div>
      <div class="last">Junte-se ao time dos Heróis</div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

/* Footer */

footer {
    width: 100%;
    height: 250px;
}

footer .main {
    width: 100%;
    height: 200px;
    background: var(--lightblue);
    padding: 20px 10px;
}

.footer-link {
    max-width: 1000px;
    min-width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
}

.footer-company, .footer-rental, .footer-social, .footer-contact {
    color: white;
    height: 100%;
    min-height: 100px;

}

.footer-link h4 {
    margin-bottom: 10px;
}

.footer-link {
    margin-bottom: 8px;
}

.main .footer-social img {
    width: 32px;
    height: 32px;
}

footer .last {
    width: 100%;
    height: 50px;
    background: var(--blue);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>