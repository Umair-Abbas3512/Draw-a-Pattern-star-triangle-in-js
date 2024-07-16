let num = 9;
let star = ""
for (let i = 1; i <= num; i++){
    for (let j = 1; j <= i; j++){
        star += "*";
    }
    star += "\n";
}
console.log(star);
