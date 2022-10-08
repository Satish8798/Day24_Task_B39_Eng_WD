
export function Navigation({ cartCount }) {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg bg-light fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand">Start Bootstrap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item">All Products</a></li>
                  <li><hr /></li>
                  <li><a class="dropdown-item" >Popular Items</a></li>
                  <li><a class="dropdown-item" >New Arrivals</a></li>
                </ul>
              </li>
            </ul>
            <button className="btn border border-dark"><i class="bi bi-cart-fill me-2"></i>Cart<span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span></button>
          </div>
        </div>
      </nav>
    </div>
  );
}
