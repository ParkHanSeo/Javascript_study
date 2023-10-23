import { UserStorage, UserStorage2 } from "../비동기/UserStorage.js";

const userStorage = new UserStorage();
const userStorage2 = new UserStorage2();

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

userStorage2.loginUser(id, password)
.then(userStorage2.getRoles)
.then(user => alert(`Hello ${userWithRole.name}, you have a ${userWithRole.rolr} role`))
.catch(console.log);