import {mkdir,copyFile} from 'node:fs/promises';
await mkdir('dist',{recursive:true});for(const f of ['index.html','style.css','app.js','analytics.mjs','data.json'])await copyFile(f,'dist/'+f);console.log('Production static build ready in dist/');
