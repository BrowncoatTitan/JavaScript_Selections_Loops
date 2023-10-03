console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let x =1; x<=100; x++){
if (x %2 == 1) {
    console.log(x);
}
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for (let x =1; x<=100; x++){
if (x % 3 == 0 && x % 5 == 0){
    console.log("FIZZBUZZ")
}
else if (x % 3 == 0){
    console.log("FIZZ")
}
else if (x % 5 == 0){
    console.log("BUZZ")
}
}
//EX 3
let x =1
while(x <= 100){
    if (x %2 == 1) {
        console.log(x);
        x += 2;
    }  
}
x = 1
do{
    if (x % 2 == 1) {
        console.log(x);
        x += 2;
    }
} while (x <= 100)
x=1
while(x <= 100){
    if (x % 3 == 0 && x % 5 == 0){
        console.log("FIZZBUZZ")
    }
    else if (x % 3 == 0){
        console.log("FIZZ")
    }
    else if (x % 5 == 0){
        console.log("BUZZ")
    }
    x++;
}
x = 1
do{
    if (x % 3 == 0 && x % 5 == 0){
        console.log("FIZZBUZZ")
    }
    else if (x % 3 == 0){
        console.log("FIZZ")
    }
    else if (x % 5 == 0){
        console.log("BUZZ")
    }
    x++;
} while(x <= 100)
//ex 4 
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
for (x = 1; x <= n; x++){
    if (x != n)
    console.log("Found value!")
    else{
    console.log("Did not find value.")
}
}