/**
 * POST the order on /pizza
 * @param order
 */
/**
 * Get the form and submit it with fetch API
 */
/**
 * Gets the order data with JQuery
 */
// Gather information in a dynamic way

function fetchIngredientsByRequest() {
    fetch('http://127.0.0.1:5000/report/ingredients-by-request')
        .then(response => response.json())
        .then(ingredients => {
            let rows = ingredients.map(element => createIngredientRequestTemplate(element));
            let table = $("#ingredients-request tbody");
            table.append(rows);
        });
}

function fetchRevenueMonth() {
    fetch('http://127.0.0.1:5000/report/months-by-revenue')
        .then(response => response.json())
        .then(beverages => {
            let rows = beverages.map(element => createRevenueMonthTemplate(element));
            let table = $("#revenue-month tbody");
            table.append(rows);
        });
}

function fetchClientExpense() {
    fetch('http://127.0.0.1:5000/report/clients-by-expenses')
        .then(response => response.json())
        .then(sizes => {
            let rows = sizes.map(element => createClientExpenseTemplate(element));
            let table = $("#clients-expenses tbody");
            table.append(rows);
        });
}

function createRevenueMonthTemplate(ingredient) {
    let template = $("#revenue-month-template")[0].innerHTML;
    return Mustache.render(template, ingredient);
}

function createIngredientRequestTemplate(beverage) {
    let template = $("#ingredients-request-template")[0].innerHTML;
    return Mustache.render(template, beverage);
}

function createClientExpenseTemplate(size) {
    let template = $("#clients-expenses-template")[0].innerHTML;
    return Mustache.render(template, size);
}

function loadInformation() {
    fetchIngredientsByRequest();
    fetchRevenueMonth();
    fetchClientExpense();
}


window.onload = loadInformation;
