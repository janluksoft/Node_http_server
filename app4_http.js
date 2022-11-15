//=== HTTP server at your fingertips, without libraries =============
const port = 3000;
//http library can build http server as below done
const chttp = require('http'); //

const shtml = `
<body >
    <style> /* Internal CSS */
        body {background-color: #E4E4E4; font-size: 11pt; font-family: 'Arial','Segoe UI','Calibri'; margin:0px; }
        h1, h2   {color: #302009; margin: 10px;}
        p {margin: 4px; padding: 2px 15px;}
        .jheader { padding: 5px 5px 2px 10px; margin: 0px;width: 100%; 
            background-image: linear-gradient(180deg, #4a6dbd 70%, #3e99f8); color: #BBB;
        }
    </style>
  
    <div class="jheader" >
        <table>
        <tr>
            <td><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/640px-Node.js_logo_2015.svg.png" height="36" ></td>
            <td><div style="font-size: 20pt; margin-left: 30px; margin-right: 80px; color: #BBB;">
            Internet technologies
            </div></td>
        </tr>
        </table>
    </div>

    <h2>Node.js: a simple http server without libraries, without Express.</h2>
    <p>
        Node includes a built-in [http] library that, when launched, acts as an http server. 
        After starting node, it does not stop working, but works in the background 
        as a backend server, as a [Node.js JavaScript Runtime] process. 
        The server responds to queries from web browsers on the defined port 3000. 
        Returns the HTML page defined in the method: [response.end('....');] to the browser.        
    </p>
    <p>
        This is an example of a very simple server that works.<br/>
        This text comes from the node server and is shown in the browser frontend.
    </p>
    <p style="color: #183c97;">
        Start the node server with the command: "<b>node app4_http.js</b>".<br/>
        In your browser, enter the address: "<b>http://localhost:3000/</b>" 
    </p>
</body>

`;

const output_handler = (xrequest, xresponse) => {
    console.log('new user ask ...');          //message in console
    xresponse.end(shtml); //will return a response to the user in the browser
} //When someone visits the localhost:3000 website, they will see the content in the browser

//The handler bellow will run when someone visits localhost:3000
const server_http = chttp.createServer(output_handler);

server_http.listen(port, (xerr) => { //listens on port 3000 and if everything is ok
    if (xerr)
        return (console.log('Something went wrong'));
    ServerRunning();        //will return (run) the ServerRunning() callback
});                         //Server set up

function ServerRunning() {
    console.log('Server Node is running..');
}
