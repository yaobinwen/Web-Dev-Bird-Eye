# Web Dev Bird Eye

## Overview

This is a list of things I think every novice web developer should know first in order to speed up their learning.

## The Three Major Components of Front-end Development

To develop the front-end is to deal with the three components:

- `Hyper Text Markup Language(HTML)`: Describe the content and the arrangement of a web page.
- `Cascading Style Sheets (CSS)`: Describe the visual effect of the web page content defined by HTML.
- `JavaScript`: Implemnet the user interaction of the web page with the user so the web page content, arrange, and visual effect can be dynamically changed as the user interacts with it.

## JavaScript

### JavaScript and Java

They are two different languages. They don't have much connection to each other. The point is: When you need to know how a JavaScript feature works, read its documentation. Do **NOT** try to deduce its behavior using your knowledge of Java's similar-looking features. That will hurt you some day, now or later.

The [interview](https://www.infoworld.com/article/2653798/application-development/javascript-creator-ponders-past--future.html) to the JavaScript creator [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) has this dialog to explain why JavaScript was called "Java":

> **InfoWorld**: As I understand it, JavaScript started out as Mocha, then became LiveScript and then became JavaScript when Netscape and Sun got together. But it actually has nothing to do with Java or not much to do with it, correct?
> **Eich**: That’s right. It was all within six months from May till December (1995) that it was Mocha and then LiveScript. And then in early December, Netscape and Sun did a license agreement and it became JavaScript. And the idea was to make it a complementary scripting language to go with Java, with the compiled language.

You can read more [on the Wikipedia about how its name was changed in the early days](https://en.wikipedia.org/wiki/JavaScript#Beginnings_at_Netscape).

### JavaScript and ECMAScript

JavaScript was created at Netscape, who later submitted it to [ECMA International](http://www.ecma-international.org/) for standardization, and [ECMAScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm) is the name of the specification. Its index is `ECMA-262` and the ISO number [`ISO/IEC 16262`](https://www.iso.org/standard/55755.html), which you can find on [ECMA's list of standards](http://www.ecma-international.org/publications/standards/Standard.htm).

Therefore:

- `ECMAScript` is the name of the standard specification.
- `JavaScript` is the most popular implementation of the ECMAScript specification, but not the only one. [`ActionScript`](https://www.adobe.com/devnet/actionscript.html) and [`JScript`](https://msdn.microsoft.com/library/hbxc2t98.aspx) are the other well-known implementations.

### ECMAScript Versions

You may hear people talking about "ECMAScript 6" or "ECMAScript 2015". You may be confused by how ECMAScript is versioned. [This page](https://www.w3schools.com/js/js_versions.asp) shows a summary of that.

### Run-time Environment

Traditionally, the JavaScript code is executed in the browsers. Because the browsers are used by the end users on the "client" side, such code is called "client-side JavaScript". In other words, you wouldn't be able to run JavaScript code outside of browsers before the "server-side" run-time environments emerged. All major browsers, Chrome, Firefox, Opera, Safari, IE, provide their run-time environment.

Because the client side and the server side communicates via HTTP protocol, the technology stack on one side doesn't affect the other side. Therefore, although JavaScript is the most influencing technology of scripting on the client side, the server side doesn't have to be implemented using JavaScript. There are [a bunch of programming languages](https://en.wikipedia.org/wiki/Server-side_scripting#Languages) that can be used to implement a server program.

Nonetheless, Netscape provided their server-side JavaScript runtime ([Netscape Enterprise Server](https://en.wikipedia.org/wiki/Oracle_iPlanet_Web_Server#History)) soon after they released JavaScript for browsers. [Node.js](https://nodejs.org/en/) is a very popular server-side JavaScript runtime nowadays.

### Run-time Environment Compatibilities

Unfortunately, different run-time environments may implement the ECMAScript specification to different extent. If you want to target your JavaScript code to a run-time environment, you need to make sure your code doesn't use any feature that is not supported by that environment yet.

There are several online tools to check the compatability:

- [ECMAScript Compatibility Table](http://kangax.github.io/compat-table/es6/): This comprehensive table covers not only the desktop browsers but also the mobile browsers and server-side runtimes (such as Node).
- [Node Green](https://node.green/): This is a subset of the table above that's specific to Node.js.
- [Browser support for JavaScript APIs](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Browser_support_for_JavaScript_APIs)

As a result, if you want to target your code to all the major browsers, you'll have to use the common set of supported language features on all of them. But there is another solution to solve this problem so that you can still use new language features but target to older browsers, which we will talk about later.

References:

- [Handling common JavaScript problems](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
