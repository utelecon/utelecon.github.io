#!/usr/bin/python3

import pandas as pd
pd.set_option("display.max_columns", None)
pd.set_option("display.max_rows", None)

df = pd.read_excel("data/ex_授業情報.xlsx")

df = df.sort_values(by=["所属名", "開講科目", "曜日", "時限"])
print("合計 %d rows" % len(df))

df = df[pd.isnull(df['オンライン授業URL']) & pd.isnull(df['オンライン授業情報'])]
print("オンライン授業URL/情報なし %d" % len(df))

df = df[(df["曜日"] != "集中他") & (df["時限"] != "集中他")]
print("集中除く %d" % len(df))
df.to_excel("00集中除く.xlsx")

dfx = df[df["所属名"] == "教養学部(前期課程)"]
print("前期課程 %d" % len(dfx))
dfx.to_excel("01前期課程.xlsx")

df = df[df["所属名"] != "教養学部(前期課程)"]
print("前期課程除く %d" % len(df))
df.to_excel("01前期課程除く.xlsx")

df = df[~(df["開講科目"].str.match(".*論文指導"))]
print("なんとか論文指導除く %d" % len(df))
df.to_excel("02なんとか論文指導除く.xlsx")

df = df[~(df["開講科目"].str.match(".*輪講"))]
print("なんとか輪講除く %d" % len(df))
df.to_excel("03なんとか輪講除く.xlsx")

df = df[~(df["開講科目"].str.match("日本語.*級"))]
print("日本語◯級除く %d" % len(df))
df.to_excel("04日本語◯級除く.xlsx")

dfx = df[(df["開講科目"].str.match(".*(実験|演習|実習)"))]
print("なんとか実験・演習・実習 %d" % len(dfx))
dfx.to_excel("05なんとか実験・演習・実習.xlsx")

df = df[~(df["開講科目"].str.match(".*(実験|演習|実習)"))]
print("なんとか実験・演習・実習除く %d" % len(df))
df.to_excel("05なんとか実験・演習・実習除く.xlsx")
