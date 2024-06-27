// Write your solution in this file!
//declare a variable and create a function that returns that variable as an uppercase 
var customerName='bob'
function upperCaseCustomerName(){
    customerName='bob'.toUpperCase()
}

//function that declares a variable in global scope
function setBestCustomer(){
    bestCustomer='not bob'
}

//function that overwrites a previously declared variable created in a function scope
function overwriteBestCustomer(){
    bestCustomer='maybe bob'
}

//unsuccessfully trying to change a blobal variable declaredusing const
const leastFavoriteCustomer='mary'
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer='john'
}
