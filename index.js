let playerscore = 0 ;
let computerscore = 0 ;  
let drawscore = 0 ;

function computerchoicefunc(){
    let arr = ['rock','paper','scissors'];
    let randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
}
  
function gameplay(playerchoice,computerchoice){
    if(playerchoice===computerchoice){
        drawscore++;
        return "Game is Draw";
    }
    else if(playerchoice==='rock' && computerchoice === 'paper'){
        computerscore++;
        return "Computer Win! Computer's Paper covers Your Rock";
    }
    else if(playerchoice==='rock' && computerchoice === 'scissors'){
        playerscore++;
        return "You Win! Your Rock beats Computer's Scissors";
    }
    else if(playerchoice==='paper' && computerchoice === 'rock'){
        playerscore++;
        return "You Win! Your Paper covers Computer's Rock";
    }
    else if(playerchoice==='paper' && computerchoice === 'scissors'){
        computerscore++;
        return "Computer Win! Computer's Scissors cuts Your Paper";
    }
    else if(playerchoice==='scissors' && computerchoice === 'rock'){
        computerscore++;
        return "Computer Win! Computer's Rock beats Your Scissors";
    }
    else{
        playerscore++;
        return "You win! Your Scissors cuts Computer's Paper";
    }
}

function start() {
    let x = document.getElementById("selectid");
    let y = document.getElementById("animatecontainer");

    x.style.display = "none";
    y.style.display = "block";
    computerchoicefunc()
}

function reset() {
    let x = document.getElementById("selectid");
    let y = document.getElementById("animatecontainer");

    y.style.display = "none";
    x.style.display = "block";
}
function setimg (playerchoice,computerchoice){
 let plyimg = document.getElementById('playerchoice');
 let compimg = document.getElementById('computerchoice');

 plyimg.src = `${playerchoice}.png`;
 compimg.src = `${computerchoice}.png`;
}

const choices = document.querySelectorAll('.choice');

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        document.getElementById('playagain').style.display = 'none';
        document.getElementById('pvc').style.display = 'none';
        document.getElementById('lastimg').style.display='none';
        document.getElementById('firstimg').style.display='block';
        document.getElementById('result').innerText = "";
    setTimeout(str = () =>{
        document.getElementById('playagain').style.display = 'block';
        document.getElementById('pvc').style.display = 'block';
        document.getElementById('firstimg').style.display='none';
        document.getElementById('lastimg').style.display='block';
        const playerchoice = choice.getAttribute("id");
        const computerchoice = computerchoicefunc();
        setimg(playerchoice,computerchoice);
        document.getElementById('result').innerText = gameplay(playerchoice,computerchoice);
        document.getElementById('yourscore').innerText = playerscore;
        document.getElementById('computerscore').innerText = computerscore;
        document.getElementById('drawscore').innerText = drawscore;
        
    },3000);
    
})
})
