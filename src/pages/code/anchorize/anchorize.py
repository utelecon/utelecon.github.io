#!/usr/bin/python3

import re

def anchorize(s):
    """
    文字列 s 中の http://... の部分をアンカー<a href="...">...</a>にする
    """
    #url = re.compile("https?://[\w/:%#\$&\?\(\)~\.=\+\-]+")
    # 日本語はダメバージョン
    url = re.compile("https?://[0-9A-Za-z/:%#\$&\?\(\)~\.=\+\-@]+")
    lines = []
    for line in s.split("\n"):
        frags = []
        l = 0
        for m in url.finditer(line):
            i,j = m.span() 
            frags.append(line[l:i])
            frags.append('<a href="%s" target="_blank">%s</a>'
                         % (line[i:j], line[i:j]))
            l = j
        frags.append(line[l:])
        lines.append("".join(frags))
    return "<br />\n".join(lines)

def anchorize_file(in_file, out_file):
    rp = open(in_file)
    s = rp.read()
    rp.close()
    t = anchorize(s)
    wp = open(out_file, "w")
    wp.write(r"""
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf8">
</head>
<body>
%s
</body>
</html>
""" % t)
    wp.close()

def make_index(txts, htmls, out_file):
    wp = open(out_file, "w")
    wp.write("""
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf8">
</head>
<body>
<table border=1>
""")
    for txt,html in zip(txts, htmls):
        wp.write('<tr><td><a href="%s">%s</td><td><a href="%s">%s</td></tr>\n'
                 % (txt, txt, html, html))
    wp.write("""
</table>
</body>
</html>
""")
        
    
def main():
    n = 6
    txts = [ "p%d.txt" % i for i in range(n) ]
    htmls = [ "p%d.html" % i for i in range(n) ]
    for txt,html in zip(txts, htmls):
        anchorize_file(txt, html)
    make_index(txts, htmls, "index.html")

main()

