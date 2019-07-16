'use strict';

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
var pike = {
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