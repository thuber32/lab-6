'use strict';

var hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];
var pike = (23,65,6.3);
var seaTac = (3,24, 1.2);
var seattle = (11,38,3.7);
var capitol = (20, 38, 2.3);
var alki = (2, 16, 4.6);
var customersPerHour = [];
var cookiesPerHour = [];
var dailyLocationTotal = 0;
var totalCookiesPerHour = 0;
var location = []

function Store (location, minCustomer, maxCustomer, aveCookiePerSale) {
    this.location = location;
    this.minCustomer = minCustomer;
    this.maxCustomer = maxCustomer;
    this.aveCookiePerSale = aveCookiePerSale;
}

Store.prototype.customersPerHour() {
    for (var i = 0; i < hours.length; i++) {
        this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
}

Store.prototype.calCookiesPerHour() {
    for (var i = 0; i < hours.length; i++) {
        var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.aveCookiePerSale); //need to round up cookies
        this.cookiesPerHour.push(hourlyCookies);
        this.dailyLocationTotal += hourlyCookies;
    }
}

var headerTable = function() {
  
}

var createTable = function(){
    var sales = document.getElementsByID ('sales-results');
    var 
}

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
})();