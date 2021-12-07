import express from 'express';
import  fs  from 'fs';
import path from 'path';
import React from 'react';
import { renderToString }  from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './src/App';


const app = express();

app.use(express.static('./build', {index: false}));

app.get("/*", (req, res) => {
    const reactApp = renderToString(
      <StaticRouter location={req.url}>
         <App/>
      </StaticRouter>
    );

    const tempFile = path.resolve('./build/index.html');
    fs.readFile(tempFile, 'utf8', (error, data ) =>{
      if (error) {
         return res.status(500).send(error);
      }
      return res.send(
        data.replace('<div id="root"></div>',`<div id="root">${reactApp}</div>` )
      )
    });

} );

app.listen(8080, ()=> {
    console.log("Listening to 8080")
})