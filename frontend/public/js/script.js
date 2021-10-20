(function(){
  let ws;
  const $ = document.querySelector.bind(document);
  function configureWebsocket(){
    ws = new WebSocket('ws://localhost:8000/ws')
    ws.onopen = function(evt){
      console.log('websocket open!')
    }
    ws.onmessage = function(evt){
      console.log('got message', evt.data)
    }
  }

  function setup(){
    $("#form").addEventListener('submit', function(evt){
      evt.preventDefault();
      ws.send($('#message').value);
      return false;
    });
  }

  function init(){
    console.log('in init');
    configureWebsocket();
    setup();
  }

  init();
})();
