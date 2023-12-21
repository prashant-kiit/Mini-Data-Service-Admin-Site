let userids = [];

function getUsers() {
    event.preventDefault();
    document.getElementById('output1').innerHTML = "";
    document.getElementById('output2').innerHTML = "";
    fetch('http://localhost:3000/user-api/users')
    .then(response => {
        return response.json();
    })
    .then(datas => {
        datas.forEach(data => {
            const markup = 
            `   <tr>
                    <td>
                        ${data.userid}
                    </td>
                    <td>
                        ${data.username}
                    </td>
                </tr>                   `;
            document.getElementById('output1').insertAdjacentHTML('beforeend', markup);
        });
        console.log(datas);
    })
    .catch(error => {
        console.log(error);
    });
}

function getUserIds() {
    event.preventDefault();
    document.getElementById('output1').innerHTML = "";
    document.getElementById('output2').innerHTML = "";
    fetch('http://localhost:3000/user-api/userids')
    .then(response => {
        return response.json();
    })
    .then(datas => {
        datas.forEach(data => {
            const markup = 
            `   <tr>
                    <td>
                        ${data}
                    </td>
                </tr>                   `;
            document.getElementById('output2').insertAdjacentHTML('beforeend', markup);
        });
        console.log(datas);
    })
    .catch(error => {
        console.log(error);
    });
}

function getUser() {
    event.preventDefault();
    document.getElementById('output1').innerHTML = "";
    document.getElementById('output2').innerHTML = "";
    var userid = document.getElementById('userIdGet').value;
    fetch('http://localhost:3000/user-api/users/' + userid)
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(data => {
            const markup = 
            `   <tr>
                    <td>
                        ${data.userid}
                    </td>
                    <td>
                        ${data.username}
                    </td>
                </tr>                   `;
            document.getElementById('output1').insertAdjacentHTML('beforeend', markup);
        });
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}

function post() {
    event.preventDefault();
    var newUserId = document.getElementById('userIdPost').value;
    var newUserName = document.getElementById('usernamePost').value;

    var newUser = {
        userid: newUserId,
        username: newUserName
    };

    fetch('http://localhost:3000/user-api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        document.getElementById('output0').innerHTML = 'User created successfully!';
        // console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}

function put() {
    event.preventDefault();
    var newUserId = document.getElementById('userIdPut').value;
    var newUserName = document.getElementById('usernamePut').value;

    var newUser = {
        userid: newUserId,
        username: newUserName
    };

    fetch('http://localhost:3000/user-api/users/' + newUserId, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        document.getElementById('output0').innerHTML = 'User updated successfully!';
        // console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}

function deleteById() {
    event.preventDefault();
    var newUserId = document.getElementById('userIdDelete').value;

    fetch('http://localhost:3000/user-api/users/' + newUserId, {
        method: 'DELETE',
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        document.getElementById('result').innerHTML = 'User deleted successfully!';
        // console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}
