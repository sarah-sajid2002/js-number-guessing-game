let number = 30;

let a = prompt("enter a numer! lets see if you guess on first try");

a = Number.parseInt(a);
let s = 1;
while (a != number){
    if (a > number){
        alert("your number is greater try guessing a smaller one!")
    }
    else if (a < number){
        alert("your number is smaller try guessing a bigger one!")
    }
    a = prompt("enter no once again , hope you'll grt it right this time ")
    s = s+1;
}

alert("wow , you guessed it right on " + s +" try")


