'use strict';

var hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

//var customersPerHour = [];
//var cookiesPerHour = [];
//var dailyLocationTotal = 0;
var totalCookiesPerHour = 0;
var allStores = [pike, seaTac, seattle, capitol, alki];

//constructor for creating 5 stores
function Store(minCustomer, maxCustomer, aveCookiePerSale) {
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.aveCookiePerSale = aveCookiePerSale;
}
//creating stores with min, max and aveCookiePerSale
var pike = new Store (23, 65, 6.3);
var seaTac = new Store (3, 24, 1.2);
var seattle = new Store (11, 38, 3.7);
var capitol = new Store (20, 38, 2.3);
var alki = new Store (2, 16, 4.6);

//constructor to add the customers per hour to the store
Store.prototype.customersPerHour() {
    var customersPerHour = [];
    for (var i = 0; i < hours.length; i++) {
        this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
    }
}

//constructor to add the cookies per hour to the store
Store.prototype.calCookiesPerHour() {
    var cookiesPerHour = [];
    var dailyLocationTotal= 0;
    for (var i = 0; i < hours.length; i++) {
        var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.aveCookiePerSale); //need to round up cookies
        this.cookiesPerHour.push(hourlyCookies);
        this.dailyLocationTotal += hourlyCookies;
    }
}

//constructor to run the two methods and append informtion to location
Store.prototype.render() {
    this.calCustomersPerHour();
    this.calCookiesPerHour();
    var tdEl = document.getElementById('');
    for (var i = 0; i < hours.length; i++) {
        var tdElNew = document.createElement('td');
        tdElNew.textContent = this.cookiesPerHour[i] + ' cookies';
        tdEl.appendChild(tdElNew);
    }
}

//function for placing time into the header of the table
var header = function () {
    var theadEl = document.getElementsById('time');
    for (var i = 0; i < hours.length; i++){
        var thEl = document.createElement ('th');
        thEl.textContent = hours[i];
    }
}

//fuction for placing the total number of cookies solde each hour AND total number of cookies sold overall
var footer = function(){
    var tfooterEl= document.getElementById('totals');
    this.Store.cookiesPerHour[j],
    for(var j = 0; i < allStores.length; j++){
       totalCookiesPerHour += 
    }
}

(function renderAllStores() {
    for (var i = 0; i < allStores.length; i++) {
        allStores[i].render();
    }
})();


/*
var pike ={
    minCustomer: 23,
    maxCustomer: 65,
    aveCookiePerSale: 6.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookiesPerDay: 0,
    calCustomersPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer); //need to round down customers
        }
    },
    calCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.aveCookiePerSale); //need to round up cookies
            this.cookiesPerHour.push(hourlyCookies);
            this.totalCookiesPerDay += hourlyCookies;
        }
    },
    render() {
        this.calCustomersPerHour();
        this.calCookiesPerHour();
        var ulEl = document.getElementById('pike');
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
            ulEl.appendChild(liEl);
        }
    }
};


var seaTac = {
    minCustomer: 3,
    maxCustomer: 24,
    aveCookiePerSale: 1.2,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookiesPerDay: 0,
    calCustomersPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
        }
    },
    calCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.aveCookiePerSale); //need to round up cookies
            this.cookiesPerHour.push(hourlyCookies);
            this.totalCookiesPerDay += hourlyCookies;
        }
    },
    render() {
        this.calCustomersPerHour();
        this.calCookiesPerHour();
        var ulEl = document.getElementById('seaTac');
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
            ulEl.appendChild(liEl);
        }
    }
};

var seattle = {
    minCustomer: 11,
    maxCustomer: 38,
    aveCookiePerSale: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookiesPerDay: 0,
    calCustomersPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
        }
    },
    calCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.aveCookiePerSale); //need to round up cookies
            this.cookiesPerHour.push(hourlyCookies);
            this.totalCookiesPerDay += hourlyCookies;
        }
    },
    render() {
        this.calCustomersPerHour();
        this.calCookiesPerHour();
        var ulEl = document.getElementById('seattle');
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
            ulEl.appendChild(liEl);
        }
    }
};

var capitol = {
    minCustomer: 20,
    maxCustomer: 38,
    aveCookiePerSale: 2.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookiesPerDay: 0,
    calCustomersPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
        }
    },
    calCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.aveCookiePerSale); //need to round up cookies
            this.cookiesPerHour.push(hourlyCookies);
            this.totalCookiesPerDay += hourlyCookies;
        }
    },
    render() {
        this.calCustomersPerHour();
        this.calCookiesPerHour();
        var ulEl = document.getElementById('capitol');
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
            ulEl.appendChild(liEl);
        }
    }
};

var alki = {
    minCustomer: 2,
    maxCustomer: 16,
    aveCookiePerSale: 4.6,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookiesPerDay: 0,
    calCustomersPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
        }
    },
    calCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.aveCookiePerSale); //need to round up cookies
            this.cookiesPerHour.push(hourlyCookies);
            this.totalCookiesPerDay += hourlyCookies;
        }
    },
    render() {
        this.calCustomersPerHour();
        this.calCookiesPerHour();
        var ulEl = document.getElementById('alki');
        for (var i = 0; i < hours.length; i++) {
            var liEl = document.createElement('li');
            liEl.textContent = hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies';
            ulEl.appendChild(liEl);
        }
    }
};


var allStores = [pike, seaTac, seattle, capitol, alki];

(function renderAllStores() {
    for (var i = 0; i < allStores.length; i++) {
        allStores[i].render();
    }
})();*/
