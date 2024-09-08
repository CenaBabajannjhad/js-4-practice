const personAge = 120;

if(personAge > 99){
    console.log('You are a dinosaur.')

}else if(personAge === 18 || personAge > 18){
    console.log('You are an adult.');

}else if(personAge >= 13 && personAge <= 17){
    console.log('You are a teenager.');

}else if(personAge <= 12 && personAge >= 0){
    console.log('You are a child.');

}else{
    console.log('You are not born yet.');
}