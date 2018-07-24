# World First Web Site

## How The First Web Site Came Into Being

The article ["The World’s First Web Site"](https://www.history.com/news/the-worlds-first-web-site) tells concisely how the World Wide Web (WWW) was created. I'll summarize the key points here:

- [Mr. Tim Berners-Lee](https://www.w3.org/People/Berners-Lee/) proposed the initial idea of an information management system that "used hypertext to link documents on different computers that were connected to the Internet" [1] because he thought, at his time, "there was different information on different computers, but you had to log on to different computers to get at it. Also, sometimes you had to learn a different program on each computer." [1]
- By the end of 1990, Berners-Lee had developed the key technologies including Hypertext Markup Language (HTML), Hypertext Transfer Protocol (HTTP), Uniform Resource Locators (URLs), a simple browser, and a web server program.
- On August 6, 1991, Berners-Lee published the [first website in the world](http://info.cern.ch/).

## Architectural View

Once we start to talk about "web", there must be "servers" and "clients":

(**TODO:** Need to use my own diagram.)

![Server-client model](https://www.setthings.com/wp-content/uploads/2014/05/Client-server-model.png)

The "clients" are usually refered to as the "front ends", and "servers" as the "back ends".

When you want to view a web site (or, in modern words, use a web application), you need to open a browser (the client, or the front end), enter the URL to that web application, and hit Enter. The browser sends a request to the server (the back end) which then returns the web page content that the browser can display.

## The Key Software

The terms "server" and "client", when put in different context, can mean differently.

They can mean the conceptual components when discussing the web application architecture where the "server" means the component that receives and handles the requests from the clients, and the "client" means the component that sends the request and presents the result to the users.

When discussing the software, "server" means the code that is programmed to receives and handles the requests, while the "client" means the code that sends the requests and presents the result.

When discussing the deployment, "server" can refer to the physical machine that runs the server program and the "client" means the physical machine that the user opens the browser.

In this tutorial, when I say "server" and "client", unless specified otherwise, I mean the programs that play those roles.

## The Browsing Story

Story:

- The developers develop the server program that does two basic things:
- The developers start the server program so it starts to listen to the port 80 for incoming requests.
- The user opens the browser and enters the URL of the document she wants to view.
- A request is sent to he server program to ask for the requested document.
- The server program parses the URL and figures out which document is being requested.
- The server program reads the document content and sends it back to the browser.
- The browser parses the document content to understand how it should be displayed, and displays the content.

This is the **first principle** of web development: browser sends requests; server program returns the content; browser displays the content. That's it.

## References

- [1] ["The World’s First Web Site"](https://www.history.com/news/the-worlds-first-web-site)
