# Web Dev Bird Eye

## Overview

This is a list of things I think every novice web developer should know first in order to speed up their learning.

## The World First Web Site

### How The First Web Site Came Into Being

When [Tim Berners-Lee](https://www.w3.org/People/Berners-Lee/) worked at [CERN](https://home.cern/), he found the information was scattered on many different computers and there was no easy way to access all in once, "sometimes you had to learn a different program on each computer." [1]

To solve this problem, he proposed the initial idea of an information management system that "used hypertext to link documents on different computers that were connected to the Internet." [1]

By the end of 1990, he had developed the key technologies including

- [Hypertext Markup Language (HTML)](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics): Describe what content to be displayed and how the content is structure.
- [Hypertext Transfer Protocol (HTTP)](https://developer.mozilla.org/en-US/docs/Web/HTTP): Is the communication protocol between the client side and the server side.
- [Uniform Resource Locators (URLs)](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL): Specifies the unique address of a resource (typically a document) on the web.

as well as

- A simple browser
- A web server program

On August 6th, 1991, he published the [first website in the world](http://info.cern.ch/).

### Architectural View

Overall, a web site is in a [server-client architecture](https://en.wikipedia.org/wiki/Client%E2%80%93server_model). The server side (the server program) is called the **back-end** while the client side (the browser) is called **front-end**.

## The Emergence of CSS

In the early days, the web pages written in HTML primarily described the content and structure and very limited style and layout because, as said in [2], "the separation of document structure from the document's layout had been a goal of HTML from its inception in 1990." **Cascading Style Sheets (CSS)** emerged as the technology to define the content style and layout.

## The Emergence of JavaScript and DOM

With the help of HTML and CSS, one would only be able to design web pages with static content. That is, once the style and layout of a page is decided, they won't be changed when the readers read them on their browsers.

However, [Marc Andreessen](https://en.wikipedia.org/wiki/Marc_Andreessen) believed that the web content should become more dynamic, or, in another word, interactive. "Animations, interaction and other forms of small automation should be part of the web of the future." [3] As a result, **JavaScript** was created as a lightweight (by then) scripting language that could dynamically change the web page.

In order to change the web page dynamically, there must be a way for JavaScript to manipulate the content or style of a web page. **Document Object Model (DOM)** was therefore developed to meet this goal. DOM represents the HTML document in a "tree" structure [4]. It also provides APIs to access this tree structure. JavaScript can call these APIs to manipulate the tree, hence the web page content. See [4] for more details.

## The Three Major Components of Front-end Development

To develop the front-end is to deal with the three components:

- `Hyper Text Markup Language(HTML)`: Describe the content and the arrangement of a web page.
- `Cascading Style Sheets (CSS)`: Describe the visual effect of the web page content defined by HTML.
- `JavaScript`: Implemnet the user interaction of the web page with the user so the web page content, arrange, and visual effect can be dynamically changed as the user interacts with it.

## More on JavaScript

### JavaScript and Java

They are two different languages. They don't have much connection to each other. The point is: When you need to know how a JavaScript feature works, read its documentation. Do **NOT** try to deduce its behavior using your knowledge of Java's similar-looking features. That will hurt you some day, now or later.

The [interview](https://www.infoworld.com/article/2653798/application-development/javascript-creator-ponders-past--future.html) to the JavaScript creator [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) has this dialog to explain why JavaScript was called "Java":

> **InfoWorld**: As I understand it, JavaScript started out as Mocha, then became LiveScript and then became JavaScript when Netscape and Sun got together. But it actually has nothing to do with Java or not much to do with it, correct?
> **Eich**: That’s right. It was all within six months from May till December (1995) that it was Mocha and then LiveScript. And then in early December, Netscape and Sun did a license agreement and it became JavaScript. And the idea was to make it a complementary scripting language to go with Java, with the compiled language.

You can read more [on the Wikipedia about how its name was changed in the early days](https://en.wikipedia.org/wiki/JavaScript#Beginnings_at_Netscape).

### JavaScript and ECMAScript

JavaScript was created at Netscape, who later submitted it to [ECMA International](http://www.ecma-international.org/) for standardization, and [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm) is the name of the specification. Its index is `ECMA-262` and the ISO number is [`ISO/IEC 16262`](https://www.iso.org/standard/55755.html), which you can find on [ECMA's list of standards](http://www.ecma-international.org/publications/standards/Standard.htm).

In sum:

- `ECMAScript` is the name of the standard specification.
- `JavaScript` is the most popular implementation of the ECMAScript specification, but not the only one. [`ActionScript`](https://www.adobe.com/devnet/actionscript.html) and [`JScript`](https://msdn.microsoft.com/library/hbxc2t98.aspx) are the other well-known implementations.

### ECMAScript Versions

You may hear people talking about "ECMAScript 6" or "ECMAScript 2015". You may be confused by how ECMAScript is versioned. [This page from W3Schools](https://www.w3schools.com/js/js_versions.asp) has a summary of what the versions are all about.

### Run-time Environment: Client Side and Server Side

Traditionally, the JavaScript code is executed in the browsers. Because the browsers are used by the end users on the "client" side, such code is called **"client-side JavaScript"**. In other words, you wouldn't be able to run JavaScript code outside of browsers before the "server-side" run-time environments were developed. All major browsers, such as Chrome, Firefox, Opera, Safari and IE, provide their run-time environments.

Because the client side and the server side communicate via HTTP protocol, the technology stack on one side doesn't really affect the other side. Therefore, although JavaScript is the most influencing technology of scripting on the client side, the server side doesn't have to be implemented using JavaScript. There are [a bunch of programming languages](https://en.wikipedia.org/wiki/Server-side_scripting#Languages) that can be used to implement a server program.

Nonetheless, Netscape provided their server-side JavaScript runtime ([Netscape Enterprise Server](https://en.wikipedia.org/wiki/Oracle_iPlanet_Web_Server#History)) soon after they released JavaScript for browsers. [Node.js](https://nodejs.org/en/) is a very popular server-side JavaScript runtime nowadays.

### Run-time Environment: A Deeper Look

Alexander's article ["How JavaScript works: an overview of the engine, the runtime, and the call stack"](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf) provides a clear view of what a "run-time environment" actually consists of. You should definitely read his article. In sum, a run-time environment has the following components:

- A **JavaScript Engine** that executes the JavaScript code. The JavaScript code is executed on the browser and by the engine that the browser uses. For example, Google Chrome's (client side) engine is called [V8](https://developers.google.com/v8/) which is also used by node.js (server side) as its engine. There are [many other JavaScript engines](https://en.wikipedia.org/wiki/JavaScript_engine#JavaScript_engines), too.
- The **Web APIs** that can be called from JavaScript code to access the device hardware or the data stored on the hardware, such as the Bluetooth, battery status, camera, etc. See [7] for more details.
- The **callback queue** and **event loop**: The internal infrastructure to implement the concurrency model of JavaScript. See [8] for more details.

### Run-time Environment Compatibilities

Unfortunately, different run-time environments, or, technically, the JavaScript engines, may implement the ECMAScript specification to different extent. If you want to target your JavaScript code to a run-time environment, you need to make sure your code doesn't use any feature that is not supported by that environment yet.

There are several online tools to check the compatability:

- [ECMAScript Compatibility Table](http://kangax.github.io/compat-table/es6/): This comprehensive table covers not only the desktop browsers but also the mobile browsers and server-side runtimes (such as Node).
- [Node Green](https://node.green/): This is a subset of the table above that's specific to Node.js.
- [Browser support for JavaScript APIs](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

As a result, if you want to target your code to all the major browsers, you'll have to use the common set of supported language features on all of them. But there is another solution to solve this problem so that you can still use new language features but target to older browsers, which we will talk about later.

### Modules

In the early days, JavaScript was only supported to be executed in the browsers. The JavaScript code could be embedded in the `<script>` tag in the HTML pages, and the browsers would run the script in a global context: every variable and function are defined in the global context. But [modularity](https://en.wikipedia.org/wiki/Modular_programming) has been proven a best practice in software engineering as it promotes the code reusability and prevents global namespace pollution.

JavaScript was in lack of built-in support of modules for long time. The support wasn't officially added to the standard until ECMAScript 6 (in 2015). Before that, several other solutions were proposed and implemented.

Below are the module solutions discussed in [5]:

- `Object Literal pattern`
- `Immediately Invoked Function Expression(IIFE)/Revealing Module pattern`
- `CommonJS`
  - [CommonJS](http://www.commonjs.org/) is a server side module solution. It gained popularity because of [`node.js`](https://nodejs.org)'s success because node.js, a server-side JavaScript runtime, implements CommonJS. In CommonJS, a module's members are exported via `module.export`; the consumer script refers to the module using `var m = require('module_name')`.
  - CommonJS modules are also referred to as **"CJS modules"**.
- `Asynchronous Module Definition(AMD)`
  - [AMD](https://github.com/amdjs/amdjs-api) is a client-side module solution that is suitable for asynchronous environment. While CommonJS requires all the modules be loaded before any of them can be executed, AMD allows a module to be executed as long as it and all its dependencies are loaded, despite there are more other unrelated modules not yet loaded.
- `Universal Module Definition(UMD)`
  - UMD was "an attempt to mash AMD and CJS together." [5]
- `ECMAScript 6 modules`
  - This is JavaScript built-in module solution which uses `export` to export module members and `import` to include the required modules into the consumer scripts.
  - ECMAScript 6 modules are also referred to as **"ES6 modules"**.

### Transpilers

A transpiler, or [source-to-source compiler](https://en.wikipedia.org/wiki/Source-to-source_compiler), is a type of compiler that translates the source code that's written in one programming language into the source code in another programming language, usually at similar level of abstraction.

A traditional compiler is different from a transpiler at the abstraction level of the target code. For example, a C compiler translates the C source code into the machine code. They two are at quite different levels of abstraction, so it is more suitable to call it a "compiler". In contrast, a Python 2-to-3 tool translates Python 2 code to Python 3 code which is at the similar level of abstraction, so it is more suitable to call this tool a "transpiler".

But you don't have to distinguish them so clearly. People usually understand what you mean with suitable conversation context.

In the JavaScript world, there are two types of transpilers:

- One type transpiles the source code of other programming languages, such as TypeScript and CoffeeScript, into JavaScript.
- The other type transpiles the JavaScript code that uses new language features that are not supported by the browsers yet into the code that only uses the features that are well supported by all the mainstream browsers.

[Babel](https://babeljs.io/) is one of the most well-known JavaScript transpiler that belongs to the second type. On the top of their front page says:

> Babel is a JavaScript compiler.
>
> Use next generation JavaScript, today.

Its original name, "6to5", reflects the tool transpiles ECMAScript 6 code to ECMAScript 5 code. 6to5 was later renamed to Babel, as pointed out in [this blog "Not Born to Die"](https://babeljs.io/blog/2015/02/15/not-born-to-die), in order to take on more responsibilities than transpiling code.

## References

- [1] ["The World’s First Web Site"](https://www.history.com/news/the-worlds-first-web-site)
- [2] [A brief history of CSS until 2016](https://www.w3.org/Style/CSS20/history.html)
- [3] [A Brief History of JavaScript](https://auth0.com/blog/a-brief-history-of-javascript/)
- [4] [The W3C Document Object Model (DOM)](https://www.w3.org/2002/07/26-dom-article.html)
- [5] [Understanding ES6 Modules via Their History](https://www.sitepoint.com/understanding-es6-modules-via-their-history/)
- [6] [Brief history of JavaScript Modules](https://medium.com/sungthecoder/javascript-module-module-loader-module-bundler-es6-module-confused-yet-6343510e7bde)
- [7] [WebAPI](https://developer.mozilla.org/en-US/docs/WebAPI)
- [8] [Concurrency model and Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
