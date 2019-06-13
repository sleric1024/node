const buf = Buffer.from('runoob', 'ascii');

// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));

var buffer1 = Buffer.from('ABC');
console.log(buffer1);
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if (result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
} else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
} else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}

var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('RUNOOB');

//将 buf2 插入到 buf1 指定位置上
buf2.copy(buf1, 2);

console.log(buf1.toString()); //abRUNOOBijkl

const bufs = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(bufs);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);