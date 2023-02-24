


function calcular(){

    let carboidratos = document.getElementById("carbo").value;
    let proteinas = document.getElementById("protein").value;
    let gordura = document.getElementById("fats").value;
    
    Resultado = ((gordura * 9)+(proteinas * 4)+(carboidratos * 4));
    
    console.log(Resultado);
}


