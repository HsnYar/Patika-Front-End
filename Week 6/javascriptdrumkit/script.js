const keyA = document.getElementById("KeyA");
const keyS = document.getElementById("KeyS");
const keyD = document.getElementById("KeyD");
const keyF = document.getElementById("KeyF");
const keyG = document.getElementById("KeyG");
const keyH = document.getElementById("KeyH");
const keyJ = document.getElementById("KeyJ");
const keyK = document.getElementById("KeyK");
const keyL = document.getElementById("KeyL");

//Key A
keyA.addEventListener("click", (event) => {
    const id = event.target.id;
    const soundA = new Audio("./media/audio/boom.wav"); 
      soundA.play();     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'a' || event.key === 'A') {
    const soundA = new Audio("./media/audio/boom.wav"); 
      soundA.play();
    }     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'a' || event.key === 'A') {
      keyA.classList.add("bottonact")
    }     
});
document.addEventListener("keyup", (event) => {
  if (event.key === 'a' || event.key === 'A') {
    keyA.classList.remove("bottonact")
    }     
});

//Key S
keyS.addEventListener("click", (event) => {
    const id = event.target.id;
    const soundS = new Audio("./media/audio/clap.wav"); 
      soundS.play();     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 's' || event.key === 'S') {
    const soundS = new Audio("./media/audio/clap.wav"); 
      soundS.play();
    }     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 's' || event.key === 'S') {
      keyS.classList.add("bottonact")
    }     
});
document.addEventListener("keyup", (event) => {
  if (event.key === 's' || event.key === 'S') {
    keyS.classList.remove("bottonact")
    }     
});

//Key D
keyD.addEventListener("click", (event) => {
    const id = event.target.id;
    const soundD = new Audio("./media/audio/hihat.wav"); 
      soundD.play();     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'd' || event.key === 'D') {
    const soundS = new Audio("./media/audio/hihat.wav"); 
      soundS.play();
    }     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'd' || event.key === 'D') {
      keyD.classList.add("bottonact")
    }     
});
document.addEventListener("keyup", (event) => {
  if (event.key === 'd' || event.key === 'D') {
    keyD.classList.remove("bottonact")
    }     
});


//Key F
keyF.addEventListener("click", (event) => {
    const id = event.target.id;
    const soundF = new Audio("./media/audio/kick.wav"); 
      soundF.play();     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'f' || event.key === 'F') {
    const soundS = new Audio("./media/audio/kick.wav"); 
      soundS.play();
    }     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'f' || event.key === 'F') {
      keyF.classList.add("bottonact")
    }     
});
document.addEventListener("keyup", (event) => {
  if (event.key === 'f' || event.key === 'F') {
    keyF.classList.remove("bottonact")
    }     
});

//Key G
keyG.addEventListener("click", (event) => {
    const id = event.target.id;
    const soundG = new Audio("./media/audio/openhat.wav"); 
      soundG.play();     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'g' || event.key === 'G') {
    const soundG = new Audio("./media/audio/openhat.wav"); 
      soundG.play();
    }     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'g' || event.key === 'G') {
      keyG.classList.add("bottonact")
    }     
});
document.addEventListener("keyup", (event) => {
  if (event.key === 'g' || event.key === 'G') {
    keyG.classList.remove("bottonact")
    }     
});

//Key H
keyH.addEventListener("click", (event) => {
    const id = event.target.id;
    const soundH = new Audio("./media/audio/ride.wav"); 
      soundH.play();     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'h' || event.key === 'H') {
    const soundH = new Audio("./media/audio/ride.wav"); 
      soundH.play();
    }     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'h' || event.key === 'H') {
      keyH.classList.add("bottonact")
    }     
});
document.addEventListener("keyup", (event) => {
  if (event.key === 'h' || event.key === 'H') {
    keyH.classList.remove("bottonact")
    }     
});

//Key J
keyJ.addEventListener("click", (event) => {
    const id = event.target.id;
    const soundJ = new Audio("./media/audio/snare.wav"); 
      soundJ.play();     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'j' || event.key === 'J') {
    const soundJ = new Audio("./media/audio/snare.wav"); 
      soundJ.play();
    }     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'j' || event.key === 'J') {
      keyJ.classList.add("bottonact")
    }     
});
document.addEventListener("keyup", (event) => {
  if (event.key === 'j' || event.key === 'J') {
    keyJ.classList.remove("bottonact")
    }     
});

//Key K
keyK.addEventListener("click", (event) => {
    const id = event.target.id;
    const soundK = new Audio("./media/audio/tink.wav"); 
      soundK.play();     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'k' || event.key === 'K') {
    const soundK = new Audio("./media/audio/tink.wav"); 
      soundK.play();
    }     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'k' || event.key === 'K') {
      keyK.classList.add("bottonact")
    }     
});
document.addEventListener("keyup", (event) => {
  if (event.key === 'k' || event.key === 'K') {
    keyK.classList.remove("bottonact")
    }     
});

//Key L
keyL.addEventListener("click", (event) => {
    const id = event.target.id;
    const soundL = new Audio("./media/audio/tom.wav"); 
      soundL.play();     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'l' || event.key === 'L') {
    const soundL = new Audio("./media/audio/tom.wav"); 
      soundL.play();
    }     
});
document.addEventListener("keydown", (event) => {
  if (event.key === 'l' || event.key === 'L') {
      keyL.classList.add("bottonact")
    }     
});
document.addEventListener("keyup", (event) => {
  if (event.key === 'l' || event.key === 'L') {
    keyL.classList.remove("bottonact")
    }     
});




