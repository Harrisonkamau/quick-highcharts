var path = require('path');

var routes = function(app){
    app.route('/')
        .get(function(req, res){
            res.sendFile(path.join(__dirname, "index.html"));
        })
    app.route('/mock')
        .get(function(req, res){
            res.sendFile("mockdata.html", {root: path.join(__dirname, '../public')});
        })
}

module.exports = routes;