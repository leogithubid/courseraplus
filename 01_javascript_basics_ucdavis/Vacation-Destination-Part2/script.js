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

    //clear out the form
    for(let i = 0; i < detailsForm.length ; i++){
        detailsForm.elements[i].value = "";
    }

    //create new card
    let destinationCard = createDestinationCard(name,location,photo,description);

    //change header if required
    let destinationContainer = document.getElementById("destinations_container");
    if(destinationContainer.children.length == 0){
        document.getElementById("title").innerHTML = "My Wish List";
    }

    //add card
    document.querySelector("#destinations_container").appendChild(destinationCard);

}

function createDestinationCard(name,location,photoUrl,description){

    debugger;

    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.setAttribute("alt",name);
    
    const signPost = "images/signpost.jpg";

    if(photoUrl.length == 0){
        img.setAttribute("src",signPost);
    }
    else{
        img.setAttribute("src",photoUrl);
    }

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    let cardSubTitle = document.createElement("h4");
    cardSubTitle.innerText = location;
    cardBody.appendChild(cardSubTitle);

    if(description.length != 0){
        let cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    let cardDeleteButton = document.createElement("button");
    cardDeleteButton.innerText = "Remove";

    cardDeleteButton.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteButton);

    card.appendChild(img);
    card.appendChild(cardBody);

    return card;
}

function removeDestination(event){
    let card = event.target.parentElement.parentElement;
    card.remove();
}

})();