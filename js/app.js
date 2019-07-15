'use strict';
/*

1st and Pike

6am: 16 cookies
7am: 20 cookies
8am: 35 cookies
9am: 48 cookies
10am: 56 cookies
11am: 77 cookies
12pm: 93 cookies
1pm: 144 cookies
2pm: 119 cookies
3pm: 84 cookies
4pm: 61 cookies
5pm: 23 cookies
6pm: 42 cookies
7pm: 57 cookies
8pm: 29 cookies
Total: 657 cookies
*/


var hours = ['6AM','7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'];
var pike = {
   minCustomer: 23,
   maxCustomer: 65,
   aveCookiePerSale: 6.3,
   customersPerHour: [],
   cookiesPerHour: [],
   totalCookies: 0,
   calCustomersPerHour: function(){
    for (var i = 0; i < hours.length; i++){ 
       this.customersPerHour.push (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
   }
},
   calCookiesPerHour: function(){
       for (var i = 0; i < hours.length; i++){
       var numPerHour = (Math.round(this.customersPerHour[i] * this.aveCookiePerSale * 100) / 100);
       this.cookiesPerHour.push (numPerHour);
       this.totalCookies;
       }  
   } 
}
pike.calCustomersPerHour();
pike.calCookiesPerHour();
console.log(pike.customersPerHour.toString());
console.log(pike.cookiesPerHour.toString());

var seaTacAirport = {
    minCustomer: 3,
    maxCustomer: 24,
    aveCookiePerSale: 1.2,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    calCustomersPerHour: function(){
     for (var i = 0; i < hours.length; i++){ 
        this.customersPerHour.push (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
    }
 },
    calCookiesPerHour: function(){
        for (var i = 0; i < hours.length; i++){
        var numPerHour = (Math.round(this.customersPerHour[i] * this.aveCookiePerSale * 100) / 100);
        this.cookiesPerHour.push (numPerHour);
        this.totalCookies;
        }  
    } 
 }
 seaTacAirport.calCustomersPerHour();
 seaTacAirport.calCookiesPerHour();
 console.log(seaTacAirport.customersPerHour.toString());
 console.log(seaTacAirport.cookiesPerHour.toString());

var seattleCenter = {
    minCustomer: 11,
    maxCustomer: 38,
    aveCookiePerSale: 3.7,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    calCustomersPerHour: function(){
     for (var i = 0; i < hours.length; i++){ 
        this.customersPerHour.push (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
    }
 },
    calCookiesPerHour: function(){
        for (var i = 0; i < hours.length; i++){
        var numPerHour = (Math.round(this.customersPerHour[i] * this.aveCookiePerSale * 100) / 100);
        this.cookiesPerHour.push (numPerHour);
        this.totalCookies;
        }  
    } 
 }
 seattleCenter.calCustomersPerHour();
 seattleCenter.calCookiesPerHour();
 console.log(seattleCenter.customersPerHour.toString());
 console.log(seattleCenter.cookiesPerHour.toString());

var capitolHill = {
    minCustomer: 20,
    maxCustomer: 38,
    aveCookiePerSale: 2.3,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    calCustomersPerHour: function(){
     for (var i = 0; i < hours.length; i++){ 
        this.customersPerHour.push (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
    }
 },
    calCookiesPerHour: function(){
        for (var i = 0; i < hours.length; i++){
        var numPerHour = (Math.round(this.customersPerHour[i] * this.aveCookiePerSale * 100) / 100);
        this.cookiesPerHour.push (numPerHour);
        this.totalCookies;
        }  
    } 
 }
 capitolHill.calCustomersPerHour();
 capitolHill.calCookiesPerHour();
 console.log(capitolHill.customersPerHour.toString());
 console.log(captiolHill.cookiesPerHour.toString());

var alki = {
    minCustomer: 2,
    maxCustomer: 16,
    aveCookiePerSale: 4.6,
    customersPerHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    calCustomersPerHour: function(){
     for (var i = 0; i < hours.length; i++){ 
        this.customersPerHour.push (Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer);
    }
 },
    calCookiesPerHour: function(){
        for (var i = 0; i < hours.length; i++){
        var numPerHour = (Math.round(this.customersPerHour[i] * this.aveCookiePerSale * 100) / 100);
        this.cookiesPerHour.push (numPerHour);
        this.totalCookies;
        }  
    } 
 }
 alki.calCustomersPerHour();
 alki.calCookiesPerHour();
 console.log(alki.customersPerHour.toString());
 console.log(alki.cookiesPerHour.toString());

var msg = ''