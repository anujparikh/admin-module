import delay from './delay';

const users = [
    {
        id: '1',
        username: 'anujparikh',
        password: 'qazxsw1234',
        firstName: 'Anuj',
        lastName: 'Parikh',
        email: 'anujparikh1@gmail.com',
        phoneNo: '2488778677'
    },
    {
        id: '2',
        username: 'palakparikh',
        password: 'qazxsw1234',
        firstName: 'Parikh',
        lastName: 'Parikh',
        email: 'palakparikh@gmail.com',
        phoneNo: '4106088799'
    },
    {
        id: '3',
        username: 'hardikparikh',
        password: 'qazxsw1234',
        firstName: 'Hardik',
        lastName: 'Parikh',
        email: 'hardikparikh@gmail.com',
        phoneNo: '1234567890'
    }
];

class usersApi {
    static getAllUsers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], users));
            }, delay);
        });
    }

    static saveUser(user) {
        return new Promise((resolve) => {
            setTimeout(() => {
                user.id = '4';
                users.push(user);
                resolve(user);
            }, delay);
        });
    }

    static login(username, password) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const loginActivity = {
                    username: false,
                    password: false,
                    loggedIn: false
                };
                const userIndex = users.findIndex(user => {
                    user.username === username;
                });
                if (userIndex !== -1) {
                    if (users[userIndex].password === password) {
                        loginActivity.username = true;
                        loginActivity.password = true;
                        loginActivity.loggedIn = true;
                    } else {
                        loginActivity.username = true;
                    }
                }
                resolve(loginActivity);
            }, delay);
        });
    }
}

export default usersApi;