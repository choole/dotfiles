#!/bin/bash
if [[ $2 == true ]]; then
    $1 -S waybar
fi
ln -s ~/.config/waybar/config /etc/xdg/waybar/config.jsonc
ln -s ~/.config/waybar/style.css /etc/xdg/waybar/style.css
