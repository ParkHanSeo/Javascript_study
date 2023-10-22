import UserStorage from "./userStorage.js";

const userStorage = new UserStorage();

const id = prompt('enter your id');
const password = promt('enter your password');
userStorage.loginUser(
      id,
      password, 
      user => {
            userStorage.getRoles(
                  user, 
                  userWithRole => {
                        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.rolr} role`)
                  },
                  error => {
                        console.log(error);
                  }
            )
      },
      error => {
            console.log(error)
      }
);