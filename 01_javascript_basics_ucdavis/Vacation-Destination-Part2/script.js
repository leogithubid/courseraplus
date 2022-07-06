(function(){
    "use strict";

let detailsForm = document.querySelector('#destination_details_form');

detailsForm.addEventListener("submit",handleFormSubmit);

function handleFormSubmit(event){
    event.preventDefault();
    //extract value of each form field
    let name           = event.target.elements["name"].value;
    let location       = event.target.elements["location"].value;
    let photo          = event.target.elements["photo"].value;
    let description    = event.target.elements["description"].value;
    alert("hello");
    //clear out the form
    for(let i = 0; i < detailsForm.length ; i++){
        detailsForm.elements[i].value = "";
    }
    //create new card
    //change header if required
    let destinationContainer = document.getElementById("destinations_container");
    if(destinationContainer.children.length == 0){
        document.getElementById("title").innerHTML = "My Wish List";
    }
    //add card

}

function createDestinationCard(name,location,photoUrl,description){
    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.setAttribute("alt",name);
    
    let signPost = "images/signpost.jpg";

    if(photoUrl.length == 0){
        img.setAttribute("src",signPost);
    }
    else{
        img.setAttribute("src",photoUrl);
    }
}

})();