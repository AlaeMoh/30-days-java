function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  const sliderImages= document.querySelectorAll('.slide-in');

  function checkSlide(){
    
    // sliderImages.forEach(sliderImage=>{
    //     const slideAt= (window.scrollY + window.innerHeight) - sliderImage.height/2;
    //     const imageBottom = sliderImage.offsetTop + sliderImage.height;       
    //     const halfShown = slideAt > sliderImage.offsetTop;
    //     const scrolledPast= 
    
    // })
    sliderImages.forEach(sliderImage=>{
        const slideAt= (window.scrollY + window.innerHeight) - sliderImage.height/2;
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const halfShown = slideAt > sliderImage.offsetTop;
        const scrolledPast= window.scrollY< imageBottom;

        if (halfShown && scrolledPast){
            sliderImage.classList.add('active');
        }else{
            sliderImage.classList.remove('active');
        }


       })};

  window.addEventListener('scroll', debounce(checkSlide));