Node-File-Management
====================
This is just a simple module, doing the basic tasks of file system, like creating a file, reading a file, renaming a file, etc.
This module just makes the codign simpler, meaning rather than repeating (for example to create a file): 
var fs = require('fs');
var stream = fs.createWriteStream("tmp/file");
stream.once('open', function (fd) {
    stream.write("Hello World");
    stream.end();
});

using this module I can simpley write : 
var file = require('./fileManagement')
file.createFile("tmp/", "file", "Hello World")


Basically I made this simple module for my own practice, to learn about file system and a bit about modules. So as I was learning I made this module so that I can use it whenever I do a project where I will need to work file system.

For now this module containes : 

createFile(path, fileName, message) 
  This is to create a new file, where you can also write something in that file.

rewriteFile(path, fileName, message)
  This writes an existing file, what it does is deletes everything that was there, and just adds the new message.

writeFile(path, fileName, message)
  This does the task of appending the message to the existing file. 

deleteFile(path, fileName)
  This deletes the file

renameFile(path, oldFileName, newFileName)
  Renames the file

readFile(path, fileName)
  Reads the file and gives the content it has. 

copyFile(oldPath, fileName, newPath)
  It copies the file into another directory. 

moveFile(oldPath, fileName, newPath)
  It moves the file into another directory. 
