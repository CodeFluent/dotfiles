#!/bin/bash

# source for the terminal
xrdb -merge ~/.xres &

# set a wallpaper
sh ~/.fehbg &

# font
xset fp+ ~/.fonts &
xset fp rehash &

# set keyboard layout to us
setxkbmap us &

# Start your wm using xinit [wm]
ds=${1:-2bwm}
case $ds in
    swm           ) exec swm ;;
    2bwm	      ) exec 2bwm ;;
    dwm           ) exec dwm ;;
    openbox       ) exec openbox-session ;;
    pekwm         ) exec pekwm ;;
    xfce4	      ) exec startxfce4 ;;
    *) exec $1 ;;
esa