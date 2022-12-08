 
//  let imgArr = [`img/attack.gif`,`img/escorpion.gif`]
let HP_SUBZERO = document.querySelector('.subzeroHP') ; 
let HP_SCORPION = document.querySelector('.scorpionHP');  
 
const firstPlayer = 2000; 
const secondPlayer = 2000;
 
const subZeroHP = document.createElement('div')
const scorpionHp =  document.createElement('div') 
HP_SCORPION.append(scorpionHp)
HP_SUBZERO.append(subZeroHP)
 
subZeroHP.innerHTML = `<div class='indicator__subzero'>${firstPlayer} / 2000</div>`
scorpionHp.innerHTML = `<div class='indicator__scorpion'>${secondPlayer} / 2000</div>`


 

const Subzero ={ 
    hp: firstPlayer,
    defense:110, 
    attack:140, 
    ultimate:130, 
    shield:70, 
    modifyHealth: function (hitPoints) {
        this.hp += hitPoints;
        if (this.hp < 0) {
          this.hp = 0;
        }
      },
};  
const Scorpion ={ 
    hp: secondPlayer,
    defense:100, 
    attack:160,  
    shield: 40,
    ultimate:150, 
};  
function chanceAttack(){ 
    return Math.floor(Math.random() * 100) 

}; 
function damage(a){ 
    return a + Math.floor(Math.random() * 21 - 10);
}; 

// function hitSubzero(){ 

// }   









function attackScorpion(){   
     
    let i = document.querySelector('.tekken');    
    i.src = `img/attack.gif`   
    setTimeout(moveScorpion, 2000)
    let hitPoint = 0;
    // if(chanceAttack()<= 71 && chanceAttack() >= 100){ 
    //     hitPoint = (Scorpion.attack - Subzero.shield ) 
    //     console.log(hitPoint)
    // } else if (chanceAttack()<= 41 && chanceAttack() >= 70){ 
    //     hitPoint = (Scorpion.attack + 50 - Subzero.shield ) 
    //     console.log(hitPoint)
    // } else if(chanceAttack()<= 1 && chanceAttack() >= 40){ 
    //     hitPoint = (Scorpion.attack + 80 - Subzero.shield )  
    //     console.log(hitPoint)
    // }  
    if(chanceAttack()){ 
            hitPoint = (Scorpion.attack + 80 - Subzero.shield )  ;
            hitPoint = damage(hitPoint);     
            console.log(hitPoint)
        }  
        
}   
function getSubzeroHp(){ 
    const hp = attackScorpion(); 
    



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
    let i = document.querySelector('.subzero'); 
    i.src = `img/mortal-kombat-subzero.gif` 
} 
function attackSubzero(){ 
    let i = document.querySelector('.subzero'); 
    i.src = `img/subzeroAttack.gif`  
    setTimeout(moveSubzero, 800)
}
function defendSubzero(){ 
    let i = document.querySelector('.subzero'); 
    i.src = `img/subzeroDef.gif`  
    setTimeout(moveSubzero, 800)
} 
function ultimateSubzero(){ 
    let i = document.querySelector('.subzero'); 
    i.src = `img/ultSubzero.gif`  
    setTimeout(moveSubzero, 800)
}
