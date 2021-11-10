/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/12/17/yuque/Nginx 转发接口导致超时解决方案/index.html","56dcc15cc62de2b2789b97457d382d59"],["/2019/12/18/yuque/Async 注解 - 异步调用测试/index.html","bbe04d5cd14bdd2a6514d43f3422b4c5"],["/2019/12/18/yuque/学习计划/index.html","3e8c15f600b3084f3e0e801ae4f262c3"],["/2019/12/18/yuque/读书笔记/index.html","dc0db603bfe0919daf6040fc4fa2a775"],["/2019/12/19/yuque/Spring 自定义线程池/index.html","a7de9bb6fdfdb348a5da85f724b0f163"],["/2019/12/20/yuque/Spring 服务端推送（SSE）/index.html","2b9373285b3fd2a392b507f1a634d931"],["/2019/12/23/yuque/Mybatis 插入 DATE 只有年月日/index.html","88ac6d502ca40e39272790a0736074cf"],["/2019/12/25/yuque/Notepad ++ 配置 nginx.conf 语法高亮/index.html","32a094f5f388ed517c80b73ce34d1b90"],["/2019/12/26/yuque/Spring boot maven plugin 使用说明/index.html","175045cc05054887721853f1b8271cac"],["/2019/12/26/yuque/打包失败：找不到符号/index.html","f9266d9fe030e3baf3d28877d9079fca"],["/2019/12/27/yuque/Idea 启动报错：命令行太长/index.html","4b831a3fae80d6db843958757068e6a0"],["/2019/12/29/yuque/Springboot 整合 Mybatis/index.html","3136f94a121bab019e6dfbd25d74eddb"],["/2020/01/03/yuque/Spring 注入 bean 失败/index.html","62658c384ea8a3421ed42e490621b64a"],["/2020/01/05/yuque/PageHelper 分页结果类型转换/index.html","fb89676aba6ba7f14ac34bda085c8139"],["/2020/01/20/yuque/Git 配置多账户/index.html","abb177b91e165ecfc0a83f6c4c239535"],["/2020/02/05/yuque/Spring Aop 插件式开发/index.html","8784c10bc7e004d16a299c3b0f956917"],["/2020/02/06/yuque/自定义类加载器/index.html","08b615c0137d864981ea591db7496594"],["/2020/02/12/yuque/自定义 JDK 锁/index.html","50596b2e3645bdf8c620291e1022b772"],["/2020/02/21/yuque/进程管理/index.html","51585c02fbb3832bb40f908f5067c7c8"],["/2020/03/24/yuque/插件式注解/index.html","be212340f7314b92c9083d14ec9ed878"],["/2020/04/07/yuque/Vue Ts 中使用 axios/index.html","71f0c616a09dd5147c8d70dadb0c28e9"],["/2020/04/09/yuque/Spring 项目打包后运行报错/index.html","afb089c08cd781752e1f57709451e97d"],["/2020/04/10/yuque/Maven 多环境打包/index.html","531da83d304de1c1a71c65e1a68db364"],["/2020/04/14/yuque/🐘 统一返回对象/index.html","371ddadcb6cf83555c9f56d02061319e"],["/2020/04/15/yuque/MongoDB 使用记录/index.html","d044127320f1312bca42c5ec459590ee"],["/2020/04/23/yuque/📑 统一日志记录/index.html","db762a8fbd068ae9767212c8bf861bc5"],["/2020/04/23/yuque/🕷 统一异常处理/index.html","19eecbcb69f1d8f595c9c873f17adf2f"],["/2020/04/30/yuque/RestTemplate 使用/index.html","3ef5d22ad2a28dacbf9eb06557d56a72"],["/2020/05/11/yuque/Hexo 博客搭建/index.html","3daed3e7e67623dd3d3b1e705c72a9fe"],["/2020/06/01/yuque/git remote fail/index.html","52450672a66ae75b932d6b58b0b9a2ae"],["/2020/06/08/yuque/Hexo 自动提取摘要/index.html","15f2d041baef3601a9eff60486329422"],["/2020/06/17/yuque/Oracle 误删数据恢复/index.html","b200e80e1ffcad127f418578960550e4"],["/2020/07/23/yuque/MapStruct 未生效/index.html","fd0296011fc8b52a219bcfad93e75dc9"],["/2020/08/13/yuque/装饰器/index.html","dc374f1c9c8252be4dc309ad6f913a8a"],["/2020/08/14/yuque/页面加载优化/index.html","c4c054f739522b8c4306a832e61d5d59"],["/2020/08/26/yuque/消费者/index.html","ce9d857210b2fdf541ad64b0da90ee6a"],["/2020/10/22/yuque/HttpMediaTypeNotAcceptableException/index.html","5013c4e2577ec848dae0d58c17a7aa4a"],["/2020/11/18/yuque/多字段联合校验/index.html","76b0c4322f15f0037fe8f6d2de876475"],["/2020/11/27/yuque/Mybatis XML 新增异常/index.html","3fc8a095ecd4c4972571f3313224e780"],["/2020/12/03/yuque/聚合项目版本号管理/index.html","e523572476b4515f279ff91736d5a4c8"],["/2020/12/04/yuque/自动发行插件/index.html","c7aa12261cc0299db5530e5cb59b1e3d"],["/2020/12/07/yuque/结果集拦截器/index.html","51165c327d1040ae6f8b5251fb78081e"],["/2020/12/20/yuque/AnAction/index.html","705fbe9023d7c5d03e4efde16a04019b"],["/2020/12/27/yuque/Cloud Toolkit/index.html","2e5fd8bdb7f157c44d96e66f2b65b8a2"],["/2021/01/02/yuque/OpenConnect Client 使用/index.html","c443cad84a671f33777d14e0a34b568b"],["/2021/02/06/yuque/发布到私有仓库/index.html","d4e5ef99668ca32cf001e340e2780f9b"],["/2021/02/07/yuque/LocalDate 解析年月字符串/index.html","2076de9dd749056b78d005269099ef68"],["/2021/03/21/yuque/打包外部依赖/index.html","40d2d8bf384f5510bb54c01fc6894207"],["/2021/03/22/yuque/实现 Jar 多版本共存/index.html","7b726b4406a1cd0d23196f00e48ae2fa"],["/2021/03/30/yuque/Feign 自定义配置/index.html","064198e1db17e2aa57d1910dc0ca1e4c"],["/2021/04/23/yuque/JetCache 使用/index.html","a608926435a691b8564b55ceeff6da4b"],["/2021/06/11/yuque/字段类型不一致的问题分析/index.html","bf720c987864f0123910eb46112e1552"],["/2021/10/31/yuque/同时处理 XML 和 JSON 接口/index.html","c512372ab0ff5b11ed0391f7b06302d8"],["/2021/11/06/yuque/Bootstrap 多环境配置/index.html","202b9a2e6f16c69c3292b9a54f74250a"],["/2021/11/10/yuque/WebFilter 路径匹配模式不生效/index.html","bde8133c3570964e772ba99e60a5b2ca"],["/404.html","d41e65fd661e01f893f0f22772fd1d6a"],["/archives/2019/12/index.html","f684c2f9fe638adf4990ca47e07516c1"],["/archives/2019/12/page/2/index.html","8cb0f48fe67e4495d4ce6819ce1d2f2a"],["/archives/2019/index.html","454d2f583dbe1370bca69f56fde2573d"],["/archives/2019/page/2/index.html","ab89f9bc1fc9381f7c4044794c7e3932"],["/archives/2020/01/index.html","7e94b5b07245c08ab90c39a942b88442"],["/archives/2020/02/index.html","57ae31b563ff38c11b1086f3aa3682e3"],["/archives/2020/03/index.html","31115e15bfa5d95e1be2b551a8e1c939"],["/archives/2020/04/index.html","767ee895e9e6ccddd7c90e40d67be09c"],["/archives/2020/05/index.html","b88fd00f0d897495c733d94cf56ed951"],["/archives/2020/06/index.html","a8d9455aac32621750fa3cb5c8e5e89e"],["/archives/2020/07/index.html","300ecf902da372592b7dd3a4b61cbbb0"],["/archives/2020/08/index.html","8df1b2bfb100f2c6cb0b0d6e7bb5ac73"],["/archives/2020/10/index.html","df705192aee721bdfe330771232ffae9"],["/archives/2020/11/index.html","cd17b667feb961d1f67d55a56ddde540"],["/archives/2020/12/index.html","1a468ea5ae5e146544d596cb104bc859"],["/archives/2020/index.html","9ff84b9836dff53c95e1e3513ba2aa0a"],["/archives/2020/page/2/index.html","206eebf2a0e2927ec4b2c338c773e55e"],["/archives/2020/page/3/index.html","11e98a3f55b273978f3aab0980d96706"],["/archives/2020/page/4/index.html","13628cb12f0d8828d35cdda7a4a7cb07"],["/archives/2021/01/index.html","e843d3b988d2ef2295ebbe0b24c821c2"],["/archives/2021/02/index.html","e2306339d9a2937125fff425e8800650"],["/archives/2021/03/index.html","267c538363ed8423ce5f28a2f823a636"],["/archives/2021/04/index.html","be9807a4adcecf962f8f6594b6cac7a3"],["/archives/2021/06/index.html","b645b43f5e9044d27bee52d307814274"],["/archives/2021/10/index.html","eb4e831164c6adc1a731e846520e4e2b"],["/archives/2021/11/index.html","6049a3ad77bff1b28d613499c986d484"],["/archives/2021/index.html","684c71c807bd0cdfa1c827e959f24e0d"],["/archives/2021/page/2/index.html","b6178e30acbb2ba1813f1d18af490697"],["/archives/index.html","bd97024a6bf5042cbd30a50f21c17edc"],["/archives/page/2/index.html","bd97024a6bf5042cbd30a50f21c17edc"],["/archives/page/3/index.html","bd97024a6bf5042cbd30a50f21c17edc"],["/archives/page/4/index.html","bd97024a6bf5042cbd30a50f21c17edc"],["/archives/page/5/index.html","bd97024a6bf5042cbd30a50f21c17edc"],["/archives/page/6/index.html","bd97024a6bf5042cbd30a50f21c17edc"],["/categories/Intellij-Idea/index.html","d0f5b023b2ac97efb9cc26303f2c49fe"],["/categories/Intellij-Idea/plugin/index.html","5f5d4f65a1d305fe4d9bab7c8e016efb"],["/categories/JDK8/Time/index.html","ec9b801ff1a04cc5db36a7910d323e60"],["/categories/JDK8/index.html","377093a438f15d012fb0d849102f8d2d"],["/categories/Linux/VPN/index.html","e73236d93188339ff7c74737e46053c1"],["/categories/Linux/index.html","6e782041eb4e4f3d28ddc8faac32b115"],["/categories/Maven/index.html","b53a4eb21055e3426f8e5f6bb50773ba"],["/categories/Maven/命令行/index.html","4a217dcf539399c3c7a15395a671395f"],["/categories/Maven/打包/index.html","54bb827976eebe4d5e3c454795ae8237"],["/categories/Maven/插件/index.html","568b04e9eaf64df8133b1f779506a71d"],["/categories/Mybatis/index.html","376d656d86c6ea0e72bfbce9fd5cbff9"],["/categories/Mybatis/拦截器/index.html","e754cadad1facd1ce0dbc5ca92a3c757"],["/categories/Mybatis/结果集/index.html","804293e2ee8400e10639806627ce6eb7"],["/categories/Spring-Boot/WebFilter/index.html","c7de4fd72beca592276ee6e48976ef27"],["/categories/Spring-Boot/index.html","aba246cf5386e94da1db6b08405bb0f7"],["/categories/Spring-Boot/参数处理/index.html","5ec466dbeb4a0f8292db18ddbf430b32"],["/categories/Spring-Boot/配置文件/index.html","80070590d6d791817212ba1399d4701b"],["/categories/Spring/Feign/index.html","f6aecd895d4910a834f09528549041fb"],["/categories/Spring/index.html","14d8066764319b4a33e105093dd367af"],["/categories/Typescript/index.html","a170f3fb9086c0904d3fb02ef697ee6f"],["/categories/Typescript/装饰器/index.html","1b3221403f1136320ffb430eddfa81bb"],["/categories/index.html","511922b3d6ea98356102d6580c5653b1"],["/categories/maven/index.html","1566bc42d3cd52a286cbef4c2584d8ba"],["/categories/maven/聚合项目/index.html","d5ecf663a00a7628015ee83611e9fd9b"],["/categories/mybatis/index.html","fae4f5a76b378f09e197687c0a22db53"],["/categories/mybatis/xml/index.html","8b7e65d0f20f13c634cf185212357cd5"],["/categories/前端/Hexo/index.html","25a034e96cdb40783419bac3faf3d2c4"],["/categories/前端/index.html","fbd43c42adb2fbef28ccbc67dcd431cb"],["/categories/工具/Intellij-Plugin/index.html","26145fa5535e7468d6377b2c51b31578"],["/categories/工具/Java/index.html","8ba8930c9162976083e674f49a001d52"],["/categories/工具/index.html","c57f4455a92115b06ea720ab726db15a"],["/categories/微服务/dubbo/index.html","985b77685a6ba5ed0119fc99a84b9c3d"],["/categories/微服务/index.html","8cb3258a4745a594563c3f3b6665765a"],["/categories/数据库/Oracle/index.html","077f96f00093d22bf3dbc0521913be3f"],["/categories/数据库/index.html","57e215dc3f815429de6bdb07dd8aaea3"],["/categories/版本控制/index.html","02e5ad2b2bd9f8f919fb41fa0ac2f993"],["/categories/版本控制/windows/index.html","485d48875ca34e593d836aa1b755ba1a"],["/categories/缓存/Redis/index.html","b6ae8848f3c54b0a7ce5122b5a983071"],["/categories/缓存/index.html","1dccd0654717cf2120bfed16aaa0affe"],["/categories/边缘技术/index.html","b2123186bc20081433671f23fe2ef3e3"],["/categories/边缘技术/前端/index.html","401dfe563527ed8dec9a65c0a8537969"],["/css/first.css","847c31be45cd2c7cc1173834ba5f25d2"],["/css/style.css","0f1173bf9a74319b5d32457abe5fa992"],["/images/logos/128.png","dc6f740abff2ec660a63bf9c52c07713"],["/images/logos/144.png","d0c91faaea297cebff8e275b8e7804cf"],["/images/logos/192.png","54651b2b249fe6c1c73a6bef9f56faae"],["/images/logos/48.png","a39e72af0c79fe9a661ebbe2b9457908"],["/images/logos/512.png","633b87edad402d2c3578e1220d5f5b3a"],["/images/logos/96.png","26d31321cd5ca277afd002385a00e043"],["/images/logos/apple-touch-icon.png","08fc59a99b6637db9eb7d392de7c0eab"],["/images/swipper/1.jpg","15e94dc0045cbed50543e9a586cafaea"],["/index.html","6e766d6b009c0124cde94fb070f86084"],["/js/aplayer.js","d4020b04d968aaf22ae2ea76803f7052"],["/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["/js/issues.js","313bd45ccc98c5c4982dbc3b07ab1a16"],["/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/js/search/algolia.js","94be3d4b1886bf8fff70161adf98c2e4"],["/js/search/azure.js","b17ba3ea67fbd51f1fd528db3dd0d723"],["/js/search/baidu.js","10aa3921e897dc10868694addbdf18e6"],["/js/search/google.js","28dfd18e2728ab710a2ad3626b8ece61"],["/js/search/hexo.js","f683a9720289b030cd991cf7fb345e63"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/page/2/index.html","d243c81966a58f78060b298c142f2648"],["/page/3/index.html","dccaf4289801df11dde9ac2206980034"],["/page/4/index.html","f3abcf20374dfb5d6a3de60d9f953a0a"],["/page/5/index.html","9509f5b0d561dbc1c539e79ef1606bcf"],["/page/6/index.html","d2b8a6b67e3a5cd9ef108530aa613f04"],["/sw-register.js","88425f4356fb3b7325dcd6af6c436c9f"],["/tags/Blog/index.html","e390cf95fb600187d58c743320a9aae9"],["/tags/Bootstrap/index.html","c4e3b36ca549954bb7f4348b368f387f"],["/tags/Centos/index.html","d0293c191bb946ede75db0da1ca11dc4"],["/tags/Configuration/index.html","9d1ce8f43ce233365631f596b233ba2e"],["/tags/Deploy/index.html","b8f6c94cc035063c66a0eed5ca3ecc11"],["/tags/Feign/index.html","3dad595389f6423e99f74cbf39ac1815"],["/tags/Github-Pages/index.html","c7504264e52f05d10bc13431eefddb16"],["/tags/HTTP/index.html","d86b0dbe53569dbaa71d942193a0d7e8"],["/tags/Hexo/index.html","7554e7318963bf5d9f18fc3ec0338707"],["/tags/Idea/index.html","3696b900d9f89e37d35723ab57cd5e8e"],["/tags/Install/index.html","43cb98bf42cc5f31a77f94cc71023a06"],["/tags/Intellij-Idea/index.html","d20efba8da10932015b6439d4886136b"],["/tags/Intellij-Plugin/index.html","85a5043988247dfb5c3607c0a5e09c70"],["/tags/JDK8/index.html","c7519f1a8ca2f82dcf358c56185716c2"],["/tags/JSON/index.html","c33d829a5c051e40c757c9e73bfb9d70"],["/tags/Jar-冲突/index.html","353bb2dc7215c529cddbb657db5fff71"],["/tags/Java/index.html","0d8d4c9f5c1be00b03da81c1bc6805b2"],["/tags/Javascript/index.html","7a30ceb823b53c4a4472ad15337c677a"],["/tags/JetCache/index.html","fcb3d9b39dd1ebf2a94a114bb6488987"],["/tags/Lib/index.html","ded6afb3615022679df8612cb86f1cb2"],["/tags/Linux/index.html","6985273323cf4f7419515a24cff6cd55"],["/tags/LocalDate/index.html","9af593eeb4906b5b03d0d1b25f5636e7"],["/tags/Lombok/index.html","70425bc3804d5ef316ba90cb7034cf1d"],["/tags/Maven/index.html","31aabe4234e85a6a1f321bbe0c33dec4"],["/tags/Mybatis/index.html","8d7954f2912e6e1f7a7b5e4a5d789228"],["/tags/OpenConnect/index.html","aa5a9d5af85b05ec480d45fc4c95eb59"],["/tags/ResultMap/index.html","995499c969daa34ba8ef40fd31bee899"],["/tags/Spring-Boot/index.html","d23264b28b875ed94198c7afaae0bea7"],["/tags/Tag/index.html","e0a4d234e39e5b3e49f272b75a569208"],["/tags/Time/index.html","e2d356318d2555be9630cfa93f45b4df"],["/tags/Typescript/index.html","8071650d34ed5e5449be4931f1c73331"],["/tags/VPN/index.html","df57f73a9eff5fad4d046b84af27e7df"],["/tags/WebFilter/index.html","55737052d0e6e86126c04219830d2b9d"],["/tags/XML/index.html","ce14c064b84e75386e6e3611c8b462e9"],["/tags/blog/index.html","bebbf48c1a98ff410a875c1d75fcd4da"],["/tags/dubbo/index.html","4d3ed6814b276737201bfb0aa39581b8"],["/tags/excerpt/index.html","f93d297a9c431ea0c6860e0db80db0fe"],["/tags/git/index.html","6da7db8e48c58ac0628455b04adcb80b"],["/tags/hexo/index.html","1a996d646b404dc9ad037a23c3d42fc9"],["/tags/index.html","dc1edc53b4cf8a0ed3882266dfacb3a8"],["/tags/insert/index.html","168be3aa2da0c2cbc1cc14781c3227b1"],["/tags/java/index.html","7ca1c97e1c84003147e4d37fe81baa0a"],["/tags/maven/index.html","8371d51345c75d8e4d03b801cb71dad2"],["/tags/mybatis/index.html","383c4858f689be16e57f77dcb888d7fc"],["/tags/oracle/index.html","f834cf23001d7e6952a8533632917986"],["/tags/plugin/index.html","6d03894395f95ca18717e97bbd8c08cd"],["/tags/springboot/index.html","d9d8d981043112d278b7dcb167cf1385"],["/tags/sql/index.html","12f528f2d4edce3903875583bf39cde1"],["/tags/swing/index.html","f9934352926351af8b6172f24eb806d6"],["/tags/urlPatterns/index.html","3c6ff99917e552e38a93e379745e8570"],["/tags/version/index.html","e7399cd74f7210e0a7e013400517cb8b"],["/tags/windows/index.html","ae52c3345080b67cddbc8a09b4832ef2"],["/tags/xml/index.html","52601817441e36cc2188d01306e86797"],["/tags/主键/index.html","a487b02f4e4ca7f6b58945cc5d4f46b8"],["/tags/使用/index.html","0921b3e6bae827c4b9475bb3dcafd4c2"],["/tags/参数处理/index.html","33bf86e5b783439246d2a7216b27340a"],["/tags/发版/index.html","bc4118347f0035b6e0f5db173e571f14"],["/tags/命令行/index.html","8932ee5537f6e1f35e3d7fd09f67c67b"],["/tags/外部依赖/index.html","1f2a4ac4edf7cb01d8aa8ddcf8fd70e7"],["/tags/多版本/index.html","a15f3968e7b37cda1525d6967d9981b1"],["/tags/多环境/index.html","a907ad8e0357ffb7be95ac7d91b61d08"],["/tags/多级缓存/index.html","f2630c9493a52fb4da57d14d2bddf61a"],["/tags/属性失效/index.html","72f5cef62b14cacedc684674d8a3f73f"],["/tags/工具/index.html","26e718b6e8a1dd110768794bff84fdee"],["/tags/异常分析/index.html","372165fa2231eb9ae0aebacc77d497b1"],["/tags/拓展/index.html","e266fedcc7612b8d838e1d3eb71ed70e"],["/tags/拦截器/index.html","c4c0f7ff803f8d37d2eb569ab273c2fb"],["/tags/插件/index.html","7c46deb183afc671cc1f4f8a6c774c5a"],["/tags/日期格式化/index.html","72351908f282509008c9760d22c02f45"],["/tags/注解/index.html","39e4bfb1f3d7ecfdd21506c9cbb22e4d"],["/tags/版本更新/index.html","cfde0cc9112913f228d9eb44dc379e5e"],["/tags/结果集/index.html","9ca2df4ca0b430961b21fb5a0a124ddf"],["/tags/聚合项目/index.html","0c502665c0a3e1665a88e4b9777046cd"],["/tags/自动部署/index.html","5fb980358e3b5b9d125649d107ad1869"],["/tags/装饰器/index.html","f1e31c291bd94c2df5d6309d9cd2e4de"],["/tags/语雀/index.html","c3810f76d6193da7ea10efc46ab6b87e"],["/tags/语雀编辑器/index.html","84da1b468982780f045fd393cd0d34e1"],["/tags/踩坑日记/index.html","e1d6f8fb021cd344261d667835373936"],["/tags/运维/index.html","d978b7b2b32887d84d7c2c31923de1e5"],["/tags/配置文件/index.html","b0e81764133155d857f3d1d1995e1ac2"]];
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
