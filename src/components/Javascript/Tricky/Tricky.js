// function outer(name) {
//     let outerVar = "I am from outer function!";
    
//     function inner(age) {
//         let innerVar = "I am from inner function!";
//         console.log(outerVar);  // I can access outerVar!
//         console.log(innerVar);  // I can access innerVar!
//         console.log(name + age);
        
//         function doubleInner() {
//             console.log(outerVar);  // I can access outerVar!
//             console.log(innerVar);  // I can access innerVar!
//             console.log(name + age);
//         }
        
//         return doubleInner; // Return doubleInner from inner
//     }
    
//     return inner;  // Return inner from outer
// }

// // Now, you can access doubleInner through inner
// const myClosure = outer("razeen"); // myClosure is now the inner function
// const innerClosure = myClosure(26); // innerClosure is now doubleInner
// innerClosure();  // This calls doubleInner and prints all logs

//  string reveres 

function reverse(word){
    const reversed = word.split('').reverse().join('')
    return reversed

}

function reverseLoop(word){
    let rev = ''
    for(let i=word.length-1;i>=0;i--){
        rev += word[i]
   }
   return rev

}

console.log(reverse("razeen mohamed rasheed"))
console.log(reverseLoop("razeen mohamed rasheed"))


function longestWord(str){
    const words = str.split(' ')
    console.log(words)
    let longest = ''
    for (word of words){
        if(word.length>longest.length){
            longest = word
        }
    }
    return longest

}

console.log(longestWord("my name is mohamed"))

function palindrome(str){
    let reversed = str.split('').reverse().join('')
    if (str== reversed){
        return "palindrome"
    }else{
        return false
    }
}

console.log(palindrome("racecar"))

function removeDubplicates(arr){
    let newArr = []
    for(let i=0;i<arr.length;i++){
        if (newArr.indexOf(arr[i])===-1){
            newArr.push(arr[i])
        }
    }
    return newArr

}

// return [...new Set(arr)]; ---> Another way of removing duplicates


let data = [1,2,3,4,5,1,1,1,2,2]
console.log(removeDubplicates(data))

function removeDuplicatesfilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicatesfilter([1, 2, 3, 2, 4, 1, 5])); // Output: [1, 2, 3, 4, 5]



// Anagrams

function anagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

console.log(anagram("dusty", "study")); // Output: true


