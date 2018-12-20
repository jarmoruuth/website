import glob

print ('python findnewimages.py')
print ('- requires Python 3')
print ('- finds images files that are not in any html file')
print ('HTML code for new images is written into imghtml.txt')
print ('- copy content from there to correct .html files')
print ('List of files is written into imgftp.scr file')
print ('- add changed .html files there')
print ('- send file with a command runftp.bat -b imgftp.scr')

imgpath = "images/*.jpg"
imgfiles = glob.glob(imgpath)
imglist = []
for img in imgfiles:
    baseimg = img[7:]
    htmlpath = "*.html"
    htmlfiles = glob.glob(htmlpath)
    imgfound = False
    for html in htmlfiles:
        index = open(html, 'r').read().find(baseimg)
        if index != -1:
            imgfound = True
            break
    if not imgfound:
        imglist.append(baseimg)

f = open("imgftp.scr", "w")
f.write ('cd html\n')
f.write ('cd images\n')
f.write ('lcd images\n')
for baseimg in imglist:
    f.write ('put '+baseimg+'\n')
f.write ('cd small\n')
f.write ('lcd small\n')
for baseimg in imglist:
    f.write ('put small_'+baseimg+'\n')
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
