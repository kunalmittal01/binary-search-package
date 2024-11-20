exports.binarySearch = (ar,ele)=>{
    let i = 0, j = ar.length -1; 
    while(i <= j) {
        
        const mid = i + parseInt((j-i)/2);

        if(ar[mid] === ele) {
            return mid;
        }
        else if(ar[mid] < ele) {
            i = mid + 1;
        }

        else  {
            j = mid - 1;
        }
    }
    return -1;
}

