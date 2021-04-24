def on_button_pressed_a():
    radio.send_string("A")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_string("AB")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    radio.send_string("B")
input.on_button_pressed(Button.B, on_button_pressed_b)

basic.show_icon(IconNames.HEART)
radio.set_group(18)

def on_forever():
    pass
basic.forever(on_forever)
