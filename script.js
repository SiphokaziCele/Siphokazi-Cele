const display = document.getElementById('display');

   function clearDisplay() {
       display.innerText = '';
   }

   function appendValue(value) {
       display.innerText += value;
   }

   function calculateResult() {
       try {
           display.innerText = eval(display.innerText);
       } catch (error) {
           display.innerText = 'Error';
       }
   }