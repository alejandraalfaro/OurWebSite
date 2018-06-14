#!/usr/bin/env python

from __future__ import print_function

import csv
import sys

f = open(sys.argv[1], 'rb')
reader = csv.DictReader(f)
first = True
print("[")
for row in reader:
    if row['Quantity'] and (int(row['Quantity']) >= 1) :
        if not first:
            print(",")
        first = False
        print("  {")
        print("     \"id\": \"glv-{}\",".format(row['Product Code']))
        print("     \"name\": \"{}\",".format(row['Product Name']))
        print("     \"brand\": \"{}\",".format(row['Brand']))
        print("     \"condition\": \"{}\",".format(row['Status']))
        print("     \"category\": \"{}\",".format(row['Category']))
        print("     \"size\": \"{}\",".format(row['Size']))
        print("     \"price\": \"{}\",".format(row['Sale Price']))
        print("     \"images\": [", end='')
        for i in range(1, int(row["Image Count"]) + 1):
            if i != 1:
                print(", ", end="")
            print("\"{}-{}.jpg\"".format(row['Product Code'],i),end='')
            i+=1
        print("],")
        print("     \"description\": \"{}\"".format(row['Product Description'].replace("\n","<br/>")))
        print("  }", end='')

print("\n]")

f.close()
