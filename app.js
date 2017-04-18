'use strict';

function RandomPics(name, src){
  this.name = name;
  // this.src = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jgp',
  // ];
  this.src = './assets/' + src;
  //this.path =
  this.timesShown = 0;
  this.timesClicked = 0;

}

var photosSecond = [];
var photosOnScreen = [];
var photosOnPreviousScreen = [];
var photos = [
  new RandomPics ('bag', 'bag.jgp'),
  new RandomPics ('banana', 'banana.jgp'),
  new RandomPics ('bathroom', 'bathroom.jgp'),
  new RandomPics ('boots', 'boots.jgp'),
  new RandomPics ('breakfast', 'breakfast.jgp'),

  new RandomPics ('bubblegum', 'bubblegum.jgp'),
  new RandomPics ('chair', 'chair.jgp'),
  new RandomPics ('cthulhu', 'cthulhu.jgp'),
  new RandomPics ('dog duck', 'dog-duck.jgp'),
  new RandomPics ('dragon', 'dragon.jgp'),

  new RandomPics ('pen', 'pen.jgp'),
  new RandomPics ('pet sweeper', 'pet-sweep.jgp'),
  new RandomPics ('scissors', 'scissors.jgp'),
  new RandomPics ('shark', 'shark.jgp'),
  new RandomPics ('sweep', 'sweep.png'),

  new RandomPics ('tauntaun', 'tauntaun.jgp'),
  new RandomPics ('unicorn', 'unicorn.jgp'),
  new RandomPics ('usb', 'usb.gif'),
  new RandomPics ('water can', 'water-can.jgp'),
  new RandomPics ('wine glass', 'wine-glass.jgp'),
];

function getRandomIndex(list){
  return math.floor(math.random() * list.length);
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

//photosSecond = photos.concat(photosOnScreen);












//
