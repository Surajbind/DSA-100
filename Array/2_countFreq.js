//print the frequency of all values

let num = [1,1,1,1,2,3,4,5,2,3];
let freq = {};

for(let i=0;i<num.length;i++)
{
    let ch = num[i];

    if(freq[ch])
    {
        freq[ch] = freq[ch] + 1;
    }
    else
    {
        freq[ch] = 1;
    }   
}

console.log(freq);
