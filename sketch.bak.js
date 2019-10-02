let obj;
let speed=0.0002;
let angleMax = 1.58;

function setup() {
  createCanvas(500, 600);
  strokeWeight(10);
  noFill();
  obj1 = new Rombe(220,220,300);
  obj2 = new Rombe(270,220,300);
  textSize(60);  
  textAlign(CENTER,CENTER);
}

function draw() {
  background(255, 111, 0);  
  fill(0);
  text("the clash",130,500);
  noFill();
  obj1.draw();
  obj2.draw();
}

function mouseClicked(){
  obj1 = new Rombe(220,220,300);
  obj2 = new Rombe(270,220,300);
}

class Rombe{
  constructor(ox,oy,m){
    this.eixx = ox;
    this.eixy = oy;
    this.xo = -1*(m/2);
    this.yo = -1*(m/2);
    this.mo = m;
    this.x = this.xo;
    this.y = this.yo;
    this.m = m;
    this.i = 20;
    this.im = 2*this.i;
    this.c = color(random(150),random(150),random(150),180);
    this.r = 0;
    this.check = 0;
  }

  draw(){
    push();
    stroke(this.c);
    translate(this.eixx,this.eixy);
    rotate(95);
    this.x=this.xo;
    this.y=this.yo;
    this.m=this.mo;
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