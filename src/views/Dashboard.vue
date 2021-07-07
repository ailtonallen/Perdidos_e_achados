<template>
  <div>
    <!-- satrt_nav -->
    <div id="nav" class="">
    <nav class="navbar navbar-expand-lg navbar-light bg-primary ">
      <div class="container-fluid mb-0 mt-0 pt-0 pb-0 me-auto">
        <a class="navbar-brand text-white" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active text-white" aria-current="page" href="#"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >Disabled</a
              >
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-success btn-outline-info" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
    </div>
    <!-- end_nav -->
    <!-- Start_Sidebar -->
    <div class="">
      <div class="row">
        <div class="col-lg-4">
          <main>
            <!-- <h1 class="visually-hidden">Sidebars examples</h1> -->

            <div
              class="d-flex flex-column flex-shrink-0 text-white bg-dark"
              style="width: 280px;"
            >
              <a
                href="/"
                class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <svg class="bi me-2" width="40" height="32">
                  <use xlink:href="#bootstrap" />
                </svg>
                <span class="fs-4 pt-5">Sidebar</span>
              </a>
              <hr />
              <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                  <a href="#" class="nav-link active" aria-current="page">
                    <svg class="bi me-2" width="16" height="16">
                      <use xlink:href="#home" />
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16">
                      <use xlink:href="#speedometer2" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16">
                      <use xlink:href="#table" />
                    </svg>
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16">
                      <use xlink:href="#grid" />
                    </svg>
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link text-white">
                    <svg class="bi me-2" width="16" height="16">
                      <use xlink:href="#people-circle" />
                    </svg>
                    Customers
                  </a>
                </li>
              </ul>
              <hr />
              <div class="dropdown">
                <a
                  href="#"
                  class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt=""
                    width="32"
                    height="32"
                    class="rounded-circle me-2"
                  />
                  <strong>mdo</strong>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark text-small shadow"
                  aria-labelledby="dropdownUser1"
                >
                  <li><a class="dropdown-item" href="#">New project...</a></li>
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </div>
            </div>

            <div class="b-example-divider"></div>
          </main>
        </div>
        <div class="col-lg-8 bg-info">Content</div>
      </div>
    </div>

    <!-- End_Sidebar -->
  </div>
</template>

<script>
export default {};
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
