 
const infoBox = document.getElementById('battleInfo');
const scorpionHP = document.getElementById('scorpionHP');
const subzeroHP = document.getElementById('subzeroHP');

const SUBZERO_FULLHP = 2000;
const SCORPION_FULLHP = 1000;

// scorpionHP.innerText = String(SCORPION_FULLHP + ' / ' + SCORPION_FULLHP);
// subzeroHP.innerText = String(SUBZERO_FULLHP + ' / ' + SUBZERO_FULLHP);
subzeroHP.innerHTML = `<div class='indicator__subzero'>${SUBZERO_FULLHP} / 2000</div>`
scorpionHP.innerHTML = `<div class='indicator__scorpion'>${SCORPION_FULLHP} / 1000</div>`
const Dragon = {
  hp: SUBZERO_FULLHP,
  defense: 120,
  str: 250,
  weapon: 0,
  toString: function () {
    return 'Ваш Противник: ' + this.hp + ' HP';
  },
  modifyHealth: function (hitPoints) {
    this.hp += hitPoints;
    if (this.hp < 0) {
      this.hp = 0;
    }
  }, 
  isShaokhan:false, 
  thisIsShaokhan: function(){ 
    this.isShaokhan = true;
  } ,
  isSonya:false, 
  thisIsSonya:function(){ 
    this.isSonya =true;
  }
};

const Hero = {
  hp: SCORPION_FULLHP,
  defense: 100,
  str: 120,
  weapon: 250,
  shield: 150,
  isShieldEquipped: false,
  equipShield: function () {
    this.isShieldEquipped = true;
  },
  removeShield: function () {
    this.isShieldEquipped = false;
  },
  toString: function () {
    return 'Ваш персонаж: ' + this.hp + ' HP';
  },
  modifyHealth: function (hitPoints) {
    this.hp += hitPoints;
    if (this.hp < 0) {
      this.hp = 0;
    }
  }, 
  skills: ['fireball'], 
  isScorpion: false, 
  thisIsScorpion: function(){ 
    this.isScorpion = true; 
    console.log(this.isScorpion)
  },  
  isSubzero: false,
  thisIsSubzero: function(){ 
    this.isSubzero = true; 
    console.log(this.isSubzero)
  }
};
 
let scorpion__icon = document.querySelector('.scorpion__choose-btn');   
let subzero__icon = document.querySelector('.subzero__choose-btn'); 
let start = document.querySelector('.start') ;
 
let enemy = document.querySelector('.enemy'); 
let shaokhan__icon = document.querySelector('.shaokhan__choose-btn'); 
let sonya__icon = document.querySelector('.sonya__choose-btn')
let wrapper = document.querySelector('.wrapper');  

scorpion__icon.addEventListener('click', () => {
  start.style.display = 'none'; 
  enemy.style.display = 'flex'
  // wrapper.style.display = 'flex';
  let scorpionGif = document.querySelector('.tekken'); 
  scorpionGif.src = 'img/escorpion.gif' ; 
  Hero.thisIsScorpion()
}); 
subzero__icon.addEventListener('click', () => { 
  
  start.style.display = 'none'; 
  enemy.style.display = 'flex';
  // wrapper.style.display = 'flex';
 
  let subzeroGif = document.querySelector('.tekken'); 
  subzeroGif.src = `img/mortal-kombat-subzero.gif`; 
  Hero.thisIsSubzero()
});

shaokhan__icon.addEventListener('click',() => { 
  enemy.style.display = 'none' 
  wrapper.style.display = 'flex' 

  let shaokhanGif = document.querySelector('.subzero'); 
  shaokhanGif.src = `img/Shaokahn_mk2.webp`; 
  Dragon.thisIsShaokhan(); 

} ) ; 
sonya__icon.addEventListener('click',() => { 
  enemy.style.display = 'none' 
  wrapper.style.display = 'flex' 

  let sonyaGif = document.querySelector('.subzero'); 
  sonyaGif.src = `img/sonya.gif`; 
  Dragon.thisIsSonya(); 
  
} ) 







const chanceOfHit = function () {
  return Math.floor(Math.random() * 100);
};

const rangeOfDamage = function (damage) {
  return damage + Math.floor(Math.random() * 21 - 10);
}
 




const hitHero = function () {
  let hitPoints = 0;
  if (chanceOfHit() < 75) {
    hitPoints = -(Hero.str + Hero.weapon - Dragon.defense);
    hitPoints = rangeOfDamage(hitPoints);
    if (hitPoints > 0) {
      hitPoints = null;
    }
  }
  return hitPoints;
};

const hitDragon = function () {
  let hitPoints = 0;
  if (chanceOfHit() < 50) {
    hitPoints = -(Dragon.str + Dragon.weapon - Hero.defense);
    if (Hero.isShieldEquipped) {
      hitPoints += Hero.shield;
    }
    hitPoints = rangeOfDamage(hitPoints);
    if (hitPoints > 0) {
      hitPoints = null;
    }
  }
  return hitPoints;
};

// const console.log = (text) => {
//   const msgBox = document.createElement('p');
//   msgBox.innerText = text;
//   infoBox.append(msgBox);
// }

const dragonHit = () => {
  const hitPoints = hitDragon();
  Hero.modifyHealth(hitPoints);
  if (hitPoints < 0) {
    const message = ('Ваш Противник нанес ' + (-hitPoints) + ' единиц урона\n');
    if (Hero.hp === 0) {
      console.log(message + 'Ваш Противник одержал победу!');
      console.log('====================');
      console.log(Hero.toString() + '\n' + Dragon.toString());  



      // let los = document.querySelector('.tekken') 
      // los.src = `img/los-scorpio.gif` 
       
      // let win = document.querySelector('.subzero') 
      // win.src = `img/subzero-win.gif`
       
      let wrapper = document.querySelector('.img-wrapper'); 
      wrapper.src = `img/finish-him-mk.gif`;
    } else {
      console.log(message + 'У Ваш персонажа осталось ' + Hero.hp + ' HP');
    } 
  } else if (hitPoints === null) {
    console.log('Ваш Противник не пробил защиту\n' + Hero.toString());
  } else {
    console.log('Ваш Противник проспал\n' + Hero.toString());
  }

  Hero.removeShield();

  // scorpionHP.style.width = (Hero.hp / SCORPION_FULLHP * 100) + '%';
  // subzeroHP.style.width = (Dragon.hp / SUBZERO_FULLHP * 100) + '%';
  // scorpionHP.innerText = SCORPION_FULLHP + ' / ' + Hero.hp;
  // subzeroHP.innerText = Dragon.hp + ' / ' + SUBZERO_FULLHP; 
  subzeroHP.innerHTML = `<div class='indicator__subzero'>${Dragon.hp} / 2000</div>`
  scorpionHP.innerHTML = `<div class='indicator__scorpion'>1000 / ${Hero.hp}</div>`
}

console.log(Hero.toString() + '\n' + Dragon.toString());
console.log('====================');



const attackBtn = document.getElementById('attack');
const defenseBtn = document.getElementById('defense');
const nothingBtn = document.getElementById('nothing'); 
const fireballBtn = document.getElementById('fireball')

attackBtn.addEventListener('click', () => {
  const hitPoints = hitHero();
  Dragon.modifyHealth(hitPoints);
  if (hitPoints < 0) {
    const message = 'Ваш персонаж нанес ' + (-hitPoints) + ' единиц урона\n';
    if (Dragon.hp === 0) {
      console.log(message + 'Ваш персонаж одержал победу!');
      console.log('====================');
      console.log(Hero.toString() + '\n' + Dragon.toString()); 
      let wrapper = document.querySelector('.img-wrapper'); 
      wrapper.src = `img/finish-him-mk.gif`;
    } else {
      console.log(message + 'У вашего Противника осталось ' + Dragon.hp + ' HP');
    }
  } else if (hitPoints === null) {
    console.log('Ваш персонаж не пробил защиту\n' + Dragon.toString());
  } else {
    console.log('Ваш персонаж промахнулся\n' + Dragon.toString());
  }
  dragonHit();
});

defenseBtn.addEventListener('click', () => {
  console.log('Ваш персонаж перешел к обороне. Защита героя увеличена');
  Hero.equipShield();
  dragonHit();
});

nothingBtn.addEventListener('click', () => {
  console.log('Ваш персонаж не предпринял никаких действий');
  dragonHit();
});
  
fireballBtn.addEventListener('click', () => { 
  const hitPoints = hitHero();
  Dragon.modifyHealth(hitPoints);
  if (hitPoints < 0) {
    const message = 'Ваш персонаж нанес ' + (-hitPoints) + ' единиц урона супер умением\n'; 
    // let i = document.querySelector('.fireball');    
    // i.src = `img/fireball-pixel.gif`
    
    // i = function(){ 
    //   let start = Date.now();

    //   let timer = setInterval(function() {
    //     let timePassed = Date.now() - start;

    //     i.style.left = timePassed / 5 + 'px';

    //     if (timePassed > 3000) clearInterval(timer);

    //   }, 20);
    // }
   



    if (Dragon.hp === 0) {
      console.log(message + 'Ваш персонаж одержал победу!');
      console.log('====================');
      console.log(Hero.toString() + '\n' + Dragon.toString()); 
      let wrapper = document.querySelector('.img-wrapper'); 
      wrapper.src = `img/finish-him-mk.gif`;
    } else {
      console.log(message + 'У вашего Противника осталось ' + Dragon.hp + ' HP');
    }
  } else if (hitPoints === null) {
    console.log('Ваш персонаж не пробил защиту\n' + Dragon.toString());
  } else {
    console.log('Ваш персонаж промахнулся\n' + Dragon.toString());
  }
  dragonHit();
});


// let allo = document.querySelector('.allo')
// allo.onclick = function() {
//   let start = Date.now();

//   let timer = setInterval(function() {
//     let timePassed = Date.now() - start;

//     allo.style.marginLeft = timePassed / 5 + 'px';

//     if (timePassed > 2000) clearInterval(timer);

//   }, 20);
// }
 



function whatsSkill(){ 
  if(Hero.isScorpion){ 
    getFireBallScorpion()
  } else{ 
    getIceBallSubzero() 
    attackSubzero()
  }
} 
function whatsAttack(){ 
  if(Hero.isScorpion){ 
    attackScorpion()
  } else{ 
    attackSubzero()
  }

} 
function whatsDef(){ 
  if(Hero.isScorpion){ 
    defendScorpion()
  } else { 
    defendSubzero()
  }
}



 
function getIceBallSubzero(){ 
  let imgsc = document.querySelector('.fireball')
  imgsc.src = `img/ice-ball.gif` 
 
 let start = Date.now();

 let timer = setInterval(function() {
   let timePassed = Date.now() - start;
  
   imgsc.style.left = timePassed / 13.5 + '%';

   if (timePassed > 1000) clearInterval(timer);

 }, 20); 
 setTimeout(nullTheBall, 1500)
}

function getFireBallScorpion(){  
  let imgsc = document.querySelector('.fireball')
   imgsc.src = `img/fireball-pixel.gif` 
  
  let start = Date.now();

  let timer = setInterval(function() {
    let timePassed = Date.now() - start;

    imgsc.style.left = timePassed / 13.5 + '%';

    if (timePassed > 1000) clearInterval(timer);

  }, 20); 
  setTimeout(nullTheBall, 1500)
 


}
function nullTheBall(){  
  let imgsc = document.querySelector('.fireball')
  imgsc.src = `img/#`
}
function attackScorpion(){   
     
  let i = document.querySelector('.tekken');    
  i.src = `img/attack.gif`   
  setTimeout(moveScorpion, 2000)
  // let hitPoint = 0;
  // // if(chanceAttack()<= 71 && chanceAttack() >= 100){ 
  // //     hitPoint = (Scorpion.attack - Subzero.shield ) 
  // //     console.log(hitPoint)
  // // } else if (chanceAttack()<= 41 && chanceAttack() >= 70){ 
  // //     hitPoint = (Scorpion.attack + 50 - Subzero.shield ) 
  // //     console.log(hitPoint)
  // // } else if(chanceAttack()<= 1 && chanceAttack() >= 40){ 
  // //     hitPoint = (Scorpion.attack + 80 - Subzero.shield )  
  // //     console.log(hitPoint)
  // // }  
  // if(chanceAttack()){ 
  //         hitPoint = (Scorpion.attack + 80 - Subzero.shield )  ;
  //         hitPoint = damage(hitPoint);     
  //         console.log(hitPoint)
  //     }  
      
}   

function moveScorpion(){ 
  let i = document.querySelector('.tekken');  
  i.src = `img/escorpion.gif` 
} 
function defendScorpion(){ 
  let i = document.querySelector('.tekken');  
  i.src = `img/scorpionDefend.gif` 
  setTimeout(moveScorpion,1000)
} 
function ultimateScorpion(){
  let i = document.querySelector('.tekken');  
  i.src = `img/ultScorpion.gif` 
  setTimeout(moveScorpion,600)
} 

function moveSubzero(){ 
  let i = document.querySelector('.tekken'); 
  i.src = `img/mortal-kombat-subzero.gif` 
} 
function attackSubzero(){ 
  let i = document.querySelector('.tekken'); 
  i.src = `img/subzeroAttack.gif`  
  setTimeout(moveSubzero, 800)
}
function defendSubzero(){ 
  let i = document.querySelector('.tekken'); 
  i.src = `img/subzeroDef.gif`  
  setTimeout(moveSubzero, 800)
} 
function ultimateSubzero(){ 
  let i = document.querySelector('.tekken'); 
  i.src = `img/ultSubzero.gif`  
  setTimeout(moveSubzero, 800)
}
