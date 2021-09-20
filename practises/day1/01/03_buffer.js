// js code cannot parse binary data directly, however, which is inevitable when processing images or videos
// so we can wrap a method in c

// const buf1 = Buffer.alloc(10)
// console.log(buf1);// <Buffer 00 00 00 00 00 00 00 00 00 00>两个十六进制数，一个字节

const buf2 = Buffer.from('a')
// console.log(buf2) // Buffer 61 in 16 acsii encoding

const buf3 = Buffer.from('中')
// console.log(buf3) // <Buffer e4 b8 ad> UTF-8 encoding

const buf4 = Buffer.concat([buf2, buf3])
console.log(buf4, buf4.toString()) // <Buffer 61 e4 b8 ad> a中