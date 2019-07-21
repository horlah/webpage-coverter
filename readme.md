### Webpage to PDF/Image Converter with Puppeteer.

This is a node js project that uses puppeteer to convert webpage into PDF documents and images.

###### How to use.

1. After cloning this repo, navigate to the project directory with terminal or command prompt and run the following command:

        node index.js

    If you have nodemon on your machine, run

        nodemon index.js

2. To convert webpage to image navigate to http://localhost:8080/screenshot?url=https://pillsof.codes&name=pillsofcodes&format=png.
You can change the query params to as explained below:
    - url='web page address (url)'
    - name='the name you want to give to your image'
    - format='the format you want your image in' **this can either be png or jpeg**

3. To convert webpage to pdf navigate to http://localhost:8080/pdf?url=https://pillsof.codes&name=pillsofcodes
You can change the query params to as explained below:
    - url='web page address (url)'
    - name='the name you want to give to your image'


Visit https://pillsof.codes/introducing-puppeteer for more details on how I built this project.
