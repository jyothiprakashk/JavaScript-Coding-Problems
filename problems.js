// #javascript Most frequently asked programs in javascript interviews 

// 1. Program to find longest word in a given sentence ?
// 2. How to check whether a string is palindrome or not ?
// 3. Write a program to remove duplicates from an array ?
// 4. Program to find Reverse of a string without using built-in method ?
// 5. Find the max count of consecutive 1’s in an array ?
// 6. Find the factorial of given number ?
// 7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?
// 8. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.
// 9. Given two strings. Find if one string can be formed by rearranging the letters of other string.
// 10. Write logic to get unique objects from below array ?
// I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}
// 11. Write a JavaScript program to find the maximum number in an array.
// 12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
// 13. Write a JavaScript function to check if a given number is prime.
// 14. Write a JavaScript program to find the largest element in a nested array.
// [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
// 15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
// 16. Given a string, write a javascript function to count the occurrences of each character in the string.
// 17. Write a javascript function that sorts an array of numbers in ascending order.
// 18. Write a javascript function that sorts an array of numbers in descending order.
// 19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
// 20. Implement a javascript function that flattens a nested array into a single-dimensional array.
// 21. Write a function which converts string input into an object
// ("a.b.c", "someValue");
// {a: {b: {c: "someValue"}}}


// +TODO Program to find longest word in a given sentence ?

function LongestWordInSentence(sentence){
    let max=0;
    let maxValue;
    for(let item of sentence.split(" ")){
        if(item.length>max){
            max=item.length
            maxValue=item
        }
    }
    return {maxValue,max}
}

// console.log(LongestWordInSentence("This is Jyothi Prakash, I am from Kissflow"))


// How to check whether a string is palindrome or not ?

function Palindrome(word){
    let left=0;
    let right=word.length-1;

    while(left<=right){
        if(word[left]!==word[right]){
           return false
        }
        left++;
        right--;
    }
    return true
}

// console.log(Palindrome("HannaH"))


// With Built-In functions
function Palindrome1(word){
    let str=word.split("").reverse().join("")
    if(str!==word) return false;
    return true
}

// console.log(Palindrome1("HannaH"))


// Write a program to remove duplicates from an array ?

function RemoveDuplicates(array){

    return array.filter((element,index,newArr)=>newArr.indexOf(element)===index)

    // array function

    // let newArr=[];
    // for(let item of array){
    //     if(!newArr.includes(item)){
    //         newArr.push(item)
    //     }
    // }
    // return newArr

    // Reduce
//    return array.reduce((accumulator,currentValue)=>{
//         if(!accumulator.includes(currentValue)){
//             accumulator.push(currentValue)
//         }
//         return accumulator
//     },[])
}

// console.log(RemoveDuplicates([1,1,22,33,33,22,44,5,6,7,8]))


// Program to find Reverse of a string without using built-in method ?

function ReverseWordBySpace(word){
    let newStr=''
    let splitWord=word.split(" ")
    for(let i=splitWord.length-1;i>=0;i--){
        newStr+=`${splitWord[i]} `
    }
    return newStr
}

// console.log(ReverseWordBySpace("Jyothi Prakash"))

function ReverseWord(word){
    let newStr=''
    for(let i=word.length-1;i>=0;i--){
        newStr+=word[i]
    }
    return newStr
}

// console.log(ReverseWord("Jyothi Prakash"))


// Find the max count of consecutive 1’s in an array ?
const consecutiveOnes= [0, 1, 1, 0,1,1,1,1,1, 0, 1, 1, 1]

function findConsecutiveOnes(array){
    let max=0;
    let totalMax=0;
    for(let item of array){
        if(item===1){
            max+=1
            totalMax=Math.max(max,totalMax)
        }else {
            max=0
        }
    }
    return totalMax
}

// console.log(findConsecutiveOnes(consecutiveOnes))

// Find the factorial of given number ?

function Factorial(n){
    if(n===1){
        return 1
    }
    return n*Factorial(n-1)
}

// console.log(Factorial(5));

// Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?

function mergeAndSortArray(arr1,arr2){
    // return [...arr1,...arr2].sort((a,b)=>a-b)
    let newArr=[];
    let i=0;let j=0;
    while(i<arr1.length&&j<arr2.length){
        if(arr1[i]<arr2[j]){
            newArr.push(arr1[i])
            i++
        }else {
            newArr.push(arr2[j]);
            j++
        }
    }

    while(i<arr1.length){
        newArr.push(arr1[i]);
        i++;
    }

    while(j<arr2.length){
        newArr.push(arr2[j]);
        j++
    }
    return newArr
}

// console.log(mergeAndSortArray([0,3,4,31],[4,6,30]))


// 

function arraysHaveCorrespondingSquares(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        const square=arr1[i]*arr1[i]
        let found=false;
        for(let j=0;j<arr2.length;j++){
            if(square===arr2[j]){
                found=true
                break
            }
        }
        if(!found){
            return false
        }
    }
    return true
}

console.log(arraysHaveCorrespondingSquares([1, 4, 3], [1, 4, 9]))
// Given two strings. Find if one string can be formed by rearranging the letters of other string.

function wordRearranging(word1,word2){
    word1=word1.split("").sort().join("")
    word2=word2.split("").sort().join("")
    return word1===word2?true:false
}

// console.log(wordRearranging("listen",'silent'))
// console.log(wordRearranging("word",'prod'))



// Write logic to get unique objects from below array ?
// I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
// O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}

function findUniqueElements(array){
    let uniqueArray=[];
    let uniqueEle={};
    for(let item of array){
        if(!uniqueEle[item.name]){
            uniqueEle[item.name]=true
            uniqueArray.push(item)
        }
    }
    return uniqueArray
}

// console.log(findUniqueElements( [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}]))


// Write a JavaScript program to find the maximum number in an array.

function maximumArray(array){
    let max=0;
    for(let item of array){
        max=Math.max(max,item)
        // if(item>max){
        //     max=item
        // }
    }
    return max
}

// console.log(maximumArray([1,20,30,4,5,3,100,400]))


// Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers

function OnlyEvenNumbers(array){
    return array.filter(number=>number%2===0)
}

// console.log(OnlyEvenNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,16]))


// Write a JavaScript function to check if a given number is prime

function isPrime(number){
    
    for(let i=2;i<number;i++){
        if(number%i===0) return false
    }
    return number>1
}

// console.log(isPrime(4))

// Write a JavaScript program to find the largest element in a nested array.
// [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]

function LargestElementInNestedArray(array){
    let maxEle=-Infinity;
    array.forEach((arr)=>{
        if(Array.isArray(arr)){
           const newValue= LargestElementInNestedArray(arr)
            maxEle=Math.max(newValue,maxEle)
        }else {
            if(arr>maxEle){
                maxEle=arr
            }
        }
    })
    return maxEle
}

// console.log(LargestElementInNestedArray([[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]))


// Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms

function FibonacciSeries(n){
    if(n===1) return 0
    if(n===2) return 1
    return FibonacciSeries(n-1)+FibonacciSeries(n-2)
}

// console.log(FibonacciSeries(5))

// Given a string, write a javascript function to count the occurrences of each character in the string


function FindCountStringOccurrences(string){
    let maxCount=0;
    let maxChar=""
    let reduce=string.split("").reduce((acc,curr)=>{
        acc[curr]=(acc[curr]||0)+1
        return acc
    },{})
    Object.entries(reduce).forEach(([key,value])=>{
        console.log(key,value)
        if(value>maxCount){
            maxCount=value
            maxChar=key
        }
    })
    return { char: maxChar, count: maxCount };
}

// console.log(FindCountStringOccurrences("KamasaniJyothiPrakashReddy"))


// Write a javascript function that sorts an array of numbers in ascending order.

function swap(array,i,j){   
    let dummy=array[i]
    array[i]=array[j]
    array[j]=dummy
}

function ArrayAscendingOrder(array){
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                swap(array,i,j)
            }
        }
    }
    return array
}

// console.log(ArrayAscendingOrder([4, 1, 9, 6, 5]))

// Write a javascript function that sorts an array of numbers in descending order.

function ArrayDesendingOrder(array){
    for(let i=0;i<array.length;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]<array[j]){
                swap(array,i,j)
            }
        }
    }
    return array
}

// console.log(ArrayDesendingOrder([4, 1, 9, 6, 5]))


// Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.

function reverseSentence(sentence){
    let string=sentence.split(" ");
    let reversedWords = [];
    for(let i=string.length-1;i>=0;i--){
        reversedWords.push(string[i])
    }
    return reversedWords.join(" ")
}

// console.log(reverseSentence("This is a sample sentence."));


// Implement a javascript function that flattens a nested array into a single-dimensional array.

// [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]

function FlatternArray(array){
    return array.reduce((acc,curr)=>{
        if(Array.isArray(curr)){
            let result=FlatternArray(curr)
            acc=acc.concat(result)
        }else {
            acc.push(curr)
        }
        return acc
    },[])

}

// console.log(FlatternArray([[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]))


// Write a function which converts string input into an object
// ("a.b.c", "someValue");
// {a: {b: {c: "someValue"}}}

function ConvertStringToObject(key,value){
    let hash={}
    let keys=key.split(".");
    let currentHash = hash;
    for(let i=0;i<keys.length;i++){
        let currentKey=keys[i]
        if(i===keys.length-1){
            currentHash[currentKey]=value
        }else {
            currentHash[currentKey]={}
            currentHash=currentHash[currentKey]
        }
    }
    return hash
}

// console.log(ConvertStringToObject("a.b.c", "someValue"))


// JavaScript Memoize Function


let memoize=(fn)=>{
	let cache={}
  
  return function (...args){
 		const value=JSON.stringify(args)
    console.log(value,'pppop',cache,'hello',fn(...args),args,...args)
    if(!cache[value]){
    	cache[value]=fn(...args)
    }
    return cache[value]
  }
}


let calculate=(a,b)=>{
	return a+b
}

let memoizedValue=memoize(calculate)

// console.log(memoizedValue(1,2))
// console.log(memoizedValue(1,2))

// console.log(memoizedValue(2,3))
// console.log(memoizedValue(2,3))


// Input 
// const inside = [
//  { id: 1, name: "orange", category: "fruits" }, 
//  { id: 2, name: "apple", category: "fruits" }, 
//  { id: 3, name: "carrot", category: "vegetable" }
//  ];

const inside = [
    { id: 1, name: "orange", category: "fruits" }, 
    { id: 2, name: "apple", category: "fruits" }, 
    { id: 3, name: "carrot", category: "vegetable" }
];
/* Output : {
  "fruits": [
    {
      "id": 1,
      "name": "orange"
    },
    {
      "id": 2,
      "name": "apple"
    }
  ],
  "vegetable": [
    {
      "id": 3,
      "name": "carrot"
    }
  ]
} */

function ObjectOrdering(array){
    let newArray={}
    array.forEach((each)=>{
       if(!newArray[each.category]) {
            newArray[each.category]=[]
        }
        newArray[each.category].push({id:each.id,name:each.name})
    })
    return newArray
}

// console.log(ObjectOrdering(inside))



