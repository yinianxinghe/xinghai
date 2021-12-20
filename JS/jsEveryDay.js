// title 2019-5-15
// Well met with Fibonacci bigger brother, AKA Tribonacci.
//     As the name may already reveal, it works basically like a Fibonacci, but summing the last 3
// (instead of 2) numbers of the sequence to generate the next.
//     So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature),
// we have this sequence:
//     [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// Well, time to expand the family a little more: think of a Quadribonacci starting with a
//     signature of 4 elements and each following element is the sum of the 4 previous, a
// Pentabonacci with a signature of 5 elements and each following element is the sum of the 5
// previous, and so on.
//     Well, guess what? You have to build a Xbonacci function that takes a signature of X
// elements - and remember each next element is the sum of the last X elements - and returns
// the first n elements of the so seeded sequence. Try to do it in one line of code without
// the comma operator.
// 总结:一行完成可配置的X阶斐波那契数列,返回前n个元素

// code let Xbonacci = (list, n) => Boolean(eval(" for (let a = list.length,i=a;i < n;i++) list.push(eval(list.slice(-a).join(\"+\")))") && 0) || list.slice(0, n)

// console.log(Xbonacci([1, 1, 1, 1, 1], 20))
// console.log(Xbonacci([1, 13, 12, 7, 1, 5, 9, 10, 17, 5, 15, 17, 6, 17, 11],0) )

// title 2019-5-16
// Complete the method/function so that it converts dash/underscore delimited words into
// camel casing. The first word within the output should be capitalized only if the original word
// was capitalized. Try to do it in one line of code without the comma operator.
// 总结:一行代码完成将下划线或者短划线命名改成驼峰命名法

// code let toCamelCase = (str) => str.replace(/[_\-]([A-Z]|[a-z])/g, (arr1) => arr1.toLocaleUpperCase().slice(-1))

// console.log(toCamelCase("The_Stealth_Warrior"))

// title 2019-5-19
// There is a secret string which is unknown to you. Given a collection of random triplets from
// the string, recover the original string.
//     A triplet here is defined as a sequence of three letters such that each letter occurs
// somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".
//     As a simplification, you may assume that no letter occurs more than once in the secret
// string.
//     You can assume nothing about the triplets given to you other than that they are valid
// triplets and that they contain sufficient information to deduce the original string. In
// particular, this means that the secret string will never contain letters that do not occur in one
// of the triplets given to you.
// 总结,一行代码完成拼接给定字符二维数组为完整的字符串

// function recoverSecret (triplets) {
//     let spell = (self, array1, res1) => array1.length < 2 ? res1 + array1[0] : self(self, array1.filter((ele2) => ((array) => (array.find((ele) => array.every((ele1) => ele[0] !== ele1[1])))[0][0])(array1) !== ele2[0]), res1 + ((array) => (array.find((ele) => array.every((ele1) => ele[0] !== ele1[1])))[0][0])(array1))
//     return spell(spell, Array.from(new Set(triplets.reduce((accumulator, currentValue) => accumulator + ',' + currentValue.join('').substr(0, 2) + ',' + currentValue.join('').substr(1), '').split(',').slice(1))), '')
// }
// function recoverSecret (triplets) {
//     let spell = (self, array1, res1) => array1.length < 2 ? res1 + array1[0] : self(self, array1.filter((ele2) => ((array) => (array.find((ele) => array.every((ele1) => ele[0] !== ele1[1])))[0][0])(array1) !== ele2[0]), res1 + ((array) => (array.find((ele) => array.every((ele1) => ele[0] !== ele1[1])))[0][0])(array1))
//     let factory = f => (array1, res1) => f(f, array1, res1)
//     spell = factory(spell)
//     return spell(Array.from(new Set(triplets.reduce((accumulator, currentValue) => accumulator + ',' + currentValue.join('').substr(0, 2) + ',' + currentValue.join('').substr(1), '').split(',').slice(1))), '')
// }
// code let recoverSecret = (triplets) => ((f => (self => ([array1, res1]) => f(self(self))([array1, res1]))(self => ([array1, res1]) => f(self(self))([array1, res1])))(self => ([array1, res1]) => array1.length < 2 ? res1 + array1[0] : self([array1.filter((ele2) => ((array) => (array.find((ele) => array.every((ele1) => ele[0] !== ele1[1])))[0][0])(array1) !== ele2[0]), res1 + ((array) => (array.find((ele) => array.every((ele1) => ele[0] !== ele1[1])))[0][0])(array1)])))([Array.from(new Set(triplets.reduce((accumulator, currentValue) => accumulator + ',' + currentValue.join('').substr(0, 2) + ',' + currentValue.join('').substr(1), '').split(',').slice(1))), ''])


// console.log(recoverSecret([['t', 'u', 'p'], ['w', 'h', 'i'], ['t', 's', 'u'], ['a', 't', 's'], ['h', 'a', 'p'], ['t', 'i', 's'], ['w', 'h', 's']]))

// title 2019-5-22
// You are given an array strarr of strings and an integer k. Your task is to return the first
// longest string consisting of k consecutive strings taken in the array.
//     n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
// 总结,一行代码返回包含k个连续字符的最长字符串

function longestConsec (strarr, k) {
    return strarr.length > 0 && k > 0 ? strarr.sort((ele1, ele2) => ele1.length !== ele2.length ? ele1.length < ele2.length : false).find((ele) => new RegExp('(\\w)\\1{' + (k - 1) + '}').test(ele)) || '' : ''
}

// console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", 'aaa', "zzz"], 3))

