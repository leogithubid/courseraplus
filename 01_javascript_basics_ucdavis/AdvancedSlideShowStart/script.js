(function(){
    "use strict";
    let currentImage = 0;
    const myPhotos = [ "image1.jpg" ,"image2.jpg","image3.jpg",
    "image4.jpg", "image5.jpg"];

    const divContent = document.getElementById("content");
    const buttonNext = document.getElementById("next");
    const buttonPrevious = document.getElementById("previous");

    buttonNext.addEventListener("click",function(event){
        event.preventDefault();

        currentImage++;

        if(currentImage > myPhotos.length - 1){
            currentImage = 0;
        }

        slideShow();
            });

    buttonPrevious.addEventListener("click",function(event){
        event.preventDefault();

        currentImage--;

        if(currentImage < 0 ){
            currentImage = myPhotos.length - 1;
        }

        slideShow();

            });

    function slideShow(){
        //create new image
        const newSlide = document.createElement("img");

        //get image from the folder and set the source of the image
        newSlide.src = `slides/${myPhotos[currentImage]}`;

        //change the class name - this is set in the css
        newSlide.className = "fadein";

        //add the new image to the div - so the new image will be added 
        //on top of the current image, but at first it will be transparent
        //and then in 2 seconds it will become fully visible based on css
        divContent.appendChild(newSlide);

        //remove the previous image
        if(divContent.children.length > 2){
            divContent.removeChild(divContent.children[0]);
        }
        
        }

})();