const a = document.querySelector("#nota");
const btn = document.querySelector("#verificar");
const l1 = document.querySelector("#l1");

//Mostrar ao usuário que o campo não foi atendido
a.onblur = () =>{
    if(a.value < 0 || a.value > 100){
    l1.style = "color: #aa0044";
    a.style = "border-color: #aa0044";
    }else{
        l1.style = "color: black";
        a.style = "color: black";
    }
}
btn.onclick = () =>{
    if(a.value < 0 ){
        alert("Nota valida de 0 a 100");
    }else if(a.value > 100){
        alert("Nota valida de 0 a 100");
    }else{
        verificando(a.value);
    }
}
//Realizando a verificação
const verificando = (a) => {
    if(a < 38){
        alert("Aluno Reprovado!")
     } else if(a >= 38 ){
        function round(a) {
            return Math.ceil(a / 5) * 5;
        }
        alert("Aluno Aprovado "+(round(a)));
    }
}
