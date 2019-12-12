window.addEventListener('load', () => document.querySelector('.preloader').classList.add('hidepreloader'));

const CreateCars = (() => {
    // car data
    const cars = [];
    // car class
    class Car {
        constructor(make, country, img, special, model, price, type, trans, gas) {
            this.make = make;
            this.country = country;
            this.img = img;
            this.special = special;
            this.model = model;
            this.price = price;
            this.type = type;
            this.trans = trans;
            this.gas = gas;
        }
    }
    // create car function
    function makeCar(make, country, img = 'img/german-opel.jpg', special = true, model = 'new model', price = '15,000', type = 'opel', trans = 'automatic', gas = '50') {
        const car = new Car(make, country, img, special, model, price, type, trans, gas);
        cars.push(car);
    }

    // produce cars function
    function produceCars() {
        makeCar('cadillac', 'american')
        makeCar('mercedes', 'german', 'img/german-mercedez.jpg', true, undefined, '25,000', 'mercedes', 'manual', '70');
        makeCar('audi', 'german', 'img/german-audi.jpg', undefined, 'other model', '36,000', 'audi', undefined, '32');
        makeCar('bmw', 'german', 'img/german-bmw.jpg', false, 'old model', '76,000', 'bmw', 'manual', '27');
        makeCar('opel', 'german', 'img/german-opel.jpg', undefined, 'other model');
        makeCar('porsche', 'german', 'img/german-porsche.jpg', false, undefined, '106,000', 'porsche suv', undefined, '67');
        makeCar('cadillac', 'american', 'img/america-cadillac.jpg', false, undefined, '115,000', 'cadillac', 'manual', '78');
        makeCar('chrysler', 'american', 'img/america-chrysler.jpg', undefined, undefined, '306,000', 'chrysler', 'manual', '39');
        makeCar('corvette', 'american', 'img/america-corvette.jpg', false, 'old model', '23,440', 'corvette smp', 'manual', '530');
        makeCar('ford', 'american', 'img/america-ford.jpg', false, undefined, '9,700', 'ford', 'manual', undefined);
        makeCar('jeep', 'american', 'img/america-jeep.jpg', false, undefined, '7,200', 'jeep', undefined, '1280');
    }
    produceCars();
    // console.log(cars);

    // Special cars
    const specialCars = cars.filter(car => car.special === true);
    // console.log(specialCars);

    return {
        cars,
        specialCars
    }

})();

const FeaturedSpecialCars = ((CreateCars) => {
    const specialCars = CreateCars.specialCars;
    // console.log(specialCars);
    const info = document.querySelector('.featured-info');

    // document loaded event
    document.addEventListener('DOMContentLoaded', () => {
        info.innerHTML = '';

        let data = '';

        specialCars.forEach(item => {
            data += `<!--single item-->
            <div class="featured-item my-3 d-flex p-2 text-capitalize align-items-baseline flex-wrap">
                <span data-img="${item.img}" class="featured-icon d-inline-block mr-2">
                    <i class="fas fa-car"></i>
                </span>
                <h5 class="font-weight-bold mx-1">${item.make}</h5>
                <h5 class="mx-1">${item.model}</h5>
            </div>
            <!--end single item-->`
        });
        info.innerHTML = data;
    });
    // change img
    info.addEventListener('click', (event) => {
        if (event.target.parentElement.classList.contains('featured-icon')) {
            const img = event.target.parentElement.dataset.img;
            document.querySelector('.featured-photo').src = img;
        }
    });

})(CreateCars);

const DisplayCars = ((CreateCars) => {
    // all cars
    const cars = CreateCars.cars;
    // car container
    const inventory = document.querySelector('.inventory-container');
    // content loaded
    document.addEventListener('DOMContentLoaded', () => {
        inventory.innerHTML = '';
        let output = '';
        cars.forEach((car) => {
            output += `<!--single car-->
            <div class="col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${car.country}">
                <div class="card car-card">
                    <img src="${car.img}" class="card-img-top car-img" alt="">
                    <!--card body-->
                    <div class="car-info d-flex justify-content-between">
                        <div class="car-text text-uppercase">
                            <h6 class="font-weight-bold">${car.make}</h6>
                            <h6>${car.model}</h6>
                        </div>
                        <h5 class="car-value align-self-center py-2 px-3">$
                            <span class="car-price">${car.price}</span>
                        </h5>
                    </div>
                    <!--end card body-->
                    <!--card footer-->
                    <div class="card-footer text-capitalize d-flex justify-content-between">
                        <p><span><i class="fas fa-car pr-1"></i></span>${car.type}</p>
                        <p><span><i class="fas fa-cogs pr-1"></i></span>${car.trans}</p>
                        <p><span><i class="fas fa-gas-pump  pr-1"></i></span>${car.gas}</p>
                    </div>
                    <!--end card footer-->
                </div>
            </div>
            <!--end single car-->`
        });
        inventory.innerHTML = output;
    });



})(CreateCars);

// filter cars
const FilterCars = (() => {
    const filter = document.querySelectorAll('.filter-btn');
    filter.forEach((btn) => {
        btn.addEventListener('click', (event) => {
            const value = event.target.dataset.filter;
            const singleCar = document.querySelectorAll('.single-car');
            singleCar.forEach((car) => {
                if (value === 'all') {
                    car.style.display = 'block';
                } else {
                    (!car.classList.contains(value)) ? car.style.display = 'none': car.style.display = 'block';
                }
            });

        });
    });
})();