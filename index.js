
// // const audio = document.querySelector=("audio");

// // window.addEventListener("keydown",function(e){
// // const audio = document.querySelector=(`audio[data-key="${e.keyCode}"]`);
// // // console.log(audio);
// // if(!audio) return;else
// // function playAudio(keydown) {
// //    audio.play();
// //   } 
// // });

// window.addEventListener("keydown",function(e){
// let audio = document.querySelector=(`audio[data-key="${e.keyCode}"]`);
// if(audio=audio.length){
// function playAudio(){
//     audio.play();
   
// }}else{
//     return;
// }
// });

// playAudio(keydown);

// let audio= document.querySelectorAll("audio");
// console.log(audio);

// for(let i=0; i<audio.length ; i++){
// windiow.addEventListener("keydown", function(){
//     // function playAudio() {
//     //     audio.play();
//     //   }
//     console.log(i);
// })
// }



// window.addEventListener("keydown", function(e){
//     let audio = document.querySelector=('audio[data-key="${e.keyCode}"]');
//     console.log(e);
// })

// $(".key").click(function() {
//     var key = $(this).data('key');
//     var audio = $('audio[data-key='+key+']');
//     audio[0].play();
//    });

// window.addEventListener("keydown",function(e){

// const audio = document.querySelector(`audio[data-key="${this.attributes['data-key'].value}"]`);
// console.log(audio);
// audio.play();
// });

// window.addEventListener("keydown",function(e){
// const audio = document.querySelector=(`audio[data-key="${e.keyCode}"]`);
// console.log(audio);
// // if(!audio) return;else
// // function playAudio(keydown) {
// //    audio.play();
// //   } 
// });



window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    audio.play();
    if(!audio) return;
    console.log(audio);
});

