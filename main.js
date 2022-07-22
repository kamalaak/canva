function game (){
    const canvas = document.getElementById('can');
    if (canvas.getContext) {
        const some = canvas.getContext('2d');
        canvas.width= innerWidth;
        canvas.height= innerHeight;
        
         class artist {
            constructor (x, y,color, radius){
                this.x = x
                this.y = y
                this.radius =radius
                this.color = color
         }
         draw(){
                some.beginPath()
                some.arc(this.x, this.y, this.radius, 0, Math.PI * 2,false)
                some.fillStyle = this.color
                some.fill()
                            }
         }
         class Projectile{
            constructor(x,y, radius, color, velocity) 
        {
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.velocity = velocity
            }
            draw(){
                some.beginPath()
                some.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
                some.fillStyle = this.color
                some.fill()
            }
            update(){
                this.x=this.x+this.velocity.x;
                this.y=this.y+this.velocity.y;
            }
        } 
        
         const player = new artist(canvas.width/2,canvas.height/2, "blue" ,30);
         player.draw();
         const kodu = new Projectile(canvas.width/2,canvas.height/2,10,"red",{x:1,y:1})
         addEventListener('click',(event)=>{
           
            kodu.draw()
            
         }
         
         )
        
         function anime(){
            requestAnimationFrame(anime)
            kodu.draw();
            kodu.update();
         } 
         anime();
    }
   
};

