const humburger = document.querySelector('.humburger')
const menulist = document.querySelector('nav ul')
humburger.addEventListener('click',()=>{menulist.classList.toggle('showmenu')})



//hireme button action starts here
//select selec hireme-button,button-popup-box,hireme-button-popup-box,hireme-popup-box-done-button

let hiremebutton = document.querySelector('.hireme-button')
let popupoverlay = document.querySelector('.button-popup-box-overlay')
let popupbox = document.querySelector('.hireme-button-popup-box')
let donebutton = document.querySelector('.hireme-popup-box-done-button')
let cancelbutton = document.querySelector('.hireme-popup-box-cancel-button')
let emailinput = document.querySelector('.popup-box-email-input')
let jobtitleinput = document.querySelector('.popup-box-job-title-input')
let jobdiscriptiontextarea = document.querySelector('.popup-box-job-discription-textarea')
let input = document.getElementsByTagName('input')

hiremebutton.addEventListener("click",()=>{
    popupoverlay.style.display="block"
    popupbox.style.display="block"
    
})

donebutton.addEventListener("click",()=>{

    if (emailinput.value.length > 5 & jobtitleinput.value.length > 5 & jobdiscriptiontextarea.value.length > 5 ){
        
        let donebuttonconfirm = confirm("You are hiring me so that data will be send to the creater of this port" )

        if(donebuttonconfirm===true){
            popupoverlay.style.display="none"
            popupbox.style.display="none"
            alert("Thank You")
            
        }
    }
    else{
        
        alert("please enter the all fields")
    }
    /* let alertbox = alert(donebuttonconfirm ?? "")
    alertbo.value="Thank You" */

    

})

cancelbutton.addEventListener("click",()=>{
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

//hireme button action ends here