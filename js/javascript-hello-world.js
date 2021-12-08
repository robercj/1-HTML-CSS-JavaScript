function getName() {
    const userName = prompt('What is your name?');
    sayHello(userName);
}
function sayHello(name) {
alert('hello ' + name + '!');
console.log('alert sent!');
}