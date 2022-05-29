/*let fs = require('fs');

  const folderName = process.argv[2] || 'Project'; // colocar nombre 

  //crear carpetas
  fs.mkdir(folderName);
  fs.mkdir(folderName + '/css');
  fs.mkdir(folderName + '/JS');
  fs.mkdir(folderName + "/img");
*/
// Node.js program to demonstrate the
// fs.mkdir() Method

// Include fs and path module
import { mkdir } from 'fs';
import { join } from 'path';

mkdir(join(__dirname, 'test'), (err) => {
	if (err) {
		return console.error(err);
	}
	console.log('Directory created successfully!');
});



  /*


  //crear archivos
  const contenidohtml = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <script src="JS/main.js"></script>
  </body>
  </html>`;

  const contenidocss = `* {
    margin: 0;
    padding: 0; 
    font-family: 'Times New Roman', Times, serif;
    font-size: medium;
  }`;

  const contenidojs = 'alert();';

  try{
    fs.writeFileSync(`${folderName}/index.html`, contenidohtml, "");
    fs.writeFileSync(`${folderName}/css/main.css`, contenidocss, "");
    fs.writeFileSync(`${folderName}/JS/main.js`, contenidojs,"");
  }
  catch(err){
    console.log(err);
  }*/
