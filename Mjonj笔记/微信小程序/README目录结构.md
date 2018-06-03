#https://developers.weixin.qq.com/miniprogram/dev/framework/config.html
小程序的架构分析:
  一套软件的应用架构包括数据层、业务逻辑层、服务层、控制层、展示层、用户等多个层次
小程序只是一套系统的展示层（前端），主要用于展示信息


目录结构：
│  app.js  逻辑文件，主要勇于注册小程序
│  app.json  配置文件，对小程序进行全局配置，配置每个页面的路径，窗口表现、设置网络超时，tab等
│  app.wxss  主样式表
│  project.config.json
│
├─pages  //一个页面有4个文件构成，这4个文件名必须相同
│  ├─index
│  │      index.js  页面逻辑文件，每个文件必须有，里面蟹JavaScript代码
│  │      index.wxml  页面结构文件，用来设计页面布局，进行数据绑定
│  │      index.wxss  页面样式文件，可以与app.wxss定义样式重叠，最终以层叠样式决定最终的
│  │
│  └─logs
│          logs.js
│          logs.json
│          logs.wxml
│          logs.wxss
│
└─utils  公用js库，某个页面需要用到该函数可以直接将其引入，里面默认带了时间转换格式


