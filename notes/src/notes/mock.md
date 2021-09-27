# Mock

http://mockjs.com/examples.html

最开始接触Mock是在研究Ant Design Pro的页面结构时候，当时查了一下，得知是为了仿真数据测试用的。

真正接触是这一次项目中，我负责项目搭建，测试。为了让这个项目看起来完整，我想到搭建一个MockServer来处理这样的请求。

在这次培训之前我可能无法理解怎么在一个前端React项目中弄一个server，但是经历一遍底层之后，这些其实都是些非常正常的事情。

mock库本身没有server（接受发送HTTP）的能力。它只能按照模板生成一些数据。为了把这些数据包装成HTTP发送给前端进行测试，还需要一步一步的封装。

在开发流程中，为了分工，可以先在API统一定义好数据接口，然后负责接口的前端人员先使用Mock.js直接生成无逻辑数据。然后在其他前端人员使用该数据开发页面的同时，在数据和接口中间添加一层HTTP中间件。这样就能很平滑地开发MockServer，最后通过Config平滑地从MockServer切换到后端逻辑化后的数据来源即可。

当然后来我才知道vite本身也有自己的mock-server https://github.com/enjoycoding/vite-plugin-mock-server


