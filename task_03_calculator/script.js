let input = document.querySelector('.inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let arr = Array.from(buttons);
function roundToFixed(value, decimals) {
    return Number(value.toFixed(decimals));
}
arr.forEach(button => {
    button.addEventListener('click' , (e) => {
        if(e.target.innerHTML === '='){
            string = eval(string);  
            string = roundToFixed(string, 3);  
            input.value = string;
        }
        else if(e.target.innerHTML === 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML === 'DEL'){
            string = string.substring(0 , string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }

      
    })

})