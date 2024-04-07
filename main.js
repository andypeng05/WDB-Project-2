const express = require('express');
const port = 3000;
const fs = require('fs');


const app = express();

function getCookie(cookieString, name) {
    if (cookieString) { // Check if cookieString is defined
      let cookie = cookieString.split(';').find(cookie => cookie.trim().startsWith('views='));
      if (cookie) {
        return cookie.split('=')[1];
      }
    }
    return 0;
  }

app.get('/', (req, res) => {
    let totalViews = getCookie(req.headers.cookie, 'views');
    totalViews++; 
    let html = fs.readFileSync(__dirname + '/index2.html', 'utf8');
    html = html.replace('{{views}}', totalViews); 
    res.setHeader('Set-Cookie', `views=${totalViews}`); 
    res.send(html);
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
  });

app.get('/index2.html', (req, res) => {
    res.sendFile(__dirname + '/index2.html');
  });

app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.get('/style2.css', (req, res) => {
    res.sendFile(__dirname + '/style2.css');
});

app.get('/p1.jpg', (req, res) => {
    res.sendFile(__dirname + '/p1.jpg');
});

app.get('/p4.jpg', (req, res) => {
    res.sendFile(__dirname + '/p4.jpg');
});

app.get('/p2.jpg', (req, res) => {
    res.sendFile(__dirname + '/p2.jpg');
});
  
app.get('/p3.jpg', (req, res) => {
    res.sendFile(__dirname + '/p3.jpg');
});
      
app.get('/performance.jpg', (req, res) => {
    res.sendFile(__dirname + '/performance.jpg');
});
      
app.get('/social.jpg', (req, res) => {
    res.sendFile(__dirname + '/social.jpg');
});

app.get('/logo.jpg', (req, res) => {
    res.sendFile(__dirname + '/logo.jpg');
});

app.get('/background.jpg', (req, res) => {
    res.sendFile(__dirname + '/background.jpg');
});

app.get('/logo2.png', (req, res) => {
    res.sendFile(__dirname + '/logo2.png');
});

app.get('/alex.jpg', (req, res) => {
    res.sendFile(__dirname + '/alex.jpg');
});

app.get('/andrew.jpg', (req, res) => {
    res.sendFile(__dirname + '/andrew.jpg');
});

app.get('/anthony.jpg', (req, res) => {
    res.sendFile(__dirname + '/anthony.jpg');
});

app.get('/athena.jpg', (req, res) => {
    res.sendFile(__dirname + '/athena.jpg');
});
      
app.get('/bhaskar.jpg', (req, res) => {
    res.sendFile(__dirname + '/bhaskar.jpg');
});
      
app.get('/caitlyn.jpg', (req, res) => {
    res.sendFile(__dirname + '/caitlyn.jpg');
});

app.get('/chris.jpg', (req, res) => {
    res.sendFile(__dirname + '/chris.jpg');
});
  
app.get('/dell.jpg', (req, res) => {
    res.sendFile(__dirname + '/dell.jpg');
});

app.get('/eddie.jpg', (req, res) => {
    res.sendFile(__dirname + '/eddie.jpg');
});

app.get('/ellington.jpg', (req, res) => {
    res.sendFile(__dirname + '/ellington.jpg');
});

app.get('/ethan.jpg', (req, res) => {
    res.sendFile(__dirname + '/ethan.jpg');
});

app.get('/jerry.jpg', (req, res) => {
    res.sendFile(__dirname + '/jerry.jpg');
});

app.get('/jessica.jpg', (req, res) => {
    res.sendFile(__dirname + '/jessica.jpg');
});

app.get('/justin.jpg', (req, res) => {
    res.sendFile(__dirname + '/justin.jpg');
});

app.get('/kian.jpg', (req, res) => {
    res.sendFile(__dirname + '/kian.jpg');
});

app.get('/madlen.jpg', (req, res) => {
    res.sendFile(__dirname + '/madlen.jpg');
});

app.get('/maya.jpg', (req, res) => {
    res.sendFile(__dirname + '/maya.jpg');
});

app.get('/tom.jpg', (req, res) => {
    res.sendFile(__dirname + '/tom.jpg');
});

app.get('/stephanus.jpg', (req, res) => {
    res.sendFile(__dirname + '/stephanus.jpg');
});

app.get('/gallery.html', (req, res) => {
    res.sendFile(__dirname + '/gallery.html');
});

app.get('/gallery-style.css', (req, res) => {
    res.sendFile(__dirname + '/gallery-style.css');
});

app.get('/script.js', (req, res) => {
    res.sendFile(__dirname + '/script.js');
});

app.get('/style3.css', (req, res) => {
    res.sendFile(__dirname + '/style3.css');
});

app.get('/index3.html', (req, res) => {
    res.sendFile(__dirname + '/index3.html');
});

app.get('/script2.js', (req, res) => {
    res.sendFile(__dirname + '/script2.js');
});

app.get('/thumbnail1.jpg', (req, res) => {
    res.sendFile(__dirname + '/thumbnail1.jpg');
});

app.get('/thumbnail2.jpg', (req, res) => {
    res.sendFile(__dirname + '/thumbnail2.jpg');
});

app.get('/thumbnail3.jpg', (req, res) => {
    res.sendFile(__dirname + '/thumbnail3.jpg');
});

app.get('/thumbnail4.jpg', (req, res) => {
    res.sendFile(__dirname + '/thumbnail4.jpg');
});

app.get('/thumbnail5.jpg', (req, res) => {
    res.sendFile(__dirname + '/thumbnail5.jpg');
});

app.get('/thumbnail6.jpg', (req, res) => {
    res.sendFile(__dirname + '/thumbnail6.jpg');
});

app.get('/thumbnail7.jpg', (req, res) => {
    res.sendFile(__dirname + '/thumbnail7.jpg');
});

app.get('/thumbnail8.jpg', (req, res) => {
    res.sendFile(__dirname + '/thumbnail8.jpg');
});

app.get('/logo.jpg', (req, res) => {
    res.sendFile(__dirname + '/logo.jpg');
});

    
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});