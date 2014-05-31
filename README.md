Node-File-Management
====================
This is just a simple module, doing the basic tasks of file system, like creating a file, reading a file, renaming a file, etc.
This module just makes the codign simpler, meaning rather than repeating (for example to create a file): 
<code>

var fs = require('fs');

var stream = fs.createWriteStream("tmp/file");

stream.once('open', function (fd) {

    stream.write("Hello World");
    
    stream.end();
    
});

</code>

using this module I can simpley write :

<code>

var file = require('./fileManagement')

file.createFile("tmp/", "file", "Hello World")

</code>

Basically I made this simple module for my own practice, to learn about file system and a bit about modules. So as I was learning I made this module so that I can use it whenever I do a project where I will need to work file system.

For now this module containes : 

<code>
createFile(path, fileName, message)
</code>
  This is to create a new file, where you can also write something in that file.

<code>
rewriteFile(path, fileName, message)
</code>
  This writes an existing file, what it does is deletes everything that was there, and just adds the new message.

<code>
writeFile(path, fileName, message)
</code>
  This does the task of appending the message to the existing file. 

<code>
deleteFile(path, fileName)
</code>
  This deletes the file

<code>
renameFile(path, oldFileName, newFileName)
</code>
  Renames the file

<code>
readFile(path, fileName)
</code>
  Reads the file and gives the content it has. 

<code>
copyFile(oldPath, fileName, newPath)
</code>
  It copies the file into another directory. 

<code>
moveFile(oldPath, fileName, newPath)
</code>
  It moves the file into another directory. 
