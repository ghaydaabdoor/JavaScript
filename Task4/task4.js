        // Exercise 1

        let APIurl = "https://66681676f53957909ff67af8.mockapi.io/users/Animals"
        var selectAnimal= document.getElementById('selectAnimal')
        var jsonData=[]
        
        async function getData(){
            const response= await fetch(APIurl)
            jsonData= await response.json()
            console.log(response)
            console.log(jsonData)
            for (let i=0; i<jsonData.length; i++){
                let option= document.createElement('option')
                let optionText= document.createTextNode(jsonData[i].name)
                option.appendChild(optionText)
                selectAnimal.appendChild(option)
                }
        }
        getData()
        
        function changePic(){
            let animalPic= document.getElementById('animalPic')
            for (let j=0; j<jsonData.length; j++)
            if(selectAnimal.value == jsonData[j].name){
                animalPic.src= jsonData[j].image
            }
        
        }  
        
        // Exercise 2
        let nameX= document.getElementById('nameX');
        let age= document.getElementById('age')
        let gender= document.getElementById('gender')
        let birthdate= document.getElementById('birthdate')
        let uimg= document.getElementById('uimg')
        let desc= document.getElementById('desc')
        let maj_un= document.getElementById('maj_un')
        let sib= document.getElementById('sib')
        let sibDes= document.getElementById('sibDes')
        
        function nameFun(){localStorage.setItem('name',nameX.value)}
        function ageFun(){localStorage.setItem('Age',age.value)}
        function genFun(){localStorage.setItem('Gender',gender.value)}
        function birthFun(){localStorage.setItem('Birth Date',birthdate.value)}
        function imgFun(){localStorage.setItem('Your Image',uimg.value)}
        function descFun(){localStorage.setItem('Description',desc.value)}
        function majUniFun(){localStorage.setItem('Major and University',maj_un.value)}
        function progLanFun(){
            let html= document.getElementById('html').checked
            let css= document.getElementById('css').checked
            let js= document.getElementById('js').checked
            let proLang=[];
            if (html){proLang.push('HTML')}
            if (css){proLang.push('CSS')}
            if (js){proLang.push('JS')}
            localStorage.setItem('Programming Language',JSON.stringify(proLang))
        }
        function sibFun(){localStorage.setItem('Siblings number',sib.value)}
        function sibDesFun(){localStorage.setItem('Description of siblings',sibDes.value)}
        
        for(let k=0; k<localStorage.length; k++){
        console.log(`${localStorage.key(k)}: `,localStorage.getItem(localStorage.key(k)))
        }


        // Exercise 3

        var Fname= document.getElementById('Fname');
        var Lname= document.getElementById('Lname');
        var FnameSpan= document.querySelector('.FnameSpan')
        var LnameSpan= document.querySelector('.LnameSpan')
        var email= document.getElementById('email');
        var confEmaill= document.getElementById('confEmaill');
        var emailSpan= document.querySelector('.emailSpan');
        var ConfemailSpan= document.querySelector('.ConfemailSpan')
        var pass= document.getElementById('pass');
        var confPass= document.getElementById('confPass');
        var passSpan= document.querySelector('.passSpan');
        var ConfpassSpan= document.querySelector('.ConfpassSpan')


        var nameRegex = /^[a-zA-Z]+(?:-[a-zA-Z]+)*$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;


        function FnameErr(){
        if(nameRegex.test(Fname.value)){
            FnameSpan.style.display='none';
        }
        else{
            FnameSpan.style.display='inline';
        }}
        function LnameErr(){
        if(nameRegex.test(Lname.value)){
                LnameSpan.style.display='none';
        }
        else{
                LnameSpan.style.display='inline';
        }}
        function emailErr(){
        if(emailRegex.test(email.value)){
                emailSpan.style.display='none';
        }
        else{
                emailSpan.style.display='inline';
        }}
        function ConfemailErr(){
        if(emailRegex.test(confEmaill.value)){
                ConfemailSpan.style.display='none';
        }
        else{
                ConfemailSpan.style.display='inline';
        }}
        function passErr(){
        if(emailRegex.test(pass.value)){
                passSpan.style.display='none';
        }
        else{
                passSpan.style.display='inline';
        }}
        function ConfpassErr(){
        if(emailRegex.test(confPass.value)){
                ConfpassSpan.style.display='none';
        }
        else{
                ConfpassSpan.style.display='inline';
        }}
    


