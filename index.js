const triangleJuge = function(args) {
    args.sort((a, b) => a - b)
    let output = ''
    // 不能构成三角形
    // 能构成三角形：常规、等腰、等边、直角
    const isSatisfiedCodeRules =
    args.find(itm => (itm === 0 || itm < 0 || typeof itm === 'string')) === 0
            ? false
            : !args.find(itm => (itm === 0 || itm < 0 || typeof itm === 'string'))

    if (args.length === 3) {
        if (isSatisfiedCodeRules) {
            if (args[0] + args[1] > args[2]) {
                if (Math.pow(args[0], 2) + Math.pow(args[1], 2) === Math.pow(args[2], 2)) {
                    output = '直角三角形'
                } else if (args[0] === args[1] && args[1] === args[2]) {
                    output = '等边三角形'
                } else if (args[0] === args[1] || args[1] === args[2]) {
                    output = '等腰三角形'
                } else {
                    output = '常规三角形'
                }
            } else {
                output = '不能构成三角形'
            }
        } else {
            output = '不能构成三角形'
        }
    } else {
        output = '不能构成三角形'
    }
    return output
}

module.exports = triangleJuge