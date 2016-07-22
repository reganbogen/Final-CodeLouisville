var path =require('path');
var rootPath = path.normalize(__dirname + '/../../');
module.exports = {
	development: {
		db: 'mongodb://mongodb://rlayman:rlayman@ds027215.mlab.com:27215/squallispuppeteers',
		rootPath: rootPath,
		port: process.env.PORT || 3030
	}
	}