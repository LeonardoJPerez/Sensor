from sense_hat import SenseHat

sense = SenseHat()
sense.set_rotation(r=180)
# sense.show_message("Fags!", text_colour=[0, 255, 0])


print round(sense.get_temperature_from_humidity(), 2)
print round(sense.get_temperature_from_pressure(), 2)
