const pressed =[];
const secretCode= "friday";

window.addEventListener('keyup', (e)=>{
 pressed.push(e.key);
 pressed.splice(-secretCode.length -1, pressed.length- secretCode.length);
 if(pressed.join('').includes(secretCode)){
    console.log('done done done');
    cornify_add();
 }
 console.log(pressed);

})

