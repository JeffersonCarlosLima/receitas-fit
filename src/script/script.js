
function openav(){
    document.getElementById('nav-bar').style.width='70%';
}
function closenav(){
    document.getElementById('nav-bar').style.width='0%';
    
}
function calcular(){

    let carboidratos = document.getElementById("carbo").value;
    let proteinas = document.getElementById("protein").value;
    let gordura = document.getElementById("fats").value;
    
    Resultado = ((gordura * 9)+(proteinas * 4)+(carboidratos * 4));
    
    if (Resultado==0){
        alert("Campos vazios digite algum valor para calcular as calorias dos alimentos.")
    }else{
        document.getElementById("resultado").innerHTML=Resultado;
        console.log(Resultado);
    }
}

function calcularImc() {
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    IMC = (peso / (altura*altura));
    document.getElementById("resultado-imc").innerHTML=IMC;

    if (IMC <= 18.5){
    document.getElementById("orientacao-imc").innerHTML="Resultado menor que 18.5 - Abaixo do peso";
    }
    else if(IMC>= 18.5 <= 24.9){
        document.getElementById("orientacao-imc").innerHTML="18.5-24.9 - Normal";
     }   
    else if(IMC>= 25 <= 29.9){
        document.getElementById("orientacao-imc").innerHTML="25.0-29.9 - Excesso de peso";
     }     
     else if(IMC>= 25 <= 29.9){
        document.getElementById("orientacao-imc").innerHTML="25.0-29.9 - Excesso de peso";
     }
     else if(IMC>= 30 <= 34.9){
        document.getElementById("orientacao-imc").innerHTML="30.0-34.9 - Obesidade Leve (Grau I)";
     }
     else if(IMC>= 35 <= 39.9){
        document.getElementById("orientacao-imc").innerHTML="35.0-39.9 - Obesidade Severa (Grau II)";
     }
     else if(IMC>= 40){
        document.getElementById("orientacao-imc").innerHTML="> 40.0 - Obesidade Mórbida (Grau III)";
     }
   
}


