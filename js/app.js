'use strict';
//Data -----------------------------------------------------------------------------------------------------------------------------------------
var hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'];
var totalCookiesPerHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


//Functionality ----------------------------------------------------------------------------------------------------------------------------------
//constructor for creating 5 stores
function Store(name, minCustomer, maxCustomer, aveCookiePerSale) {
    this.name = name;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.aveCookiePerSale = aveCookiePerSale;
    this.customersPerHour = [];
    this.cookiesPerHour = [];
    this.dailyCookieTotal = 0;
}

//add the customers per hour to the store
Store.prototype.calCustomersPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
        this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
    }
}

//add the cookies per hour to the store
Store.prototype.calCookiesPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
        var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.aveCookiePerSale); //need to round up cookies
        this.cookiesPerHour.push(hourlyCookies);
        this.dailyCookieTotal += hourlyCookies;
    }
}

//add to run the two methods and append informtion to location on the table
Store.prototype.render= function() {
    this.calCustomersPerHour();
    this.calCookiesPerHour();
    var tableBody = document.getElementsByTagName('tbody')[0];
    var storeRow= document.createElement('tr');
    tableBody.appendChild (storeRow);    //  is this where I should create new fuction (requirements are to separate function so each does one thing)
    var storeName= document.createElement('td');
    storeName.innerText = this.name; //prints the name of the store
    storeRow.appendChild (storeName);
    for (var i = 0; i < hours.length; i++) {
        var hourlyCookieSold= document.createElement('td');
        hourlyCookieSold.textContent = this.cookiesPerHour[i];
        totalCookiesPerHour[i] += this.cookiesPerHour[i];
        storeRow.appendChild(hourlyCookieSold);
    }
    var storeTotalCookies= document.createElement('td');
        storeTotalCookies.textContent = this.dailyCookieTotal;
        storeRow.appendChild(storeTotalCookies);
}
//Executable ----------------------------------------------------------------------------------------------------------------------------------

//Grabs information from the form and stores in new variables, creates new stor and puts it onto the table
function getData(event){
    event.preventDefault();
    var newStoreName = event.target.name.value;
    var newStoreMinCustomer = parseFloat(event.target.minCustomer.value);
    var newStoreMaxCustomer = parseFloat(event.target.maxCustomer.value);
    var newStoreAveCookies = parseFloat(event.target.aveCookiePerSale.value);
    var newStore = new Store(newStoreName, newStoreMinCustomer, newStoreMaxCustomer, newStoreAveCookies);
    //add new store to list of all stores
    allStores.push(newStore);
    newStore.render();
    finishTable();
}

//collect information from form
var form = document.querySelector('form');
form.addEventListener('submit', getData);

//creating instance with min, max and aveCookiePerSale
var pike = new Store ('Pike',23, 65, 6.3);
var seaTac = new Store ('SeaTac',3, 24, 1.2);
var seattle = new Store ('Seattle', 11, 38, 3.7);
var capitol = new Store ('Capitol Hill', 20, 38, 2.3);
var alki = new Store ('Alki', 2, 16, 4.6);

//creating the header of the table
function setUpTable(){
    var thead = document.getElementsByTagName('thead')[0];
    var timeRow= document.createElement('tr');
    thead.appendChild (timeRow);
    var blankCell= document.createElement('th');
    blankCell.innerText = ''; //creates a non breaking space (empty box)
    timeRow.appendChild (blankCell);
    for (var i = 0; i < hours.length; i++) {
        var time= document.createElement('th');
        time.textContent = hours[i];
        timeRow.appendChild(time);
    }
    var dailyTotal= document.createElement('th');
        dailyTotal.textContent = 'Daily Total';
        timeRow.appendChild(dailyTotal);
}

//creating the footer of the table
function finishTable(){
    var tfoot = document.getElementsByTagName('tfoot')[0];
    tfoot.innerText = '';
    var totalHourlyRow= document.createElement('tr');
    tfoot.appendChild (totalHourlyRow);
    var total= document.createElement('th');
    total.textContent = 'Total'; 
    totalHourlyRow.appendChild (total);
    var sum = 0;
    for (var i = 0; i < hours.length; i++) {
        var sumPerHour= document.createElement('td');
        sumPerHour.textContent = totalCookiesPerHour[i];
        sum += totalCookiesPerHour[i];
        totalHourlyRow.appendChild(sumPerHour);
    }
    var finalSum= document.createElement('td');
    finalSum.textContent = sum; 
    totalHourlyRow.appendChild (finalSum);
}
// creating an array for all stores
var allStores = [pike, seaTac, seattle, capitol, alki];

//rendering all the stores info onto the table 
(function renderAllStores() {
    setUpTable();
    for (var i = 0; i < allStores.length; i++) {
        allStores[i].render();
    }
    finishTable();
})();
