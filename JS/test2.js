


function toCamelCase(str) {
    var arr = str.split(/[-_]/);
    arr[0] = arr[0][0] + arr[0].substring(1);
    for (var i = 1; i < arr.length; i++) {arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1)}
    console.log(str = arr.join(""));
}

toCamelCase("")
toCamelCase("the-stealth-warrior")
toCamelCase("The_Stealth_Warrior")
toCamelCase("A-B-C")