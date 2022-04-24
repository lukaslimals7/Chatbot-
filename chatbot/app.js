function talk(){  
    var know = {  
     "Who are you" : "Hello, Lukas here 🤍",  
     "How are you" : "Alive  :)",  
     "What can i do for you" : "Please Give us A Follow On Instagram.",  
     "Are you single" : "Yes :(",  
     "ok" : "Thank You So Much ",  
     "Bye" : "Seeyaa",
     "Your hobby?": "playing cricket and pc games wbu?"
       
    };  
    var user = document.getElementById('userBox').value;  
     document.getElementById('chatLog').innerHTML = user + "<br>";  
    if (user in know) {  
     document.getElementById('chatLog').innerHTML = know[user] + "<br>";  
    }else{  
     document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";  
    }  
   }  