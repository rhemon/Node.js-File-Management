Node-File-Management
====================
<p>This is just a simple module, doing the basic tasks of file system, like creating a file, reading a file, renaming a file, etc.
This module just makes the codign simpler, meaning rather than repeating (for example to create a file): </p>

<pre>
var fs = require('fs');
var stream = fs.createWriteStream("tmp/file");
stream.once('open', function (fd) {
    stream.write("Hello World");
    stream.end();
});
</pre>


<p>using this module I can simpley write :</p>
<pre>
var file = require('./fileManagement')
file.createFile("tmp/", "file", "Hello World")
</pre>

Basically I made this simple module for my own practice, to learn about file system and a bit about modules. So as I was learning I made this module so that I can use it whenever I do a project where I will need to work file system.

For now this module containes : 


<tt>createFile(path, fileName, message)</tt>
  This is to create a new file, where you can also write something in that file.

<tt>rewriteFile(path, fileName, message)</tt>
  This writes an existing file, what it does is deletes everything that was there, and just adds the new message.

<tt>writeFile(path, fileName, message)</tt>
  This does the task of appending the message to the existing file. 

<tt>deleteFile(path, fileName)</tt>
  This deletes the file


<tt>renameFile(path, oldFileName, newFileName)</tt>
  Renames the file

<tt>readFile(path, fileName)</tt>
  Reads the file and gives the content it has. 

<tt>copyFile(oldPath, fileName, newPath)</tt>
  It copies the file into another directory. 

<tt>moveFile(oldPath, fileName, newPath)</tt>
  It moves the file into another directory. 
