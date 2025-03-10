
//***** bubble sort
function bubbleSort(arr){
    let swapped;

    for(let i=0; i<arr.length; i++){
        swapped = false;

        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swapped = true;
            }
        }

        if(swapped === false) break;
    }
    return arr;
}

let array = [4,8,7,12,10,6];
console.log(bubbleSort(array))


//***** sort and swapcount
function bubleSortSwaps(arr){
    let swapCount = 0;
    
    for(let i=0; i<arr.length; i++){
        let swapped = false;
        
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swapped = true;
                swapCount++;
            }
        }
        if(swapped === false) break;
    }
    return {arr,swapCount};
}

console.log(bubleSortSwaps(array))



//*** string sort
function stringSort(arr){
    
    for(let i=0; i<arr.length; i++){
        let swapped = false;
        
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j].length > arr[j+1].length){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                 swapped = true;
            }
        }
        if(swapped === false) break;
    }
    return arr;
}

let fruits = ["apple", "kiwi", "banana", "pear"];
console.log(stringSort(fruits))



//**** sort by key
function keySort(arr,key){
    for(let i=0; i<arr.length; i++){
        let swapped = false;
        
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j][key] > arr[j+1][key]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                swapped = true;
            }
        }
        if(swapped === false) break;
    }
    return arr;
}

let people = [{name: 'Alice', age: 25}, {name: 'Bob', age: 20}, {name: 'Charlie', age: 30}]
console.log(keySort(people,'age'))



//*** sort array elements
function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let j=i-1;
        while(j >=0 && arr[j+1] < arr[j]){
            let temp = arr[j+1];
            arr[j+1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
    return arr;
}

let arr = [12, 11, 13, 5, 6];
console.log(insertionSort(arr));


//****** insertion sort array elements
function SortArray(arr){
    for(let i=1; i<arr.length; i++){
        let current = arr[i]
        let j=i-1;
        
        while(j >= 0 && arr[j] > current){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}

let numbers = [8,12,14,10]
console.log(SortArray(numbers));


// ********* find min and max from array insertion sort
function findMinMax(arr){
    let min = arr[0];
        let max = arr[0]
    for(let i=1; i<arr.length; i++){
        
        if(arr[i] < min){
            min = arr[i]
        }
        
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return {min,max}
}
  
 
let element = [8,12,5,11,14,10];
console.log(findMinMax(element))



//***** selection sort
function selectionsort(arr){
    for(let i=0; i<arr.length-1; i++){
        let min = i;

        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        if(min !== i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let nums = [12, 11, 24, 18, 2, 6];
console.log(selectionsort(nums));


//* k th samllest element selection sort **
function kthSmallest(arr,k){
    for(let i=0; i<arr.length-1; i++){
        let minIndex = i;
        
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr[k-1]
}

let elements = [7, 10, 4, 3, 20, 15];
let k = 3;
console.log(kthSmallest(elements,k))



//***** merge sort
function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    
    const mid = Math.floor(arr.length/2);
    
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    
    let sortedLeft = mergeSort(left);
    let sortedRight = mergeSort(right);
    
    return merge(sortedLeft,sortedRight)
}

function merge(left,right){
    let res = [];
    
    let i=0;
    let j=0;
    
    while(i<left.length && j<right.length){
        if(left[i] < right[j]){
            res.push(left[i]);
            i++;
        }else{
            res.push(right[j]);
            j++;
        }
    }
    return res.concat(left.slice(i)).concat(right.slice(j))
}

let digits = [7,12,8,15,3,1,5,20];
console.log(mergeSort(digits))



//******* quick sort
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    
    for(let i=0; i<arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
            i++;
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let arrNums = [7,12,25,36,1,5,20];
console.log(quickSort(arrNums))