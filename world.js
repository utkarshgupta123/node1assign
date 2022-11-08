const now = require('http');
const server = now.createServer((req,res)=>{
   if(req.url === '/'){
    res.write("hello world from world.js");
    res.end();
   }

   else if(req.url === '/lap'){
    res.write(JSON.stringify({
        name:utkarsh,
        lname:gupta
   }))
    res.end();
   }
})



server.listen(3000);
console.log("connected via world.js");

server.on('connection',(socket)=>{
   console.log('connected successfully')
})


