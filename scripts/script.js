// Simple form handling (console logging)
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

  alert('Message Sent Successfully!');

  e.target.reset();
});
