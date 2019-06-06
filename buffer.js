// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10, 9);
console.log(buf1);

const buf = Buffer.from('runoob', 'ascii');
// 输出 72756e6f6f62
console.log(buf.toString('hex'));

// 输出 cnVub29i
console.log(buf.toString('base64'));

// 输出 cnVub29i
console.log(buf.toString('utf-8'));

const buf10 = Buffer.alloc(256);
var len = buf10.write("www.test.com");

console.log("Length: ", len);

const buf111 = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
  buf111[i] = i + 97;
}

console.log( buf111.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf111.toString('ascii',0,5));   // 输出: abcde
console.log( buf111.toString('utf8',0,5));    // 输出: abcde
console.log( buf111.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde


const buf11 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json1 = JSON.stringify(buf11);
console.log(json1);

var buffer1 = Buffer.from(('Hello'));
var buffer2 = Buffer.from(('World'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3: " + buffer3.toString());

var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if (result < 0) {
   console.log(buffer1 + " is before " + buffer2);
} else if (result == 0){
   console.log(buffer1 + " is the same as " + buffer2);
} else {
   console.log(buffer1 + " is after " + buffer2);
}

var buf001 = Buffer.from('abcdefghijkl');
var buf002 = Buffer.from('RUNOOB');

//将 buf002 插入到 buf001 指定位置上
buf002.copy(buf001, 2);

console.log(buf001.toString());