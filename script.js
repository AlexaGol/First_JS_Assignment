
//1
//func excersize 1 - takes the value from inputs 
function equals() {
    let num1 = document.querySelector("#num1").value; 
    let num2 = document.querySelector("#num2").value; 
    //if statement compares the input numbers
    if (num1 == num2) { 
        document.querySelector("#result1").innerHTML="BOOM"
    } else { 
        document.querySelector("#result1").innerHTML="Not equals"
    }   
}
//2
//func excersize 2 - taken the inputs & summs them
function sum() {
    let num3 = Number(document.querySelector("#num3").value); 
    let num4 = Number(document.querySelector("#num4").value); 
    document.querySelector("#result2").innerHTML= num3 + num4; //inserts the sum of the input to an element in the HTML
}


//3
//func excersize 3 - takes inputs & multiplying them
function multi() {
    let num5 = Number(document.querySelector("#num5").value); 
    let num6 = Number(document.querySelector("#num6").value); 
    document.querySelector("#result3").innerHTML= num5 * num6; //inserts the multiplication of the input to an element in the HTML
}

//4
//func excersize 4 - takes inputs & compares them to a specific value & inserts an answer to an HTML element
function dayOfWeek() {
    let dayInput = Number(document.querySelector("#num7").value); 

    if (dayInput == 1) { 
        document.querySelector("#result4").innerHTML = "Have a good week"; 
    } else if (dayInput >= 2 && dayInput < 5) { 
        document.querySelector("#result4").innerHTML = "Have a great day"; 
    } else if (dayInput >= 5 && dayInput <= 7) { 
        document.querySelector("#result4").innerHTML = "Happy Weekend!"; 
    } else { //if nothing is entered or entered something wrong
        document.querySelector("#result4").innerHTML = "Please enter the day";
    }
}


//5
//func excersize 5 - takes the input, compares it to a number or numbers & inserts an answer to an HTML element
function dayOfMonth() {
    let dayInput2 = Number(document.querySelector("#num8").value); 
    if (dayInput2 == 1) { 
        document.querySelector("#result5").innerHTML = "Have a good month!"; 
    } else if (dayInput2 >= 2 && dayInput2 < 10 ) { 
        document.querySelector("#result5").innerHTML = "Time to start working"; 
    } else if (dayInput2 == 10) { 
        document.querySelector("#result5").innerHTML = "Salary is here!"; 
    } else if (dayInput2 >=11 && dayInput2 < 20) { 
        document.querySelector("#result5").innerHTML = "Be happy!";
    } else if (dayInput2 >= 20 && dayInput2 <= 30) { 
        document.querySelector("#result5").innerHTML = "The end is near";
    } else if (dayInput2 == 31) { 
        document.querySelector("#result5").innerHTML = "BOOM BOOM"; 
    } else { //if nothing is entered or entered something wrong
        document.querySelector("#result5").innerHTML = "Please enter the date"; 
    }
}


//6
//func excersize 6 - takes input, compares to a specific string & inserts the answer to an HTML element
function holiday() {
    let holidayInput = document.querySelector("#holidayIn").value;

    if (holidayInput == "purim") {
        document.querySelector("#result6").innerHTML = "Happy Purim!";
    } if (holidayInput == "pesah" || holidayInput == "passover") {
        document.querySelector("#result6").innerHTML = "It's cleaning time";
    } if (holidayInput == "shavuot") {
        document.querySelector("#result6").innerHTML = "Lets order a cheezy pizza";
    } if (holidayInput == "succot") {
        document.querySelector("#result6").innerHTML = "Lets build a Sukcha";
    }
}
//button func


//7
//func excersize 7 - 
function loginForm() {
    //get input value
    let pswrd = document.querySelector("#password").value;
    let usrName = document.querySelector("#username").value;
    
    if (pswrd === "123" && usrName === "admin") { //if password = 123 and username = admin
        alert("Successfully Connected")
    } else if (pswrd.length < 6) { //if password is less than 6 characters
        document.querySelector("#password").style.borderColor = "red"
        document.querySelector("#tryAgain").innerHTML = "Password must contain at least 6 characters";
    }
    else { //anything else
        document.querySelector("#password").style.borderColor = "red"
        document.querySelector("#username").style.borderColor = "red"
        document.querySelector("#tryAgain").innerHTML = "Please Try Again";
    }
}
