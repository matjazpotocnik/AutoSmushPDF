# AutoSmushPDF

Compress PDF files automatically on upload,  manually by clicking the link for
each file  and in bulk mode for all PDF files sitewide.

In **Automatic mode** PDF files that are uploaded are automatically compressed.

In **Manual mode** "Compress" link will be present. This allows manual
compression of the individual PDF file.

In **Bulk mode** all PDF files can be compressed in one click. Will process PDF
files sitewide, use with caution! This may take a while to finish, especially if
you have a lot of PDF files - grab a coffee :-)

### Engines
Currently there is only one method available to compress PDF files:

- **labStack online service**
It's a free (at the moment) online web service that provides compressing of PDF files.
There is no limit in file size and no limit on number of uploaded images.

### Installation
Copy the files to the /site/modules/AutoSmushPDF folder, log in to your ProcessWire
admin and go to the Modules page. Click the Refresh button and then Install.

Installing this module creates /site/assets/autosmushpdf folder, it's deleted on 
uninstall. The folder should be writable by the user running the web server. Log 
file is at /site/logs/autosmushpdf.txt

### License
Copyright (c) 2016 Matja&#382; Poto&#269;nik (https://github.com/matjazpotocnik/AutoSmushPDF).  
Support forum: https://processwire.com/talk/topic/

Licensed under the MIT license. See the LICENSE file for details.
