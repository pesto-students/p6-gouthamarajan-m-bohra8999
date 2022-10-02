## When a user enters an URL in the browser, how does the browser fetch the desired result ?

1. The browser checks the cache for a **DNS** record to find the corresponding IP address of the **URL**.

   - DNS(Domain Name System) is a database that maintains the name of the website (URL) and the particular IP address it links to.

   - To find the DNS record, the browser checks four caches.

     - Browser cache
     - OS cache
     - Router cache
     - ISP cache

2. If the requested URL is not in the cache, ISP’s DNS server initiates a DNS query to find the IP address of the server that hosts URL

   - The purpose of a DNS query is to search multiple DNS servers on the internet until it finds the correct IP address for the website.
   - This type of search is called a recursive search since the search will repeatedly continue from a DNS server to a DNS server.
   - If not found returns an error response saying it was unable to find it.

3. The browser initiates a TCP connection with the server.

   - To transfer data packets between your computer(client) and the server, it is important to have a TCP connection established.
   - TCP connection is established using a process called the TCP/IP three-way handshake. This is a three-step process where the client and the server exchange SYN(synchronize) and ACK(acknowledge) messages to establish a connection.

4. The browser sends an HTTP request to the webserver

   - The browser will send a GET request asking for URL web page.
   - This request will also contain additional information such as
     - Browser identification (User-Agent header),
     - Accept header
     - Connection headers
     - Cookies
     - ...etc

5. The server handles the request and sends back a response

   - The server contains a webserver (i.e., Apache, IIS) that receives the request from the browser and passes it to a request handler to read and generate a response.
   - The request handler is a program that reads the request, headers, and cookies to check what is being requested and also update the information on the server if needed.
   - Then it will assemble a response in a particular format (JSON, XML, HTML).

6. The server sends out an HTTP response.

   - The server response contains the
     - web page requested
     - status code
     - compression type (Content-Encoding)
     - how to cache the page (Cache-Control)
     - Cookies to set
     - privacy information
     - ...etc
   - There are five types of statuses detailed using a numerical code
     - 1xx indicates an informational message only
     - 2xx indicates success of some kind
     - 3xx redirects the client to another URL
     - 4xx indicates an error on the client’s part
     - 5xx indicates an error on the server’s part

7. The browser displays the HTML content

[Reference](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)

---

### What is the main functionality of the browser?

> A web browser takes you anywhere on the internet. It retrieves information from other parts of the web and displays it on your desktop or mobile device. The information is transferred using the Hypertext Transfer Protocol, which defines how text, images and video are transmitted on the web.

[Reference](https://www.mozilla.org/en-US/firefox/browsers/what-is-a-browser/#:~:text=A%20web%20browser%20takes%20you%20anywhere%20on%20the%20internet.,are%20transmitted%20on%20the%20web)

## High Level Components of a browser.

![Image](components.png?raw=true 'Title')

- User Interface: The space where User interacts with the browser.
  - It includes the address bar, back and next buttons, home button, refresh and stop, bookmark option, etc.
- The Browser Engine: The browser engine works as a bridge between the User interface and the rendering engine.
- The Rendering Engine: The rendering engine is responsible for rendering the requested web page on the browser screen.
  - It interprets the HTML, XML documents and images that are formatted using CSS and generates the layout for UI.
- Networking: It retrieves the URLs using common internet protocols of HTTP or FTP.
  - It handles all aspects of Internet communication and security.
  - It may implement a cache of retrieved documents in order to reduce network traffic.
- JavaScript Interpreter: It interprets and executes the javascript code embedded in a website.
  - The interpreted results are sent to the rendering engine for display.
  - If the script is external then first the resource is fetched from the network. Parser keeps on hold until the script is executed.
- UI Backend: UI backend is used for drawing basic widgets like combo boxes and windows.

  - This backend exposes a generic interface that is not platform specific.

- Data Persistence/Storage: This is a persistence layer.
  - Browsers support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
  - A small database created on the local drive
  - Manages
    - Cache
    - Cookies
    - Bookmarks
    - Preferences

## Rendering engine and its use

- The rendering engine is responsible for interpreting the HTML and CSS and displaying the generated content.
- All major browsers are using different rendering engines which might lead to compatiblity issues some times. As these browsers render a website in different ways.

![Image](render-engine.png?raw=true 'Title')

## Parsers (HTML, CSS, etc)

- Parser will parse the HTML code and convert it to tokens.
- Now tokens will be converted to nodes which act as independent object.
- The nodes are linked in a tree like structure and the tree is called as DOM.
- The CSS files are also parsed in a similar way where they convert tokens to nodes and further nodes are connected in a tree like structure.
- Now browser convert CSS file to CSS tree data structure and it is called as CSSOM which stands for CSS object model.

## Script Processors

- The parsing of the document halts until the script has been executed.
- If the script is external then the resource must first be fetched from the network

## Tree construction

- During the tree construction stage the DOM tree with the Document in its root will be modified and elements will be added to it.
- The element is added to the DOM tree, and also the stack of open elements.
- This stack is used to correct nesting mismatches and unclosed tags.
- The algorithm is also described as a state machine. The states are called "insertion modes".

## Order of script processing

- If we are not dynamically loading script using async or defer then scripts are loaded in the order encountered in the page.
- Async specifies to load and run the script in random order and it will run them in any order.
- The script tag defer waits until the entire parser is done and then run all scripts marked with defer int the order they were encountered.

## Layout and Painting

- Layout will be responsible for calculating positions and dimensions of each and every node on the screen.
- If we resize the screen size then it will be called again and position and dimension will be calculated again and components will be resized accordingly.
- Now we have computed size of each components in pixel all the nodes present in DOM tree will be will be rendered of actual size on screen.

[Reference](https://medium.com/@monica1109/how-does-web-browsers-work-c95ad628a509)

![Image](web-flow.png?raw=true 'Title')

https://whimsical.com/week-1-ex-1-1-PsnF4pVnFK3rZjqFk4kfDn
