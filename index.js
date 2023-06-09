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
        constructor({position, velocity, image, frames = { max: 1 } }) {
            this.position = position
            this.image = image
            this.frames = frames

            this.image.onload = () => {
            this.width = this.image.width / this.frames.max
            this.height = this.image.height
            }
        }
    

        draw() {
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
            x: canvas.width / 2 - 192 / 4 / 2,
            y: canvas.height / 2 - 68 / 2
        },
        image: playerImage,
        frames: {
            max: 4
        }
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

    const movables = [background, ...boundaries]   

    function rectangularCollision({rectangle1, rectangle2}) {
        return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y 
    )
}

 function animate() { 
     window.requestAnimationFrame(animate)
        background.draw()
        boundaries.forEach(Boundary => {
            Boundary.draw()
            if (rectangularCollision({
                rectangle1: player,
                rectangle2: Boundary
            })
            ) {
                console.log('collision')
            }
        })
        player.draw()

      

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


        
        

    


