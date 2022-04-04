import express from "express";
import Model from "./model.js"
import Database from "./database.js"

const app = express();
const model = new Model(new Database());

app.get('/addNumbers/:a/:b', async (request, response) => {
  const a = parseInt(request.params.a, 10);
  const b = parseInt(request.params.b, 10);
  response.writeHead(200, {
     'Content-Type': 'text/html',
  });
  response.write(`
     <html>
       <head>
         <title>Adding</title>
       </head>
       <body>
         ${model.addNumbers(a, b)}
       </body>
     </html>
  `);
  response.end();
});

const server = app.listen(8081, () => {
   const host = "localhost";
   const port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port)
})
