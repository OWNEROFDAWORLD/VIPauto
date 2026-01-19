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

// Gestion du formulaire de demande d'offre
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

// Exécuter quand le DOM est prêt
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFormHandler);
} else {
    initFormHandler();
}