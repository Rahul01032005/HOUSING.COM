document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        console.log('Buy button clicked!');
    });
});
document.querySelector('.footer button[type="submit"]').addEventListener('click', function(event) {
    event.preventDefault();
  });
  

