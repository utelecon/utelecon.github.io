#!/bin/sh

INPUT_FILE="pairs.txt"

while IFS=, read -r path1 path2 rest; do
    if [ -z "$path1" ]; then
        continue
    fi
    
    # パスが2つあることを確認
    if [ -z "$path2" ]; then
        echo "警告: 行 \"$path1\" にはパスが1つしかありません。スキップします。"
        continue
    fi
    
    if diff -q "../dist/$path1" "../../dist_master/$path2" > /dev/null; then
        # echo "ファイルは同一です"
        :
    else
        echo "ファイルに差分があります:"
        echo "パス1: $path1"
        echo "パス2: $path2"
        diff -u "$path1" "$path2"
    fi
    
done < "$INPUT_FILE"