/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var ajax = require('ajax');
//var Vector2 = require('vector2');

/*
var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.'
});

main.show();

main.on('click', 'up', function(e) {
*/

  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Anlage',
        //icon: 'images/menu_icon.png',
        //subtitle: 'Can do Menus'
      }, {
        title: 'Ambilight Effekt',
        //subtitle: 'Subtitle Text'
      }]
    }]
  });
  menu.on('select', function(e) {
    if (e.itemIndex === 0 ) {
      // Anlage gepusht
            ajax(
        {
          url:"http://192.168.1.210/lib/powerpi.php?action=setsocket&socket=anlage_sub&status=1/",
          method: 'get',
          //type:'json'
        },
        function(data) {
          console.log('Download finished');
        },

        function(error) {
          console.log('Download failed: ' + error);
        });
      console.log('The item is titled "' + e.item.title + '"');
    }
    if (e.itemIndex === 1 ) {
      // Ambi gepusht
            ajax(
        {
          url:"http://192.168.1.210:8888/ambion",
          method: 'get',
          //type:'json'
        },
        function(data) {
          console.log('Download finished');
        },

        function(error) {
          console.log('Download failed: ' + error);
        });
      console.log('The item is titled "' + e.item.title + '"');
    }
    
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.on('longSelect', function(e) {
    if (e.itemIndex === 0 ) {
      // Anlage gepusht
            ajax(
        {
          url:"http://192.168.1.210/lib/powerpi.php?action=setsocket&socket=anlage_sub&status=0/",
          method: 'get',
          //type:'json'
        },
        function(data) {
          console.log('Download finished');
        },

        function(error) {
          console.log('Download failed: ' + error);
        });
      console.log('The item is titled "' + e.item.title + '"');
    }
    if (e.itemIndex === 1 ) {
      // Ambi gepusht
            ajax(
        {
          url:"http://192.168.1.210:8888/ambioff",
          method: 'get',
          //type:'json'
        },
        function(data) {
          console.log('Download finished');
        },

        function(error) {
          console.log('Download failed: ' + error);
        });
      console.log('The item is titled "' + e.item.title + '"');
    }
    
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();

/*
main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});
*/