// 驼峰命名
function toCamelCase(str) {
    return str.length > 0 ? str.replace(/[-_]([a-z]|[A-Z])/g,(match)=>match.toUpperCase().slice(-1)) : " ";
}
 

console.log(toCamelCase(""));
console.log(toCamelCase("the-stealth-warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("A-B-C"));

// function styleHyphenFormat(propertyName) {
//     function upperToHyphenLower(match) {
//         return match.toUpperCase();
//     }
//     return propertyName.replace(/[-_]([a-z]|[A-Z])/g, upperToHyphenLower);
// }
// console.log(styleHyphenFormat('the-stealth-warrior'))