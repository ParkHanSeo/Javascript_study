class UserStorage {
      loginUser(id, password, onSuccess, onError){
            setTimeout(() => {
                  if(
                        (id === 'ellie' && password === 'dream') ||
                        (id === 'coder' && password === 'academy')
                  ){
                        onSuccess(id);
                  } else {
                        onError(new Error('not found'));
                  }
            }, 2000);
      }

      getRoles(user, onSuccess, onError){
            setTimeout(() =>{
                  if(user === 'ellie'){
                        onSuccess({name: 'ellie', role: 'admin'});
                  } else {
                        onError(new Error('no access'));
                  }
            }, 1000);
      }
}


class UserStorage2 {
      loginUser(id, password){
            return new Promise((resolve, reject) => {
                  setTimeout(() => {
                        if(
                              (id === 'ellie' && password === 'dream') ||
                              (id === 'coder' && password === 'academy')
                        ){
                              resolve(id);
                        } else {
                              reject(new Error('not found'));
                        }
                  }, 2000);
            });
      }

      getRoles(user){
            return new Promise((resolve, reject) => {
                  setTimeout(() =>{
                        if(user === 'ellie'){
                              resolve({name: 'ellie', role: 'admin'});
                        } else {
                              reject(new Error('no access'));
                        }
                  }, 1000);
            })
      }
}

export {UserStorage, UserStorage2};