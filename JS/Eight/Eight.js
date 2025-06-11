function getAdjective(){
const index = Math.floor(Math.random()*3);
switch (index) {
    case 1:
        return  "crazy";
    case 2:
        return  "Amazing";
    case 3:
        return  "Fire";
    default:
        return "cool"
}
}
function getShopname(){
const index = Math.floor(Math.random()*3);
switch (index) {
    case 1:
        return  "Engine";
    case 2:
        return  "Food";
    case 3:
        return  "Garments";
    default:
        return "cool"
}
}
function getAnotherword(){
const index = Math.floor(Math.random()*3);
switch (index) {
    case 1:
        return  "Bros";
    case 2:
        return  "Limited";
    case 3:
        return  "Hub";
    default:
        return "cool"
}
}

const Adjective = getAdjective();
const shopname = getShopname();
const word = getAnotherword();

console.log(`${Adjective} ${shopname} ${word}`)