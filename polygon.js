class Polygon{
constructor(x, y, r){
    var options={
          restitution:0.8,
          density:0.3,
          friction:0.8,
          isStatic:true,
    }
    this.body = Bodies.circle(x, y, r, options)
    this.r = r
    this.x = x
    this.y = y
    this.image = loadImage("polygon.png")
World.add(world, this.body)

}
display(){
push();
translate(this.body.position.x, this.body.position.x)
imageMode(CENTER);

image(this.image, this.x, this.y, 80, 80)

pop()
}
}