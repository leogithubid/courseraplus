//immediately invoked function expression iife
(function(){
    "use strict";

    document.getElementById('convert').addEventListener('submit',function(event){
        event.preventDefault();//stop auto refresh after submit - default behaviour
        //and then it goes to some php file 

        const miles = parseFloat( document.getElementById("distance").value );
        const answer = document.getElementById("answer");

        if(miles){
            //let kilometers = Math.round( ( miles * 1.609344 * 1000 ) / 1000  );
            const kilometers = ( miles * 1.609344 ).toFixed(3);
            
            answer.innerHTML = `<h2>${miles} miles converts to ${kilometers} kilometers</h2>`;
        }
        else{
            answer.innerHTML = `<h2>Please provide a number !</h2>`;
        }
        
    });   

})();