document.getElementById('linkbtn').onclick = function () {
   let number = document.getElementById('wanumber');
   let message = document.getElementById('wamessage');
  var output = "null"
   if (message.value.length > 0){
     const messageArray = message.value.split(" ")
     output = "https://api.whatsapp.com/send?phone=" + number.value.toString() + "&text="

     for (var i = 0; i < messageArray.length; i++){
       output += messageArray[i] + "%20"
     }
   }
  else {
    output = "https://api.whatsapp.com/send?phone=" + number.value.toString();
  }
    
  document.getElementById('output').innerHTML = `<br> <br><article class="message is-primary">
  <div class="message-header">
    <p>Output</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body"> <code class="python">` + output + "</code><br><a class='button is-info' href=" + output + ">Try out </a>" +   `
     <button class="button is-link" id="copylinkbtn">copy link</button>
  </div>
          </article>`

  document.getElementById('copylinkbtn').onclick = function () {
     navigator.clipboard.writeText(output)
    document.getElementById("copylinkbtn").textContent = "Copied!"
  }
  
}



