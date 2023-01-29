const peak=(arr,len)=>{
   if(len==1) return 0;
   if(arr[0]>=arr[1]) return 0;
   if(arr[len-1]>=arr[len-2]) return len-1;

   for(let i=0;i<len-1;i++){
        if(arr[i]>=arr[i+1]&&arr[i]>=arr[i-1]) return i;
   }
}



let arr=[2,23,45,33,1];
let len=arr.length;
let returnIndex=peak(arr,len);
console.log(`peak number is:${arr[returnIndex]}`)