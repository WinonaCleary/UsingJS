var clicked = false;

document.body.querySelector(".Nav").addEventListener(type, "click", listener, function(){
    click=!clicked;
    if(clicked){
        document.body.querySelector(selectors, ".NavMenu").style.display="block";
    }else{
        document.body.querySelector(selector, ".NavMenu").style.display="none";
    }

})