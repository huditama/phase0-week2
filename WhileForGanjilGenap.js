//Question 1

var number = 2;
var minus = " - ";
var linePertama = "I love coding";
var lineKedua = "I will become fullstack developer";
var condition = false;

console.log("LOOP PERTAMA")
while(number <= 20){
  console.log(number + minus + linePertama)
  number += 2
}

if(number >= 20 ){
  condition = true
}

console.log("LOOP KEDUA")
while(condition && number >= 4){
  console.log(number-2 + minus + lineKedua)
  number -= 2
}


// Question 2

var number = 1;
var minus = " - ";
var linePertama = "I love coding";
var lineKedua = "I will become fullstack developer";

console.log("LOOPING PERTAMA")
for (number = 1; number <= 20; number++) {
  console.log(number + minus + linePertama)
}

console.log("LOOPING KEDUA")
for(number = 20; number > 0; number--) {
  console.log(number + minus + lineKedua)
}


// Question 3A

for (number= 1; number <= 100; number++) {  
  if(number % 2 == 1) {
  console.log(number + " " + 'GANJIL')
  }

  else{
    console.log(number + " " + 'GENAP')
  }
}


// Question 3B

var spasi = " "
var kelipatan = "KELIPATAN"

//Counter 2

for(number = 1; number <= 100; number += 2){
  if(number % 3 == 0){
    console.log(number + spasi + kelipatan + spasi + number)
  }

  else{
    console.log('""')
  }
}

//Counter 5

for(number = 1; number <= 100; number += 5){
  if(number % 6 == 0){
    console.log(number + spasi + kelipatan + spasi + number)
  }

  else{
    console.log('""')
  }
}

//Counter 9

for(number = 1; number <= 100; number += 9){
  if(number % 10 == 0){
    console.log(number + spasi + kelipatan + spasi + number)
  }

  else{
    console.log('""')
  }
}