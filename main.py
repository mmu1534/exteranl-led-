def on_button_pressed_a():
    pins.digital_write_pin(DigitalPin.P0, 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.show_string("A")

def on_forever():
    pass
basic.forever(on_forever)
