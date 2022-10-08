
export function Navigation({ cartCount }) {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg bg-light fixed-top">
        <div class="container-fluid">
          Start Bootstrap
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                Home
              </li>
              <li class="nav-item">
                About
              </li>
              <li class="nav-item dropdown dropdown-toggle" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
                Shop
                <ul class="dropdown-menu">
                  <li class="dropdown-item">All Products</li>
                  <li><hr class="dropdown-divider"/></li>
                  <li class="dropdown-item">Popular Item</li>
                  <li class="dropdown-item">New Arrivals</li>
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
