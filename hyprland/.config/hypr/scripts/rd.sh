#! /bin/bash

while true; do 
    ws="$(hyprctl activeworkspace)"
    ws_short=${ws:13:1}
    ws_num=$((ws_short))
    
    if [ "$ws_num" -eq 1 ]; then
        echo "BRUH"
    else
        echo "NOICE"    
        echo "$ws_short"
    fi
done

