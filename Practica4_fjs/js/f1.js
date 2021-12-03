var  valid1 = document.getElementById("valor1");
var valid2 = document.getElementById("valor2");
var Error1 = document.getElementById("error1");
var Error2 = document.getElementById("error2");

Error1.style.color = 'red';
Error2.style.color = 'red';

var form = document.getElementById("F1");
form.addEventListener("submit",function(evt) {
    evt.preventDefault();
    var mensajesError1 = [];
    var mensajesError2 = [];
    
    if(valid1.value === null || valid1.value === ''){
        mensajesError1.push('INGRESA EL VALOR 1');
        valid1.style.borderColor='red';

        
    }
    if(valid2.value === null || valid2.value === ''){
        mensajesError2.push('INGRESA EL VALOR 2');
        valid2.style.borderColor='red';
    }
    else{
        valid1.style.borderColor='black';
        valid2.style.borderColor='black';
        valid1 =parseInt(document.getElementById("valor1").value);
        valid2 = parseInt(document.getElementById("valor2").value);
        document.getElementById('R1').innerHTML= valid1/valid2;

    }
    Error1.innerHTML = mensajesError1.join('');
    Error2.innerHTML = mensajesError2.join('');


    
});

var  valid3 = document.getElementById("valor3");
var valid4 = document.getElementById("valor4");
var Error3 = document.getElementById("error3");
var Error4 = document.getElementById("error4");

Error3.style.color = 'red';
Error4.style.color = 'red';

var form = document.getElementById("F2");
form.addEventListener("submit",function(evt) {
    evt.preventDefault();
    var mensajesError3 = [];
    var mensajesError4 = [];
    
    if(valid3.value === null || valid3.value === ''){
        mensajesError3.push('INGRESA EL VALOR 1');
        valid3.style.borderColor='red';

        
    }
    if(valid4.value === null || valid4.value === ''){
        mensajesError4.push('INGRESA EL VALOR 2');
        valid4.style.borderColor='red';
    }
    else{
        valid3.style.borderColor='black';
        valid4.style.borderColor='black';
        valid3 = parseInt(document.getElementById('valor3').value);
        valid4 = parseInt(document.getElementById('valor4').value);
        document.getElementById('R2').innerHTML= (valid3*valid4);

    }
    Error3.innerHTML = mensajesError3.join('');
    Error4.innerHTML = mensajesError3.join('');
    
});


var valid5 = document.getElementById("valor5");
var valid6 = document.getElementById("valor6");
var Error5 = document.getElementById("error5");
var Error6 = document.getElementById("error6");

Error5.style.color = 'red';
Error6.style.color = 'red';

var form = document.getElementById("F3");
form.addEventListener("submit",function(evt) {
    evt.preventDefault();
    var mensajesError5 = [];
    var mensajesError6 = [];
    
    if(valid5.value === null || valid5.value === ''){
        mensajesError5.push('INGRESA EL VALOR 1');
        valid5.style.borderColor='red';

        
    }
    if(valid6.value === null || valid6.value === ''){
        mensajesError6.push('INGRESA EL VALOR 2');
        valid6.style.borderColor='red';
    }
    else{
        valid5.style.borderColor='black';
        valid6.style.borderColor='black';
        valid5 = parseInt(document.getElementById('valor5').value);
        valid6 = parseInt(document.getElementById('valor6').value);
        document.getElementById('R3').innerHTML= (valid5*valid6);

    }
    Error5.innerHTML = mensajesError5.join('');
    Error6.innerHTML = mensajesError6.join('');
    
});


var valid7 = document.getElementById("valor7");
var valid8 = document.getElementById("valor8");
var Error7 = document.getElementById("error7");
var Error8 = document.getElementById("error8");

Error7.style.color = 'red';
Error8.style.color = 'red';

var form = document.getElementById("F4");
form.addEventListener("submit",function(evt) {
    evt.preventDefault();
    var mensajesError7 = [];
    var mensajesError8 = [];
    
    if(valid7.value === null || valid7.value === ''){
        mensajesError7.push('INGRESA EL VALOR 1');
        valid7.style.borderColor='red';

        
    }
    if(valid8.value === null || valid8.value === ''){
        mensajesError8.push('INGRESA EL VALOR 2');
        valid8.style.borderColor='red';
    }
    else{
        valid7.style.borderColor='black';
        valid8.style.borderColor='black';
        valid7 = parseInt(document.getElementById('valor7').value);
        valid8 = parseInt(document.getElementById('valor8').value);
        document.getElementById('R4').innerHTML= (valid7/valid8);

    }
    Error7.innerHTML = mensajesError7.join('');
    Error8.innerHTML = mensajesError8.join('');
    
});






