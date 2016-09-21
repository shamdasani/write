document.getElementById('heading').innerHTML = localStorage['title'] || 'Just Write';
document.getElementById('content').innerHTML = localStorage['text'] || 'Write whatever you want -- beautifully, fast, and with no distractions. <br> <br> Want to grab a drink? No problem. This text is automatically saved every second :) ';

 setInterval(function() {
      localStorage['title'] = document.getElementById('heading').innerHTML;
      localStorage['text'] = document.getElementById('content').innerHTML;
 }, 1000);

 function setTitle () {
   document.title = document.getElementById('heading').innerHTML
 }
document.getElementById('heading').onkeyup = setTitle;
document.getElementById('heading').onchange = setTitle;
