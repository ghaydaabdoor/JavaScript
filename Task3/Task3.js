// Excercise 1
let div1= document.getElementById('div1')
div1.onmouseover=function(){
    div1.innerHTML='Can I help you?';
}
div1.onmouseout=function(){
    div1.innerHTML='Hello World !'
}

// Excercise 2
function FlagDisplay(){
let sel=document.getElementById('sel')
let FlagImg=document.getElementById('FlagImg')
let country=sel.value;
    if (country === 'Jordan'){
        FlagImg.src='Jordan.jpg';
        FlagImg.alt='Jordan Flag'
    }
    else if (country === 'Palestine'){
        FlagImg.src='palestine.jpg';
        FlagImg.alt='Palestine Flag'
    }
    else if (country === 'Saudi'){
        FlagImg.src='saudi.jpg';
        FlagImg.alt='Saudi Flag'
    }
    else if (country === 'Iraq'){
        FlagImg.src='iraq.png';
        FlagImg.alt='Iraq Flag'
    }
}

// Exercise 3
function FontProperities(){
    let SelectType=document.getElementById('SelectType')
    let TypeValue=SelectType.value;
    let SelectSize=document.getElementById('SelectSize');
    let SizeValue=SelectSize.value;
    let textbox=document.getElementById('textbox');
    let italic=document.getElementById('italic').checked;
    let bold=document.getElementById('bold').checked;
    let underline= document.getElementById('underline').checked;


    textbox.style.fontFamily= TypeValue;
    textbox.style.fontSize=SizeValue+'px';

    if(italic){
        textbox.style.fontStyle='italic';
    }
    else{
        textbox.style.fontStyle='normal'
    }

    if(bold){
        textbox.style.fontWeight='bold'
    }
    else{
        textbox.style.fontWeight='normal'
    }

    if(underline){
        textbox.style.textDecoration='underline'
    }
    else{
        textbox.style.textDecoration='none'
    }
}

// Exercise 4
let div4= document.querySelector('#div4')
div4.style.backgroundColor='blue';
div4.onclick=function(){
    div4.style.backgroundColor='red';
}

// Exercise 5
function ErrorFun(){
    let pass=document.getElementById('pass')
    let repass=document.getElementById('repass')
    let ErrorMsg=document.querySelector('.ErrorMsg');
    let ErrorMsg2=document.querySelector('.ErrorMsg2');
    let subm=document.querySelector('.sub')
    if (pass.value.length < 6){
     ErrorMsg.style.display='inline';
    }
    else{
        ErrorMsg.style.display='none';
    }
    if(pass.value === repass.value){
        subm.style.display='inline';
        ErrorMsg2.style.display='none';
    }
    else{
        subm.style.display='none';
        ErrorMsg2.style.display='inline'
    }
}

// Exercise 6 
// Create a simple playlist application where users can add songs to alist
let SongName=document.getElementById('SongName')
let AddSongBtn=document.getElementById('AddSongBtn')
let Ulist=document.getElementById('Ulist')
function AddSongFun(){
    let LiElement=document.createElement('li')
    let LiText=document.createTextNode(SongName.value)
    LiElement.appendChild(LiText)
    Ulist.appendChild(LiElement)
}

