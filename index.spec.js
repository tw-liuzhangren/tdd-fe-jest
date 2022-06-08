const triangleJuge = require('./index')

const triangleJugeArray = [
    {
        taskName: '任意两条边的长度不大于第三条边',
        input: [1, 1, 2],
        output: '不能构成三角形'
    },
    {
        taskName: '超出3条边',
        input: [1, 2, 3, 4],
        output: '不能构成三角形'
    },
    {
        taskName: '小于3条边',
        input: [1, 2],
        output: '不能构成三角形'
    },
    {
        taskName: '一条边为字符',
        input: [1, 2, '3'],
        output: '不能构成三角形'
    },
    {
        taskName: '一条边为负数',
        input: [1, 2, -3],
        output: '不能构成三角形'
    },
    {
        taskName: '一条边为0',
        input: [1, 2, 0],
        output: '不能构成三角形'
    },
    {
        taskName: '任意两条边的长度大于第三条边，三条边相等',
        input: [4, 4, 4],
        output: '等边三角形'
    },
    {
        taskName: '任意两条边的长度大于第三条边，两条边的平方等于第三条边的平方',
        input: [12, 9, 15],
        output: '直角三角形'
    },
    {
        taskName: '任意两条边的长度大于第三条边',
        input: [5, 7, 8],
        output: '常规三角形'
    },
    {
        taskName: '任意两条边的长度大于第三条边，且两条边相等',
        input: [7, 7, 6],
        output: '等腰三角形'
    },
]

triangleJugeArray.forEach(item => {
    test(item.taskName, () => {
        expect(triangleJuge(item.input)).toBe(item.output);
    });
})