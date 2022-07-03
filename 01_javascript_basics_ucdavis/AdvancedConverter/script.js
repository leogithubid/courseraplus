(function(){
    "use strict";

    let conversionType = "miles";
    const h1 = document.querySelector("h1");//because no id
    const p  = document.querySelector("p");//intro paragraph
    const answer = document.getElementById("answer");//answer footer
    const form   = document.getElementById("convert");//form

    document.addEventListener("keydown",function(event){

        if(event.code === 'KeyK'){

            //change conversion type
            conversionType = "kilometers";
            //change header h1
            h1.innerHTML = "Kilometers to Miles converter";
            //change intro para p
            p.innerHTML = "Type number of kilometers and click the button to convert to miles"
            //change answer
        }
        else if(event.code === "KeyM"){
            //change conversion type
            conversionType = "miles";
            //change header h1
            h1.innerHTML = "Miles to Kilometers converter";
            //change intro para p
            p.innerHTML = "Type number of miles and click the button to convert to kilometers"
            //change answer
        }
        else{
            //h1.innerHTML = "Please press M or K";
            //p.innerHTML = `You pressed ${event.code}`;
        }

    });//to know key down

    form.addEventListener("submit",function(event){
        event.preventDefault();

        const distance = parseFloat( document.getElementById("distance").value );

        if(distance){

            if(conversionType == "miles"){
                let converted = ( distance * 1.609344 ).toFixed(3);
                answer.innerHTML = `${distance} miles converts to ${converted} kilometers`;
            }
            else if(conversionType == "kilometers"){
                let converted = ( distance / 1.609344 ).toFixed(3);
                answer.innerHTML = `${distance} kilometers converts to ${converted} miles`;
            }

        }
        else{
            answer.innerHTML = "<h2>Please enter a number!</h2>";
        }

    });//for submit

})();//automatically invoked function