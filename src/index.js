module.exports = function check(str, bracketsConfig) {
    let flg1, flg2, flg3, flg4;    // flg1 - () ...  flg2 - [] ... flg3 - {} ... flg4 - ||
    str = str.split('');
    let flg = 0;
    let mas = [];
    for (let a of str) {
        if (a === '(' || a === '[' || a === '{' || a === '|') {
            if (mas[mas.length - 1] === '|' && a === '|') {
                mas.pop();
            } else {
                mas.push(a);
            }
        }
        if (a === ')' /*|| a === ']' || a === '}' || a === '|'*/) {
            if (mas[mas.length - 1] === '(') {
                mas.pop()
            } else return false;
        }
        if (a === ']') {
            if (mas[mas.length - 1] === '[') {
                mas.pop()
            } else return false;
        }
        if (a === '}') {
            if (mas[mas.length - 1] === '{') {
                mas.pop()
            } else return false;
        }

    }

    if (str[str.length -1] == 6 || str[str.length - 1] == 8 || mas.length !== 0) return false;

    for (let a of bracketsConfig) {
        if (a[0] === '(' && a[1] !== ')') return false;
        if (a[0] === '{' && a[1] !== '}') return false;
        if (a[0] === '[' && a[1] !== ']') return false;
        if (a[0] === '|' && a[1] !== '|') return false;
    }

    return true;

}
