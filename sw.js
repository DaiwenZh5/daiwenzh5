/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/12/17/yuque/Nginx 转发接口导致超时解决方案/index.html","3af77e75a7767678de27ed71de693d68"],["/2019/12/18/yuque/Async 注解 - 异步调用测试/index.html","e144e328077c434fa81e0a23ad2c4f91"],["/2019/12/18/yuque/学习计划/index.html","81b6bd0900cb5e028b560b54f3d70763"],["/2019/12/18/yuque/读书笔记/index.html","8fedfe007a524067a2af63e8d0342fd9"],["/2019/12/19/yuque/Spring 自定义线程池/index.html","69695a68f6d0378c19156ad2a0c99881"],["/2019/12/20/yuque/Spring 服务端推送（SSE）/index.html","0219063068fba9944598b9b7f8d14b1a"],["/2019/12/23/yuque/Mybatis 插入 DATE 只有年月日/index.html","2c07c12ab5a6bb400ae5be4928771ac7"],["/2019/12/25/yuque/Notepad ++ 配置 nginx.conf 语法高亮/index.html","fa7dc814d0a3c52c169b9bd1c9773bb7"],["/2019/12/26/yuque/Spring boot maven plugin 使用说明/index.html","8c9615ce015cb0c490540b1641ca8763"],["/2019/12/26/yuque/打包失败：找不到符号/index.html","487b9902ca91e21522979bee2d18a060"],["/2019/12/27/yuque/Idea 启动报错：命令行太长/index.html","65a578b0ebc2b9e74e011a7fc90ba513"],["/2019/12/29/yuque/Springboot 整合 Mybatis/index.html","bf41ca88ae0b16997809b4f7b70579ae"],["/2020/01/03/yuque/Spring 注入 bean 失败/index.html","1e6287a06b2932a67fbf57a019d844cb"],["/2020/01/05/yuque/PageHelper 分页结果类型转换/index.html","9732155f52cefd8777ac3d4513537f7a"],["/2020/01/20/yuque/Git 配置多账户/index.html","3abf52d245c3be4aea585b856b73a087"],["/2020/02/05/yuque/Spring Aop 插件式开发/index.html","a93cc5ea46554bc694c348b2ddf62550"],["/2020/02/06/yuque/自定义类加载器/index.html","c60dd240ffbcdf0ab43e7db15d27b072"],["/2020/02/12/yuque/自定义 JDK 锁/index.html","8c536f4234da74c3253fa0433326963f"],["/2020/02/21/yuque/进程管理/index.html","0bd76233f52162c8a0b51ebe8d4071f9"],["/2020/03/24/yuque/插件式注解/index.html","e84321f331b97c7318e42af3c3a9cb82"],["/2020/04/07/yuque/Vue Ts 中使用 axios/index.html","15278c6b2870923c004467f3281570e8"],["/2020/04/09/yuque/Spring 项目打包后运行报错/index.html","723f9db6fe9c8861f9b5e5153c8ac1f4"],["/2020/04/10/yuque/Maven 多环境打包/index.html","f05006727506c4dd164f57c4bb4d8742"],["/2020/04/14/yuque/🐘 统一返回对象/index.html","41c874e62fabbdc2b5c3bf77b5019ed8"],["/2020/04/15/yuque/MongoDB 使用记录/index.html","bec436af79df5a02d13fa1bb06d68856"],["/2020/04/23/yuque/📑 统一日志记录/index.html","4b5943d0339f7ea5c789ee3ab6da8929"],["/2020/04/23/yuque/🕷 统一异常处理/index.html","a46d6e6b946d59c1089d399d9a11689f"],["/2020/04/30/yuque/RestTemplate 使用/index.html","922cf41b8714fda6465337aeb411490e"],["/2020/05/11/yuque/Hexo 博客搭建/index.html","51522105ae74c75a6a40c2f3af9d3990"],["/2020/06/01/yuque/git remote fail/index.html","9e8ad9fbad6a8c06d6dd75debd1891c2"],["/2020/06/08/yuque/Hexo 自动提取摘要/index.html","143269599b45a2c13d6dc6f649a4affa"],["/2020/06/17/yuque/Oracle 误删数据恢复/index.html","7865db5d53f518acd372894524371692"],["/2020/07/23/yuque/MapStruct 未生效/index.html","edfbf20af2d1453f42d96290f5be7795"],["/2020/08/13/yuque/ES 6+ 装饰器/index.html","0d8d2906f306a30468e04f2fce59a43a"],["/2020/08/26/yuque/消费者/index.html","57c3deaeef2c30c41f45d8d1a2bea959"],["/2020/10/22/yuque/HttpMediaTypeNotAcceptableException/index.html","b2370b63cc3561f4d35e79b1aa61ac42"],["/2020/11/18/yuque/多字段联合校验/index.html","bf01949d191108823f054f0b0ab293e7"],["/2020/11/27/yuque/Mybatis XML 新增异常/index.html","76ff943cc6ca05b94d85c3f5927362d4"],["/2020/12/03/yuque/聚合项目版本号管理/index.html","21e920467880442eddd6b2a35cb8f60f"],["/2020/12/04/yuque/自动发行插件/index.html","ac38628aadf98a8107bcb67cc605f193"],["/2020/12/07/yuque/结果集拦截器/index.html","a1d51fa683724fd7b81fe7dcaa0197e9"],["/2020/12/20/yuque/AnAction/index.html","ba068578aa3d54621fc49ec9056cb493"],["/2020/12/20/yuque/RunnerLayoutUi/index.html","f823bd3bd2d11774535f12d88eb1b542"],["/404.html","27346f74d3b1792bad8d26c982553cca"],["/archives/2019/12/index.html","a5cae64f5b4ca6e1a70de014d342b695"],["/archives/2019/12/page/2/index.html","7b62058a38ea131dd03cb26b4eac18c1"],["/archives/2019/index.html","dd0f292c4412dc7b592c9aa1844a4b98"],["/archives/2019/page/2/index.html","a8baf152629cd25ba89639a0a750bbc3"],["/archives/2020/01/index.html","29ecb7607baa22ec5d2ef2cda9007e85"],["/archives/2020/02/index.html","aedd801ef078bf460ff8c3238fc53398"],["/archives/2020/03/index.html","866128df180c101805dba1bf83a4d3b2"],["/archives/2020/04/index.html","ecd56720cde45404ccbce9e682203621"],["/archives/2020/05/index.html","f57fd9fbc7de536dced6d668fd7a1d8b"],["/archives/2020/06/index.html","eecd3bf096b6e454127088bed38879ec"],["/archives/2020/07/index.html","a36f9b9ecdbc1cc2f6e2cddcfe5c6075"],["/archives/2020/08/index.html","9b78a35c7faaff4704529c7c282b25a3"],["/archives/2020/10/index.html","de643b83350ee01d484c36337016d1b4"],["/archives/2020/11/index.html","eac17d7bf4aee34f55fc5f88128d62c4"],["/archives/2020/12/index.html","be994ec00be6cc573c36de738e85b387"],["/archives/2020/index.html","f84fa29c77333bea5e6f30d082ef3e52"],["/archives/2020/page/2/index.html","790d973c8a26a116e3f7aa2312dd408e"],["/archives/2020/page/3/index.html","9ca746d321ded649a567ed6adb03a4cb"],["/archives/2020/page/4/index.html","1953d96a9e1c5cf0f79b621dbca03c4f"],["/archives/index.html","266bd383eba73e2974b93cab03912672"],["/archives/page/2/index.html","266bd383eba73e2974b93cab03912672"],["/archives/page/3/index.html","266bd383eba73e2974b93cab03912672"],["/archives/page/4/index.html","266bd383eba73e2974b93cab03912672"],["/archives/page/5/index.html","266bd383eba73e2974b93cab03912672"],["/categories/Intellij-Idea/index.html","e701cdb0fbbdd52ba4bf79679a79167b"],["/categories/Intellij-Idea/plugin/index.html","1b0e7d60e800011b98c58f602dd9369d"],["/categories/index.html","87623520b9dd92394dbe5a276770ba19"],["/categories/maven/index.html","92574342c6fd2cca2fe6c2872035fcfa"],["/categories/maven/插件/index.html","e1a6bcd2bb261fc23b8c98cac11437cd"],["/categories/maven/聚合项目/index.html","5e03149c94d76c1bad3f5972dc1ad385"],["/categories/mybatis/index.html","d775c299044657e83e4bb4f1b2e8b964"],["/categories/mybatis/xml/index.html","7fa8453e199d44a5d86564142fbea160"],["/categories/mybatis/拦截器/index.html","0c56045d546a9b281a9966d579390286"],["/categories/前端/index.html","dfc64c2cc08f02e65d64183aa45d42be"],["/categories/微服务/dubbo/index.html","0b28174e854ba9437355fcd8e0fdd75b"],["/categories/微服务/index.html","0025dfb87f359e1fb0cac225516d9b7b"],["/categories/数据库/Oracle/index.html","9422d3f96fdee0bb1410284e23cc53d9"],["/categories/数据库/index.html","9264a10b416204c6d37cdffada7dd970"],["/categories/版本控制/index.html","8386a04a5123fd502b93ea31633953d1"],["/categories/版本控制/windows/index.html","93fa9774839458e82012dc21c4176ffc"],["/categories/边缘技术/index.html","d14787f4b51ac3b7c401dac6891126f9"],["/categories/边缘技术/前端/index.html","b4812c4b10df3e1f506d31177468e265"],["/css/first.css","847c31be45cd2c7cc1173834ba5f25d2"],["/css/style.css","0f1173bf9a74319b5d32457abe5fa992"],["/images/logos/128.png","dc6f740abff2ec660a63bf9c52c07713"],["/images/logos/144.png","d0c91faaea297cebff8e275b8e7804cf"],["/images/logos/192.png","54651b2b249fe6c1c73a6bef9f56faae"],["/images/logos/48.png","a39e72af0c79fe9a661ebbe2b9457908"],["/images/logos/512.png","633b87edad402d2c3578e1220d5f5b3a"],["/images/logos/96.png","26d31321cd5ca277afd002385a00e043"],["/images/logos/apple-touch-icon.png","08fc59a99b6637db9eb7d392de7c0eab"],["/images/swipper/1.jpg","15e94dc0045cbed50543e9a586cafaea"],["/index.html","33b133bf2ecefa9e13fe8d072b30d4d6"],["/js/aplayer.js","d4020b04d968aaf22ae2ea76803f7052"],["/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["/js/issues.js","313bd45ccc98c5c4982dbc3b07ab1a16"],["/js/message.js","537e2e01cf5f1be597d522d1f5f3b691"],["/js/search/algolia.js","94be3d4b1886bf8fff70161adf98c2e4"],["/js/search/azure.js","b17ba3ea67fbd51f1fd528db3dd0d723"],["/js/search/baidu.js","10aa3921e897dc10868694addbdf18e6"],["/js/search/google.js","28dfd18e2728ab710a2ad3626b8ece61"],["/js/search/hexo.js","f683a9720289b030cd991cf7fb345e63"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/page/2/index.html","ed1dd90723e3e8e7cdf7a7422264e156"],["/page/3/index.html","6d4695eabee39b4be96b3486347c8d03"],["/page/4/index.html","bdb5cfdd0b1814db6110e307114098e6"],["/page/5/index.html","f812a00c4e75ba75a2dccdbd9556a686"],["/sw-register.js","4d1bb000d1084b0b1c45ddb29aa276de"],["/tags/Intellij-Idea/index.html","cf40c8ccb836c9c2c87779acca5dc171"],["/tags/ResultMap/index.html","8013a264cf83e889dac775bde7b79789"],["/tags/blog/index.html","476c5f34663b2a39fbb0a73321e467e8"],["/tags/dubbo/index.html","9a795a737998c4876a5eae2003a32c9b"],["/tags/excerpt/index.html","c97888d278d6b3adc2a30b43ff11c9b9"],["/tags/git/index.html","157ff62e93d621b326b753ad66c48b5b"],["/tags/github-pages/index.html","19c5591704585205cb216ea1854b651d"],["/tags/hexo/index.html","bd62140e4a129ce31d9b55531ad9c79a"],["/tags/index.html","5da18e862130d6344acbc071f8d69ed4"],["/tags/insert/index.html","ed3f30147671cf1fc7bcef75aea478a1"],["/tags/java/index.html","313fe4adeedbe8787c082aa712e60683"],["/tags/js/index.html","15e1d7141b2bb53fafd38170d95655e1"],["/tags/maven/index.html","2d5d71e2e7078e4c567095a7d9dfa804"],["/tags/mybatis/index.html","0fb1183745dd8637f614f25e6b42a9c9"],["/tags/oracle/index.html","0aab586a5b9ad9847cfab1c9cb94a532"],["/tags/plugin/index.html","0a1a6565c3d7ba52c1e093de7070d2aa"],["/tags/springboot/index.html","fa84ab64e8d4edaebfa6949d91602f51"],["/tags/sql/index.html","1aeac6eb9fa10881977b6db6b77c7760"],["/tags/swing/index.html","cdc849d898d2f9d7f8760401ee07bcc5"],["/tags/tag/index.html","9e993eb28eaf2ff7e6d103fc8e277f44"],["/tags/ts/index.html","0bed1dd13e29fc3cf6657a82b40ffd3d"],["/tags/version/index.html","269547202f5c8fcee97064bc63305c6f"],["/tags/windows/index.html","7823a647a5f7eaf1fc28f3bbed4fa00a"],["/tags/xml/index.html","8e1b0c09e633c2f7ffe1e8f9c7c2a332"],["/tags/主键/index.html","6026c81e45d5953118089ee27d3cd532"],["/tags/发版/index.html","5c934a1c437271f1df8210356056fce7"],["/tags/拦截器/index.html","5e30addd5849a028be1c4f940347fe3c"],["/tags/插件/index.html","d6dfb42f4105a22dd07acaa7ea57d064"],["/tags/注解/index.html","37ac7b536f49eae1612692582958915c"],["/tags/版本更新/index.html","2b1cfbfb1231d953d6bed70477ba8e1f"],["/tags/结果集处理/index.html","20aad3d41bea89fba812fe5dae510b09"],["/tags/聚合项目/index.html","02051573465834a1b5c3644120854043"],["/tags/装饰器/index.html","99c16f7ac61ad508c666c4a28e464ced"],["/tags/语雀编辑器/index.html","e85c7ea334661cb8830388d5d2e4c1ce"],["/tags/踩坑日记/index.html","b172f7fe815bb870ef91788c0d23441a"]];
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
