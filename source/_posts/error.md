### 函数

#### 在`.pyi`里面的源码

为什么源码的函数里面没有可见的代码，却可以运行其功能

下面的图片截取于 `time.strftime` 函数，可见的代码只有 return '' 以及注释，那么它是如何实现函数的功能，它的真正逻辑代码在哪里，这样做的好处是什么

![img](https://oscimg.oschina.net/oscnet/up-c9274ecbe5be0dfa198f7e80e409d7b6562.png)

- python 规定：# 表示单行注释
- python 又规定：可以采用连续的三个双引号(""" ...  """),进行多行注释。故，strftime(format[, tuple]) -> string... 是 生成一个字符串所遵循的 时间格式的注释。 
- 这里对函数 strftime 函数的注释 (# real signature unknown；restored from __doc__) 的翻译是：函数的实际签名未知， 获取注释内容方可恢复签名。所以，这里的函数定义，仅表明 函数 strftime 的用途。最后返回的是一个字符串。
- 我理解：**return ""** 表示：此函数的操作到此结束，它的作用只是规定了引用它的变量对象(比如 time)数据输出的字符串格式。
- 我有些疑惑：从楼主所示的图片看， 代码 return "" 的前边有一个"灯泡?" 影像, 这是什么意思?

这样做的好处 可以加快程序运行速度，并且进行类型检查 在 PEP 484以及PEP 3107里面都有详细的描述，特别是 PEP 3107

非常感谢你的回答，前边的"灯泡"是pycharm这个软件对这行代码的提示信息，不知道我理解你的话对不对，也就是说对于这个函数的代码python进行了封装，而这个图片的代码只是对这个函数的作用进行说明，而 return "" 只是说明这个函数返回的类型是字符串，真正的结果并不是 ""。 其实今天我也发现这个软件有所提示，说明这段代码出处于 time.pyi 里面，因此也了解到 .pyi 文件的作用

RPC parameter marshaling

[https://www.tutorialspoint.com/what-is-marshalling-in-rpc](https://www.oschina.net/action/GoToLink?url=https%3A%2F%2Fwww.tutorialspoint.com%2Fwhat-is-marshalling-in-rpc)