export default class Bullet{

    constructor(x,y,speed,damage){

        this.x=x
        this.y=y
        this.speed=speed
        this.damage = damage
        this.width =5;
        this.height =15;
        this.colore= "red"
    }

    draw(ctx) {
        ctx.fillStyle=this.colore;
        this.y-= this.speed;
        ctx.fillRect(this.x,this.y,this.width,this.height)
    }  

    collideWith(sprite) {
        if(
            this.x< sprite.x + sprite.width &&
            this.x + this.width > sprite.x &&
            this.y < sprite.y+ sprite.height&&
            this.y + this.height> sprite.y
        ) {sprite.takeDamage(this.damage) ; return true }
        return false;
    }

}