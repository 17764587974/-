再小程序支持ID选择器，嘞选择器，伪类选择器，也支持class和style方式设置组件样式

尺寸单位，像素px，里面cm，毫米mm，英寸in
小程序rpx：可以根据屏幕宽度进行自适应，规定屏幕框为750rpx。
再iphone6上 宽度375px，共750个屋里像素，则1rpx=0.5px=1物理像素

rem 规定屏幕宽度20rem ，1rem=（750/20）rpx

样式 使用@import语句可以导入外联样式表，后面用聚堆路径 用;结束

@import "commin.wxss" ;

