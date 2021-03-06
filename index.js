// code away!
const server = require("./server")
const userRouter = require("./users/userRouter")
const postRouter = require("./posts/postRouter")

const port = 3000;
const host = "127.0.0.1";

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
  });

server.use("/api/users", userRouter)
server.use("/api/users/:id/posts/:postId", postRouter)

server.use((err, req, res, next) =>{
    console.log(err)
    res.status(500).json({message: "an internal error occurred."})
})