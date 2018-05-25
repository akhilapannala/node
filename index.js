var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url == '/fileupload') {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var oldpath = files.filetoupload.path;
      console.log("Yet to read");
	  //Read the file
      fs.readFile(oldpath, function (err, data) {
	  	if (err) throw err;
		console.log('File read!');

		var db = admin.firestore();
		        
		var lines = data.toString().split("\n");
		for(i in lines) {
    		console.log(lines[i]);
    		var items = lines[i].split(',');
    		var docRef = db.collection('users').doc(items[0]);
			docRef.set({
				name: items[1],
				last: items[2],
				born: items[3]
			});
			res.write(lines[i]);
			console.log("document " + i + " added");
		}
		res.write("Logged Successfully!");

		// Delete the file
		fs.unlink(oldpath, function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });		
      
	  //Get data from Firestore
      db.collection('users').get().then((snapshot) => {
          snapshot.forEach((doc) => {
      	      res.write("<br/>", doc.id, '=>', doc.data());
      	  });
		})
    	.catch((err) => {
      		console.log('Error getting documents', err);
    	});
    	res.end();
    });
 });
  }
   else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  }
}).listen(8080);
	
