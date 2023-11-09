
///  get slider item 
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

//  get number of slides 
let sliderCount = sliderImages.length;

// set current sliide 
let currentSlide = 1;

// slide number  element 
let slideNuberEle = document.getElementById('slider-number');

// previous and next buttons
let prevButton = document.getElementById('prev');

let nextButton = document.getElementById('next');

//  handle clickon previous and buttons 

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//  create the main ul element 

let paginationElement = document.createElement("ul");

paginationElement.setAttribute('id','pagination-ul');

// create list item based on slider count
for(let i=1; i<= sliderCount; i++){
    // create the li
    let paginationItem = document.createElement('li');
    
    // set custom attribute
    paginationItem.setAttribute('data-index',i);
    
    // set item content 
    paginationItem.appendChild(document.createTextNode(i));

    // append items to the main ui items 
    paginationElement.appendChild(paginationItem);
}

// add the created ul elements to the page 
document.getElementById('indicators').appendChild(paginationElement);

//  get pagination ul 
let paginationCreateUI = document.getElementById('pagination-ul');

let paginationBulletstArray = Array.from(document.querySelectorAll('#pagination-ul li'));
//console.log(paginationBulletstArray)

// loop on paginationBulletstArray

for(i=0; i<paginationBulletstArray.length; i++){
    paginationBulletstArray[i].onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }
}

// set id on created ul element

//  triger th checker function
checker();

// create nextSlide function 
function nextSlide(){
    if(nextButton.classList.contains('disabled')){
        // do no thing 
        return false;
    }else{
        currentSlide++;
        checker();
    }
}

// create prevSlide function 
function prevSlide(){
    if(prevButton.classList.contains('disabled')){
        // do no thing 
        return false;
    }else{
        currentSlide--;
        checker();
    }
}

//  create rhe checker function 
function checker(){
    slideNuberEle.textContent = 'Slide # ' + (currentSlide) + 'of ' + (sliderCount) ;

    // remove all active classes 
    removeAllActive();

    //  set active class on current slide 
    sliderImages[currentSlide - 1].classList.add('active');
    
    // set actie class on current pagniation item 
    paginationCreateUI.children[currentSlide - 1].classList.add('active');

    // check if current slide is the first 
    if(currentSlide == 1){
        // add disabled class on previous button
        prevButton.classList.add('disabled');
    }else{
        // remove disabled class on previous button
        prevButton.classList.remove('disabled');
    }

    // check if current slide is the last element 
    if(currentSlide == sliderCount ){
        // add disabled class on previous button
        nextButton.classList.add('disabled');
    }else{
        // remove disabled class on previous button
        nextButton.classList.remove('disabled');
    }
}

//  remove all active classes from images and bullets
function removeAllActive(){
    // loop throw images 
    sliderImages.forEach((img) => {
        img.classList.remove('active');
    });

    // loop throw paginatio Bullets
    paginationBulletstArray.forEach((bullet) => {
        bullet.classList.remove('active');
    });
}
