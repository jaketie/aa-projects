
// Your code here
const messages = require('./messages');
const msg1 = messages.message1;
const msg2 = messages.message2;
const msg3 = messages.message3;

const sayHelloTo = require('./send-messages/say-hello-to');
const giveMessageToMrsPotato = require('./send-messages/give-message-to-mrs-potato')

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

sayHelloTo("Mr. Potato");
giveMessageToMrsPotato(msg1);
giveMessageToMrsPotato(msg2);
giveMessageToMrsPotato(msg3);
