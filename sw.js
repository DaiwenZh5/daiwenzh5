/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/12/17/yuque/Nginx 转发接口导致超时解决方案/index.html","e12a2135f3e5b3d1636af1ae0a6740a5"],["/2019/12/18/yuque/Async 注解 - 异步调用测试/index.html","2289b141b21801683af575d7bd807a65"],["/2019/12/18/yuque/学习计划/index.html","2e6e941b9e0899273262925fdb5d3ff6"],["/2019/12/18/yuque/读书笔记/index.html","887f0c6c9cc22f9147c6c83c8ae37fd3"],["/2019/12/19/yuque/Spring 自定义线程池/index.html","fdfaee2dbe55290629d4fa78ad26fff4"],["/2019/12/20/yuque/Spring 服务端推送（SSE）/index.html","3f2a7129175f1102462edb7c939cfd9c"],["/2019/12/23/yuque/Mybatis 插入 DATE 只有年月日/index.html","004cdc40116cda4e972b3ff38b34a6b8"],["/2019/12/25/yuque/Notepad ++ 配置 nginx.conf 语法高亮/index.html","4b1f82ef60323d9a1edd5a0c3e04a5a3"],["/2019/12/26/yuque/Spring boot maven plugin 使用说明/index.html","930b48630c3f53610eb0f14055d5fb44"],["/2019/12/26/yuque/打包失败：找不到符号/index.html","1053cede8f08d2e36c12837a5f25586b"],["/2019/12/27/yuque/Idea 启动报错：命令行太长/index.html","a8b7bcd6e94fc87e3b9e68a746f09ed5"],["/2019/12/29/yuque/Springboot 整合 Mybatis/index.html","26395cd04b72976c82c06ca053958b24"],["/2020/01/03/yuque/Spring 注入 bean 失败/index.html","f7ecdaca0413f17887113b92cf4a5aab"],["/2020/01/05/yuque/PageHelper 分页结果类型转换/index.html","3ed2519894baf470004510aa90188eba"],["/2020/01/20/yuque/Git 配置多账户/index.html","6900c2584676b3a22898c3532733575a"],["/2020/02/05/yuque/Spring Aop 插件式开发/index.html","0fe1de669bcb779ebcb5437a6a39586b"],["/2020/02/06/yuque/自定义类加载器/index.html","a12c9e779e98e99085d088d470737a56"],["/2020/02/12/yuque/自定义 JDK 锁/index.html","239e4d10a680fed5c77ff13c1eb7c0f4"],["/2020/02/21/yuque/进程管理/index.html","b460094e283a2c22e47bbb597a322c18"],["/2020/03/24/yuque/插件式注解/index.html","25da90ed126513cee3247549ad869819"],["/2020/04/07/yuque/Vue Ts 中使用 axios/index.html","ff083cd73be88374fa66bbb0c2ef5f27"],["/2020/04/09/yuque/Spring 项目打包后运行报错/index.html","10ae9af32abb4451ef9e33273787f200"],["/2020/04/10/yuque/Maven 多环境打包/index.html","d6960cd1595703768042e19a6d2e5ec2"],["/2020/04/14/yuque/🐘 统一返回对象/index.html","b63b6ec742c46f4d0cade64039abe6d9"],["/2020/04/15/yuque/MongoDB 使用记录/index.html","4969cb2dd36738a232aa944adc3d41fe"],["/2020/04/23/yuque/📑 统一日志记录/index.html","55bd94907358dc7d8ae3943ed3dd7f7c"],["/2020/04/23/yuque/🕷 统一异常处理/index.html","8bc7bbaac965be448ec05700423f1638"],["/2020/05/11/yuque/Hexo 博客搭建/index.html","07fc6a172899765aa0f59841679119b9"],["/2020/06/01/yuque/git remote fail/index.html","31f796484aa5370a35c842f5aa54b280"],["/2020/06/08/yuque/Hexo 自动提取摘要/index.html","7f022e7452a4c6d2ce1e84b0dc0961a4"],["/2020/06/17/yuque/Oracle 误删数据恢复/index.html","27720ee0ffa02dcad1fb7d0bb064dfc2"],["/2020/07/23/yuque/MapStruct 未生效/index.html","4ccb7da7db4f79bba7910d5457142a3d"],["/2020/08/13/yuque/装饰器/index.html","2dbf2c14ea17d80df210fdc1d87f80cb"],["/2020/08/14/yuque/页面加载优化/index.html","b12b78a80dc3ed3bbc4f25f9b739624c"],["/2020/08/26/yuque/消费者/index.html","5a86f4926ef1746e1c1cc5bf940ac2c3"],["/2020/10/22/yuque/HttpMediaTypeNotAcceptableException/index.html","a68dd95489999d273713aeb85a0c1df9"],["/2020/11/18/yuque/多字段联合校验/index.html","3f6af9fb893b0af1f2cabe0eeacebe1c"],["/2020/11/27/yuque/Mybatis XML 新增异常/index.html","be79ea226c69a4e22aec139026c16664"],["/2020/12/03/yuque/聚合项目版本号管理/index.html","c9572ffb6eff00b6b5603f7ea8f87570"],["/2020/12/04/yuque/自动发行插件/index.html","49a7c13c1ee11c88a388ea14abb2e76d"],["/2020/12/07/yuque/结果集拦截器/index.html","618cc713306ab861ee13f5d41c0f5c98"],["/2020/12/20/yuque/AnAction/index.html","fa4f5651f25af4abc106f2473f49a0be"],["/2020/12/27/yuque/Cloud Toolkit/index.html","13cb3ab7525fb19c918850ddafc881d2"],["/2021/01/02/yuque/OpenConnect Client 使用/index.html","96dd6e06a81d214fd9aeb93c63ae2219"],["/2021/02/06/yuque/发布到私有仓库/index.html","8348435d0560652e1988828c7613982e"],["/2021/02/07/yuque/LocalDate 解析年月字符串/index.html","849ebb65bf293c48f6de0e547ddc763b"],["/2021/03/21/yuque/打包外部依赖/index.html","37c6db0b3fe975c69be694668e889032"],["/2021/03/22/yuque/实现 Jar 多版本共存/index.html","049532e60b51e9fd7cb7dcfc45121520"],["/2021/03/30/yuque/Feign 自定义配置/index.html","e7d7af96a7d86a84d1b488a6f9093957"],["/2021/04/23/yuque/JetCache 使用/index.html","98fd531d8e48d8576ab8619f8eaf58f6"],["/2021/06/11/yuque/字段类型不一致的问题分析/index.html","858f60ddaec0ee986165da1fdb9efe86"],["/2021/10/31/yuque/同时处理 XML 和 JSON 接口/index.html","68fe68515bbcdb7fcc8e2cc4dd90b9c8"],["/2021/11/06/yuque/Bootstrap 多环境配置/index.html","73b9fd1ba2d834a9c56ab317a6d64d14"],["/2021/11/10/yuque/WebFilter 路径匹配模式不生效/index.html","fb50f3b0ef01c8fce0c183b06c421837"],["/2021/11/16/yuque/Spring Cloud Config/index.html","06e4621d2fddc634541c74aeb6442072"],["/2021/11/22/yuque/重复参数校验/index.html","99a9a88cd637a51a2485f2dc50f607af"],["/2021/12/09/yuque/async setup() 引发异常/index.html","a5f2f80aded7647c25f67e6d6eaadab7"],["/2022/02/26/yuque/WebMvc 测试/index.html","ca2b615c641870018c926fdaf182b2ff"],["/2022/02/27/yuque/RestTemplate 使用/index.html","f994e380ed1eae43ac05583fa313976f"],["/404.html","6ccd3dbe8d3e1522b25de1e4e6ba3d38"],["/archives/2019/12/index.html","75516ccbc7ca366fae847582189850a6"],["/archives/2019/12/page/2/index.html","8121efb3ca04d3de8deec1104888b26d"],["/archives/2019/index.html","2b91a2eb4126ada23ca3e38343137ec0"],["/archives/2019/page/2/index.html","3415552bbc62fd9df61a814db8d4ba01"],["/archives/2020/01/index.html","0bc025d38b82a151d974d70508dddf98"],["/archives/2020/02/index.html","648b39b5851423e99e585d98098dab10"],["/archives/2020/03/index.html","dbffc7fddd5f2c9d392a33159082b0f3"],["/archives/2020/04/index.html","508252e7410e9cba17951e4fc0d55e07"],["/archives/2020/05/index.html","7851f1c04fe81f245722a309051408f3"],["/archives/2020/06/index.html","09dd8137e05e144fb92b90c3587c0ec8"],["/archives/2020/07/index.html","4795016dfb4be36148ce8548e001df7a"],["/archives/2020/08/index.html","18cba14ca19e5712f1b25e376625f774"],["/archives/2020/10/index.html","f9bfb94e1b561713182d93f366b8658a"],["/archives/2020/11/index.html","3e357410d742976631c18f973a423cf7"],["/archives/2020/12/index.html","6760ae28247a2fc69c7678ea7d591406"],["/archives/2020/index.html","ef4bbf4a247e3feecd3618921f2decbc"],["/archives/2020/page/2/index.html","0a76d736bd1991c9420b56fdd60e2b6b"],["/archives/2020/page/3/index.html","95d80607b2703b900d1c68beb19c46d9"],["/archives/2020/page/4/index.html","b201828581371c39a0d813360fffdd25"],["/archives/2021/01/index.html","800b8815c14dd61f77c0baa80c5f826c"],["/archives/2021/02/index.html","3837a197bbb9a08bf68da5560114a123"],["/archives/2021/03/index.html","4cd368b7cca142dd169c098137cecf86"],["/archives/2021/04/index.html","bf1ba3be663566aadda2f1cea95295d1"],["/archives/2021/06/index.html","ff7fce746391fc74bbb6431749fda014"],["/archives/2021/10/index.html","9bfc39e7a56386b03571eff407f4d1ce"],["/archives/2021/11/index.html","5a07fbbb3c7e16d2d87db1efeb173ec4"],["/archives/2021/12/index.html","e7818ba7d033a207f13c536e21865082"],["/archives/2021/index.html","128863bbec483bc05bc37de48829df68"],["/archives/2021/page/2/index.html","1376c6f6163be50052485f7693d8b4da"],["/archives/2022/02/index.html","7fe0e53008ef93977b5f1af72f41c1e4"],["/archives/2022/index.html","662b0fc26f747bf848ea42ab581efdfc"],["/archives/index.html","eb2fcac1fa3a423107b7da71f93f6f32"],["/archives/page/2/index.html","eb2fcac1fa3a423107b7da71f93f6f32"],["/archives/page/3/index.html","eb2fcac1fa3a423107b7da71f93f6f32"],["/archives/page/4/index.html","eb2fcac1fa3a423107b7da71f93f6f32"],["/archives/page/5/index.html","eb2fcac1fa3a423107b7da71f93f6f32"],["/archives/page/6/index.html","eb2fcac1fa3a423107b7da71f93f6f32"],["/categories/Intellij-Idea/index.html","91f7a175e131520ed71715012f8aa27e"],["/categories/Intellij-Idea/plugin/index.html","8425a6702c6530730c4889b1e3df9f47"],["/categories/JDK8/Time/index.html","6e1de5c6d73a587cfca38978679f8d72"],["/categories/JDK8/index.html","77aa97971b23b41d363cf7b48846ae75"],["/categories/Linux/VPN/index.html","9386ccfdc9e668dcd1a22d1b4a09ac99"],["/categories/Linux/index.html","614578568a6eaf8510bdcc34d92a88cc"],["/categories/Maven/index.html","fee998402b1350e07ced40bc9e12fd99"],["/categories/Maven/命令行/index.html","c7272326da2c6f0cce0e50930439ebcd"],["/categories/Maven/打包/index.html","eeb49d64af36b2ece4252e13de1c644e"],["/categories/Maven/插件/index.html","ac6518b3beb71a1de90c4ea64e2ce77f"],["/categories/Mybatis/index.html","e6df02ba6f9e9098e3806976fcc4fc0a"],["/categories/Mybatis/拦截器/index.html","add0c5eba82f567c94544bf30abccaef"],["/categories/Mybatis/结果集/index.html","a26f4bff9f3d6b0163a7538e56594630"],["/categories/Spring-Boot/Rest-Template/index.html","3865e98b01e943e7374cb90bd7e1be2f"],["/categories/Spring-Boot/Unit-Test/index.html","002a385297c56f3a1d9c45daa1bc8ea8"],["/categories/Spring-Boot/WebFilter/index.html","247562343ed26531b21fe4b6f534e35e"],["/categories/Spring-Boot/index.html","a37ffa2d79f286864e7a556d40aafb81"],["/categories/Spring-Boot/参数处理/index.html","338ac0d053e5b52d40ae82a64956b639"],["/categories/Spring-Boot/配置文件/index.html","124192139648f97456e25d8afc964ba2"],["/categories/Spring/Feign/index.html","b3f4c57cecb01017a4aa6a55eb561fe2"],["/categories/Spring/index.html","afcc40748b7102c676a88160fc58d23c"],["/categories/Spring/参数校验/index.html","463a123861c8e5eb0127f4a8edfc2c88"],["/categories/Typescript/index.html","97da66db43fcdf10e3d4723f7b8038b4"],["/categories/Typescript/装饰器/index.html","0e7541ee06cd29b70b14120b7780e18c"],["/categories/Vue3/index.html","401f3054fd404d90393040bb674ca8c3"],["/categories/Vue3/异常/index.html","bd288876c5bd67acca32de200f19ae43"],["/categories/index.html","e66422282482887f3cfa07daf1ad89f2"],["/categories/maven/index.html","b10ea70cc2657dde7ed169c4a8cce8e3"],["/categories/maven/聚合项目/index.html","6097b1e56250787c599ac3c1c11c4f20"],["/categories/mybatis/index.html","1b2e25d5ea64324a63ba4e5366d544de"],["/categories/mybatis/xml/index.html","53c059ce486a986c2d42f3f69b2420ed"],["/categories/前端/Hexo/index.html","0bbbbed6145d9c1dac0de9409e1b2bf8"],["/categories/前端/index.html","060dbd332cc262d0d836b750a94d8016"],["/categories/工具/Intellij-Plugin/index.html","df320a1f7d1a20c80f48f62bde427fc0"],["/categories/工具/Java/index.html","02ceb7878eeb1569083bb548343b5f47"],["/categories/工具/index.html","8f6b950b8826d174ee406e3104e5ce42"],["/categories/微服务/Spring-Cloud/index.html","57fe2ea05ec61481e1e5060f03998424"],["/categories/微服务/dubbo/index.html","fde9a5ad3b57616b4ad5a68807edddc9"],["/categories/微服务/index.html","4e58ac6f7ad7f07c8172cda15949b91b"],["/categories/数据库/Oracle/index.html","9b2fa46adb842914467b555b814d5260"],["/categories/数据库/index.html","9affe218e16f22a624a6e628d44054e3"],["/categories/版本控制/index.html","5e3cc61a7f5cba2c3510d51f734f9af0"],["/categories/版本控制/windows/index.html","75df1b91112d15a09363e0b5a92aa33f"],["/categories/缓存/Redis/index.html","ce455f98f3446830f4f999b46189f8bd"],["/categories/缓存/index.html","04782cf0b64062c6b7d1f0e7e84b6a30"],["/categories/边缘技术/index.html","bc4ec16a600c5a614f4acac936058387"],["/categories/边缘技术/前端/index.html","55108498957974dc547a073624a5dded"],["/css/first.css","847c31be45cd2c7cc1173834ba5f25d2"],["/css/style.css","0f1173bf9a74319b5d32457abe5fa992"],["/images/logos/128.png","dc6f740abff2ec660a63bf9c52c07713"],["/images/logos/144.png","d0c91faaea297cebff8e275b8e7804cf"],["/images/logos/192.png","54651b2b249fe6c1c73a6bef9f56faae"],["/images/logos/48.png","a39e72af0c79fe9a661ebbe2b9457908"],["/images/logos/512.png","633b87edad402d2c3578e1220d5f5b3a"],["/images/logos/96.png","26d31321cd5ca277afd002385a00e043"],["/images/logos/apple-touch-icon.png","08fc59a99b6637db9eb7d392de7c0eab"],["/images/swipper/1.jpg","15e94dc0045cbed50543e9a586cafaea"],["/index.html","a0782b49b74edf3b7d696d7bd7c9228b"],["/js/aplayer.js","d4020b04d968aaf22ae2ea76803f7052"],["/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["/js/issues.js","313bd45ccc98c5c4982dbc3b07ab1a16"],["/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/js/search/algolia.js","94be3d4b1886bf8fff70161adf98c2e4"],["/js/search/azure.js","b17ba3ea67fbd51f1fd528db3dd0d723"],["/js/search/baidu.js","10aa3921e897dc10868694addbdf18e6"],["/js/search/google.js","28dfd18e2728ab710a2ad3626b8ece61"],["/js/search/hexo.js","f683a9720289b030cd991cf7fb345e63"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/page/2/index.html","b9761145478eddee13f6a31ea0d9d6e0"],["/page/3/index.html","d04232316cefb4b94edc181308c49926"],["/page/4/index.html","b196bc44ff5b05d6ad6b3ba6295a3e52"],["/page/5/index.html","fc12486d5132fc8ceb9b20cd698cbfa9"],["/page/6/index.html","ea9b4fcd69a5c536c381d5fa7a85db82"],["/sw-register.js","89b28761d8a027cc2ad66cf128384af5"],["/tags/Blog/index.html","ebe0ee87f13ba35a605491ef7c4dcbb7"],["/tags/Bootstrap/index.html","08aea4565deadd26dbf7d7d4f9533502"],["/tags/Centos/index.html","6e0d7f0f7a16cf9290d2d3e95d62aabf"],["/tags/Config/index.html","ec451556b58880b2d0ec2f4c3cfc9825"],["/tags/Configuration/index.html","c44b233443d2c2c1027cd254e5965fc6"],["/tags/Deploy/index.html","96478b9f80854434c6777d7bb16a9caa"],["/tags/Feign/index.html","0956cbfcfe4714748f84bb3f83717595"],["/tags/Github-Pages/index.html","0ca954f5b0f4fd40ba4c699b09bcc53b"],["/tags/HTTP/index.html","b4bb69fd097ca687a15de2f86cb69ec5"],["/tags/Hexo/index.html","6e61204c1c4c2986b33f039b28172da2"],["/tags/Http-请求/index.html","9a134c3254327681782413a44768202a"],["/tags/Idea/index.html","2f16050f7d376b0ec4b93e5d3f539e0d"],["/tags/Install/index.html","aad8f85987d1464fc4ced70f4d4a39cb"],["/tags/Intellij-Idea/index.html","590e8c9d90a6b7ce66d8612f48ae6e8d"],["/tags/Intellij-Plugin/index.html","3deaa88e72a6cac0d4cbacc331fac728"],["/tags/JDK8/index.html","b250d36a4977dbb9efad5d628b79611a"],["/tags/JSON/index.html","0b4f0550f45b0daa1265c35553066d0f"],["/tags/Jar-冲突/index.html","730fd40cfb68b7960b6f08d8466ceffd"],["/tags/Java/index.html","b050ecd677af2e8f4db23c8316bb8f2c"],["/tags/Javascript/index.html","79f6e76f26efe11c7cbccb8e32fdea25"],["/tags/JetCache/index.html","3a7366dd3060d757bfefd32bfa40165f"],["/tags/Lib/index.html","df3074ff3af1c0b10488a5fdfa14b2e2"],["/tags/Linux/index.html","591f8d52b1f227dd4a48bb07145e49a0"],["/tags/LocalDate/index.html","176d7ebff4db97c898c183db15b6a60d"],["/tags/Lombok/index.html","36efd1daa38ba6c669aea2f2b11fb9ef"],["/tags/MVC/index.html","2dd5ab7d81292ea14ab3902a9586df7b"],["/tags/Maven/index.html","bbc3dd88193e06b9a4fefdd44a6f19f1"],["/tags/Mock/index.html","68ae7f5fefb4f6e681b628c7bb208ddf"],["/tags/Mybatis/index.html","aff066cc65165a27188537568e13eee7"],["/tags/OpenConnect/index.html","ca97418d7bbf9bbc10c21fce9c48ea6a"],["/tags/Rest-Template/index.html","56a15bb89c48ea72beada06ea3a94195"],["/tags/Restful/index.html","2708570e97c8c0d19322835739e61714"],["/tags/ResultMap/index.html","935343b6414c9f2cd0746bb8e5b6770a"],["/tags/Spring-Boot/index.html","708a2393380dbe72b4cf711cd124793e"],["/tags/Spring-Cloud/index.html","21407331e95c81e2eac4dfac078b7084"],["/tags/Spring/index.html","4a20d13e5daa2c62be003941e12027e6"],["/tags/Tag/index.html","afcf56201e1b4848ddfdee75adc63458"],["/tags/Time/index.html","005e45cd3256890d94bbf92a8bd600e4"],["/tags/Typescript/index.html","552cb0b361de61967d6008889f895389"],["/tags/Uniapp/index.html","9c7531ead36c622671e09187cef14f56"],["/tags/Unit-Test/index.html","c84f17bc2b1d22b5d172b3b33ea5c670"],["/tags/VPN/index.html","51684e277b87a140ee1d0f807c24d955"],["/tags/Vue3/index.html","3d2a9c5278aaf8d613ec2c20d362d44c"],["/tags/WebFilter/index.html","d1296f99e4acb74a0f3038752f90536f"],["/tags/XML/index.html","86dd90c1dc14366ec5a88255a2eb9c36"],["/tags/async-setup/index.html","3e7ede434ec128620ecd839c0722b128"],["/tags/blog/index.html","a62d74df45dc8d29b4560231bf7f2c1c"],["/tags/dubbo/index.html","6a585d0fceae01ef4fcab607f637f3d5"],["/tags/excerpt/index.html","000009e5e4fefc165437d4e23846ab85"],["/tags/git/index.html","aa1d6e6ad74487fb04ccddb06102eae0"],["/tags/hexo/index.html","42dda1220130529e6d7187c6ec5ec85c"],["/tags/index.html","3f2fb9d69c4de23cffa1dab948e07863"],["/tags/insert/index.html","59bed15231752a2eaf274385f54390e6"],["/tags/java/index.html","84f83c3fc925d263a41e8e3dc35a91d7"],["/tags/maven/index.html","0340153f04dc3a877c4c9e67080f6b22"],["/tags/mybatis/index.html","7438cf604ac85102f12596d157bcc7b7"],["/tags/oracle/index.html","71615b711aa30d8c906223d5469e7ff9"],["/tags/plugin/index.html","b7901af4ea12d6abe54efcce567a7f53"],["/tags/springboot/index.html","4d072899d61cafbf7344638e6981ef91"],["/tags/sql/index.html","2eef80522da97b4c66161ca73efe1eda"],["/tags/swing/index.html","44cb8aae58a26b13c158f3ec6c789892"],["/tags/urlPatterns/index.html","b6ca432329a86f4468911c22a18a779c"],["/tags/version/index.html","6a63ee23b91b8cabd263a35503b8dde2"],["/tags/windows/index.html","248a859a8346b2e49bdb44525469ce4e"],["/tags/xml/index.html","688586e718e5a44faa01cb1ce449927e"],["/tags/主键/index.html","dcba96c948576917150b99fa0db71b4a"],["/tags/使用/index.html","864541aa0118aa68252943d0a8e856aa"],["/tags/参数处理/index.html","c669365207d072a6378dce2621aeedd5"],["/tags/参数校验/index.html","cfa98f19c001b540a4fd2c141b6d3c72"],["/tags/发版/index.html","dc08cd1207eaaaf64d7742e73668da85"],["/tags/命令行/index.html","e4a6eff3ab5909241431530d62c3c742"],["/tags/外部依赖/index.html","fa527c4297b7b7ccafd5187aee32968e"],["/tags/多版本/index.html","78e0331b107098e536b5b0de50b5355d"],["/tags/多环境/index.html","6e2048bc1ea3149d0865e9569e379ca0"],["/tags/多级缓存/index.html","4ba85772bf0201c942b62063a8f7b256"],["/tags/属性失效/index.html","0982e149a2551706d1afb7ce4b441582"],["/tags/工具/index.html","7699e56678451c51f609dd7c9d88a434"],["/tags/异常/index.html","de2c3a0953602adbd97fb91742bcbdeb"],["/tags/异常分析/index.html","d6df5ab3fa459f30b5a7fa243187e685"],["/tags/微服务/index.html","9a4e7a88c31f34d915a87fee314a12c7"],["/tags/拓展/index.html","daa8cb75c2acb1c58125c55ecbd1c8ef"],["/tags/拦截器/index.html","ae3f005d1acfc484a32e1c2243cb5a80"],["/tags/插件/index.html","ad4f26b4b1c6b376ce85036b4f51d4e5"],["/tags/日期格式化/index.html","7c6faf343729ae048de3b4c1945b341c"],["/tags/注解/index.html","79d7cf639f0a7332cf7f93545bd08dcf"],["/tags/版本更新/index.html","cc19c6541b248783815087839324ec33"],["/tags/结果集/index.html","0db2343800145a437ffe329cafc27f07"],["/tags/聚合项目/index.html","6ef91a9be193ed29a900c0555360db67"],["/tags/自动部署/index.html","b4ca332cc7ddc4770b6081c37dbc3e29"],["/tags/自定义/index.html","85feab6f5d8787d244302e37026878be"],["/tags/装饰器/index.html","ffdb8b42c8031e680fcb0d176e495790"],["/tags/语雀/index.html","dc9c841d0ecc5906f2083ff2585f6996"],["/tags/语雀编辑器/index.html","0f2c30a552eeb6d2a338ab057d57b112"],["/tags/踩坑日记/index.html","bdd1a71fc94deef85e1542f50be61289"],["/tags/运维/index.html","e8559bb84ac28116565e393d9144deca"],["/tags/配置中心/index.html","379a2cba6e2e3eed13aaf5f5f0ee0833"],["/tags/配置文件/index.html","0060fb7204362f9aaccd21bfb1e5129b"]];
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
