import express from 'express';
import  fs  from 'fs';
import path from 'path';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import { renderToString }  from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './src/App';

global.window = {};

const app = express();

app.use(express.static('./build', {index: false}));

const articles = [
  {title: "Hello",
   author: "Pascal"   },
   {title: "Hello",
   author: "Pascal"   },

   {title: "Hello",
   author: "Pascal"   },

   {title: "Hello",
   author: "Pascal"   },

]

app.get("api/articles", (req, res)=> {
  const loadedArticles = articles;
  res.json(loadedArticles);
})

app.get("/*", (req, res) => {
    const sheet = new ServerStyleSheet();
    const reactApp = renderToString(
      sheet.collectStyles(<StaticRouter location={req.url}>
        <App/>
     </StaticRouter>)
    );

    const tempFile = path.resolve('./build/index.html');
    fs.readFile(tempFile, 'utf8', (error, data ) =>{
      if (error) {
         return res.status(500).send(error);
      }
      const loadedArticles = articles
      return res.send(
        data.replace('<div id="root"></div>',`<script>window.preloadedArticles = ${JSON.stringify(loadedArticles)}</script><div id="root">${reactApp}</div>` )
        .replace('{{ styles }}', sheet.getStyleTags())
      )
    });

} );

app.listen(8080, ()=> {
    console.log("Listening to 8080")
})