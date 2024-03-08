let $=document
let input=$.getElementById('inputdama')
let chang=$.querySelector('.chang')
let rest=$.querySelector('.rest')
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
ran.addEventListener('click',function(){
    let inputvalue=Number(input.value)
    if(!inputvalue){   
        p.innerHTML='wrong value';
        p.style.color='red';
        p.style.opacity='100'
    }
    else if(dama=='C'){
        p.innerHTML=inputvalue+'°C => '+(inputvalue*9/5+32)+'°F';
        p.style.color='yellow';
        p.style.opacity='100'
    }
    else{
        p.innerHTML=inputvalue+'°F => '+((inputvalue-32)*5/9)+'°C';
        p.style.color='yellow';
        p.style.opacity='100'
    }
}) 

// rest
rest.addEventListener('click',function(){
   input.value=''
   p.style.opacity='0'
})