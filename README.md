<img title="MarineGEO logo" src="https://github.com/AntoineBrah/notion-rendering/blob/main/media/notion_rendering.png?raw=true" alt="MarineGEO circle logo" width="739">

# Notion Rendering

> Built an html structure from the result of the request made on notion API.



![MarineGEO circle logo](https://github.com/AntoineBrah/notion-rendering/blob/main/media/notion_rendering2.png?raw=true "MarineGEO logo")

On the left the notion page, on the right your website.

You can use this [beautiful style](https://github.com/sreeram-venkitesh/notion.css) made by [Sreeram Venkitesh](https://github.com/sreeram-venkitesh) or use your own.



## Install

`npm install notion-rendering`



## Usage example

```typescript
import axios from 'axios';
import { buildHtml } from 'notion-rendering';

// 1. Make your request to get your notion page data
// 2. Use the buildHtml function to get html from the notion data

const config: any = {
    method: 'get',
    url: 'https://api.notion.com/v1/blocks/{yourNotionPageId}/children',
    headers: { 
        'Notion-Version': '2021-08-16', 
        'Authorization': 'Bearer yourToken'
    }
};

// Reference of an html element
const div = document.querySelector('#wrapper');

axios(config)
   .then(function (response: any) {
       // first parameter : reference of an html element in your DOM
       // second parameter : notion data you want to put in it
       buildHtml(div, response.data);
   })
   .catch(function (error: any) {
       console.log(error)
});
```


