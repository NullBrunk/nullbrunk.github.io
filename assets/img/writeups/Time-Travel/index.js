let contentserver, timeserver;

fetch("/config")
.then(response => response.json())
.then(config => {
    contentserver = config.contentserver;
    timeserver = config.timeserver;
 })
.catch(error => console.error("Error fetching config:", error));

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function fetchToken() {
    fetch(`${contentserver}/challenge`, {
        method: 'GET',
        credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
        document.cookie = `session=${data.token}; path=/;`;
    })
    .catch(error => console.error('Error fetching token:', error));
}

function validateToken() {
    const token = getCookie('session');
    if (!token) {
        document.getElementById('result').innerHTML = 'Session token not found.';
        return;
    }

    fetch(timeserver)
    .then(response => response.json())
    .then(time_info => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', contentserver + '/validate');
        xhr.setRequestHeader('Content-Type', 'application/json');
        const body = {
            token: token,
            timestamp: time_info['timestamp'],
            signature: time_info['signature'],
            timeserver: timeserver
        };
        xhr.send(JSON.stringify(body));
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('result').innerHTML = xhr.responseText;
            } else {
                document.getElementById('result').innerHTML = 'Validation failed';
            }
        };
    })
    .catch(error => console.error('Error fetching time:', error));
}

document.getElementById('fetchTokenButton').addEventListener('click', fetchToken);
document.getElementById('validateButton').addEventListener('click', validateToken);