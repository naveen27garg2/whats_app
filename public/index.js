let socket=io();

  socket.on('connect',()=>{
      console.log('.......connected......');

      socket.on('disconnect',()=>{
  console.log('User Disconnected with ip:');
});

  });
