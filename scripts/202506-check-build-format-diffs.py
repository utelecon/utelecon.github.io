# build.format = "preserve" と build.format = "directory"
# の両者で同一のページが意図した形で生成されることを確認するスクリプト
# cd dist && find -name "*.html" > after.txt のようにafter.txtとbefore.txtを生成した

after_pages = []
with open("after.txt", "r") as f:
    line = f.readline()
    while line:
        if line == "./404.html\n":
            line = f.readline()
            continue
        path = line.replace("index.html", "")
        after_pages.append(path)
        line = f.readline()

before_pages = []
with open("before.txt", "r") as f:
    line = f.readline()
    while line:
        if line == "./404.html\n":
            line = f.readline()
            continue
        if line.endswith("index.html\n"):
            path = line.replace("index.html", "")
        else:
            path = line.replace(".html", "/")
        before_pages.append(path)
        line = f.readline()

after_pages.sort()
before_pages.sort()
for a, b in zip(after_pages, before_pages):
    assert a == b
