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

//////////////////////////////Typographie
// let  large= window.innerWidth/32;
// let  medium = window.innerWidth/48;
// let  small= window.innerWidth/256 * 4;
// let  xs= window.innerWidth/128;

let  large= window.innerWidth/16;
let  medium = window.innerWidth/24;
let  small= window.innerWidth/128 * 2;
let  xs= window.innerWidth/64;

//////////////////////////////Farben
// let maincol= "#ffffffff";
// let buttoncol = "#4cca17ff";
// let hovercol = "#b91919ff";

//////////////////////////////Header
let header = {
  Y : grid.columw+grid.gutterwc,
  W: grid.columw*2+grid.gutterwc,
  textfont: PoppinsBold,
  textgröße : medium,
  farbe : 0
}

//////////////////////////////Überschrift eins
let H1 = {
  ÜberMichY : window.innerHeight*2+window.innerHeight/2.5,
  ProjekteY :window.innerHeight*2+(window.innerHeight/2.5)*2,
  textfont: PoppinsBold,
  textgröße : large,
  farbe : 0
}

//////////////////////////////Fließtext
let p ={
  Y : window.innerHeight*2 +(window.innerHeight/2)-grid.columw/2,
  X: column.sechs,
  w : 4* grid.columw + 3* grid.gutterwc,
  textfont: PoppinsBold,
  textgröße : small,
  farbe : 0
}

//////////////////////////////Titel
let H2={
  // Y : window.innerHeight*3 +window.innerHeight/2.5,
  Y: window.innerHeight*3 +grid.columw+grid.gutterwc,
  X: column.sechs,
  textfont: PoppinsBold,
  textgröße : medium,
  farbe : 0
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

      //Typographie
        large= window.innerWidth/32;
        medium = window.innerWidth/64;
        small= window.innerWidth/256 * 4;
        xs= window.innerWidth/128;

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
  // background(255);
  // fill(200)
  //   for (let i = 0; i < 12; i++) {
  //     stroke(200)
  // let x = grid.marginleft + i * (grid.columw + grid.gutterwc);

  // // linke Linie der Spalte
  // line(x, 0, x, windowHeight);

  // // rechte Linie der Spalte
  // line(x + grid.columw, 0, x + grid.columw, windowHeight);
  // }
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

  ///////////////////////////////////////////////////////////////////////Header 
  // textFont(PoppinsBold);
  // textSize(header.textgröße);
  // textAlign(RIGHT, BOTTOM);
  // fill(header.farbe);

  // text('Corinna Kunst',column.drei, header.Y + header.textgröße * 0.3, header.W);

  // textAlign(LEFT, BOTTOM);  
  // text('Portfolio',column.sechs, header.Y + header.textgröße* 0.3, header.W);

  ///////////////////////////////////////////////////////////////////////Überschriften H1
  // push()
  // translate(0, -window.scrollY);

  // line(0, windowHeight, windowWidth, windowHeight)
  // line(0, windowHeight*2, windowWidth, windowHeight*2)
  // line(0, windowHeight*3, windowWidth, windowHeight*3)
  // line(0, windowHeight*4, windowWidth, windowHeight*4)
  // line(0, windowHeight*5, windowWidth, windowHeight*5)
  // line(0, windowHeight*6, windowWidth, windowHeight*6)

  // textFont(PoppinsBold);
  // textSize(H1.textgröße);
  // textAlign(RIGHT, BOTTOM);
  // fill(H1.farbe);

  // text('Über Mich',column.fünf-grid.gutterwc, H1.ÜberMichY + H1.textgröße * 0.3);
  // text('Meine Projekte',column.fünf-grid.gutterwc, H1.ProjekteY + H1.textgröße * 0.3);

  // if (window.scrollY<windowHeight){
  //    filter(BLUR, 3);
  // }

  // pop()

  ///////////////////////////////////////////////////////////////////////Fließtexte
  // push()
  // translate(0, -window.scrollY);
  // textFont(PoppinsMedium);
  // textSize(p.textgröße);
  // textAlign(LEFT, TOP);
  // fill(p.farbe);

  // text(Intro, p.X, p.Y + p.textgröße * 0.3, p.w);
  // pop()


    console.log(window.scrollY);


  ///////////////////////////////////////////////////////////////////////Bilder
  // push();
  //   translate(0, -window.scrollY);
  //   for (let i = 0; i < Projektanzahl; i++) {
  //     let v = schaubildVideo[i];
  //     fill(500)
  //     // rect(0, windowHeight*4+(window.innerHeight*i),windowWidth,windowHeight)

  //     if (!v || v.width === 0) continue;

  //     // 1. Standard: Höhe fest, Breite proportional
  //     let h = windowHeight - (window.innerHeight / 4);
  //     let w = h * (v.width / v.height);

  //     // 2. Wenn Bild zu breit → Breite begrenzen, Höhe neu berechnen
  //     if (w > windowWidth) {
  //       w = windowWidth;
  //       h = w / (v.width / v.height);
  //     }

  //     image(v, column.sechs-(w/2), windowHeight*4+(window.innerHeight*i +window.innerHeight/5),w,h);
    
  //   }
    
  // pop()

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


  ///////////////////////////////////////////////////////////////////////Titel
  // push();
  //   translate(0, -window.scrollY);
  //   for (let i = 0; i < Projektanzahl; i++) {
   
  //     textFont(PoppinsMedium);
  //     textSize(H2.textgröße);
  //     textAlign(LEFT,BOTTOM);
  //     fill(0);

  //     text(titel[i],H2.X, H2.Y +(window.innerHeight*i)+ H2.textgröße * 0.3);
    
  //   }
  
  // pop();
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
  // document.getElementById(`textsponti${videoIndexprojet1}`).style.visibility = "visible";

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

//   document.addEventListener("click", () => {
//     toggleVideo();
//   });  


  //  push();
  //    if (window.scrollY>windowHeight*3&&window.scrollY < windowHeight*4){
  //   transY= 0;
  //   H2.Y= window.innerHeight/12
  //   }else {
  //     transY=-window.scrollY;
  //   }
  //   translate(0, transY);

  //   textFont(PoppinsMedium);
  //   textSize(H2.textgröße);
  //   textAlign(RIGHT,TOP);
  //   fill(H2.farbe);

  //   text(titel[0],H2.X, H2.Y + H2.textgröße * 0.3);
    
  
  
  //  pop();
  ///////////////////////
// let PoppinsMedium;
// let PoppinsBold;
// let PoppinsSemiBold;

// let schaubildVideo =[];
// let buttonzurück =[];

// function preload(){
//   PoppinsBold = loadFont("assets/Fonts/Poppins-Bold.ttf");
//   PoppinsSemiBold = loadFont("assets/Fonts/Poppins-SemiBold.otf");
//   PoppinsMedium = loadFont("assets/Fonts/Poppins-Medium.otf");
  
// }

// //Layout
// let grid = {
//   // marginleft: window.innerWidth/32, 
//   marginleft: window.innerWidth/160, 

//   // marginright: (window.innerWidth/32)*31,
//   marginright: (window.innerWidth/160)*159,

//   margintop: window.innerHeight/20.8,

//   // columw: (window.innerWidth/256)* 57, 
//   columw: window.innerWidth/(1280/98), 

//   roww: window.innerHeight/9.6744186047,

//   // gutterwc: (window.innerWidth/256)* 4,
//   gutterwc: window.innerWidth/160,

//   gutterwr: window.innerHeight/33.28
// }

// // let column = {
// //   eins: grid.marginleft,
// //   zwei: grid.marginleft+ grid.columw + grid.gutterwc, 
// //   drei: grid.marginleft+ grid.columw * 2 + grid.gutterwc * 2,
// //   vier: grid.marginleft+ grid.columw * 3 + grid.gutterwc * 3
// // }

// let column = {
// eins:   grid.marginleft,
// zwei:   grid.marginleft + grid.columw * 1  + grid.gutterwc * 1,
// drei:   grid.marginleft + grid.columw * 2  + grid.gutterwc * 2,
// vier:   grid.marginleft + grid.columw * 3  + grid.gutterwc * 3,
// fünf:   grid.marginleft + grid.columw * 4  + grid.gutterwc * 4,
// sechs:  grid.marginleft + grid.columw * 5  + grid.gutterwc * 5,
// sieben: grid.marginleft + grid.columw * 6  + grid.gutterwc * 6,
// acht:   grid.marginleft + grid.columw * 7  + grid.gutterwc * 7,
// neun:   grid.marginleft + grid.columw * 8  + grid.gutterwc * 8,
// zehn:   grid.marginleft + grid.columw * 9  + grid.gutterwc * 9,
// elf:    grid.marginleft + grid.columw * 10 + grid.gutterwc * 10,
// zwölf:  grid.marginleft + grid.columw * 11 + grid.gutterwc * 11

// }
// ///////////////////////////////////////////////////////////////

// let row ={
//   eins: window.innerHeight/20.8,
//   zwei: grid.margintop+ grid.roww,
//   drei: grid.margintop+ grid.roww + grid.gutterwr,
//   vier: grid.margintop+ grid.roww*2 + grid.gutterwr,
//   fünf: grid.margintop+ grid.roww*2 + grid.gutterwr*2,
//   sechs: grid.margintop+ grid.roww*3 + grid.gutterwr*2,
//   sieben: grid.margintop+ grid.roww*3 + grid.gutterwr*3,
//   acht: grid.margintop+ grid.roww*4 + grid.gutterwr*3,
//   neun: grid.margintop+ grid.roww*4 + grid.gutterwr*4,
//   zehn: grid.margintop+ grid.roww*5 + grid.gutterwr*4,
//   elf: grid.margintop+ grid.roww*5 + grid.gutterwr*5,
//   zwölf: grid.margintop+ grid.roww*6 + grid.gutterwr*5,
//   dreizehn: grid.margintop+ grid.roww*6 + grid.gutterwr*6,
//   vierzehn: grid.margintop+ grid.roww*7 + grid.gutterwr*6
// };

// //Typographie
// let  large= window.innerWidth/32;
// let  medium = window.innerWidth/48;
// let  small= window.innerWidth/256 * 4;
// let  xs= window.innerWidth/128;

// //Farben
// let maincol= "#ffffffff";
// let buttoncol = "#4cca17ff";
// let hovercol = "#b91919ff";

// //Augen
// let scrollanfangauge = 0.1 * window.innerHeight;
// let scrollendeauge = 0.5 * window.innerHeight;

// let scrollanfangaugeich = 0.5 * window.innerHeight;
// let scrollendeaugeich = window.innerHeight;

// let augengrosse = window.innerWidth/16;
// let augenXich = grid.marginleft + augengrosse *1.1;
// let augenX = grid.marginright - augengrosse* 1.1;
// let puppilengrosse = augengrosse * 0.5;

// let pupilOffset

// //Texte
// let txt = "Hey, ich bin und du bist auf meinem Portfolio gelandet";
// let Intro = "Hey! und dies ist mein Portfolio und ich liebe liebe Design und ich brauch ein Praktikum. es gibt gute gründe mich zu nehmen. Ich liebe Design";
// let titel = ["Hallo", "Titelzwei", "teitel anders", "noch ein titel","teitel anders", "noch ein titel"]

// //Content


// //True False
// let showAbout = false;
// let showProjekte = false;
// let showSubAbout = false;
// let showSubProjekte = false;
// let showProjektSeite = false;

// // Position & Größe des Haupt-Rects
// let mainRect = {
//   y: 0,
// };
// let mainRectY = 0;
// // let mainRectBaseH = ButtonSizeh;
// ButtonSizeh = grid.roww;


// let Projektanzahl= 6;
// let subButtonh= grid.roww/2;
// let subButtonabstand= 1.1;

// let scrollY = window.scrollY;
// let projektScrollStart = window.scrollY;

// //Main Button
// let mainButtonw= 3*grid.columw +2* grid.gutterwc;

// //ZurückButton
// let zurückButton = {
//   x: 0,
//   y: 0,
//   w: 0,
//   h: 0
// };

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   schaubildVideo[0] = createVideo("assets/Projekte/Design Projekte/ich muss ma kritzeln -Latrinaliakollektion/zumsehen/Website video.mp4", () => {
//   schaubildVideo[0].loop();
//   });
//   schaubildVideo[0].elt.muted = true;
//   schaubildVideo[0].hide();

//   schaubildVideo[1] = createVideo("assets/Projekte/Design Projekte/Mein Name/Der Blick durch all meine Namen.mp4", () => {
//     schaubildVideo[1].loop();
//   });
//   schaubildVideo[1].elt.muted = true;
//   schaubildVideo[1].hide();

//   schaubildVideo[2] = createVideo("assets/Projekte/Design Projekte/Sponti App/RUNDGANG_SCREENREC.mov", () => {
//     schaubildVideo[2].loop();
//   });
//   schaubildVideo[2].elt.muted = true;
//   schaubildVideo[2].hide();

//   schaubildVideo[3] = createVideo("assets/Projekte/Design Projekte/Tiktok/Wird_die_AfD_Deutschlands_nächste_Regierungspartei.mp4", () => {
//   schaubildVideo[3].loop();
//   });
//   schaubildVideo[3].elt.muted = true;
//   schaubildVideo[3].hide();

//   schaubildVideo[4] = createVideo("assets/Projekte/Design Projekte/Ver-Zeit-bar/ver-Zeit-bar_Archiv für die Zeit der Routinen.mov", () => {
//   schaubildVideo[4].loop();
//   });
//   schaubildVideo[4].elt.muted = true;
//   schaubildVideo[4].hide();



//   onresize = (event) => {
//      resizeCanvas(window.innerWidth, window.innerHeight);

//       //Layout
//         //Grid
//         // grid.marginleft= window.innerWidth/32; 
//         // grid.marginright= (window.innerWidth/32)*31;
//         // grid.margintop= window.innerHeight/20.8;

//         // grid.columw= (window.innerWidth/256)* 57; 
//         // grid.roww= window.innerHeight/9.6744186047;
//         // grid.gutterwc= (window.innerWidth/256)* 4;
//         // grid.gutterwr= window.innerHeight/33.28;

//         grid.marginleft= window.innerWidth/160;

//         // marginright: (window.innerWidth/32)*31,
//         grid.marginright= (window.innerWidth/160)*159;

//         grid.margintop= window.innerHeight/20.8;

//         // columw: (window.innerWidth/256)* 57, 
//         grid.columw = window.innerWidth/(1280/98); 

//         grid.roww= window.innerHeight/9.6744186047;

//         // gutterwc: (window.innerWidth/256)* 4,
//         grid.gutterwc= window.innerWidth/160;

//         grid.gutterwr= window.innerHeight/33.28;

//         //Column
//         column.eins= grid.marginleft;
//         column.zwei= grid.marginleft+ grid.columw + grid.gutterwc; 
//         column.drei= grid.marginleft+ grid.columw * 2 + grid.gutterwc * 2;
//         column.vier= grid.marginleft+ grid.columw * 3 + grid.gutterwc * 3;

//         row.eins= window.innerHeight/20.8;
//         row.zwei= grid.margintop+ grid.roww;
//         row.drei= grid.margintop+ grid.roww + grid.gutterwr;
//         row.vier= grid.margintop+ grid.roww*2 + grid.gutterwr;
//         row.fünf= grid.margintop+ grid.roww*2 + grid.gutterwr*2;
//         row.sechs= grid.margintop+ grid.roww*3 + grid.gutterwr*2;
//         row.sieben= grid.margintop+ grid.roww*3 + grid.gutterwr*3;
//         row.acht= grid.margintop+ grid.roww*4 + grid.gutterwr*3;
//         row.neun= grid.margintop+ grid.roww*4 + grid.gutterwr*4;
//         row.zehn= grid.margintop+ grid.roww*5 + grid.gutterwr*4;
//         row.elf= grid.margintop+ grid.roww*5 + grid.gutterwr*5;
//         row.zwölf= grid.margintop+ grid.roww*6 + grid.gutterwr*5;
//         row.dreizehn= grid.margintop+ grid.roww*6 + grid.gutterwr*6;
//         row.vierzehn= grid.margintop+ grid.roww*7 + grid.gutterwr*6;

//       //Typographie
//         large= window.innerWidth/32;
//         medium = window.innerWidth/64;
//         small= window.innerWidth/256 * 4;
//         xs= window.innerWidth/128;

//       //Augen
//         scrollanfangauge = 0.1 * window.innerHeight;
//         scrollendeauge = 0.5 * window.innerHeight;

//         scrollanfangaugeich = 0.5 * window.innerHeight;
//         scrollendeaugeich = window.innerHeight;

//         augengrosse = window.innerWidth/16;
//         augenXich = grid.marginleft + augengrosse *1.1;
//         augenX = grid.marginright - augengrosse* 1.1;
//         puppilengrosse = augengrosse * 0.5;
//   }
// }

// function resize(){
//   createCanvas(window.innerWidth,window.innerHeight)
// }

// function draw() {
//   background(maincol);
//   // rect(grid.marginleft, windowHeight/3, augengrosse);
//   // rect(column.eins, windowHeight/2, grid.columw);
//   // rect(column.zwei, windowHeight/2, grid.columw);
//   // rect(column.drei, windowHeight/2, grid.columw);
//   // rect(column.vier, windowHeight/2, grid.columw);
//   // push();
//   // stroke(255);
//   // line(0,row.eins,width,row.eins);
//   // line(0,row.zwei,width,row.zwei);
//   // line(0,row.drei,width,row.drei);
//   // line(0,row.vier,width,row.vier);
//   // line(0,row.fünf,width,row.fünf);
//   // line(0,row.sechs,width,row.sechs);
//   // line(0,row.sieben,width,row.sieben);
//   // line(0,row.acht,width,row.acht);
//   // line(0,row.neun,width,row.neun);
//   // line(0,row.zehn,width,row.zehn);
//   // line(0,row.elf,width,row.elf);
//   // line(0,row.zwölf,width,row.zwölf);
//   // line(0,row.dreizehn,width,row.dreizehn);
//   // line(0,row.vierzehn,width,row.vierzehn);

//   // line(column.eins,0,column.eins,windowHeight);
//   // line(grid.marginleft+ grid.columw ,0,grid.marginleft+ grid.columw ,windowHeight);
//   // line(column.zwei,0,column.zwei,windowHeight);
//   // line(column.zwei+grid.columw ,0,column.zwei+grid.columw,windowHeight);
//   // line(column.drei,0,column.drei,windowHeight);
//   // line(column.drei +grid.columw,0,column.drei+grid.columw,windowHeight);
//   // line(column.vier,0,column.vier,windowHeight);
//   // line(column.vier +grid.columw,0,column.vier +grid.columw,windowHeight);

//   // for (let i = 0; i < 12; i++) {
//   // let x = grid.marginleft + i * (grid.columw + grid.gutterwc);

//   // // linke Linie der Spalte
//   // line(x, 0, x, windowHeight);

//   // // rechte Linie der Spalte
//   // line(x + grid.columw, 0, x + grid.columw, windowHeight);
//   // }

//   // pop();


//   // ellipseMode (CENTER);

//   let scrollRatio = constrain(window.scrollY / (document.body.scrollHeight - windowHeight), 0, 1);

//   let maus = map (scrollRatio, 0, 1, HALF_PI, -HALF_PI);
//   let y = map (sin(maus), 1 ,-1 , scrollanfangauge, scrollendeauge);

//   let mausandererichtung = map (scrollRatio, 0, 1, HALF_PI, -HALF_PI);
//   let yanders = map (sin(mausandererichtung), -1 ,1 , scrollanfangaugeich, scrollendeaugeich);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Projektseiten


// //  if (showProjektSeite===true && scrollRatio>=0.98){
// //      showProjektSeite= false;
// //       document.body.style.height = "250vh";
// //   }

//   console.log(window.scrollY);

//   if(showProjektSeite){
//     let scrollOffset = window.scrollY - projektScrollStart;
//     let projektAbstand = windowHeight * 2.2;
//     let exitStart = schaubildVideo.length * projektAbstand;

//     let exitOffset = 0;

//     if (scrollOffset > exitStart) {
//       exitOffset = scrollOffset - exitStart*1.2;
//     }

//     let projektStartKästchenY = row.neun ;
//     let projektStartKästchenX = -windowWidth-column.eins+ column.fünf;

//     let projektStartH1 = row.zehn;
//     let projektStartXH1 = -column.eins;

//     let projektStartmainimg =  row.neun + grid.gutterwc +grid.roww;
//     let projektStartmainimgX= -column.zehn-grid.gutterwc+ column.fünf;

//     let projektStartp = windowHeight+row.neun + grid.gutterwc +grid.roww;
//     let projektStartpX = column.eins;

//     Projektanzahl= schaubildVideo.length;

//     for (let i = 0; i < Projektanzahl; i++) {

//       // rectMode(LEFT);

//       //Kästchen
//       push()
//       let targetXKästchen = projektStartKästchenX - i * windowWidth * 1.2 + scrollOffset + exitOffset;
//       let blockXKästchen=targetXKästchen;

//       if (scrollOffset < exitStart) {
//       blockXKästchen = min(column.eins, targetXKästchen);
//       }

//       let targetYKästchen = projektStartKästchenY + i * windowHeight * 2.2 - scrollOffset;
//       let blockYKästchen = max(row.eins, targetYKästchen);

//       fill(maincol);
//       noStroke();
//           drawingContext.shadowOffsetX = 0;
//           drawingContext.shadowOffsetY = 0;
//           drawingContext.shadowBlur = 10;
//           drawingContext.shadowColor = 'black';
//       rect(blockXKästchen,blockYKästchen,grid.columw*12+ grid.gutterwc*11, row.vierzehn-row.eins);
//       pop()

//       push()
//           drawingContext.shadowOffsetX = 5;
//           drawingContext.shadowOffsetY = -5;
//           drawingContext.shadowBlur = 10;
//           drawingContext.shadowColor = 'black';

//           fill(255);
//           noStroke();
//           ellipse(augenXich - augengrosse * 0.6, mouseY, augengrosse);
//           ellipse(augenXich + augengrosse * 0.6, mouseY, augengrosse);

//           drawingContext.shadowOffsetX = 0;
//           drawingContext.shadowOffsetY = 0;
//           drawingContext.shadowBlur = 0;
//           drawingContext.shadowColor = 'black';
//           fill(0);
//           ellipse(augenXich - puppilengrosse * 1.2 - pupilOffset * -1, mouseY, puppilengrosse, puppilengrosse);
//           ellipse(augenXich + puppilengrosse * 1.2 - pupilOffset * -1, mouseY, puppilengrosse, puppilengrosse);
//       pop()

//       //Überschrift

//       let targetXH1 = projektStartXH1 - i * windowWidth * 1.2 + scrollOffset + exitOffset;
//       let blockXH1 =targetXH1;

//       if (scrollOffset < exitStart) {
//           blockXH1 = min(column.eins, targetXH1);
//       }

//       let targetYH1 = projektStartH1 + i * windowHeight * 2.2 - scrollOffset;
//       let blockYH1 = max(row.zwei, targetYH1);

//       textFont(PoppinsMedium);
//       textSize(large);
//       textAlign(LEFT, BOTTOM);
//       fill(0);

//       text(titel[i],blockXH1, blockYH1 +large*0.3);

//       //Main Video/Bild
//       let targetXmainimg = projektStartmainimgX - i * windowWidth * 1.2 + scrollOffset+ exitOffset;
//       let blockXmainimg =targetXmainimg;

//       if (scrollOffset < exitStart) {
//           blockXmainimg = min(column.vier, targetXmainimg);
//       }

//       let targetYmainimg = projektStartmainimg + i * windowHeight * 2.2 - scrollOffset;
//       let blockYmainimg = max(row.drei, targetYmainimg);

//       let v = schaubildVideo[i];
//       let w =grid.columw*9+ grid.gutterwc*8;

//       if (v && v.width > 0) {
//         let h = w * (v.height / v.width);
//         if (h>=windowHeight-row.zwei){
//           w = grid.columw*3+ grid.gutterwc*2
//           h = w * (v.height / v.width);
//         }
//         image(v, blockXmainimg, blockYmainimg, w, h);
//       }

      

//       //Beschreibungstext
//       let targetprojektStartpX = projektStartpX - i * windowWidth * 1.2 + scrollOffset+ exitOffset
//       let blockprojektStartpX = targetprojektStartpX;
      
//       if (scrollOffset < exitStart) {
//           blockprojektStartpX= min (column.eins, targetprojektStartpX)
//         }

//       let targetYp = projektStartp + i * windowHeight * 2.2 - scrollOffset;
//       let blockYp = max(row.vier, targetYp);

//       textFont(PoppinsMedium);
//       textSize(medium);
//       textAlign(LEFT, BOTTOM);
//       fill(0);

//       text(titel[i],blockprojektStartpX, blockYp +medium*0.3);

     
//     }
  
//       let i = Projektanzahl+ 0.5;

//       // gleiche Logik wie bei den Projekten
//       let targetXButton = -column.sechs - i * windowWidth * 1.2 + scrollOffset;
//        zurückButton.x = min(column.sechs, targetXButton);

//       zurückButton.w= grid.columw*2+grid.gutterwc;
//       zurückButton.h= grid.roww;
//       zurückButton.y= windowHeight/2;
     

//       // BUTTON
//       push();

//          if (
//           mouseX > zurückButton.x&&
//           mouseX < zurückButton.x + zurückButton.w &&
//           mouseY > zurückButton.y - zurückButton.h/2&&
//           mouseY < zurückButton.y + zurückButton.h/2
     
//         ) {
//           fill(hovercol);
     
//         }else{
//           fill(buttoncol);
//         }

      
//       rectMode(CENTER)
//       rect(zurückButton.x +zurückButton.w*0.5, zurückButton.y, zurückButton.w,zurückButton.h, 50);
//       pop();
//       push();
//       fill(0)
//       textFont(PoppinsMedium);
//       textSize(large);
//       textAlign(CENTER, CENTER);
//       text("Zurück",zurückButton.x, zurückButton.y - large * 0.175,zurückButton.w);
//       pop();
//   }


//   if(scrollRatio < 0.4 &&showProjektSeite===false){
//     showAbout = false;
//     showProjekte = false;
//     showSubAbout = false;
//     showSubProjekte = false;

//   }else{
//     showAbout = true;
//     showProjekte = true;
//   }

//   ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////MAIN BUTTONS
  
//   if (showAbout && showProjektSeite===false ){
//     // if (showProjektSeite===true){
//     //   // let projektStartAboutY =  window.innerHeight/2;
//     //   // let scrollOffset = window.scrollY - projektScrollStart;

//     //   // let targetYAbout = projektStartAboutY - scrollOffset;
//     //   // let blockYAbout = max(row.eins+(ButtonSizeh/2), targetYAbout);
//     //   // mainRectY= blockYAbout;
//     //   mainRectY = windowHeight/2;

//     // }else{
//       mainRectY = yanders;
//     // }

//     // mainRectY = yanders;
//     push()
//      if (
//       mouseX > column.vier &&
//       mouseX < column.vier + mainButtonw &&
//       mouseY > mainRectY - ButtonSizeh/2 &&
//       mouseY < mainRectY + ButtonSizeh/2
//       || showSubAbout === true
//     ) {
//       fill(hovercol);
//     }else{
//       fill(buttoncol);
//     }
    
//     rectMode(CENTER)
//     rect(column.vier + mainButtonw/2 , mainRectY, mainButtonw, ButtonSizeh, 50);
//     pop()

//     push()
//     textFont(PoppinsSemiBold);
//     // line(0,windowHeight/2,width,windowHeight/2);
//     textSize(large);
//     textAlign(CENTER, CENTER);
//     fill(0);
//     text('Über Mich',column.vier, mainRectY - large * 0.175, mainButtonw);
//     pop()
//     }


//   if (showProjekte) {
//     if (showProjektSeite===true){
//       let projektStartProjekteY =  window.innerHeight/2;
//       let scrollOffset = window.scrollY - projektScrollStart;

//       let targetYProjekte = projektStartProjekteY - scrollOffset;
//       let blockYProjekte = max(grid.margintop-(grid.gutterwr/2), targetYProjekte);

//       mainRectY= blockYProjekte;

//       //Font
//       let StartFontSize = large;
//       let targetFontSize = StartFontSize - scrollOffset*0.1;

//       if(targetFontSize<StartFontSize){
//         let blockYFontSize= max(small, targetFontSize);
//         FontSize= blockYFontSize;
//       } else{
//         let blockYFontSize= min(large, targetFontSize);
//         FontSize= blockYFontSize;
//       }
      
//       //Button
//       let StartButtonSizeh = grid.roww;
//       let targetButtonSizeh = StartButtonSizeh - scrollOffset*0.5;

//       if(targetButtonSizeh<StartButtonSizeh){
//         let blockYButtonSizeh= max(grid.gutterwr, targetButtonSizeh);
//         ButtonSizeh= blockYButtonSizeh;
//       } else{
//         let blockYButtonSizeh = min(grid.roww, targetButtonSizeh);
//         ButtonSizeh= blockYButtonSizeh;
//       }

//     }else{
//       mainRectY = yanders;
//       ButtonSizeh= grid.roww;
//       FontSize=large;
    
//     }

//     push()

//     if (
//       mouseX > column.sieben &&
//       mouseX < column.sieben + mainButtonw&&
//       mouseY > mainRectY - ButtonSizeh/2 &&
//       mouseY < mainRectY + ButtonSizeh/2
//       || showProjektSeite === true
//     ) {
//       fill(hovercol);
//     }else{
//       fill(buttoncol);
//     }

//     rectMode(CENTER);
//     rect(column.sieben + mainButtonw/2, mainRectY, mainButtonw, ButtonSizeh, 50);
//     pop()

//     push()
//     textFont(PoppinsSemiBold);
//     textSize(FontSize);
//     textAlign(CENTER, CENTER);
//     fill(0);
//     text('Projekte',column.sieben, mainRectY - FontSize * 0.175, mainButtonw);
//     pop()
//   }  

//   ////////////////////////////////////////////////////////////////////////////////////////////SUB BUTTONS
//   if (showSubAbout) {
//     push()
//     textFont(PoppinsMedium);
//     textSize(medium);
//     textAlign(LEFT, TOP);
//     fill(0);
//     // line(0,row.neun,width,row.neun);
//     text(Intro,column.vier, row.zwei - medium * 0.3, grid.columw *2 +grid.gutterwc);
//     pop()
//   } 

//   if (showSubProjekte) {
//     for (let y = 0; y < Projektanzahl; y++) {
//      if (
//       mouseX > column.sieben &&
//       mouseX < column.sieben + grid.columw &&
//       mouseY > row.neun+y*(subButtonh*subButtonabstand)  &&
//       mouseY < row.neun+y*(subButtonh*subButtonabstand) + subButtonh
//     ) {
//       fill(hovercol);
//     }else{
//       fill(buttoncol);
//     }
//       rect(column.sieben, row.neun+ y*(subButtonh*subButtonabstand), grid.columw, subButtonh,40);

//       push()
//       textFont(PoppinsMedium);
//       textSize(medium);
//       textAlign(LEFT, CENTER);
//       fill(0);
//       text(titel[y],column.sieben + grid.gutterwc, (row.neun - medium * 0.175)+((subButtonh*subButtonabstand)/2)+ y*(subButtonh*subButtonabstand),grid.columw)
//       pop()


//     }
//   }  

//   /////////////////////////////////////////////////////////////////////////////////////////////HEADER  
//   // line(0,windowHeight/256*7,width,windowHeight/256*7);
//   textFont(PoppinsSemiBold);
//   textSize(small);
//   textAlign(LEFT, BOTTOM);
//   fill(0);
//   text('Cost',column.eins, row.eins + small * 0.3, grid.columw);
//   text('Po',column.vier, row.eins + small * 0.3, grid.columw);


//   // translate(0,augengrosse);
//   drawEyes(y, yanders);

// }

// ///////////////////////////////////////////////////////////////////////Mouse Pressed

// function mousePressed() {
//   // About
//   if (
//     mouseX > column.vier &&
//     mouseX < column.vier + mainButtonw &&
//     mouseY > mainRectY - ButtonSizeh/2 &&
//     mouseY < mainRectY + ButtonSizeh/2
//   ) {
//     showSubAbout = !showSubAbout;
//   }

//   // Projekte
//   // if (
//   //   mouseX > column.drei &&
//   //   mouseX < column.drei + grid.columw &&
//   //   mouseY > mainRectY - ButtonSizeh/2 &&
//   //   mouseY < mainRectY + ButtonSizeh/2
//   // ) {
//   //   showSubProjekte = !showSubProjekte;
//   // }  
    
//   if(
//      // mouseX > column.drei &&
//      // mouseX < column.drei + grid.columw &&
//      // mouseY > row.neun + y*(subButtonh*subButtonabstand) &&
//      // mouseY < row.neun + y*(subButtonh*subButtonabstand) + subButtonh &&
//      // showSubProjekte=== true
//       mouseX > column.sieben &&
//       mouseX < column.sieben + mainButtonw &&
//       mouseY > mainRectY - ButtonSizeh/2 &&
//       mouseY < mainRectY + ButtonSizeh/2
//   ){ 
//       showProjektSeite = !showProjektSeite;

//       if (showProjektSeite) {
//         projektScrollStart = window.scrollY;
//         document.body.style.height =  `${250+50+ Projektanzahl * 100*2}vh`;

//       } else {
//         document.body.style.height = "250vh";
//       }
      
//     } 

//   if (
//           showProjektSeite === true &&
//           mouseX > zurückButton.x&&
//           mouseX < zurückButton.x + zurückButton.w &&
//           mouseY > zurückButton.y - zurückButton.h/2&&
//           mouseY < zurückButton.y + zurückButton.h/2
     
//         ) {
//           window.location.reload()
//         }
     

// }

// ///////////////////////////////////////////////////////////////////////Augen

// function drawEyes( y, yanders) {
//   if (showProjektSeite===true){
//     y=windowHeight/2;
//     pupilOffset = puppilengrosse * 0.4;

//     augenX = lerp(augenX, mouseX, 1);
//     y = lerp(y, mouseY, 1);
//     // let scrollOffset = window.scrollY - projektScrollStart;
//     // let augenxpositiona = augenX ;

//     // if(mouseX>augenX){
//     //     let targetaugenxpositiona = augenxpositiona + mouseX-augenX - scrollOffset;
//     //     let augenxpositionaneu = max(mouseX, targetaugenxpositiona);
//     //     augenX= augenxpositionaneu;
//     // }else{
//     //       let targetaugenxpositiona = augenxpositiona - augenX-mouseX + scrollOffset;
//     //       let augenxpositionaneu = min(mouseX, targetaugenxpositiona);
//     //       augenX= augenxpositionaneu;
//     // }

//   } else{
//     pupilOffset = map(window.scrollY, 0, document.body.scrollHeight - windowHeight, - puppilengrosse * 0.4 , puppilengrosse * 0.4);
//     augenX= grid.marginright - augengrosse* 1.1;
//   }
//   push()
  
//   drawingContext.shadowOffsetX = 5;
//   drawingContext.shadowOffsetY = -5;
//   drawingContext.shadowBlur = 10;
//   drawingContext.shadowColor = 'black';
  
//   fill(255);
//   noStroke();
//   ellipse(augenX - augengrosse * 0.6, y, augengrosse);
//   ellipse(augenX + augengrosse * 0.6, y, augengrosse);

//   fill(0);
//   drawingContext.shadowOffsetX = 0;
//   drawingContext.shadowOffsetY = 0;
//   drawingContext.shadowBlur = 0;
//   drawingContext.shadowColor = 'black';
//   ellipse(augenX - puppilengrosse * 1.2 - pupilOffset, y, puppilengrosse, puppilengrosse);
//   ellipse(augenX + puppilengrosse * 1.2 - pupilOffset, y, puppilengrosse, puppilengrosse);
//   pop()
  
//   if(showProjektSeite===false){
//   push()
//   drawingContext.shadowOffsetX = 5;
//   drawingContext.shadowOffsetY = -5;
//   drawingContext.shadowBlur = 10;
//   drawingContext.shadowColor = 'black';

//   fill(255);
//   noStroke();
//   ellipse(augenXich - augengrosse * 0.6, yanders, augengrosse);
//   ellipse(augenXich + augengrosse * 0.6, yanders, augengrosse);
  
//   drawingContext.shadowOffsetX = 0;
//   drawingContext.shadowOffsetY = 0;
//   drawingContext.shadowBlur = 0;
//   drawingContext.shadowColor = 'black';
//   fill(0);
//   ellipse(augenXich - puppilengrosse * 1.2 - pupilOffset * -1, yanders, puppilengrosse, puppilengrosse);
//   ellipse(augenXich + puppilengrosse * 1.2 - pupilOffset * -1, yanders, puppilengrosse, puppilengrosse);
//   pop()
//   }

// }

