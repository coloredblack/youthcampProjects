# day4

## Web方面移动端开发
莫涛MT

移动端适配，touch事件，手势库封装
移动轮播图实战

### viewport
09年开始移动端火热，但是很快出现问题，移动端的设置没有那么大。

视口设置（viewport）移动端特有的设置，为了解决移动端屏幕过小，放不下正常网页的问题。当不设置时，viewport默认为980
```html
<meta name="viewport" content>
```

物理像素和CSS像素，设置Width的时候对网页会进行缩放，因此展示效果和设计效果会出现。

viewport height, width initial-scale

height一般不用都是等比缩放

### 像素比

iphone 6/7/8 375*674
像素比2，厂商750*1358
ipnone 6/7/8 434*736
厂商1080*1920，像素比为window.devicePixelRatio

原先1px内容放大到1*window.devicePixelRatio px

### 物理像素与CSS像素
- 物理像素device-pixel
- CSS像素
经常因为viewport和divecePixelRatio导致两者不统一。

用js动态设置viewport

px一般来说是固定单位。

但在实际工作中一般考虑比例单位

百分比

em: 相对于当前元素的文字大小
rem：root element font-sz
动态设置root em
vw屏幕的1%

媒体查询：根据媒体特性单独设置样式

### 移动端事件
touchStart
touchMove
touchEnd

阻止touchStart默认事件：
- 滚动条
- 页面缩放
- 超链接
- 鼠标事件
- 表单相关控件获得焦点
- 长按菜单

组织touchmove
- 滚动条
- 页面缩放

touchend
不常用

### 移动端应用形式
- 滑动
- 少量点击
- 按压（长按）

mousedown: 鼠标在元素上摁下
mousemove: 鼠标在元素上移动
mouseup: 鼠标在元素上抬起
touchstart: 手指在元素上摁下
touchmove: 在元素上摁下后在屏幕中移动
touchend: 摁下后在屏幕上抬起

### 封装手势库

touch start move end
tap 
pressstart pressend 

长按：用户按超过三百毫秒就执行。

方向判断

无缝轮播：沿着一个方向一直拖拽

## 移动端项目

天猫新品视图实战

实现吸顶效果的细节


