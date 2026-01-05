//print most freunced value

let num = [10,10,10,10,10,2,3,4,0];
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

for(let j=0;j<num.length;j++)
{
    let ch = num[j];
    if(freq[ch] > num.length /2 )
    {
        console.log(num[j]);
        break;
    }
}
    