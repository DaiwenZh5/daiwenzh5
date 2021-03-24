/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/12/17/yuque/Nginx 转发接口导致超时解决方案/index.html","6605e75ccaef68fd3e4b9239edbf6227"],["/2019/12/18/yuque/Async 注解 - 异步调用测试/index.html","a054e31b11c55b38f9a71b6f04a615e1"],["/2019/12/18/yuque/学习计划/index.html","49f9919082739f63c7026b34d9a0fa32"],["/2019/12/18/yuque/读书笔记/index.html","1dd44563e85808fc41846903586239b7"],["/2019/12/19/yuque/Spring 自定义线程池/index.html","48d97f5801ee556af70bd5cb13445265"],["/2019/12/20/yuque/Spring 服务端推送（SSE）/index.html","199448a2c15d2b7cc2934fb2fd79c2d8"],["/2019/12/23/yuque/Mybatis 插入 DATE 只有年月日/index.html","9ad6e4c2af498c2b62ccba98faa15fa6"],["/2019/12/25/yuque/Notepad ++ 配置 nginx.conf 语法高亮/index.html","5ad3fffc118f2ce4c2fadcfd836c90e2"],["/2019/12/26/yuque/Spring boot maven plugin 使用说明/index.html","a9310675fd016653fad708078c4e1a6c"],["/2019/12/26/yuque/打包失败：找不到符号/index.html","7577f8babf757cb1f9d45455225c2029"],["/2019/12/27/yuque/Idea 启动报错：命令行太长/index.html","e2c7539e2a4e5357a203b292b738b6d1"],["/2019/12/29/yuque/Springboot 整合 Mybatis/index.html","90c72c0eb58ebddc1f06366d9cdd97bf"],["/2020/01/03/yuque/Spring 注入 bean 失败/index.html","513bf13f1f9d06cbe26d50e267e7fa36"],["/2020/01/05/yuque/PageHelper 分页结果类型转换/index.html","89483c3828931eaf7ac8569e7235210c"],["/2020/01/20/yuque/Git 配置多账户/index.html","0c0d69a3a313afa1522c6cd970666133"],["/2020/02/05/yuque/Spring Aop 插件式开发/index.html","cea39e95f76d54321804743d35e6e715"],["/2020/02/06/yuque/自定义类加载器/index.html","002b71b0d6e1c5bb5d9cceba417f6f76"],["/2020/02/12/yuque/自定义 JDK 锁/index.html","2911f13e1c22028d5e00b3d00447f543"],["/2020/02/21/yuque/进程管理/index.html","269649456b2a0521023ac2b5a47351a3"],["/2020/03/24/yuque/插件式注解/index.html","f818f0a466d1d167ba7df3991115dc19"],["/2020/04/07/yuque/Vue Ts 中使用 axios/index.html","53e3ed8c3a33c4e6b56110373f36a7db"],["/2020/04/09/yuque/Spring 项目打包后运行报错/index.html","71830d26bacdc1ea0e1f2fe0c6ac82f1"],["/2020/04/10/yuque/Maven 多环境打包/index.html","46820a99abb5cbe951e699e215823b0a"],["/2020/04/14/yuque/🐘 统一返回对象/index.html","cf0e3b13716cb5688da82a877c057fc1"],["/2020/04/15/yuque/MongoDB 使用记录/index.html","9cfd9d44f3911f22e25989821fea0d47"],["/2020/04/23/yuque/📑 统一日志记录/index.html","64c9c141fc1a0677c9889d2ec0cdcf90"],["/2020/04/23/yuque/🕷 统一异常处理/index.html","2ffe51588d5bf22d8e6dad18ade4c17f"],["/2020/04/30/yuque/RestTemplate 使用/index.html","2c50fef51ff039ceb307f3e9d44d9dee"],["/2020/05/11/yuque/Hexo 博客搭建/index.html","4ed4b4852c016f45cd0b5f4451f48196"],["/2020/06/01/yuque/git remote fail/index.html","ffb04ef47d3476760434829a7308a288"],["/2020/06/08/yuque/Hexo 自动提取摘要/index.html","704538ddd8ba074e88e3188f1d114f9d"],["/2020/06/17/yuque/Oracle 误删数据恢复/index.html","f173b7752a8bc7eb65aab94186810e30"],["/2020/07/23/yuque/MapStruct 未生效/index.html","9124538a305578dde8662921bc9d5937"],["/2020/08/13/yuque/装饰器/index.html","6e1a430cf81a60fe6e7de61e4d0b4716"],["/2020/08/14/yuque/页面加载优化/index.html","04cd3f6015c2cd063ad37a9cb7ac3a0c"],["/2020/08/26/yuque/消费者/index.html","3ce3ac58f310f0c3af846534af2b48d8"],["/2020/10/22/yuque/HttpMediaTypeNotAcceptableException/index.html","fe3ad90d6529fdd21a84d739836781c7"],["/2020/11/18/yuque/多字段联合校验/index.html","400b7fc1fca606c3265f98527dfc9aef"],["/2020/11/27/yuque/Mybatis XML 新增异常/index.html","f75189a83e9ce821c34b096b70f55056"],["/2020/12/03/yuque/聚合项目版本号管理/index.html","616013dec52cb222d9803496747d532f"],["/2020/12/04/yuque/自动发行插件/index.html","9e2aef1bd9716ffc32c04d1bff4617e0"],["/2020/12/07/yuque/结果集拦截器/index.html","392554849479676cfec8bfe518f22511"],["/2020/12/20/yuque/AnAction/index.html","60112f69dbf5fdec412f091aeec9cb1a"],["/2020/12/27/yuque/Cloud Toolkit/index.html","b0327da94a45866a5cda7e134871a9f1"],["/2021/01/02/yuque/OpenConnect Client 使用/index.html","980aef98b11bdc8f2e785f842bf1ca3c"],["/2021/02/06/yuque/发布到私有仓库/index.html","fd4cec40555458dd4f8d5cc030239856"],["/2021/02/07/yuque/LocalDate 解析年月字符串/index.html","1de420e383e63fc401476736dcd26c70"],["/2021/03/21/yuque/打包外部依赖/index.html","ff13ef5f4171fb22546d32249175578b"],["/2021/03/22/yuque/实现 Jar 多版本共存/index.html","7c58ef9eaa41fa71a46f001d1eb3355d"],["/404.html","4ef8cb09a4af06aefe412e54010584db"],["/archives/2019/12/index.html","b7ed9c687902c88ba8527844c54829de"],["/archives/2019/12/page/2/index.html","69c5dbe94137c9fa1ef3b5a27b69500d"],["/archives/2019/index.html","81d695b65ef99cfd0a2393c4754aeab9"],["/archives/2019/page/2/index.html","95dfe3b3c553dda2e40ba9f4b929f46e"],["/archives/2020/01/index.html","43aa5f345b95f7e37f3dacc9f4229030"],["/archives/2020/02/index.html","5ae7f0bc46a0e9e19bcc57d76b17b27a"],["/archives/2020/03/index.html","44ebbdb696e929beeda9a9e77eb6011b"],["/archives/2020/04/index.html","3cf80f08395f3b17b85e496814e47a14"],["/archives/2020/05/index.html","57fbc9e3fcc9988c0c447a25e05356ca"],["/archives/2020/06/index.html","8a72cf67160600849fe5d101f75b4312"],["/archives/2020/07/index.html","49ec3932800952ec051f25a1dd7a0a62"],["/archives/2020/08/index.html","c2b9c39f9e5485429111bb392382ebaa"],["/archives/2020/10/index.html","28715938223857a25d795cda208fcdf4"],["/archives/2020/11/index.html","9fe61b55231c29dda9b7fcb952870d21"],["/archives/2020/12/index.html","57bafeb5de77abecba0f6a3b74cc5ef2"],["/archives/2020/index.html","8200572a44d83929fab77cee9af198e6"],["/archives/2020/page/2/index.html","07bd1ad2a6cffd3e4c18b2eebeb265b9"],["/archives/2020/page/3/index.html","6a8e03bcc5c7a2f3030e95797af34bbc"],["/archives/2020/page/4/index.html","057fc650889be4f6edec90b6a2b4bb6f"],["/archives/2021/01/index.html","b15ade30e5715fa56dc3b0065fc88fd9"],["/archives/2021/02/index.html","886d1c21ac4156b00ed628185a4cc406"],["/archives/2021/03/index.html","c64060dce8ab654784948b584fd35ab1"],["/archives/2021/index.html","66a4b23165561c50ed1e77df5ba37572"],["/archives/index.html","842a721cada2d53e3d79b73ad2f31474"],["/archives/page/2/index.html","842a721cada2d53e3d79b73ad2f31474"],["/archives/page/3/index.html","842a721cada2d53e3d79b73ad2f31474"],["/archives/page/4/index.html","842a721cada2d53e3d79b73ad2f31474"],["/archives/page/5/index.html","842a721cada2d53e3d79b73ad2f31474"],["/categories/Intellij-Idea/index.html","4693647b05be9258563aec49113ed057"],["/categories/Intellij-Idea/plugin/index.html","d99aa6cb850af5dde0b6ef60380b6d9f"],["/categories/JDK8/Time/index.html","246f32c15004960a2a5e9248f348a3ae"],["/categories/JDK8/index.html","e643e3a736fd29c6df2d9d6839829edb"],["/categories/Linux/VPN/index.html","7293da9d703e4208b81d4aa6770bd193"],["/categories/Linux/index.html","83e61825b370cb62ca5ce6ca67f5fc8c"],["/categories/Maven/index.html","a0ebc2c68fd6cecf3476187f99797141"],["/categories/Maven/命令行/index.html","ce326d847b553897bc35eba533c1be29"],["/categories/Maven/打包/index.html","4e7cc82829c9a9572871ae52158d1875"],["/categories/Maven/插件/index.html","63b6f1d0a298ffa4e04cc40d67203240"],["/categories/Maven/聚合项目/index.html","15bf3b2f60cdb8373c25bb381db659a5"],["/categories/Typescript/index.html","27b61d2cf36335165a1980a8ba13bf00"],["/categories/Typescript/装饰器/index.html","b24c068c042976e87742f3fa875e1de1"],["/categories/index.html","e147d4f204bcfe7ccb101c212d2391f9"],["/categories/mybatis/index.html","efb396923c6d0c1185c1bf6b15d03559"],["/categories/mybatis/xml/index.html","ed55acbb27b867de5e622ae11cad2018"],["/categories/mybatis/拦截器/index.html","3064b4b5de2a3d75118927a89f7df03c"],["/categories/前端/Hexo/index.html","497c90f5fdb74835059e1674cb631893"],["/categories/前端/index.html","28007d8f2b88272a4ab568f28f80219a"],["/categories/工具/Intellij-Plugin/index.html","f92b35aac23f112feb03bf0cbd95c104"],["/categories/工具/Java/index.html","117a436cbe6bf5925dd0c3bcf0b9ed93"],["/categories/工具/index.html","cfdb8a5c5f68ed4edca140d2dc7b26c3"],["/categories/微服务/dubbo/index.html","ecbda6fbff3242db9e556a4ef525fda4"],["/categories/微服务/index.html","203a3e39a4e5bb2a503d7814f6ab70ae"],["/categories/数据库/Oracle/index.html","a8296a73968ee8d3597f8cbf3b39498d"],["/categories/数据库/index.html","ab19153f6f46c5f32ac3a428ed4898f6"],["/categories/版本控制/index.html","c72f4fe0afd03a3d40c33eccd9bb3b95"],["/categories/版本控制/windows/index.html","38f776c4f107b4d90e9817326b548666"],["/categories/边缘技术/index.html","adca98860dfd483b91afd5c60352bba5"],["/categories/边缘技术/前端/index.html","c66b2ec11a2886dcb4304b0997fdc6ad"],["/css/first.css","847c31be45cd2c7cc1173834ba5f25d2"],["/css/style.css","0f1173bf9a74319b5d32457abe5fa992"],["/images/logos/128.png","dc6f740abff2ec660a63bf9c52c07713"],["/images/logos/144.png","d0c91faaea297cebff8e275b8e7804cf"],["/images/logos/192.png","54651b2b249fe6c1c73a6bef9f56faae"],["/images/logos/48.png","a39e72af0c79fe9a661ebbe2b9457908"],["/images/logos/512.png","633b87edad402d2c3578e1220d5f5b3a"],["/images/logos/96.png","26d31321cd5ca277afd002385a00e043"],["/images/logos/apple-touch-icon.png","08fc59a99b6637db9eb7d392de7c0eab"],["/images/swipper/1.jpg","15e94dc0045cbed50543e9a586cafaea"],["/index.html","aaad0020b5a2ea67a1eaf506cdff17d6"],["/js/aplayer.js","d4020b04d968aaf22ae2ea76803f7052"],["/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["/js/issues.js","313bd45ccc98c5c4982dbc3b07ab1a16"],["/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/js/search/algolia.js","94be3d4b1886bf8fff70161adf98c2e4"],["/js/search/azure.js","b17ba3ea67fbd51f1fd528db3dd0d723"],["/js/search/baidu.js","10aa3921e897dc10868694addbdf18e6"],["/js/search/google.js","28dfd18e2728ab710a2ad3626b8ece61"],["/js/search/hexo.js","f683a9720289b030cd991cf7fb345e63"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/page/2/index.html","e71891fd0d6bbb65cc26a7249ffabbc1"],["/page/3/index.html","e8c37b6d2f6dc9c4586e46ae9a4f6509"],["/page/4/index.html","01f1bbbd53761063a30eb4e36070d301"],["/page/5/index.html","db54beb090d9bd89cc6b7d1154373b6b"],["/sw-register.js","a2073d56073803b61ed5b2d91fa4856c"],["/tags/Centos/index.html","8ef62e7fcb925384a947f1e41a111dcb"],["/tags/Deploy/index.html","77a165ef9f0f371bd5a24fc2f07d53fa"],["/tags/Github-Pages/index.html","de3841d049fb1c8cf948a21518540e6f"],["/tags/Hexo/index.html","b4404c0da021a2e367f0cf13670e06ab"],["/tags/Idea/index.html","ae891b7051f2edd90372468edc2fcde4"],["/tags/Install/index.html","68d4dfb679b80cdbb1fff31e8ee7e231"],["/tags/Intellij-Idea/index.html","9ca0f9b41883d7f6ab40e37e8c634283"],["/tags/Intellij-Plugin/index.html","27b91b7622908f4565503925256309b0"],["/tags/JDK8/index.html","28c8b53214f375d03534c408d6d69113"],["/tags/Jar-冲突/index.html","8401207273172f2145bc813703da913f"],["/tags/Javascript/index.html","356f7d3b9a6c340e2add97869722bcfb"],["/tags/Lib/index.html","ba195b9f136f87c9ead7b570383e73b4"],["/tags/Linux/index.html","9cc69c1d47d126619bd18ec121bea477"],["/tags/LocalDate/index.html","d87831ab14714952f1154b3233003824"],["/tags/Maven/index.html","020d863df647ca330b6ac17f89201cd5"],["/tags/OpenConnect/index.html","a2a97bbcdfc75b56ca8c2f8a887b1336"],["/tags/ResultMap/index.html","fd84cb6a0259a8666513003a02882236"],["/tags/Tag/index.html","7c0064632bed2fe1a02920af020b698e"],["/tags/Time/index.html","a0d40e2454d71bdeb13bd021bef81bbc"],["/tags/Typescript/index.html","e5621885dc754bfaef2113a5c821ede4"],["/tags/VPN/index.html","964e280aa8e2ccd838133450d0194ece"],["/tags/blog/index.html","5dc5bc0e0ef3ed1996fb8ed37d1556b7"],["/tags/dubbo/index.html","aeba08c61d544b6b190dcc5a9d43d7aa"],["/tags/excerpt/index.html","452e6f022754d7e6e2e738b46310f187"],["/tags/git/index.html","982ba980d98c2bbb437ee22c2dde3249"],["/tags/index.html","53bb0915b267dd98335605a14676b2d6"],["/tags/insert/index.html","6849f7f6de6c8b2f5cb66dd1c7f42166"],["/tags/java/index.html","4108cd86d0f76dedc6649f853c01a042"],["/tags/mybatis/index.html","16b6229ab993e6fa75cec45002717cfa"],["/tags/oracle/index.html","4cc96c000e877bd5717c1ca474e1371f"],["/tags/plugin/index.html","989b15d7bf8aa230bd1ba34139288ef2"],["/tags/springboot/index.html","edeaf25860a0111fd8a91ab96f326fca"],["/tags/sql/index.html","bd64a3bab331856584fdaa6622186174"],["/tags/swing/index.html","c1251602358acca8eb705b3ff4c72df2"],["/tags/version/index.html","8560b70ad56ea368d4a37417351264ae"],["/tags/windows/index.html","b05537880e7103c1a7b323e053223bb7"],["/tags/xml/index.html","55ec6ced46ec377f2c89f8bcedb8009e"],["/tags/主键/index.html","66aa3d0d960f3a79370c2f96dddf5c76"],["/tags/发版/index.html","45458337b150545e78b5a66fa98c471f"],["/tags/命令行/index.html","83820ca51225f739dee63763107f25d3"],["/tags/外部依赖/index.html","cf4f57b60ad4ef5c6ae6574a9f7b15c0"],["/tags/多版本/index.html","d723af1ca7d6c8f43d19dc6df1641be2"],["/tags/多环境/index.html","e8baf70877d07234ec7736bfac46c220"],["/tags/工具/index.html","00e59a63ab72460688bb06e95dee50b0"],["/tags/拦截器/index.html","f65a984b716c0556a19ab4d5044d6902"],["/tags/插件/index.html","b3a21d53720f704b0cdacff0aee4bc2f"],["/tags/日期格式化/index.html","c9919976e4be979c30a661f33b213555"],["/tags/注解/index.html","b39ca2827b8dfeaca7246e338ce6f385"],["/tags/版本更新/index.html","1ee5a72dba59429c220cd52f7ae90155"],["/tags/结果集处理/index.html","86127267f59276603790b5620c040c99"],["/tags/聚合项目/index.html","e928fe9da8556fcd8affd1b4068fb251"],["/tags/自动部署/index.html","4d6bf19c8941c4695686cf8f989c5763"],["/tags/装饰器/index.html","8fa33aa55fe6407eb0d6a119fa14550a"],["/tags/语雀/index.html","43f0b2a00a5b7a38b27a3e535be032b2"],["/tags/语雀编辑器/index.html","a5656b2060248868e63110f3a8f7c112"],["/tags/踩坑日记/index.html","d89798b4391418664b2cb78ef15a3ca4"],["/tags/运维/index.html","7dd989006f03644602158cf37d80d860"]];
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
