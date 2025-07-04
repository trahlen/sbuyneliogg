let visitorCount = localStorage.getItem('visitorCount') || 1;
document.getElementById('visitorCount').textContent = String(visitorCount).padStart(6, '0');
localStorage.setItem('visitorCount', parseInt(visitorCount) + 1);

document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString();

function signGuestbook() {
  const name = document.getElementById('guestName').value;
  const message = document.getElementById('guestMessage').value;
  
  if (name && message) {
    const entries = JSON.parse(localStorage.getItem('guestbookEntries') || '[]');
    entries.push({
      name: name,
      message: message,
      date: new Date().toLocaleDateString()
    });
    localStorage.setItem('guestbookEntries', JSON.stringify(entries));
    
    displayGuestbook();
    
    document.getElementById('guestName').value = '';
    document.getElementById('guestMessage').value = '';
    
    alert('Thanks for signing my guestbook!');
  } else {
    alert('Please fill in both name and message!');
  }
}

function displayGuestbook() {
  const entries = JSON.parse(localStorage.getItem('guestbookEntries') || '[]');
  const container = document.getElementById('guestbookEntries');
  
  if (entries.length > 0) {
    container.innerHTML = '<h3>📖 Recent Guestbook Entries:</h3>';
    entries.slice(-5).reverse().forEach(entry => {
      container.innerHTML += `
        <div class="guestbook-entry">
          <strong>${entry.name}</strong> - ${entry.date}<br>
          <em>"${entry.message}"</em>
        </div>
      `;
    });
  }
}

function showAlert() {
  const messages = [
    "Cool! You clicked the button!",
    "Awesome! You're surfing the web like a pro!",
    "Radical! Welcome to SBUY!",
    "Totally tubular! You found the secret button!",
    "Cowabunga! That was fun!"
  ];
  alert(messages[Math.floor(Math.random() * messages.length)]);
}

function changeBackground() {
  const colors = [
    '#ffffff',
    '#f0f0f0',
    '#e0e0e0',
    '#d0d0d0'
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
}

displayGuestbook();

setTimeout(() => {
  alert('Welcome, Thanks for visiting!');
}, 1000); 