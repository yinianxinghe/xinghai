// 神秘三元组
const recoverSecret = (triplets) => {
    let result = "";
    //  排列集合字符串 去重
    triplets.forEach(element => { element.forEach(item => { result.indexOf(item) == -1 ? result += item : false }) });
    // 用于标识while大循环是否进行
    var flag = true;
    while (flag) {
        flag = false;
        for (let i = 0; i < triplets.length; i++) {
            for (let j = 0; j < 2; j++) {
                if (result.indexOf(triplets[i][j]) > result.indexOf(triplets[i][j + 1])) {
                    flag = true;
                    // 给交换字母位置
                    result = result.replace(triplets[i][j], triplets[i][j + 1]).replace(triplets[i][j + 1], triplets[i][j]);
                }
            }
        }
    }
    return result;
}
// tupwhisa=>tspwhiua=>aspwhiut=>atpwhius=>htpwaius=>htawpius=>wtahpius=>
console.log(recoverSecret([
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']
]));
