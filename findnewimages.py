import glob
import os
import datetime

print ('python findnewimages.py')
print ('- finds images files that are not in any html file')
print ('HTML code for new images is written into imghtml.txt')
print ('- copy content from there to correct .html files')
print ('Processing...')
print ('')

last_modified_date = datetime.datetime.fromtimestamp(os.path.getmtime("imgftp.scr"))

imgpath = "images/*.jpg"
imgfiles = glob.glob(imgpath)
imglist = []
for img in imgfiles:
    baseimg = img[7:]
    modified_date = datetime.datetime.fromtimestamp(os.path.getmtime(img))
    if modified_date > last_modified_date:
        imglist.append(baseimg)

imgpath = "images/small/*.jpg"
imgfiles = glob.glob(imgpath)
smallimglist = []
for img in imgfiles:
    baseimg = img[13:]
    modified_date = datetime.datetime.fromtimestamp(os.path.getmtime(img))
    if modified_date > last_modified_date:
        smallimglist.append(baseimg)

htmlpath = "*.html"
htmlfiles = glob.glob(htmlpath)
htmllist = []
for html in htmlfiles:
    modified_date = datetime.datetime.fromtimestamp(os.path.getmtime(html))
    if modified_date > last_modified_date:
        htmllist.append(html)

htmlpath = "*.js"
jsfiles = glob.glob(htmlpath)
jslist = []
for js in jsfiles:
    modified_date = datetime.datetime.fromtimestamp(os.path.getmtime(js))
    if modified_date > last_modified_date:
        jslist.append(js)

htmlpath = "*.css"
cssfiles = glob.glob(htmlpath)
csslist = []
for css in cssfiles:
    modified_date = datetime.datetime.fromtimestamp(os.path.getmtime(css))
    if modified_date > last_modified_date:
        csslist.append(css)

f = open("imgftp.scr", "w")
f.write ('cd html\n')
for html in htmllist:
    f.write ('put '+html+'\n')
    print ('Add '+html+' to imgftp.scr')
for js in jslist:
    f.write ('put '+js+'\n')
    print ('Add '+js+' to imgftp.scr')
for css in csslist:
    f.write ('put '+css+'\n')
    print ('Add '+css+' to imgftp.scr')
f.write ('cd images\n')
f.write ('lcd images\n')
for baseimg in imglist:
    f.write ('put '+baseimg+'\n')
    print ('Add '+baseimg+' to imgftp.scr')
f.write ('cd small\n')
f.write ('lcd small\n')
for baseimg in smallimglist:
    f.write ('put '+baseimg+'\n')
    print ('Add baseimg '+baseimg+' to imgftp.scr')
f.close()

f = open("imghtml.txt", "w")
for baseimg in imglist:
    f.write ('<div>\n')
    f.write ('<a href="images/'+baseimg+'">\n')
    f.write ('<img src="images/small/small_'+baseimg+'"\n')
    f.write ('alt="'+baseimg+'" >\n')
    f.write ('</a>\n')
    f.write ('<br>\n')
    f.write ('<small></small>\n')
    f.write ('</div>\n')
    f.write ('\n')
f.close()

print ('')
print ('Completed generating imgftp.scr')
print ('- send files with a command runftp.bat imgftp.scr')
