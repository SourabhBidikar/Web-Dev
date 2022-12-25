
let binarySearchfunc= function(num,key){
        let min=0;
        let max=num.length-1;
    while(min<=max){
        
        let mid=Math.floor((min + max)/2);
  
        // If element is present at mid, return True
        if (num[mid]===key)
        { 
            console.log("Element  found at: "+(mid+1)); 
            break;
        }
 
        // Else look in left or right half accordingly
        else if (num[mid] < key)
             min = mid + 1;
        else
             max = mid - 1;
    }
    if(min>max){
        console.log("Element not found in given array")
        
    }
}



let num=[1,2,3,4,5,6,7];
let key=5;

binarySearchfunc(num,key);
