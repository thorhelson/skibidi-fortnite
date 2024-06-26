
document.getElementById('create-account-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    fetch('/api/create-account', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          // Redirect the user to the login page
          window.location.href = '/login.html';
        } else {
          // Show the error message to the user
          document.getElementById('error-message').innerText = data.message;
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });