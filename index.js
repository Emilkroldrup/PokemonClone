const canvas = document.querySelector('canvas')

const ctx = canvas.getContext('2d')

// Set the canvas size to the window size
    canvas.width = 1024
    canvas.height = 576

    ctx.fillStyle = 'White'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const player = new Image()
    player.src = 'images/PlayerDown.png'

    const image = new Image()
    image.src = 'images/Pellet town.png'

    class Sprite {
        constructor({position, velocity, image}) {
            this.position = position
            this.image = image
        }
    

        draw() {
            ctx.drawImage(this.image, this.position.x, this.position.y)
        }
    }

    const background = new Sprite({
        position: {
            x: -750, 
            y: -600
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


 function animate() { 
     window.requestAnimationFrame(animate)
        background.draw(),
        ctx.drawImage(
            player,
            0,
            0,
            player.width / 4,
            player.height,
            canvas.width / 2 - player.width / 4,
            canvas.height / 2 - player.height / 2,
            player.width / 4,
            player.height
        ) 

        if (keys.w.pressed ) background.position.y += 3
        if (keys.a.pressed ) background.position.x += 3
        if (keys.s.pressed ) background.position.y -= 3
        if (keys.d.pressed ) background.position.x -= 3
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


        
        

    
       


