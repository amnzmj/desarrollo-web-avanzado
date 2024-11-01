function click() {
    console.log('click');
}

document.addEventListener("DOMContentLoaded",function() {
    document.getElementById('button').addEventListener('click',click);
})
