let $=document
let input=$.getElementById('inputdama')
let chang=$.querySelector('.chang')
let reset=$.querySelector('.reset')
let ran=$.querySelector('.ran')
let p=$.querySelector('.tag-p')
let dama='C'
let q=false

// chang 
chang.addEventListener('click',function(){
    let chang1= $.querySelector('.info')
    if (!q){
        chang1.innerHTML='converter : °F to °C '
        input.placeholder=' °F'
        document.title='°F to °C '
        q=true
        dama='F'
    }
    else{
        chang1.innerHTML='converter : °C  to °F  '
        input.placeholder='°C'
        document.title='°C to °F '
        q=false
        dama='C'
    }
})

// ran
ran.addEventListener('click',my)
function my(){
    let inputvalue=Number(input.value)
    if(!inputvalue){   
        p.innerHTML='wrong value';
        p.style.color='red';
        p.style.opacity='100'
    }
    else if(dama=='C'){
        const fahrenheit=(inputvalue*9/5+32).toFixed(1)+'°F'
        p.innerHTML=inputvalue+`°C => ${fahrenheit} `;
        p.style.color='yellow';
        p.style.opacity='100'
    }
    else{
        const celsius = ((inputvalue-32)*5/9).toFixed(1) +'°C'
        p.innerHTML=inputvalue+`°F => ${celsius}`;
        p.style.color='yellow';
        p.style.opacity='100'
    }
}
input.onkeyup=function(event){
    if (event.key=='Enter')
        my();
    else if(event.key=='Backspace')
    p.style.opacity='0'
    }
    
// reset
reset.addEventListener('click',function(){
   input.value=''
   p.style.opacity='0'
})
