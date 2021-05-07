'use strickt';
const textChange = () => {
      return  document.getElementById("text-inverted").value = 
      document.getElementById("text-enter").value.split("").reverse().join("");;    
 };

 const textCheck = () => {
      let x = document.getElementById("text-enter").value;
      if (x == "") {
        alert("Please enter some text !!!");
        return false;
      }
 };