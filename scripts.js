const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            return resolve();
        },delay);
    })
}

for(let i = 0; i <= 10; i++){
    delayedColorChange('#264653',1000)
        .then(()=> delayedColorChange('#2a9d8f',1000))
        .then(()=> delayedColorChange('#e9c46a',1000))
        .then(()=> delayedColorChange('#f4a261',1000))
        .then(()=> delayedColorChange('#e76f51',1000))
        .then(()=> delayedColorChange('#184e77',1000))
        .then(()=> delayedColorChange('#22223b',1000))
    i++;
}

// delayedColorChange('#264653',1000)