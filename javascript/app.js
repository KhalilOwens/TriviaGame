var counter = 0;
var score = 0;
var pos = 0;
var question;
var test;
var testStatus;
var choice;
var choices; var chA; var chB; var chC; var correct = 0;
var questions = [
    ["In Texas it's illegal to sware in front of a what?","Corpse","American Flag","Police Officer","A"],
    ["Coprastastaphobia is the fear of what?","Coconuts","Constipation","Crowds","B"],
    ["What kind of animal is a praire dog?","Canine","Reptile","Rodent","C"],
    ["What is the name of Batmans Butler?","Morgan","Jeffrey","Alfred","C"]
];

  var div = $("#question");

 function renderQuestion() {
    div = $("#question");
    

    if(pos >= questions.length) {
        div.html("<h2>You got " +correct+" of "+questions.length+" questions correct</h2>");
        pos = 0;
        return false;
    }

      div.text("Question "+ (pos+1)+ " of " +questions.length);
      question = questions[pos][0];
      chA = questions[pos][1];
      chB = questions[pos][2];
      chC = questions[pos][3];
      div.append("<h3>"+question+"</h3>");
      div.append("<input type='radio' name='choices' value='A'>" + chA + "<br>");
      div.append("<input type='radio' name='choices' value='B'>" + chB + "<br>");
     div.append("<input type='radio' name='choices' value='C'>" + chC + "<br><br>");
      div.append("<button onclick='checkAnswer()'>Submit Answer</button>");
 }
    function checkAnswer() {
       // function to match user ckick to answer loop
      choices = document.getElementsByName("choices");
             
      for (var i=0; i<choices.length; i++) {
          if (choices[i].checked) {
          choice = choices[i].value;
          } //user selection is assigned to value of the question

        }
           
        if(choice === questions[pos][4] ) {
               correct++;
              // debugger;
            }
               else {
        console.log(choice);
           console.log(pos);
         console.log(correct);
         //debugger;
         
        }
        pos++;
        renderQuestion();
    }
      
    window.addEventListener("load", renderQuestion, false)
    
    //timer


// function for timer
 function countDown (secs,elem) {
    //assidn elem div to element var
      var element = $("#elem"); 
      //increment     
      secs--;
      //assign timer var to set timeout countdown to create movement speed
      var timer = setTimeout('countDown('+secs+',"'+elem+'")',1000);
      //display timer in div
      element.text("You have 35 seconds good luck: "+ timer);
      //asign secs to timer
      secs = timer;
        //set timer to stop
      if (secs >= 35) {
            clearTimeout(timer)
            element.text("That's all folks");
            // stop game
            div.html("<h2>You got " +correct+" of "+questions.length+" questions correct</h2>");

        }
       
     }

    countDown();
    
