var score;
score = 0;
alert("Welcome to the QUIZ!")
var q1;
q1 = prompt("Which machine actually executed the Java Script?")
if (q1 == "The machine which is running a web server."){
    score++;
    alert("Correct! your score is: " +score)
}
else{
    alert("Wrong! :( your score is: "+score)
}

q2 = prompt("What is the purpose of <noscript> tag in Java Script?")
if (q2 == " Enclose text to be displayed by non –JavaScript browsers."){
    score++;
    alert("Correct! your score is: " +score)
}
else{
    alert("Wrong! :( your score is: "+score)
}



q3 = prompt("_____ JavaScript is also called server$side JavaScript.")
if (q3 == "(livewire"){
    score++;
    alert("Correct! your score is: " +score)
}
else{
    alert("Wrong! :( your score is: "+score)
}


q4 = prompt("To find the highest number in an array, the method to be used is")
if (q4 == "Math.max()"){
    score++;
    alert("Correct! your score is: " +score)
}
else{
    alert("Wrong! :( your score is: "+score)
}


q5 = prompt("An array can be sorted in a reverse manner through the method")
if (q5 == "reverse()"){
    score++;
    alert("Correct! your score is: " +score)
}
else{
    alert("Wrong! :( your score is: "+score)
}


q6 = prompt("In JavaScript, there are objects of")
if (q6 == "3 types"){
    score++;
    alert("Correct! your score is: " +score)
}
else{
    alert("Wrong! :( your score is: "+score)
}


q7 = prompt("Numeric array values can be sorted through an array method named as")
if (q7 == "compare()"){
    score++;
    alert("Correct! your score is: " +score)
}
else{
    alert("Wrong! :( your score is: "+score)
}

q8 = prompt("Method used to sort an array alphabetically is known to be")
if (q8 == "sort()"){
    score++;
    alert("Correct! your score is: " +score)
}
else{
    alert("Wrong! :( your score is: "+score)
}

q9 = prompt(" What is the alternate name for Java script")
if (q9 == "ECMAScript"){
    score++;
    alert("Correct! your score is: " +score)
}
else{
    alert("Wrong! :( your score is: "+score)
}

q10 = prompt("How does Java Script store dates in objects of Date type")
if (q10 == " The number of  milliseconds since January 1st, 1970"){
    score++;
    alert("Correct! your score is: " +score)
}
else{
    alert("Wrong! :( your score is: "+score)
}


if(score == 10){
    alert("your score is: "+score+"and you Won!!!")
}else{
   
    alert("your score is: "+score+"and you lost :(")
}