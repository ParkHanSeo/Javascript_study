console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

function printImeediately(print){
      print();
}

printImeediately(() => console.log('hello'));

function printWithDelay(print, timeout){
      setTimeout(print, timeout);
}

printWithDelay(() => console.log('async'), 2000);