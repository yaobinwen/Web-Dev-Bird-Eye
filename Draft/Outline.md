# Outline

In general, the entire tutorial is divided into two parts: front-end and back-end.

## Front-end Technologies

- [What is The Web?](https://www.youtube.com/playlist?list=PLo3w8EB99pqLEopnunz-dOOBJ8t-Wgt2g)
- [HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer)
- WebAssembly
  - JIT JavaScript virtual machines
- [Emscripten: An LLVM-to-JavaScript Compiler](https://github.com/kripken/emscripten)
- [Asm.js](http://asmjs.org/spec/latest/)
- Node.js: How `node.js` fits into the front-end ecosystem.
  - [node 源码粗读系列](https://github.com/xtx1130/blog)
- Think about how these study guides help:
  - [frontend-dev-bookmarks](https://github.com/dypsilon/frontend-dev-bookmarks): "Manually curated collection of resources for frontend web developers."
  - [frontend-guide](https://github.com/grab/front-end-guide): Study guide and introduction to the modern front end stack. Some other interesting articles are:
  - [A Study Plan To Cure JavaScript Fatigue](https://medium.freecodecamp.org/a-study-plan-to-cure-javascript-fatigue-8ad3a54f2eb1)
  - [How it feels to learn JavaScript in 2016](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f)
- Software Engineering:
  - Look at [JavaScript Standard Style](https://standardjs.com/), a "JavaScript style guide, linter, and formatter".
  - [An Overview of JavaScript Testing in 2018](https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2018-f68950900bc3)
- [Web Fundamentals: Google's opinionated reference for building amazing web experiences.](https://developers.google.com/web/fundamentals/)

## Back-end Technologies

(TODO)

## Useful Links

- Front-end
  - General:
    - [The most essential list of resources for Front-End beginners](https://github.com/thedaviddias/Resources-Front-End-Beginner)
    - [JavaScript Garden](http://bonsaiden.github.io/JavaScript-Garden): A Guide to JavaScript's Quirks and Flaws
    - How JavaScript Works series:
      - https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf
      - https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e
      - https://blog.sessionstack.com/how-javascript-works-memory-management-how-to-handle-4-common-memory-leaks-3f28b94cfbec
      - https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5
      - https://blog.sessionstack.com/how-javascript-works-deep-dive-into-websockets-and-http-2-with-sse-how-to-pick-the-right-path-584e6b8e3bf7
      - https://blog.sessionstack.com/how-javascript-works-a-comparison-with-webassembly-why-in-certain-cases-its-better-to-use-it-d80945172d79
      - https://blog.sessionstack.com/how-javascript-works-the-building-blocks-of-web-workers-5-cases-when-you-should-use-them-a547c0757f6a
      - https://blog.sessionstack.com/how-javascript-works-service-workers-their-life-cycle-and-use-cases-52b19ad98b58
      - https://blog.sessionstack.com/how-javascript-works-the-mechanics-of-web-push-notifications-290176c5c55d
      - https://blog.sessionstack.com/how-javascript-works-tracking-changes-in-the-dom-using-mutationobserver-86adc7446401
      - https://blog.sessionstack.com/how-javascript-works-the-rendering-engine-and-tips-to-optimize-its-performance-7b95553baeda
      - https://blog.sessionstack.com/how-javascript-works-inside-the-networking-layer-how-to-optimize-its-performance-and-security-f71b7414d34c
      - https://blog.sessionstack.com/how-javascript-works-under-the-hood-of-css-and-js-animations-how-to-optimize-their-performance-db0e79586216
      - https://blog.sessionstack.com/how-javascript-works-storage-engines-how-to-choose-the-proper-storage-api-da50879ef576
      - https://blog.sessionstack.com/how-javascript-works-the-internals-of-shadow-dom-how-to-build-self-contained-components-244331c4de6e
      - https://blog.sessionstack.com/how-javascript-works-iterators-tips-on-gaining-advanced-control-over-generators-41dc3eb3bc20
      - https://blog.sessionstack.com/how-javascript-works-csrf-attacks-7-mitigation-strategies-757dfb08e7a6
      - https://blog.sessionstack.com/how-javascript-works-5-types-of-xss-attacks-tips-on-preventing-them-e6e28327748a
      - https://blog.sessionstack.com/how-javascript-works-exceptions-best-practices-for-synchronous-and-asynchronous-environments-39f66b59f012
      - https://blog.sessionstack.com/how-javascript-works-webrtc-and-the-mechanics-of-peer-to-peer-connectivity-87cc56c1d0ab
  - Promises:
    - [Callback Hell](http://callbackhell.com/)
    - [`then/promise`: Bare bones Promises/A+ implementation](https://github.com/then/promise)
    - [Promises](https://www.promisejs.org/)
    - [Promises/A+ specification](https://promisesaplus.com/)
  - Fetch:
    - [`node-fetch`: A light-weight module that brings the Fetch API to Node.js](https://github.com/node-fetch/node-fetch)
  - JavaScript Modules:
    - [Part 1: A Beginner’s Guide](https://medium.freecodecamp.org/javascript-modules-a-beginner-s-guide-783f7d7a5fcc)
    - [Part 2: Module Bundling](https://medium.freecodecamp.org/javascript-modules-part-2-module-bundling-5020383cf306)
    - [The state of JavaScript modules](https://medium.com/webpack/the-state-of-javascript-modules-4636d1774358)
  - [Introducing HTML5](https://introducinghtml5.com/)
  - Concurrency:
    - [Concurrency model and Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
    - [The Node.js Event Loop, Timers, and process.nextTick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
    - [What you should know to really understand the Node.js Event Loop](https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c)
    - [Understanding Javascript Function Executions — Call Stack, Event Loop , Tasks & more](https://medium.com/@gaurav.pandvia/understanding-javascript-function-executions-tasks-event-loop-call-stack-more-part-1-5683dea1f5ec)
    - [The JavaScript Event Loop: Explained](https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/)
    - [Handling IO — NodeJS Event Loop Part 4](https://jsblog.insiderattack.net/handling-io-nodejs-event-loop-part-4-418062f917d1)
    - [Why setImmediate() execute before fs.readFile() in Nodejs Event Loop's works?](https://stackoverflow.com/a/47727402/630364): This is an awesome answer but may have mistakes. See Rueian Oneecom's comments.
    - [Philip Roberts: Help, I’m stuck in an event-loop.](https://vimeo.com/96425312)
  - Versioning:
    - [JavaScript Versions](https://www.w3schools.com/js/js_versions.asp)
    - [ES6 (ES2015) And Beyond: Understanding JavaScript Versioning](https://www.sitepoint.com/javascript-versioning-es6-es2015/)
    - [JavaScript — WTF is ES6, ES8, ES 2017, ECMAScript… ?](https://codeburst.io/javascript-wtf-is-es6-es8-es-2017-ecmascript-dca859e4821c)
    - [ES6 vs ES2015 - What to call a JavaScript version?](https://bytearcher.com/articles/es6-vs-es2015-name/)
    - [ES5, ES6, ES2016, ES.Next: What's going on with JavaScript versioning?](https://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/?utm_medium=email)
  - Performance:
    - [Front-End Performance Checklist](https://github.com/thedaviddias/Front-End-Performance-Checklist)
- Back-end
  - [PRINCIPLES OF CHAOS ENGINEERING](http://principlesofchaos.org/)
  - [A Simple Web Server](http://www.aosabook.org/en/500L/a-simple-web-server.html)
  - [Let’s Build A Web Server. Part 1.](https://ruslanspivak.com/lsbaws-part1/)
  - [Considerations for Designing Distributed Systems](https://msdn.microsoft.com/en-us/library/dd129908.aspx)
  - [A Thorough Introduction to Distributed Systems](https://hackernoon.com/a-thorough-introduction-to-distributed-systems-3b91562c9b3c)
- Others
  - **MUST MENTION** [Roadmap to becoming a web developer in 2018](https://github.com/kamranahmedse/developer-roadmap)
  - [The Evolution of the Web](http://www.evolutionoftheweb.com/?hl=en)
  - [Best Practices for Speeding Up Your Web Site](https://developer.yahoo.com/performance/rules.html)
  - [A primer on latency and bandwidth](https://www.oreilly.com/learning/primer-on-latency-and-bandwidth)
  - [How to Become a Great Front-End Engineer](https://philipwalton.com/articles/how-to-become-a-great-front-end-engineer/)
  - [5 Challenges need to be overcome in Web Application Development](https://medium.theuxblog.com/5-challenges-need-to-be-overcome-in-web-application-development-c03a67726ff1)
  - [Fun stuff: The Super Tiny Compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)
