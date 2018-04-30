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

var description = ["Battery Park City is a mainly residential 92-acre (37 ha) planned community on the west side of the southern tip of the island of Manhattan in New York City. More than one-third of the development is parkland.",
                   "Central Harlem has been a cultural and artistic mecca since the 1920's and the birth of the Harlem Renaissance where it gained notoriety for its diverse population and rich heritage. The neighborhood extends from the north end of Central Park at 110th Street to the Harlem River, and from 5th to St. Nicholas Avenues.",
                   "Central Harlem has been a cultural and artistic mecca since the 1920's and the birth of the Harlem Renaissance where it gained notoriety for its diverse population and rich heritage. The neighborhood extends from the north end of Central Park at 110th Street to the Harlem River, and from 5th to St. Nicholas Avenues.",
                   "Vibrant Chinatown is a densely populated neighborhood that draws foodies and tourists to its many Chinese and Southeast Asian restaurants for dumplings, pork buns and hand-pulled noodles. The busy sidewalks are packed with souvenir stores, bubble tea shops, and markets selling everything from fresh and dried fish to herbs and spices.",
                   "Adjacent to the theater district, Hell's Kitchen has long been the home of actors and arts organizations. It's also a hub of gay culture. Pre- and post-theater crowds from nearby Broadway, tourists from Times Square and workers from office high-rises jam the international restaurants, bars and pubs along 8th and 9th avenues. Farther west, along the water, Hudson River Park has landscaped walkways.",
                   "Also known as “El Barrio,” East Harlem is a vibrant showcase for Puerto Rican culture. Foodies pilgrimage to its mix of Latin American and Caribbean restaurants, as well as to iconic Italian restaurants like Rao’s and Patsy’s pizzeria. Exhibits at El Museo del Barrio reflect the local culture, as do the neighborhood's colorful street art and murals, some made by famous graffiti artists like Keith Haring.",
                   "Also known as “El Barrio,” East Harlem is a vibrant showcase for Puerto Rican culture. Foodies pilgrimage to its mix of Latin American and Caribbean restaurants, as well as to iconic Italian restaurants like Rao’s and Patsy’s pizzeria. Exhibits at El Museo del Barrio reflect the local culture, as do the neighborhood's colorful street art and murals, some made by famous graffiti artists like Keith Haring.",
                   "The East Village is known for its happening nightlife. Old-school bars, music venues and performance spaces share the streets with posh cocktail lounges, hip restaurants. Daytime sees a more laid-back crowd browsing boutiques, vintage shops and tattoo parlors, and dining at casual cafes. Once the epicenter of the city's punk scene, St. Mark's Place now features of-the-moment fast-food eateries and souvenir shops.",
                   "Gramercy Park is a quiet, well-to-do residential area with brownstones and upscale apartment buildings on tree-lined streets. Fashionable restaurants draw affluent crowds, and historic bars host a buzzy after-work scene. Stylish hotels dot the area. Irving Plaza, a concert venue, features an eclectic line-up of bands. At the area’s center is a private, gated park, from which the neighborhood takes its name.",
                   "Hamilton Heights is a neighborhood in the northern part of Manhattan, which is a borough of New York City. It lies between Manhattanville to the south and Washington Heights to the north. It contains the sub-neighborhood of Sugar Hill.",
                   "Hudson Yards is a large-scale redevelopment program planned, funded and constructed under a set of agreements among the State of New York, New York City, and the Metropolitan Transportation Authority, with the aim of expanding New York City's Midtown Manhattan Business District westward to the Hudson River.",
                   "Lenox Hill is a neighborhood on Manhattan's Upper East Side. It forms the lower section of the Upper East Side, closest to Midtown. The neighborhood ranges from East 60th Street to East 77th Street south to north, by East River to the east, and by Park Avenue to the west.",
                   "Lincoln Square is the name of both a square and the surrounding neighborhood within the Upper West Side of the New York City borough of Manhattan. Lincoln Square is centered on the intersection of Broadway and Columbus Avenue, between West 65th and West 66th streets. The neighborhood is bounded by Columbus Avenue and Amsterdam Avenue to the east and west, and West 66th and 63rd Street to the north and south.",
                   "The eclectic Lower East Side is where gritty alleys and tenement-style buildings mix with upscale apartments and chic boutiques. Nighttime draws hip, young crowds to the area's trendy bars, music venues and restaurants. The neighborhood's Jewish heritage lives on through Orchard Street's Lower East Side Tenement Museum and old-world fabric stores, as well as traditional delis such as Katz's and Russ & Daughters.",
                   "Manhattanville (also known as West Harlem or West Central Harlem)[1] is a neighborhood in the New York City borough of Manhattan bordered on the north and south by West 134th Street and West 122nd Street, respectively; on the west by Morningside Park and on the east by Adam Clayton Powell Jr. Boulevard.",
                   "Marble Hill is the northernmost neighborhood in the New York City borough of Manhattan. It is the only Manhattan neighborhood on the mainland of North America. Marble Hill was occupied as a Dutch colonial settlement in 1646, and gained its current name in 1891 because of marble deposits underneath the neighborhood.",
                   "Midtown Manhattan, or Midtown, represents the central lengthwise portion of the borough and island of Manhattan in New York City. Midtown is home to some of the city's most iconic buildings, including the Empire State Building, the Chrysler Building, and the headquarters of the United Nations, and it contains world-renowned commercial zones such as Rockefeller Center, Broadway, and Times Square.",
                   "Morningside Heights is bounded by Morningside Park at Morningside Drive to the east, Manhattanville at 125th Street to the north, Manhattan Valley at 110th Street to the south, and Riverside Park at Riverside Drive to the west.[10][11] The main thoroughfare is Broadway.",
                   "Murray Hill is a neighborhood in midtown Manhattan in New York City. In 1999, Manhattan Community Board 6 – of which Murray Hill is part – defined the boundaries as East 34th Street to the south, East 40th Street to the north, Madison Avenue to the west, and East River to the east.",
                   " ",
                   "Designer boutiques, fancy chain stores and high-end art galleries make trendy SoHo a top shopping destination, especially for out-of-towners. Known for its elegant cast-iron-facades and cobblestone streets, the neighborhood is also an atmospheric backdrop for fashionable crowds clustering at high-end restaurants and nightlife hotspots. During the day, street vendors sell everything from jewelry to original artwork.",
                   "Stuyvesant Town–Peter Cooper Village is a large, post-World War II private residential development, on the east side of the New York City borough of Manhattan.",
                   "Famed skyscrapers like the art deco Chrysler Building and the nearby Empire State Building define the skyline of busy Midtown East. Well-heeled shoppers head to 5th Avenue's big-name luxury stores, while tourists visit landmarks like Grand Central Terminal train station and the UN Headquarters building. The area is home to many businesses, including advertising firms on Madison Avenue, plus residential high-rises.",
                   "The posh, residential Upper East Side is known for its wealthy denizens, fancy restaurants and designer shops along Madison Avenue. It's a pretty neighborhood, with a mix of classic brownstones and upscale high-rises. Museum Mile, a stretch of 5th Avenue next to Central Park, draws crowds to cultural institutions that include the Metropolitan Museum of Art, the Solomon R. Guggenheim Museum and El Museo del Barrio.",
                   "The Upper West Side is home to Lincoln Center, which hosts performing-arts institutions like the Metropolitan Opera and New York City Ballet. Amid the grand apartment buildings of Central Park West, the American Museum of Natural History presents everything from dinosaurs to outer-space exhibits. On weekends, families emerge from stately brownstones on quiet side streets to line up for brunch or bagels.",
                   "Washington Heights is a neighborhood in the northern portion of the New York City borough of Manhattan. The area, with over 150,000 inhabitants as of 2010, is named for Fort Washington, a fortification constructed at the highest point on the island of Manhattan by Continental Army troops during the American Revolutionary War, to defend the area from the British forces.",
                   "Washington Heights is a neighborhood in the northern portion of the New York City borough of Manhattan. The area, with over 150,000 inhabitants as of 2010, is named for Fort Washington, a fortification constructed at the highest point on the island of Manhattan by Continental Army troops during the American Revolutionary War, to defend the area from the British forces.",
                   "The West Village draws fashionable crowds to its designer boutiques and trendy restaurants. Quaint streets, some still cobblestoned, are lined with Federal-style townhouses and dotted with public squares. Notable venues include the Village Vanguard jazz club and the Stonewall Inn bar, site of the 1969 riots that launched the gay rights movement. The historically arty area also has piano bars, cabarets and theaters.",
                   "Yorkville is a neighborhood in the Upper East Side of Manhattan, New York City. Its southern boundary is East 79th Street, its northern East 96th Street, its western Third Avenue, and its eastern the East River."];

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
    East_Harlem_North = loadStrings('EastHarlemNorth.csv','csv','head');
    East_Harlem_South = loadStrings('EastHarlemSouth.csv','csv','head');
    East_Village = loadStrings('EastVillage.csv','csv','head');
    Gramery = loadStrings('Gramercy.csv','csv','head');
    Hamilton_Heights = loadStrings('HamiltonHeights.csv','csv','head');
    Hudson_Yards = loadStrings('HudsonYards.csv','csv','head');
    Lenox_Hill = loadStrings('LenoxHillRooseveltIsland.csv','csv','head');
    Lincoln_Square = loadStrings('LincolnSquare.csv','csv','head');
    Lower_East_Side = loadStrings('LowerEastSide.csv','csv','head');
    Manhattan_ville = loadStrings('Manhattanville.csv','csv','head');
    Marble_Hill_Inwood = loadStrings('MarbleHillInwood.csv','csv','head');
    Midtown_South = loadStrings('Midtown.csv','csv','head');
    Morningside_Height = loadStrings('MorningsideHeights.csv','csv','head');
    Murray_Hill = loadStrings('MurrayHill.csv','csv','head');
    park_etc = loadStrings('parketc.csv','csv','head');
    Soho = loadStrings('Soho.csv','csv','head');
    Cooper_Village = loadStrings('CooperVillage.csv','csv','head');
    Turtle_Bay = loadStrings('TurtleBay.csv','csv','head');
    Upper_East_Side = loadStrings('UpperEastSide.csv','csv','head');  
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
                image(imgHere[j+1], 1100,90 + i*x, imgHere[j+1].width/2, imgHere[j+1].height/2);
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
    
        for (var i = 1; i < dataHere.length-1; i++) {
            var data1 = dataHere[i].split(/,/);
            var data2 = dataHere[25].split(/,/);

            strokeWeight(data1[1]/factor);                
                textSize(80);
                textAlign(LEFT);
            if (mouseX > 800 && mouseX < 980 && mouseY > 180+j*x && mouseY < 202+j*x) {
                noStroke();
                fill(204,0,0);
                
                text(data2[1], 75, 500+j*x);
                stroke(204,0,0);

            } else {
                stroke(0,100);
            }
            line(795, pos1_1+j*x, 370, pos1+j*x);
            strokeWeight(data1[2]/factor);
            if (mouseX > 800 && mouseX < 980 && mouseY > 180+x2+j*x && mouseY < 202+x2+j*x) {
                noStroke();
                fill(204,0,0);
                text(data2[2], 75, 500+j*x);
                stroke(204,0,0);
                
            } else {
                stroke(0,100);
            }
            line(795, pos2_1+j*x, 370, pos1+j*x);  
            strokeWeight(data1[3]/factor);
            if (mouseX > 800 && mouseX < 980 && mouseY > 180+x2*2+j*x && mouseY < 202+x2*2+j*x) {
                noStroke();
                fill(204,0,0);
                text(data2[3], 75, 500+j*x);
                stroke(204,0,0);
                
            } else {
                stroke(0,100);
            }
            line(795, pos3_1+j*x, 370, pos1+j*x); 
            strokeWeight(data1[4]/factor);
            if (mouseX > 800 && mouseX < 980 && mouseY > 180+x2*3+j*x && mouseY < 202+x2*3+j*x) {
                noStroke();
                fill(204,0,0);
                text(data2[4], 75, 500+j*x);
                stroke(204,0,0);
                
            } else {
                stroke(0,100);
            }
            line(795, pos4_1+j*x, 370, pos1+j*x); 
            strokeWeight(data1[5]/factor);
            if (mouseX > 800 && mouseX < 980 && mouseY > 180+x2*4+j*x && mouseY < 202+x2*4+j*x) {
                noStroke();
                fill(204,0,0);
                text(data2[5], 75, 500+j*x);
                stroke(204,0,0);
                
            } else {
                stroke(0,100);
            }
            line(795, pos5_1+j*x, 370, pos1+j*x); 
            strokeWeight(data1[6]/factor);
            if (mouseX > 800 && mouseX < 980 && mouseY > 180+x2*5+j*x && mouseY < 202+x2*5+j*x) {
                noStroke();
                fill(204,0,0);
                text(data2[6], 75, 500+j*x);
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
    text("Hang over your mouse to explore the distribution of each type of complaint in different neighborhood.", 800,50,180,100);
    for(var i=0; i<29; i++){
        text(description[i], 75, 150+i*x, 200,200);
    }
    
    
}















