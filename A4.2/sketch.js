var mapimg;

var clat = 40.7831;
var clon = -73.9712;

var ww = 1280;
var hh = 1280;

var zoom = 11.5;
var collision;


  var firstx=[];
  var firsty=[];
  var secondx=[];
  var secondy=[];
  var thirdx=[];
  var thirdy=[];
  var fourthx=[];
  var fourthy=[];
  var fifthx=[];
  var fifthy=[];
  var sixx=[];
  var sixy=[];
  var sevenx=[];
  var seveny=[];
  var eightx=[];
  var eighty=[];
  var ninex=[];
  var niney=[];
  var tenx=[];
  var teny=[];
  var elex=[];
  var eley=[];
  var twex=[];
  var twey=[];
  var elex=[];
  var eley=[];
  var twex=[];
  var twey=[];
  var thirx=[];
  var thiry=[];
  var forx=[];
  var fory=[];
  var fifx=[];
  var fify=[];

var slider;
var val;
var ellSize=7;
var factor=1.5;


var V_tp1=0;
var S_tp1=0;
var C_tp1=0;
var P_tp1=0;
var HE_tp1=0;
var HW_tp1=0;

var V_tp2=0;
var S_tp2=0;
var C_tp2=0;
var P_tp2=0;
var HE_tp2=0;
var HW_tp2=0;

var V_tp3=0;
var S_tp3=0;
var C_tp3=0;
var P_tp3=0;
var HE_tp3=0;
var HW_tp3=0;

var V_tp4=0;
var S_tp4=0;
var C_tp4=0;
var P_tp4=0;
var HE_tp4=0;
var HW_tp4=0;

var V_tp5=0;
var S_tp5=0;
var C_tp5=0;
var P_tp5=0;
var HE_tp5=0;
var HW_tp5=0;

var V_tp6=0;
var S_tp6=0;
var C_tp6=0;
var P_tp6=0;
var HE_tp6=0;
var HW_tp6=0;

var V_tp7=0;
var S_tp7=0;
var C_tp7=0;
var P_tp7=0;
var HE_tp7=0;
var HW_tp7=0;

var V_tp8=0;
var S_tp8=0;
var C_tp8=0;
var P_tp8=0;
var HE_tp8=0;
var HW_tp8=0;

var V_tp9=0;
var S_tp9=0;
var C_tp9=0;
var P_tp9=0;
var HE_tp9=0;
var HW_tp9=0;

var V_tp11=0;
var S_tp11=0;
var C_tp11=0;
var P_tp11=0;
var HE_tp11=0;
var HW_tp11=0;

var V_tp12=0;
var S_tp12=0;
var C_tp12=0;
var P_tp12=0;
var HE_tp12=0;
var HW_tp12=0;

var V_tp10=0;
var S_tp10=0;
var C_tp10=0;
var P_tp10=0;
var HE_tp10=0;
var HW_tp10=0;

var V_tp13=0;
var S_tp13=0;
var C_tp13=0;
var P_tp13=0;
var HE_tp13=0;
var HW_tp13=0;

var V_tp14=0;
var S_tp14=0;
var C_tp14=0;
var P_tp14=0;
var HE_tp14=0;
var HW_tp14=0;

var V_tp15=0;
var S_tp15=0;
var C_tp15=0;
var P_tp15=0;
var HE_tp15=0;
var HW_tp15=0;



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
  createCanvas(ww,hh);
  translate(width / 2, height / 2);
  //image(mapimg, 0, 0);

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
      append(firstx,x);
      append(firsty,y);

      if(data[4]=="Noise - Vehicle"){
        V_tp1=V_tp1+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp1=C_tp1+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp1=S_tp1+1;
      }else if(data[4]=="Noise - Park"){
        P_tp1=P_tp1+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp1=HE_tp1+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp1=HW_tp1+1;
      }
    }

    if(data[17]== "8AM"){
      append(secondx,x);
      append(secondy,y); 

      if(data[4]=="Noise - Vehicle"){
        V_tp2=V_tp2+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp2=C_tp2+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp2=S_tp2+1;
      }else if(data[4]=="Noise - Park"){
        P_tp2=P_tp2+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp2=HE_tp2+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp2=HW_tp2+1;
      }    
    }

    if(data[17]== "9AM"){
      append(thirdx,x);
      append(thirdy,y); 

      if(data[4]=="Noise - Vehicle"){
        V_tp3=V_tp3+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp3=C_tp3+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp3=S_tp3+1;
      }else if(data[4]=="Noise - Park"){
        P_tp3=P_tp3+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp3=HE_tp3+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp3=HW_tp3+1;
      }    
    }
    if(data[17]== "10AM"){
      append(fourthx,x);
      append(fourthy,y);

      if(data[4]=="Noise - Vehicle"){
        V_tp4=V_tp4+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp4=C_tp4+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp4=S_tp4+1;
      }else if(data[4]=="Noise - Park"){
        P_tp4=P_tp4+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp4=HE_tp4+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp4=HW_tp4+1;
      }     
    }

    if(data[17]== "11AM"){
      append(fifthx,x);
      append(fifthy,y);

      if(data[4]=="Noise - Vehicle"){
        V_tp5=V_tp5+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp5=C_tp5+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp5=S_tp5+1;
      }else if(data[4]=="Noise - Park"){
        P_tp5=P_tp5+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp5=HE_tp5+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp5=HW_tp5+1;
      }      
    }

    if(data[17]== "12PM"){
      append(sixx,x);
      append(sixy,y); 

      if(data[4]=="Noise - Vehicle"){
        V_tp6=V_tp6+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp6=C_tp6+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp6=S_tp6+1;
      }else if(data[4]=="Noise - Park"){
        P_tp6=P_tp6+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp6=HE_tp6+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp6=HW_tp6+1;
      }     
    }
    if(data[17]== "1PM"){
      append(sevenx,x);
      append(seveny,y);  

      if(data[4]=="Noise - Vehicle"){
        V_tp7=V_tp7+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp7=C_tp7+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp7=S_tp7+1;
      }else if(data[4]=="Noise - Park"){
        P_tp7=P_tp7+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp7=HE_tp7+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp7=HW_tp7+1;
      }    
    }

    if(data[17]== "2PM"){
      append(eightx,x);
      append(eighty,y);  

      if(data[4]=="Noise - Vehicle"){
        V_tp8=V_tp8+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp8=C_tp8+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp8=S_tp8+1;
      }else if(data[4]=="Noise - Park"){
        P_tp8=P_tp8+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp8=HE_tp8+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp8=HW_tp8+1;
      }    
    }

    if(data[17]== "3PM"){
      append(ninex,x);
      append(niney,y);

      if(data[4]=="Noise - Vehicle"){
        V_tp9=V_tp9+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp9=C_tp9+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp9=S_tp9+1;
      }else if(data[4]=="Noise - Park"){
        P_tp9=P_tp9+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp9=HE_tp9+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp9=HW_tp9+1;
      }      
    }
    if(data[17]== "4PM"){
      append(tenx,x);
      append(teny,y); 
      if(data[4]=="Noise - Vehicle"){
        V_tp10=V_tp10+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp10=C_tp10+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp10=S_tp10+1;
      }else if(data[4]=="Noise - Park"){
        P_tp10=P_tp10+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp10=HE_tp10+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp10=HW_tp10+1;
      }     
    }

    if(data[17]== "5PM"){
      append(elex,x);
      append(eley,y);
      if(data[4]=="Noise - Vehicle"){
        V_tp11=V_tp11+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp11=C_tp11+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp11=S_tp11+1;
      }else if(data[4]=="Noise - Park"){
        P_tp11=P_tp11+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp11=HE_tp11+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp11=HW_tp11+1;
      }      
    }
    if(data[17]== "6PM"){
      append(twex,x);
      append(twey,y);

      if(data[4]=="Noise - Vehicle"){
        V_tp12=V_tp12+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp12=C_tp12+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp12=S_tp12+1;
      }else if(data[4]=="Noise - Park"){
        P_tp12=P_tp12+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp12=HE_tp12+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp12=HW_tp12+1;
      }      
    }

    if(data[17]== "7PM"){
      append(thirx,x);
      append(thiry,y);   

      if(data[4]=="Noise - Vehicle"){
        V_tp13=V_tp13+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp13=C_tp13+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp13=S_tp13+1;
      }else if(data[4]=="Noise - Park"){
        P_tp13=P_tp13+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp13=HE_tp13+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp13=HW_tp13+1;
      }   
    }

    if(data[17]== "8PM"){
      append(forx,x);
      append(fory,y); 
      if(data[4]=="Noise - Vehicle"){
        V_tp14=V_tp14+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp14=C_tp14+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp14=S_tp14+1;
      }else if(data[4]=="Noise - Park"){
        P_tp14=P_tp14+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp14=HE_tp14+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp14=HW_tp14+1;
      }     
    }
    if(data[17]== "9PM"){
      append(fifx,x);
      append(fify,y); 
      if(data[4]=="Noise - Vehicle"){
        V_tp15=V_tp15+1;
      }else if(data[4]=="Noise - Commercial"){
        C_tp15=C_tp15+1;
      }else if(data[4]=="Noise - Street/Sidewalk"){
        S_tp15=S_tp15+1;
      }else if(data[4]=="Noise - Park"){
        P_tp15=P_tp15+1;
      }else if(data[4]=="Noise - Helicopter"){
        HE_tp15=HE_tp15+1;
      }else if(data[4]=="Noise - House of Worship"){
        HW_tp15=HW_tp15+1;
      }     
    }
  }


  slider = createSlider(1,15,5);
  slider.position(140, height/2-50);
  slider.size(1000,1200);

}


function draw(){


val = slider.value();
translate(width / 2, height / 2);
  imageMode(CENTER);

image(mapimg, 0, 0);
  fill(67,67,67,150);
  rect(140-width/2,height/2-120,1000,120);
  textStyle(BOLD);
fill(255);
textSize(30);
text("Compliant Type",20 - width / 2,160 - height / 2)


  if(val==1){
    for(var i=0;i<firstx.length;i++){
      noStroke();
      fill(255, 255, 0, 40);
      ellipse(firstx[i],firsty[i],ellSize,ellSize);
    }
    textSize(30);
    fill(255);
    text("7AM", 130-width/2, height/2-30); 
    textSize(25);
    text("Noise-Vehicle: "+V_tp1,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp1,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp1,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp1,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp1,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp1,20 - width / 2,400 - height / 2);
    fill(255, 255, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp1*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp1*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp1*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp1*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp1*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp1*factor,20);

  }else if(val==2){
    for(var i=0;i<secondx.length;i++){
      noStroke();
      fill(255, 230, 0, 40);
      ellipse(secondx[i],secondy[i],ellSize,ellSize);
    }

    fill(255);
    text("8AM", 201-width/2, height/2-30); 
    textSize(25);
    text("Noise-Vehicle: "+V_tp2,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp2,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp2,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp2,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp2,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp2,20 - width / 2,400 - height / 2);
    fill(255, 230, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp2*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp2*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp2*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp2*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp2*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp2*factor,20); 
  }else if(val==3){
    for(var i=0;i<thirdx.length;i++){
      noStroke();
      fill(255, 204, 0, 40);
      ellipse(thirdx[i],thirdy[i],ellSize,ellSize);
    } 
    fill(255);
    text("9AM", 272-width/2, height/2-30);

    textSize(25);
    text("Noise-Vehicle: "+V_tp3,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp3,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp3,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp3,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp3,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp3,20 - width / 2,400 - height / 2);
    fill(255, 204, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp3*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp3*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp3*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp3*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp3*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp3*factor,20);   
  }else if(val==4){
    for(var i=0;i<fourthx.length;i++){
      noStroke();
      fill(255, 187, 0, 40);
      ellipse(fourthx[i],fourthy[i],ellSize,ellSize);
    }
    fill(255);
    text("10AM", 344-width/2, height/2-30);
    textSize(25);
    text("Noise-Vehicle: "+V_tp4,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp4,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp4,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp4,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp4,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp4,20 - width / 2,400 - height / 2);
    fill(255, 187, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp4*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp4*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp4*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp4*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp4*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp4*factor,20);  
  }else if(val==5){
    for(var i=0;i<fifthx.length;i++){
      noStroke();
      fill(255, 170, 0, 40);
      ellipse(fifthx[i],fifthy[i],ellSize,ellSize);
    } 
    fill(255); 
    text("11AM", 415-width/2, height/2-30);  
    textSize(25);
    text("Noise-Vehicle: "+V_tp5,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp5,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp5,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp5,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp5,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp5,20 - width / 2,400 - height / 2);
    fill(255, 170, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp5*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp5*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp5*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp5*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp5*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp5*factor,20); 

  }else if(val==6){
    for(var i=0;i<sixx.length;i++){
      noStroke();
      fill(255, 153, 0, 40);
      ellipse(sixx[i],sixy[i],ellSize,ellSize);
    }
    fill(255);
    text("12PM", 486-width/2, height/2-30); 
    textSize(25);
    text("Noise-Vehicle: "+V_tp6,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp6,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp6,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp6,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp6,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp6,20 - width / 2,400 - height / 2);
    fill(255, 153, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp6*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp6*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp6*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp6*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp6*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp6*factor,20);  

  }else if(val==7){
    for(var i=0;i<sevenx.length;i++){
      noStroke();
      fill(255, 136, 0, 40);
      ellipse(sevenx[i],seveny[i],ellSize,ellSize);
    }
    fill(255);
    text("1PM", 557-width/2, height/2-30);
    textSize(25);
    text("Noise-Vehicle: "+V_tp7,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp7,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp7,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp7,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp7,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp7,20 - width / 2,400 - height / 2);
    fill(255, 136, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp7*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp7*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp7*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp7*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp7*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp7*factor,20);   

  }else if(val==8){
    for(var i=0;i<eightx.length;i++){
      noStroke();
      fill(255, 119, 0, 40);
      ellipse(eightx[i],eighty[i],ellSize,ellSize);
    }
    fill(255);
    text("2PM", 628-width/2, height/2-30);
    textSize(25);
    text("Noise-Vehicle: "+V_tp8,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp8,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp8,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp8,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp8,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp8,20 - width / 2,400 - height / 2);
    fill(255, 119, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp8*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp8*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp8*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp8*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp8*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp8*factor,20);   

  }else if(val==9){
    for(var i=0;i<ninex.length;i++){
      noStroke();
      fill(255, 102, 0, 40);
      ellipse(ninex[i],niney[i],ellSize,ellSize);
    }
    fill(255);
    text("3PM", 699-width/2, height/2-30); 
    textSize(25);
    text("Noise-Vehicle: "+V_tp9,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp9,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp9,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp9,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp9,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp9,20 - width / 2,400 - height / 2);
    fill(255, 102, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp9*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp9*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp9*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp9*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp9*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp9*factor,20);  

  }else if(val==10){
    for(var i=0;i<tenx.length;i++){
      noStroke();
      fill(255, 85, 0, 40);
      ellipse(tenx[i],teny[i],ellSize,ellSize);
    } 
    fill(255);
    text("4PM", 771-width/2, height/2-30); 
    textSize(25);
    text("Noise-Vehicle: "+V_tp10,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp10,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp10,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp10,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp10,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp10,20 - width / 2,400 - height / 2);
    fill(255, 85, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp10*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp10*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp10*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp10*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp10*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp10*factor,20);  

  }else if(val==11){
    for(var i=0;i<elex.length;i++){
      noStroke();
      fill(255, 68, 0, 40);
      ellipse(elex[i],eley[i],ellSize,ellSize);
    }
    fill(255);
    text("5PM", 842-width/2, height/2-30); 
    textSize(25);
    text("Noise-Vehicle: "+V_tp11,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp11,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp11,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp11,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp11,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp11,20 - width / 2,400 - height / 2);
    fill(255, 68, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp11*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp11*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp11*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp11*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp11*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp11*factor,20);  

  }else if(val==12){
    for(var i=0;i<twex.length;i++){
      noStroke();
      fill(255, 51, 0, 40);
      ellipse(twex[i],twey[i],ellSize,ellSize);
    } 
    fill(255);
    text("6PM", 913-width/2, height/2-30);
    textSize(25);
    text("Noise-Vehicle: "+V_tp12,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp12,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp12,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp12,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp12,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp12,20 - width / 2,400 - height / 2);
    fill(255, 51, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp12*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp12*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp12*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp12*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp12*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp12*factor,20);   

  }else if(val==13){
    for(var i=0;i<thirx.length;i++){
      noStroke();
      fill(255, 34, 0, 40);
      ellipse(thirx[i],thiry[i],ellSize,ellSize);
    }
    fill(255);
    text("7PM", 984-width/2, height/2-30);
    textSize(25);
    text("Noise-Vehicle: "+V_tp13,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp13,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp13,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp13,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp13,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp13,20 - width / 2,400 - height / 2);
    fill(255, 34, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp13*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp13*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp13*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp13*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp13*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp13*factor,20);   

  }else if(val==14){
    for(var i=0;i<forx.length;i++){
      noStroke();
      fill(255, 17, 0, 40);
      ellipse(forx[i],fory[i],ellSize,ellSize);
    } 
    fill(255);
    text("8PM", 1055-width/2, height/2-30);
    textSize(25);
    text("Noise-Vehicle: "+V_tp14,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp14,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp14,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp14,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp14,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp14,20 - width / 2,400 - height / 2);
    fill(255, 17, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp14*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp14*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp14*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp14*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp14*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp14*factor,20);  

  }else if(val==15){
    for(var i=0;i<fifx.length;i++){
      noStroke();
      fill(255, 0, 0, 40);
      ellipse(fifx[i],fify[i],ellSize,ellSize);
    }
    fill(255);
    text("9PM", 1126-width/2, height/2-30);  
    textSize(25);
    text("Noise-Vehicle: "+V_tp15,20 - width / 2,200 - height / 2);
    text("Noise-Commercial: "+C_tp15,20 - width / 2,240 - height / 2);
    text("Noise-Street/Sidewalk: "+S_tp15,20 - width / 2,280 - height / 2);
    text("Noise-Park: "+P_tp15,20 - width / 2,320 - height / 2);
    text("Noise-Helicopter: "+HE_tp15,20 - width / 2,360 - height / 2);
    text("Noise-House of Worship: "+HW_tp15,20 - width / 2,400 - height / 2);
    fill(255, 0, 0,40);
    rect(20 - width / 2,180 - height / 2,V_tp15*factor,20);
    rect(20 - width / 2,220 - height / 2,C_tp15*factor,20);
    rect(20 - width / 2,260 - height / 2,S_tp15*factor,20);
    rect(20 - width / 2,300 - height / 2,P_tp15*factor,20);
    rect(20 - width / 2,340 - height / 2,HE_tp15*factor,20);
    rect(20 - width / 2,380 - height / 2,HW_tp15*factor,20);

  } 



  fill(255); 
  textSize(40);
  text("Noise Compliant by Day Time", 20 - width / 2, 50 - height / 2);
  textStyle(BOLD);
  

}