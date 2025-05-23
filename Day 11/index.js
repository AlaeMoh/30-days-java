const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress =player.querySelector('.progress');
const progressBar= player.querySelector('.progress__filled');
const toggle= player.querySelector('.toggle');
const skipBuottons= player.querySelectorAll('[data-skip]');
const ranges= player.querySelectorAll('.player__slider');

function togglePlay(){
if(video.paused){
    video.play();
}else{
    video.pause();
}
}

function updateButton(){
    if(video.paused){
        toggle.innerHTML=`<i class="fa-solid fa-play"></i>`;
    }else{
        toggle.innerHTML=`<i class="fa-solid fa-pause"></i>`;

    }
}


function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}


function handleRangeUpdate(){
    video[this.name] = this.value;
}

function  handleProgress(){
    const percent= (video.currentTime/ video.duration)*100;
    progressBar.style.flexBasis= `${percent}%`;
}

function scrub(e){
    const scrubTime= (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime=scrubTime;

}

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('pause', updateButton);
video.addEventListener('play', updateButton);
video.addEventListener('timeupdate', handleProgress);
skipBuottons.forEach(button=>button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);