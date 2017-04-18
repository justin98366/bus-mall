'use strict';

function RandomPics(name, picSource){
  this.name = name;
  // this.src = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
  // ];
  this.picSource = './img/' + picSource;
  //this.path =
  this.timesShown = 0;
  this.timesClicked = 0;

}
var pictureOne = document.getElementById('picture-one');
var pictureTwo = document.getElementById('picture-two');
var pictureThree = document.getElementById('picture-three');
var photosSecond = [];
var photosOnScreen = [];
var photosOnPreviousScreen = [];
var photos = [
  new RandomPics ('bag', 'bag.jpg'),
  new RandomPics ('banana', 'banana.jpg'),
  new RandomPics ('bathroom', 'bathroom.jpg'),
  new RandomPics ('boots', 'boots.jpg'),
  new RandomPics ('breakfast', 'breakfast.jpg'),

  new RandomPics ('bubblegum', 'bubblegum.jpg'),
  new RandomPics ('chair', 'chair.jpg'),
  new RandomPics ('cthulhu', 'cthulhu.jpg'),
  new RandomPics ('dog duck', 'dog-duck.jpg'),
  new RandomPics ('dragon', 'dragon.jpg'),

  new RandomPics ('pen', 'pen.jpg'),
  new RandomPics ('pet sweeper', 'pet-sweep.jpg'),
  new RandomPics ('scissors', 'scissors.jpg'),
  new RandomPics ('shark', 'shark.jpg'),
  new RandomPics ('sweep', 'sweep.png'),

  new RandomPics ('tauntaun', 'tauntaun.jpg'),
  new RandomPics ('unicorn', 'unicorn.jpg'),
  new RandomPics ('usb', 'usb.gif'),
  new RandomPics ('water can', 'water-can.jpg'),
  new RandomPics ('wine glass', 'wine-glass.jpg'),
];

function getRandomIndex(list){
  return Math.floor(Math.random() * list.length);
}

function generatePhotos(){

  photos = photos.concat(photosOnScreen);
  photosSecond = photosOnPreviousScreen;
  photosOnPreviousScreen = photosOnScreen;
  photosOnScreen = [];

  var nextPhoto = photos.splice(getRandomIndex(photos), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);

  nextPhoto = photos.splice(getRandomIndex(photos), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);

  nextPhoto = photos.splice(getRandomIndex(photos), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);

  return photosOnScreen;
}
generatePhotos();

// for (var i = 0; i < 3; i++){
//   var threePics = document.createElement('img');
//   threePics.src = photosOnScreen[i].picSource;
//   pics.appendChild(threePics);
//   console.log(threePics);
// }
var onePics = document.createElement('img');
onePics.src = photosOnScreen[0].picSource;
pictureOne.appendChild(onePics);

var twoPics = document.createElement('img');
twoPics.src = photosOnScreen[1].picSource;
pictureTwo.appendChild(twoPics);

var threePics = document.createElement('img');
threePics.src = photosOnScreen[2].picSource;
pictureThree.appendChild(threePics);


var my_div = document.getElementById('picture-one');
my_div.onclick = function() {
  console.log('booya!');
  var clicked = this.timesClicked;
  clicked.timesClicked++;
  console.log(clicked.timesClicked);

};














//
