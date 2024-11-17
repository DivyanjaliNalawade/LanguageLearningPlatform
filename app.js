

document.addEventListener('DOMContentLoaded', () => {

  const registerForm = document.getElementById('register-form');
  if (registerForm) {
      registerForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          const language = document.getElementById('language').value;

          const response = await fetch('http://localhost:5000/api/users/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, email, password, language }),
          });

          if (response.ok) {
              alert('User registered successfully');
              window.location.href = 'login.html'; 
          } else {
              alert('Error: ' + response.statusText);
          }
      });
  }

 
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
      loginForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const email = document.getElementById('login-email').value;
          const password = document.getElementById('login-password').value;

          const response = await fetch('http://localhost:5000/api/users/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          });

          if (response.ok) {
              alert('Login successful');
              window.location.href = 'index.html'; 
          } else {
              alert('Error: ' + response.statusText);
          }
      });
  }
});
