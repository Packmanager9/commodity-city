// const { Constraint } = require("matter-js");

window.addEventListener('DOMContentLoaded', (event) =>{

    let sorted = 0


    let tip = {}
    
    let keysPressed = {}


 window.addEventListener('mousedown', e => {
    flex = tutorial_canvas.getBoundingClientRect();


    xs = e.clientX - flex.left;
    ys = e.clientY - flex.top;
      tip.x = xs
      tip.y = ys

      tip.body = tip

      for(let t = 0; t<board.blocks.length;t++){
          if(board.blocks[t].isPointInside(tip)){

            for(let k = 0; k<board.blocks.length;k++){
                if(k !== t){

                    if(board.blocks[k].selected!=1){

                    board.blocks[k].color = board.blocks[k].basecolor 

                    }
                }
                if(!keysPressed['s']){
                    board.blocks[t].selected = 0
                }
              }
            board.blocks[t].color = "red"
            board.blocks[t].selected = 1

            t = board.blocks.length
          }
      }


      mouse = true

//    window.addEventListener('mousemove', beamdrag);
 });



 window.addEventListener('mouseup', e => {
     mouse = false
    // window.removeEventListener("mousemove", beamdrag);
    // window.removeEventListener("mousehold", beamdrag);
 })



    document.addEventListener('keydown', (event) => {
        keysPressed[event.key] = true;
     });
     
     document.addEventListener('keyup', (event) => {
         delete keysPressed[event.key];
      });

    let tutorial_canvas = document.getElementById("tutorial");
    let tutorial_canvas_context = tutorial_canvas.getContext('2d');

    tutorial_canvas.style.background = "#000000"

    class Square {
        constructor(x, y, height, width, color) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
        }
        draw(){
            tutorial_canvas_context.fillStyle = this.color
            tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
        }
        move(){

            this.x+=this.xmom
            this.y+=this.ymom

        }
    }
    class Triangle{
        constructor(x, y, color, length){
            this.x = x
            this.y = y
            this.color= color
            this.length = length

            this.triangle = 1
            this.x1 = this.x + this.length
            this.x2 = this.x - this.length
            this.tip = this.y - this.length*2

            this.accept1 = (this.y-this.tip)/(this.x1-this.x)
            this.accept2 = (this.y-this.tip)/(this.x2-this.x)

        }
        draw(){

            tutorial_canvas_context.fillStyle = this.color
            tutorial_canvas_context.strokeStyle = this.color
            tutorial_canvas_context.lineWidth = .1
            tutorial_canvas_context.moveTo(this.x, this.y)
            tutorial_canvas_context.lineTo(this.x1, this.y)
            tutorial_canvas_context.lineTo(this.x, this.tip)
            tutorial_canvas_context.lineTo(this.x2, this.y)
            tutorial_canvas_context.lineTo(this.x, this.y)

            tutorial_canvas_context.stroke()

            tutorial_canvas_context.fill()


        }
        isPointInside(point){

            this.accept1 = (this.y-this.tip)/(this.x1-this.x)
            this.accept2 = (this.y-this.tip)/(this.x2-this.x)
            if(point.x <= this.x1){
                if(point.y >= this.tip){
                    if(point.y <= this.y){
                        if(point.x >= this.x2){
                            this.basey = point.y-this.tip
                            this.basex = point.x - this.x
                            if(this.basex == 0){
                                return true
                            }
                            this.slope = this.basey/this.basex
                            if(this.slope >= this.accept1){
                                return true
                            }else if(this.slope <= this.accept2){
                                return true
                            }
                        }
                    }
                }
            }
            return false
        }
        
    }
    class Lineset{
        constructor(x,y){
            this.body = new Circle(x+4.5,y+4.5,3,"gray")
            this.lines = []

            for(let h = 0; h<8;h++){
                this.lines[h] = 0
            }
        }
        draw(){
            tutorial_canvas_context.strokeStyle = "#222222"
            for(let h = 0; h<this.lines.length;h++){
                if(this.lines[h] == 1){
                    tutorial_canvas_context.lineWidth = 3
                    if(h==0){
                        tutorial_canvas_context.beginPath()
                        tutorial_canvas_context.moveTo(this.body.x, this.body.y)
                        tutorial_canvas_context.lineTo(this.body.x-4.5, this.body.y-4.5)
                        tutorial_canvas_context.stroke()
                    }
                     if(h==1){
                        tutorial_canvas_context.beginPath()
                        tutorial_canvas_context.moveTo(this.body.x, this.body.y)
                        tutorial_canvas_context.lineTo(this.body.x, this.body.y-4.5)
                        tutorial_canvas_context.stroke()
                    }
                     if(h==2){
                        tutorial_canvas_context.beginPath()
                        tutorial_canvas_context.moveTo(this.body.x, this.body.y)
                        tutorial_canvas_context.lineTo(this.body.x+4.5, this.body.y-4.5)
                        tutorial_canvas_context.stroke()
                    }
                     if(h==3){
                        tutorial_canvas_context.beginPath()
                        tutorial_canvas_context.moveTo(this.body.x, this.body.y)
                        tutorial_canvas_context.lineTo(this.body.x-4.5, this.body.y)
                        tutorial_canvas_context.stroke()
                    }
                     if(h==4){
                        tutorial_canvas_context.beginPath()
                        tutorial_canvas_context.moveTo(this.body.x, this.body.y)
                        tutorial_canvas_context.lineTo(this.body.x+4.5, this.body.y)
                        tutorial_canvas_context.stroke()
                    }
                     if(h==5){
                        tutorial_canvas_context.beginPath()
                        tutorial_canvas_context.moveTo(this.body.x, this.body.y)
                        tutorial_canvas_context.lineTo(this.body.x-4.5, this.body.y+4.5)
                        tutorial_canvas_context.stroke()
                    }
                     if(h==6){
                        tutorial_canvas_context.beginPath()
                        tutorial_canvas_context.moveTo(this.body.x, this.body.y)
                        tutorial_canvas_context.lineTo(this.body.x, this.body.y+4.5)
                        tutorial_canvas_context.stroke()
                    }
                     if(h==7){
                        tutorial_canvas_context.beginPath()
                        tutorial_canvas_context.moveTo(this.body.x, this.body.y)
                        tutorial_canvas_context.lineTo(this.body.x+4.5, this.body.y+4.5)
                        tutorial_canvas_context.stroke()
                    }
                }

            }
        }


    }
    class Rectangle {
        constructor(x, y, height, width, color) {
            this.x = x
            this.y = y
            this.height = height
            this.width = width
            this.color = color
            this.xmom = 0
            this.ymom = 0
            this.waternearby = 0
            this.population = 0
            this.status = 0

            this.detail =  new Circle(0,0,0,"transparent")
            if(Math.random()<.01){

            }
            this.structure = "land"
            this.basecolor =randomGreen()
            // if(Math.random()<.33){
            if(this.x*this.y > 70000){
                this.basecolor = randomTan()
                this.structure = "farmland"
                }
                if(this.x*this.y > 120000){
                this.basecolor = randomGreen()
                this.structure = "land"
                }
                if(this.x*this.y > 90000){
                if(this.x*this.y < 100000){
                    this.basecolor = "blue"
                    this.structure = "water"
                }
                }
            if(this.y==tutorial_canvas.height/2){

                this.structure = "road"
            // this.basecolor =  "orange"//"#444444"
            this.detail = new Lineset(this.x, this.y)
            }
            this.color = this.basecolor
            this.ultrabasecolor = this.basecolor
            this.baseland = this.structure
        }
        draw(){
            tutorial_canvas_context.lineWidth = 1.5
            tutorial_canvas_context.strokeStyle = "black"
            tutorial_canvas_context.fillStyle = this.color
            tutorial_canvas_context.strokeRect(this.x, this.y, this.width, this.height)
            tutorial_canvas_context.fillRect(this.x, this.y, this.width, this.height)
        }
        move(){
            this.x+=this.xmom
            this.y+=this.ymom
        }
        isPointInside(point){
            if(point.x >= this.x){
                if(point.y >= this.y){
                    if(point.x <= this.x+this.width){
                        if(point.y <= this.y+this.height){
                        return true
                        }
                    }
                }
            }
            return false
        }
    }
    class Circle{
        constructor(x, y, radius, color, xmom = 0, ymom = 0){
            this.x = x
            this.y = y
            this.radius = radius
            this.color = color
            this.xmom = xmom
            this.ymom = ymom
            this.lens = 0
        }       
         draw(){
            tutorial_canvas_context.lineWidth = 1
            // tutorial_canvas_context.strokeStyle = "black"
            tutorial_canvas_context.fillStyle = this.color
            tutorial_canvas_context.beginPath();
            tutorial_canvas_context.arc(this.x, this.y, this.radius, 0, (Math.PI*2), true)
            // tutorial_canvas_context.fillStyle = this.color 
            tutorial_canvas_context.stroke(); 
           tutorial_canvas_context.fill()
        }
        move(){
            this.x += this.xmom
            this.y += this.ymom
        }
    }

    class Grid{
        constructor(width, height, color){
            this.width = width
            this.height = height
            this.x = 0
            this.y = 0
            this.blocks = []
            for(let q = 0; this.y<tutorial_canvas.height; q++){
                for(let q = 0; this.x<tutorial_canvas.width; q++){
                    let block
                    if(Math.random() < .91){
                       block = new Rectangle(this.x, this.y, this.height, this.width, color)
                    }else{
                     block = new Rectangle(this.x, this.y, this.height, this.width, "red")
                    }
                    this.blocks.push(block)
                    this.x+=this.width
                }
                this.y+=this.height
                this.x = 0
            }

        }
        draw(){
            for(let b = 0; b<this.blocks.length; b++){
                this.blocks[b].draw()
                this.blocks[b].detail.draw()
            }
        }
    }

    class Agent{
        constructor(grid, color){
            this.grid = grid
            this.body = new Circle(10,10,Math.min(this.grid.width/4, this.grid.height/4), color)
            this.location = this.grid.blocks[Math.floor(Math.random()*this.grid.blocks.length)]
        }
        draw(){
            this.control()
            this.body.x = this.location.x + this.location.width/2
            this.body.y = this.location.y + this.location.height/2
            this.body.draw()
        }
        control(){
            if(keysPressed['w']){
                this.body.y -= this.grid.height
            }
            if(keysPressed['a']){
                this.body.x -= this.grid.width
            }
            if(keysPressed['s']){
                this.body.y += this.grid.height
            }
            if(keysPressed['d']){
                this.body.x += this.grid.width
            }

            for(let g = 0;g<this.grid.blocks.length; g++){
                if(this.body.x > this.grid.blocks[g].x){
                    if(this.body.y > this.grid.blocks[g].y){
                        if(this.body.x < this.grid.blocks[g].x+this.grid.blocks[g].width){
                            if(this.body.y < this.grid.blocks[g].y+this.grid.blocks[g].height){
                                if(this.grid.blocks[g].color != "red"){
                                    this.location = this.grid.blocks[g]
                                }
                            }  
                        }  
                    }
                }


            }


        }

    }

    let board = new Grid(10,10, "blue")
    let smith = new Agent(board, "white")
   
    window.setInterval(function(){ 
        tutorial_canvas_context.clearRect(0,0,tutorial_canvas.width,tutorial_canvas.height)

        board.draw()

        if(keysPressed['h']){
            for(let t = 0; t<board.blocks.length;t++){
                if(board.blocks[t].selected == 1){

                    if(board.blocks[t].structure != "road" &&board.blocks[t].structure != "water"){

                        let approval = 0

                        if(board.blocks[t-71].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-70].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-69].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-1].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+1].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+69].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+70].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+71].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+140].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-139].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-141].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-2].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-140].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-139].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-72].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-68].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+72].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+68].structure == "road"){
                            approval = 1
                        }

                        if(approval == 1){   

                    // if(board.blocks[t+70].structure == "road"){
                        board.blocks[t].structure = "tent"
                        board.blocks[t].basecolor = "orange"
                        board.blocks[t].detail = new Triangle( board.blocks[t].x+4.5, board.blocks[t].y+10, "black", 5)// new Circle(0,0,0,"transparent")

                        board.blocks[t].population = 10
                        board.blocks[t].status = 1
                    // }else if(board.blocks[t-70].structure == "road"){
                    //     board.blocks[t].structure = "tent"
                    //     board.blocks[t].basecolor = "orange"
                    //      board.blocks[t].detail = new Triangle( board.blocks[t].x+4.5, board.blocks[t].y+10, "black", 5)
                    // }else if(board.blocks[t-140].structure == "road"){
                    //     board.blocks[t].structure = "tent"
                    //     board.blocks[t].basecolor = "orange"
                    //     board.blocks[t].detail = new Triangle( board.blocks[t].x+4.5, board.blocks[t].y+10, "black", 5)
                    // }else if(board.blocks[t+140].structure == "road"){
                    //     board.blocks[t].structure = "tent"
                    //     board.blocks[t].basecolor = "orange"
                    //     board.blocks[t].detail = new Triangle( board.blocks[t].x+4.5, board.blocks[t].y+10, "black", 5)
                    // }

                    }
                }
                    board.blocks[t].selected = 0
                }
            }
            for(let t = 0; t<board.blocks.length;t++){
                board.blocks[t].selected = 0
                board.blocks[t].color = board.blocks[t].basecolor
            }
        }
        if(keysPressed['f']){
            for(let t = 0; t<board.blocks.length;t++){
                if(board.blocks[t].selected == 1){

                    if(board.blocks[t].structure != "road" && board.blocks[t].structure != "water"&& board.blocks[t].structure != "tent"){
                        if(board.blocks[t].structure == "farmland"){
                        let approval = 0

                        if(board.blocks[t-71].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-70].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-69].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-1].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+1].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+69].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+70].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+71].structure == "road"){
                            approval = 1
                        }

                        if(approval == 1){
                            
                        for(let g = 0; g<board.blocks.length;g++){

                            if(board.blocks[g].selected == 1){
                             board.blocks[g].structure = "farm"
                             board.blocks[g].basecolor = "yellow"
                             board.blocks[g].selected = 0
                             board.blocks[g].detail = new Circle( board.blocks[g].x+(board.blocks[g].width/2.25), board.blocks[g].y+(board.blocks[g].height/2.25), 2.5, randomGreen())
                        
                             }
     
                         }

                    t = board.blocks.length

                for(let g = 0; g<board.blocks.length;g++){
                    board.blocks[g].selected = 0
                }
                        }
                    }
                }
                    // board.blocks[t].selected = 0
                }
            }
            for(let t = 0; t<board.blocks.length;t++){
                board.blocks[t].selected = 0
                board.blocks[t].color = board.blocks[t].basecolor
            }
        }

        if(keysPressed['w']){
            for(let t = 0; t<board.blocks.length;t++){
                if(board.blocks[t].selected == 1){

                    if(board.blocks[t].structure != "road" && board.blocks[t].structure != "water"&& board.blocks[t].structure != "tent"){
                        // if(board.blocks[t].structure == "farmland"){
                        let approval = 0
                        // let approval2 = 0

                        if(board.blocks[t-71].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-70].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-69].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-1].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+1].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+69].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+70].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+71].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+140].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-139].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-141].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-2].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+2].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-140].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-139].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-72].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-68].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+72].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+68].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-73].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-67].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+73].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+67].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-210].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+210].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-211].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+211].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-212].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+212].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-209].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+208].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+209].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-208].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+3].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-3].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+4].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-4].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+74].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-74].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+66].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-66].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+214].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-214].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+206].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-206].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+207].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-207].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+213].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-213].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+280].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-280].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+281].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-281].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+282].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-282].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+283].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-283].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+284].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-284].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+276].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-276].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+277].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-277].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+278].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-278].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t+279].structure == "water"){
                            approval = 1
                        }else if(board.blocks[t-279].structure == "water"){
                            approval = 1
                        }

                        if(board.blocks[t-71].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-70].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-69].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-1].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+1].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+69].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+70].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+71].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+140].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-139].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-141].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-2].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+2].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-140].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-139].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-72].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-68].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+72].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+68].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-73].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-67].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+73].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+67].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-210].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+210].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-211].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+211].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-212].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+212].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-209].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+208].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+209].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-208].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+3].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-3].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+4].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-4].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+74].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-74].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+66].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-66].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+214].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-214].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+206].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-206].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+205].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-207].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+207].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-213].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+213].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+280].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-280].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+281].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-281].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+282].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-282].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+283].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-283].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+284].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-284].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+276].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-276].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+277].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-277].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+278].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-278].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t+279].structure == "well"){
                            approval = 1
                        }else if(board.blocks[t-279].structure == "well"){
                            approval = 1
                        }

                        if(approval == 1 ){
                            
                          sorted = 0
                        for(let g = 0; g<board.blocks.length;g++){

                            if(board.blocks[g].selected == 1){
                             board.blocks[g].structure = "well"
                             board.blocks[g].basecolor = randomGreen()
                             board.blocks[g].selected = 0
                             board.blocks[g].detail = new Circle( board.blocks[g].x+(board.blocks[g].width/2.25), board.blocks[g].y+(board.blocks[g].height/2.25), 2.5, "cyan")
                        
                             }
     
                         }

                    t = board.blocks.length

                for(let g = 0; g<board.blocks.length;g++){
                    board.blocks[g].selected = 0
                }
                        }
                    // }
                }
                    // board.blocks[t].selected = 0
                }
            }
            for(let t = 0; t<board.blocks.length;t++){
                board.blocks[t].selected = 0
                board.blocks[t].color = board.blocks[t].basecolor
            }
        }


        if(keysPressed['z']){
            for(let t = 0; t<board.blocks.length;t++){
                if(board.blocks[t].structure != "road"){

                    if( board.blocks[t].selected == 1){

                        board.blocks[t].structure = board.blocks[t].baseland
                        board.blocks[t].basecolor =  board.blocks[t].ultrabasecolor

                        board.blocks[t].status = 0 
                        board.blocks[t].population = 0 
                        board.blocks[t].detail = new Circle(0,0,0,"transparent")

                    }

                }

                        board.blocks[t].color =  board.blocks[t].basecolor
                board.blocks[t].selected = 0
            }
        }
        if(keysPressed['q']){
            for(let t = 0; t<board.blocks.length;t++){
                if(board.blocks[t].selected == 1){

                    if(board.blocks[t].structure != "road" && board.blocks[t].structure != "water"&& board.blocks[t].structure != "tent"){
                        // if(board.blocks[t].structure == "farmland"){
                        let approval = 0
                        let approval2 = 0

                        if(board.blocks[t-71].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-70].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-69].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-1].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+1].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+69].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+70].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+71].structure == "road"){
                            approval = 1
                        }
                        if(board.blocks[t-71].structure == "water"){
                            approval2 = 1
                        }else if(board.blocks[t-70].structure == "water"){
                            approval2 = 1
                        }else if(board.blocks[t-69].structure == "water"){
                            approval2 = 1
                        }else if(board.blocks[t-1].structure == "water"){
                            approval2 = 1
                        }else if(board.blocks[t+1].structure == "water"){
                            approval2 = 1
                        }else if(board.blocks[t+69].structure == "water"){
                            approval2 = 1
                        }else if(board.blocks[t+70].structure == "water"){
                            approval2 = 1
                        }else if(board.blocks[t+71].structure == "water"){
                            approval2 = 1
                        }

                        if(approval == 1  && approval2 == 1){
                            
                        // for(let g = 0; g<board.blocks.length;g++){

                            if(board.blocks[t].selected == 1){
                             board.blocks[t].structure = "quarry"
                             board.blocks[t].basecolor = "pink"
                             board.blocks[t].selected = 0
                        
                             
                             board.blocks[t].color = board.blocks[t].basecolor 
                             board.blocks[t].detail = new Circle( board.blocks[t].x+(board.blocks[t].width/2.25), board.blocks[t].y+(board.blocks[t].height/2.25), 2.5, "brown")
                            }
     
                        //  }

                    // t = board.blocks.length

                // for(let g = 0; g<board.blocks.length;g++){
                //     board.blocks[g].selected = 0
                // }
                        }

                        if(board.blocks[t].selected == 1){
                            board.blocks[t].selected = 0
                            board.blocks[t].color = board.blocks[t].basecolor 
                        }
                    }
                }
                    // board.blocks[t].selected = 0
                }
            }
        if(keysPressed['p']){
            for(let t = 0; t<board.blocks.length;t++){
                if(board.blocks[t].selected == 1){

                    if(board.blocks[t].structure != "road" && board.blocks[t].structure != "water"&& board.blocks[t].structure != "tent"){
                        // if(board.blocks[t].structure == "farmland"){
                        let approval = 0
                        // let approval2 = 0

                        if(board.blocks[t-71].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-70].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-69].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t-1].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+1].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+69].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+70].structure == "road"){
                            approval = 1
                        }else if(board.blocks[t+71].structure == "road"){
                            approval = 1
                        }

                        if(approval == 1 ){
                            
                        for(let g = 0; g<board.blocks.length;g++){

                            if(board.blocks[g].selected == 1){
                             board.blocks[g].structure = "pottery"
                             board.blocks[g].basecolor = "pink"
                             board.blocks[g].selected = 0
                             board.blocks[g].detail = new Square( board.blocks[g].x+2, board.blocks[g].y+2, 5, 5,  "brown")
                        
                             }
     
                         }

                    t = board.blocks.length

                for(let g = 0; g<board.blocks.length;g++){
                    board.blocks[g].selected = 0
                }
                        }
                    // }
                }
                    // board.blocks[t].selected = 0
                }
            }
            for(let t = 0; t<board.blocks.length;t++){
                board.blocks[t].selected = 0
                board.blocks[t].color = board.blocks[t].basecolor
            }
        }
        if(keysPressed['r']){
            for(let t = 0; t<board.blocks.length;t++){
                if(board.blocks[t].selected == 1){
                    let approval = 0

                    if(board.blocks[t-71].structure == "road"){
                        approval = 1
                    }else if(board.blocks[t-70].structure == "road"){
                        approval = 1
                    }else if(board.blocks[t-69].structure == "road"){
                        approval = 1
                    }else if(board.blocks[t-1].structure == "road"){
                        approval = 1
                    }else if(board.blocks[t+1].structure == "road"){
                        approval = 1
                    }else if(board.blocks[t+69].structure == "road"){
                        approval = 1
                    }else if(board.blocks[t+70].structure == "road"){
                        approval = 1
                    }else if(board.blocks[t+71].structure == "road"){
                        approval = 1
                    }

                    if(approval == 1){
                        for(let g = 0; g<board.blocks.length;g++){

                       if(board.blocks[g].selected == 1){
                           sorted = 0
                        board.blocks[g].structure = "road"
                        // board.blocks[g].basecolor =  "orange"//"#444444"
                        board.blocks[g].selected = 0
                        board.blocks[g].detail = new Lineset(board.blocks[g].x, board.blocks[g].y)
                        }

                    }

                    t = board.blocks.length

                for(let g = 0; g<board.blocks.length;g++){
                    board.blocks[g].selected = 0
                }
                }

            }
        }

        for(let t = 0; t<board.blocks.length;t++){
            board.blocks[t].selected = 0
            board.blocks[t].color = board.blocks[t].basecolor
        }
    }

    if(sorted == 0){


        for(let t = 0; t<board.blocks.length; t++){
            if(board.blocks[t].structure == "road"){
                if(board.blocks[t-71].structure == "road"){
                    board.blocks[t].detail.lines[0] = 1
                }
                 if(board.blocks[t-70].structure == "road"){
                    board.blocks[t].detail.lines[1] = 1
                }
                 if(board.blocks[t-69].structure == "road"){
                    board.blocks[t].detail.lines[2] = 1
                }
                 if(board.blocks[t-1].structure == "road"){
                    board.blocks[t].detail.lines[3] = 1
                }
                 if(board.blocks[t+1].structure == "road"){
                    board.blocks[t].detail.lines[4] = 1
                }
                 if(board.blocks[t+69].structure == "road"){
                    board.blocks[t].detail.lines[5] = 1
                }
                 if(board.blocks[t+70].structure == "road"){
                    board.blocks[t].detail.lines[6] = 1
                }
                 if(board.blocks[t+71].structure == "road"){
                    board.blocks[t].detail.lines[7] = 1
                }
            }
        }
        for(let t = 284; t<board.blocks.length-284; t++){
            if(board.blocks[t].structure == "tent" || board.blocks[t].structure == "farm"){
             
                let approval = 0
                if(board.blocks[t-71].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-70].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-69].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-1].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+1].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+69].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+70].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+71].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+140].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-139].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-141].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-2].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+2].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-140].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-139].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-72].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-68].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+72].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+68].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-73].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-67].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+73].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+67].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-210].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+210].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-211].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+211].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-212].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+212].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-209].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+208].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+209].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-208].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+3].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-3].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+4].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-4].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+74].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-74].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+66].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-66].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+214].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-214].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+206].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-206].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+205].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-207].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+207].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-213].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+213].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+280].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-280].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+281].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-281].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+282].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-282].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+283].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-283].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+284].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-284].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+276].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-276].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+277].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-277].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+278].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-278].structure == "well"){
                    approval = 1
                }else if(board.blocks[t+279].structure == "well"){
                    approval = 1
                }else if(board.blocks[t-279].structure == "well"){
                    approval = 1
                }


                if(approval == 1){
                    board.blocks[t].waternearby = 1
                }
            }
        }
        sorted = 1
    }
    


    let quarries = 0
    let potters = 0
    let houses = 0
    let farms = 0
    let population = 0


    // for(let t = 0; t<board.blocks.length; t++){ 
    //     if(board.blocks[t].structure == "tent"){
    //         // console.log(board.blocks[t])
    //     }
    // }

    for(let t = 0; t<board.blocks.length; t++){

            if(board.blocks[t].structure == "farm"){
                farms++
            }else if(board.blocks[t].structure == "pottery"){
                potters++
            }else if(board.blocks[t].structure == "quarry"){
                quarries++
            }else if(board.blocks[t].structure == "tent"){
                houses+=board.blocks[t].status
            }

            population += board.blocks[t].population

    }

    for(let t = 0; t<board.blocks.length; t++){

       if(board.blocks[t].structure == "tent"){
        if(farms/population > .00999 ){
            if(board.blocks[t].waternearby == 1 ){
                if(quarries/potters > .3  && potters > 0){
                    if(potters/houses > .1){
                        if(Math.random()<.52){
                            board.blocks[t].population++
                             if(board.blocks[t].population >  (board.blocks[t].status*20)){
                                 if(board.blocks[t].status<3){
                                    board.blocks[t].status++
                                 }
                            }
                        }else{
                            board.blocks[t].population--
                            if(board.blocks[t].population < 5){
                                board.blocks[t].population = 5
                            }
                        }
    
                    }else{
                    if(Math.random()<.51){
                        board.blocks[t].population++
                         if(board.blocks[t].population >  (board.blocks[t].status*20)){
                             if(board.blocks[t].status<2){
                                board.blocks[t].status++
                             }
                        }
                    }else{
                        board.blocks[t].population--
                        if(board.blocks[t].population < 5){
                            board.blocks[t].population = 5
                        }
                    }
                    }
               }else{
                if(Math.random()<.5){
                    board.blocks[t].population++
                     if(board.blocks[t].population >  (board.blocks[t].status*20)){
                        board.blocks[t].population  =   (board.blocks[t].status*20)
                    }
                }else{
                    board.blocks[t].population--
                    if(board.blocks[t].population < 5){
                        board.blocks[t].population = 5
                    }
                }
           }
            }else{
                if(Math.random()<.49){
                    board.blocks[t].population++
                     if(board.blocks[t].population >  (board.blocks[t].status*20)){
                        board.blocks[t].population  =   (board.blocks[t].status*20)
                    }
                }else{
                    board.blocks[t].population--
                    if(board.blocks[t].population < 5){
                        board.blocks[t].population = 5
                    }
                }

            }
           } else{
            if(Math.random()<.45){
                board.blocks[t].population++
                 if(board.blocks[t].population >  (board.blocks[t].status*20)){
                    board.blocks[t].population  =   (board.blocks[t].status*20)
                }
            }else{
                board.blocks[t].population--
                if(board.blocks[t].population < 5){
                    board.blocks[t].population = 5
                }
            }
        }
       }
    }
    

    


    
    if(keysPressed['x']){

        for(let t = 0; t<board.blocks.length; t++){
            board.blocks[t].selected = 0
            board.blocks[t].color = board.blocks[t].basecolor 
        }

    }


    tutorial_canvas_context.fillStyle = "white";
    tutorial_canvas_context.font = `${18}px Arial`;
    tutorial_canvas_context.fillText(`pop: ${population}`, 10,20);

    }, 200) 

    function randomGreen(){
    var letters = '0123456789ABCDEF';
    var color = '#00';
    for (var i = 0; i < 2; i++) {
      color += letters[(Math.floor(Math.random() * 4)+8)];
    }
    color += "00"
    return color;
  }


  function randomTan(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i <4; i++) {
      color += letters[(Math.floor(Math.random() * 3)+8)];
    }
    color += "33"
    return color;
  }


})