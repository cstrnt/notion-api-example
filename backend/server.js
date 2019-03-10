const express = require('express');
const cors = require('cors');
const Notion = require('notion-api-js');

let api;

const app = express();
app.use(cors());

app.get('/pages', function(req, res) {
  api.getPages().then(pages => res.send(pages));
});

app.get('/pages/:id', (req, res) => {
  const { id } = req.params;
  api.getPageById(id).then(content => res.send(content));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
  api = new Notion({
    token: process.env.NOTION_TOKEN,
    userId: process.env.NOTION_USERID,
    options: {
      colors: {
        red: 'tomato',
        blue: 'dodgerblue',
        purple: 'green',
      },
    },
  });
});
