const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelectorAll(".main-content");




function buttonTransitions(){
    for(let i = 0; i < sectBtn.length; i++){ //loop over sectBtn
        sectBtn[i].addEventListener("click", function(){ //when any of the sectBtn is click function is executed
            let currentBtn = document.querySelectorAll(".active-btn") //the element with the class="active-btn" is stored in currentBtn 
            currentBtn[0].className = currentBtn[0].className.replace("active-btn", " ") // current Btn is an array so we are targetting the zero element of the array as there is only one element in the currentBtn with the active-btn class. Then we have removed the active-btn className from the element
            this.className += "active-btn" // Then we get the button which was clicked using "this" keyword and store the value of active-btn on to that button.  But instead of this keyword we can also use the sectBtn[i] and add the className to it.
        })
    }
}    

buttonTransitions();



