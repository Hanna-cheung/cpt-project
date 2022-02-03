function keyAnswer (input2: number) {
    if (input2 == randomNumber) {
        game.over(true)
    } else {
        game.over(true)
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.splash(randomNumber)
    pause(2000)
})
let randomNumber = 0
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dd5555dd1dddddddddddddddddd5dddddddddddd
    ddddddddddddddddddddddd4dddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddddddddd
    ddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ddddddddddddddddddddddddd
    ddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ddddd
    dddddddddddddddddbdddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddd
    dddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddddddd5ddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddd1ddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddd5dddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddd1ddddddddddddddddddddbdddddddddddddddddddddddddddddddd55ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddddddddddd
    dddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddd4ddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddbdddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddbddddddddddddddd
    dddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddbddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddd5dddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddd5dddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddbddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddd1dddd1ddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddbddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddd
    ddddddddddddddddddd4dddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddbdddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddbdddddddddddddddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd4ddddddddddddddddddddddddddddddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd4ddddddddddddddddddddddddddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddd
    dddddddddddddddddddddd4ddddddddddddddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddd5dddddddddddd11dddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddddddddd
    ddddddddddddddddddddddddddd111ddddddddddddd5dddddddddddddd1dddd5dddddddddddddddddddbdddddddddddd5ddddddddddddddddddddddddddddddddddddddddd4ddddddddddddddddddddd
    dddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddd1155dddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddd5dddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddd5ddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddd
    ddddddddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd1dddddddddddddddddddddddddddddd5dddddd5dddddddddddddddddddddddddddddd5dddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd1dddddddddddddddddddddddddddddd5ddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddbdddddddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55dddddddddddddddddddddddddddd1dddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55dddd55555ddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ddddddddddddd1dddddddddddddddddd4ddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddddddddddddddddbdddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1ddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd5ddddddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddd
    dddddddddddddddddddddddddddd1dddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddd1ddddddddddddddddddddddddddddd1ddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddddd4ddd4ddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11ddddddddddddddddddddddddddddd
    dddddddddddd4ddddddddddddddddddddddddddddddddddddddddddddddd5ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd55dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddd555dddddddddddddddddd4ddddddddddddddddddddddbdddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
tiles.setTilemap(tilemap`level1`)
let key = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 5 . . . . . 
    . . . . . . 5 4 4 4 4 . . . . . 
    . . . . . . 5 4 . . . . . . . . 
    . . . . . . 5 4 . . . . . . . . 
    . . . . . . 5 4 . . . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 4 4 4 . . . . . . 
    . . . . . . 5 4 . . . . . . . . 
    . . . . . . 5 4 . . . . . . . . 
    . . . . 5 5 5 5 5 4 . . . . . . 
    . . . . 5 4 4 4 5 4 . . . . . . 
    . . 5 5 5 4 . . 5 5 5 4 . . . . 
    . . 4 5 5 4 . . 5 5 4 4 . . . . 
    . . . . 5 5 5 5 5 4 . . . . . . 
    . . . . 4 4 4 4 4 4 . . . . . . 
    `, SpriteKind.Projectile)
tiles.placeOnRandomTile(key, assets.tile`myTile6`)
let batHero = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(batHero)
tiles.placeOnRandomTile(batHero, assets.tile`myTile3`)
controller.moveSprite(batHero)
let moveLeft = [
img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c . . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f b 3 b c 3 b c f b b c c c . 
    . c b b b b b b c f b c b c c . 
    . c b b b b b b c b b c b b c . 
    c b 1 b b b 1 b b b c c c b c . 
    c b b b b b b b b c c c c c . . 
    f b c b b b c b b b b f c . . . 
    f b 1 f f f 1 b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . c c . . c c . . . . . . . . 
    . . c 3 c c 3 c c c . . . . . . 
    . c b 3 b c 3 b c c c . . . . . 
    . c b b b b b b b b f f . . . . 
    c c b b b b b b b b f f . . . . 
    c b 1 b b b 1 b b c f f f . . . 
    c b b b b b b b b f f f f . . . 
    f b c b b b c b c c b b b . . . 
    f b 1 f f f 1 b f c c c c . . . 
    . f b b b b b b f b b c c . . . 
    c c f b b b b b c c b b c . . . 
    c c c f f f f f f c c b b c . . 
    . c c c . . . . . . c c c c c . 
    . . c c c . . . . . . . c c c c 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . f f f . . . . . . . . f f f . 
    f f c . . . . . . . f c b b c . 
    f c c . . . . . . f c b b c . . 
    c f . . . . . . . f b c c c . . 
    c f f . . . . . f f b b c c . . 
    f f f c c . c c f b c b b c . . 
    f f f c c c c c f b c c b c . . 
    . f c 3 c c 3 b c b c c c . . . 
    . c b 3 b c 3 b b c c c c . . . 
    c c b b b b b b b b c c . . . . 
    c b 1 b b b 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    f b c b b b c b b b b f . . . . 
    . f 1 f f f 1 b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `,
img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c 1 b b b 1 b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b 1 f f 1 c b b b b f . . . . 
    f f 1 f f 1 f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `,
img`
    . . f f f . . . . . . . . . . . 
    f f f c c . . . . . . . . f f f 
    f f c c c . c c . . . f c b b c 
    f f c 3 c c 3 c c f f b b b c . 
    f f c 3 b c 3 b c f b b c c c . 
    f c b b b b b b c f b c b c c . 
    c c 1 b b b 1 b c b b c b b c . 
    c b b b b b b b b b c c c b c . 
    c b 1 f f 1 c b b c c c c c . . 
    c f 1 f f 1 f b b b b f c . . . 
    f f f f f f f b b b b f c . . . 
    f f 2 2 2 2 f b b b b f c c . . 
    . f 2 2 2 2 2 b b b c f . . . . 
    . . f 2 2 2 b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . c c . c c . . . . . . . . 
    . . f 3 c c 3 c c c . . . . . . 
    . f c 3 b c 3 b c c c . . . . . 
    f c b b b b b b b b f f . . . . 
    c c 1 b b b 1 b b b f f . . . . 
    c b b b b b b b b c f f f . . . 
    c b 1 f f 1 c b b f f f f . . . 
    f f 1 f f 1 f b c c b b b . . . 
    f f f f f f f b f c c c c . . . 
    f f 2 2 2 2 f b f b b c c c . . 
    . f 2 2 2 2 2 b c c b b c . . . 
    . . f 2 2 2 b f f c c b b c . . 
    . . . f f f f f f f c c c c c . 
    . . . . . . . . . . . . c c c c 
    `
]
let moveRight = [
img`
    . . . . . . . . . . . f f f . . 
    f f f . . . . . . . . c c f f f 
    c b b c f . . . c c . . c c f f 
    . c b b b f f c c 3 c c 3 c f f 
    . c c c b b f c b 3 c b 3 b f f 
    . c c b c b f c b b b b b b c . 
    . c b b c b b c b b b b b b c . 
    . c b c c c b b b 1 b b b 1 b c 
    . . c c c c c b b b b b b b b c 
    . . . c f b b b b c b b b c b f 
    . . c c f b b b b 1 f f f 1 b f 
    . . . . f c b b b b b b b b f . 
    . . . . . f c b b b b b b f . . 
    . . . . . . f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c . . c c . . 
    . . . . . . c c c 3 c c 3 c . . 
    . . . . . c c c b 3 c b 3 b c . 
    . . . . f f b b b b b b b b c . 
    . . . . f f b b b b b b b b c c 
    . . . f f f c b b 1 b b b 1 b c 
    . . . f f f f b b b b b b b b c 
    . . . b b b c c b c b b b c b f 
    . . . c c c c f b 1 f f f 1 b f 
    . . . c c b b f b b b b b b f . 
    . . . c b b c c b b b b b f c c 
    . . c b b c c f f f f f f c c c 
    . c c c c c . . . . . . c c c . 
    c c c c . . . . . . . c c c . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . f f f . . . . . . . . f f f . 
    . c b b c f . . . . . . . c f f 
    . . c b b c f . . . . . . c c f 
    . . c c c b f . . . . . . . f c 
    . . c c b b f f . . . . . f f c 
    . . c b b c b f c c . c c f f f 
    . . c b c c b f c c c c c f f f 
    . . . c c c b c b 3 c c 3 c f . 
    . . . c c c c b b 3 c b 3 b c . 
    . . . . c c b b b b b b b b c c 
    . . . c f b b b b 1 b b b 1 b c 
    . . c c f b b b b b b b b b b f 
    . . . . f b b b b c b b b c b f 
    . . . . f c b b b 1 f f f 1 f . 
    . . . . . f c b b b b b b f . . 
    . . . . . . f f f f f f f . . . 
    `,
img`
    f f f . . . . . . . . f f f . . 
    c b b c f . . . . . . c c f f . 
    . c b b c f . . . . . . c c f f 
    . c c c b f . . . . . . c f c f 
    . c c b b c f . c c . c c f f f 
    . c b b c b f c c 3 c c 3 c f f 
    . c b c c b f c b 3 c b 3 b f f 
    . . c c c b b c b 1 b b b 1 c . 
    . . . c c c c b b 1 b b b 1 c . 
    . . . . c c b b b b b b b b b c 
    . . . . f b b b b c 1 f f 1 b c 
    . . . c f b b b b f 1 f f 1 f f 
    . . c c f b b b b f 2 2 2 2 f f 
    . . . . f c b b b b 2 2 2 2 f . 
    . . . . . f c b b b b b b f . . 
    . . . . . . f f f f f f f . . . 
    `,
img`
    . . . . . . . . . . . f f f . . 
    f f f . . . . . . . . c c f f f 
    c b b c f . . . c c . c c c f f 
    . c b b b f f c c 3 c c 3 c f f 
    . c c c b b f c b 3 c b 3 c f f 
    . c c b c b f c b b b b b b c f 
    . c b b c b b c b 1 b b b 1 c c 
    . c b c c c b b b b b b b b b c 
    . . c c c c c b b c 1 f f 1 b c 
    . . . c f b b b b f 1 f f 1 f c 
    . . . c f b b b b f f f f f f f 
    . . c c f b b b b f 2 2 2 2 f f 
    . . . . f c b b b 2 2 2 2 2 f . 
    . . . . . f c b b b 2 2 2 f . . 
    . . . . . . f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c . c c . . . 
    . . . . . . c c c 3 c c 3 f . . 
    . . . . . c c c b 3 c b 3 c f . 
    . . . . f f b b b b b b b b c f 
    . . . . f f b b b 1 b b b 1 c c 
    . . . f f f c b b b b b b b b c 
    . . . f f f f b b c 1 f f 1 b c 
    . . . b b b c c b f 1 f f 1 f f 
    . . . c c c c f b f f f f f f f 
    . . c c c b b f b f 2 2 2 2 f f 
    . . . c b b c c b 2 2 2 2 2 f . 
    . . c b b c c f f b 2 2 2 f . . 
    . c c c c c f f f f f f f . . . 
    c c c c . . . . . . . . . . . . 
    `
]
randomNumber = randint(0, 10)
forever(function () {
    if (controller.left.isPressed() || controller.down.isPressed()) {
        batHero.setImage(moveLeft._pickRandom())
    } else if (controller.right.isPressed() || controller.up.isPressed()) {
        batHero.setImage(moveRight._pickRandom())
    }
})
