var button = document.getElementById('button');
var userInformation = document.getElementById('user-information');
var tabs = document.getElementById('tabs');
var img = document.createElement('img');
var firstName = document.createElement('p');
var lastName = document.createElement('p');
button.onclick = function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);

    xhr.onload = function () {
        console.log(this.response);
        var users = JSON.parse(this.response);
        console.log(users);
        for (var i = 0; i < users.data.length; i++) {
            var tab = document.createElement('div');
            tab.innerHTML = '<a href="#">User</a>';
            tabs.appendChild(tab);
            tab.onclick = function () {
                var src = users.data[1].avatar;
                img.setAttribute('src', src);
                userInformation.appendChild(img);
                firstName.innerHTML = 'First Name: ' + users.data[1].first_name;
                userInformation.appendChild(firstName);
                lastName.innerHTML = 'Last Name: ' + users.data[1].last_name;
                userInformation.appendChild(lastName);
            }
        }
        var src = users.data[0].avatar;
        img.setAttribute('src', src);
        userInformation.appendChild(img);
        firstName.innerHTML = 'First Name: ' + users.data[0].first_name;
        userInformation.appendChild(firstName);
        lastName.innerHTML = 'Last Name: ' + users.data[0].last_name;
        userInformation.appendChild(lastName);

        // users.data.forEach(function(i) {
        //     var src = i.avatar;
        //     img.setAttribute('src', src);
        //     userInformation.appendChild(tab);
        //     userInformation.appendChild(img);
        //     firstName.innerHTML = 'First Name: ' + i.first_name;
        //     userInformation.appendChild(firstName);
        //     lastName.innerHTML = 'Last Name: ' + i.last_name;
        //     userInformation.appendChild(lastName);
        // });
    }
    xhr.onerror = function () {
        console.log(this.status + ': ' + this.statusText);
    }
    xhr.send();
}


