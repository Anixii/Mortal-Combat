const firstPlayer = 1000; 
const secondPlayer = 1000; 
   


function chanceAttack(){ 
    return Math.floor(Math.random() * 100) 

};   

let scorpionHP = document.querySelector('.indicator__scorpion')
let subzeroHP = document.querySelector('.indicator__subzero') 
 
scorpionHP.innerText = String(firstPlayer + ' / ' + firstPlayer);
subzeroHP.innerText = String(secondPlayer + ' / ' + secondPlayer);


function attackScorpion(){ 
    let hitPoint = 0;
    if(chanceOfHit() < 50){ 
        hitPoint =  secondPlayer - chanceAttack(); 
    }      
    else if(hitPoint > 0) {
        hitPoint = null
    }   
    subzeroHP.innerText = hitPoint + ' / ' + secondPlayer;
    return hitPoint;
    
    
    
    
    // hitPoint =  secondPlayer - chanceAttack(); 
        
        // return hitPoint;




    
}