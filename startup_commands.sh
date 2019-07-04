# Huion Gt-191 command to keep stylus input on second screen. Finds region through xrandr. 
xsetwacom set "HID 256c:006e Pen stylus" MapToOutput 1920x1080+0+0

# imwheel reset to keep back button on mouse functioning 
imwheel --kill --buttons "4 5"
