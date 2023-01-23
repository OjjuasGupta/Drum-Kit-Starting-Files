
//creating a loop for all the buttons as their may be more buttons so .drum class specifies the buttons performing the following action
//through the function

for(var i=1;i<document.querySelectorAll(".drum").length;i++)        //till the length of the array

document.querySelectorAll("button")[i].addEventListener("click",function()      //here function is anonyomus no name provided
                                                                                //[i] has been taken to click on all the keys
{
    alert("I got clicked");
}); 

