document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.cta-button');
    if (button) {
      button.addEventListener('click', function() {
        alert('Button clicked!');
      });
    }
  });