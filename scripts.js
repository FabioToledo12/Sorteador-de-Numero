
//Mapeamentos de camnpos
//const min = document.querySelector('.input-min').value
//const max = document.querySelector('.input-max').value

function generateNumber(){
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
    const resultRandon = (document.querySelector(".input-result"))
    const resultDiv = (document.querySelector(".result-div"))
    
    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    if(min >= max){
        resultRandon.innerHTML = ("O valor minimo tem que ser MENOR que o valor máximo")
    }else{
        //console.log(result)
        resultDiv.style.backgroundColor = "#e61919";
        resultRandon.innerHTML = (result)
        //alert(result)
    } 
}