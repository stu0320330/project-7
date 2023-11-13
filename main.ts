input.onButtonPressed(Button.A, function () {
    Left = 1
    Right = 0
    Delay += -200
    Tempo += -200
})
input.onButtonPressed(Button.B, function () {
    Left = 1
    Right = 0
    Delay += -200
    Tempo += -200
})
let Right = 0
let Left = 0
let Delay = 500
let Tempo = 450
Left = 0
Right = 0
basic.forever(function () {
    music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
})
