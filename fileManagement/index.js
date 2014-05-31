
var crf = function (path, fileName, message) {
    var fs = require('fs');
    var stream = fs.createWriteStream(path + fileName);
    stream.once('open', function (fd) {
        stream.write(message);
        stream.end();
    });

};

var rwf = function (path, fileName, message) {
    var fs = require('fs');
    fs.writeFile(path + fileName, message, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("The file was saved!");
        }
    });
};

var wrf = function (path, fileName, message) {
    var fs = require('fs');
    fs.appendFile(path + fileName, message, function (err) {
        if (err) throw err;
        console.log("successfully the message has been added to the file");
    });
};

var dlf = function (path, fileName) {
    var fs = require('fs');

    fs.unlink(path + fileName, function (err) {
        if (err) throw err;
        console.log('successfully deleted the file');
    });
}; 

var rnf = function (path, oldFileName, newFileName) {
    var fs = require('fs');
    fs.rename(path + oldFileName, path + newFileName, function (err) {
        if (err) throw err;
        console.log('successfully renamed the file');
    });
};

var rdf = function (path, fileName) {
    var fs = require('fs');
    fs.readFile(path + fileName, 'UTF-8',  function (err, content) {
        if (err) throw err;
        console.log(content);
    })
}; 

var cof = function (oldPath, fileName, newPath) {
    var fs = require('fs');
    fs.readFile(oldPath + fileName, 'UTF-8',  function (err, content) {
        if (err) throw err;
        crf(newPath, fileName, content);
    })
};

var mef = function (oldPath, fileName, newPath) {
    var fs = require('fs');
    fs.readFile(oldPath + fileName, 'UTF-8',  function (err, content) {
        if (err) throw err;
        crf(newPath, fileName, content);
        dlf(oldPath, fileName);
    })
};

exports.createFile = crf; 
exports.rewriteFile = rwf;
exports.writeFile = wrf;
exports.deleteFile = dlf;
exports.renameFile = rnf;
exports.readFile = rdf;
exports.copyFile = cof;
exports.moveFile = mef;
