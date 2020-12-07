document.write(`
  <div class="row justify-content-center fixed-top" id="header">
    <div class="col-8 navfix">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand pl-2 pt-0 pr-0" href="index.html">
          <img src="imgs/Logo.png" width="40" height="40" class="d-inline-block align-top" alt="" loading="lazy">
        </a>
        <button class="navbar-toggler m-1" type="button" data-toggle="collapse" data-target="#Navbar" aria-controls="Navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="Navbar">
          <div class="navbar-nav">
            <a class="nav-link index" href="index.html">ホーム <span class="sr-only">(current)</span></a>
            <a class="nav-link origami" href="origami.html">折り紙</a>
            <a class="nav-link kirigami" href="kirigami.html">切り紙</a>
            <a class="nav-link papercraft" href="papercraft.html">ペーパークラフト</a>
            <a class="nav-link cardboard" href="cardboard.html">段ボール</a>
          </div>
        </div>
      </nav>
    </div>
  </div>
  <div class="row justify-content-center overlay-fix">
    <div class="col-8 shadow-xl p-0">
      <img src="imgs/Imgs_0.png" class="img-fluid" alt="Responsive image">
    </div>
  </div>
  <div class="row">
    <img src="imgs/Imgs_1.png" class="img-fluid zindex-0" alt="Responsive image">
  </div>
`);
