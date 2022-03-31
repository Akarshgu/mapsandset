

let str="abcadeecfb";
let n=str.length;
let newstr="";

for (let i = 0; i < n; i++) {
  
  let  neww=str[i];
   if(newstr.indexOf(neww)<0){
      newstr+=neww;
   }
}
console.log(newstr);

let s = "abcadeecfb";

let result = [...s].reduce(
  (res, char) => ((res[char] = (res[char] || 0) + 1), res),
  {}
);
console.log(result);