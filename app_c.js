document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    var name = e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
    console.log('Using getAttribute: ' + e.target.elements.name.value('name'));
  });