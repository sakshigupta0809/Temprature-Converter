let c= document.getElementById('c');
let f = document.getElementById('f');

c.oninput = ()=>{
    let output = (parseFloat(c.value) *9 )/5 +32;
    f.value = parseFloat(output.toFixed(2));
};
f.oninput = ()=>{
    let output = (parseFloat(f.value) - 32 *5 )/9;
    c.value = parseFloat(output.toFixed(2));
};