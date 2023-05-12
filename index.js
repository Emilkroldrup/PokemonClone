const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

// Set the canvas size to the window size
    canvas.width = 1024
    canvas.height = 576
    
    const collisionsMap = []
    for (let i = 0; i < collisions.length; i += 70) {
        collisionsMap.push(collisions.slice(i, 70 + i))
    }
    class Boundary {
        static width = 48
        static height = 48
        constructor({ position }) {
            this.position = position
            this.width = 48
            this.height = 48
        }

        draw() {
            c.fillStyle = 'red'
            c.fillRect(this.position.x, this.position.y, this.width, this.height)
        }
        
    }
    

    const boundaries = []
    const offset = {
        x: -750,
        y: - 600
    }

    collisionsMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
          if (symbol === 1025)
            boundaries.push(
              new Boundary({
                position: {
                  x: j * Boundary.width + offset.x,
                  y: i * Boundary.height + offset.y
                }
              })
            )
        })
      })


    const playerImage = new Image()
    playerImage.src = 'images/PlayerDown.png'

    const image = new Image()
    image.src = 'images/Pellet town.png'

    class Sprite {
        constructor({position, velocity, image, frames = {max: 1}}) {
            this.position = position
            this.image = image
            this.frames = frames
        }
    

        draw() {
            c.drawImage(this.image, this.position.x, this.position.y)
            c.drawImage(
                this.image,
                0,
                0,
                this.image.width / this.frames.max,
                this.image.height,
                this.position.x,
                this.position.y,
                this.image.width / this.frames.max,
                this.image.height
            ) 
        }
    }

   

    const player = new Sprite({
        position: {
            x: canvas.width / 2 - 192 / 4,
            y: canvas.height / 2 - 68 / 2
        },
        image: playerImage,
    })


    const background = new Sprite({
        position: {
            x: offset.x,
            y: offset.y
        },
        image: image
    })


//animation and movement of the player
    const keys = {
        w: {
            pressed: false,
        },
        a: {
            pressed: false,
        },
        s: {
            pressed: false,
        },
        d: {
            pressed: false,
        }
    }

 const testBoundary = new Boundary({
        position: {
            x: 400,
            y: 400
        }
    })

    const movables = [background, testBoundary]
 function animate() { 
     window.requestAnimationFrame(animate)
        background.draw()
        //boundaries.forEach(Boundary => {
            //Boundary.draw()
        //})
        testBoundary.draw()
        player.draw()

       // if (player.position.x + player.width)

        if (keys.w.pressed ) {
            movables.forEach((movable) => {
             movable.position.y += 3
        })}
        if (keys.a.pressed ) { 
            movables.forEach((movable) => {
            movable.position.x += 3
        })}
        if (keys.s.pressed ) { 
            movables.forEach((movable) => {
            movable.position.y -= 3
        })}
        if (keys.d.pressed ) { 
            movables.forEach((movable) => {
            movable.position.x -= 3
        })}
    }
 
    animate()

// Key tracker
    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'w':
                keys.w.pressed = true
                break
            case 'a':
                keys.a.pressed = true
                break
            case 's':
                keys.s.pressed = true
                break
            case 'd':
                keys.d.pressed = true
                break
        }
    })

    window.addEventListener('keyup', (e) => {
        switch (e.key) {
            case 'w':
                keys.w.pressed = false
                break
            case 'a':
                keys.a.pressed = false
                break
            case 's':
                keys.s.pressed = false
                break
            case 'd':
                keys.d.pressed = false
                break
        }
    })


        
        

    
       


