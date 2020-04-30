var fs=require('fs');
fs.readFile('writetoconsole.js','utf-8',function OnFileRead(err,data){
      if(err){
          throw err;
      }
      console.log('File content is:');
      console.log(data);
});