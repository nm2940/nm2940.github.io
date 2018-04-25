var ww = 1800;
var hh = 13980;


var neighborhood = ["Battery Park City", "Central Halem North", "Central Harlem South", "Chinatown", "Clinton",
                    "East Harlem North", "East Harlem South", "East Village", "Gramercy", "Hamilton Heights", 
                    "Hudson Yards", "Lenox Hill", "Lincoln Square", "Lower East Side", "Manhattanville",
                    "Marble Hill-Inwood", "Midtown-Midtown South", "Morningside Heights", "Murray Hill-Kips Bay", 
                    "Park-cemetery-etc","Soho","Copper Village", "Turtle Bay", "Upper East Side", 
                    "Upper West Side", "Washington Heights North", "Washington Heights South", "West Village",
                    "Yorkville"];
var time = ["1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", 
            "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM", "12AM"];
var complaintType = ["Noise_Commercial", "Noise_Helicopter", "Noise_House", "Noise_Park", "Noise_Street", "Noise_Vehicle"];


var data = [];
var Battery_Park = [];
var Central_Harlem_North = [];
var Central_Harlem_South = [];
var Chinatown = [];
var Clinton = [];
var East_Harlem_North = [];
var East_Harlem_South = [];
var East_Village = [];
var Gramery = [];
var Hamilton_Heights = [];
var Hudson_Yards = [];
var Lenox_Hill = [];
var Lincoln_Square = [];
var Lower_East_Side = [];
var Manhattan_ville = [];
var Marble_Hill_Inwood = [];
var Midtown_South = [];
var Morningside_Height = [];
var Murray_Hill = [];
var park_etc = [];
var Soho = [];
var Cooper_Village = [];
var Turtle_Bay = [];
var Upper_East_Side = [];
var Upper_West_Side = [];
var Washington_Height_North = [];
var Washington_Height_South = [];
var WestVilage = [];
var Yorkville = [];


var img = [];
var img_batteryPark = [];
var img_centralHarlemNorth = [];
var img_centralHarlemSouth = [];
var img_chinatown = [];
var img_clinton = [];
var img_EastHarlemNorth = [];
var img_EastHarlemSouth = [];
var img_EastVillage = [];
var img_Gramercy = [];
var img_HamiltonHeights = [];
var img_HudsonYard = [];
var img_LenoxHill = [];
var img_LincolnSquare = [];
var img_LowerEastSide = [];
var img_Manhattanville = [];
var img_MarbleHillInwood = [];
var img_MidtownSouth = [];
var img_MorningsideHeight = [];
var img_MurrayHill = [];
var img_parketc = [];
var img_Soho = [];
var img_CooperVillage = [];
var img_TurtleBay = [];
var img_UpperEastSide = [];
var img_UpperWestSide = [];
var img_WashingtonHeightNorth = [];
var img_WashingtonHeightSouth = [];
var img_WestVillage = [];
var img_Yorkville = [];

function preload(){

    Battery_Park = loadStrings('Battery_Park.csv','csv','head');
    Central_Harlem_North = loadStrings('Central_Harlem_North.csv','csv','head');
    Central_Harlem_South = loadStrings('Central_Harlem_South.csv','csv','head');
    Chinatown = loadStrings('Chinatown.csv','csv','head');
    Clinton = loadStrings('Clinton.csv','csv','head');

    East_Harlem_North = loadStrings('Clinton.csv','csv','head');
    East_Harlem_South = loadStrings('Clinton.csv','csv','head');
    East_Village = loadStrings('Central_Harlem_North.csv','csv','head');
    Gramery = loadStrings('Clinton.csv','csv','head');
    Hamilton_Heights = loadStrings('Clinton.csv','csv','head');
    Hudson_Yards = loadStrings('Clinton.csv','csv','head');
    Lenox_Hill = loadStrings('Central_Harlem_North.csv','csv','head');
    Lincoln_Square = loadStrings('Clinton.csv','csv','head');
    Lower_East_Side = loadStrings('Clinton.csv','csv','head');
    Manhattan_ville = loadStrings('Clinton.csv','csv','head');
    Marble_Hill_Inwood = loadStrings('Clinton.csv','csv','head');
    Midtown_South = loadStrings('Clinton.csv','csv','head');
    Morningside_Height = loadStrings('Clinton.csv','csv','head');
    Murray_Hill = loadStrings('Central_Harlem_North.csv','csv','head');
    park_etc = loadStrings('Clinton.csv','csv','head');
    Soho = loadStrings('Clinton.csv','csv','head');
    Cooper_Village = loadStrings('Clinton.csv','csv','head');
    Turtle_Bay = loadStrings('Clinton.csv','csv','head');
    Upper_East_Side = loadStrings('UpperWestSide.csv','csv','head');
    
    Upper_West_Side = loadStrings('UpperWestSide.csv','csv','head');
    Washington_Height_North = loadStrings('WashingtonHeightsNorth.csv','csv','head');
    Washington_Height_South = loadStrings('WashingtonHeightsSouth.csv','csv','head');
    WestVilage = loadStrings('WestVillage.csv','csv','head');
    Yorkville = loadStrings('Yorkville.csv','csv','head');



    data.push(Battery_Park);
    data.push(Central_Harlem_North);
    data.push(Central_Harlem_South);
    data.push(Chinatown);
    data.push(Clinton);
    data.push(East_Harlem_North);
    data.push(East_Harlem_South);
    data.push(East_Village);
    data.push(Gramery);
    data.push(Hamilton_Heights);
    data.push(Hudson_Yards);
    data.push(Lenox_Hill);
    data.push(Lincoln_Square);
    data.push(Lower_East_Side);
    data.push(Manhattan_ville);
    data.push(Marble_Hill_Inwood);
    data.push(Midtown_South);
    data.push(Morningside_Height);
    data.push(Murray_Hill);
    data.push(park_etc);
    data.push(Soho);
    data.push(Cooper_Village);
    data.push(Turtle_Bay);
    data.push(Upper_East_Side);
    data.push(Upper_West_Side);
    data.push(Washington_Height_North);
    data.push(Washington_Height_South);
    data.push(WestVilage);
    data.push(Yorkville);


    
    for(var i=1;i<=6;i++){
    	img_batteryPark[i] = loadImage("IMG/"+ i+".jpg");
    }
    for(var i=1;i<=6;i++){
    	img_centralHarlemNorth[i] = loadImage("IMG/"+"2_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
    	img_centralHarlemSouth[i] = loadImage("IMG/"+"3_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
    	img_chinatown[i] = loadImage("IMG/"+"4_"+i+".jpg");
    }
    for(var i=1;i<=6;i++){
    	img_clinton[i] = loadImage("IMG/"+"5_"+i+".jpg");
    }
    for(var i=1;i<=6;i++){
        img_EastHarlemNorth[i] = loadImage("IMG/"+"6_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_EastHarlemSouth[i] = loadImage("IMG/"+"7_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_EastVillage[i] = loadImage("IMG/"+"8_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_Gramercy[i] = loadImage("IMG/"+"9_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_HamiltonHeights[i] = loadImage("IMG/"+"10_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_HudsonYard[i] = loadImage("IMG/"+"11_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_LenoxHill[i] = loadImage("IMG/"+"12_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_LincolnSquare[i] = loadImage("IMG/"+"13_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_LowerEastSide[i] = loadImage("IMG/"+"14_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_Manhattanville[i] = loadImage("IMG/"+"15_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_MarbleHillInwood[i] = loadImage("IMG/"+"16_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_MidtownSouth[i] = loadImage("IMG/"+"17_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_MorningsideHeight[i] = loadImage("IMG/"+"18_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_MurrayHill[i] = loadImage("IMG/"+"19_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_parketc[i] = loadImage("IMG/"+"20_"+i+".jpg");
    }
    for(var i=1;i<=6;i++){
        img_Soho[i] = loadImage("IMG/"+"21_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_CooperVillage[i] = loadImage("IMG/"+"22_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_TurtleBay[i] = loadImage("IMG/"+"23_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_UpperEastSide[i] = loadImage("IMG/"+"24_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_UpperWestSide[i] = loadImage("IMG/"+"25_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_WashingtonHeightNorth[i] = loadImage("IMG/"+"26_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_WashingtonHeightSouth[i] = loadImage("IMG/"+"27_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_WestVillage[i] = loadImage("IMG/"+"28_"+i+".jpg");
    } 
    for(var i=1;i<=6;i++){
        img_Yorkville[i] = loadImage("IMG/"+"29_"+i+".jpg");
    }
    img.push(img_batteryPark);
    img.push(img_centralHarlemNorth);
    img.push(img_centralHarlemSouth);
    img.push(img_chinatown);
    img.push(img_clinton);
    img.push(img_EastHarlemNorth);
    img.push(img_EastHarlemSouth);
    img.push(img_EastVillage);
    img.push(img_Gramercy);
    img.push(img_HamiltonHeights);
    img.push(img_HudsonYard);
    img.push(img_LenoxHill);
    img.push(img_LincolnSquare);
    img.push(img_LowerEastSide);
    img.push(img_Manhattanville);
    img.push(img_MarbleHillInwood);
    img.push(img_MidtownSouth);
    img.push(img_MorningsideHeight);
    img.push(img_MurrayHill);
    img.push(img_parketc);
    img.push(img_Soho);
    img.push(img_CooperVillage);
    img.push(img_TurtleBay);
    img.push(img_UpperEastSide);
    img.push(img_UpperWestSide);
    img.push(img_WashingtonHeightNorth);
    img.push(img_WashingtonHeightSouth);
    img.push(img_WestVillage);
    img.push(img_Yorkville);
}


function setup() {
    createCanvas(ww, hh);
}


function draw(){

    background(255);
    textFont("Helvetica");
    textSize(20);
    textAlign(CENTER);
    var h = 100;

    for(var i=0; i<29; i++){
    	fill(204,0,0);
    	noStroke();
    	rect(50,h-20,250,22);
    	fill(255);
    	strokeWeight(2);
    	text(neighborhood[i], 175, h-3);
    	h=h+480;
    }

    fill(220,220,220, 150);
    noStroke();
    rect(320,40, 50,13980);
    var h2=80;
    for(var i=0; i<29; i++){
    	stroke(0,150);
    	strokeWeight(3);
    	line(320, h2, 370, h2);
    	noStroke();
    	fill(0,150);
    	textSize(18);
    	textAlign(CENTER);
    	text("11PM", 345, h2-5);
    	text("12AM", 345, h2+20);
    	var h3=h2+120;
    	for(var j=0; j<3; j++){
    		stroke(0,150);
    		strokeWeight(1);
    		line(330, h3, 360, h3);
    		h3=h3+120;
    	}
    	var h4=h2+20;
    	for(var j=0; j<23; j++){
    		stroke(0,100);
    		strokeWeight(.5);
    		line(330, h4, 360, h4); 
    		h4=h4+20;   		
    	}
       
        var imgHere = img[i];
    	var h5=h2+100;
    	var x=480;
    	for(var j=0; j<6; j++){
            if (mouseX > 800 && mouseX < 980 && mouseY > h5 && mouseY < h5+22) {
            	fill(204,0,0);
                image(imgHere[j+1], 1000,150 + i*x, imgHere[j+1].width/3, imgHere[j+1].height/3);
            } else {
                fill(0,100);
            }   
            noStroke(); 		
    		rect(800, h5, 180, 22);
    		fill(255);
    		textAlign(CENTER);
    		text(complaintType[j], 890, h5+17);
    		h5=h5+50;
    	}
    	h2=h2+480;
    }


    for(var j=0; j<29; j++){

        var dataHere = [];
        dataHere = data[j];

        var factor=10;
        var pos1=80;
        var pos1_1=190;
        var pos2_1=240;
        var pos3_1=290;
        var pos4_1=340;
        var pos5_1=390;
        var pos6_1=440;
        x2=50;
        x=480;

    
        for (var i = 1; i < dataHere.length; i++) {
            var data1 = dataHere[i].split(/,/);
            strokeWeight(data1[1]/factor);
            if (mouseX > 800 && mouseX < 980 && mouseY > 180+j*x && mouseY < 202+j*x) {
                stroke(204,0,0);
            } else {
                stroke(0,100);
            }
            line(795, pos1_1+j*x, 370, pos1+j*x);
            strokeWeight(data1[2]/factor);
            if (mouseX > 800 && mouseX < 980 && mouseY > 180+x2+j*x && mouseY < 202+x2+j*x) {
                stroke(204,0,0);
            } else {
                stroke(0,100);
            }
            line(795, pos2_1+j*x, 370, pos1+j*x);  
            strokeWeight(data1[3]/factor);
            if (mouseX > 800 && mouseX < 980 && mouseY > 180+x2*2+j*x && mouseY < 202+x2*2+j*x) {
                stroke(204,0,0);
            } else {
                stroke(0,100);
            }
            line(795, pos3_1+j*x, 370, pos1+j*x); 
            strokeWeight(data1[4]/factor);
            if (mouseX > 800 && mouseX < 980 && mouseY > 180+x2*3+j*x && mouseY < 202+x2*3+j*x) {
                stroke(204,0,0);
            } else {
                stroke(0,100);
            }
            line(795, pos4_1+j*x, 370, pos1+j*x); 
            strokeWeight(data1[5]/factor);
            if (mouseX > 800 && mouseX < 980 && mouseY > 180+x2*4+j*x && mouseY < 202+x2*4+j*x) {
                stroke(204,0,0);
            } else {
                stroke(0,100);
            }
            line(795, pos5_1+j*x, 370, pos1+j*x); 
            strokeWeight(data1[6]/factor);
            if (mouseX > 800 && mouseX < 980 && mouseY > 180+x2*5+j*x && mouseY < 202+x2*5+j*x) {
                stroke(204,0,0);
            } else {
                stroke(0,100);
            }
            line(795, pos6_1+j*x, 370, pos1+j*x);       
            pos1=pos1+20; 
        }
    }
    
    fill(0,150);
    noStroke();
    textAlign(LEFT);
    textSize(12);
    text("Battery Park City is a mainly residential 92-acre (37 ha) planned community on the west side of the southern tip of the island of Manhattan in New York City. More than one-third of the development is parkland.", 75, 150, 200,200);

}















