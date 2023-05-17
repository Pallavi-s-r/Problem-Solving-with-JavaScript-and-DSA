/* 
Home assignment
1. find the maximum element in an array
2. find the minimum element in an array
3. find the second largest element in an array
4. find the second smallest element in an array
5. find the sum of all elements in an array
6. find the average of all elements in an array
7. find the sum of all even elements in an array
8. find the sum of all odd elements in an array
9. find the number of even elements in an array
10. find the number of odd elements in an array*/

//1.
let largestElement = function(arr){
    let n = arr.length;
   for(let i =0; i<n;i++){
    // console.log(arr[i]);
    for(let j = i+1; j<n;j++){
        // console.log(arr[j]);
        if(arr[i]>arr[j]){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            console.log(arr[i],arr[j]);
        }
    }
 }
console.log(arr);
console.log( arr[n-1]);
}
largestElement([1,2,3,4,6,5]);

//2. 
 let minimumElement = function(arr){
    let n = arr.length;
    for(let i =0; i<n;i++){
        // console.log(arr[i]);
        for(let j = i+1; j<n;j++){
          //   console.log(arr[j]);
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
               // console.log(arr[i],arr[j]);
            }
        }
     }
     console.log(arr[0]);
     return
    }
    minimumElement([10,2,13,4,16,5])
 
    //3.
    let secondLargest = function(arr){
        let n = arr.length;
       for(let i =0; i<n;i++){
        // console.log(arr[i]);
        for(let j = i+1; j<n;j++){
            // console.log(arr[j]);
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                //console.log(arr[i],arr[j]);
            }
        }
     }
    console.log(arr);
    console.log( arr[n-2]);
    }
    secondLargest([1,2,3,4,6,5]);

    //4.
    let secondMinimum = function(arr){
        let n = arr.length;
        for(let i =0; i<n;i++){
            // console.log(arr[i]);
            for(let j = i+1; j<n;j++){
              //   console.log(arr[j]);
                if(arr[i]>arr[j]){
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                   // console.log(arr[i],arr[j]);
                }
            }
         }
         console.log(arr)
         console.log(arr[1]);
         return
        }
        secondMinimum([10,2,4,13,4,16,5,8])

    //5. + 6
    let sumAndAverageOfAllElements = function(arr){
        let sum =0;
        let average;
        for(let i =0; i<arr.length; i++){
            sum+=arr[i];
        }
        average = sum/arr.length;
         console.log(sum,average);
        
    }
    sumAndAverageOfAllElements([2,3,4,1,5,6]);

   //7 + 8

   let sumOfEvenOrOdds = function(arr){
    let n = arr.length;
    let sum =0;
    let sum1 =0;
    for(let i =0; i<n;i++){
      if(arr[i]%2===0){
        sum+=arr[i];
      }
      else{
        sum1 +=arr[i];
      }
     }
     console.log("sum of even",sum);
     console.log("sum of Odd",sum1);
     
    }
    sumOfEvenOrOdds([1,2,3,4,5,6,7,8,9]);

    //8+10
    let evenOrOddCount = function(arr){
        let n = arr.length;
        let count1 =0;
        let count2 = 0;
        for(let i =0; i<n;i++){
         if(arr[i]%2==0){
count1++;
         }
         else
          count2++;
         }
         console.log("count of evens",count1);
         console.log("count of odd",count2);
       
        }
        evenOrOddCount([10,2,13,4,16,5,7])