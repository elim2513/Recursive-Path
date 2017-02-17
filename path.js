//Your code below
function buildPath(p,n){
  let path=[];
  for(let a=0;){
    let r = Math.random()
    if(r<=p){
      path[a]= false
    }
    else{
      path[a]= true
    }
  }
  return path;
}



//Test code
let testpath1 = buildPath(0.10,15);
let testpath2 = buildPath(0.50,15);
console.log(testpath1);
console.log(testpath2);
console.log("---------------------");
console.log(stroll([true,false,true]],0));
console.log(stroll([true,true,true]],0));
console.log(rsj(testpath1,0));
console.log(rsj(testpath2,0));
