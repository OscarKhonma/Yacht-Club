let dark = document.querySelector('.theme-button-dark');
let light = document.querySelector('.theme-button-light');
let body = document.querySelector('.page');
let sansSerif = document.querySelector('.font-button-sans-serif');
let serif = document.querySelector('.font-button-serif');
let articleSections = document.querySelectorAll('.blog-article.short');
let cardGrid = document.querySelector('.card-view-button-grid');
let cardList = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');
let previews = document.querySelectorAll('.preview-list a');
let activePhoto = document.querySelector('.active-photo');


dark.onclick = function(){
  body.classList.add('dark');
  light.classList.remove('active');
  dark.classList.add('active');
};
light.onclick = function(){
  body.classList.remove('dark');
  dark.classList.remove('active');
  light.classList.add('active');
};

serif.onclick = function(){
  body.classList.add('serif');
  sansSerif.classList.remove('active');
  serif.classList.add('active');
};
sansSerif.onclick = function(){
  body.classList.remove('serif');
  serif.classList.remove('active');
  sansSerif.classList.add('active');
};

for (let articleSection of articleSections) {
  let moreButton = articleSection.querySelector('.more');
  moreButton.onclick = function () {
    articleSection.classList.remove('short');
  };
};

cardList.onclick = function(){
  cards.classList.add('list');
  cardGrid.classList.remove('active');
  cardList.classList.add('active');
};
cardGrid.onclick = function(){
  cards.classList.remove('list');
  cardList.classList.remove('active');
  cardGrid.classList.add('active');
};

for (let current of previews){
  current.onclick = function(evt){
    evt.preventDefault();
    activePhoto.src = current.href;
    let last = document.querySelector('.active-item');
    last.classList.remove('active-item');
    current.classList.add('active-item');
  };
};
