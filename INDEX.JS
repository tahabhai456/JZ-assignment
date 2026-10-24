//Q1 
//Q2 

//alert("Error!Please enter a valid password.")
//Q3 

//alert("Welcome To Js Land... \n Happy Coding!")
//Q4 

//alert("Welcome to Js land...")

//alert("Happy coding! \n Pervent this Page From creating additional dailogs.")
//Q5

//console.log(alert("Hello... i can run Js thoungh my web brower's console"));

//first chapter complete 

// 2nd chapter  

//Q1 

//var username;

//Q2 

//var myName = "MUHAMMAD TAHA";
//Q3
//Q4

//alert("MUHAMMAD TAHA");

//var myAge = "19 years old";
//alert(myAge);

//var mobile = "Certified Mobile Application Development";
//alert(mobile);

//Q5

//var message = "PIZZA \n PIZZ \n PIZ \n PI \n P";
//alert(message);
//Q6

//var email = "My email address is@example.com";
//alert(email);
//Q7

//var book = "I am trying to learn from the Book A smarter way to learn JavaScript";
//alert(book);
//alert("Yah! I can write HTML content through JavaScript");
//Q8


//var design = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
//alert(design);

// 3rd chapter
//Q1

//var age = "I am 19 years old";
//alert(age);
//Q2

//var visit = "You have visited this site 14 times";
//alert(visit);
//Q3

//var birthYear = "My birth year is 2007 \n Data type of my declared variable is number";
//alert(birthYear);
//Q4

//var visitorName = "John Doe";
//alert(visitorName);

//var productTitle = "T-shirt(s)";
//alert(productTitle);

//var quantity = "5";
//alert(quantity);

//var message = "visitorName" + " ordered " + "quantity" + " " + "productTitle" + " on XYZ Clothing store";
//alert(message);

//4th chapter
//Q1

//var name = "taha", age = "19", course = "Certified Mobile Application Development";
//alert(name);
//alert(age);
//alert(course)
//Q2

// Legal variable names

//var myName = "TAHA";
//var my_age = "19";
//var _myName = "MUHAMMAD";
//var myName1 = "GHULLOM";
//var myName_ = "TAHA";
// Illegal variable names (not working so the code can run)

//var 1myName = "TAHA";
//var my-Name = "MUHAMMAD";
//var my Name = "GHULLOM";
//var my@Name = "TAHA";
//var my#Name = "TAHA";
//Q3

//document.write("<h1>Rules for naming JS variables</h1>");
//document.write("Variable names can only contain letters, numbers, $ and _. For example: $my_1stVariable <br>");
//document.write("Variables must begin with a letter, $ or _. For example: $name, _name or name <br>");
//document.write("Variable names are case sensitive <br>");
//document.write("Variable names should not be JS keywords");

//5th chapter
//Q1

//var num1 = 3;
//var num2 = 5;
//var sum = num1 + num2;
//document.write("Sum of " + num1 + " and " + num2 + " is " + sum);
//Q2

//var num1 = 3;
//var num2 = 5;
//var sub = num1 - num2;
//document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub);

//var num1 = 3;
//var num2 = 5;
//var mul = num1 * num2;
//document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul);

//var num1 = 3;
//var num2 = 5;
//var div = num1 / num2;
//document.write("Division of " + num1 + " and " + num2 + " is " + div);

//var num1 = 3;
//var num2 = 5;
//var mod = num1 % num2;
//document.write("Modulus of " + num1 + " and " + num2 + " is " + mod);
//Q3

//var num;
//document.write("Value after variable declaration is: " + num + "<br>");

//num = 5;
//document.write("Initial value: " + num + "<br>");

//num++;
//document.write("Value after increment is: " + num + "<br>");

//num = num + 7;
//document.write("Value after addition is: " + num + "<br>");

//num--;
//document.write("Value after decrement is: " + num + "<br>");

//var remainder = num % 3;
//document.write("The remainder is: " + remainder + "<br>");
//Q4

//var ticketPrice = 600;
//var totalCost = ticketPrice * 5;
//document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "PKR");
//Q5

//var num = 4;
//for (var i = 1; i <= 10; i++) {
//    var result = num * i;
//    document.write(num + " x " + i + " = " + result + "<br>");
//}
//Q6

//var celsius = 25;
//var fahrenheit = (celsius * 9 / 5) + 32;
//document.write(celsius + "°C is " + fahrenheit + "°F <br>");

//var fahrenheit = 70;
//var celsius = (fahrenheit - 32) * 5 / 9;
//document.write(fahrenheit + "°F is " + celsius + "°C");
//Q7

//var item1Price = 650;
//var item2Price = 100;
//var item1Quantity = 3;

//var item2Quantity = 7;

//var shippingCharges = 100;

//var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

//document.write("<h1>Shopping Cart</h1>");

//document.write("Price of item 1 is " + item1Price + "<br>");

//document.write("Quantity of item 1 is " + item1Quantity + "<br>");

//document.write("Price of item 2 is " + item2Price + "<br>");

//document.write("Quantity of item 2 is " + item2Quantity + "<br>");

//document.write("Shipping Charges " + shippingCharges + "<br><br>");

//document.write("Total cost of your order is " + totalCost);
//Q8

//var totalMarks = 980;
//var marksObtained = 804;
//var percentage = (marksObtained / totalMarks) * 100;
//document.write("<h1>Marks Sheet</h1>");

//document.write("Total marks: " + totalMarks + "<br>");
//document.write("Marks obtained: " + marksObtained + "<br>");
//document.write("Percentage: " + percentage + "%");
//Q9

//var usDollar = 10;
//var saudiRiyal = 25;
//var totalInPKR = (usDollar * 104.80) + (saudiRiyal * 28);
//document.write("<h1>Currency in PKR</h1>");
//document.write("Total currency in PKR: " + totalInPKR);
//Q10

//var num = 5;
//var result = ((num + 5) * 10) / 2;
//document.write("Result: " + result);
//Q11

//var currentYear = 2023;
//var birthYear = 2007;
//var age = currentYear - birthYear;
//document.write("<h1>Age Calculator</h1>");
//document.write("Current Year: " + currentYear + "<br>");
//document.write("Birth Year: " + birthYear + "<br>");
//document.write("Your Age: " + age);
//Q12

//var radius = 20;
//var circumference = 2 * Math.PI * radius;
//var area = Math.PI * radius * radius;
//document.write("<h1>The Geometrizer</h1>");
//document.write("Radius of a circle: " + radius + "<br>");
//document.write("The circumference is: " + circumference + "<br>");
//document.write("The area is: " + area);
//Q13

//var snack = "Chocolate Chip";
//var currentAge = 19;
//var maxAge = 65;
//var amountPerDay = 3;

//var totalSnacks = (maxAge - currentAge) * amountPerDay;
//document.write("<h1>The Lifetime Supply Calculator</h1>");
//document.write("Favourite Snack: " + snack + "<br>");
//document.write("Current Age: " + currentAge + "<br>");

//document.write("Estimated Maximum Age: " + maxAge + "<br>");
//document.write("Amount of snacks per day: " + amountPerDay + "<br>");
//document.write("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge);
