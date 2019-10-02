let obj;
let speed=0.0002; 
let angleMax = 1.58;  
let speed2 = 1;
let ok = 0; //var que controla i alterna la creacio i el moviment

function setup() {
  createCanvas(500, 600);
  strokeWeight(10);
  noFill();   //perque volem els quadrats amb nomes Stroke
  obj1 = new Rombe(220,220,300); //creeem els 2 objectes
  obj2 = new Rombe(270,220,300);
  textSize(60);                  //definim els parametres del text
  textAlign(CENTER,CENTER);
}

function draw() {
  background(255, 111, 0);  
  fill(0);                      //color del text
  text("the clash",130,500);    //text
  noFill();                     //perque volem els quadrats amb nomes Stroke
  if(!ok){               //comprovem que l'objecte no estigui ja dibuixat
    obj1.drawinit();     //dibuixem els dos objectes
    obj2.drawinit();
  }
  if(ok){                //comprovem que l'objecte ja estigui dibuixat
    obj1.draw();         //cridem el draw que es el que fa l'animacio de rotacio
    obj2.draw();
  }
}

function mouseClicked(){          //quan cliquem amb el mouse fem un "reset"
  obj1 = new Rombe(220,220,300);
  obj2 = new Rombe(270,220,300);
  ok=0;
}

function deviceShaken(){
  obj1 = new Rombe(220,220,300);
  obj2 = new Rombe(270,220,300);
  ok=0;
}

class Rombe{              //classe principal dels dos rombes
  constructor(ox,oy,m){   //ox i oy son les coordenades inicials
    this.eixx = ox;       
    this.eixy = oy;       
    this.xo = -1*(m/2);   //coordenades inicials dels rombes
    this.yo = -1*(m/2);
    this.mo = m;          //mida dels rombes
    this.x = this.xo;     //coordenades que van canviant depenent de la capa que toqui
    this.y = this.yo;
    this.m = m;
    this.i = 20;          //increment per fer les diferents capes de l'objecte
    this.im = 2*this.i;   //la mida s'incrementa el doble, per la part x i la part y
    this.c = color(random(150),random(150),random(150),180); //tria un color de manera random amb valors fins a 150 perque no tingui un color tant viu
    this.r = 0;           //rotacio dels rombes
    this.check = 0;       //controla si ha de girar a la dreta o a l'esquerra
    this.arrayinit = [0,0,0,0,0,0,0,0];   //array que serveix per dibuixar els rombes sequencialment
    this.ii = 0;          //index de l'array
    this.count = 0;       //comptador que serveix com a delay
  }

  drawinit(){
    this.count+=1;        //incrementa el comptador
    if(this.count==10){   //quan el comptador arriba a 10 pinta el seguent rombe
      this.arrayinit[this.ii]=1;
      this.ii++;
      this.count = 0;
    }
    if(this.ii>7){        //comprova si l'ha acabat de pintat tot
      ok=1;
      this.ii=0;
    }
    push();                         //
    stroke(this.c);                 //configura la matriu per dibuixar els objectes
    translate(this.eixx,this.eixy); //
    rotate(95);                     //
    this.x=this.xo;
    this.y=this.yo;
    this.m=this.mo;
    if(this.arrayinit[0]==1){       //pinta la capa del rombe quan li toca
      square(this.x,this.y,this.m);
    }  
    this.x+=this.i;                 //incrementa les coordenades per fer la seguent capa
    this.y+=this.i;
    this.m-=this.im;
    if(this.arrayinit[1]==1){
      square(this.x,this.y,this.m);
    }  
    this.x+=this.i;
    this.y+=this.i;
    this.m-=this.im;
    if(this.arrayinit[2]==1){
      square(this.x,this.y,this.m);
    }  
    this.x+=this.i;
    this.y+=this.i;
    this.m-=this.im;
    if(this.arrayinit[3]==1){
      square(this.x,this.y,this.m);
    }  
    this.x+=this.i;
    this.y+=this.i;
    this.m-=this.im;
    if(this.arrayinit[4]==1){
      square(this.x,this.y,this.m);
    }  
    this.x+=this.i;
    this.y+=this.i;
    this.m-=this.im;
    if(this.arrayinit[5]==1){
      square(this.x,this.y,this.m);
    }  
    this.x+=this.i;
    this.y+=this.i;
    this.m-=this.im;
    if(this.arrayinit[6]==1){
      square(this.x,this.y,this.m);
    }  
    this.x+=this.i;
    this.y+=this.i;
    this.m-=this.im;
    if(this.arrayinit[7]==1){
      square(this.x,this.y,this.m);
    }  
    pop();
  }

  draw(){           
    push();
    stroke(this.c);
    translate(this.eixx,this.eixy);
    rotate(95);
    this.x=this.xo;
    this.y=this.yo;
    this.m=this.mo;
    rotate(this.r);         //rota l'objecte
    if(this.r>=angleMax){   //comprova si arriba a l'angle maxim
      this.check=0;         
    }else if(this.r<=0){
      this.check=1;
    }
    if(this.check){         //inverteix la rotacio
      this.r+=speed;
    }else{
      this.r-=speed;
    }
    square(this.x,this.y,this.m);
    this.x+=this.i;
    this.y+=this.i;
    this.m-=this.im;
    rotate(this.r);
    if(this.r>=angleMax){
      this.check=0;
    }else if(this.r<=0){
      this.check=1;
    }
    if(this.check){
      this.r+=speed;
    }else{
      this.r-=speed;
    }
    square(this.x,this.y,this.m);
    this.x+=this.i;
    this.y+=this.i;
    this.m-=this.im;
    rotate(this.r);
    if(this.r>=angleMax){
      this.check=0;
    }else if(this.r<=0){
      this.check=1;
    }
    if(this.check){
      this.r+=speed;
    }else{
      this.r-=speed;
    }
    square(this.x,this.y,this.m);
    this.x+=this.i;
    this.y+=this.i;
    this.m-=this.im;
    rotate(this.r);
    if(this.r>=angleMax){
      this.check=0;
    }else if(this.r<=0){
      this.check=1;
    }
    if(this.check){
      this.r+=speed;
    }else{
      this.r-=speed;
    }
    square(this.x,this.y,this.m);
    this.x+=this.i;
    this.y+=this.i;
    this.m-=this.im;
    rotate(this.r);
    if(this.r>=angleMax){
      this.check=0;
    }else if(this.r<=0){
      this.check=1;
    }
    if(this.check){
      this.r+=speed;
    }else{
      this.r-=speed;
    }
    square(this.x,this.y,this.m);
    this.x+=this.i;
    this.y+=this.i;
    this.m-=this.im;
    rotate(this.r);
    if(this.r>=angleMax){
      this.check=0;
    }else if(this.r<=0){
      this.check=1;
    }
    if(this.check){
      this.r+=speed;
    }else{
      this.r-=speed;
    }
    square(this.x,this.y,this.m);
    this.x+=this.i;
    this.y+=this.i;
    this.m-=this.im;
    rotate(this.r);
    if(this.r>=angleMax){
      this.check=0;
    }else if(this.r<=0){
      this.check=1;
    }
    if(this.check){
      this.r+=speed;
    }else{
      this.r-=speed;
    }
    square(this.x,this.y,this.m);
    this.x+=this.i;
    this.y+=this.i;
    this.m-=this.im;
    rotate(this.r);
    if(this.r>=angleMax){
      this.check=0;
    }else if(this.r<=0){
      this.check=1;
    }
    if(this.check){
      this.r+=speed;
    }else{
      this.r-=speed;
    }
    square(this.x,this.y,this.m);
    pop();
  }


}
