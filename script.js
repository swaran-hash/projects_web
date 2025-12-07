let carsData = [];

fetch("cars.json")
    .then(response => response.json())
    .then(data => {
        carsData = data;
        displayCars(data);
    });

function displayCars(cars) {
    const container = document.getElementById("carContainer");
    container.innerHTML = "";

    cars.forEach(car => {
        container.innerHTML += `
            <div class="car-card">
                <img src="${car.image}" alt="${car.name}">
                <h3>${car.name}</h3>
                <p><strong>Brand:</strong> ${car.brand}</p>
                <p><strong>Engine:</strong> ${car.engine}</p>
                <p><strong>Power:</strong> ${car.power}</p>
            </div>
        `;
    });
}

function filterCars() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const brand = document.getElementById("brandFilter").value;

    let filtered = carsData.filter(car =>
        car.name.toLowerCase().includes(search) &&
        (brand === "all" || car.brand === brand)
    );

    displayCars(filtered);
}
