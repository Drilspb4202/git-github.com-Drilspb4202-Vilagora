00:32:44 | Preparing environment
00:32:44 | Creating base layer
00:32:44 | Using existing image static-advanced-node-12-ng22:latest
00:32:44 | Building keys layer
00:32:45 | DEBUG | #0 building with "default" instance using docker driver
00:32:45 | DEBUG | 
00:32:45 | DEBUG | #1 [internal] load build definition from Dockerfile
00:32:45 | DEBUG | #1 transferring dockerfile: 182B done
00:32:45 | DEBUG | #1 DONE 0.0s
00:32:45 | DEBUG | 
00:32:45 | DEBUG | #2 [internal] load metadata for docker.io/library/static-advanced-node-12-ng22:latest
00:32:45 | DEBUG | #2 DONE 0.0s
00:32:45 | DEBUG | 
00:32:45 | DEBUG | #3 [internal] load .dockerignore
00:32:45 | DEBUG | #3 transferring context: 2B done
00:32:45 | DEBUG | #3 DONE 0.0s
00:32:45 | DEBUG | 
00:32:45 | DEBUG | #4 [1/4] FROM docker.io/library/static-advanced-node-12-ng22:latest
00:32:45 | DEBUG | #4 DONE 0.1s
00:32:45 | DEBUG | 
00:32:45 | DEBUG | #5 [2/4] WORKDIR /opt/build
00:32:45 | DEBUG | #5 DONE 0.0s
00:32:45 | DEBUG | 
00:32:45 | DEBUG | #6 [3/4] RUN mkdir -p /root/.ssh
00:32:45 | DEBUG | #6 DONE 0.3s
00:32:45 | DEBUG | 
00:32:45 | DEBUG | #7 [4/4] RUN ssh-keyscan -t rsa github.com > /root/.ssh/known_hosts
00:32:46 | DEBUG | #7 0.542 # github.com:22 SSH-2.0-a2acecd9
00:32:46 | DEBUG | #7 DONE 0.8s
00:32:46 | DEBUG | 
00:32:46 | DEBUG | #8 exporting to image
00:32:46 | DEBUG | #8 exporting layers 0.0s done
00:32:46 | DEBUG | #8 writing image sha256:0e0e9370e7debdbd05e2aecc03bb2f7786157324257a0f597aa365d87c60d7ff done
00:32:46 | DEBUG | #8 naming to docker.io/library/final-image-d9c36656-7adb-4a03-bccb-2abb68cb2413-keys 0.0s done
00:32:46 | DEBUG | #8 DONE 0.1s
00:32:46 | Layer final-image-d9c36656-7adb-4a03-bccb-2abb68cb2413-keys built successfully
00:32:46 | Cloning code
00:32:46 | Building code layer
00:32:47 | DEBUG | #0 building with "default" instance using docker driver
00:32:47 | DEBUG | 
00:32:47 | DEBUG | #1 [internal] load build definition from Dockerfile
00:32:47 | DEBUG | #1 transferring dockerfile: 324B done
00:32:47 | DEBUG | #1 DONE 0.0s
00:32:47 | DEBUG | 
00:32:47 | DEBUG | #2 [internal] load metadata for docker.io/library/final-image-d9c36656-7adb-4a03-bccb-2abb68cb2413-keys:latest
00:32:47 | DEBUG | #2 DONE 0.0s
00:32:47 | DEBUG | 
00:32:47 | DEBUG | #3 [internal] load .dockerignore
00:32:47 | DEBUG | #3 transferring context: 2B done
00:32:47 | DEBUG | #3 DONE 0.0s
00:32:47 | DEBUG | 
00:32:47 | DEBUG | #4 [1/6] FROM docker.io/library/final-image-d9c36656-7adb-4a03-bccb-2abb68cb2413-keys:latest
00:32:47 | DEBUG | #4 DONE 0.1s
00:32:47 | DEBUG | 
00:32:47 | DEBUG | #5 [2/6] WORKDIR /opt/build
00:32:47 | DEBUG | #5 DONE 0.0s
00:32:47 | DEBUG | 
00:32:47 | DEBUG | #6 [3/6] RUN git clone "https://github.com/Drilspb4202/git-github.com-Drilspb4202-Vilagora.git" -b main /opt/build
00:32:47 | DEBUG | #6 0.290 Cloning into '/opt/build'...
00:32:55 | DEBUG | #6 DONE 8.0s
00:32:55 | DEBUG | 
00:32:55 | DEBUG | #7 [4/6] RUN cd /opt/build
00:32:55 | DEBUG | #7 DONE 0.4s
00:32:55 | DEBUG | 
00:32:55 | DEBUG | #8 [5/6] RUN git remote rm origin
00:33:01 | DEBUG | #8 DONE 5.7s
00:33:01 | DEBUG | 
00:33:01 | DEBUG | #9 [6/6] RUN git checkout bd30efe34c33447153605d3309688b6fd358ee9e
00:33:02 | DEBUG | #9 1.011 Note: switching to 'bd30efe34c33447153605d3309688b6fd358ee9e'.
00:33:02 | DEBUG | #9 1.011 
00:33:02 | DEBUG | #9 1.011 You are in 'detached HEAD' state. You can look around, make experimental
00:33:02 | DEBUG | #9 1.011 changes and commit them, and you can discard any commits you make in this
00:33:02 | DEBUG | #9 1.011 state without impacting any branches by switching back to a branch.
00:33:02 | DEBUG | #9 1.011 
00:33:02 | DEBUG | #9 1.011 If you want to create a new branch to retain commits you create, you may
00:33:02 | DEBUG | #9 1.011 do so (now or later) by using -c with the switch command. Example:
00:33:02 | DEBUG | #9 1.011 
00:33:02 | DEBUG | #9 1.011   git switch -c <new-branch-name>
00:33:02 | DEBUG | #9 1.011 
00:33:02 | DEBUG | #9 1.011 Or undo this operation with:
00:33:02 | DEBUG | #9 1.011 
00:33:02 | DEBUG | #9 1.011   git switch -
00:33:02 | DEBUG | #9 1.011 
00:33:02 | DEBUG | #9 1.011 Turn off this advice by setting config variable advice.detachedHead to false
00:33:02 | DEBUG | #9 1.011 
00:33:02 | DEBUG | #9 1.011 HEAD is now at bd30efe Force redeploy to update production domain
00:33:02 | DEBUG | #9 DONE 1.1s
00:33:02 | DEBUG | 
00:33:02 | DEBUG | #10 exporting to image
00:33:02 | DEBUG | #10 exporting layers
00:33:03 | DEBUG | #10 exporting layers 0.6s done
00:33:03 | DEBUG | #10 writing image sha256:cbc556a41893377099b9c6534da4028ff2a472728d1d64b68cab5fe5406482c4
00:33:03 | DEBUG | #10 writing image sha256:cbc556a41893377099b9c6534da4028ff2a472728d1d64b68cab5fe5406482c4 done
00:33:03 | DEBUG | #10 naming to docker.io/library/final-image-d9c36656-7adb-4a03-bccb-2abb68cb2413-code done
00:33:03 | DEBUG | #10 DONE 0.6s
00:33:03 | Layer final-image-d9c36656-7adb-4a03-bccb-2abb68cb2413-code built successfully
00:33:03 | Switching to commit bd30efe34c33447153605d3309688b6fd358ee9e
00:33:03 | Checking if there any system dependencies
00:33:04 | DEBUG | [".", "..", ".git", ".gitignore", "FAST_LOADING_IMPLEMENTATION.md", "IMAGES_NEEDED.md", "MOBILE_SEO_OPTIMIZATION_COMPLETE.md", "README.md", "SEO_OPTIMIZATION_COMPLETE.md", "TELEGRAM_SETUP.md", "VERCEL_TELEGRAM_SETUP.md", "YANDEX_METRIKA_SETUP.md", "app", "components", "components.json", "hooks", "lib", "next.config.js", "package-lock.json", "package.json", "pnpm-lock.yaml", "postcss.config.mjs", "public", "tailwind.config.ts", "tsconfig.json", "wrangler.toml"]
00:33:04 | Installing dependencies
00:33:04 | Building dependencies layer
00:33:04 | DEBUG | #0 building with "default" instance using docker driver
00:33:04 | DEBUG | 
00:33:04 | DEBUG | #1 [internal] load build definition from Dockerfile
00:33:04 | DEBUG | #1 transferring dockerfile: 152B done
00:33:04 | DEBUG | #1 DONE 0.0s
00:33:04 | DEBUG | 
00:33:04 | DEBUG | #2 [internal] load metadata for docker.io/library/final-image-d9c36656-7adb-4a03-bccb-2abb68cb2413-code:latest
00:33:04 | DEBUG | #2 DONE 0.0s
00:33:04 | DEBUG | 
00:33:04 | DEBUG | #3 [internal] load .dockerignore
00:33:04 | DEBUG | #3 transferring context: 2B done
00:33:04 | DEBUG | #3 DONE 0.0s
00:33:04 | DEBUG | 
00:33:04 | DEBUG | #4 [1/3] FROM docker.io/library/final-image-d9c36656-7adb-4a03-bccb-2abb68cb2413-code:latest
00:33:04 | DEBUG | #4 DONE 0.1s
00:33:04 | DEBUG | 
00:33:04 | DEBUG | #5 [2/3] WORKDIR /opt/build
00:33:04 | DEBUG | #5 DONE 0.0s
00:33:04 | DEBUG | 
00:33:04 | DEBUG | #6 [3/3] RUN cd /opt/build && npm i --verbose
00:33:04 | DEBUG | #6 0.346 npm verbose cli /usr/bin/node /usr/bin/npm
00:33:04 | DEBUG | #6 0.346 npm info using npm@10.9.2
00:33:04 | DEBUG | #6 0.347 npm info using node@v22.17.0
00:33:04 | DEBUG | #6 0.349 npm verbose title npm i
00:33:04 | DEBUG | #6 0.349 npm verbose argv "i" "--loglevel" "verbose"
00:33:04 | DEBUG | #6 0.349 npm verbose logfile logs-max:10 dir:/root/.npm/_logs/2025-06-30T21_33_04_799Z-
00:33:04 | DEBUG | #6 0.351 npm verbose logfile /root/.npm/_logs/2025-06-30T21_33_04_799Z-debug-0.log
00:33:05 | DEBUG | #6 0.805 npm verbose reify failed optional dependency /opt/build/node_modules/@next/swc-win32-arm64-msvc
00:33:05 | DEBUG | #6 0.808 npm verbose reify failed optional dependency /opt/build/node_modules/@next/swc-linux-arm64-musl
00:33:05 | DEBUG | #6 0.808 npm verbose reify failed optional dependency /opt/build/node_modules/@next/swc-linux-arm64-gnu
00:33:05 | DEBUG | #6 0.809 npm verbose reify failed optional dependency /opt/build/node_modules/@next/swc-darwin-x64
00:33:05 | DEBUG | #6 0.809 npm verbose reify failed optional dependency /opt/build/node_modules/@next/swc-darwin-arm64
00:33:05 | DEBUG | #6 0.840 npm verbose reify failed optional dependency /opt/build/node_modules/@next/swc-win32-x64-msvc
00:33:05 | DEBUG | #6 0.841 npm verbose reify failed optional dependency /opt/build/node_modules/@img/sharp-win32-x64
00:33:05 | DEBUG | #6 0.918 npm http cache @next/swc-linux-x64-musl@https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-15.2.4.tgz 1ms (cache hit)
00:33:05 | DEBUG | #6 0.921 npm http cache @next/swc-linux-x64-gnu@https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-15.2.4.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.922 npm http cache zod@https://registry.npmjs.org/zod/-/zod-3.25.67.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.922 npm http cache yaml@https://registry.npmjs.org/yaml/-/yaml-2.8.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.923 npm http cache wrap-ansi-cjs@https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.923 npm http cache wrap-ansi@https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.924 npm http cache which@https://registry.npmjs.org/which/-/which-2.0.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.924 npm http cache victory-vendor@https://registry.npmjs.org/victory-vendor/-/victory-vendor-37.3.6.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.925 npm http cache vaul@https://registry.npmjs.org/vaul/-/vaul-1.1.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.926 npm http cache util-deprecate@https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.926 npm http cache use-sync-external-store@https://registry.npmjs.org/use-sync-external-store/-/use-sync-external-store-1.5.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.927 npm http cache use-sidecar@https://registry.npmjs.org/use-sidecar/-/use-sidecar-1.1.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.927 npm http cache use-callback-ref@https://registry.npmjs.org/use-callback-ref/-/use-callback-ref-1.3.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.927 npm http cache update-browserslist-db@https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.928 npm http cache undici-types@https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.928 npm http cache typescript@https://registry.npmjs.org/typescript/-/typescript-5.8.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.929 npm http cache tslib@https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.929 npm http cache ts-interface-checker@https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.929 npm http cache to-regex-range@https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.930 npm http cache tiny-invariant@https://registry.npmjs.org/tiny-invariant/-/tiny-invariant-1.3.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.930 npm http cache thenify-all@https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.931 npm http cache thenify@https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.931 npm http cache tailwindcss-animate@https://registry.npmjs.org/tailwindcss-animate/-/tailwindcss-animate-1.0.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.931 npm http cache tailwindcss@https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.17.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.932 npm http cache tailwind-merge@https://registry.npmjs.org/tailwind-merge/-/tailwind-merge-2.6.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.932 npm http cache supports-preserve-symlinks-flag@https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.933 npm http cache sucrase@https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.933 npm http cache styled-jsx@https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.934 npm http cache strip-ansi-cjs@https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.934 npm http cache strip-ansi@https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.935 npm http cache string-width-cjs@https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.935 npm http cache string-width@https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.935 npm http cache streamsearch@https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.936 npm http cache source-map-js@https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.936 npm http cache sonner@https://registry.npmjs.org/sonner/-/sonner-2.0.5.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.937 npm http cache simple-swizzle@https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.937 npm http cache signal-exit@https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.938 npm http cache shebang-regex@https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.938 npm http cache shebang-command@https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.939 npm http cache sharp@https://registry.npmjs.org/sharp/-/sharp-0.33.5.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.939 npm http cache semver@https://registry.npmjs.org/semver/-/semver-7.7.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.939 npm http cache scheduler@https://registry.npmjs.org/scheduler/-/scheduler-0.26.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.940 npm http cache run-parallel@https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.940 npm http cache reusify@https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.941 npm http cache resolve@https://registry.npmjs.org/resolve/-/resolve-1.22.10.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.941 npm http cache reselect@https://registry.npmjs.org/reselect/-/reselect-5.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.942 npm http cache redux-thunk@https://registry.npmjs.org/redux-thunk/-/redux-thunk-3.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.942 npm http cache redux@https://registry.npmjs.org/redux/-/redux-5.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.942 npm http cache recharts@https://registry.npmjs.org/recharts/-/recharts-3.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.943 npm http cache readdirp@https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.943 npm http cache read-cache@https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.944 npm http cache react-style-singleton@https://registry.npmjs.org/react-style-singleton/-/react-style-singleton-2.2.3.tgz 1ms (cache hit)
00:33:05 | DEBUG | #6 0.944 npm http cache react-resizable-panels@https://registry.npmjs.org/react-resizable-panels/-/react-resizable-panels-3.0.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.945 npm http cache react-remove-scroll-bar@https://registry.npmjs.org/react-remove-scroll-bar/-/react-remove-scroll-bar-2.3.8.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.945 npm http cache react-remove-scroll@https://registry.npmjs.org/react-remove-scroll/-/react-remove-scroll-2.7.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.945 npm http cache react-redux@https://registry.npmjs.org/react-redux/-/react-redux-9.2.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.946 npm http cache react-is@https://registry.npmjs.org/react-is/-/react-is-19.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.946 npm http cache react-hook-form@https://registry.npmjs.org/react-hook-form/-/react-hook-form-7.58.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.947 npm http cache react-dom@https://registry.npmjs.org/react-dom/-/react-dom-19.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.947 npm http cache react-day-picker@https://registry.npmjs.org/react-day-picker/-/react-day-picker-9.7.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.948 npm http cache react@https://registry.npmjs.org/react/-/react-19.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.948 npm http cache queue-microtask@https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.948 npm http cache postcss-value-parser@https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.949 npm http cache postcss-selector-parser@https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.949 npm http cache postcss-nested@https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.950 npm http cache postcss-js@https://registry.npmjs.org/postcss-js/-/postcss-js-4.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.950 npm http cache postcss-import@https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.951 npm http cache postcss@https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.951 npm http cache pirates@https://registry.npmjs.org/pirates/-/pirates-4.0.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.952 npm http cache pify@https://registry.npmjs.org/pify/-/pify-2.3.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.952 npm http cache picomatch@https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.952 npm http cache picocolors@https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.953 npm http cache path-scurry@https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.953 npm http cache path-parse@https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.954 npm http cache path-key@https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.954 npm http cache package-json-from-dist@https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.954 npm http cache object-hash@https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.955 npm http cache object-assign@https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.955 npm http cache normalize-range@https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.956 npm http cache normalize-path@https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.956 npm http cache node-releases@https://registry.npmjs.org/node-releases/-/node-releases-2.0.19.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.957 npm http cache next-themes@https://registry.npmjs.org/next-themes/-/next-themes-0.4.6.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.957 npm http cache next-cloudinary@https://registry.npmjs.org/next-cloudinary/-/next-cloudinary-6.16.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.957 npm http cache next@https://registry.npmjs.org/next/-/next-15.2.4.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.958 npm http cache nanoid@https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.958 npm http cache mz@https://registry.npmjs.org/mz/-/mz-2.7.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.959 npm http cache minipass@https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.959 npm http cache minimatch@https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.959 npm http cache micromatch@https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.960 npm http cache merge2@https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.960 npm http cache lucide-react@https://registry.npmjs.org/lucide-react/-/lucide-react-0.454.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.961 npm http cache lru-cache@https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.961 npm http cache lines-and-columns@https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.962 npm http cache lilconfig@https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.962 npm http cache jiti@https://registry.npmjs.org/jiti/-/jiti-1.21.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.962 npm http cache jackspeak@https://registry.npmjs.org/jackspeak/-/jackspeak-3.4.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.963 npm http cache isexe@https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.963 npm http cache is-number@https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.964 npm http cache is-glob@https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.964 npm http cache is-fullwidth-code-point@https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.964 npm http cache is-extglob@https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.965 npm http cache is-core-module@https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.965 npm http cache is-binary-path@https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.966 npm http cache is-arrayish@https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.966 npm http cache internmap@https://registry.npmjs.org/internmap/-/internmap-2.0.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.967 npm http cache input-otp@https://registry.npmjs.org/input-otp/-/input-otp-1.4.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.967 npm http cache immer@https://registry.npmjs.org/immer/-/immer-10.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.967 npm http cache hasown@https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.968 npm http cache glob-parent@https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.968 npm http cache glob@https://registry.npmjs.org/glob/-/glob-10.4.5.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.969 npm http cache get-nonce@https://registry.npmjs.org/get-nonce/-/get-nonce-1.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.969 npm http cache function-bind@https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.970 npm http cache fraction.js@https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.970 npm http cache foreground-child@https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.970 npm http cache fill-range@https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.971 npm http cache fastq@https://registry.npmjs.org/fastq/-/fastq-1.19.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.971 npm http cache fast-glob@https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.972 npm http cache eventemitter3@https://registry.npmjs.org/eventemitter3/-/eventemitter3-5.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.972 npm http cache escalade@https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.973 npm http cache es-toolkit@https://registry.npmjs.org/es-toolkit/-/es-toolkit-1.39.5.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.973 npm http cache emoji-regex@https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.974 npm http cache embla-carousel-reactive-utils@https://registry.npmjs.org/embla-carousel-reactive-utils/-/embla-carousel-reactive-utils-8.6.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.974 npm http cache embla-carousel-react@https://registry.npmjs.org/embla-carousel-react/-/embla-carousel-react-8.6.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.974 npm http cache embla-carousel@https://registry.npmjs.org/embla-carousel/-/embla-carousel-8.6.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.975 npm http cache electron-to-chromium@https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.176.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.975 npm http cache eastasianwidth@https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.976 npm http cache dlv@https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.976 npm http cache didyoumean@https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.977 npm http cache detect-node-es@https://registry.npmjs.org/detect-node-es/-/detect-node-es-1.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.977 npm http cache detect-libc@https://registry.npmjs.org/detect-libc/-/detect-libc-2.0.4.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.977 npm http cache decimal.js-light@https://registry.npmjs.org/decimal.js-light/-/decimal.js-light-2.5.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.978 npm http cache date-fns-jalali@https://registry.npmjs.org/date-fns-jalali/-/date-fns-jalali-4.1.0-0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.978 npm http cache date-fns@https://registry.npmjs.org/date-fns/-/date-fns-4.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.979 npm http cache d3-timer@https://registry.npmjs.org/d3-timer/-/d3-timer-3.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.979 npm http cache d3-time-format@https://registry.npmjs.org/d3-time-format/-/d3-time-format-4.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.980 npm http cache d3-time@https://registry.npmjs.org/d3-time/-/d3-time-3.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.980 npm http cache d3-shape@https://registry.npmjs.org/d3-shape/-/d3-shape-3.2.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.980 npm http cache d3-scale@https://registry.npmjs.org/d3-scale/-/d3-scale-4.0.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.981 npm http cache d3-path@https://registry.npmjs.org/d3-path/-/d3-path-3.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.981 npm http cache d3-interpolate@https://registry.npmjs.org/d3-interpolate/-/d3-interpolate-3.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.982 npm http cache d3-format@https://registry.npmjs.org/d3-format/-/d3-format-3.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.982 npm http cache d3-ease@https://registry.npmjs.org/d3-ease/-/d3-ease-3.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.982 npm http cache d3-color@https://registry.npmjs.org/d3-color/-/d3-color-3.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.983 npm http cache d3-array@https://registry.npmjs.org/d3-array/-/d3-array-3.2.4.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.983 npm http cache csstype@https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.984 npm http cache cssesc@https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.984 npm http cache cross-spawn@https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.984 npm http cache commander@https://registry.npmjs.org/commander/-/commander-4.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.985 npm http cache color-string@https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.985 npm http cache color-name@https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.986 npm http cache color-convert@https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.986 npm http cache color@https://registry.npmjs.org/color/-/color-4.2.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.987 npm http cache cmdk@https://registry.npmjs.org/cmdk/-/cmdk-1.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.987 npm http cache clsx@https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.987 npm http cache client-only@https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.988 npm http cache class-variance-authority@https://registry.npmjs.org/class-variance-authority/-/class-variance-authority-0.7.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.988 npm http cache chokidar@https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.989 npm http cache caniuse-lite@https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001726.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.989 npm http cache camelcase-css@https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.990 npm http cache busboy@https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.990 npm http cache browserslist@https://registry.npmjs.org/browserslist/-/browserslist-4.25.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.991 npm http cache braces@https://registry.npmjs.org/braces/-/braces-3.0.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.991 npm http cache brace-expansion@https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.992 npm http cache binary-extensions@https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.992 npm http cache balanced-match@https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.993 npm http cache autoprefixer@https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.21.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.993 npm http cache aria-hidden@https://registry.npmjs.org/aria-hidden/-/aria-hidden-1.2.6.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.994 npm http cache arg@https://registry.npmjs.org/arg/-/arg-5.0.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.994 npm http cache anymatch@https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.994 npm http cache any-promise@https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.995 npm http cache ansi-styles@https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz 1ms (cache hit)
00:33:05 | DEBUG | #6 0.995 npm http cache ansi-regex@https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.996 npm http cache @types/use-sync-external-store@https://registry.npmjs.org/@types/use-sync-external-store/-/use-sync-external-store-0.0.6.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.996 npm http cache @types/react-dom@https://registry.npmjs.org/@types/react-dom/-/react-dom-19.1.6.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.996 npm http cache @types/react@https://registry.npmjs.org/@types/react/-/react-19.1.8.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.997 npm http cache @types/node@https://registry.npmjs.org/@types/node/-/node-22.15.33.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.997 npm http cache @types/d3-timer@https://registry.npmjs.org/@types/d3-timer/-/d3-timer-3.0.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.998 npm http cache @types/d3-time@https://registry.npmjs.org/@types/d3-time/-/d3-time-3.0.4.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.998 npm http cache @types/d3-shape@https://registry.npmjs.org/@types/d3-shape/-/d3-shape-3.1.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.998 npm http cache @types/d3-scale@https://registry.npmjs.org/@types/d3-scale/-/d3-scale-4.0.9.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.999 npm http cache @types/d3-path@https://registry.npmjs.org/@types/d3-path/-/d3-path-3.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.999 npm http cache @types/d3-interpolate@https://registry.npmjs.org/@types/d3-interpolate/-/d3-interpolate-3.0.4.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 0.999 npm http cache @types/d3-ease@https://registry.npmjs.org/@types/d3-ease/-/d3-ease-3.0.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.000 npm http cache @types/d3-color@https://registry.npmjs.org/@types/d3-color/-/d3-color-3.1.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.000 npm http cache @types/d3-array@https://registry.npmjs.org/@types/d3-array/-/d3-array-3.2.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.001 npm http cache @swc/helpers@https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.15.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.001 npm http cache @swc/counter@https://registry.npmjs.org/@swc/counter/-/counter-0.1.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.001 npm http cache @standard-schema/utils@https://registry.npmjs.org/@standard-schema/utils/-/utils-0.3.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.002 npm http cache @standard-schema/spec@https://registry.npmjs.org/@standard-schema/spec/-/spec-1.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.002 npm http cache @reduxjs/toolkit@https://registry.npmjs.org/@reduxjs/toolkit/-/toolkit-2.8.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.002 npm http cache @radix-ui/rect@https://registry.npmjs.org/@radix-ui/rect/-/rect-1.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.003 npm http cache @radix-ui/react-visually-hidden@https://registry.npmjs.org/@radix-ui/react-visually-hidden/-/react-visually-hidden-1.2.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.003 npm http cache @radix-ui/react-use-size@https://registry.npmjs.org/@radix-ui/react-use-size/-/react-use-size-1.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.003 npm http cache @radix-ui/react-use-rect@https://registry.npmjs.org/@radix-ui/react-use-rect/-/react-use-rect-1.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.004 npm http cache @radix-ui/react-use-previous@https://registry.npmjs.org/@radix-ui/react-use-previous/-/react-use-previous-1.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.004 npm http cache @radix-ui/react-use-layout-effect@https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.004 npm http cache @radix-ui/react-use-is-hydrated@https://registry.npmjs.org/@radix-ui/react-use-is-hydrated/-/react-use-is-hydrated-0.1.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.005 npm http cache @radix-ui/react-use-escape-keydown@https://registry.npmjs.org/@radix-ui/react-use-escape-keydown/-/react-use-escape-keydown-1.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.005 npm http cache @radix-ui/react-use-effect-event@https://registry.npmjs.org/@radix-ui/react-use-effect-event/-/react-use-effect-event-0.0.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.005 npm http cache @radix-ui/react-use-controllable-state@https://registry.npmjs.org/@radix-ui/react-use-controllable-state/-/react-use-controllable-state-1.2.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.006 npm http cache @radix-ui/react-use-callback-ref@https://registry.npmjs.org/@radix-ui/react-use-callback-ref/-/react-use-callback-ref-1.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.006 npm http cache @radix-ui/react-tooltip@https://registry.npmjs.org/@radix-ui/react-tooltip/-/react-tooltip-1.2.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.006 npm http cache @radix-ui/react-toggle-group@https://registry.npmjs.org/@radix-ui/react-toggle-group/-/react-toggle-group-1.1.10.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.007 npm http cache @radix-ui/react-toggle@https://registry.npmjs.org/@radix-ui/react-toggle/-/react-toggle-1.1.9.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.007 npm http cache @radix-ui/react-toast@https://registry.npmjs.org/@radix-ui/react-toast/-/react-toast-1.2.14.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.007 npm http cache @radix-ui/react-tabs@https://registry.npmjs.org/@radix-ui/react-tabs/-/react-tabs-1.1.12.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.007 npm http cache @radix-ui/react-switch@https://registry.npmjs.org/@radix-ui/react-switch/-/react-switch-1.2.5.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.008 npm http cache @radix-ui/react-slot@https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.008 npm http cache @radix-ui/react-slider@https://registry.npmjs.org/@radix-ui/react-slider/-/react-slider-1.3.5.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.008 npm http cache @radix-ui/react-separator@https://registry.npmjs.org/@radix-ui/react-separator/-/react-separator-1.1.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.009 npm http cache @radix-ui/react-select@https://registry.npmjs.org/@radix-ui/react-select/-/react-select-2.2.5.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.009 npm http cache @radix-ui/react-scroll-area@https://registry.npmjs.org/@radix-ui/react-scroll-area/-/react-scroll-area-1.2.9.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.009 npm http cache @radix-ui/react-roving-focus@https://registry.npmjs.org/@radix-ui/react-roving-focus/-/react-roving-focus-1.1.10.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.010 npm http cache @radix-ui/react-radio-group@https://registry.npmjs.org/@radix-ui/react-radio-group/-/react-radio-group-1.3.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.010 npm http cache @radix-ui/react-progress@https://registry.npmjs.org/@radix-ui/react-progress/-/react-progress-1.1.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.010 npm http cache @radix-ui/react-primitive@https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.011 npm http cache @radix-ui/react-presence@https://registry.npmjs.org/@radix-ui/react-presence/-/react-presence-1.1.4.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.011 npm http cache @radix-ui/react-portal@https://registry.npmjs.org/@radix-ui/react-portal/-/react-portal-1.1.9.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.011 npm http cache @radix-ui/react-popper@https://registry.npmjs.org/@radix-ui/react-popper/-/react-popper-1.2.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.012 npm http cache @radix-ui/react-popover@https://registry.npmjs.org/@radix-ui/react-popover/-/react-popover-1.1.14.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.012 npm http cache @radix-ui/react-navigation-menu@https://registry.npmjs.org/@radix-ui/react-navigation-menu/-/react-navigation-menu-1.2.13.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.012 npm http cache @radix-ui/react-menubar@https://registry.npmjs.org/@radix-ui/react-menubar/-/react-menubar-1.1.15.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.013 npm http cache @radix-ui/react-menu@https://registry.npmjs.org/@radix-ui/react-menu/-/react-menu-2.1.15.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.013 npm http cache @radix-ui/react-label@https://registry.npmjs.org/@radix-ui/react-label/-/react-label-2.1.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.013 npm http cache @radix-ui/react-id@https://registry.npmjs.org/@radix-ui/react-id/-/react-id-1.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.013 npm http cache @radix-ui/react-hover-card@https://registry.npmjs.org/@radix-ui/react-hover-card/-/react-hover-card-1.1.14.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.014 npm http cache @radix-ui/react-focus-scope@https://registry.npmjs.org/@radix-ui/react-focus-scope/-/react-focus-scope-1.1.7.tgz 1ms (cache hit)
00:33:05 | DEBUG | #6 1.014 npm http cache @radix-ui/react-focus-guards@https://registry.npmjs.org/@radix-ui/react-focus-guards/-/react-focus-guards-1.1.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.014 npm http cache @radix-ui/react-dropdown-menu@https://registry.npmjs.org/@radix-ui/react-dropdown-menu/-/react-dropdown-menu-2.1.15.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.015 npm http cache @radix-ui/react-dismissable-layer@https://registry.npmjs.org/@radix-ui/react-dismissable-layer/-/react-dismissable-layer-1.1.10.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.015 npm http cache @radix-ui/react-direction@https://registry.npmjs.org/@radix-ui/react-direction/-/react-direction-1.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.015 npm http cache @radix-ui/react-dialog@https://registry.npmjs.org/@radix-ui/react-dialog/-/react-dialog-1.1.14.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.016 npm http cache @radix-ui/react-context-menu@https://registry.npmjs.org/@radix-ui/react-context-menu/-/react-context-menu-2.2.15.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.016 npm http cache @radix-ui/react-context@https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.1.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.016 npm http cache @radix-ui/react-compose-refs@https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.016 npm http cache @radix-ui/react-collection@https://registry.npmjs.org/@radix-ui/react-collection/-/react-collection-1.1.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.017 npm http cache @radix-ui/react-collapsible@https://registry.npmjs.org/@radix-ui/react-collapsible/-/react-collapsible-1.1.11.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.017 npm http cache @radix-ui/react-checkbox@https://registry.npmjs.org/@radix-ui/react-checkbox/-/react-checkbox-1.3.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.017 npm http cache @radix-ui/react-avatar@https://registry.npmjs.org/@radix-ui/react-avatar/-/react-avatar-1.1.10.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.018 npm http cache @radix-ui/react-aspect-ratio@https://registry.npmjs.org/@radix-ui/react-aspect-ratio/-/react-aspect-ratio-1.1.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.018 npm http cache @radix-ui/react-arrow@https://registry.npmjs.org/@radix-ui/react-arrow/-/react-arrow-1.1.7.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.018 npm http cache @radix-ui/react-alert-dialog@https://registry.npmjs.org/@radix-ui/react-alert-dialog/-/react-alert-dialog-1.1.14.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.018 npm http cache @radix-ui/react-accordion@https://registry.npmjs.org/@radix-ui/react-accordion/-/react-accordion-1.2.11.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.019 npm http cache @radix-ui/primitive@https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.1.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.019 npm http cache @radix-ui/number@https://registry.npmjs.org/@radix-ui/number/-/number-1.1.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.029 npm http cache @pkgjs/parseargs@https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz 6ms (cache hit)
00:33:05 | DEBUG | #6 1.029 npm http cache @nodelib/fs.walk@https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.029 npm http cache @nodelib/fs.stat@https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.029 npm http cache @nodelib/fs.scandir@https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.030 npm http cache @next/env@https://registry.npmjs.org/@next/env/-/env-15.2.4.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.030 npm http cache @jridgewell/trace-mapping@https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.030 npm http cache @jridgewell/sourcemap-codec@https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.030 npm http cache @jridgewell/set-array@https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.031 npm http cache @jridgewell/resolve-uri@https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.032 npm http cache @jridgewell/gen-mapping@https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.8.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.032 npm http cache @isaacs/cliui@https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.032 npm http cache @hookform/resolvers@https://registry.npmjs.org/@hookform/resolvers/-/resolvers-3.10.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.033 npm http cache @floating-ui/utils@https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.9.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.033 npm http cache @floating-ui/react-dom@https://registry.npmjs.org/@floating-ui/react-dom/-/react-dom-2.1.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.033 npm http cache @floating-ui/dom@https://registry.npmjs.org/@floating-ui/dom/-/dom-1.7.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.033 npm http cache @floating-ui/core@https://registry.npmjs.org/@floating-ui/core/-/core-1.7.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.034 npm http cache @date-fns/tz@https://registry.npmjs.org/@date-fns/tz/-/tz-1.2.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.034 npm http cache @cloudinary/url-gen@https://registry.npmjs.org/@cloudinary/url-gen/-/url-gen-1.15.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.034 npm http cache @cloudinary/transformation-builder-sdk@https://registry.npmjs.org/@cloudinary/transformation-builder-sdk/-/transformation-builder-sdk-1.17.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.034 npm http cache @cloudinary-util/util@https://registry.npmjs.org/@cloudinary-util/util/-/util-4.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.035 npm http cache @cloudinary-util/url-loader@https://registry.npmjs.org/@cloudinary-util/url-loader/-/url-loader-5.10.4.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.035 npm http cache @cloudinary-util/types@https://registry.npmjs.org/@cloudinary-util/types/-/types-1.5.10.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.035 npm http cache @alloc/quick-lru@https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.035 npm http cache strip-ansi@https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.036 npm http cache string-width@https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.036 npm http cache emoji-regex@https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.036 npm http cache ansi-styles@https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.036 npm http cache ansi-regex@https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.037 npm http cache postcss-load-config@https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-4.0.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.037 npm http cache ansi-regex@https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.037 npm http cache strip-ansi@https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.037 npm http cache emoji-regex@https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.038 npm http cache ansi-regex@https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.038 npm http cache postcss@https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.038 npm http cache glob-parent@https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.039 npm http cache glob-parent@https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz 0ms (cache hit)
00:33:05 | DEBUG | #6 1.052 npm http cache @cloudinary-util/util@https://registry.npmjs.org/@cloudinary-util/util/-/util-3.3.2.tgz 0ms (cache hit)
00:33:06 | DEBUG | #6 1.787 npm http fetch POST 200 https://registry.npmjs.org/-/npm/v1/security/advisories/bulk 996ms
00:33:06 | DEBUG | #6 1.804 npm http fetch GET 200 https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz 736ms (cache miss)
00:33:06 | DEBUG | #6 1.851 npm http fetch GET 200 https://registry.npmjs.org/thenify-all/-/thenify-all-1.6.0.tgz 757ms (cache miss)
00:33:06 | DEBUG | #6 1.852 npm http fetch GET 200 https://registry.npmjs.org/thenify/-/thenify-3.3.1.tgz 758ms (cache miss)
00:33:06 | DEBUG | #6 1.874 npm http fetch GET 200 https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz 780ms (cache miss)
00:33:06 | DEBUG | #6 1.947 npm http fetch GET 200 https://registry.npmjs.org/use-sync-external-store/-/use-sync-external-store-1.5.0.tgz 878ms (cache miss)
00:33:06 | DEBUG | #6 1.951 npm http fetch GET 200 https://registry.npmjs.org/tailwindcss-animate/-/tailwindcss-animate-1.0.7.tgz 857ms (cache miss)
00:33:06 | DEBUG | #6 1.969 npm http fetch GET 200 https://registry.npmjs.org/streamsearch/-/streamsearch-1.1.0.tgz 863ms (cache miss)
00:33:06 | DEBUG | #6 1.975 npm http fetch GET 200 https://registry.npmjs.org/tiny-invariant/-/tiny-invariant-1.3.3.tgz 881ms (cache miss)
00:33:06 | DEBUG | #6 1.976 npm http fetch GET 200 https://registry.npmjs.org/simple-swizzle/-/simple-swizzle-0.2.2.tgz 868ms (cache miss)
00:33:06 | DEBUG | #6 2.045 npm http fetch GET 200 https://registry.npmjs.org/ts-interface-checker/-/ts-interface-checker-0.1.13.tgz 952ms (cache miss)
00:33:06 | DEBUG | #6 2.111 npm http fetch GET 200 https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz 1002ms (cache miss)
00:33:06 | DEBUG | #6 2.114 npm http fetch GET 200 https://registry.npmjs.org/redux-thunk/-/redux-thunk-3.1.0.tgz 1003ms (cache miss)
00:33:06 | DEBUG | #6 2.138 npm http fetch GET 200 https://registry.npmjs.org/read-cache/-/read-cache-1.0.0.tgz 1025ms (cache miss)
00:33:06 | DEBUG | #6 2.144 npm http fetch GET 200 https://registry.npmjs.org/scheduler/-/scheduler-0.26.0.tgz 1035ms (cache miss)
00:33:06 | DEBUG | #6 2.171 npm http fetch GET 200 https://registry.npmjs.org/readdirp/-/readdirp-3.6.0.tgz 1058ms (cache miss)
00:33:06 | DEBUG | #6 2.195 npm http fetch GET 200 https://registry.npmjs.org/vaul/-/vaul-1.1.2.tgz 1131ms (cache miss)
00:33:06 | DEBUG | #6 2.251 npm http fetch GET 200 https://registry.npmjs.org/react-is/-/react-is-19.1.0.tgz 1137ms (cache miss)
00:33:06 | DEBUG | #6 2.259 npm http fetch GET 200 https://registry.npmjs.org/sonner/-/sonner-2.0.5.tgz 1152ms (cache miss)
00:33:06 | DEBUG | #6 2.318 npm http fetch GET 200 https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz 1201ms (cache miss)
00:33:06 | DEBUG | #6 2.358 npm http fetch GET 200 https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz 1271ms (cache miss)
00:33:06 | DEBUG | #6 2.369 npm http fetch GET 200 https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz 1252ms (cache miss)
00:33:06 | DEBUG | #6 2.387 npm http fetch GET 200 https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz 1279ms (cache miss)
00:33:06 | DEBUG | #6 2.419 npm http fetch GET 200 https://registry.npmjs.org/react-style-singleton/-/react-style-singleton-2.2.3.tgz 1306ms (cache miss)
00:33:06 | DEBUG | #6 2.442 npm http fetch GET 200 https://registry.npmjs.org/react-remove-scroll-bar/-/react-remove-scroll-bar-2.3.8.tgz 1329ms (cache miss)
00:33:06 | DEBUG | #6 2.454 npm http fetch GET 200 https://registry.npmjs.org/postcss-js/-/postcss-js-4.0.1.tgz 1336ms (cache miss)
00:33:06 | DEBUG | #6 2.468 npm http fetch GET 200 https://registry.npmjs.org/postcss-nested/-/postcss-nested-6.2.0.tgz 1351ms (cache miss)
00:33:07 | DEBUG | #6 2.469 npm http fetch GET 200 https://registry.npmjs.org/postcss-import/-/postcss-import-15.1.0.tgz 1351ms (cache miss)
00:33:07 | DEBUG | #6 2.477 npm http fetch GET 200 https://registry.npmjs.org/use-sidecar/-/use-sidecar-1.1.3.tgz 1407ms (cache miss)
00:33:07 | DEBUG | #6 2.523 npm http fetch GET 200 https://registry.npmjs.org/pify/-/pify-2.3.0.tgz 1403ms (cache miss)
00:33:07 | DEBUG | #6 2.540 npm http fetch GET 200 https://registry.npmjs.org/use-callback-ref/-/use-callback-ref-1.3.3.tgz 1469ms (cache miss)
00:33:07 | DEBUG | #6 2.544 npm http fetch GET 200 https://registry.npmjs.org/pirates/-/pirates-4.0.7.tgz 1425ms (cache miss)
00:33:07 | DEBUG | #6 2.594 npm http fetch GET 200 https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz 1472ms (cache miss)
00:33:07 | DEBUG | #6 2.608 npm http fetch GET 200 https://registry.npmjs.org/object-hash/-/object-hash-3.0.0.tgz 1487ms (cache miss)
00:33:07 | DEBUG | #6 2.624 npm http fetch GET 200 https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz 1502ms (cache miss)
00:33:07 | DEBUG | #6 2.630 npm http fetch GET 200 https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz 1509ms (cache miss)
00:33:07 | DEBUG | #6 2.630 npm http fetch GET 200 https://registry.npmjs.org/normalize-path/-/normalize-path-3.0.0.tgz 1508ms (cache miss)
00:33:07 | DEBUG | #6 2.645 npm http fetch GET 200 https://registry.npmjs.org/next-themes/-/next-themes-0.4.6.tgz 1522ms (cache miss)
00:33:07 | DEBUG | #6 2.657 npm http fetch GET 200 https://registry.npmjs.org/mz/-/mz-2.7.0.tgz 1534ms (cache miss)
00:33:07 | DEBUG | #6 2.657 npm http fetch GET 200 https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz 1533ms (cache miss)
00:33:07 | DEBUG | #6 2.658 npm http fetch GET 200 https://registry.npmjs.org/lines-and-columns/-/lines-and-columns-1.2.4.tgz 1533ms (cache miss)
00:33:07 | DEBUG | #6 2.663 npm http fetch GET 200 https://registry.npmjs.org/react/-/react-19.1.0.tgz 1547ms (cache miss)
00:33:07 | DEBUG | #6 2.671 npm http fetch GET 200 https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz 1547ms (cache miss)
00:33:07 | DEBUG | #6 2.672 npm http fetch GET 200 https://registry.npmjs.org/lilconfig/-/lilconfig-3.1.3.tgz 1546ms (cache miss)
00:33:07 | DEBUG | #6 2.678 npm http fetch GET 200 https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz 1552ms (cache miss)
00:33:07 | DEBUG | #6 2.687 npm http fetch GET 200 https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz 1561ms (cache miss)
00:33:07 | DEBUG | #6 2.694 npm http fetch GET 200 https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz 1566ms (cache miss)
00:33:07 | DEBUG | #6 2.711 npm http fetch GET 200 https://registry.npmjs.org/is-binary-path/-/is-binary-path-2.1.0.tgz 1584ms (cache miss)
00:33:07 | DEBUG | #6 2.720 npm http fetch GET 200 https://registry.npmjs.org/internmap/-/internmap-2.0.3.tgz 1591ms (cache miss)
00:33:07 | DEBUG | #6 2.728 npm http fetch GET 200 https://registry.npmjs.org/redux/-/redux-5.0.1.tgz 1617ms (cache miss)
00:33:07 | DEBUG | #6 2.730 npm http fetch GET 200 https://registry.npmjs.org/is-arrayish/-/is-arrayish-0.3.2.tgz 1602ms (cache miss)
00:33:07 | DEBUG | #6 2.758 npm http fetch GET 200 https://registry.npmjs.org/input-otp/-/input-otp-1.4.2.tgz 1630ms (cache miss)
00:33:07 | DEBUG | #6 2.786 npm http fetch GET 200 https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz 1663ms (cache miss)
00:33:07 | DEBUG | #6 2.803 npm http fetch GET 200 https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz 1686ms (cache miss)
00:33:07 | DEBUG | #6 2.806 npm http fetch GET 200 https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz 1677ms (cache miss)
00:33:07 | DEBUG | #6 2.807 npm http fetch GET 200 https://registry.npmjs.org/get-nonce/-/get-nonce-1.0.1.tgz 1677ms (cache miss)
00:33:07 | DEBUG | #6 2.833 npm http fetch GET 200 https://registry.npmjs.org/next-cloudinary/-/next-cloudinary-6.16.0.tgz 1710ms (cache miss)
00:33:07 | DEBUG | #6 2.834 npm http fetch GET 200 https://registry.npmjs.org/fraction.js/-/fraction.js-4.3.7.tgz 1703ms (cache miss)
00:33:07 | DEBUG | #6 2.834 npm http fetch GET 200 https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz 1704ms (cache miss)
00:33:07 | DEBUG | #6 2.862 npm http fetch GET 200 https://registry.npmjs.org/tailwind-merge/-/tailwind-merge-2.6.0.tgz 1761ms (cache miss)
00:33:07 | DEBUG | #6 2.870 npm http fetch GET 200 https://registry.npmjs.org/sharp/-/sharp-0.33.5.tgz 1761ms (cache miss)
00:33:07 | DEBUG | #6 2.870 npm http fetch GET 200 https://registry.npmjs.org/reselect/-/reselect-5.1.1.tgz 1760ms (cache miss)
00:33:07 | DEBUG | #6 2.880 npm http fetch GET 200 https://registry.npmjs.org/embla-carousel-reactive-utils/-/embla-carousel-reactive-utils-8.6.0.tgz 1747ms (cache miss)
00:33:07 | DEBUG | #6 2.886 npm http fetch GET 200 https://registry.npmjs.org/embla-carousel-react/-/embla-carousel-react-8.6.0.tgz 1753ms (cache miss)
00:33:07 | DEBUG | #6 2.900 npm http fetch GET 200 https://registry.npmjs.org/react-remove-scroll/-/react-remove-scroll-2.7.1.tgz 1786ms (cache miss)
00:33:07 | DEBUG | #6 2.924 npm http fetch GET 200 https://registry.npmjs.org/dlv/-/dlv-1.1.3.tgz 1791ms (cache miss)
00:33:07 | DEBUG | #6 2.932 npm http fetch GET 200 https://registry.npmjs.org/didyoumean/-/didyoumean-1.2.2.tgz 1798ms (cache miss)
00:33:07 | DEBUG | #6 2.955 npm http fetch GET 200 https://registry.npmjs.org/detect-node-es/-/detect-node-es-1.1.0.tgz 1820ms (cache miss)
00:33:07 | DEBUG | #6 2.988 npm http fetch GET 200 https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.176.tgz 1854ms (cache miss)
00:33:07 | DEBUG | #6 2.998 npm http fetch GET 200 https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz 1895ms (cache miss)
00:33:07 | DEBUG | #6 3.060 npm http fetch GET 200 https://registry.npmjs.org/react-resizable-panels/-/react-resizable-panels-3.0.3.tgz 1946ms (cache miss)
00:33:07 | DEBUG | #6 3.062 npm http fetch GET 200 https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz 1942ms (cache miss)
00:33:07 | DEBUG | #6 3.077 npm http fetch GET 200 https://registry.npmjs.org/d3-timer/-/d3-timer-3.0.1.tgz 1941ms (cache miss)
00:33:07 | DEBUG | #6 3.090 npm http fetch GET 200 https://registry.npmjs.org/decimal.js-light/-/decimal.js-light-2.5.1.tgz 1956ms (cache miss)
00:33:07 | DEBUG | #6 3.091 npm http fetch GET 200 https://registry.npmjs.org/d3-time/-/d3-time-3.1.0.tgz 1954ms (cache miss)
00:33:07 | DEBUG | #6 3.126 npm http fetch GET 200 https://registry.npmjs.org/d3-path/-/d3-path-3.1.0.tgz 1988ms (cache miss)
00:33:07 | DEBUG | #6 3.159 npm http fetch GET 200 https://registry.npmjs.org/d3-format/-/d3-format-3.1.0.tgz 2020ms (cache miss)
00:33:07 | DEBUG | #6 3.167 npm http fetch GET 200 https://registry.npmjs.org/d3-ease/-/d3-ease-3.0.1.tgz 2026ms (cache miss)
00:33:07 | DEBUG | #6 3.240 npm http fetch GET 200 https://registry.npmjs.org/d3-color/-/d3-color-3.1.0.tgz 2100ms (cache miss)
00:33:07 | DEBUG | #6 3.383 npm http fetch GET 200 https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz 2243ms (cache miss)
00:33:07 | DEBUG | #6 3.477 npm http fetch GET 200 https://registry.npmjs.org/commander/-/commander-4.1.1.tgz 2336ms (cache miss)
00:33:07 | DEBUG | #6 3.478 npm http fetch GET 200 https://registry.npmjs.org/color-string/-/color-string-1.9.1.tgz 2336ms (cache miss)
00:33:07 | DEBUG | #6 3.478 npm http fetch GET 200 https://registry.npmjs.org/color/-/color-4.2.3.tgz 2336ms (cache miss)
00:33:07 | DEBUG | #6 3.505 npm http fetch GET 200 https://registry.npmjs.org/clsx/-/clsx-2.1.1.tgz 2362ms (cache miss)
00:33:08 | DEBUG | #6 3.505 npm http fetch GET 200 https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz 2363ms (cache miss)
00:33:08 | DEBUG | #6 3.513 npm http fetch GET 200 https://registry.npmjs.org/cmdk/-/cmdk-1.1.1.tgz 2371ms (cache miss)
00:33:08 | DEBUG | #6 3.525 npm http fetch GET 200 https://registry.npmjs.org/d3-interpolate/-/d3-interpolate-3.0.1.tgz 2385ms (cache miss)
00:33:08 | DEBUG | #6 3.526 npm http fetch GET 200 https://registry.npmjs.org/class-variance-authority/-/class-variance-authority-0.7.1.tgz 2383ms (cache miss)
00:33:08 | DEBUG | #6 3.579 npm http fetch GET 200 https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.3.tgz 2448ms (cache miss)
00:33:08 | DEBUG | #6 3.590 npm http fetch GET 200 https://registry.npmjs.org/d3-scale/-/d3-scale-4.0.2.tgz 2452ms (cache miss)
00:33:08 | DEBUG | #6 3.607 npm http fetch GET 200 https://registry.npmjs.org/camelcase-css/-/camelcase-css-2.0.1.tgz 2463ms (cache miss)
00:33:08 | DEBUG | #6 3.609 npm http fetch GET 200 https://registry.npmjs.org/braces/-/braces-3.0.3.tgz 2463ms (cache miss)
00:33:08 | DEBUG | #6 3.609 npm http fetch GET 200 https://registry.npmjs.org/aria-hidden/-/aria-hidden-1.2.6.tgz 2457ms (cache miss)
00:33:08 | DEBUG | #6 3.610 npm http fetch GET 200 https://registry.npmjs.org/arg/-/arg-5.0.2.tgz 2458ms (cache miss)
00:33:08 | DEBUG | #6 3.610 npm http fetch GET 200 https://registry.npmjs.org/anymatch/-/anymatch-3.1.3.tgz 2457ms (cache miss)
00:33:08 | DEBUG | #6 3.611 npm http fetch GET 200 https://registry.npmjs.org/any-promise/-/any-promise-1.3.0.tgz 2457ms (cache miss)
00:33:08 | DEBUG | #6 3.621 npm http fetch GET 200 https://registry.npmjs.org/@types/use-sync-external-store/-/use-sync-external-store-0.0.6.tgz 2468ms (cache miss)
00:33:08 | DEBUG | #6 3.622 npm http fetch GET 200 https://registry.npmjs.org/@types/react-dom/-/react-dom-19.1.6.tgz 2468ms (cache miss)
00:33:08 | DEBUG | #6 3.631 npm http fetch GET 200 https://registry.npmjs.org/immer/-/immer-10.1.1.tgz 2502ms (cache miss)
00:33:08 | DEBUG | #6 3.672 npm http fetch GET 200 https://registry.npmjs.org/d3-time-format/-/d3-time-format-4.1.0.tgz 2534ms (cache miss)
00:33:08 | DEBUG | #6 3.673 npm http fetch GET 200 https://registry.npmjs.org/chokidar/-/chokidar-3.6.0.tgz 2530ms (cache miss)
00:33:08 | DEBUG | #6 3.711 npm http fetch GET 200 https://registry.npmjs.org/@types/d3-interpolate/-/d3-interpolate-3.0.4.tgz 2555ms (cache miss)
00:33:08 | DEBUG | #6 3.722 npm http fetch GET 200 https://registry.npmjs.org/@types/d3-path/-/d3-path-3.1.1.tgz 2567ms (cache miss)
00:33:08 | DEBUG | #6 3.723 npm http fetch GET 200 https://registry.npmjs.org/@types/d3-scale/-/d3-scale-4.0.9.tgz 2567ms (cache miss)
00:33:08 | DEBUG | #6 3.723 npm http fetch GET 200 https://registry.npmjs.org/@types/d3-timer/-/d3-timer-3.0.2.tgz 2569ms (cache miss)
00:33:08 | DEBUG | #6 3.724 npm http fetch GET 200 https://registry.npmjs.org/@types/d3-time/-/d3-time-3.0.4.tgz 2569ms (cache miss)
00:33:08 | DEBUG | #6 3.724 npm http fetch GET 200 https://registry.npmjs.org/@types/d3-ease/-/d3-ease-3.0.2.tgz 2568ms (cache miss)
00:33:08 | DEBUG | #6 3.734 npm http fetch GET 200 https://registry.npmjs.org/@types/d3-shape/-/d3-shape-3.1.7.tgz 2579ms (cache miss)
00:33:08 | DEBUG | #6 3.735 npm http fetch GET 200 https://registry.npmjs.org/@types/d3-color/-/d3-color-3.1.3.tgz 2579ms (cache miss)
00:33:08 | DEBUG | #6 3.735 npm http fetch GET 200 https://registry.npmjs.org/@types/d3-array/-/d3-array-3.2.1.tgz 2578ms (cache miss)
00:33:08 | DEBUG | #6 3.805 npm http fetch GET 200 https://registry.npmjs.org/react-redux/-/react-redux-9.2.0.tgz 2690ms (cache miss)
00:33:08 | DEBUG | #6 3.832 npm http fetch GET 200 https://registry.npmjs.org/@standard-schema/utils/-/utils-0.3.0.tgz 2674ms (cache miss)
00:33:08 | DEBUG | #6 3.832 npm http fetch GET 200 https://registry.npmjs.org/@standard-schema/spec/-/spec-1.0.0.tgz 2674ms (cache miss)
00:33:08 | DEBUG | #6 3.840 npm http fetch GET 200 https://registry.npmjs.org/@swc/counter/-/counter-0.1.3.tgz 2683ms (cache miss)
00:33:08 | DEBUG | #6 3.846 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-use-rect/-/react-use-rect-1.1.1.tgz 2686ms (cache miss)
00:33:08 | DEBUG | #6 3.846 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-use-size/-/react-use-size-1.1.1.tgz 2687ms (cache miss)
00:33:08 | DEBUG | #6 3.847 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-visually-hidden/-/react-visually-hidden-1.2.3.tgz 2687ms (cache miss)
00:33:08 | DEBUG | #6 3.847 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/rect/-/rect-1.1.1.tgz 2689ms (cache miss)
00:33:08 | DEBUG | #6 3.860 npm http fetch GET 200 https://registry.npmjs.org/busboy/-/busboy-1.6.0.tgz 2715ms (cache miss)
00:33:08 | DEBUG | #6 3.861 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-use-previous/-/react-use-previous-1.1.1.tgz 2702ms (cache miss)
00:33:08 | DEBUG | #6 3.867 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-use-layout-effect/-/react-use-layout-effect-1.1.1.tgz 2706ms (cache miss)
00:33:08 | DEBUG | #6 3.926 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-use-is-hydrated/-/react-use-is-hydrated-0.1.0.tgz 2765ms (cache miss)
00:33:08 | DEBUG | #6 4.029 npm http fetch GET 200 https://registry.npmjs.org/d3-shape/-/d3-shape-3.2.0.tgz 2891ms (cache miss)
00:33:08 | DEBUG | #6 4.033 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-use-escape-keydown/-/react-use-escape-keydown-1.1.1.tgz 2870ms (cache miss)
00:33:08 | DEBUG | #6 4.055 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-use-controllable-state/-/react-use-controllable-state-1.2.2.tgz 2893ms (cache miss)
00:33:08 | DEBUG | #6 4.064 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-use-effect-event/-/react-use-effect-event-0.0.2.tgz 2902ms (cache miss)
00:33:08 | DEBUG | #6 4.073 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-use-callback-ref/-/react-use-callback-ref-1.1.1.tgz 2909ms (cache miss)
00:33:08 | DEBUG | #6 4.088 npm http fetch GET 200 https://registry.npmjs.org/d3-array/-/d3-array-3.2.4.tgz 2947ms (cache miss)
00:33:08 | DEBUG | #6 4.096 npm http fetch GET 200 https://registry.npmjs.org/jiti/-/jiti-1.21.7.tgz 2970ms (cache miss)
00:33:08 | DEBUG | #6 4.107 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-toggle-group/-/react-toggle-group-1.1.10.tgz 2944ms (cache miss)
00:33:08 | DEBUG | #6 4.114 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-toggle/-/react-toggle-1.1.9.tgz 2951ms (cache miss)
00:33:08 | DEBUG | #6 4.123 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-tabs/-/react-tabs-1.1.12.tgz 2959ms (cache miss)
00:33:08 | DEBUG | #6 4.155 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-tooltip/-/react-tooltip-1.2.7.tgz 2992ms (cache miss)
00:33:08 | DEBUG | #6 4.166 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-switch/-/react-switch-1.2.5.tgz 3002ms (cache miss)
00:33:08 | DEBUG | #6 4.179 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-toast/-/react-toast-1.2.14.tgz 3014ms (cache miss)
00:33:08 | DEBUG | #6 4.179 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-slot/-/react-slot-1.2.3.tgz 3015ms (cache miss)
00:33:08 | DEBUG | #6 4.180 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-separator/-/react-separator-1.1.7.tgz 3014ms (cache miss)
00:33:08 | DEBUG | #6 4.193 npm http fetch GET 200 https://registry.npmjs.org/binary-extensions/-/binary-extensions-2.3.0.tgz 3042ms (cache miss)
00:33:08 | DEBUG | #6 4.217 npm http fetch GET 200 https://registry.npmjs.org/csstype/-/csstype-3.1.3.tgz 3076ms (cache miss)
00:33:08 | DEBUG | #6 4.248 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-radio-group/-/react-radio-group-1.3.7.tgz 3080ms (cache miss)
00:33:08 | DEBUG | #6 4.248 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-roving-focus/-/react-roving-focus-1.1.10.tgz 3082ms (cache miss)
00:33:08 | DEBUG | #6 4.270 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-progress/-/react-progress-1.1.7.tgz 3103ms (cache miss)
00:33:08 | DEBUG | #6 4.280 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-slider/-/react-slider-1.3.5.tgz 3115ms (cache miss)
00:33:08 | DEBUG | #6 4.294 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-primitive/-/react-primitive-2.1.3.tgz 3127ms (cache miss)
00:33:08 | DEBUG | #6 4.327 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-scroll-area/-/react-scroll-area-1.2.9.tgz 3162ms (cache miss)
00:33:08 | DEBUG | #6 4.370 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-portal/-/react-portal-1.1.9.tgz 3202ms (cache miss)
00:33:08 | DEBUG | #6 4.383 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-popper/-/react-popper-1.2.7.tgz 3215ms (cache miss)
00:33:08 | DEBUG | #6 4.398 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-popover/-/react-popover-1.1.14.tgz 3229ms (cache miss)
00:33:08 | DEBUG | #6 4.398 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-presence/-/react-presence-1.1.4.tgz 3230ms (cache miss)
00:33:08 | DEBUG | #6 4.443 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-label/-/react-label-2.1.7.tgz 3272ms (cache miss)
00:33:08 | DEBUG | #6 4.443 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-focus-scope/-/react-focus-scope-1.1.7.tgz 3272ms (cache miss)
00:33:08 | DEBUG | #6 4.464 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-hover-card/-/react-hover-card-1.1.14.tgz 3293ms (cache miss)
00:33:08 | DEBUG | #6 4.464 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-id/-/react-id-1.1.1.tgz 3294ms (cache miss)
00:33:08 | DEBUG | #6 4.473 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-focus-guards/-/react-focus-guards-1.1.2.tgz 3302ms (cache miss)
00:33:09 | DEBUG | #6 4.488 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-select/-/react-select-2.2.5.tgz 3322ms (cache miss)
00:33:09 | DEBUG | #6 4.488 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-dropdown-menu/-/react-dropdown-menu-2.1.15.tgz 3317ms (cache miss)
00:33:09 | DEBUG | #6 4.497 npm http fetch GET 200 https://registry.npmjs.org/@types/react/-/react-19.1.8.tgz 3343ms (cache miss)
00:33:09 | DEBUG | #6 4.509 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-dismissable-layer/-/react-dismissable-layer-1.1.10.tgz 3338ms (cache miss)
00:33:09 | DEBUG | #6 4.519 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-direction/-/react-direction-1.1.1.tgz 3346ms (cache miss)
00:33:09 | DEBUG | #6 4.519 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-dialog/-/react-dialog-1.1.14.tgz 3347ms (cache miss)
00:33:09 | DEBUG | #6 4.536 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-context/-/react-context-1.1.2.tgz 3363ms (cache miss)
00:33:09 | DEBUG | #6 4.537 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-compose-refs/-/react-compose-refs-1.1.2.tgz 3363ms (cache miss)
00:33:09 | DEBUG | #6 4.537 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-context-menu/-/react-context-menu-2.2.15.tgz 3365ms (cache miss)
00:33:09 | DEBUG | #6 4.550 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-menubar/-/react-menubar-1.1.15.tgz 3380ms (cache miss)
00:33:09 | DEBUG | #6 4.560 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-collapsible/-/react-collapsible-1.1.11.tgz 3386ms (cache miss)
00:33:09 | DEBUG | #6 4.585 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-checkbox/-/react-checkbox-1.3.2.tgz 3411ms (cache miss)
00:33:09 | DEBUG | #6 4.586 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-arrow/-/react-arrow-1.1.7.tgz 3411ms (cache miss)
00:33:09 | DEBUG | #6 4.598 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-menu/-/react-menu-2.1.15.tgz 3428ms (cache miss)
00:33:09 | DEBUG | #6 4.599 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-avatar/-/react-avatar-1.1.10.tgz 3425ms (cache miss)
00:33:09 | DEBUG | #6 4.606 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-alert-dialog/-/react-alert-dialog-1.1.14.tgz 3431ms (cache miss)
00:33:09 | DEBUG | #6 4.607 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-accordion/-/react-accordion-1.2.11.tgz 3430ms (cache miss)
00:33:09 | DEBUG | #6 4.612 npm http fetch GET 200 https://registry.npmjs.org/embla-carousel/-/embla-carousel-8.6.0.tgz 3479ms (cache miss)
00:33:09 | DEBUG | #6 4.615 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/primitive/-/primitive-1.1.2.tgz 3433ms (cache miss)
00:33:09 | DEBUG | #6 4.615 npm http fetch GET 200 https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz 3433ms (cache miss)
00:33:09 | DEBUG | #6 4.616 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/number/-/number-1.1.1.tgz 3435ms (cache miss)
00:33:09 | DEBUG | #6 4.639 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-navigation-menu/-/react-navigation-menu-1.2.13.tgz 3469ms (cache miss)
00:33:09 | DEBUG | #6 4.639 npm http fetch GET 200 https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz 3457ms (cache miss)
00:33:09 | DEBUG | #6 4.640 npm http fetch GET 200 https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz 3458ms (cache miss)
00:33:09 | DEBUG | #6 4.659 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-collection/-/react-collection-1.1.7.tgz 3486ms (cache miss)
00:33:09 | DEBUG | #6 4.661 npm http fetch GET 200 https://registry.npmjs.org/@next/env/-/env-15.2.4.tgz 3477ms (cache miss)
00:33:09 | DEBUG | #6 4.668 npm http fetch GET 200 https://registry.npmjs.org/@radix-ui/react-aspect-ratio/-/react-aspect-ratio-1.1.7.tgz 3493ms (cache miss)
00:33:09 | DEBUG | #6 4.681 npm http fetch GET 200 https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.8.tgz 3497ms (cache miss)
00:33:09 | DEBUG | #6 4.694 npm http fetch GET 200 https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz 3509ms (cache miss)
00:33:09 | DEBUG | #6 4.701 npm http fetch GET 200 https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.21.tgz 3549ms (cache miss)
00:33:09 | DEBUG | #6 4.703 npm http fetch GET 200 https://registry.npmjs.org/@floating-ui/react-dom/-/react-dom-2.1.3.tgz 3518ms (cache miss)
00:33:09 | DEBUG | #6 4.704 npm http fetch GET 200 https://registry.npmjs.org/@floating-ui/utils/-/utils-0.2.9.tgz 3518ms (cache miss)
00:33:09 | DEBUG | #6 4.710 npm http fetch GET 200 https://registry.npmjs.org/@date-fns/tz/-/tz-1.2.0.tgz 3524ms (cache miss)
00:33:09 | DEBUG | #6 4.725 npm http fetch GET 200 https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz 3542ms (cache miss)
00:33:09 | DEBUG | #6 4.741 npm http fetch GET 200 https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz 3553ms (cache miss)
00:33:09 | DEBUG | #6 4.746 npm http fetch GET 200 https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-4.0.2.tgz 3557ms (cache miss)
00:33:09 | DEBUG | #6 4.747 npm http fetch GET 200 https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz 3557ms (cache miss)
00:33:09 | DEBUG | #6 4.764 npm http fetch GET 200 https://registry.npmjs.org/@floating-ui/dom/-/dom-1.7.1.tgz 3579ms (cache miss)
00:33:09 | DEBUG | #6 4.765 npm http fetch GET 200 https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz 3574ms (cache miss)
00:33:09 | DEBUG | #6 4.774 npm http fetch GET 200 https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz 3591ms (cache miss)
00:33:09 | DEBUG | #6 4.794 npm http fetch GET 200 https://registry.npmjs.org/@floating-ui/core/-/core-1.7.1.tgz 3608ms (cache miss)
00:33:09 | DEBUG | #6 5.037 npm http fetch GET 200 https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz 3847ms (cache miss)
00:33:09 | DEBUG | #6 5.069 npm http fetch GET 200 https://registry.npmjs.org/react-hook-form/-/react-hook-form-7.58.1.tgz 3954ms (cache miss)
00:33:09 | DEBUG | #6 5.132 npm http fetch GET 200 https://registry.npmjs.org/sucrase/-/sucrase-3.35.0.tgz 4031ms (cache miss)
00:33:09 | DEBUG | #6 5.187 npm http fetch GET 200 https://registry.npmjs.org/@cloudinary-util/util/-/util-4.0.0.tgz 3999ms (cache miss)
00:33:09 | DEBUG | #6 5.201 npm http fetch GET 200 https://registry.npmjs.org/yaml/-/yaml-2.8.0.tgz 4144ms (cache miss)
00:33:09 | DEBUG | #6 5.239 npm http fetch GET 200 https://registry.npmjs.org/@cloudinary-util/types/-/types-1.5.10.tgz 4051ms (cache miss)
00:33:09 | DEBUG | #6 5.288 npm http fetch GET 200 https://registry.npmjs.org/@types/node/-/node-22.15.33.tgz 4134ms (cache miss)
00:33:09 | DEBUG | #6 5.312 npm http fetch GET 200 https://registry.npmjs.org/@cloudinary-util/util/-/util-3.3.2.tgz 4121ms (cache miss)
00:33:09 | DEBUG | #6 5.360 npm http fetch GET 200 https://registry.npmjs.org/victory-vendor/-/victory-vendor-37.3.6.tgz 4298ms (cache miss)
00:33:10 | DEBUG | #6 5.587 npm http fetch GET 200 https://registry.npmjs.org/react-dom/-/react-dom-19.1.0.tgz 4472ms (cache miss)
00:33:10 | DEBUG | #6 5.627 npm http fetch GET 200 https://registry.npmjs.org/@cloudinary-util/url-loader/-/url-loader-5.10.4.tgz 4440ms (cache miss)
00:33:10 | DEBUG | #6 5.981 npm http fetch GET 200 https://registry.npmjs.org/zod/-/zod-3.25.67.tgz 4925ms (cache miss)
00:33:10 | DEBUG | #6 6.159 npm http fetch GET 200 https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.4.17.tgz 5063ms (cache miss)
00:33:11 | DEBUG | #6 6.850 npm http fetch GET 200 https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.15.tgz 5693ms (cache miss)
00:33:11 | DEBUG | #6 7.018 npm http fetch GET 200 https://registry.npmjs.org/@reduxjs/toolkit/-/toolkit-2.8.2.tgz 5859ms (cache miss)
00:33:11 | DEBUG | #6 7.055 npm http fetch GET 200 https://registry.npmjs.org/@hookform/resolvers/-/resolvers-3.10.0.tgz 5870ms (cache miss)
00:33:11 | DEBUG | #6 7.103 npm http fetch GET 200 https://registry.npmjs.org/react-day-picker/-/react-day-picker-9.7.0.tgz 5988ms (cache miss)
00:33:11 | DEBUG | #6 7.416 npm http fetch GET 200 https://registry.npmjs.org/recharts/-/recharts-3.0.0.tgz 6303ms (cache miss)
00:33:12 | DEBUG | #6 7.917 npm http fetch GET 200 https://registry.npmjs.org/@cloudinary/url-gen/-/url-gen-1.15.0.tgz 6731ms (cache miss)
00:33:12 | DEBUG | #6 8.045 npm http fetch GET 200 https://registry.npmjs.org/@cloudinary/transformation-builder-sdk/-/transformation-builder-sdk-1.17.0.tgz 6857ms (cache miss)
00:33:12 | DEBUG | #6 8.130 npm http fetch GET 200 https://registry.npmjs.org/typescript/-/typescript-5.8.3.tgz 7044ms (cache miss)
00:33:13 | DEBUG | #6 9.279 npm http fetch GET 200 https://registry.npmjs.org/es-toolkit/-/es-toolkit-1.39.5.tgz 8148ms (cache miss)
00:33:14 | DEBUG | #6 9.584 npm http fetch GET 200 https://registry.npmjs.org/date-fns-jalali/-/date-fns-jalali-4.1.0-0.tgz 8448ms (cache miss)
00:33:15 | DEBUG | #6 10.70 npm http fetch GET 200 https://registry.npmjs.org/lucide-react/-/lucide-react-0.454.0.tgz 9575ms (cache miss)
00:33:16 | DEBUG | #6 11.99 npm http fetch GET 200 https://registry.npmjs.org/date-fns/-/date-fns-4.1.0.tgz 10856ms (cache miss)
00:33:17 | DEBUG | #6 12.83 npm http fetch GET 200 https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-15.2.4.tgz 11777ms (cache miss)
00:33:17 | DEBUG | #6 12.83 npm http fetch GET 200 https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-15.2.4.tgz 11779ms (cache miss)
00:33:19 | DEBUG | #6 14.85 npm http fetch GET 200 https://registry.npmjs.org/next/-/next-15.2.4.tgz 13730ms (cache miss)
00:33:19 | DEBUG | #6 14.88 npm info run sharp@0.33.5 install node_modules/sharp node install/check
00:33:19 | DEBUG | #6 14.94 npm info run sharp@0.33.5 install { code: 0, signal: null }
00:33:19 | DEBUG | #6 15.17 
00:33:19 | DEBUG | #6 15.17 added 282 packages, and audited 283 packages in 15s
00:33:19 | DEBUG | #6 15.17 
00:33:19 | DEBUG | #6 15.17 43 packages are looking for funding
00:33:19 | DEBUG | #6 15.17   run `npm fund` for details
00:33:19 | DEBUG | #6 15.17 
00:33:19 | DEBUG | #6 15.17 found 0 vulnerabilities
00:33:19 | DEBUG | #6 15.17 npm verbose cwd /opt/build
00:33:19 | DEBUG | #6 15.17 npm verbose os Linux 5.15.0-91-generic
00:33:19 | DEBUG | #6 15.17 npm verbose node v22.17.0
00:33:19 | DEBUG | #6 15.17 npm verbose npm  v10.9.2
00:33:19 | DEBUG | #6 15.17 npm verbose exit 0
00:33:19 | DEBUG | #6 15.17 npm info ok
00:33:21 | DEBUG | #6 DONE 16.9s
00:33:21 | DEBUG | 
00:33:21 | DEBUG | #7 exporting to image
00:33:21 | DEBUG | #7 exporting layers
00:33:24 | DEBUG | #7 exporting layers 3.3s done
00:33:24 | DEBUG | #7 writing image sha256:5cc6a058434a368cdb7daa5dbcebcf45d8362bf1cbc5b2d86c36cd120cff33e5
00:33:24 | DEBUG | #7 writing image sha256:5cc6a058434a368cdb7daa5dbcebcf45d8362bf1cbc5b2d86c36cd120cff33e5 done
00:33:24 | DEBUG | #7 naming to docker.io/library/final-image-d9c36656-7adb-4a03-bccb-2abb68cb2413-dependencies done
00:33:24 | DEBUG | #7 DONE 3.3s
00:33:24 | Layer final-image-d9c36656-7adb-4a03-bccb-2abb68cb2413-dependencies built successfully
00:33:25 | Building final layer
00:33:25 | DEBUG | #0 building with "default" instance using docker driver
00:33:25 | DEBUG | 
00:33:25 | DEBUG | #1 [internal] load build definition from Dockerfile
00:33:25 | DEBUG | #1 transferring dockerfile: 159B done
00:33:25 | DEBUG | #1 DONE 0.0s
00:33:25 | DEBUG | 
00:33:25 | DEBUG | #2 [internal] load metadata for docker.io/library/final-image-d9c36656-7adb-4a03-bccb-2abb68cb2413-dependencies:latest
00:33:25 | DEBUG | #2 DONE 0.0s
00:33:25 | DEBUG | 
00:33:25 | DEBUG | #3 [internal] load .dockerignore
00:33:25 | DEBUG | #3 transferring context: 2B done
00:33:25 | DEBUG | #3 DONE 0.0s
00:33:25 | DEBUG | 
00:33:25 | DEBUG | #4 [1/4] FROM docker.io/library/final-image-d9c36656-7adb-4a03-bccb-2abb68cb2413-dependencies:latest
00:33:25 | DEBUG | #4 DONE 0.0s
00:33:25 | DEBUG | 
00:33:25 | DEBUG | #5 [2/4] WORKDIR /opt/build
00:33:25 | DEBUG | #5 DONE 0.1s
00:33:26 | DEBUG | 
00:33:26 | DEBUG | #6 [3/4] RUN cd /opt/build
00:33:26 | DEBUG | #6 DONE 0.3s
00:33:26 | DEBUG | 
00:33:26 | DEBUG | #7 [4/4] RUN npm run build
00:33:26 | DEBUG | #7 0.551 
00:33:26 | DEBUG | #7 0.551 > villagora-retreat-karelia@1.0.0 build
00:33:26 | DEBUG | #7 0.551 > next build
00:33:26 | DEBUG | #7 0.551 
00:33:27 | DEBUG | #7 1.240 Attention: Next.js now collects completely anonymous telemetry regarding usage.
00:33:27 | DEBUG | #7 1.240 This information is used to shape Next.js' roadmap and prioritize features.
00:33:27 | DEBUG | #7 1.240 You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
00:33:27 | DEBUG | #7 1.241 https://nextjs.org/telemetry
00:33:27 | DEBUG | #7 1.241 
00:33:27 | DEBUG | #7 1.308    ▲ Next.js 15.2.4
00:33:27 | DEBUG | #7 1.308 
00:33:27 | DEBUG | #7 1.385    Creating an optimized production build ...
00:33:52 | DEBUG | #7 26.44  ✓ Compiled successfully
00:33:52 | DEBUG | #7 26.44    Linting and checking validity of types ...
00:34:10 | DEBUG | #7 44.17    Collecting page data ...
00:34:14 | DEBUG | #7 48.48    Generating static pages (0/7) ...
00:34:17 | DEBUG | #7 51.13    Generating static pages (1/7) 
00:34:17 | DEBUG | #7 51.43    Generating static pages (3/7) 
00:34:17 | DEBUG | #7 51.43    Generating static pages (5/7) 
00:34:17 | DEBUG | #7 51.43  ✓ Generating static pages (7/7)
00:34:18 | DEBUG | #7 51.93    Finalizing page optimization ...
00:34:18 | DEBUG | #7 51.93    Collecting build traces ...
00:34:27 | DEBUG | #7 61.26 
00:34:27 | DEBUG | #7 61.26 Route (app)                                Size  First Load JS
00:34:27 | DEBUG | #7 61.26 ┌ ○ /                                   17.8 kB         282 kB
00:34:27 | DEBUG | #7 61.26 ├ ○ /_not-found                           192 B         265 kB
00:34:27 | DEBUG | #7 61.26 ├ ƒ /api/clear-cache                      139 B         265 kB
00:34:27 | DEBUG | #7 61.26 ├ ƒ /api/telegram                         139 B         265 kB
00:34:27 | DEBUG | #7 61.26 └ ○ /sitemap.xml                          139 B         265 kB
00:34:27 | DEBUG | #7 61.26 + First Load JS shared by all            264 kB
00:34:27 | DEBUG | #7 61.26   └ chunks/vendors-c448f47ce5c70ec6.js   262 kB
00:34:27 | DEBUG | #7 61.26   └ other shared chunks (total)         1.91 kB
00:34:27 | DEBUG | #7 61.26 
00:34:27 | DEBUG | #7 61.26 
00:34:27 | DEBUG | #7 61.26 ○  (Static)   prerendered as static content
00:34:27 | DEBUG | #7 61.26 ƒ  (Dynamic)  server-rendered on demand
00:34:27 | DEBUG | #7 61.26 
00:34:27 | DEBUG | #7 DONE 61.4s
00:34:27 | DEBUG | 
00:34:27 | DEBUG | #8 exporting to image
00:34:27 | DEBUG | #8 exporting layers
00:34:27 | DEBUG | #8 exporting layers 0.2s done
00:34:27 | DEBUG | #8 writing image sha256:cb19c6678bcc8dd9d00643dcdf6f764373a98907799d4f185265a60614aca21a
00:34:27 | DEBUG | #8 writing image sha256:cb19c6678bcc8dd9d00643dcdf6f764373a98907799d4f185265a60614aca21a done
00:34:27 | DEBUG | #8 naming to docker.io/library/final-image-d9c36656-7adb-4a03-bccb-2abb68cb2413-build done
00:34:27 | DEBUG | #8 DONE 0.2s
00:34:27 | Layer final-image-d9c36656-7adb-4a03-bccb-2abb68cb2413-build built successfully
00:34:28 | Copying the code
00:34:28 | Requesting SSL certificates for drilspb4202-git-github-com-drilspb4202-vilagora-ae41.twc1.net
00:34:29 | Setting up nginx
00:34:29 | Using /out as default folder for index.html
00:34:29 | Index dir contents: []
00:34:29 | ERROR | index.html or index.htm not found in the /out
00:34:29 | ERROR | Deploy error