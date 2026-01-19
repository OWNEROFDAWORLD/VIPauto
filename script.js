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