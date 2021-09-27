# Node Basic API

http://nodejs.cn/api/

- Core API (no require): buffer, module, process
- inside API (no install): os, fs, path, http, event

## Buffer

- practises/01/03_buffer.js

- Buffer.alloc(LenOfBuf)
- Buffer.from(expr)
- Buffer.concat([buf1, buf2])
- Buffer.toString(buf)

## fs: File System

Can read file sync or async 

- look practise/day1/01/01_fs.js and 02_fs_promise.js

- fs.readFileSync
- fs.readFile

we can use promisify to change the callback async style to promise style:

## Http 
build a http connection to transcate http packages through the listening port

- look practise/day1/01/04_http.js

## Stream

Stream是Event.Emitter接口

- see practise/day1/01/05_stream.js

fs.createReadStream()
fs.createWriteStream()
stream1.pipe(stream2)
