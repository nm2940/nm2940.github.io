var ww = window.innerWidth;
var hh = 15000;

var complaint_commercial;
var complaint_helicopter;
var complaint_house;
var complaint_park;
var complaint_street;
var complaint_vehicle;


var neighborhood = ["Battery Park City", "Central Halem North", "Central Harlem South", "Chinatown", "Clinton",
                    "East Harlem North", "East Harlem South", "East Village", "Gramercy", "Hamilton Heights", 
                    "Hudson Yards", "Lenox Hill", "Lincoln Square", "Lower East Side", "Manhattanville",
                    "Marble Hill-Inwood", "Midtown-Midtown South", "Morningside Heights", "Murray Hill-Kips Bay", 
                    "park-cemetery-etc","Soho","Stuyvesant Town-Copper Village", "Turtle Bay", "Upper East Side", 
                    "Upper West Side", "Washington Heights North", "Washington Heights South", "West Village",
                    "Yorkville"];
var time = ["1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", 
            "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM", "12AM"];

function preload(){

    complaint_commercial = loadStrings('complaint_commercial.csv','csv','head');
    complaint_helicopter = loadStrings('complaint_helicopter.csv','csv','head');
    complaint_house = loadStrings('complaint_house.csv','csv','head');
    complaint_park = loadStrings('complaint_park.csv','csv','head');
    complaint_street = loadStrings('complaint_street.csv','csv','head');
    complaint_vehicle = loadStrings('complaint_vehicle.csv','csv','head');

}


function setup() {

    createCanvas(ww, hh);
}


function draw(){

    background(255);
    textFont("Helvetica");
    textSize(32);
    textAlign(CENTER);
    var h = 100;
    for(var i=0; i<29; i++){
    	fill(204,0,0);
    	noStroke();
    	rect(350,h-32,400,40);
    	fill(255);
    	strokeWeight(2);
    	text(neighborhood[i], 550, h);
    	h=h+500;
    }


    var h2 = 200;
    for(var i=0; i<24; i++){
    	fill(210,210,210);
    	noStroke();
    	rect(100, h2-32, 80, 40);
    	fill(255);
    	strokeWeight(2);
    	text(time[i], 140, h2);
    	h2 = h2 + 600;
    }

    stroke(220,220,220);
    strokeWeight(5);
    line(0,1/2*hh,ww,1/2*hh);

    fill(220,220,220);
    noStroke();
    var pos1 = ceil(ww/29);
    for(i=0; i< ceil(ww/29); i++){
    	var pos2 = 1/2*hh;
    	for(j=0; j< 50; j++){
    		rect(pos1,pos2,3,10);
    		pos2 = pos2-15;
    	}      
    	pos1 = pos1 + ceil(ww/29);
    }
    


    

}















