let cars = JSON.parse(localStorage.getItem("vipauto_cars")) || [];


function displayCars() {
const list = document.getElementById("car-list");
list.innerHTML = "";


cars.forEach(car => {
list.innerHTML += `
<div class="col-md-4 mb-4">
<div class="card shadow-lg fade-in-up">
<img src="${car.image}" class="card-img-top" alt="Voiture">
<div class="card-body">
<h5 class="card-title text-warning">${car.model}</h5>
<p>${car.description}</p>
<p class="fw-bold text-warning">${car.price} €</p>
</div>
</div>
</div>`;
});
}


displayCars();


function addCar(model, price, description, image) {
cars.push({ model, price, description, image });
localStorage.setItem("vipauto_cars", JSON.stringify(cars));
}

function initFormHandler() {
    const form = document.getElementById('formDemande');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const messageElement = document.getElementById('messageConfirmation');
            if (messageElement) {
                messageElement.style.display = 'block';
            }
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFormHandler);
} else {
    initFormHandler();
}


document.addEventListener("DOMContentLoaded", () => {
  const carouselEl = document.getElementById("avisCarousel");
  if (!carouselEl) return;

  let startX = 0;
  let endX = 0;

  carouselEl.addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].screenX;
  }, { passive: true });

  carouselEl.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].screenX;
    const diff = endX - startX;

    // seuil
    if (Math.abs(diff) < 40) return;

    const carousel = bootstrap.Carousel.getOrCreateInstance(carouselEl);
    if (diff < 0) carousel.next();
    else carousel.prev();
  }, { passive: true });
});



 