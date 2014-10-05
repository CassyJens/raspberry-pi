var http = require('http');

http.get("http://bukkit.tangentialism.com/", function (res) {
    console.log("got response ", res.statusCode);
}).on('error', function (e) {
    console.log("error occurred", e);
});
