/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2019/12/17/yuque/Nginx 转发接口导致超时解决方案/index.html","08e8a8215e14d4de01893bc26d4ffd51"],["/2019/12/18/yuque/Async 注解 - 异步调用测试/index.html","ca76914187f1cd3cc89592d782f8b608"],["/2019/12/18/yuque/学习计划/index.html","7f328139f4250cdcd07fe6f2ad9e4b84"],["/2019/12/18/yuque/读书笔记/index.html","881b6eb7c3d74d601f7c156617e95d78"],["/2019/12/19/yuque/Spring 自定义线程池/index.html","6597ee4e4ea7efb27d442051f7e2c5b8"],["/2019/12/20/yuque/Spring 服务端推送（SSE）/index.html","d87fc0be72937fa6b17ec169daf8c6cb"],["/2019/12/23/yuque/Mybatis 插入 DATE 只有年月日/index.html","2cbcfcff03d01bf09d50ea80c5455513"],["/2019/12/25/yuque/Notepad ++ 配置 nginx.conf 语法高亮/index.html","8f47c077b931fcc29670ea0999e31960"],["/2019/12/26/yuque/Spring boot maven plugin 使用说明/index.html","f1a9fc2ed0d787d347174159844ac2cd"],["/2019/12/26/yuque/打包失败：找不到符号/index.html","b80367b022c37610c71ae9bf3f583f71"],["/2019/12/27/yuque/Idea 启动报错：命令行太长/index.html","f0e8559291caf0bc1e6a15ccebc413ae"],["/2019/12/29/yuque/Springboot 整合 Mybatis/index.html","17017c8687cbbb25848102c5292622b3"],["/2020/01/03/yuque/Spring 注入 bean 失败/index.html","1c1ee4be88ebdbe4a9392a83f4e3d800"],["/2020/01/05/yuque/PageHelper 分页结果类型转换/index.html","a4aa659392b6abfdab7357f0d7a1224e"],["/2020/01/20/yuque/Git 配置多账户/index.html","32733e4b3c69692b270cda024e15e873"],["/2020/02/05/yuque/Spring Aop 插件式开发/index.html","47f4b8defef62b864b901b9167cd78fb"],["/2020/02/06/yuque/自定义类加载器/index.html","7ea352170bc5651a05a3c1bc54472981"],["/2020/02/12/yuque/自定义 JDK 锁/index.html","999a8a6eef0d4a2efbc4e0098b7f0dc2"],["/2020/02/21/yuque/进程管理/index.html","84a4e2ac441e2ad12e04be2a3a61cc69"],["/2020/03/24/yuque/插件式注解/index.html","cd7385a5d9f3616d22ad4a7b49e46095"],["/2020/04/07/yuque/Vue Ts 中使用 axios/index.html","64a85fc58f55a556b2bd28ebd72dcb8d"],["/2020/04/09/yuque/Spring 项目打包后运行报错/index.html","2d7008702e3c42b085a7f585bcbd6568"],["/2020/04/10/yuque/Maven 多环境打包/index.html","ab9ac6dc6cb0ba87a30f30f108b80e09"],["/2020/04/14/yuque/🐘 统一返回对象/index.html","85e2452991b79e5b73a831afac3552fa"],["/2020/04/15/yuque/MongoDB 使用记录/index.html","3b683a3ef63afed5612a37bcb2ad4437"],["/2020/04/23/yuque/📑 统一日志记录/index.html","55d6d9ea4e25cae3406fe45fb5bb1f51"],["/2020/04/23/yuque/🕷 统一异常处理/index.html","c6766cd099bbf71e13e292efb68f8c4c"],["/2020/04/30/yuque/RestTemplate 使用/index.html","882cf0bb4bb7f30f0f16168f05f375ab"],["/2020/05/11/yuque/Hexo 博客搭建/index.html","7bf89f9c29a6a5e4738f275d0699e7b7"],["/2020/06/01/yuque/git remote fail/index.html","a16e7f1352dfd6646d4768ce3a27b4d1"],["/2020/06/08/yuque/Hexo 自动提取摘要/index.html","97bec9c9e4eaa22e36894333644eea3e"],["/2020/06/17/yuque/Oracle 误删数据恢复/index.html","1eb8037839ed418633e9c408f7b1a28a"],["/2020/07/23/yuque/MapStruct 未生效/index.html","a909f8bd78b7c43174e442a6c42f0023"],["/2020/08/13/yuque/ES 6+ 装饰器/index.html","a4ebe7d6a626fc676f61e72dd4cad9eb"],["/2020/08/26/yuque/消费者/index.html","af5d7b979d082e4e83ff4055b9198e13"],["/2020/10/22/yuque/HttpMediaTypeNotAcceptableException/index.html","ce27efd0b3b45b60a88e869dd56c8973"],["/2020/11/18/yuque/多字段联合校验/index.html","4bfe94cec2f575da40f8d14374b7bc82"],["/2020/11/27/yuque/Mybatis XML 新增异常/index.html","695416cde7664e89064a4c9864841e64"],["/2020/12/03/yuque/聚合项目版本号管理/index.html","0cde9fc074c516677a16412a0ee7e737"],["/2020/12/04/yuque/自动发行插件/index.html","e57668fa1ba826c1885b1824e7be73e4"],["/2020/12/07/yuque/结果集拦截器/index.html","00a75b8512726da15aafef17d59c2997"],["/2020/12/20/yuque/AnAction/index.html","cb995d72526cc836ef4abe555e3d3ad4"],["/2020/12/20/yuque/RunnerLayoutUi/index.html","c966e0a7fa25b32ecb8e6a5fc83fa87c"],["/404.html","332be89ba54c7614ba7a3be1ea05eb4d"],["/archives/2019/12/index.html","049175c77346ec24add2d2efe81b2ac4"],["/archives/2019/12/page/2/index.html","69275ae199fa3446cee6d097a932496b"],["/archives/2019/index.html","00f6ad3dfb621b3175d60dbafd1e53c7"],["/archives/2019/page/2/index.html","db5ae151108b221544a544c44ec9ee3f"],["/archives/2020/01/index.html","317cf8cd9d90fc3354f2bd92edc7093f"],["/archives/2020/02/index.html","5188241db2b91075fd7a0dd027776c35"],["/archives/2020/03/index.html","4a15aed1391e489e32450ab66601dc33"],["/archives/2020/04/index.html","6c04a43ca0aa747772038e695f1f7f15"],["/archives/2020/05/index.html","d322f9bba4ecbb694abf8ea90b412595"],["/archives/2020/06/index.html","2ed4f7948cf504406f67c5eccca75201"],["/archives/2020/07/index.html","ca8439df303e0c94e86e731360fd1ce0"],["/archives/2020/08/index.html","781e9650b1a6c0039aa582e5aaf119dc"],["/archives/2020/10/index.html","0e52020c61f4bc5f4f79d369ce04a7cc"],["/archives/2020/11/index.html","92916980d68fe6526014aea531fbd154"],["/archives/2020/12/index.html","7b71eec7f35b6c40b18095e4146f677b"],["/archives/2020/index.html","cc0978d7cba04f664ab007b04b7271bd"],["/archives/2020/page/2/index.html","ecb4269edf92d8ff827a85aa59d70078"],["/archives/2020/page/3/index.html","2beeed7a8d9d5d27b1e339fa3377db05"],["/archives/2020/page/4/index.html","26e8f7ab008b1043b3c8f7b1c2cd2e8d"],["/archives/index.html","f8151dcd46ec0607045335c5620c90cb"],["/archives/page/2/index.html","f8151dcd46ec0607045335c5620c90cb"],["/archives/page/3/index.html","f8151dcd46ec0607045335c5620c90cb"],["/archives/page/4/index.html","f8151dcd46ec0607045335c5620c90cb"],["/archives/page/5/index.html","f8151dcd46ec0607045335c5620c90cb"],["/categories/Intellij-Idea/index.html","26ffd5e4b9fae26fcdda61ce8aafcaba"],["/categories/Intellij-Idea/plugin/index.html","cbbd3c12bac746a24c3acd5d6a5892b2"],["/categories/index.html","d992986a7129d1cf3784c5fe218054dd"],["/categories/maven/index.html","113116b1fd9f7131fb2b38552c1155b0"],["/categories/maven/插件/index.html","4dd8d9e0d85e82801fb7665aa7cc8bff"],["/categories/maven/聚合项目/index.html","35fde65754305738a1d954d2168568bb"],["/categories/mybatis/index.html","c8ad2b0bab25620175edba569273bb50"],["/categories/mybatis/xml/index.html","8f2b1cf50dff3ede61d417e76f1bae71"],["/categories/mybatis/拦截器/index.html","454fc1cf6322448e0518e9b0d6ca4efc"],["/categories/前端/index.html","320810025be34fe52ee6828ada705bdb"],["/categories/微服务/dubbo/index.html","c702af0ccd0408a146a8b9715c24149e"],["/categories/微服务/index.html","83eb28b70b7296bd1f66d27dc31171b8"],["/categories/数据库/Oracle/index.html","34a8b814bb7e6fc3e50248478c5ef966"],["/categories/数据库/index.html","aabf015f0bc897c5476db458ee8528be"],["/categories/版本控制/index.html","3fa25db1032559cdac32a16955ee35dc"],["/categories/版本控制/windows/index.html","f7f7af50695e4d610da3dc42e6d476b7"],["/categories/边缘技术/index.html","f1e173ab6ee863c0634f39fa6ef585ce"],["/categories/边缘技术/前端/index.html","306a82671814c999f8b5b64c5b1571cb"],["/css/first.css","847c31be45cd2c7cc1173834ba5f25d2"],["/css/style.css","a1707f02a4eab06b9a3ef12599c45265"],["/images/logos/128.png","dc6f740abff2ec660a63bf9c52c07713"],["/images/logos/144.png","d0c91faaea297cebff8e275b8e7804cf"],["/images/logos/192.png","54651b2b249fe6c1c73a6bef9f56faae"],["/images/logos/48.png","a39e72af0c79fe9a661ebbe2b9457908"],["/images/logos/512.png","633b87edad402d2c3578e1220d5f5b3a"],["/images/logos/96.png","26d31321cd5ca277afd002385a00e043"],["/images/logos/apple-touch-icon.png","08fc59a99b6637db9eb7d392de7c0eab"],["/images/swipper/1.jpg","15e94dc0045cbed50543e9a586cafaea"],["/index.html","cd35929befe5426f956a8d0e6eabe222"],["/js/aplayer.js","d4020b04d968aaf22ae2ea76803f7052"],["/js/app.js","a362aa73726a74b62ade3edf7a5dde65"],["/js/issues.js","313bd45ccc98c5c4982dbc3b07ab1a16"],["/js/search/algolia.js","94be3d4b1886bf8fff70161adf98c2e4"],["/js/search/azure.js","b17ba3ea67fbd51f1fd528db3dd0d723"],["/js/search/baidu.js","10aa3921e897dc10868694addbdf18e6"],["/js/search/google.js","28dfd18e2728ab710a2ad3626b8ece61"],["/js/search/hexo.js","f683a9720289b030cd991cf7fb345e63"],["/js/valine.js","9207fdb8d013c87dbe26fc906b40f68f"],["/page/2/index.html","788e35346b0f2526ccd7627825cb9824"],["/page/3/index.html","8d7c2cc718d2c4ca0426eb2a53eb37f7"],["/page/4/index.html","3d207f79ae9afbd9895d668a62b38621"],["/page/5/index.html","dc585570fee37b6883e140610977002f"],["/sw-register.js","e22ce5abd9411bea657a4a7e863c6f4a"],["/tags/Intellij-Idea/index.html","26a86b2520bedeaee3318722d72bc7b7"],["/tags/ResultMap/index.html","a9e9ef1a8bf051d3515dcbfbe0adf519"],["/tags/blog/index.html","f581afbfde3bb90b3bb40bee3e0599b1"],["/tags/dubbo/index.html","a86d5769f1ab5b6ca16a20a6902251e2"],["/tags/excerpt/index.html","dd893f3d6fd3b17d9a2477ae6059c6f7"],["/tags/git/index.html","5631555d1fec05a1580061a192c38477"],["/tags/github-pages/index.html","bb44ba5a152facac3b39960949061423"],["/tags/hexo/index.html","efc2b14f3d91705f281bdcde4ac114e0"],["/tags/index.html","281f1228793600d8f6ee2fc37ca4ccf8"],["/tags/insert/index.html","912abc54f3608eea0c542c8fa69487e3"],["/tags/java/index.html","dd43fcabd0518212e704a417522b97fc"],["/tags/js/index.html","1cccb6c43d7245e8ee1c242b1c400f2a"],["/tags/maven/index.html","f4feba471ad9773dac716a08ab8b8185"],["/tags/mybatis/index.html","d1f7f39006760b59af011cf553b9e77c"],["/tags/oracle/index.html","1109b05af7568b9737c559b4eaab8b92"],["/tags/plugin/index.html","8ea3fbcd0bba4f5dee662332fee4e0ad"],["/tags/springboot/index.html","e8a044ded6f49742b1d57edc3acfd7bc"],["/tags/sql/index.html","ca30c9620199d7f78def5466eef96de5"],["/tags/swing/index.html","b3ecb6e93dec6879773613dfa296c5df"],["/tags/tag/index.html","f36d288ce64984ec7967a5d4810096fa"],["/tags/ts/index.html","db3f8170264d180453a810cb40c563b7"],["/tags/version/index.html","06a6de5ea911d53c36ead69f5d8af965"],["/tags/windows/index.html","0d28bb0eac2443e4ed59cee59f84b0d2"],["/tags/xml/index.html","e70afd331090e9ceb7a996648c22d91c"],["/tags/主键/index.html","a20ac114b12a76c54af44df7ff41c22b"],["/tags/发版/index.html","d07e8f2835c767cfbf2c3e4cf93c871e"],["/tags/拦截器/index.html","d545c095ebc552740fce67ef4d58f520"],["/tags/插件/index.html","401499bbbfdd9b2cc983cf05ef49ae50"],["/tags/注解/index.html","b9347d5d77ad5b65c81febaa319e4c7d"],["/tags/版本更新/index.html","f7f3a4ca89103e9d6d073be621382c83"],["/tags/结果集处理/index.html","9fb77a9898e3a258ac1e6e9c6502aff3"],["/tags/聚合项目/index.html","2dd5b5afe3b49fd0977b4ad5c4d4534b"],["/tags/装饰器/index.html","a5a6b161ae4e17a0a792fd7f017459f1"],["/tags/语雀编辑器/index.html","193400b8f07ffbef4ad4bf10759257b4"],["/tags/踩坑日记/index.html","6aabe128b638110d2ecb75c6e492d25e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


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
