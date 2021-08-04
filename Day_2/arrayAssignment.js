console.log("First Assignment")

let a = ["First","Second","Third","Forth","Fifth"];

for(let i=0;i<a.length;i++ ){
    let b="";
    for(let j=a[i].length-1;j>=0;j--){
        b = b+a[i][j];
    }
    console.log(b);
}