
let client_name = document.getElementById("client");
let delivery_address = document.getElementById("delivery");
let collection_address = document.getElementById("collection");
let load = document.getElementById("load");

// Here we start to work on number of units and trailers required.
let trailers_required = document.getElementById("trailers-required");
let units_required = document.getElementById("units-required");
let total_amount = document.getElementById("total");


function calculateUnitsAndTrailers(){
    //Calculating the number of trailers required.
    let trailer = 1/4000 * parseFloat(load.value);
    //Calculating the number of units required.
    let unit = 1/2 * trailer;
    //Calculating the total amount ordered.
    let amount = parseFloat(load.value) * 3000;

    // Editting the html on click.
    trailers_required.innerHTML = Math.ceil(trailer);
  
    units_required.innerHTML = Math.ceil(unit);

    total_amount.innerHTML = amount + "/=";
}

function showReceipt(){
    calculateUnitsAndTrailers();
    //Now here we work on the Receipt.
    let c_name = document.getElementById("name");
    let d_address = document.getElementById("d-address");
    let c_address = document.getElementById("c-address");
    let load_receipt = document.getElementById("load-receipt");
    let req_units = document.getElementById("req-units");
    let req_trailers = document.getElementById("req-trailers");
    let total_order = document.getElementById("total-amount");

    let receipt = document.getElementById("my-receipt");
    receipt.classList.remove("receipt");

    //Calculating the number of trailers required.
    let trailer = 1/4000 * parseFloat(load.value);
    //Calculating the number of units required.
    let unit = 1/2 * trailer;
    //Calculating the total amount ordered.
    let amount = parseFloat(load.value) * 3000;

    c_name.innerHTML = client_name.value;
    c_address.innerHTML = collection_address.value;
    d_address.innerHTML = delivery_address.value;
    load_receipt.innerHTML = Math.ceil(parseFloat(load.value)) + " kg";
    req_units.innerHTML = Math.ceil(unit);
    req_trailers.innerHTML = Math.ceil(trailer);
    total_order.innerHTML = amount + " /=";


    
}










