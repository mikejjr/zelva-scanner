let X = 1
turtle.setPosition(0, 0)
turtle.turnRight()
turtle.setSpeed(20)
basic.forever(function () {
    led.setBrightness(X)
    turtle.forward(4)
    turtle.turnRight()
    turtle.forward(1)
    turtle.turnRight()
    turtle.forward(4)
    turtle.turnLeft()
    turtle.forward(1)
    turtle.turnLeft()
    X += 20
    if (X >= 255) {
        X = 1
    }
})
