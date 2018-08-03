# Outline

In general, the entire tutorial is divided into two parts: front-end and back-end.

## Front-end Technologies

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

## Back-end Technologies

(TODO)

## Design Aspects to Consider

When working on a web application, one must take care of the following aspects to develop an application of high quality:

- Availability
- Backward compatibility: What if a client of newer version is communicatinng to an older version of server? Is this allowed? Consider versioning.
- Operation
- Performance
  - Caching
  - Load balancing
- Scalability
- Security
- User experience

## Useful Links

- Front-end
  - [JavaScript Garden](http://bonsaiden.github.io/JavaScript-Garden): A Guide to JavaScript's Quirks and Flaws
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

- Back-end
  - [PRINCIPLES OF CHAOS ENGINEERING](http://principlesofchaos.org/)
  - [A Simple Web Server](http://www.aosabook.org/en/500L/a-simple-web-server.html)
  - [Let’s Build A Web Server. Part 1.](https://ruslanspivak.com/lsbaws-part1/)
  - [Considerations for Designing Distributed Systems](https://msdn.microsoft.com/en-us/library/dd129908.aspx)
  - [A Thorough Introduction to Distributed Systems](https://hackernoon.com/a-thorough-introduction-to-distributed-systems-3b91562c9b3c)
- Others
  - [The Evolution of the Web](http://www.evolutionoftheweb.com/?hl=en)
  - [Best Practices for Speeding Up Your Web Site](https://developer.yahoo.com/performance/rules.html)
  - [A primer on latency and bandwidth](https://www.oreilly.com/learning/primer-on-latency-and-bandwidth)
  - [How to Become a Great Front-End Engineer](https://philipwalton.com/articles/how-to-become-a-great-front-end-engineer/)
  - [5 Challenges need to be overcome in Web Application Development](https://medium.theuxblog.com/5-challenges-need-to-be-overcome-in-web-application-development-c03a67726ff1)
  - [Fun stuff: The Super Tiny Compiler](https://github.com/jamiebuilds/the-super-tiny-compiler)
