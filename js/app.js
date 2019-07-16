'use strict';

var hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
var totalCookiesPerHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

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

//constructor to add the customers per hour to the store
Store.prototype.calCustomersPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
        this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
    }
}

//constructor to add the cookies per hour to the store
Store.prototype.calCookiesPerHour = function() {
    for (var i = 0; i < hours.length; i++) {
        var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.aveCookiePerSale); //need to round up cookies
        this.cookiesPerHour.push(hourlyCookies);
        this.dailyCookieTotal += hourlyCookies;
    }
}

//constructor to run the two methods and append informtion to location
Store.prototype.render= function() {
    this.calCustomersPerHour();
    this.calCookiesPerHour();
    var tbody = document.getElementsByTagName('tbody')[0];
    var tr= document.createElement('tr');
    tbody.appendChild (tr);
    var td= document.createElement('td');
    td.innerHTML = this.name; //prints the name of the store
    tr.appendChild (td);
    for (var i = 0; i < hours.length; i++) {
        var tdEl= document.createElement('td');
        tdEl.textContent = this.cookiesPerHour[i];
        totalCookiesPerHour[i] += this.cookiesPerHour[i];
        tr.appendChild(tdEl);
    }
    var tdEl= document.createElement('td');
        tdEl.textContent = this.dailyCookieTotal;
        tr.appendChild(tdEl);
}

//creating stores with min, max and aveCookiePerSale
var pike = new Store ('Pike',23, 65, 6.3);
var seaTac = new Store ('SeaTac',3, 24, 1.2);
var seattle = new Store ('Seattle', 11, 38, 3.7);
var capitol = new Store ('Capitol Hill', 20, 38, 2.3);
var alki = new Store ('Alki', 2, 16, 4.6);

var allStores = [pike, seaTac, seattle, capitol, alki];

function setUpTable(){
    var thead = document.getElementsByTagName('thead')[0];
    var tr= document.createElement('tr');
    thead.appendChild (tr);
    var th= document.createElement('th');
    th.innerHTML = '&nbsp;'; //creates a non breaking space (empty box)
    tr.appendChild (th);
    for (var i = 0; i < hours.length; i++) {
        var thEl= document.createElement('th');
        thEl.textContent = hours[i];
        tr.appendChild(thEl);
    }
    var thEl= document.createElement('th');
        thEl.textContent = 'Daily Location Total';
        tr.appendChild(thEl);
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
