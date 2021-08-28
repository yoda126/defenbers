"use strict";
class Testing{
    constructor(questions){
        this.questions = questions
    }
    test(){
        this.classList.toggle("activated");//Change the background color of the question
        this.answer = this;
        this.child = this.answer.childNodes;//Used to get the icon element of the question so easy to change
        console.log(this.child)
        for (var s = 0; s < 3; s++) {
            this.answer = this.answer.nextElementSibling;//Go to the element which is the answer to the question being clicked
        }
        if (this.answer.style.maxHeight) { //Make the answer to the question hide if it is showing and change icon to chevron down
            this.answer.style.maxHeight = null;
            this.child[2].style.display = "block";
            this.child[1].style.display = "none";
          }
        else {
            this.answer.style.maxHeight = (this.answer.scrollHeight) + "px";//Make the answer to the question show if it is hidden change icon to chevron up
            this.child[1].style.display = "block";
            this.child[2].style.display = "none";
        }
    }
}

var faq = new Testing(document.getElementsByClassName("question"))//Make a object with property questions being array of elements with class question
for (var i = 0; i < faq.questions.length; i++) {
    faq.questions[i].addEventListener("click", faq.test);
}
