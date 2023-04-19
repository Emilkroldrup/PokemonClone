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
    image.onload = () => {
        ctx.drawImage(image, -750, -600)
        ctx.drawImage(
            player,
            0,
            0,
            player.width / 4,
            player.height,
            canvas.width / 2 - player.width / 4,
            canvas.height / 2 - player.height / 2,
            player.width / 4,
            player.height)
    }

    
       


