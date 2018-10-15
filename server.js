var app = require ('http').createServer(handler);
var io = require ('socket.io')(app);
var fs = require ('fs');

app.listen(process.env.PORT, process.env.IP, function(err){
    if (err) {
        console.log(err);
        }
        console.log('Server is listening on port 8080');
    });
// Read the index.html file
function handler (req, res){
    fs.readFile(__dirname + 'index.html', 
    function(err, data){
        if(err){
            res.writeHead(500);
            return res.end('Error loading index.html');
            }
            
            res.writeHead(200);
            res.end(data);
        })
    }

io.on('connection', function(socket){
    console.log("user is on");
    socket.emit("connect", {user: 1});
    socket.on("ping", function(data){
        console.log("pong " + data);
        })
    })