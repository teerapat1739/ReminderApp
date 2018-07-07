const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Andrew',
            age: 26
        });
        reject('Some thing went wrong!');
    }, 5000);
    // resolve('This is my resolved data');
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error', error);
})

console.log('after');
