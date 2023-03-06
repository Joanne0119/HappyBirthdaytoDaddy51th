const giftClose = document.getElementById('giftClose');
const giftOpen = document.getElementById('giftOpen');
const card = document.getElementById('card');

function openGift(){
  giftClose.style.display = 'none';
  giftOpen.style.display = 'block';
  giftOpen.play();
  showMembers();
}

function showMembers(){
  setTimeout(popDad,1000);
  setTimeout(popMom,2000);
  setTimeout(popBro,3000);
  setTimeout(popMe,4000);
  setTimeout(popSis,5000);
  setTimeout(popMimi,6000);
  setTimeout(popText,7000);
  // setTimeout(radomMove,8000)
}

function popDad(){
  const daddyCake = document.getElementById('daddyCake');
  daddyCake.style.display = 'inline-block';
  daddyCake.style.animation = 'daddyPop 1s';
  giftOpen.style.display = 'none';
}

function popMom(){
  const mommy = document.getElementById('mommy');
  mommy.style.display = 'inline-block';
  mommy.style.animation = 'memberPop 1s';
}

function popBro(){
  const brother = document.getElementById('brother');
  brother.style.display = 'inline-block';
  brother.style.animation = 'memberPop 1s';
}

function popMe(){
  const me = document.getElementById('me');
  me.style.display = 'inline-block';
  me.style.animation = 'memberPop 1s';
}

function popSis(){
  const sister = document.getElementById('sister');
  sister.style.display = 'inline-block';
  sister.style.animation = 'memberPop 1s';
}

function popMimi(){
  const mimi = document.getElementById('mimi');
  mimi.style.display = 'inline-block';
  mimi.style.animation = 'memberPop 1s';
}

function popText(){
  const text = document.getElementById('text');
  text.style.display = 'block';
  text.style.animation = 'textPop 3s';
}


// function random(name){
  
//   while(true){
//     const x = window.innerWidth - 50;
//     const y = window.innerHeight - 50;

//     let newX = Math.floor(Math.random() * x);
//     let newY = Math.floor(Math.random() * y);

//     console.log(newX + ',' + newY);

//     name.style.top = newY + "px";
//     name.style.left = newX + "px";
//     if((newY >= 300) || (newX >= 200)){
//       name.style.top = newY + "px";
//       name.style.left = newX + "px";
//     }
//   }
// }

// function radomMove(){
//   const mommy = document.getElementById('mommy');
//   const brother = document.getElementById('brother');
//   const me = document.getElementById('me');
//   const sister = document.getElementById('sister');
//   const mimi = document.getElementById('mimi');
//   const card = document.getElementById('cardLarge');

//   random(mommy);
//   random(brother);
//   random(me);
//   random(sister);
//   random(mimi);
// }
