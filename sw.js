/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/12/17/yuque/Nginx 转发接口导致超时解决方案/index.html","45d7078ba5c017ea289990d1bf09e897"],["/2019/12/18/yuque/Async 注解 - 异步调用测试/index.html","d656550f98cffb29948b22f14507589d"],["/2019/12/18/yuque/学习计划/index.html","99e71d345fb67ae2aee265ab4c4dc9f1"],["/2019/12/18/yuque/读书笔记/index.html","d519cfc400b073ce3066bf6f37030d89"],["/2019/12/19/yuque/Spring 自定义线程池/index.html","6c921d05725a1404dc1a1dc34641d522"],["/2019/12/20/yuque/Spring 服务端推送（SSE）/index.html","c1107ba1f3b38efd52fef884638d776f"],["/2019/12/23/yuque/Mybatis 插入 DATE 只有年月日/index.html","13571b2958f1fa3b3d734cd10d5775fb"],["/2019/12/25/yuque/Notepad ++ 配置 nginx.conf 语法高亮/index.html","a6fa944b2595c048a1af95df9432ca77"],["/2019/12/26/yuque/Spring boot maven plugin 使用说明/index.html","58caf5945f0a4369d89f367035687aaf"],["/2019/12/26/yuque/打包失败：找不到符号/index.html","00c4b78e42d0d184c4e35928c0d95090"],["/2019/12/27/yuque/Idea 启动报错：命令行太长/index.html","6b02e6388f862e3356f969e8471507b8"],["/2019/12/29/yuque/Springboot 整合 Mybatis/index.html","3aef12ea0c84827ec7a35ff85cda1212"],["/2020/01/03/yuque/Spring 注入 bean 失败/index.html","d51d86ee7706185f65b261d1bff66dd5"],["/2020/01/05/yuque/PageHelper 分页结果类型转换/index.html","5f180fe414fbbe00cf3be0142f06eb8d"],["/2020/01/20/yuque/Git 配置多账户/index.html","aa7a5cf1df7c8864c3b09c7c68e23fc5"],["/2020/02/05/yuque/Spring Aop 插件式开发/index.html","2866da7aff24bec89ef16dc202bcf665"],["/2020/02/06/yuque/自定义类加载器/index.html","918b49182d7041bd6d4f287cd781d778"],["/2020/02/12/yuque/自定义 JDK 锁/index.html","3a7dac23323311fd608a35a2c4c38940"],["/2020/02/21/yuque/进程管理/index.html","d13bec7b403973778b80af9d63930d2b"],["/2020/03/24/yuque/插件式注解/index.html","0afd344f267e1fb81019511f0da744f2"],["/2020/04/07/yuque/Vue Ts 中使用 axios/index.html","a605f7492ce9f7a3a24c4409f793ac27"],["/2020/04/09/yuque/Spring 项目打包后运行报错/index.html","51c08b7a1d580635710edfe3daa9cefb"],["/2020/04/10/yuque/Maven 多环境打包/index.html","38c6e6e742955974aa05a81dad2d557c"],["/2020/04/14/yuque/🐘 统一返回对象/index.html","1352f371b4ad13571694fa7fceb12307"],["/2020/04/15/yuque/MongoDB 使用记录/index.html","c3e6758f87b0af80d6b6f3eb91ba19d7"],["/2020/04/23/yuque/📑 统一日志记录/index.html","49a5ba4f17b784d03cc70daf3c409657"],["/2020/04/23/yuque/🕷 统一异常处理/index.html","31645681e87efee087963af75ff02cfd"],["/2020/04/30/yuque/RestTemplate 使用/index.html","59c23024b9025d750cb33a447e52ff6a"],["/2020/05/11/yuque/Hexo 博客搭建/index.html","5c7c33091d7dc1aed158ad96ab65c155"],["/2020/06/01/yuque/git remote fail/index.html","e6215c0b74a90ce65325c2170d147a4d"],["/2020/06/08/yuque/Hexo 自动提取摘要/index.html","0905f869fdf4b18a07388ea605c58417"],["/2020/06/17/yuque/Oracle 误删数据恢复/index.html","274155b0a363f68fe1e5bdcc13b23d84"],["/2020/07/23/yuque/MapStruct 未生效/index.html","9f6abf9447abe0d65a7c29b107f77ffa"],["/2020/08/13/yuque/装饰器/index.html","2e9a129f2eae6d4c63b20d148d4092ee"],["/2020/08/14/yuque/页面加载优化/index.html","af4b5750dd514b5eb909ad8c97751bf8"],["/2020/08/26/yuque/消费者/index.html","c189316bc489f3f5135ac188be719516"],["/2020/10/22/yuque/HttpMediaTypeNotAcceptableException/index.html","92f77466519960ede9b54992466e1514"],["/2020/11/18/yuque/多字段联合校验/index.html","943c73ead6145a53123542fd51fcdaec"],["/2020/11/27/yuque/Mybatis XML 新增异常/index.html","c46bfa7a96556fd978bb97c13e92b0d0"],["/2020/12/03/yuque/聚合项目版本号管理/index.html","dad75dd0c6f35eab57b7b5c175ef5214"],["/2020/12/04/yuque/自动发行插件/index.html","d6ed0108df0ed4e726546ff3369844d4"],["/2020/12/07/yuque/结果集拦截器/index.html","d820abb7416b07a628ce2f6c35fc677a"],["/2020/12/20/yuque/AnAction/index.html","defc91ee8cfa8451b7fecd4bf19e5158"],["/2020/12/27/yuque/Cloud Toolkit/index.html","5dc1a8c189ca1ea04ae5d7aaf2e32c9a"],["/2021/01/02/yuque/OpenConnect Client 使用/index.html","439dfd6547cdd60c1524454cf6a701e4"],["/2021/02/06/yuque/发布到私有仓库/index.html","9b2ac3a51e5aef631ca9867a33683cda"],["/2021/02/07/yuque/LocalDate 解析年月字符串/index.html","c074eed17b36a89d71fd55e1a7e77c82"],["/2021/03/21/yuque/打包外部依赖/index.html","eee858dd5baa6616dd7995a9a4b37ea7"],["/2021/03/22/yuque/实现 Jar 多版本共存/index.html","7ca14d333f60f6896b3a6df1201d0e77"],["/2021/03/30/yuque/Feign 自定义配置/index.html","6f1ce4e6ea62845527b9fe5151c0b692"],["/2021/04/23/yuque/JetCache 使用/index.html","99c33d89190e3996dd18c7a4b1062ab4"],["/2021/06/11/yuque/字段类型不一致的问题分析/index.html","385ed2a74dc98dde5407a499ae9bef3a"],["/2021/10/31/yuque/同时处理 XML 和 JSON 接口/index.html","8b4c8910b171b50ce47a4dcd9c220514"],["/2021/11/06/yuque/Bootstrap 多环境配置/index.html","9e15f375c0d6b975d95986a8a0b694ba"],["/2021/11/10/yuque/WebFilter 路径匹配模式不生效/index.html","9f2fa02c9ab3c902d6813357d77181b4"],["/2021/11/16/yuque/Spring Cloud Config/index.html","f50796823833378dee2c9522ea5e6474"],["/2021/11/22/yuque/重复参数校验/index.html","c8bb203f4f2f3810efb884a1cde23827"],["/404.html","07405498c2ba2e20ec648ff9f016f99f"],["/archives/2019/12/index.html","7bc02a41a6df3a512efab9b4e7d65bdd"],["/archives/2019/12/page/2/index.html","9444fbe195afa6deeccab88e84ed0adc"],["/archives/2019/index.html","a88105fce6ff7a11e6216a668f4323f7"],["/archives/2019/page/2/index.html","a654d657e9d7533a6dad976ceaae0f33"],["/archives/2020/01/index.html","6c303c8bdc39fe48e30457e07f1eee7a"],["/archives/2020/02/index.html","cd6c5d9873cef4fff9ff17d1e8874776"],["/archives/2020/03/index.html","50e801d7110cc59a00bfe9f088045707"],["/archives/2020/04/index.html","90326aed662bbbef186261aa610156c2"],["/archives/2020/05/index.html","e81034f39379bb4e0abb6789ca57aed6"],["/archives/2020/06/index.html","b617a06932945a562b38576e3de88301"],["/archives/2020/07/index.html","3581d20ab6d13e09d5d44bf5bff3a901"],["/archives/2020/08/index.html","a5d7daa6ccad4c5a73cbeacd45d905a4"],["/archives/2020/10/index.html","9525b24e13e7a7da501a8192160514b1"],["/archives/2020/11/index.html","7d55840b4c740d2d12683d2330fc117b"],["/archives/2020/12/index.html","73a10e42fd6314a9cfdb24b682131bd6"],["/archives/2020/index.html","e355fe483e7a43c3af6a7174f5819803"],["/archives/2020/page/2/index.html","33125440c1e8f1bb27a1e5a8d7798787"],["/archives/2020/page/3/index.html","25e253e14a08adab7ab9725c56cf498c"],["/archives/2020/page/4/index.html","8822fce25a632a2896f238e2e46ca3e1"],["/archives/2021/01/index.html","77afa04396a23753fb7749180eff03dd"],["/archives/2021/02/index.html","15ca89d9f724322260ddc5322f762d08"],["/archives/2021/03/index.html","f10f2ce4eff29a14f75f0a35185b5162"],["/archives/2021/04/index.html","6e2fd23a4d2db647c4bd59692cedd450"],["/archives/2021/06/index.html","edfcd2247d6228d13642c91edcbc89f7"],["/archives/2021/10/index.html","0f5aad8fb8d931fc5a83b34d466889ea"],["/archives/2021/11/index.html","0d6c83493d4afa491bdca0143fb921c3"],["/archives/2021/index.html","595afa34afac9bb2d073bc915a2353af"],["/archives/2021/page/2/index.html","dc2cbe11065076e20e4933e6d7230f47"],["/archives/index.html","748407589be9cee4495157170541a198"],["/archives/page/2/index.html","748407589be9cee4495157170541a198"],["/archives/page/3/index.html","748407589be9cee4495157170541a198"],["/archives/page/4/index.html","748407589be9cee4495157170541a198"],["/archives/page/5/index.html","748407589be9cee4495157170541a198"],["/archives/page/6/index.html","748407589be9cee4495157170541a198"],["/categories/Intellij-Idea/index.html","dd98fe761f3ba5ba19352e4c2c295bd3"],["/categories/Intellij-Idea/plugin/index.html","e437b197b8489d8a44aecb60d3dc40b5"],["/categories/JDK8/Time/index.html","2b6f5831bb2980903618c50c19cb698e"],["/categories/JDK8/index.html","1f20113cbdf3f6c908186823c41944b7"],["/categories/Linux/VPN/index.html","ce838bb9eaa1db9f61ebd8f8b9d32174"],["/categories/Linux/index.html","2bd7b50293137ccbd59821dfbbcc17a5"],["/categories/Maven/index.html","32707bf68748351802e64260dbfe6c25"],["/categories/Maven/命令行/index.html","eae95aa7cbad09245942fdc4cba91837"],["/categories/Maven/打包/index.html","1e6e1fe0980e095959503071ddfc1c51"],["/categories/Maven/插件/index.html","a906789174ba4eb4ae137e5ae46a1e48"],["/categories/Mybatis/index.html","3b48c3aef04b429745ed79b25bfc7207"],["/categories/Mybatis/拦截器/index.html","e6d9106e5f833d40d6da7bfc841bacb9"],["/categories/Mybatis/结果集/index.html","4e4e1a7dc053122f32b19e385a46dd37"],["/categories/Spring-Boot/WebFilter/index.html","6f70c190f14c85c73cf501156fee2c5d"],["/categories/Spring-Boot/index.html","7e7250e1df65f4094b9226619a8055f4"],["/categories/Spring-Boot/参数处理/index.html","5ec76086debe02a847b770e59f3827c6"],["/categories/Spring-Boot/配置文件/index.html","4e42616f340a2e3c4cbf85826db6bc42"],["/categories/Spring/Feign/index.html","c8f38db719ae4a7fbaef65f6d03012e1"],["/categories/Spring/index.html","da2bc28b8cf2b04010c0142c732bca20"],["/categories/Spring/参数校验/index.html","16215efa05f32fc9255dfc54b7e47218"],["/categories/Typescript/index.html","12640a2aca5f53a324191c0de7e88f1d"],["/categories/Typescript/装饰器/index.html","5b093aac3ee97b1fbe43fd2159242133"],["/categories/index.html","ef912973d621845175e3dfa5444aac00"],["/categories/maven/index.html","8508d2f69cacc291f1f454be8e5039e1"],["/categories/maven/聚合项目/index.html","c2714ba7f59b0e16f45170689fc97157"],["/categories/mybatis/index.html","b6ff288bd0012202590c74fe01454d60"],["/categories/mybatis/xml/index.html","27569d80082e70f21c97c897a74cada6"],["/categories/前端/Hexo/index.html","d03d0f8e37d933f4bf6937e65cb92fdd"],["/categories/前端/index.html","ef26ca50b12e5895d00432b207a891f8"],["/categories/工具/Intellij-Plugin/index.html","5db58aa653e3843830cdb768dde21bf8"],["/categories/工具/Java/index.html","08b8ad845128ea5a20989548f33afb82"],["/categories/工具/index.html","24fe898c7202658440a3f4abdfb954a0"],["/categories/微服务/Spring-Cloud/index.html","745fd8d9e04cbe124c3e435037c5a64a"],["/categories/微服务/dubbo/index.html","a96d2167f633b551589bba4f7d456d92"],["/categories/微服务/index.html","c80c3ca329d7492af132c81fd2443f2a"],["/categories/数据库/Oracle/index.html","69a7445a23073f4886d027904d3a8e8c"],["/categories/数据库/index.html","9e84fcf277950c59bc6c0e23b53c6786"],["/categories/版本控制/index.html","c8ba5952f39c7c269be97e6e7a0770a6"],["/categories/版本控制/windows/index.html","d79103472e411938c185f70f00354a62"],["/categories/缓存/Redis/index.html","d6f35769180e3b45bf176bd14bfc6020"],["/categories/缓存/index.html","c129abec20dc342dac9a9f8971b88b39"],["/categories/边缘技术/index.html","75ca326b74aabd9cc38c64837f48a069"],["/categories/边缘技术/前端/index.html","f5f7d069097f900d59b7fd41077efb72"],["/css/first.css","847c31be45cd2c7cc1173834ba5f25d2"],["/css/style.css","0f1173bf9a74319b5d32457abe5fa992"],["/images/logos/128.png","dc6f740abff2ec660a63bf9c52c07713"],["/images/logos/144.png","d0c91faaea297cebff8e275b8e7804cf"],["/images/logos/192.png","54651b2b249fe6c1c73a6bef9f56faae"],["/images/logos/48.png","a39e72af0c79fe9a661ebbe2b9457908"],["/images/logos/512.png","633b87edad402d2c3578e1220d5f5b3a"],["/images/logos/96.png","26d31321cd5ca277afd002385a00e043"],["/images/logos/apple-touch-icon.png","08fc59a99b6637db9eb7d392de7c0eab"],["/images/swipper/1.jpg","15e94dc0045cbed50543e9a586cafaea"],["/index.html","8d203dc5d12a1a682fdbb761fa91a366"],["/js/aplayer.js","d4020b04d968aaf22ae2ea76803f7052"],["/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["/js/issues.js","313bd45ccc98c5c4982dbc3b07ab1a16"],["/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/js/search/algolia.js","94be3d4b1886bf8fff70161adf98c2e4"],["/js/search/azure.js","b17ba3ea67fbd51f1fd528db3dd0d723"],["/js/search/baidu.js","10aa3921e897dc10868694addbdf18e6"],["/js/search/google.js","28dfd18e2728ab710a2ad3626b8ece61"],["/js/search/hexo.js","f683a9720289b030cd991cf7fb345e63"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/page/2/index.html","fadd97103eadfd25130c8cd0f4ab488a"],["/page/3/index.html","ee12c5efdb7e4430ed5e4b4e0749ba0e"],["/page/4/index.html","deb007c94afa4a6b1df1a7f00f65eb2d"],["/page/5/index.html","3770ee7868239492115ea36af1d2f715"],["/page/6/index.html","69714a1e7ec90479e01f41c89f50825c"],["/sw-register.js","3315efee5467b1108189e783441a4d1c"],["/tags/Blog/index.html","08efdb03789ee79caeec8c81bcf55580"],["/tags/Bootstrap/index.html","39afea226808148ec21f8883b611b549"],["/tags/Centos/index.html","856d7adf59c28d17a0cfbe1252b11cec"],["/tags/Config/index.html","766bdc2fe7afb09eaf303126da6ea40c"],["/tags/Configuration/index.html","b3897b4c5c5d8a8b1ba300f59d16dbd3"],["/tags/Deploy/index.html","bd5345285abe217453a8579a637ad03e"],["/tags/Feign/index.html","6549a563f472bf7088c4f443ecc5c3f3"],["/tags/Github-Pages/index.html","6b6c8d36abeeec2d59da6da4c57a4bb0"],["/tags/HTTP/index.html","76391cb12ea88cf10a65bcbf91991793"],["/tags/Hexo/index.html","1325f0ebc2da28f3080a48595fd407c2"],["/tags/Idea/index.html","6af70cf344613134eeb13714cbd09fee"],["/tags/Install/index.html","218ebfe44ac45a8f138e1750c4693b36"],["/tags/Intellij-Idea/index.html","0eca46d07bba9b55bfe127855675438b"],["/tags/Intellij-Plugin/index.html","5837f6083cf088125f26faae8468c816"],["/tags/JDK8/index.html","b8103ac0c95f58941cfd8ebcdf2fbf7d"],["/tags/JSON/index.html","5a28bcb2cde06f07cd701503dabad95d"],["/tags/Jar-冲突/index.html","eac84be709b020c8c560ac8b7195ea1a"],["/tags/Java/index.html","4ad46a111f4e86db8c7db5e958a5f196"],["/tags/Javascript/index.html","271528e51f6cbbefa14afbe868be9fbf"],["/tags/JetCache/index.html","29a595314326e48af9168b47dcd23864"],["/tags/Lib/index.html","389d5b2473c2e07cb28d22a65e0f7c68"],["/tags/Linux/index.html","e23e8052bdacebd728a511821ab0a154"],["/tags/LocalDate/index.html","ae2cf0c52932966dc707288fb6fbf33a"],["/tags/Lombok/index.html","ef2b3bcf39cdbdb2faff7bd8bc46e81d"],["/tags/Maven/index.html","08b4aea68559bcb58eaaab3f282d1866"],["/tags/Mybatis/index.html","d97d3460f773e6583526bb85ed9d4d35"],["/tags/OpenConnect/index.html","2ce4575679af2d6d1b57cbeea8a62486"],["/tags/ResultMap/index.html","927017cedb571ff1dc42301c5e704e54"],["/tags/Spring-Boot/index.html","2fbd0458cfc51537f38e1f0a22026584"],["/tags/Spring-Cloud/index.html","f18ad598bea9e116487fed40edb135df"],["/tags/Spring/index.html","0ca8044352f64f219bbcc7fe7544d618"],["/tags/Tag/index.html","56c22a08a7de52b7b6a74303b2b45b91"],["/tags/Time/index.html","27fff6ea062bf07eb63f261ef926d3a6"],["/tags/Typescript/index.html","3d8fba807ee56972422a3f894c3bc28d"],["/tags/VPN/index.html","52070a19f7dd3bd256034ca1ffe4e52a"],["/tags/WebFilter/index.html","7c5679fc21691d4adefa30b169045d23"],["/tags/XML/index.html","dfec1f3008bbe63af219d72d94b9339c"],["/tags/blog/index.html","f703edb8e1e2b2362c3d8efbd09e8ffb"],["/tags/dubbo/index.html","6933b21174be422b17f728a00f3443eb"],["/tags/excerpt/index.html","7e8532507d9b0605bced94689168a265"],["/tags/git/index.html","5e4313a2c292009150051a523f27ce25"],["/tags/hexo/index.html","9be077eb1747a847b174131e6c4d7a9d"],["/tags/index.html","3f69a65c85469b19b9819e8bdf05433e"],["/tags/insert/index.html","2a03a9fd90d01b2771754ddab2286ee5"],["/tags/java/index.html","fffe58d886b83d6ff099a548f26ce692"],["/tags/maven/index.html","64f80ba543cbb113988d311963c4bbfa"],["/tags/mybatis/index.html","97172ed170d6ba850e075a6634ad6fc5"],["/tags/oracle/index.html","d4dfe50b2fdcd6906673d1d6c94e78b3"],["/tags/plugin/index.html","e8611d050f6501277ea86102877cab6e"],["/tags/springboot/index.html","f00d3ec2ec7634d67e1f78458b477e8e"],["/tags/sql/index.html","d5e9230c83f1a8c188ee8d44c7fd9963"],["/tags/swing/index.html","e23c405cbf5d684c84f6ae4c55c9b320"],["/tags/urlPatterns/index.html","2a5e7677e9282a2ed5019099836391ae"],["/tags/version/index.html","07cc6a3b16ea90e6e9bbbdb184d236d9"],["/tags/windows/index.html","7c6c76017eb8a96c4d8b87e004c38ed5"],["/tags/xml/index.html","f9bf0f4fd2117253587dbb8cb3d07a3c"],["/tags/主键/index.html","2c0c53fd3ba3a5aeb2dd02a3edc1de3c"],["/tags/使用/index.html","9927685bb55410c4679bde46b4ee210e"],["/tags/参数处理/index.html","910d49c9247f1d72dade1a02174222c8"],["/tags/参数校验/index.html","d05ad3d851fd3e3b19a5d25c1ca2c1a5"],["/tags/发版/index.html","982a4844fa85ccc7be24b697169897ca"],["/tags/命令行/index.html","e48bc656fee083bb2987a6689bd7e5af"],["/tags/外部依赖/index.html","154c5c93a6e70cad1142fb9136567533"],["/tags/多版本/index.html","2b6c8c16df114820afe63a53607113fe"],["/tags/多环境/index.html","18896557cc74c97b738f699dcbd861c7"],["/tags/多级缓存/index.html","8f5050f8d625231557419e5195976111"],["/tags/属性失效/index.html","fc128bb481b858c5d42a8c9567d94923"],["/tags/工具/index.html","7fb989f0639a9f75579b526d0d019d61"],["/tags/异常分析/index.html","d5bc47661daeedbf660d830d500424ef"],["/tags/微服务/index.html","7f46715301e0c147462bc5528c47b26a"],["/tags/拓展/index.html","b1f800f2e6f1733a66c30c964fc0347a"],["/tags/拦截器/index.html","76f52df8a023098836a718981ce09904"],["/tags/插件/index.html","92cd706bb9779b6072471e4618556003"],["/tags/日期格式化/index.html","1eec63883c3a6bc7a1960c29ec3b8f22"],["/tags/注解/index.html","ec93422fbab284bada7bc62f5ed70d8e"],["/tags/版本更新/index.html","560c4a55f5769300a40b960d8cde1b6a"],["/tags/结果集/index.html","c7f1994f461e97426c71c800ff496a15"],["/tags/聚合项目/index.html","f76f330d58b0649787b2098e8be447bc"],["/tags/自动部署/index.html","3501156a82247723767cf4b5483791f0"],["/tags/自定义/index.html","0363131fbdceca09b550e7488efd15d0"],["/tags/装饰器/index.html","6e29ef132deda4e181f1751a68f7a07e"],["/tags/语雀/index.html","8cec0601ec3c91d49dcd526c4316d930"],["/tags/语雀编辑器/index.html","586f5d7b28907ba5eaca348f06164475"],["/tags/踩坑日记/index.html","5c591fe4dba78e419a3b2e51d9a62bc4"],["/tags/运维/index.html","db0b75f3191579c58fdfe1782632e510"],["/tags/配置中心/index.html","6bd4bfd3391e0d6e90f16dd2672bddbb"],["/tags/配置文件/index.html","d38734242076988cd0580fe67154b82d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/./];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/**/*", toolbox.cacheFirst, {"origin":"imgchr.com"});
toolbox.router.get("/**/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
