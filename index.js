const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

function welcomeMessage() {
  return `Welcome to our services`;
}

app.get('/welcome', (req, res) => {
  res.send(welcomeMessage());
});

function greetUser(username) {
  return 'Hello,  ' + username + ' !';
}

app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(greetUser(username));
});

function checkPassword(password) {
  if (password.length > 15) {
    return 'Password is Strong';
  } else {
    return 'Password is Weak';
  }
}

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(checkPassword(password));
});

function calculateSum(num1, num2) {
  return (num1 + num2).toString();
}

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send('Total Sum is ' + calculateSum(num1, num2));
});

function checkSubscriptionStatus(username, subscribed) {
  if (subscribed === 'true') {
    return username + ' is subscribed';
  } else {
    return username + ' is not subscribed';
  }
}

app.get('/subscription-status', (req, res) => {
  let username = req.query.username;
  let subscribed = req.query.subscribed;
  res.send(checkSubscriptionStatus(username, subscribed));
});

function discountedPrice(price, discount) {
  return (price - (discount / 100) * price).toString();
}

app.get('/discounted-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send('Price after discount is : ' + discountedPrice(price, discount));
});

function personalisedGreeting(name, age, gender) {
  return 'Hello, ' + name + '! you are a ' + age + ' year old ' + gender + '.';
}

app.get('/personalised-greeting', (req, res) => {
  let name = req.query.name;
  let age = req.query.age;
  let gender = req.query.gender;
  res.send(personalisedGreeting(name, age, gender));
});

function calculateFinalPrice(price, discount, tax) {
  let discountedPrice = price - price * (discount / 100);
  let finalPrice = discountedPrice + discountedPrice * (tax / 100);
  return finalPrice.toString();
}

app.get('/final-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);

  res.send(calculateFinalPrice(price, discount, tax));
});

function calculateTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}

app.get("/total-exercise-time", (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);

  res.send(calculateTotalExerciseTime(running, cycling, swimming).toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
