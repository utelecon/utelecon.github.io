# build.format = "preserve" と build.format = "directory"
# の両者で同一のページが意図した形で生成されることを確認するスクリプト
# python3 202506-check-build-format-diffs.py > pairs.txt で202506-check-no-diffs.shで使うpairs.txtを生成する
# cd dist && find -name "*.html" > after.txt のようにafter.txtとbefore.txtを生成した

after_pages = []
with open("after.txt", "r") as f:
    line = f.readline()
    while line:
        if line == "./404.html\n":
            line = f.readline()
            continue
        path = line.replace("index.html\n", "")
        after_pages.append([path, line.replace("\n", "")])
        line = f.readline()

before_pages = []
with open("before.txt", "r") as f:
    line = f.readline()
    while line:
        if line == "./404.html\n":
            line = f.readline()
            continue
        if line.endswith("index.html\n"):
            path = line.replace("index.html\n", "")
        else:
            path = line.replace(".html\n", "/")
        before_pages.append([path, line.replace("\n", "")])
        line = f.readline()

after_pages.sort(key=lambda x: x[0])
before_pages.sort(key=lambda x: x[0])
for a, b in zip(after_pages, before_pages):
    print(f"{a[1]},{b[1]}")
    assert a[0] == b[0]
