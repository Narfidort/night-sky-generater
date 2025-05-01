


if (document.cookie){
    data = JSON.parse(document.cookie);
}

button.addEventListener("click", function() {
    data = {
        str: myInput1.value,
        alpha: {spd: myInput2.value,
            app: myInput3.value}
    }

    data = JSON.stringify(obj);
    document.cookie = data;
    alert('保存しました: ' + data);
});


let myInput1 = document.querySelector("#myInput1")
let myInput2 = document.querySelector("#myInput2")
let myInput3 = document.querySelector("#myInput3")

function copyValue() {
    let obj = {
        str: myInput1.value,
        alpha: {spd: myInput2.value,
            app: myInput3.value}
    }

    

    let data = JSON.stringify(obj);
    navigator.clipboard.writeText(data)
    .then(() => {
        alert('コピーしました: ' + data);
    }).catch(err => {
        alert('コピーに失敗しました: ' + err);
    });
}

myInput1.addEventListener("input", function() {
    console.log("myInput1: " + myInput1.value);
}
);



let skill = 20;

let str = `${skill}-1d100>=0`

console.log(str);