document.addEventListener('DOMContentLoaded', function() {
    var messageInput = document.getElementById('messageInput');
    var sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        var messageText = messageInput.value.trim();

        if (messageText === '') {
            return;
        }

        var messageContainer = document.createElement('div');
        messageContainer.classList.add('message', 'sent');

        var profilePicture = document.createElement('div');
        profilePicture.classList.add('profile-picture');
        var img = document.createElement('img');
        img.src = 'img/user.png';
        img.alt = 'User Avatar';
        profilePicture.appendChild(img);

        var messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.textContent = messageText;

        messageContainer.appendChild(profilePicture);
        messageContainer.appendChild(messageContent);

        document.querySelector('.messages').appendChild(messageContainer);

        messageInput.value = '';
        messageInput.focus();

        // Simulate bot response after a short delay
        setTimeout(function() {
            receiveMessage();
        }, 1000);
    }

    function receiveMessage() {
        var messageContainer = document.createElement('div');
        messageContainer.classList.add('message', 'received');

        var profilePicture = document.createElement('div');
        profilePicture.classList.add('profile-picture');
        var img = document.createElement('img');
        img.src = 'img/bot_pfp_x2.svg';
        img.alt = 'Bot Avatar';
        profilePicture.appendChild(img);

        var messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.textContent = 'Kyu pareshan karha bhay kya kaam hai?'; // Replace with actual bot response

        messageContainer.appendChild(profilePicture);
        messageContainer.appendChild(messageContent);

        document.querySelector('.messages').appendChild(messageContainer);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navBar = document.getElementById('nav-bar');
    const mainContent = document.querySelector('.main-content');
    const chatContainer = document.querySelector('.chat-container');

    navToggle.addEventListener('change', function() {
        if (window.innerWidth <= 768) {
            if (navToggle.checked) {
                navBar.style.zIndex = '9999';
                mainContent.style.marginLeft = '0';
                chatContainer.style.marginLeft = '0';
            } else {
                navBar.style.zIndex = '1';
            }
        } else {
            navBar.style.zIndex = '1';
            if (navToggle.checked) {
                mainContent.style.marginLeft = 'calc(var(--navbar-width) - 70px)';
                chatContainer.style.marginLeft = 'calc(var(--navbar-width) - 70px)';
            } else {
                mainContent.style.marginLeft = 'var(--navbar-width-min)';
                chatContainer.style.marginLeft = 'var(--navbar-width-min)';
            }
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navBar.style.zIndex = '1';
            if (navToggle.checked) {
                mainContent.style.marginLeft = 'calc(var(--navbar-width) - 70px)';
                chatContainer.style.marginLeft = 'calc(var(--navbar-width) -70px)';
            } else {
                mainContent.style.marginLeft = 'var(--navbar-width-min)';
                chatContainer.style.marginLeft = 'var(--navbar-width-min)';
            }
        } else {
            mainContent.style.marginLeft = '0';
            chatContainer.style.marginLeft = '0';
        }
    });
});