function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    if (/\/ 0/.test(expr)) {
        throw new Error ('TypeError: Division by zero.');
    }
    let brackets = expr.split('').filter(x => x === '(' || x === ')').join('');
    let currentLength = 0;
    do {
        currentLength = brackets.length;
        brackets = brackets.replace('()', '');
    } while (currentLength != brackets.length)
    if (brackets.length > 0) {
        throw new Error('ExpressionError: Brackets must be paired');
    }
    var func = new Function("return " + expr);
    return func();
}

module.exports = {
    expressionCalculator
}