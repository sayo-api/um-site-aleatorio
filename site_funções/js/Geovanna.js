// Alerts 
window.alert('tenho algumas coisas pra falar.')
let input_user = window.prompt('Preparado? sim ou não?')
if(input_user.toLowerCase() == 'sim'){
}
else{
    window.alert('Vai do mesmo jeito kkkkk')  
}
// Open and Close Messages
const messages = {
    open_second_message(){
        window.document.querySelector('.first.button').classList.remove('active')
        window.document.querySelector('.second.text').classList.add('active')
        window.document.querySelector('.second.button').classList.add('active')
    },
    open_third_message(){
        window.document.querySelector('.third.text').classList.add('active')
        window.document.querySelector('.third.button').classList.add('active')
        window.document.querySelector('.second.button').classList.remove('active')
    },
    open_fourth_message(){
        window.document.querySelector('.fourth.text').classList.add('active')
        window.document.querySelector('.third.button').classList.remove('active')
        setTimeout(function() {
        window.location.href = "/albumfotos"
        }, 5 * 1000);
    },
}
