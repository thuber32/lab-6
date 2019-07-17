'use strict';
//Data -----------------------------------------------------------------------------------------------------------------------------------------
var hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
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
    tablebody.appendChild (storeRow);    //  is this where I should create new fuction (requirements are to separate function so each does one thing)
    var storeName= document.createElement('td');
    hourlyCookieSold.innerHTML = this.name; //prints the name of the store
    storeRow.appendChild (storeName);
    for (var i = 0; i < hours.length; i++) {
        var hourlyCookieSold= document.createElement('td');
        tdEl.textContent = this.cookiesPerHour[i];
        totalCookiesPerHour[i] += this.cookiesPerHour[i];
        storeRow.appendChild(hourlyCookieSold);
    }
    var storeTotalCookies= document.createElement('td');
        storeTotalCookies.textContent = this.dailyCookieTotal;
        storeRow.appendChild(storeTotalCookies);
}
//Executable ----------------------------------------------------------------------------------------------------------------------------------

//Grabs information from the form and stores in new variables
function getData(event){
    event.preventDefault();
    var newStoreName = event.target.name.value;
    var newStoreMinCustomer = parseFloat(event.target.name.value);
    var newStoreMaxCustomer = parseFloat(event.target.name.value);
    var newStoreAveCookies = parseFloat(event.target.name.value);
    var newStore = [];
    return 
}
//clear all and append
var clearAll = "";
clearAll.

// var newStoreMin = getElementById('minCustomer');
// var newStoreMax = getElementById('maxCustomer');
// var newAveCookies = getElementById('aveCookiePerHour');
var form = document.querySelector('form');

form.addEventListener('submit', getData);

//creating instance with min, max and aveCookiePerSale....should have 5
var pike = new Store ('Pike',23, 65, 6.3);
var seaTac = new Store ('SeaTac',3, 24, 1.2);
var seattle = new Store ('Seattle', 11, 38, 3.7);
var capitol = new Store ('Capitol Hill', 20, 38, 2.3);
var alki = new Store ('Alki', 2, 16, 4.6);

//call information from form into instance

var allStores = [pike, seaTac, seattle, capitol, alki];

function setUpTable(){
    var thead = document.getElementsByTagName('thead')[0];
    var timeRow= document.createElement('tr');
    thead.appendChild (timeRow);
    var blankCell= document.createElement('th');
    blankCell.innerHTML = '&nbsp;'; //creates a non breaking space (empty box)
    timeRow.appendChild (blankCell);
    for (var i = 0; i < hours.length; i++) {
        var time= document.createElement('th');
        time.textContent = hours[i];
        timeRow.appendChild(time);
    }
    var dailyLocationTotal= document.createElement('th');
        dailyLocationTotal.textContent = 'Daily Location Total';
        timeRow.appendChild(dailyLocationTotal);
}

function finishTable(){
    var tfoot = document.getElementsByTagName('tfoot')[0];
    var tr= document.createElement('tr');
    tfoot.appendChild (tr);
    var th= document.createElement('th');
    th.textContent = 'Total'; 
    tr.appendChild (th);
    var sum = 0;
    for (var i = 0; i < hours.length; i++) {
        var tdEl= document.createElement('td');
        tdEl.textContent = totalCookiesPerHour[i];
        sum += totalCookiesPerHour[i];
        tr.appendChild(tdEl);
    }
    var tdEl= document.createElement('td');
    tdEl.textContent = sum; 
    tr.appendChild (tdEl);
}

(function renderAllStores() {
    setUpTable();
    for (var i = 0; i < allStores.length; i++) {
        allStores[i].render();
    }
    finishTable();
})();
