var mapimg;

var clat = 40.7831;
var clon = -73.9712;

var ww = 1280;
var hh = 1280;

var zoom = 12;
var collision;



    var type1=0;
    var type2=0;
    var type3=0;
    var type4=0;
    var type5=0;
    var type6=0;


    var l_type1=0;
    var l_type2=0;
    var l_type3=0;
    var l_type4=0;
    var l_type5=0;
    var l_type6=0;


function preload() {
  // The clon and clat in this url are edited to be in the correct order.
  mapimg = loadImage('https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' +
    clon + ',' + clat + ',' + zoom + '/' +
    ww + 'x' + hh +
    '?access_token=pk.eyJ1IjoiY29kaW5ndHJhaW4iLCJhIjoiY2l6MGl4bXhsMDRpNzJxcDh0a2NhNDExbCJ9.awIfnl6ngyHoB3Xztkzarw');
  collision = loadStrings('311.csv','csv','head');
  //collision = loadStrings('https://data.cityofnewyork.us/api/views/h9gi-nx95/rows.csv?accessType=DOWNLOAD');
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
    var lat = data[14];
    var lon = data[15];
    var x = mercX(lon) - cx;
    var y = mercY(lat) - cy;

    if(x < - width/2) {
      x += width;
    } else if(x > width / 2) {
      x -= width;
    }


    if(data[17]== "7AM"){
      fill(255, 255, 0, 40);
      noStroke();
      ellipse(x, y, 8,8);

      if(data[4]=="Noise - Vehicle"){
        type1=type1+1;
      }
      if(data[6]=="Club/Bar/Restaurant"){
        l_type1=l_type1+1;
      }
    }

    if(data[17]== "8AM"){
      fill(255, 200, 0, 40);
      noStroke();
      ellipse(x, y, 8,8);

      if(data[4]=="Noise - Vehicle"){
        type2=type2+1;
      }
      if(data[6]=="Club/Bar/Restaurant"){
        l_type2=l_type2+1;
      }
    }
    if(data[17]== "9AM"){
      fill(255, 150, 0, 40);
      noStroke();
      ellipse(x, y, 8,8);
      if(data[4]=="Noise - Vehicle"){
        type3=type3+1;
      }
      if(data[6]=="Club/Bar/Restaurant"){
        l_type3=l_type3+1;
      }
    }


    if(data[17]== "5PM"){
      fill(255, 100, 0, 40);
      noStroke();
      ellipse(x, y, 8,8);
      if(data[4]=="Noise - Vehicle"){
        type4=type4+1;
      }
      if(data[6]=="Club/Bar/Restaurant"){
        l_type4=l_type4+1;
      }
    }
    if(data[17]== "6PM"){
      fill(255, 50, 0, 40);
      noStroke();
      ellipse(x, y, 8,8);
      if(data[4]=="Noise - Vehicle"){
        type5=type5+1;
      }
      if(data[6]=="Club/Bar/Restaurant"){
        l_type5=l_type5+1;
      }
    }
    if(data[17]== "7PM"){
      fill(255, 0, 0, 40);
      noStroke();
      ellipse(x, y, 8,8);
      if(data[4]=="Noise - Vehicle"){
        type6=type6+1;
      }
      if(data[6]=="Club/Bar/Restaurant"){
        l_type6=l_type6+1;
      }
    }

  }

  var factor=0.3;
  var factor2=0.3;


  //fill(255,255,255,80);
  //rect(20 - width / 2, 20 - height / 2,600,200);


  textFont("sans-serif");
  textSize(40);
  textStyle(BOLD);
  fill(255,100,0,200)
  text("Noise Compliant during Rush Hours \n7-9AM && 5-7PM", 20 - width / 2, 50 - height / 2);

  textSize(24);
  fill(255, 255, 0);
  text("7AM",20 - width / 2, 200 - height / 2);
  fill(255, 200, 0);
  text("8AM",80 - width / 2, 200 - height / 2);
  fill(255, 150, 0);
  text("9AM",140 - width / 2, 200 - height / 2);
  fill(255, 100, 0);
  text("5PM",200 - width / 2, 200 - height / 2);
  fill(255, 50, 0);
  text("6PM",260 - width / 2, 200 - height / 2);
  fill(255, 0, 0);
  text("7PM",320 - width / 2, 200 - height / 2);

  var h=600;

  fill(255, 255, 0, 60);
  rect(20 - width / 2, 150 - height / 2, 60, 40); 
  rect(20 - width / 2, 300 - height / 2,type1*factor,20);
  rect(20 - width / 2, 400 - height / 2,l_type1*factor2,20);

  fill(255, 200, 0, 60);
  rect(80 - width / 2, 150 - height / 2, 60, 40);
  rect(20 - width / 2+type1*factor, 300 - height / 2,type2*factor,20);
  rect(20 - width / 2+l_type1*factor2, 400 - height / 2,l_type2*factor2,20);

  fill(255, 150, 0, 60);
  rect(140 - width / 2, 150 - height / 2, 60, 40);
  rect(20 - width / 2+type1*factor+type2*factor, 300 - height / 2,type3*factor,20);
  rect(20 - width / 2+l_type1*factor2+l_type2*factor2, 400 - height / 2,l_type3*factor2,20);

  fill(255, 100, 0, 60);
  rect(200 - width / 2, 150 - height / 2, 60, 40);
  rect(20 - width / 2+type1*factor+type2*factor+type3*factor, 300 - height / 2,type4*factor,20);
  rect(20 - width / 2+l_type1*factor2+l_type2*factor2+l_type3*factor2, 400 - height / 2,l_type4*factor2,20);

  fill(255, 50, 0, 60);
  rect(260 - width / 2, 150 - height / 2, 60, 40);
  rect(20 - width / 2+type1*factor+type2*factor+type3*factor+type4*factor, 300 - height / 2,type5*factor,20);
  rect(20 - width / 2+l_type1*factor2+l_type2*factor2+l_type3*factor2+l_type4*factor2, 400 - height / 2,l_type5*factor2,20);

  fill(255, 0, 0, 60);
  rect(320 - width / 2, 150 - height / 2, 60, 40);
  rect(20 - width / 2+type1*factor+type2*factor+type3*factor+type4*factor+type5*factor, 300 - height / 2,type6*factor,20);
  rect(20 - width / 2+l_type1*factor2+l_type2*factor2+l_type3*factor2+l_type4*factor2+l_type5*factor2, 400 - height / 2,l_type6*factor2,20);



  textStyle(BOLD);
  textSize(20)
  fill(255,100,0,200)
  text("Compliant Type: Vehicle Compliant by Time", 20 - width / 2, 300 - height / 2);
  text("Compliant Location: Street/Sidewalk by Time", 20 - width / 2, 400 - height / 2);
  
  




  


}
