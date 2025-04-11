const hourHand= document.querySelector('.hour-hand');
const minsHand= document.querySelector('.mins-hand');
const secHand= document.querySelector('.sec-hand');

function setDate(){
const now = new Date();
const seconds= now.getSeconds();
const secondsDegrees= ((seconds/60)*360)+ 90;
secHand.style.transform= `rotate(${secondsDegrees}deg)`;

const minutes= now.getMinutes();
const minutesDegrees= ((minutes/60)*360)+ 90;
minsHand.style.transform= `rotate(${minutesDegrees}deg)`;

const hours= now.getHours();
const hoursDegrees= ((hours/12)*360)+ 90;
hourHand.style.transform= `rotate(${hoursDegrees}deg)`;


}



setInterval(setDate, 1000);

setDate();