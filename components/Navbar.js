function classIsLit(currentPage, page) {
  if (page === "about" && currentPage === "About") {
    return `class="lit"`;
  } else if (page === "home" && currentPage === "Home") {
    return `class="lit"`;
  } else if (page === "store" && currentPage === "Store") {
    return `class="lit"`;
  }
  return "";
}

function Navbar(currentPage) {
  console.log(currentPage);
  document.getElementById("navbar").innerHTML = `
    <div class="nav-title">
        Meet Cohort 5
    </div>
    <div class="top-nav">
        <div>
        <img
            class="pup"
            src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2019/11/Grin-f1.jpg"
            alt="pup"
        />
        </div>
        <div class="pagelinks">
        <div ${classIsLit(
          currentPage,
          "home"
        )}><a href="index.html">Home</a></div>
        <div ${classIsLit(
          currentPage,
          "about"
        )}><a href="about.html">About</a></div>
        <div ${classIsLit(
          currentPage,
          "store"
        )}><a href="store.html">Store</a></div>
        </div>
        <div>Sign In</div>
        </div>
    `;
}

function render(currentPage) {
  Navbar(currentPage);
}
