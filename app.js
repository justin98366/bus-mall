'use strict';

var app = document.getElementById('app');
var appTwo = document.getElementById('appTwo');
var clicksRemaining = 25;
var photosOnSecond = [];
var photosOnPreviousScreen = [];
var photosOnScreen = [];

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

renderPhotos();

function RandomPics (name, filename){
  this.name = name;
  this.src = './img/' + filename;
  this.clickCount = 0;
  this.displayCount = 0;
}

function getRandomIndex(list) {
  return Math.floor(Math.random() * list.length);
}

function generatePhotos(){

  photos = photos.concat(photosOnSecond);
  photosOnSecond = photosOnPreviousScreen;
  photosOnPreviousScreen = photosOnScreen;
  photosOnScreen = [];

  var nextPhoto = photos.splice(getRandomIndex(photos), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);
  nextPhoto = photos.splice(getRandomIndex(photos), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);
  nextPhoto = photos.splice(getRandomIndex(photos), 1);
  photosOnScreen = photosOnScreen.concat(nextPhoto);
}

function photoClick(event){

  var image = event.target;
  var photosOnScreenIndex = image.getAttribute('photos-on-screen-index');
  photosOnScreen[photosOnScreenIndex].clickCount++;
  clicksRemaining--;

  if (clicksRemaining > 0){
    renderPhotos();
  } else {
    renderChart();
  }
}

function renderPhotos(){
  generatePhotos();
  app.textContent = '';

  var imageElement;
  for(var i = 0; i < photosOnScreen.length; i++){
    photosOnScreen[i].displayCount++;
    imageElement = document.createElement('img');

    imageElement.src = photosOnScreen[i].src;
    imageElement.setAttribute('photos-on-screen-index', i);
    imageElement.addEventListener('click', photoClick);
    app.appendChild(imageElement);
  }
}

function renderChart(){

  var empty = true;

  photos = photos.concat(photosOnScreen);
  photos = photos.concat(photosOnPreviousScreen);
  photos = photos.concat(photosOnSecond);

  app.textContent = '';

  var canvas = document.createElement('canvas');
  canvas.width = app.clientWidth;
  canvas.height = app.clientWidth;
  app.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  ctx.fillRect(0, 0, 50, 50);

  var data = {
    labels: [],
    datasets: [
      {
        label: 'click count',
        data: [],
        backgroundColor: 'red',
      },
      {
        label: 'display count',
        data: [],
        backgroundColor: 'blue',
      },
    ],
  };

  var currentPhoto;
  for(var i = 0; i < photos.length; i++){
    currentPhoto = photos[i];
    data.labels.push(currentPhoto.name);
    data.datasets[0].data.push(currentPhoto.clickCount);
    data.datasets[1].data.push(currentPhoto.displayCount);
    // var totalNumberOfClicks = currentPhoto.clickCount;
    // var totalNumberShown = currentPhoto.displayCount;
    // var percentage = Math.round((totalNumberOfClicks / totalNumberShown) * 100);
    // data.datasets[0].data.push(percentage);

  }
  var storePercentages;
  if (localStorage.getItem('percentage') === null){
    storePercentages = (JSON.stringify(data.datasets[0].data));
    localStorage.setItem('percentage', storePercentages);
    console.log('true');
  }else{
    console.log('else');
  }

  new Chart(ctx, {
    type: 'bar',
    data: data,
  });

}
