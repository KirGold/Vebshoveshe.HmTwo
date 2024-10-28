window.onload = function() {
    let savedUser = JSON.parse(localStorage.getItem('user'))
    if (savedUser) {
        document.getElementById('login').value = savedUser.login
        document.getElementById('password').value = savedUser.password
    }
}

function handleLogin(event) {
    event.preventDefault()
    let login = document.getElementById('login').value
    let password = document.getElementById('password').value
    let savedUser = JSON.parse(localStorage.getItem('user'))


    if (!savedUser) {
        localStorage.setItem('user', JSON.stringify({ login, password }))
        document.getElementById('message').textContent = "User registered!"
    } else {
        if (savedUser.login === login && savedUser.password === password) {
            document.getElementById('message').textContent = "Login successful!"
        } else {
            document.getElementById('message').textContent = "Incorrect login or password!"
        }
    }
}


//localStorage.removeItem("user");