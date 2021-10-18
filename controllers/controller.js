var car;
var cars;
var wheels;
function cambiaPantalla() {
    var plateForm = document.getElementById("plate");
    var brandForm = document.getElementById("brand");
    var colorForm = document.getElementById("color");
    var acumErrors = 0;
    var formUno = document.getElementById('formUno');
    var formDos = document.getElementById('formDos');
    formUno.classList.remove('is-invalid');
    if (plateForm.value == "") {
        plateForm.classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "Este campo es obligatorio";
        acumErrors++;
    }
    else if (!valida_plate(plateForm.value)) {
        plateForm.classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "La placa debe contener 4 números y 3 letras mayúsculas";
        acumErrors++;
    }
    if (brandForm.value == "") {
        brandForm.classList.add("is-invalid");
        document.getElementById("errorBrand").textContent = "Este campo es obligatorio";
        acumErrors++;
    }
    if (colorForm.value == "") {
        colorForm.classList.add("is-invalid");
        document.getElementById("errorColor").textContent = "Este campo es obligatorio";
        acumErrors++;
    }
    if (acumErrors > 0) {
        return false;
    }
    else {
        formUno.classList.add("d-none");
        formDos.classList.remove("d-none");
        formDos.classList.add("d-flex");
        return true;
    }
}
function crearRuedas(plate, brand, color, brand1, diameter1, brand2, diameter2, brand3, diameter3, brand4, diameter4) {
    var car = new Car(plate.value, brand.value, color.value);
    var cars;
    var brand1Form = document.getElementById("brand1");
    var brand2Form = document.getElementById("brand2");
    var brand3Form = document.getElementById("brand3");
    var brand4Form = document.getElementById("brand4");
    var diameter1Form = document.getElementById("diameter1");
    var diameter2Form = document.getElementById("diameter2");
    var diameter3Form = document.getElementById("diameter3");
    var diameter4Form = document.getElementById("diameter4");
    var wheel1 = new Wheel(Number(diameter1.value), brand1.value);
    var wheel2 = new Wheel(Number(diameter2.value), brand2.value);
    var wheel3 = new Wheel(Number(diameter3.value), brand3.value);
    var wheel4 = new Wheel(Number(diameter4.value), brand4.value);
    var acumErrors = 0;
    if (brand1.value == "") {
        brand1Form.classList.add("is-invalid");
        document.getElementById("errorBrand1").textContent = "Este campo es obligatorio";
        acumErrors++;
    }
    if (brand2.value == "") {
        brand2Form.classList.add("is-invalid");
        document.getElementById("errorBrand2").textContent = "Este campo es obligatorio";
        acumErrors++;
    }
    if (brand3.value == "") {
        brand3Form.classList.add("is-invalid");
        document.getElementById("errorBrand3").textContent = "Este campo es obligatorio";
        acumErrors++;
    }
    if (brand4.value == "") {
        brand4Form.classList.add("is-invalid");
        document.getElementById("errorBrand4").textContent = "Este campo es obligatorio";
        acumErrors++;
    }
    if (diameter1.value.length == 0) {
        diameter1Form.classList.add("is-invalid");
        document.getElementById("errorDiameter1").textContent = "Este campo es obligatorio";
        acumErrors++;
    }
    else if (!valida_diameter(Number(diameter1.value))) {
        diameter1Form.classList.add("is-invalid");
        document.getElementById("errorDiameter1").textContent = "El diámetro de la rueda debe estar entre 0.4 y 2";
        acumErrors++;
    }
    if (diameter2.value.length == 0) {
        diameter2Form.classList.add("is-invalid");
        document.getElementById("errorDiameter2").textContent = "Este campo es obligatorio";
        acumErrors++;
    }
    else if (!valida_diameter(Number(diameter2.value))) {
        diameter2Form.classList.add("is-invalid");
        document.getElementById("errorDiameter2").textContent = "El diámetro de la rueda debe estar entre 0.4 y 2";
        acumErrors++;
    }
    if (diameter3.value.length == 0) {
        diameter3Form.classList.add("is-invalid");
        document.getElementById("errorDiameter3").textContent = "Este campo es obligatorio";
        acumErrors++;
    }
    else if (!valida_diameter(Number(diameter3.value))) {
        diameter3Form.classList.add("is-invalid");
        document.getElementById("errorDiameter3").textContent = "El diámetro de la rueda debe estar entre 0.4 y 2";
        acumErrors++;
    }
    if (diameter4.value.length == 0) {
        diameter4Form.classList.add("is-invalid");
        document.getElementById("errorDiameter4").textContent = "Este campo es obligatorio";
        acumErrors++;
    }
    else if (!valida_diameter(Number(diameter4.value))) {
        diameter4Form.classList.add("is-invalid");
        document.getElementById("errorDiameter4").textContent = "El diámetro de la rueda debe estar entre 0.4 y 2";
        acumErrors++;
    }
    if (acumErrors > 0) {
        return false;
    }
    else {
        car.addWheel(wheel1);
        car.addWheel(wheel2);
        car.addWheel(wheel3);
        car.addWheel(wheel4);
        console.log(car);
        var divInfo = document.getElementById("divInfo");
        var divWheelInfo = document.getElementById("divWheelInfo");
        var carInfo = document.createElement("p");
        var wheelInfo = document.createElement("p");
        divInfo.appendChild(carInfo);
        divWheelInfo.appendChild(wheelInfo);
        carInfo.innerText = "CAR \nPlate: " + car.plate
            + " Color: " + car.color + " Brand: " + car.brand +
            "\nWHEELS " + "\nWheel 1: " + " Diameter: " + car.wheels[0].diameter +
            " Brand: " + car.wheels[0].brand +
            "\nWheel 2: " + " Diameter: " + car.wheels[1].diameter +
            " Brand: " + car.wheels[1].brand +
            "\nWheel 3: " + " Diameter: " + car.wheels[2].diameter +
            " Brand: " + car.wheels[2].brand +
            "\nWheel 4: " + " Diameter: " + car.wheels[3].diameter +
            " Brand: " + car.wheels[3].brand;
        cars.push(car);
        console.log(cars);
        return true;
    }
}
//valida formato matrícula
function valida_plate(plate) {
    var regexPlate = /^([0-9]{4})+([A-Z]{3})+$/;
    return regexPlate.test(plate) ? true : false;
}
//valida parámetros diámetro
function valida_diameter(diameter) {
    if (diameter <= 2 && diameter >= 0.4) {
        return true;
    }
}
