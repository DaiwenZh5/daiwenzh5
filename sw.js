/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/12/17/yuque/Nginx 转发接口导致超时解决方案/index.html","be1f7aa5445117538a60c1511f2d6be0"],["/2019/12/18/yuque/Async 注解 - 异步调用测试/index.html","518278672090cdba6db3dd99c39d9b36"],["/2019/12/18/yuque/学习计划/index.html","6a139e92756cf04341b4d5e46265daec"],["/2019/12/18/yuque/读书笔记/index.html","788bbb398b8d67d9265252c246cd3862"],["/2019/12/19/yuque/Spring 自定义线程池/index.html","458b90b942d50a453c7d8e15f5980af9"],["/2019/12/20/yuque/Spring 服务端推送（SSE）/index.html","d8e1f3fd39fbf3bad325d929c72fcedb"],["/2019/12/23/yuque/Mybatis 插入 DATE 只有年月日/index.html","b4dc7d87ef81fe21549b430fd76a20a6"],["/2019/12/25/yuque/Notepad ++ 配置 nginx.conf 语法高亮/index.html","fbc9489f40a0bd970635c6a50a1417a1"],["/2019/12/26/yuque/Spring boot maven plugin 使用说明/index.html","28ef39fa568de9eed3466f350d58ee56"],["/2019/12/26/yuque/打包失败：找不到符号/index.html","0904836dab82bdf02b4bc54fc329b64a"],["/2019/12/27/yuque/Idea 启动报错：命令行太长/index.html","e099667b574828b51730e88e82ef70fe"],["/2019/12/29/yuque/Springboot 整合 Mybatis/index.html","369071b6d58daa86daf99da6624c4ad8"],["/2020/01/03/yuque/Spring 注入 bean 失败/index.html","fa65d5f246ce2e0463c29ef2bfedcc38"],["/2020/01/05/yuque/PageHelper 分页结果类型转换/index.html","6a5d7f0c7c66043e2c272059aa4046ed"],["/2020/01/20/yuque/Git 配置多账户/index.html","052d1fd08904c02f3f3067d2e4280fdc"],["/2020/02/05/yuque/Spring Aop 插件式开发/index.html","8910854c98360e5d13c685c25abf7ddb"],["/2020/02/06/yuque/自定义类加载器/index.html","360f1e5691205a2965bbf80d34141e92"],["/2020/02/12/yuque/自定义 JDK 锁/index.html","fec0092213c98fec5708e0b5a9221960"],["/2020/02/21/yuque/进程管理/index.html","3f4716e79f1d17ba3fac2e8c2c85d5d6"],["/2020/03/24/yuque/插件式注解/index.html","f7e4fea65d14b64da26e478691f944ee"],["/2020/04/07/yuque/Vue Ts 中使用 axios/index.html","08fe1e374f226b0b06940406599e4b9e"],["/2020/04/09/yuque/Spring 项目打包后运行报错/index.html","5d706e452d50847b96073da31b0ae5b6"],["/2020/04/10/yuque/Maven 多环境打包/index.html","a6bb1b27a96b9e57ef17afc7014d5e74"],["/2020/04/14/yuque/🐘 统一返回对象/index.html","e53b357b3179cf4ab20c004b26801c12"],["/2020/04/15/yuque/MongoDB 使用记录/index.html","309fc574ce6af1addbc3850e4350c084"],["/2020/04/23/yuque/📑 统一日志记录/index.html","0176d77e4278ad2920156cf6b5f088e7"],["/2020/04/23/yuque/🕷 统一异常处理/index.html","85b76302249d3b7ae6eefc1a325226c9"],["/2020/04/30/yuque/RestTemplate 使用/index.html","d50b5d85ed6254559b9d8c5dca5486b4"],["/2020/05/11/yuque/Hexo 博客搭建/index.html","01d38256cb0ba4a14f59b2fe9e514547"],["/2020/06/01/yuque/git remote fail/index.html","58e8ac9c57063d3810ca791d4bd1647e"],["/2020/06/08/yuque/Hexo 自动提取摘要/index.html","b5298f40e58158851c9dc553e30486a3"],["/2020/06/17/yuque/Oracle 误删数据恢复/index.html","cd38d2f02d59b57e4077b9dfd6cfa5bd"],["/2020/07/23/yuque/MapStruct 未生效/index.html","a68c0fb4108a11cc796c08ca917f2a15"],["/2020/08/13/yuque/装饰器/index.html","b4f0c6d5cdb986fbcaa4f73b560ab7a0"],["/2020/08/14/yuque/页面加载优化/index.html","c555cd1fa098ff524105924ec0ce0532"],["/2020/08/26/yuque/消费者/index.html","48747abe8d84108e3dd54bccfece6769"],["/2020/10/22/yuque/HttpMediaTypeNotAcceptableException/index.html","e19bd0480203be3b71d705ce652659c8"],["/2020/11/18/yuque/多字段联合校验/index.html","0b32b0fd39c480fd9617829ecb47ce6f"],["/2020/11/27/yuque/Mybatis XML 新增异常/index.html","2f46902f06515d940a06605f4e52be85"],["/2020/12/03/yuque/聚合项目版本号管理/index.html","19945f31d17a392d5143e02b250eae00"],["/2020/12/04/yuque/自动发行插件/index.html","482e20ea3ed8a3aa9f84bc9c0bb0b012"],["/2020/12/07/yuque/结果集拦截器/index.html","caf5987d5d1c0626291e86182a0b815f"],["/2020/12/20/yuque/AnAction/index.html","dedc8bd09806b1d0408f47103ddbeb3d"],["/2020/12/27/yuque/Cloud Toolkit/index.html","9665c102ef25729240a9568e752e7846"],["/2021/01/02/yuque/OpenConnect Client 使用/index.html","fe6a8a5706f1201cf5dc599587f9e2a9"],["/2021/02/06/yuque/发布到私有仓库/index.html","358a52e1b3c19f3a3b5e44a734e59f21"],["/2021/02/07/yuque/LocalDate 解析年月字符串/index.html","0b4ea755df98ee196c4880a36aca2de0"],["/2021/03/21/yuque/打包外部依赖/index.html","e49bbf50a17d3e400db921c02dad4ff8"],["/2021/03/22/yuque/实现 Jar 多版本共存/index.html","52020d4e9ca94c252d1feb19697915a9"],["/404.html","0e4b5d3f8e3a550358d824f62cde70c0"],["/archives/2019/12/index.html","0f40311d1316c1b7fe99f72ea82f62fa"],["/archives/2019/12/page/2/index.html","684d15a4f461fbf5abea7b8b14c61d32"],["/archives/2019/index.html","8c6d8a0c6214cd063c3bfc3f2de33271"],["/archives/2019/page/2/index.html","95cf8ee5aaae9a2fc29a7e68d958cf9f"],["/archives/2020/01/index.html","a5e6f10c4d754e0850a4e7bc7853e732"],["/archives/2020/02/index.html","8eded8c1a120edad85aff641b60a408e"],["/archives/2020/03/index.html","0d89000f81aefbceb0e9c80e15a3b2c3"],["/archives/2020/04/index.html","84a681afff32efa348da3af678fe2f30"],["/archives/2020/05/index.html","cf9376a1822d4c9237ceef62a29d2510"],["/archives/2020/06/index.html","97e7ded90e55b571c7ba42bb62d70dc9"],["/archives/2020/07/index.html","7041a528349f615e90eb78d3c18dbc23"],["/archives/2020/08/index.html","61bb5deccc07cfd09328ebbdfd184d59"],["/archives/2020/10/index.html","ed3e2e8112c0877ee58d2ab143d14cae"],["/archives/2020/11/index.html","1e2a89b433f641456eb3101bf02080d7"],["/archives/2020/12/index.html","4dad1a849f4fb829b15b965734b66fda"],["/archives/2020/index.html","63bf0c03e016c83eb3e3ad654bc580eb"],["/archives/2020/page/2/index.html","5b91bb550c09b8dfd86eeae8768eede1"],["/archives/2020/page/3/index.html","b3eae7fb785308a835afc766b618d805"],["/archives/2020/page/4/index.html","a578e0cb46f41dc4efeffc6085606d23"],["/archives/2021/01/index.html","926e3d521fbc4a6507b2af9135a9aa35"],["/archives/2021/02/index.html","a128d54fef13044bf80bd59e7a8d41e2"],["/archives/2021/03/index.html","4f6d46d88ee89a63aeb70a5f7af12821"],["/archives/2021/index.html","89eb0cab8102a1982391745033c02c9c"],["/archives/index.html","0a512e85e83f63b4b963a04fc1bcb5b2"],["/archives/page/2/index.html","0a512e85e83f63b4b963a04fc1bcb5b2"],["/archives/page/3/index.html","0a512e85e83f63b4b963a04fc1bcb5b2"],["/archives/page/4/index.html","0a512e85e83f63b4b963a04fc1bcb5b2"],["/archives/page/5/index.html","0a512e85e83f63b4b963a04fc1bcb5b2"],["/categories/Intellij-Idea/index.html","05eff9e16ba4091cfddf58294ca2e6a2"],["/categories/Intellij-Idea/plugin/index.html","b6989565576f863fc979b061cb69899b"],["/categories/JDK8/Time/index.html","afebcc097dc6ece37370e2b06dfa9d87"],["/categories/JDK8/index.html","ab01821b6fc1a0c6be46ddc103fabf5f"],["/categories/Linux/VPN/index.html","48ceea18a3cb21b7a5f90c9160727eb7"],["/categories/Linux/index.html","60dda5fd3101992f765ecef0a368ee4a"],["/categories/Maven/index.html","6188f3d15b1de216432daa28ed2bd961"],["/categories/Maven/命令行/index.html","d2ab514c8f2b7b3c1c2e4f3e41f2a2b5"],["/categories/Maven/打包/index.html","f3fb34fba471750e93c8a023e2c238da"],["/categories/Maven/插件/index.html","8718b4a6ae32b9922308bffb90ea4bcb"],["/categories/Mybatis/index.html","32152696054956b25ebf5a8612b34822"],["/categories/Mybatis/拦截器/index.html","99878ad8d1097bbf802e9f48703b8a3d"],["/categories/Typescript/index.html","b06f27c7377f43dc81db0fcf1db4181b"],["/categories/Typescript/装饰器/index.html","672f964959f5b75a3dd500f48aedb23a"],["/categories/index.html","13bd4d005029317aa7062d7755859a1a"],["/categories/maven/index.html","268bd4bf7dd655edba8592c5fb53a58b"],["/categories/maven/聚合项目/index.html","8d4ed49d8e60ce4652871c96af7e638d"],["/categories/mybatis/index.html","edca7ab2a2d907e98a800e1b59eceaf3"],["/categories/mybatis/xml/index.html","21d26bdb2fe03510d498f25a3f4ea914"],["/categories/前端/Hexo/index.html","4645fedb09b9d385a75b3430422abbfb"],["/categories/前端/index.html","b91de6d437203b94bba3314a6b2cc5b4"],["/categories/工具/Intellij-Plugin/index.html","c4ffd4e07c04e5fdd3198763557e5f4d"],["/categories/工具/Java/index.html","915d2c6fc5efbaba724f18929fc1c7d6"],["/categories/工具/index.html","f2bb32b59ce2304fa96e330721cc6e2d"],["/categories/微服务/dubbo/index.html","6349848dee6e367eeacb9cfa5a265b34"],["/categories/微服务/index.html","af4c40c6010f60b0a8c30f81b34ffaf9"],["/categories/数据库/Oracle/index.html","a545ed92f59d9885bf84f336b0addd2e"],["/categories/数据库/index.html","03d2b11f4158a81501784abc32ccec05"],["/categories/版本控制/index.html","8718ecd055dcdcffec2108d2965ab82e"],["/categories/版本控制/windows/index.html","ba7d5b00aa14912a5508cbb32b1dc6fb"],["/categories/边缘技术/index.html","bfac8d25e25fccdb779391437578aef7"],["/categories/边缘技术/前端/index.html","322d856d681b5b88d692c3926ce1eed4"],["/css/first.css","847c31be45cd2c7cc1173834ba5f25d2"],["/css/style.css","0f1173bf9a74319b5d32457abe5fa992"],["/images/logos/128.png","dc6f740abff2ec660a63bf9c52c07713"],["/images/logos/144.png","d0c91faaea297cebff8e275b8e7804cf"],["/images/logos/192.png","54651b2b249fe6c1c73a6bef9f56faae"],["/images/logos/48.png","a39e72af0c79fe9a661ebbe2b9457908"],["/images/logos/512.png","633b87edad402d2c3578e1220d5f5b3a"],["/images/logos/96.png","26d31321cd5ca277afd002385a00e043"],["/images/logos/apple-touch-icon.png","08fc59a99b6637db9eb7d392de7c0eab"],["/images/swipper/1.jpg","15e94dc0045cbed50543e9a586cafaea"],["/index.html","1ea877e71c12a003f475a233c563758c"],["/js/aplayer.js","d4020b04d968aaf22ae2ea76803f7052"],["/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["/js/issues.js","313bd45ccc98c5c4982dbc3b07ab1a16"],["/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/js/search/algolia.js","94be3d4b1886bf8fff70161adf98c2e4"],["/js/search/azure.js","b17ba3ea67fbd51f1fd528db3dd0d723"],["/js/search/baidu.js","10aa3921e897dc10868694addbdf18e6"],["/js/search/google.js","28dfd18e2728ab710a2ad3626b8ece61"],["/js/search/hexo.js","f683a9720289b030cd991cf7fb345e63"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/page/2/index.html","e7079b8896141f921b27645a82982131"],["/page/3/index.html","e2b6f551b093ff9f2aac76f0152a5acc"],["/page/4/index.html","ac4de2a1433049a175c839b348396fbc"],["/page/5/index.html","160fd2074501fd1b7d39264a9349b9cf"],["/sw-register.js","de7bbd1c340c3f064a78ed53cc1ebb0b"],["/tags/Blog/index.html","776467119b88bb42a064a8fca92192e6"],["/tags/Centos/index.html","5d000d7c26e45bc27f619cc8e95f1a68"],["/tags/Deploy/index.html","7e1968394f16c55b1545fb58c5c475d9"],["/tags/Github-Pages/index.html","4d299c96a8452e8bc3b430e6b0dd5a59"],["/tags/Hexo/index.html","2b976058e28c89a9e7a64a87b4de7c4a"],["/tags/Idea/index.html","cff590ead6f0e4f7b617936ecce90202"],["/tags/Install/index.html","104dc23adbd485735cb307632f4b3efe"],["/tags/Intellij-Idea/index.html","134c0584a4ea1031c4a56b9a3d50a857"],["/tags/Intellij-Plugin/index.html","eb716bffd1059f6da437b6f3c9483a4e"],["/tags/JDK8/index.html","06a54ac29bf65112891ad2dc74f3acc3"],["/tags/Jar-冲突/index.html","0f14bf11a00c0db41d6d9218d06bf56e"],["/tags/Java/index.html","159ef46622065c3c66ff8a07575af51b"],["/tags/Javascript/index.html","0347e6f8252d2eab6d200e223dcf80ea"],["/tags/Lib/index.html","e3a4bb9e34733c6ea4e26c198bf0c6f4"],["/tags/Linux/index.html","be9e1b1ae2e8d347517d81e285618012"],["/tags/LocalDate/index.html","144790d6eb2f764185682f9582294438"],["/tags/Maven/index.html","70ebda068ffbe0724b756ff7c4e5f2df"],["/tags/OpenConnect/index.html","cceb1872447b98cadbb59ee9e57892bb"],["/tags/ResultMap/index.html","ee28366e2ee58c0320f82840ef88e65f"],["/tags/Tag/index.html","19d85a93bf77641456fb411866fc0561"],["/tags/Time/index.html","0d8e565bbf9bc75748b2ed67e1d788c0"],["/tags/Typescript/index.html","1079b91998f42c2b614b5ac431e7fb05"],["/tags/VPN/index.html","edbf22b14f469e08976e851f04f07448"],["/tags/blog/index.html","c8c7e1a63673811d29b7c4b0c809231e"],["/tags/dubbo/index.html","555b450f116ae7380e2ef6286bb9a08b"],["/tags/excerpt/index.html","650b1990e13573d36a372a80c082ec94"],["/tags/git/index.html","bf4e4da761ef34950b4562cb96860f5c"],["/tags/hexo/index.html","3d0f6c21a04399992c0e9012e8280344"],["/tags/index.html","c5a7ef3ee1b8c4c2358beb62d821e800"],["/tags/insert/index.html","03a844a88d9c5f1ab641125f0a7a0609"],["/tags/java/index.html","f72027715002b3ac2c55ec5aaed485a7"],["/tags/maven/index.html","a0cc8f070ff7c49531bd39de6e34cdec"],["/tags/mybatis/index.html","670b6513925d23ff99cfcc189cc19690"],["/tags/oracle/index.html","5ac82e00379052c5c9c9fe8ee5ecfd50"],["/tags/plugin/index.html","40df13a2793fd187642df81ce45ffc8a"],["/tags/springboot/index.html","a909384ec803574954afd1b5d4ccd706"],["/tags/sql/index.html","7b2965e4a2fea752075205ca47c64127"],["/tags/swing/index.html","bdb73ed57b148cf68dc3f109cc174de0"],["/tags/version/index.html","cf871e51111d0486dff8f0da6f46091a"],["/tags/windows/index.html","df8c0cf79713ad696ff30a5b0a883238"],["/tags/xml/index.html","d2f3d8574b39066640b88e6ace6c95c7"],["/tags/主键/index.html","9a9d17bdeae3ff3422e9d9cc428816d4"],["/tags/发版/index.html","d158e709adcbe7bcf5309cbd2aa83ca1"],["/tags/命令行/index.html","3092eed1851c5420afe4b57aeef5e014"],["/tags/外部依赖/index.html","51eaed33dc42e9e30c41be9ddf4741ce"],["/tags/多版本/index.html","94103f1651bc2de30f45156c258c6871"],["/tags/多环境/index.html","86f6fd1db9048d0bda690497b9ede309"],["/tags/工具/index.html","a9b2c282e92d968d07c91e38d83e20e7"],["/tags/拦截器/index.html","1ccb8746f4785297c85b1adf6d2b9947"],["/tags/插件/index.html","deeba0cdcc2052e3f7935f553260ae16"],["/tags/日期格式化/index.html","72d66acf39ca221f6bccfc5e631fae05"],["/tags/注解/index.html","b0e656366ba531eff75510685d60e68b"],["/tags/版本更新/index.html","ff111ea5affd6b6822644aede5f7c376"],["/tags/结果集处理/index.html","2e3774246c8fa4db41eab48534d30069"],["/tags/聚合项目/index.html","4f79f8262ac434298646be940337d3f5"],["/tags/自动部署/index.html","28d3e72fff6aedf49a4d0b7c1f3bd4ed"],["/tags/装饰器/index.html","8b142849746e60ade23e9744fb22cffa"],["/tags/语雀/index.html","a4f61da086423141f44a97e06c044001"],["/tags/语雀编辑器/index.html","b304e252ec0fb227578062afcc0f26eb"],["/tags/踩坑日记/index.html","9f68e150898070909d65e3c95801d7d7"],["/tags/运维/index.html","1b3681236dc5e1d68299a52ad0d78983"]];
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
