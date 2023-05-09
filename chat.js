// Obtener el formulario de entrada de mensajes y la lista de mensajes
var messageForm = document.getElementById("message-form");
var messageList = document.getElementById("chat-messages");

// Agregar un controlador de eventos para el envío del formulario
messageForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el envío predeterminado del formulario

  // Obtener el valor del campo de entrada de mensajes
  var messageInput = document.getElementById("message-input");
  var messageText = messageInput.value.trim();

  // Crear un nuevo elemento <li> para el mensaje y agregarlo a la lista de mensajes
  var messageItem = document.createElement("li");
  messageItem.textContent = messageText;
  messageItem.classList.add("message", "sent");
  messageList.appendChild(messageItem);

  // Limpiar el campo de entrada de mensajes después de enviar
  messageInput.value = "";
});


/*<aside class="chat">
  <header class="chat-header">
    <h2>Chat en vivo</h2>
  </header>
  <ul class="messages" id="chat-messages">
    <!-- Existing messages go here -->
  </ul>
  <form id="message-form" class="message-form">
    <input type="text" id="message-input" placeholder="Escriba un mensaje...">
    <button type="submit"><i class="fas fa-paper-plane"></i></button>
  </form>
</aside>
*/