/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/workspaces/project/git/kblog/public/archives/2020/12/index.html","331e0164121cb66b743d391e79af95af"],["D:/workspaces/project/git/kblog/public/archives/2020/index.html","2a80e3cfae6472234226bb7d297dc7dd"],["D:/workspaces/project/git/kblog/public/archives/index.html","49a2e037705a1587d38c19fd1c24a01d"],["D:/workspaces/project/git/kblog/public/assets/algolia/algoliasearch.js","3c59bbc4c45afa90f4e3acbbb106a4e9"],["D:/workspaces/project/git/kblog/public/assets/algolia/algoliasearch.min.js","5b2ab8eeb1ef1127394578ecb8eab70a"],["D:/workspaces/project/git/kblog/public/assets/algolia/algoliasearchLite.js","9fd54c9985d8a4272e71bfe8cfe7bb77"],["D:/workspaces/project/git/kblog/public/assets/algolia/algoliasearchLite.min.js","3055981523bdb5ef9db436226b593925"],["D:/workspaces/project/git/kblog/public/categories/index.html","a9e773dfae4f782bc891222fe89c6fd5"],["D:/workspaces/project/git/kblog/public/categories/test-cate/index.html","4d7f99ef5b0dda18c80d9017d49a4b38"],["D:/workspaces/project/git/kblog/public/css/index.css","7b4b6a34fc3284f49055b012de06d0b5"],["D:/workspaces/project/git/kblog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/workspaces/project/git/kblog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/workspaces/project/git/kblog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/workspaces/project/git/kblog/public/img/category1.jpg","05f1c40e7ecf5b3255a718129bd3f923"],["D:/workspaces/project/git/kblog/public/img/category_default_img.jpg","93dc11c58e85d07ba796fdd3678aeddf"],["D:/workspaces/project/git/kblog/public/img/default_cover_img.jpg","379e3f942ac5627a8825b06dfe7f1895"],["D:/workspaces/project/git/kblog/public/img/default_tag_img.jpg","cc5c96a30d04f02b534b283772ee55a7"],["D:/workspaces/project/git/kblog/public/img/default_top_img.jpg","5e4905bc8b9dbd63134e6b8de7fe41cb"],["D:/workspaces/project/git/kblog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/workspaces/project/git/kblog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/workspaces/project/git/kblog/public/img/home_header.jpg","92f5d548b4cd46963300c9e557e166d7"],["D:/workspaces/project/git/kblog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/workspaces/project/git/kblog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/workspaces/project/git/kblog/public/img/tags1.jpg","b9c4b6131969a1ae0a3deda170243275"],["D:/workspaces/project/git/kblog/public/index.html","4ab2ce34e6ba4c438a052aa8511c2c0e"],["D:/workspaces/project/git/kblog/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["D:/workspaces/project/git/kblog/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["D:/workspaces/project/git/kblog/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["D:/workspaces/project/git/kblog/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["D:/workspaces/project/git/kblog/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["D:/workspaces/project/git/kblog/public/link/index.html","c1d411e84145e31a8ddc54d0177cd881"],["D:/workspaces/project/git/kblog/public/post/4a17b156.html","592147c3f528ede6bdd68e37c0800874"],["D:/workspaces/project/git/kblog/public/post/d87f7e0c.html","16332d1615953a749b1597e25558f886"],["D:/workspaces/project/git/kblog/public/tags/index.html","a3416debfcf2a413e6d50ce132c0359c"],["D:/workspaces/project/git/kblog/public/tags/test-tag/index.html","7582af1733f1528a950579583f305334"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







