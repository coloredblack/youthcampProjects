# Day 1

<NodeJS And Server>

By 全栈然叔

## NodeJS API

http://nodejs.cn/api/

- Core API (no require): buffer, module, process
- inside API (no install): os, fs, path, http, event

### Buffer

- practises/01/03_buffer.js
- Buffer.alloc(LenOfBuf)
- Buffer.from(expr)
- Buffer.concat([buf1, buf2])
- Buffer.toString(buf)

### fs: File System

Can read file sync or async 

- look practise/day1/01/01_fs.js and 02_fs_promise.js
- fs.readFileSync
- fs.readFile

we can use promisify to change the callback async style to promise style:

### Http 
build a http connection

- look practise/day1/01/04_http.js


### Stream

Stream是Event.Emitter接口

fs.createReadStream()
fs.createWriteStream()
stream1.pipe(stream2)

## 持久化技术

## RestFul API

## Auth

### Cookie and Session

### JWT Token

### CDN

`CDN` 全称 `Content Delivery Network`，即内容分发网络。其基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。

本地缓存的数据，通过`key-value` 的形式，将url 和本地缓存进行映射,存储结构与 `Map`相似，采用 `hash+链表形式`进行缓存。

#### CDN 命中率

衡量我们CDN服务质量的一个核心标准，当用户访问的资源恰好在缓存系统里，可以直接返回给用户，说明CDN命中；如果CDN缓存中，没有命中资源，那么会触发`回源`动作

#### CDN 回源
- `一级缓存` 访问`二级缓存`是否有相关数据，如果有，返回一级缓存。
- `二级缓存` Miss，触发 二级缓存 回源请求，请求源站对应数据。获取结果后，缓存到本地缓存，返回数据到一级缓存。
- `一级缓存` 获取数据，缓存本地后，返回给用户

### RPC

**RPC**：Remote Procedure Call，远程过程调用。是指计算机程序使过程在不同的地址空间（通常在共享网络的另一台计算机上）执行时，其编码方式就像是正常的（本地）过程调用，而无需程序员明确为远程交互编码细节。

RPC是一种服务器-客户端（Client/Server）模式，经典实现是一个通过**发送请求-接受回应**进行信息交互的系统。

1. **都是有用信息**
2. **效率高**
3. **调用简单**
4. **无需关心网络传输或者通讯问题**