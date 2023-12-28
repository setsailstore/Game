const score =JSON.parse(localStorage.getItem("score")) || {
 menang : 0 ,
 kalah :  0 ,
 seri : 0

}
console.log(JSON.parse(localStorage.getItem("score")))

function pilihBatu(){
    let randomNumber = Math.random();
    let computerMove = "";
    let hasil = ''

    if(randomNumber>0 && randomNumber < 1/3){
        computerMove = "Gunting";
        hasil = "Menang"
        score.menang += 1
    }else if(randomNumber >1/3 && randomNumber <2/3){
        computerMove = "Kertas"
        hasil ="Kalah"
        score.kalah +=1
    }else{
        computerMove = "Batu"
        hasil = "Seri"
        score.seri += 1
    }
    localStorage.setItem("score",JSON.stringify(score))
    
    console.log(computerMove);
    document.querySelector('.result').innerHTML = `<p> Kamu ${hasil}. </p>`
    document.querySelector('.pick').innerHTML =`Kamu <img src="image/Batu-emoji.png" class="icon"> VS <img src="image/${computerMove}-emoji.png" class="icon"> Computer`
    document.getElementById("score").textContent = `Menang : ${score.menang} ; Kalah : ${score.kalah} ; Seri : ${score.seri}`


}
function pilihGunting(){
    let randomNumber = Math.random();
    let computerMove = "";
    let hasil = ''

    if(randomNumber>0 && randomNumber < 1/3){
        computerMove = "Gunting";
        hasil = "Seri"
        score.seri +=1
    }else if(randomNumber >1/3 && randomNumber <2/3){
        computerMove = "Kertas"
        hasil ="Menang"
        score.menang +=1
    }else{
        computerMove = "Batu"
        hasil = "Kalah"
        score.kalah +=1
    }
    localStorage.setItem("score",JSON.stringify(score))
    console.log(computerMove);
    document.querySelector('.result').innerHTML = `<p> Kamu ${hasil}. </p>`
    document.querySelector('.pick').innerHTML =`Kamu <img src="image/Gunting-emoji.png" class="icon"> VS <img src="image/${computerMove}-emoji.png" class="icon"> Computer`
    document.getElementById("score").textContent = `Menang : ${score.menang} ; Kalah : ${score.kalah} ; Seri : ${score.seri}`
}

function pilihKertas(){
    let randomNumber = Math.random();
    let computerMove = "";
    let hasil = ''

    if(randomNumber>0 && randomNumber < 1/3){
        computerMove = "Gunting";
        hasil = "Kalah"
        score.kalah +=1
    }else if(randomNumber >1/3 && randomNumber <2/3){
        computerMove = "Kertas"
        hasil ="Seri"
        score.seri +=1
    }else{
        computerMove = "Batu"
        hasil = "Menang"
        score.menang += 1
    }
    localStorage.setItem("score",JSON.stringify(score))
  
    console.log(computerMove);
    document.querySelector('.result').innerHTML = `<p> Kamu ${hasil}. </p>`
    document.querySelector('.pick').innerHTML =`Kamu <img src="image/Kertas-emoji.png" class="icon"> VS <img src="image/${computerMove}-emoji.png" class="icon"> Computer`
    document.getElementById("score").textContent = `Menang : ${score.menang} ; Kalah : ${score.kalah} ; Seri : ${score.seri}`
}
function resetScore(){
    score.menang = 0 ;
    score.kalah = 0 ;
    score.seri = 0 ;
    localStorage.removeItem('score')
    document.getElementById("score").textContent = `Menang : ${score.menang} ; Kalah : ${score.kalah} ; Seri : ${score.seri}`
}