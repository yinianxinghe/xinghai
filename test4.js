function longestConsec(strarr, k) {
            var arr = new Array();
            var result = strarr.map(function (el, i) {
                return { index: i, value: el.toLowerCase(), len: strarr[i].length }
            }).sort(function (a, b) {
                return +(a.len < b.len) || +(a.len === b.len) - 1
            }).map(function (el) {
                arr.push(strarr[el.index])
            })
            return arr.slice(0, k).join("");
        }
