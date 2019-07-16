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
        return this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
    },
    calCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.aveCookiePerSale);
            this.cookiesPerHour.push(hourlyCookies);
            this.totalCookiesPerDay += hourlyCookies;
            return [cookiesPerHour, totalCookiesPerDay];
        }
    }
}
/*pike.calCustomersPerHour();
pike.calCookiesPerHour();
console.log(pike.customersPerHour);
console.log(pike.cookiesPerHour);*/


var seaTacAirport = {
    minCustomer: 3,
    maxCustomer: 24,
    aveCookiePerSale: 1.2,
    customersPerHour: [],
    cookiesPerHour:[],
    totalCookiesPerDay: 0,
    calCustomersPerHour: function () {
        return this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
    },
    calCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.aveCookiePerSale);
            this.cookiesPerHour.push(hourlyCookies);
            this.totalCookiesPerDay += hourlyCookies;
            return [cookiesPerHour, totalCookiesPerDay];
        }
    }
}
seaTacAirport.calCustomersPerHour();
console.log(seaTacAirport.customersPerHour.toString());


var seattleCenter = {
    minCustomer: 11,
    maxCustomer: 38,
    aveCookiePerSale: 3.7,
    customersPerHour: [],
    cookiesPerHour:[],
    totalCookiesPerDay: 0,
    calCustomersPerHour: function () {
        return this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
    },
    calCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.aveCookiePerSale);
            this.cookiesPerHour.push(hourlyCookies);
            this.totalCookiesPerDay += hourlyCookies;
            return [cookiesPerHour, totalCookiesPerDay];
        }
    }
}
/*seattleCenter.calCustomersPerHour();
console.log(seattleCenter.customersPerHour.toString());*/

var capitolHill = {
    minCustomer: 20,
    maxCustomer: 38,
    aveCookiePerSale: 2.3,
    customersPerHour: [],
    cookiesPerHour:[],
    totalCookiesPerDay: 0,
    calCustomersPerHour: function () {
        return this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
    },
    calCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.aveCookiePerSale);
            this.cookiesPerHour.push(hourlyCookies);
            this.totalCookiesPerDay += hourlyCookies;
            return [cookiesPerHour, totalCookiesPerDay];
        }
    }
}
/*capitolHill.calCustomersPerHour();
console.log(capitolHill.customersPerHour.toString());*/

var alki = {
    minCustomer: 2,
    maxCustomer: 16,
    aveCookiePerSale: 4.6,
    customersPerHour: [],
    cookiesPerHour:[],
    totalCookiesPerDay: 0,
    calCustomersPerHour: function () {
        return this.customersPerHour.push(Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
    },
    calCookiesPerHour: function () {
        for (var i = 0; i < hours.length; i++) {
            var hourlyCookies = Math.ceil(this.customersPerHour[i] * this.aveCookiePerSale);
            this.cookiesPerHour.push(hourlyCookies);
            this.totalCookiesPerDay += hourlyCookies;
            return [cookiesPerHour, totalCookiesPerDay];
        }
    }
}
/*alki.calCustomersPerHour();
 console.log(alki.customersPerHour);*/


finalOutput = function () {
    this.calCookiesPerHour();
    var newliEl= document.createElement('li');
    var ulEl = document.getElementById('pike');
    
    for (var i = 0; i < hours.length; i++) {
        var liEl = document.getElementById('li');
        liEl.textContent = hours[i] + ': ' + cookiesPerHour[i]  + 'cookies';
        ulEl.appendChild(liEl);
    }
}
var allStores = ['pike', 'seaTac', 'seattle', 'capitol', 'alki'];
finalOutput(allStores){
    for (var i= 0; i < allStores.length; i++){
        allStores[i].finalOutput;
    }
};
