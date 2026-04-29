const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');
const navLinks = document.querySelector('.nav-links');
const menuToggle = document.querySelector('.menu-toggle');

const logKey = 'dh_project2_security_events';
const visitKey = 'dh_project2_visit_count';
const guestbookKey = 'dh_project2_guestbook_messages';
const loginKey = 'dh_project2_login_attempts';

function safeText(value) {
  if (window.DOMPurify) {
    return DOMPurify.sanitize(value, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: []
    });
  }

  return String(value).replace(/[<>&"']/g, function(char) {
    return {
      '<': '&lt;',
      '>': '&gt;',
      '&': '&amp;',
      '"': '&quot;',
      "'": '&#039;'
    }[char];
  });
}

function getStoredArray(key) {
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch (error) {
    return [];
  }
}

function setStoredArray(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function addSecurityEvent(type, detail) {
  const events = getStoredArray(logKey);

  events.unshift({
    type: safeText(type),
    detail: safeText(detail),
    time: new Date().toLocaleString()
  });

  setStoredArray(logKey, events.slice(0, 8));
  renderSecurityLog();
}

function renderSecurityLog() {
  const list = document.getElementById('security-log');
  const count = document.getElementById('event-count');

  if (!list || !count) {
    return;
  }

  const events = getStoredArray(logKey);
  count.textContent = events.length;
  list.innerHTML = '';

  if (events.length === 0) {
    const item = document.createElement('li');
    item.textContent = 'No security events recorded yet.';
    list.appendChild(item);
    return;
  }

  events.forEach(function(event) {
    const item = document.createElement('li');
    item.textContent = '[' + event.time + '] ' + event.type + ': ' + event.detail;
    list.appendChild(item);
  });
}

function updateVisitCount() {
  const count = (Number(localStorage.getItem(visitKey)) || 0) + 1;
  localStorage.setItem(visitKey, String(count));

  const visitCount = document.getElementById('visit-count');

  if (visitCount) {
    visitCount.textContent = count;
  }
}

function updateLoadTime() {
  const loadTime = document.getElementById('load-time');

  if (!loadTime) {
    return;
  }

  window.addEventListener('load', function() {
    const timing = performance.getEntriesByType('navigation')[0];

    if (timing) {
      loadTime.textContent = Math.round(timing.loadEventEnd - timing.startTime) + ' ms';
    }
  });
}

tabButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    tabButtons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    button.classList.add('active');

    tabPanels.forEach(function(panel) {
      panel.classList.remove('active');
    });

    const target = button.getAttribute('data-tab');
    const targetPanel = document.getElementById(target);

    if (targetPanel) {
      targetPanel.classList.add('active');
      addSecurityEvent('Tab activity', 'User opened ' + target + ' tab');
    }
  });
});

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('open');
  });
}

function renderGuestbook() {
  const list = document.getElementById('guestbook-list');

  if (!list) {
    return;
  }

  const messages = getStoredArray(guestbookKey);
  list.innerHTML = '';

  if (messages.length === 0) {
    const item = document.createElement('li');
    item.textContent = 'No messages yet.';
    list.appendChild(item);
    return;
  }

  messages.forEach(function(message) {
    const item = document.createElement('li');

    const strong = document.createElement('strong');
    strong.textContent = message.name;

    const text = document.createElement('p');
    text.textContent = message.message;

    item.appendChild(strong);
    item.appendChild(text);
    list.appendChild(item);
  });
}

const guestbookForm = document.getElementById('guestbook-form');

if (guestbookForm) {
  guestbookForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const rawName = document.getElementById('guest-name').value.trim();
    const rawMessage = document.getElementById('guest-message').value.trim();

    const cleanName = safeText(rawName);
    const cleanMessage = safeText(rawMessage);

    if (rawName !== cleanName || rawMessage !== cleanMessage) {
      addSecurityEvent('XSS blocked', 'Unsafe input was sanitized before display');
    } else {
      addSecurityEvent('Input accepted', 'Guestbook message sanitized and stored locally');
    }

    const messages = getStoredArray(guestbookKey);

    messages.unshift({
      name: cleanName,
      message: cleanMessage
    });

    setStoredArray(guestbookKey, messages.slice(0, 5));

    guestbookForm.reset();
    renderGuestbook();
  });
}

const clearMessages = document.getElementById('clear-messages');

if (clearMessages) {
  clearMessages.addEventListener('click', function() {
    localStorage.removeItem(guestbookKey);
    addSecurityEvent('Guestbook cleared', 'Stored guestbook messages were removed');
    renderGuestbook();
  });
}

const loginForm = document.getElementById('login-form');

if (loginForm) {
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const status = document.getElementById('login-status');
    const attempts = Number(localStorage.getItem(loginKey)) || 0;

    if (attempts >= 3) {
      status.textContent = 'Blocked: too many failed login attempts. Refreshing will not reset the block.';
      status.style.color = 'var(--danger)';
      addSecurityEvent('Brute-force blocked', 'Login blocked after repeated failed attempts');
      return;
    }

    const username = document.getElementById('demo-user').value.trim();
    const password = document.getElementById('demo-pass').value.trim();

    if (username === 'demo' && password === 'networking') {
      localStorage.setItem(loginKey, '0');
      localStorage.setItem('project2_logged_in', 'true');

      status.textContent = 'Login successful. Redirecting to protected page...';
      status.style.color = 'var(--success)';

      addSecurityEvent('Login success', 'User accessed protected page');

      setTimeout(function() {
        window.location.href = 'secret_project2.html';
      }, 800);
    } else {
      localStorage.setItem(loginKey, String(attempts + 1));

      status.textContent = 'Invalid login. Failed attempts: ' + (attempts + 1) + '/3';
      status.style.color = 'var(--warning)';

      addSecurityEvent('Failed login', 'Attempt ' + (attempts + 1) + ' of 3');
    }
  });
}

updateVisitCount();
updateLoadTime();
renderGuestbook();
renderSecurityLog();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('project2_sw.js').catch(function() {});
  });
}
