let PoppinsMedium;
let PoppinsBold;
let PoppinsSemiBold;

function preload(){
  PoppinsBold = loadFont("assets/Fonts/Poppins-Bold.ttf");
  PoppinsSemiBold = loadFont("assets/Fonts/Poppins-SemiBold.otf");
  PoppinsMedium = loadFont("assets/Fonts/Poppins-Medium.otf");
}  

 let Intro = "Hey! und dies ist mein Portfolio und ich liebe liebe Design und ich brauch ein Praktikum. es gibt gute gründe mich zu nehmen. Ich liebe Design";
 let titel = ["Kunst", "Titelzwei", "teitel anders", "noch ein titel","teitel anders", "noch ein titel"]


let Projektanzahl= 1;

let slideanzahl1= 3;

let videoIndexprojet1 = 0;
let videoIndexprojet2 = 0;
let videoIndexprojet3 = 0;
let videoIndexprojet4 = 0;
// let videoIndexprojet5 = 0;

let v;

//////////////////////////////Layout
let grid = {

  marginleft: window.innerWidth/160, 
  marginright: (window.innerWidth/160)*159,

  margintop: window.innerHeight/20.8,
  columw: window.innerWidth/(1280/98), 

  roww: window.innerHeight/9.6744186047,
  gutterwc: window.innerWidth/160,
  gutterwr: window.innerHeight/33.28
}

let column = {
  eins:   grid.marginleft,
  zwei:   grid.marginleft + grid.columw * 1  + grid.gutterwc * 1,
  drei:   grid.marginleft + grid.columw * 2  + grid.gutterwc * 2,
  vier:   grid.marginleft + grid.columw * 3  + grid.gutterwc * 3,
  fünf:   grid.marginleft + grid.columw * 4  + grid.gutterwc * 4,
  sechs:  grid.marginleft + grid.columw * 5  + grid.gutterwc * 5,
  sieben: grid.marginleft + grid.columw * 6  + grid.gutterwc * 6,
  acht:   grid.marginleft + grid.columw * 7  + grid.gutterwc * 7,
  neun:   grid.marginleft + grid.columw * 8  + grid.gutterwc * 8,
  zehn:   grid.marginleft + grid.columw * 9  + grid.gutterwc * 9,
  elf:    grid.marginleft + grid.columw * 10 + grid.gutterwc * 10,
  zwölf:  grid.marginleft + grid.columw * 11 + grid.gutterwc * 11
}

//////////////////////////////Videos, Fotos
let schaubildVideo=[];
let w=0;
let h=0;

/////////////////////////////Augen
let scrollanfangauge = 0.1 * window.innerHeight;
let scrollendeauge = 0.5 * window.innerHeight;

let scrollanfangaugeich = 0.5 * window.innerHeight;
let scrollendeaugeich = window.innerHeight;

let augengrosse = grid.columw;
let augenXich = column.zwei + augengrosse + grid.gutterwc/2;
let augenX = grid.marginright - (grid.columw + grid.gutterwc)- augengrosse - grid.gutterwc/2;
let puppilengrosse = augengrosse * 0.5;
let pupilOffset;

let y;
let yanders;


let zielY = grid.columw/2+grid.gutterwc;
let screen3Start = window.innerHeight * 2.5;



onresize = (event) => {
     resizeCanvas(window.innerWidth, window.innerHeight);

      //Layout
        //Grid
        // grid.marginleft= window.innerWidth/32; 
        // grid.marginright= (window.innerWidth/32)*31;
        // grid.margintop= window.innerHeight/20.8;

        // grid.columw= (window.innerWidth/256)* 57; 
        // grid.roww= window.innerHeight/9.6744186047;
        // grid.gutterwc= (window.innerWidth/256)* 4;
        // grid.gutterwr= window.innerHeight/33.28;

        grid.marginleft= window.innerWidth/160;

        // marginright: (window.innerWidth/32)*31,
        grid.marginright= (window.innerWidth/160)*159;

        grid.margintop= window.innerHeight/20.8;

        // columw: (window.innerWidth/256)* 57, 
        grid.columw = window.innerWidth/(1280/98); 

        grid.roww= window.innerHeight/9.6744186047;

        // gutterwc: (window.innerWidth/256)* 4,
        grid.gutterwc= window.innerWidth/160;

        grid.gutterwr= window.innerHeight/33.28;

        //Column
        column.eins= grid.marginleft;
        column.zwei= grid.marginleft+ grid.columw + grid.gutterwc; 
        column.drei= grid.marginleft+ grid.columw * 2 + grid.gutterwc * 2;
        column.vier= grid.marginleft+ grid.columw * 3 + grid.gutterwc * 3;

        row.eins= window.innerHeight/20.8;
        row.zwei= grid.margintop+ grid.roww;
        row.drei= grid.margintop+ grid.roww + grid.gutterwr;
        row.vier= grid.margintop+ grid.roww*2 + grid.gutterwr;
        row.fünf= grid.margintop+ grid.roww*2 + grid.gutterwr*2;
        row.sechs= grid.margintop+ grid.roww*3 + grid.gutterwr*2;
        row.sieben= grid.margintop+ grid.roww*3 + grid.gutterwr*3;
        row.acht= grid.margintop+ grid.roww*4 + grid.gutterwr*3;
        row.neun= grid.margintop+ grid.roww*4 + grid.gutterwr*4;
        row.zehn= grid.margintop+ grid.roww*5 + grid.gutterwr*4;
        row.elf= grid.margintop+ grid.roww*5 + grid.gutterwr*5;
        row.zwölf= grid.margintop+ grid.roww*6 + grid.gutterwr*5;
        row.dreizehn= grid.margintop+ grid.roww*6 + grid.gutterwr*6;
        row.vierzehn= grid.margintop+ grid.roww*7 + grid.gutterwr*6;

      //Augen
        scrollanfangauge = 0.1 * window.innerHeight;
        scrollendeauge = 0.5 * window.innerHeight;

        scrollanfangaugeich = 0.5 * window.innerHeight;
        scrollendeaugeich = window.innerHeight;

        augengrosse = window.innerWidth/16;
        augenXich = grid.marginleft + augengrosse *1.1;
        augenX = grid.marginright - augengrosse* 1.1;
        puppilengrosse = augengrosse * 0.5;
}


function resize(){

  createCanvas(window.innerWidth,window.innerHeight)
}

function setup() {
  document.body.style.height =  `${ (Projektanzahl * 100)}vh`;
  createCanvas(windowWidth, windowHeight);

  const buttonprojekt1 = document.getElementById("buttonprojekt1");
  buttonprojekt1.addEventListener("click", () => {
    toggleVideobuttonprojekt1();
  });

  // const buttonprojekt2 = document.getElementById("buttonprojekt2");
  // buttonprojekt2.addEventListener("click", () => {
  //   toggleVideobuttonprojekt2();
  // });

  // const buttonprojekt3 = document.getElementById("buttonprojekt3");
  // buttonprojekt3.addEventListener("click", () => {
  // toggleVideobuttonprojekt3();
  // });

  // const buttonprojekt4 = document.getElementById("buttonprojekt4");
  // buttonprojekt4.addEventListener("click", () => {
  // toggleVideobuttonprojekt4();
  // });

  document.querySelectorAll(".sponti").forEach((el, index) => {
  el.classList.toggle("active", index === videoIndexprojet1);
});

  // document.getElementById(`textsponti${videoIndexprojet1}`).style.visibility = "visible";

  // const buttonprojekt5 = document.getElementById("buttonprojekt5");
  // buttonprojekt5.addEventListener("click", () => {
  // toggleVideobuttonprojekt5();
  // });

    schaubildVideo[0] = createVideo("assets/Projekte/Design Projekte/Sponti App/Screenrec_weiss.mov", () => {
    schaubildVideo[0].loop();
  });
  schaubildVideo[0].elt.muted = true;
  schaubildVideo[0].hide();

  schaubildVideo[1] = createVideo("assets/Projekte/Design Projekte/Mein Name/Der Blick durch all meine Namen.mp4", () => {
    schaubildVideo[1].loop();
  });
  schaubildVideo[1].elt.muted = true;
  schaubildVideo[1].hide();

  schaubildVideo[2] = createVideo("assets/Projekte/Design Projekte/ich muss ma kritzeln -Latrinaliakollektion/zumsehen/Website video.mp4", () => {
  schaubildVideo[2].loop();
  });
  schaubildVideo[2].elt.muted = true;
  schaubildVideo[2].hide();

  schaubildVideo[3] = createVideo("assets/Projekte/Design Projekte/Tiktok/Wird_die_AfD_Deutschlands_nächste_Regierungspartei.mp4", () => {
  schaubildVideo[3].loop();
  });
  schaubildVideo[3].elt.muted = true;
  schaubildVideo[3].hide();

  schaubildVideo[4] = createVideo("assets/Projekte/Design Projekte/Ver-Zeit-bar/ver-Zeit-bar_Archiv für die Zeit der Routinen.mov", () => {
  schaubildVideo[4].loop();
  });
  schaubildVideo[4].elt.muted = true;
  schaubildVideo[4].hide();
}

function draw(){
  clear();
  
  ///////////////////////////////////////////////////////////////////////Augen berechnen 
  if (window.scrollY < screen3Start) {
    let scrollRatio = constrain(window.scrollY / ((document.body.scrollHeight - (windowHeight*2.2))-(windowHeight*Projektanzahl)), 0, 1);

    let maus = map (scrollRatio, 0, 1, HALF_PI, -HALF_PI);
    y = map (sin(maus), 1 ,-1 , scrollanfangauge, scrollendeauge);

    let mausandererichtung = map (scrollRatio, 0, 1, HALF_PI, -HALF_PI);
    yanders = map (sin(mausandererichtung), -1 ,1 , scrollanfangaugeich, scrollendeaugeich);
  } else{
    let scrollNach3 = constrain((window.scrollY - screen3Start) / windowHeight,0,1);

    let mausUp = map(scrollNach3, 0, 1, 0, HALF_PI);

    let gemeinsamesY = map( sin(mausUp),0, 1,max(windowHeight/2, windowHeight/2),zielY);

   y = gemeinsamesY;
    yanders = gemeinsamesY;
  }

  console.log(window.scrollY);

  ///////////////////////////////////////////////////////////////////////Sponti
  push();
    translate(0, -window.scrollY);
      v = schaubildVideo[videoIndexprojet1];

      fill(500)
      // rect(0, windowHeight*3+(window.innerHeight*0),windowWidth,windowHeight)

      // 1. Standard: Höhe fest, Breite proportional
      let h = windowHeight - (window.innerHeight / 4);
      let w = h * (v.width / v.height);

      // 2. Wenn Bild zu breit → Breite begrenzen, Höhe neu berechnen
      if (w > windowWidth) {
        w = windowWidth;
        h = w / (v.width / v.height);
      }

      image(v, column.fünf, windowHeight*3+ windowHeight*0.44 ,w,h);

    
  pop()

  ///////////////////////////////////////////////////////////////////////Augen
  drawEyes(y, yanders);
}

///////////////////////////////////////////////////////////////////////Augen

function drawEyes( y, yanders) {

  pupilOffset = map(window.scrollY, 0, ((document.body.scrollHeight - (windowHeight*2.4))-(windowHeight*Projektanzahl)), - puppilengrosse *0.4 , puppilengrosse*0.4);
  xpupil= min (pupilOffset,  puppilengrosse*0.4)
  push()

  
  drawingContext.shadowOffsetX = 5
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';
  
  fill(255);
  noStroke();
  ellipse(augenX - augengrosse/2 -grid.gutterwc/2, y, augengrosse);
  ellipse(augenX + augengrosse/2 +grid.gutterwc/2, y, augengrosse);

  fill(0);
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = 'black';

  ellipse(augenX - puppilengrosse -grid.gutterwc/2 - xpupil, y, puppilengrosse, puppilengrosse);
  ellipse(augenX + puppilengrosse +grid.gutterwc/2 - xpupil, y, puppilengrosse, puppilengrosse);
  pop()
  

  push()
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';

  fill(255);
  noStroke();
  ellipse(augenXich - augengrosse/2 -grid.gutterwc/2, yanders, augengrosse);
  ellipse(augenXich + augengrosse/2 +grid.gutterwc/2, yanders, augengrosse);
  
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = 'black';
  fill(0);
  ellipse(augenXich - puppilengrosse - grid.gutterwc/2 - xpupil * -1, yanders, puppilengrosse, puppilengrosse);
  ellipse(augenXich + puppilengrosse + grid.gutterwc/2 - xpupil * -1, yanders, puppilengrosse, puppilengrosse);
  pop()
  
}

function toggleVideobuttonprojekt1() {
  if(videoIndexprojet1< slideanzahl1){
  videoIndexprojet1 =  videoIndexprojet1+1;
  }else{
    videoIndexprojet1 = 0;
  }

  document.querySelectorAll(".sponti").forEach((el, index) => {
  el.classList.toggle("active", index === videoIndexprojet1);
  });
}

// function toggleVideobuttonprojekt2() {
//   videoIndexprojet2 =  videoIndexprojet2+1;
// }

// function toggleVideobuttonprojekt3() {
//   videoIndexprojet3 =  videoIndexprojet3+1;
// }

// function toggleVideobuttonprojekt4() {
//   videoIndexprojet4 =  videoIndexprojet4+1;
// }

// function toggleVideobuttonprojekt5() {
//   videoIndexprojet5 =  videoIndexprojet5+1;
// }


document.getElementById("buttonmouse");
document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    buttonmouse.style.marginLeft = x + "px";
    buttonmouse.style.marginTop = y + "px";
    // buttonmouse.textContent = `X: ${x} | Y: ${y}`;
  });
