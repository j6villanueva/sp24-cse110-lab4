function myCallback() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(myCallback, 1000);