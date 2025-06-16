// Declare customerName in global scope
var customerName = 'bob';

// Uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Set bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare leastFavoriteCustomer as constant
const leastFavoriteCustomer = 'initial customer';

// Attempt to change constant (will throw an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new customer';
}

