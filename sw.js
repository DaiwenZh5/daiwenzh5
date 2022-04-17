/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/12/17/yuque/Nginx 转发接口导致超时解决方案/index.html","86828065c9f5c8010ed01f1a52d62f99"],["/2019/12/18/yuque/Async 注解 - 异步调用测试/index.html","d7fddf31bb627fe651a6bee81d11c1cf"],["/2019/12/18/yuque/学习计划/index.html","513fa57f3f9661dbd34b5c30f03130b0"],["/2019/12/18/yuque/读书笔记/index.html","13e527529e816a78e0375e6ec5856758"],["/2019/12/19/yuque/Spring 自定义线程池/index.html","321b73b5b7486052d090c85ed5464f5b"],["/2019/12/20/yuque/Spring 服务端推送（SSE）/index.html","871627d08f34d2b99a707d63f672dea3"],["/2019/12/23/yuque/Mybatis 插入 DATE 只有年月日/index.html","507646df860331d19b89cb5e849c808c"],["/2019/12/25/yuque/Notepad ++ 配置 nginx.conf 语法高亮/index.html","8b544ca9e8d0b4aee01eec0cb26ca080"],["/2019/12/26/yuque/Spring boot maven plugin 使用说明/index.html","0e8b28f47f9115d04b51fb10aa009f5a"],["/2019/12/26/yuque/打包失败：找不到符号/index.html","60165668898cabc4a7828b2b30df2cf9"],["/2019/12/27/yuque/Idea 启动报错：命令行太长/index.html","8158d8a2fdeb537bd89c56906f765270"],["/2019/12/29/yuque/Springboot 整合 Mybatis/index.html","dd07d9766e899d1ea0780b24d19f939a"],["/2020/01/03/yuque/Spring 注入 bean 失败/index.html","3d4b9e0edc4248d02aa0819524f94832"],["/2020/01/05/yuque/PageHelper 分页结果类型转换/index.html","1cd74ef4c9d4ca3b8966027aad3befd1"],["/2020/01/20/yuque/Git 配置多账户/index.html","83300938ec52d83af1c3e58c81ae68b4"],["/2020/02/05/yuque/Spring Aop 插件式开发/index.html","d78c3df591268738e2ab4dbd3a6d5307"],["/2020/02/06/yuque/自定义类加载器/index.html","a3d0c828755335bb50530fa012d2f3c7"],["/2020/02/12/yuque/自定义 JDK 锁/index.html","2af96872c7d7beb91c1d0304edd94ca1"],["/2020/02/21/yuque/进程管理/index.html","d9072105537965b606677d233b32ea7c"],["/2020/03/24/yuque/插件式注解/index.html","67a607df521bd8d351d4998f57d89c3b"],["/2020/04/07/yuque/Vue Ts 中使用 axios/index.html","2f66a60e7487e3e95736c7dbef47c538"],["/2020/04/09/yuque/Spring 项目打包后运行报错/index.html","5437568e3aa195273e5b62a01dae1fde"],["/2020/04/10/yuque/Maven 多环境打包/index.html","c185e33db0faff1f57a82c2e1b8ed3f0"],["/2020/04/14/yuque/🐘 统一返回对象/index.html","375c31fe9de179bdb19d3a5ac4aba592"],["/2020/04/15/yuque/MongoDB 使用记录/index.html","e6a10904877e64cbfa6cce73db3ecd9b"],["/2020/04/23/yuque/📑 统一日志记录/index.html","ab92a408192b435330e8573a32acca89"],["/2020/04/23/yuque/🕷 统一异常处理/index.html","eea6906d3310dff4f8c3bc4d0bc0dff0"],["/2020/05/11/yuque/Hexo 博客搭建/index.html","bb19cbb39012376bbd82afd61f1ed6eb"],["/2020/06/01/yuque/git remote fail/index.html","a52cab4f8ca88a758749a86f6ca343b4"],["/2020/06/08/yuque/Hexo 自动提取摘要/index.html","3eb18658ae931ec0fe0075859f3f114e"],["/2020/06/17/yuque/Oracle 误删数据恢复/index.html","ea2fc1df87a70cf73b027b32deabe6a7"],["/2020/07/23/yuque/MapStruct 未生效/index.html","a6ebacc054cf408cccb7274b0da184dc"],["/2020/08/13/yuque/装饰器/index.html","83ed6bf51cab320f0ec820df09ba529c"],["/2020/08/14/yuque/页面加载优化/index.html","c5afddbae419aae1f2f3531b5742e1b8"],["/2020/08/26/yuque/消费者/index.html","bef0f6115fba0802d9b78626faf963e8"],["/2020/10/22/yuque/HttpMediaTypeNotAcceptableException/index.html","d35927cb14f71de32a9a46c73b81116e"],["/2020/11/18/yuque/多字段联合校验/index.html","fd7898fb1fe31112037946dcd65b3451"],["/2020/11/27/yuque/Mybatis XML 新增异常/index.html","97c2e1dbc0d00799261f592c43125f07"],["/2020/12/03/yuque/聚合项目版本号管理/index.html","853fbd847ca4f8f920b835d39f82a5db"],["/2020/12/04/yuque/自动发行插件/index.html","30037cb8cd12bb1f37002f67fa28ea47"],["/2020/12/07/yuque/结果集拦截器/index.html","f3918141e7cd8d911a7936f9ecf1cc87"],["/2020/12/20/yuque/AnAction/index.html","24d6e2b37dbaceac40a6713d612170c7"],["/2020/12/27/yuque/Cloud Toolkit/index.html","a09de7deab60736a4f344f666135fcf6"],["/2021/01/02/yuque/OpenConnect Client 使用/index.html","37de840c4643aef0470642e49d769604"],["/2021/02/06/yuque/发布到私有仓库/index.html","bcb2f8100da9a497434770b35f9b6b93"],["/2021/02/07/yuque/LocalDate 解析年月字符串/index.html","a1916ec56512118e059c1e4110664c70"],["/2021/03/21/yuque/打包外部依赖/index.html","18a11315548bd9c9c535e5c7b8139a67"],["/2021/03/22/yuque/实现 Jar 多版本共存/index.html","253cb07645431b1869597172cd3cb299"],["/2021/03/30/yuque/Feign 自定义配置/index.html","bb8e940d16610ecc0ae010b21d3b38b9"],["/2021/04/23/yuque/JetCache 使用/index.html","6bae32aea48a63cba6b0e6093124ed5d"],["/2021/06/11/yuque/字段类型不一致的问题分析/index.html","65d88768448e1ce1915d10bf4d7eed41"],["/2021/10/31/yuque/同时处理 XML 和 JSON 接口/index.html","14bcbaf2b0ea02cff792d6a596aa6279"],["/2021/11/06/yuque/Bootstrap 多环境配置/index.html","7a87e6c2f5146f54c599172bb63ced00"],["/2021/11/10/yuque/WebFilter 路径匹配模式不生效/index.html","a98d090190430429a4988835506d61bc"],["/2021/11/16/yuque/Spring Cloud Config/index.html","5abb36dab48896790b811ea007781e47"],["/2021/11/22/yuque/重复参数校验/index.html","a966dac5193f0a3fbb8502eec5b202d1"],["/2021/12/09/yuque/async setup() 引发异常/index.html","52d8e587dca1b83769f4a33da38315c0"],["/2022/02/26/yuque/WebMvc 测试/index.html","53a0bf4c6d4d1a168bf13dc0261926f9"],["/2022/02/27/yuque/RestTemplate 使用/index.html","7809127c762ae73543ec1d08beecb8aa"],["/2022/03/07/yuque/Mybaits LocalDate 解析异常/index.html","1cae8ec1cef9cebd2f5e7764e4c681cb"],["/2022/03/07/yuque/解析 Java8 时间类/index.html","b2478d495a15b6a14b0e135857d01d13"],["/2022/03/23/yuque/Oracle 多行 SQL/index.html","e061a703422f6e249659e4c24951dc39"],["/2022/04/17/yuque/解决 MockMvc 中文乱码/index.html","52098a3d09c6e49826412de7f8b86f35"],["/2022/04/17/yuque/非空或校验器/index.html","e0f2ec0b4485caea1936e25f5a727220"],["/404.html","893192ba5d30c1a90271b8c9e746451a"],["/archives/2019/12/index.html","d38a90a38b68390a7b0a98a8e7f327b1"],["/archives/2019/12/page/2/index.html","8217576efba05eeed30d233894380638"],["/archives/2019/index.html","fb3a77134a63e38ff7ccf000de7bb9e3"],["/archives/2019/page/2/index.html","2f24e79db3ed0c28b31e3c5a51a51256"],["/archives/2020/01/index.html","6715d9550bfcc318553784f3a5dab9b6"],["/archives/2020/02/index.html","ec61c7f805dde37ad0aeff07af65da6d"],["/archives/2020/03/index.html","80dc161d6c92b41330aab70c8c0dccd8"],["/archives/2020/04/index.html","eeb77d01df0345673b308f9278e5f909"],["/archives/2020/05/index.html","550f1fdc05b846c4dfe00715934051d4"],["/archives/2020/06/index.html","1f114db03a22575f5a4f9ff479ec0e77"],["/archives/2020/07/index.html","a9ee7fc6c15dbb8e173cb0b149be3c79"],["/archives/2020/08/index.html","e19992b0f19ffaf3f58e725d174eb03b"],["/archives/2020/10/index.html","370df30558dcbce0677df7010df1affc"],["/archives/2020/11/index.html","6d103101d973fd12e8b314818bd2eb53"],["/archives/2020/12/index.html","c4c637740761f7e5087fba165ebfd1db"],["/archives/2020/index.html","2d442b6a3cc320931d253026c7816bb7"],["/archives/2020/page/2/index.html","a07d993d22735607942b658feb223574"],["/archives/2020/page/3/index.html","6192e74da2e8ea1b7c5ef6fad3d8ceaa"],["/archives/2020/page/4/index.html","10b363e5169c9e57e75c19b71915ccae"],["/archives/2021/01/index.html","554331a38d7f2205acaa36d8bfeb64f6"],["/archives/2021/02/index.html","8a07ed3366dae35ca401abf421b2ad2c"],["/archives/2021/03/index.html","342b84bfc619bf8a718fdf0f62d085fd"],["/archives/2021/04/index.html","cd60ce342780c6823b27a4d2aaf19768"],["/archives/2021/06/index.html","d0a7c63f9f4af72a57628fb486965cc7"],["/archives/2021/10/index.html","b4c43d5c0e726e6c561774a70db45196"],["/archives/2021/11/index.html","9d961826dca5f590fbce92c36662e396"],["/archives/2021/12/index.html","baf44f360e0c60403e8eb5d682219054"],["/archives/2021/index.html","47fde316a8aa94dab6da6cb660d32627"],["/archives/2021/page/2/index.html","e5ca070f35b5e105c83cd438f272aff4"],["/archives/2022/02/index.html","84948b85bce9730a149fd2bde4db485c"],["/archives/2022/03/index.html","e6b9ae7e77c065378b1905c05c7d2adb"],["/archives/2022/04/index.html","739d5068e13c553955a1dbcb162c9648"],["/archives/2022/index.html","e913f117e9e1543e27634892d0c65fa1"],["/archives/index.html","543dcb637ab5f09a041acf42a87dcd86"],["/archives/page/2/index.html","543dcb637ab5f09a041acf42a87dcd86"],["/archives/page/3/index.html","543dcb637ab5f09a041acf42a87dcd86"],["/archives/page/4/index.html","543dcb637ab5f09a041acf42a87dcd86"],["/archives/page/5/index.html","543dcb637ab5f09a041acf42a87dcd86"],["/archives/page/6/index.html","543dcb637ab5f09a041acf42a87dcd86"],["/archives/page/7/index.html","543dcb637ab5f09a041acf42a87dcd86"],["/categories/Intellij-Idea/index.html","0896bef800b70eca069573db19b38ee8"],["/categories/Intellij-Idea/plugin/index.html","5b91210b5598b9390bddbe1b5abf0f4a"],["/categories/JDK8/Time/index.html","8e4d5c2393c57aee56d7634aaac491f4"],["/categories/JDK8/index.html","8f2523e626c7a20e997dffb7082c0635"],["/categories/Linux/VPN/index.html","b511abd81743359642e406d8b2202863"],["/categories/Linux/index.html","a228ad3c04ec0204a1295e2a07015dfb"],["/categories/Maven/index.html","433f32fbca594ab55540ec27c307b6b4"],["/categories/Maven/命令行/index.html","81890abe46a3533f8fc5402b9c75fd11"],["/categories/Maven/打包/index.html","e8541cb0abd528a29472629a0bcc14f3"],["/categories/Maven/插件/index.html","3c6e2db78d7df80cf74cc39684949c91"],["/categories/Mybaits/LocalDate/index.html","cf45f27c33dfe83175cfc7d5f230752c"],["/categories/Mybaits/index.html","165a06c3d29ac7a6e691e08e48ebee4a"],["/categories/Mybatis/index.html","bfb9c93d47e51f2fe56412c8e609b9a6"],["/categories/Mybatis/拦截器/index.html","14e059c7879ff5fc22fa22c57d743382"],["/categories/Mybatis/结果集/index.html","d72f939aba2e71bbd281be8dbc059450"],["/categories/SQL/Oracle/index.html","8b0d73d9cb82f7783143bab5e0b2fe4d"],["/categories/SQL/index.html","919dd9bd6d6dca2f90be9456348dcc8f"],["/categories/Spring-Boot/Java-8-Time/index.html","e1be2f7982e681f65acffa286cd28280"],["/categories/Spring-Boot/Junit/index.html","09322602600f0891854ea44ae2a9e419"],["/categories/Spring-Boot/Rest-Template/index.html","984d9fc6339462d6fbb5da80a54d328a"],["/categories/Spring-Boot/Unit-Test/index.html","00ffaa938101e3867aca195cfd66fd3a"],["/categories/Spring-Boot/WebFilter/index.html","4209395dfbddf5fff95c02de62f915a5"],["/categories/Spring-Boot/index.html","a9770f024aa4c9d7fb4f277d36e39e65"],["/categories/Spring-Boot/参数处理/index.html","3f215a08739fd5bc9d8dfb0a06aac99d"],["/categories/Spring-Boot/参数校验注解/index.html","96f0232f7b71dc5da802b12373d09d77"],["/categories/Spring-Boot/配置文件/index.html","0a492b1f23cc6f49029d0d8a9ac0465b"],["/categories/Spring/Feign/index.html","1bec94dace2a4ae627dca99f078e0396"],["/categories/Spring/index.html","252e07643f55899970bcb5c1e9e12fb4"],["/categories/Spring/参数校验/index.html","df33ff0dfdc1c8a27afc7e5687b6bf21"],["/categories/Typescript/index.html","c7968277f22e9f2968eb1a4a3563ca8b"],["/categories/Typescript/装饰器/index.html","0cffa7593b2cfcf222a2ca8e93c7b447"],["/categories/Vue3/index.html","77d845f274ae4c799a137d4f74b7fce6"],["/categories/Vue3/异常/index.html","d65994eeb03e109ee549dd7e90a6cd5e"],["/categories/index.html","bd071c585fed7c184b8a07a122991f84"],["/categories/maven/index.html","da539f3d29ad2fb0b4cdd90917579982"],["/categories/maven/聚合项目/index.html","5422887fc8479550abc97532231cea07"],["/categories/mybatis/index.html","349f9d2c118339000e9f1cb810d0974d"],["/categories/mybatis/xml/index.html","8bcf0bc5d410d29414d690c109f88f44"],["/categories/前端/Hexo/index.html","f687661c27150f8507ea5f652989e3cb"],["/categories/前端/index.html","245ab7c3ec83c58f7655ef117e1efc39"],["/categories/工具/Intellij-Plugin/index.html","5dd315c90f70f9b6733ecd408af11195"],["/categories/工具/Java/index.html","121303bcc97690baff51b5ab5989a18c"],["/categories/工具/index.html","7fbb74eb95e8e3f6abb4244c72297253"],["/categories/微服务/Spring-Cloud/index.html","3530413a4499a481d7f51179b950765e"],["/categories/微服务/dubbo/index.html","561839c0acc8f0e6511d0a0812708e94"],["/categories/微服务/index.html","0d7273b1e7fec420fecd28852bc0828d"],["/categories/数据库/Oracle/index.html","31a1ff94a58d5c8dd78f9102b63ff5a0"],["/categories/数据库/index.html","69aaeab72811187989a465b3e8ccc54f"],["/categories/版本控制/index.html","5e9b25ff31fcdf26bdaa144d3123b58b"],["/categories/版本控制/windows/index.html","fbbcc110484c4b39b9b5fc77d5ed888b"],["/categories/缓存/Redis/index.html","8f8020f0348325201c748319b0ba4c3b"],["/categories/缓存/index.html","da3edd2d7b8a2dc4bde4dfd4aa37c916"],["/categories/边缘技术/index.html","9a5af0a138b92d7bdb6c865da7534cde"],["/categories/边缘技术/前端/index.html","e76b799bd783f4496d044c1d0734e800"],["/css/first.css","847c31be45cd2c7cc1173834ba5f25d2"],["/css/style.css","0f1173bf9a74319b5d32457abe5fa992"],["/images/logos/128.png","dc6f740abff2ec660a63bf9c52c07713"],["/images/logos/144.png","d0c91faaea297cebff8e275b8e7804cf"],["/images/logos/192.png","54651b2b249fe6c1c73a6bef9f56faae"],["/images/logos/48.png","a39e72af0c79fe9a661ebbe2b9457908"],["/images/logos/512.png","633b87edad402d2c3578e1220d5f5b3a"],["/images/logos/96.png","26d31321cd5ca277afd002385a00e043"],["/images/logos/apple-touch-icon.png","08fc59a99b6637db9eb7d392de7c0eab"],["/images/swipper/1.jpg","15e94dc0045cbed50543e9a586cafaea"],["/index.html","6bb3babc93610c985a9373e9c5dedeca"],["/js/aplayer.js","d4020b04d968aaf22ae2ea76803f7052"],["/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["/js/issues.js","313bd45ccc98c5c4982dbc3b07ab1a16"],["/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/js/search/algolia.js","94be3d4b1886bf8fff70161adf98c2e4"],["/js/search/azure.js","b17ba3ea67fbd51f1fd528db3dd0d723"],["/js/search/baidu.js","10aa3921e897dc10868694addbdf18e6"],["/js/search/google.js","28dfd18e2728ab710a2ad3626b8ece61"],["/js/search/hexo.js","f683a9720289b030cd991cf7fb345e63"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/page/2/index.html","5ec30edeee07b624071679413dac2c38"],["/page/3/index.html","c1e342014f798344aeddb7fe3a7fe7a5"],["/page/4/index.html","108de033185feadac494ad27908f7cbf"],["/page/5/index.html","4c64f3bff60bc62ec8faa526f42ed35b"],["/page/6/index.html","627462218b233aaa5554fc80ec2ef7c8"],["/page/7/index.html","075309115004cb11353435b4bc38ec28"],["/sw-register.js","b6d6d90187e5d47dba0b8ee8732894cf"],["/tags/Blog/index.html","5845847be6be1d7e3e13803fb72dbe01"],["/tags/Bootstrap/index.html","b086efa47bec347a695b8b1797279978"],["/tags/Centos/index.html","fcdb38497feeea7f06399708431536de"],["/tags/Config/index.html","17f354d1f389e9b807e52a1e8f55db8b"],["/tags/Configuration/index.html","24cfce253fab7adee979cd1a8e0ae731"],["/tags/Deploy/index.html","72fcce3c750cfa5e2db99adbc15ff01b"],["/tags/Feign/index.html","18d18da50f80814d507218e00e4d1c67"],["/tags/Github-Pages/index.html","1ae09edee768b121bc116b709eff9d1e"],["/tags/HTTP/index.html","3a2976e7cbcc2b761c98bdfadfee26f6"],["/tags/Hexo/index.html","ecc71db0acd37fcc3274af626519563f"],["/tags/Hibernate-Validator/index.html","37dc221bc020617bf7d7ebf017534064"],["/tags/Http-请求/index.html","273a391895d8fc46819e02edb8caa9bf"],["/tags/Idea/index.html","a2baa2432641582905669f063a3e7423"],["/tags/Install/index.html","48e165dacc0e52d65a24bc9f01647f0b"],["/tags/Intellij-Idea/index.html","46aebcbf91ccfbb08113183ce1e0c845"],["/tags/Intellij-Plugin/index.html","91176d9a3181eae190dc0c92d16bb5b9"],["/tags/JDK8/index.html","0f20502ee36807c6cec810dd43aecdb9"],["/tags/JSON/index.html","f8d09616e3339c27b30f7b103e9a425c"],["/tags/JSR-303/index.html","1ffe8fd81199e175cfe222e4fffc7ddb"],["/tags/JSR310/index.html","7ad4c8140e7e5ac4ff8baee1747a252d"],["/tags/Jar-冲突/index.html","7669220c1689804b6b451b0460e380ab"],["/tags/Java-8-Time/index.html","bb45d7e515286f610351c6d3fb5d9526"],["/tags/Java-8/index.html","5c54b381ebeaa38f1351eca311b23c5c"],["/tags/Java/index.html","b127160b705b5e7547c5a6fe1ab2fcab"],["/tags/Javascript/index.html","8416a03cdda38ef5d0cce17612dc5c3e"],["/tags/JetCache/index.html","6170d207cc64f6358e714aeeb10f1d8a"],["/tags/Junit/index.html","42f60534015ddecb2081bf0f849b170a"],["/tags/Lib/index.html","2871d2e067afc30e0c40819046cf52d9"],["/tags/Linux/index.html","d332e75cfb685626a7f7a0f0002e1b53"],["/tags/LocalDate/index.html","c7f4fe16fa61e91cb83e16fcc18ba1ef"],["/tags/Lombok/index.html","5751f3c123203d5b0b365d19099f1a77"],["/tags/MVC/index.html","869831737232552deaa9ada9ddb189cb"],["/tags/Maven/index.html","dcde8c02fbf6ff54d484210f84e846ec"],["/tags/Mock/index.html","32892cb9c6c9e3067f1f62f6e8187d0e"],["/tags/MockMvc/index.html","0faf35a262c47599de5bba8ac1d0c582"],["/tags/Mybatis/index.html","7504f4a307666ca5e33a3953c2e8f220"],["/tags/OpenConnect/index.html","b659d8088368f2efc1b7a05848915c85"],["/tags/Oracle/index.html","88c221fe75a2ea6363de7a771a303cd5"],["/tags/Rest-Template/index.html","eebb5398588953a3e48be47126d51d1d"],["/tags/Restful/index.html","259f295575f669542aa4cd459b11a9e2"],["/tags/ResultMap/index.html","9b48406b73c63cd762e7a1bebe0dbaab"],["/tags/SQL/index.html","686d5d4c6bb2fa3116ab5bddbebf14a0"],["/tags/Spring-Boot/index.html","b3c6703b24bf950da036b71dd7e67933"],["/tags/Spring-Cloud/index.html","14d4e1210b6ae524d9787f9e89a06c5a"],["/tags/Spring/index.html","350788031c0b45975ff465d5c4cde15c"],["/tags/Tag/index.html","e82336fc12520dc9f5e3800c0ad74dc6"],["/tags/Time/index.html","7cdc059a917243d0a734bff4ea574f0b"],["/tags/Typescript/index.html","95ff798713887638cb908a9c9eff5338"],["/tags/Uniapp/index.html","f99a458966f28cfbde7fbe7c7fb21fcc"],["/tags/Unit-Test/index.html","56b5f4c657d676dd0f6708ccecd884d7"],["/tags/VPN/index.html","2d495d8c46f98bcb80f7b0efd274c1c2"],["/tags/Vue3/index.html","edb19b8c8f524e721b0997dbebb4c56b"],["/tags/WebFilter/index.html","e80d734db410878c3d29f9c569c5f83c"],["/tags/XML/index.html","e3c1772ad1805bf2c45708314b0ada64"],["/tags/async-setup/index.html","eb024bf5f5d4fcf40a867b5788e55ba3"],["/tags/blog/index.html","10859581afcee6de92247beb6b65236a"],["/tags/dubbo/index.html","8053f6942e8889884dd29abaa61953d8"],["/tags/excerpt/index.html","89051dd3ffc4a450fc979ee10c2e3356"],["/tags/git/index.html","81b53f344f3e3c88473c5168946bc0e0"],["/tags/hexo/index.html","b97c0759e44a7d0c1b07c656afa74b1c"],["/tags/index.html","38fe9f95fbd0f5c74f0d017595b1cf24"],["/tags/insert/index.html","9fefb87e69f821ac12e0d23b38193b22"],["/tags/java/index.html","d9ee77596e9d90c729debc905d3e0fbe"],["/tags/maven/index.html","ae7af873f9d991ae6ec7c2667b5ecc1c"],["/tags/mybatis/index.html","042b1dc1d3e2f9f02d4502863f569c9d"],["/tags/oracle/index.html","c3f615cf902499a9d3acbb24e0e095f3"],["/tags/plugin/index.html","93b486ab4a2cee61924ae666b91ef3e0"],["/tags/springboot/index.html","b985755f97d17bb445bbfdefff61a400"],["/tags/sql/index.html","700fc1ba2fbcdeeb060855f3542e4ad2"],["/tags/swing/index.html","8849652b08f256e6d4b56f02ca332a5f"],["/tags/urlPatterns/index.html","ec7b9bf83bb27e819c1a38bd48eb3b74"],["/tags/version/index.html","9f70f97fc62056f6142b46e34f7dfbdf"],["/tags/windows/index.html","d57a9a44b1a495b589d625cd855edebd"],["/tags/xml/index.html","6e028c1e21b016810204fd7c094ef0fa"],["/tags/主键/index.html","5e51cde0e80bb4bb5ad396941f786d75"],["/tags/乱码/index.html","af254489ee90a5ac89fa7f8b8d581f1f"],["/tags/使用/index.html","4a80f9acbc60cd8c0082b6a81f9c0a87"],["/tags/参数处理/index.html","d6162bcd5cf6a343136566f7467e2989"],["/tags/参数校验/index.html","4d69c3d9e59be269f960528b3b26b6e8"],["/tags/发版/index.html","e3607cb1becaa6db27ce18e43633cacf"],["/tags/命令行/index.html","bf9459b0068a800c25c7b226624fc6b3"],["/tags/外部依赖/index.html","5e0dd545f9081c4d3f946427299c6209"],["/tags/多版本/index.html","e0a6814e841cf0e55a8c29c130a16ce0"],["/tags/多环境/index.html","97b20122a3ef7a49771fe2e875f02f60"],["/tags/多级缓存/index.html","f2be077c059aac55450bbc739d27628f"],["/tags/多行/index.html","ff2b6fc34718dcc17fa47462a29fecf4"],["/tags/属性失效/index.html","b014336707e4837a000b7fd347aea59a"],["/tags/工具/index.html","c485b5381a2bd63cc8460b39e5336ad6"],["/tags/异常/index.html","6a24f4bd9abf9e8818b6caea79ae3c85"],["/tags/异常分析/index.html","d12ba938fdd87935a28a73e7da30e9cf"],["/tags/微服务/index.html","ff349d3b290068737ac3e2ba28b76b41"],["/tags/拓展/index.html","7ddd06898afcf7805280db992d59d8dd"],["/tags/拦截器/index.html","b3ae97f0059dce58fb7c82a3aa00a5c1"],["/tags/插件/index.html","cf8c87491835d445e5052a2f3d89685d"],["/tags/日期格式化/index.html","38c8066fa7c415a3c30f3aab897d4798"],["/tags/注解/index.html","cce0eebe0f713030ee83e4bae6735e0c"],["/tags/版本更新/index.html","54fff9bacab1b16e3c424f8ec26d5cf1"],["/tags/结果集/index.html","8de212ae2f767f2c5499d4d10f035e5d"],["/tags/聚合项目/index.html","928ba4d2ec07a8c8f81a26ecd32a3e53"],["/tags/脚本/index.html","e3f4a78f473726330f57fec52778780d"],["/tags/自动部署/index.html","cae78181675625a331bd5ca9785e5bb9"],["/tags/自定义/index.html","07e971185dd8ffce7dc9f857e101a5d2"],["/tags/装饰器/index.html","966b284b7a17115ea65bf9b0a1176120"],["/tags/语雀/index.html","2d1e4f1df590ed9d48e1106afe9cc9de"],["/tags/语雀编辑器/index.html","ddce4b60b5e5ced7143656cc17e475f0"],["/tags/踩坑日记/index.html","341a0ee9353cfea41b6622a4ea67311e"],["/tags/运维/index.html","1313b8452600d8d4fcdf8e5c468d9d65"],["/tags/配置中心/index.html","bd3f33b04438f9a9c84d903e109cab19"],["/tags/配置文件/index.html","41750b25ff8dafb4ef25ff0a23781aee"]];
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
