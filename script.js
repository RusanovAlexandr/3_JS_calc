//кнопка равно
btn_r.onclick = function(){
    let r = rez.value;
    rez.value = eval(r);
}

//функциональные кнопки
btn_p.onclick = function(){
    let r = rez.value;
    rez.value = r+'+';
}

btn_m.onclick = function(){
    let r = rez.value;
    rez.value = r+'-';
}

btn_y.onclick = function(){
    let r = rez.value;
    rez.value = r+'*';
}

btn_d.onclick = function(){
    let r = rez.value;
    rez.value = r+'/';
}

//цифровые кнопки и точка
btn_1.onclick = function(){
    let r = rez.value;
    rez.value = r+'1';
}

btn_2.onclick = function(){
    let r = rez.value;
    rez.value = r+'2';
}

btn_3.onclick = function(){
    let r = rez.value;
    rez.value = r+'3';
}

btn_4.onclick = function(){
    let r = rez.value;
    rez.value = r+'4';
}

btn_5.onclick = function(){
    let r = rez.value;
    rez.value = r+'5';
}

btn_6.onclick = function(){
    let r = rez.value;
    rez.value = r+'6';
}

btn_7.onclick = function(){
    let r = rez.value;
    rez.value = r+'7';
}

btn_8.onclick = function(){
    let r = rez.value;
    rez.value = r+'8';
}

btn_9.onclick = function(){
    let r = rez.value;
    rez.value = r+'9';
}

btn_0.onclick = function(){
    let r = rez.value;
    rez.value = r+'0';
}

btn_t.onclick = function(){
    let r = rez.value;
    rez.value = r+'.';
}


//кнопка сброса(удаление последнего значения)
btn_c.onclick = function(){
    let r = rez.value;
    // rez.value = '';
    rez.value = r.slice(0,-1);
}

//кнопка сброса(удаление всего)
btn_c.oncontextmenu = function(){
    let r = rez.value;
    rez.value = '';
    //rez.value = r.slice(0,-1);
}

//отработчик клавиши Enter
document.addEventListener('keypress',function(event)
{
    if(event.key === 'Enter'){
        let r = rez.value;
        rez.value = eval(r);
    }
})

//отработчик клавиши Escape - очтстка
document.addEventListener('keydown',function(event)
{
    if(event.key === 'Escape'){
        let r = rez.value;
        rez.value = '';
    }
})

//подстановка цифр с клавиатуры
document.addEventListener('keydown',function(event)
{
    nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    
    if (event.key in nums){    
    let r = rez.value;
        rez.value = r+event.key;
    }
})

//подстановка знаков с клавиатуры
/*почему то не работают если их вносить в массив nums*/
document.addEventListener('keydown',function(event)
{
    if (event.key == '+' || event.key == '-' || event.key == '*' || event.key == '+' ||event.key == '/'){    
    let r = rez.value;
        rez.value = r+event.key;
    }}
    
)


   