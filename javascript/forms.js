"use strict"

function testing(){
    if (confirm("Are you sure you want to submit the contact form?")){//Ask the user if he wants to submit form, if he chooses no, form does not submit and info stay intact on form
        var form = document.getElementById("form");
        form.remove();
        document.getElementById("space").insertAdjacentHTML("afterend",'<p class="col-lg-8 col-md-12 text-center">Thank you for submitting the contact form!</p>');
        document.getElementById("contactformlink").href = "contact us.html" //Change the form to a thank you for submitting.
        return true;
    }
    else{
        return false;
    }
}