//largest num in an array 

let num = [1,3,5,7,8,-1,0,88];
   let large = num[0];

for(let i=0;i<num.length;i++)
{
    if(large <= num[i])
    {
        large = num[i];
    }
}
console.log(large);