//Loading Interface
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const minLoadTime = 1000;
    const startTime = Date.now();

    function hideLoadingScreen() {
        loadingScreen.style.display = 'none';
    }

    const loadTime = Date.now() - startTime;
    if (loadTime >= minLoadTime) {
        hideLoadingScreen();
    } else {
        setTimeout(hideLoadingScreen, minLoadTime - loadTime);
    }
});

//Navbar Close
document.addEventListener("DOMContentLoaded", () => {
    const navbarCollapse = document.getElementById("navbarNav");

    // Fungsi untuk menutup navbar jika diklik di luar
    document.addEventListener("click", (event) => {
        const isNavbarClicked = navbarCollapse.contains(event.target);
        const isNavbarTogglerClicked = event.target.closest(".navbar-toggler");

        if (!isNavbarClicked && !isNavbarTogglerClicked && navbarCollapse.classList.contains("show")) {
            const navbarInstance = bootstrap.Collapse.getInstance(navbarCollapse);
            if (navbarInstance) {
                navbarInstance.hide();
            }
        }
    });
});

document.querySelectorAll('#serviceModal .service-card').forEach(item => {
    item.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        document.getElementById('service').value = value;
        document.getElementById('selectedService').value = this.querySelector('.card-title').textContent;
        bootstrap.Modal.getInstance(document.getElementById('serviceModal')).hide();
    });
});


//Modals Kontak
document.querySelectorAll("#serviceModal .service-card").forEach(item => {
    item.addEventListener("click", function () {
        const value = this.getAttribute("data-value");
        document.getElementById("service").value = value;
        document.getElementById("selectedService").value =
            this.querySelector(".card-title").textContent;
        bootstrap.Modal.getInstance(
            document.getElementById("serviceModal")
        ).hide();
    });
});

document.querySelectorAll(".filter-btn").forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        document.querySelectorAll(".portfolio-item").forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

document.getElementById("quote-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Terima kasih! Permintaan Anda telah kami terima.");
    this.reset();
});

//Kalkulator
function calculateCost() {
    const size = document.getElementById("project-size").value;
    const material = document.getElementById("material-type").value;
    let cost = 0;

    if (material === "steel") {
        cost = size * 500; // Harga per m² baja
    } else if (material === "besi") {
        cost = size * 1500; //harga per m² besi
    } else if (material === "aluminum") {
        cost = size * 700; // Harga per m² aluminium
    }

    //Rubah ke mata uang indonesia
    const total = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR"
    }).format(cost);

    document.getElementById("result").innerText = `Estimasi Biaya: Rp ${total}`;
}
