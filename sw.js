/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/12/17/yuque/Nginx 转发接口导致超时解决方案/index.html","22ab95305f6ef56cf5fd17bc2d79d9b1"],["/2019/12/18/yuque/Async 注解 - 异步调用测试/index.html","f4c266e8ba07f8d79c9c5771f7f847fa"],["/2019/12/18/yuque/学习计划/index.html","b9f3923ba4df91babbfddf1afc967257"],["/2019/12/18/yuque/读书笔记/index.html","fedddc85c24092a50a829a2cff3f9834"],["/2019/12/19/yuque/Spring 自定义线程池/index.html","0567f7c0a55265124ad35582d0d9dc8a"],["/2019/12/20/yuque/Spring 服务端推送（SSE）/index.html","1997dff4d8d98f05e6812a6a1483d1b6"],["/2019/12/23/yuque/Mybatis 插入 DATE 只有年月日/index.html","6e9c8e481f1e4699010b1a8a56bbb54f"],["/2019/12/25/yuque/Notepad ++ 配置 nginx.conf 语法高亮/index.html","7d84ec64c7b104d5b186cc1ce9261d24"],["/2019/12/26/yuque/Spring boot maven plugin 使用说明/index.html","e195b5338882efcffa836281a8f33b41"],["/2019/12/26/yuque/打包失败：找不到符号/index.html","aa2d45cfb3e476ef9f17d91f411846e9"],["/2019/12/27/yuque/Idea 启动报错：命令行太长/index.html","6a04542ae6d6608a0d9ae43659e69f45"],["/2019/12/29/yuque/Springboot 整合 Mybatis/index.html","ab1a09e16849187b8a80736b0ab9572e"],["/2020/01/03/yuque/Spring 注入 bean 失败/index.html","3354aa950face0d45785fa7097f9b35e"],["/2020/01/05/yuque/PageHelper 分页结果类型转换/index.html","c5c836211b7a7434025a3cc7b74c41b8"],["/2020/01/20/yuque/Git 配置多账户/index.html","1210234effc794457311601e9f92c4a9"],["/2020/02/05/yuque/Spring Aop 插件式开发/index.html","b449b75a5f1901eb8a009868f3434404"],["/2020/02/06/yuque/自定义类加载器/index.html","e5294fe9c7734e07a9ff96bf0d5eea92"],["/2020/02/12/yuque/自定义 JDK 锁/index.html","b500d3387d05da5498bc475f0d14af0d"],["/2020/02/21/yuque/进程管理/index.html","7a6cc7d9827fba0ae2292ce75a3f453f"],["/2020/03/24/yuque/插件式注解/index.html","35cd353a8cecec82bfe2f19df45c1414"],["/2020/04/07/yuque/Vue Ts 中使用 axios/index.html","e5bb1fe65c121b96f5f4a1df7934f98d"],["/2020/04/09/yuque/Spring 项目打包后运行报错/index.html","edb5cb8ca0d064f791f0556cb4c4f0eb"],["/2020/04/10/yuque/Maven 多环境打包/index.html","844e93f3f072dae2037a576c99d610f6"],["/2020/04/14/yuque/🐘 统一返回对象/index.html","3625815925d9c4cebeddec78a9e7e844"],["/2020/04/15/yuque/MongoDB 使用记录/index.html","e0db07a104f965187f92c22ecff2e92b"],["/2020/04/23/yuque/📑 统一日志记录/index.html","eb176191cb59d00e1414c0a3b8b92212"],["/2020/04/23/yuque/🕷 统一异常处理/index.html","55acd7f52f200ab8704cfcb7ca5853cd"],["/2020/04/30/yuque/RestTemplate 使用/index.html","96e4d043e799f7214328fad50a0e83f3"],["/2020/05/11/yuque/Hexo 博客搭建/index.html","02459118834e9b181baf4f5dfe11c478"],["/2020/06/01/yuque/git remote fail/index.html","178456a6645662a85ecf6400be1c83aa"],["/2020/06/08/yuque/Hexo 自动提取摘要/index.html","323f5839db91ba3ecdf0af122ddfa8d0"],["/2020/06/17/yuque/Oracle 误删数据恢复/index.html","5aba7e68fa159e2f9d12d4051d6ba1db"],["/2020/07/23/yuque/MapStruct 未生效/index.html","a8427ee4e14a6eb34dbfb520d72ec1b6"],["/2020/08/13/yuque/装饰器/index.html","be52763e6b9b4880f8738930c3770212"],["/2020/08/14/yuque/页面加载优化/index.html","5879d5d90e047e86fd805f6d4dcfaa6d"],["/2020/08/26/yuque/消费者/index.html","e212dcaf330face8089eeaebcb4481d4"],["/2020/10/22/yuque/HttpMediaTypeNotAcceptableException/index.html","8ba670f18003eda7a7222a408af44eab"],["/2020/11/18/yuque/多字段联合校验/index.html","cb1fb97344c941d5ddd1e6544277b404"],["/2020/11/27/yuque/Mybatis XML 新增异常/index.html","8c40c4aa55edcd09a668c2bb5f2e1c6e"],["/2020/12/03/yuque/聚合项目版本号管理/index.html","e73b85c90e916bd4e4f68b3674b8b60f"],["/2020/12/04/yuque/自动发行插件/index.html","0bac8ca69553793af61dd11cfd3a54f0"],["/2020/12/07/yuque/结果集拦截器/index.html","eceddf7c4ff913d57e8cdff7ba01c56d"],["/2020/12/20/yuque/AnAction/index.html","dd538a3d28750c874ae0b95b1f89f4a3"],["/2020/12/27/yuque/Cloud Toolkit/index.html","9ad21c2248b4cb375a25a3bb5dafb325"],["/2021/01/02/yuque/OpenConnect Client 使用/index.html","db4baf218b3cf6640e26b5382737a70d"],["/2021/02/06/yuque/发布到私有仓库/index.html","986d71a70eab1c6d959da9a3ba23ad0e"],["/2021/02/07/yuque/LocalDate 解析年月字符串/index.html","7567bcff605dd02f3c5a0f78d1b397be"],["/2021/03/21/yuque/打包外部依赖/index.html","92d3e631029614e39ebbe2b9f36bdb28"],["/2021/03/22/yuque/实现 Jar 多版本共存/index.html","836488d26013eaa84e09a5a5590d81bf"],["/2021/03/30/yuque/Feign 自定义配置/index.html","69c63ecbfcd0e1c99078a9dec732881b"],["/2021/04/23/yuque/JetCache 使用/index.html","af9bf19ce9a15f73a63e022490aa9495"],["/2021/06/11/yuque/字段类型不一致的问题分析/index.html","c995497b1417777c4805818dc2367f82"],["/2021/10/31/yuque/同时处理 XML 和 JSON 接口/index.html","ae38c06d0a25ed1acef56f1e350b5efb"],["/2021/11/06/yuque/Bootstrap 多环境配置/index.html","7dafc226b3b85ba8d4add2aa1460c805"],["/404.html","01c34a183ef05b4002038a0d1c25199c"],["/archives/2019/12/index.html","1408845592b8b0e058a81590906895a0"],["/archives/2019/12/page/2/index.html","e0cc33be25859814119efad6ebf589da"],["/archives/2019/index.html","a3105e572a19ec966e2d20458eba6f90"],["/archives/2019/page/2/index.html","c2be44229fcf0d117fbe5c9a004ecf53"],["/archives/2020/01/index.html","4a492040bb4e62d77b8b524303afab5f"],["/archives/2020/02/index.html","e3617bb84d816c31e92409fe3c74ea0c"],["/archives/2020/03/index.html","10c8ed73390286dad131b090587969f3"],["/archives/2020/04/index.html","6cbbda9a7bfb622ff364dae41416902d"],["/archives/2020/05/index.html","ec27b9b80e26c49b85650a1c87ded2fe"],["/archives/2020/06/index.html","25493f93ea847d2e24d27b279c905fbc"],["/archives/2020/07/index.html","94802f5cfd94ce9cabacf75d4abe76e0"],["/archives/2020/08/index.html","b12a51d1b2bbd2a61940e75e71162460"],["/archives/2020/10/index.html","6cca2ad5c114b78e34fd62ed762b98d3"],["/archives/2020/11/index.html","67ea08eadd9fb43d87e64d228210ae90"],["/archives/2020/12/index.html","ed18d6eb563fcc4868552613a77e6dc4"],["/archives/2020/index.html","2c53e45eff3340a2ba50462130c70f23"],["/archives/2020/page/2/index.html","33f43dde18aafb194395f04794a05d38"],["/archives/2020/page/3/index.html","2144a1ada3814cbfac5476ae344d68a1"],["/archives/2020/page/4/index.html","53997a41547764f8e6bdedb79560c54a"],["/archives/2021/01/index.html","bd452a48ee7efc65bfb2e6803276955f"],["/archives/2021/02/index.html","c120cb81afaf9857f7e54f108b890fe8"],["/archives/2021/03/index.html","04f792f1f86099ca3c4ecdb5da9fcf06"],["/archives/2021/04/index.html","9e14c8c8e6b1018e12e7fd7ea57a7322"],["/archives/2021/06/index.html","591b644dd6236a0b086a83e9515ab6cc"],["/archives/2021/10/index.html","40de822fe980ba9c7ac2c57a3c02be99"],["/archives/2021/11/index.html","ac279528755329bc37f47a10133d87d6"],["/archives/2021/index.html","81ec58347678ba792fdcc354cf2395c4"],["/archives/index.html","2df053d8957d3baddb970d0fe72bda7e"],["/archives/page/2/index.html","2df053d8957d3baddb970d0fe72bda7e"],["/archives/page/3/index.html","2df053d8957d3baddb970d0fe72bda7e"],["/archives/page/4/index.html","2df053d8957d3baddb970d0fe72bda7e"],["/archives/page/5/index.html","2df053d8957d3baddb970d0fe72bda7e"],["/archives/page/6/index.html","2df053d8957d3baddb970d0fe72bda7e"],["/categories/Intellij-Idea/index.html","50d6bab5e90497543c64e32cb0285542"],["/categories/Intellij-Idea/plugin/index.html","0f27fe9d2535e85d19eb75f267220c52"],["/categories/JDK8/Time/index.html","c9f43bcf32719216bbbb4c9ca7cee8fd"],["/categories/JDK8/index.html","fed7a98b96b9d1418de2aaa7609898ce"],["/categories/Linux/VPN/index.html","6cf82057be636b33a1d9096eb8f1ee0b"],["/categories/Linux/index.html","a59f225207205c0322c210250f1f3352"],["/categories/Maven/index.html","454a02b9515b775719aa01805f16d4d9"],["/categories/Maven/命令行/index.html","3ac871311249a9704c4258edab56f692"],["/categories/Maven/打包/index.html","2db15735fbfafdfa6153df64207e6bd3"],["/categories/Maven/插件/index.html","4b7e4bab1def1c530872b89ef45baa16"],["/categories/Mybatis/index.html","b04b3dd2530442a3ff630bcff89a947c"],["/categories/Mybatis/拦截器/index.html","0d95f35328f2cbaf9746bd6b372acc96"],["/categories/Mybatis/结果集/index.html","3a1931e5d2fc7aa9b913b5c286986741"],["/categories/Spring-Boot/index.html","bb0be4af395153a923e93e16e4ff5652"],["/categories/Spring-Boot/参数处理/index.html","1e697614c8470bad9350dc8b3544fbe1"],["/categories/Spring-Boot/配置文件/index.html","731f72c6ef6ff957916c0d4a1c083114"],["/categories/Spring/Feign/index.html","e6f0e52a3827d6888969fd71be804802"],["/categories/Spring/index.html","32003b259a65399d9dccb6d6e8168a79"],["/categories/Typescript/index.html","f034532529146c6aa057cd2f547801e1"],["/categories/Typescript/装饰器/index.html","421efafd7fe4788523d9a44c9f471fd1"],["/categories/index.html","a7e66b5206526d994dc1d024feeee9f9"],["/categories/maven/index.html","dc4c2357ee4f6c597daf6a5d79242511"],["/categories/maven/聚合项目/index.html","b8eeeabe743558e277ffaf01bab30c62"],["/categories/mybatis/index.html","238dfa8dd652b835eb072e0fe49d4765"],["/categories/mybatis/xml/index.html","1ea594bb0bfe259116d7d2f11738846c"],["/categories/前端/Hexo/index.html","ec392ccd4b5ebcd13fd90737611e8807"],["/categories/前端/index.html","e6f6983da22374563f4b020aca415b5e"],["/categories/工具/Intellij-Plugin/index.html","1ab86effa67ea03004208e97258aeb98"],["/categories/工具/Java/index.html","e2f28e332c6028a5a37b8888bf778f44"],["/categories/工具/index.html","5a913cb9c4d9345e7ca75563bd18df53"],["/categories/微服务/dubbo/index.html","268d01c9659ded26104a6e9f9b3cc0cd"],["/categories/微服务/index.html","71f8fa2d6639bc4aa42597a87e9a4f0c"],["/categories/数据库/Oracle/index.html","2c3ab0e75ffd4e599d47881997377f9b"],["/categories/数据库/index.html","975b5273e8851a2438083e2a51ef8ee6"],["/categories/版本控制/index.html","c03c577721d0f3caf5cc012ada357a38"],["/categories/版本控制/windows/index.html","d3dacd75aa96e2f0eafb225852b4d375"],["/categories/缓存/Redis/index.html","1285ab53c619b0012eeaac784395e2dc"],["/categories/缓存/index.html","b8cff92cf45003d5735fbe5d3c6dcc88"],["/categories/边缘技术/index.html","ee7b5357719c7ae2cb31f7ae68a4d977"],["/categories/边缘技术/前端/index.html","4a724c8ba8b9eafefe5d651ded1b1820"],["/css/first.css","847c31be45cd2c7cc1173834ba5f25d2"],["/css/style.css","0f1173bf9a74319b5d32457abe5fa992"],["/images/logos/128.png","dc6f740abff2ec660a63bf9c52c07713"],["/images/logos/144.png","d0c91faaea297cebff8e275b8e7804cf"],["/images/logos/192.png","54651b2b249fe6c1c73a6bef9f56faae"],["/images/logos/48.png","a39e72af0c79fe9a661ebbe2b9457908"],["/images/logos/512.png","633b87edad402d2c3578e1220d5f5b3a"],["/images/logos/96.png","26d31321cd5ca277afd002385a00e043"],["/images/logos/apple-touch-icon.png","08fc59a99b6637db9eb7d392de7c0eab"],["/images/swipper/1.jpg","15e94dc0045cbed50543e9a586cafaea"],["/index.html","ef01bcdda9e3d13c2259301a306b328e"],["/js/aplayer.js","d4020b04d968aaf22ae2ea76803f7052"],["/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["/js/issues.js","313bd45ccc98c5c4982dbc3b07ab1a16"],["/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/js/search/algolia.js","94be3d4b1886bf8fff70161adf98c2e4"],["/js/search/azure.js","b17ba3ea67fbd51f1fd528db3dd0d723"],["/js/search/baidu.js","10aa3921e897dc10868694addbdf18e6"],["/js/search/google.js","28dfd18e2728ab710a2ad3626b8ece61"],["/js/search/hexo.js","f683a9720289b030cd991cf7fb345e63"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/page/2/index.html","f6be52b54e2bce3ba740ce054207c0bf"],["/page/3/index.html","a33ba497f5a57f04a9608969e3fca2b2"],["/page/4/index.html","c0a40ad9948b7be08086e81594359166"],["/page/5/index.html","28c2f9b3889ac3a921f4d243d2973e39"],["/page/6/index.html","21c8a88a9d905e1350e433d77c40d1f0"],["/sw-register.js","6e01f9e18534f17a2fa60ab9b2f71701"],["/tags/Blog/index.html","35495c9cf6a3d0529bfbdde7c5ce8ce3"],["/tags/Bootstrap/index.html","ee256ba3a42416ce97150f97de40da11"],["/tags/Centos/index.html","fb87f26b881ae4d388bf2bf5ceecde61"],["/tags/Configuration/index.html","2c00e431cf2e3b545786b8b8babaecdf"],["/tags/Deploy/index.html","99ed0f44186e77d9c13abed92df1d447"],["/tags/Feign/index.html","e4a0000def917711cb0be55be812213a"],["/tags/Github-Pages/index.html","aae0a5ad927329207aa27a209b42af69"],["/tags/HTTP/index.html","34c5fe14b8b6863aa1e137ba3ecc4409"],["/tags/Hexo/index.html","16d60b501bf7964f828eb0d732615abd"],["/tags/Idea/index.html","f86eeb25b5be83c522614fe7fb39ece9"],["/tags/Install/index.html","e8775237d62eca3b6ca06d92ef651d11"],["/tags/Intellij-Idea/index.html","5d5b8dcd1ed70ec87174b2ec868fd7c8"],["/tags/Intellij-Plugin/index.html","8a11059b2a3404158d59cc9598643468"],["/tags/JDK8/index.html","222c1ccaba8e32931234d9e01d5796e4"],["/tags/JSON/index.html","2a3f8517aa408f8ae4a71c070453bf64"],["/tags/Jar-冲突/index.html","4942ebc9c7ab596e7f896146a1b1b55c"],["/tags/Java/index.html","dbd82db8729a044593f845fd38985cc3"],["/tags/Javascript/index.html","85e8c8a9b55b9ffe68156bbcba8d68f9"],["/tags/JetCache/index.html","4e3d9287a4e58fb1bc80480901e0ad92"],["/tags/Lib/index.html","dc79f5bea031261e82a1cba0f01b0a14"],["/tags/Linux/index.html","791856d4d1b09d7232518069326dcc89"],["/tags/LocalDate/index.html","caa5f9349979a48700c4a92bff21796c"],["/tags/Lombok/index.html","0cb1d40ee2344ea8338c45c363a6e54d"],["/tags/Maven/index.html","3950886703298ae94e5c7484ac0c441f"],["/tags/Mybatis/index.html","50ff6a9e77e378a526ab702ebb405abe"],["/tags/OpenConnect/index.html","d4cce3686d9e996fbc07a6b271c0eeb0"],["/tags/ResultMap/index.html","f3bf440c5bc7de0712d46e482c8c0633"],["/tags/Spring-Boot/index.html","4b87828e2c6d682eacad9e607f77af7a"],["/tags/Tag/index.html","634bf7fb24fa2ca3796c532d00be15b2"],["/tags/Time/index.html","634551ef2667f31b9b435e03965e5c85"],["/tags/Typescript/index.html","1218674b75865a4a7959f7b0c29bdcb6"],["/tags/VPN/index.html","87ed671a1fe96406ee7bcadda912552a"],["/tags/XML/index.html","6b20fa3c7c6a87702dc05ef28666a4f5"],["/tags/blog/index.html","f684f59eac676a8df858189febcae7a4"],["/tags/dubbo/index.html","d18d90ed76959484b300dc5888ed4636"],["/tags/excerpt/index.html","46db9832dd3fa183583f8453f9c51436"],["/tags/git/index.html","0a4f59d8908c89dd153bcee7e6709393"],["/tags/hexo/index.html","af9d6c0a43f98154ba64b53636f7adc6"],["/tags/index.html","237f371cf641025377e490ef073a9f86"],["/tags/insert/index.html","56c15ecbb0d4ed8b2c26b041987ee77e"],["/tags/java/index.html","e79f877107fcd8431ff6dbe031d0bb54"],["/tags/maven/index.html","e7a4333029c4155f0171cb1814a722c3"],["/tags/mybatis/index.html","a1eae55e052efc53c2599f6d7bf62793"],["/tags/oracle/index.html","c420646a6752cb55fba5a63d95e84bc9"],["/tags/plugin/index.html","d9e4e10a3689a842aa97f6062e7bf473"],["/tags/springboot/index.html","8394d419db2137932f51083f6f817419"],["/tags/sql/index.html","6813e1f5623359b0c1433a1d8b01a91f"],["/tags/swing/index.html","e72290f6a8e1f8989be576fbe5eec746"],["/tags/version/index.html","f8b07bd31f90d9dc11df2a555fc623e0"],["/tags/windows/index.html","c3634d36b95290c87065427ab4221782"],["/tags/xml/index.html","ca23882b836d0d77eef8f42e56d1fa6b"],["/tags/主键/index.html","280ca96b5e7a8260cf223980990bd09f"],["/tags/使用/index.html","f576a97081ad461c38c7326cfd57c13c"],["/tags/参数处理/index.html","b11eedd37fd2ab927dab4543781f3ef5"],["/tags/发版/index.html","11681178b4b1aaa103a337996d67f3ec"],["/tags/命令行/index.html","b2cc867ddb6dc202ecb0bafb70a335db"],["/tags/外部依赖/index.html","e127ae46a4124c2a9bba84dc2a7c2321"],["/tags/多版本/index.html","98a691e71adc3e7f5520d8070a4a2fb5"],["/tags/多环境/index.html","5ea12bf6c5d9e9a9d16198b2c8ddda76"],["/tags/多级缓存/index.html","e18fefed1fbf447ddd95c651c8a4087e"],["/tags/工具/index.html","102c46a8624e34dab75be2220c22a41a"],["/tags/异常分析/index.html","87aa3b0a1604395ec87659a44db77813"],["/tags/拓展/index.html","5028e6070607a21685fc36c7ba3ffd9d"],["/tags/拦截器/index.html","4d845ebc7a5b451617d48f94617e753a"],["/tags/插件/index.html","6de3f4b26be23bebc644676212774c11"],["/tags/日期格式化/index.html","cf36bc06b8451c3e97849262758cb51d"],["/tags/注解/index.html","decb7db3ebda6574a9756a13bb8f3b9a"],["/tags/版本更新/index.html","959ce8fc8f5517477e2384d9c4382378"],["/tags/结果集/index.html","e3c31e75ac083d5286b3ca7d4f8be2ed"],["/tags/聚合项目/index.html","6ff32e38446eda35ea2cf0389d33dec7"],["/tags/自动部署/index.html","95746d025bf0b72c2ee6fde4f31d9439"],["/tags/装饰器/index.html","c98a9a80de79966b58534e5d73eeee2b"],["/tags/语雀/index.html","f4c19caac31628bba0ac4c2eb63b26e1"],["/tags/语雀编辑器/index.html","a52c6e30dcd1a26b0948aba65cb70627"],["/tags/踩坑日记/index.html","95ee9a3447bcb4e6f7c4cd5567fb1d96"],["/tags/运维/index.html","1cdd45455ca9f36f4bdf77f955594133"],["/tags/配置文件/index.html","bf1ef44ae42a58339e87da86987a9ab0"]];
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
