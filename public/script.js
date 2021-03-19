const usersEl = document.querySelector(".users")
fetch('http://localhost:3001/users')
    .then(res => res.json())
    .then(data => {
        console.log(data.items)
        for (let item of data.items) {
            const userEl = document.createElement('div')
            userEl.classList.add('user')
            userEl.innerHTML = `
            <h4>${item.name}</h4>
            <p>${item.email}</p>
            `
            usersEl.append(userEl)
        }
    })