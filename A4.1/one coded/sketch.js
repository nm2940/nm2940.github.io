
var mapimg;

var clat = 40.7831;
var clon = -73.9712;

var ww = 800;
var hh = 1200;

var zoom = 12;
var collision;

function preload() {
  // The clon and clat in this url are edited to be in the correct order.
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    clon + ',' + clat + ',' + zoom + '/' +
    ww + 'x' + hh +
    '?access_token=pk.eyJ1IjoiY29kaW5ndHJhaW4iLCJhIjoiY2l6MGl4bXhsMDRpNzJxcDh0a2NhNDExbCJ9.awIfnl6ngyHoB3Xztkzarw');
  collision = loadStrings('https://data.cityofnewyork.us/api/views/h9gi-nx95/rows.csv?accessType=DOWNLOAD');
}

function mercX(lon) {
  lon = radians(lon);
  var a = (256 / PI) * pow(2, zoom);
  var b = lon + PI;
  return a * b;
}

function mercY(lat) {
  lat = radians(lat);
  var a = (256 / PI) * pow(2, zoom);
  var b = tan(PI / 4 + lat / 2);
  var c = PI - log(b);
  return a * c;
}


function setup() {
  createCanvas(ww, hh);
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(mapimg, 0, 0);

  var cx = mercX(clon);
  var cy = mercY(clat);

  for (var i = 1; i < collision.length; i++) {
    var data = collision[i].split(/,/);
    //console.log(data[4]);
    var lat = data[0];
    var lon = data[1];
    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;

    if(x < - width/2) {
      x += width;
    } else if(x > width / 2) {
      x -= width;
    }

    var size = data[2].getNum() + data[3].getNum() + data[4].getNum() + data[5].getNum() + data[6].getNum() + data[7].getNum();
    console.log(size);

    //stroke(255, 0, 255);
    fill(255, 255, 0, 120);
    ellipse(x, y, 8,8);
  }




}
