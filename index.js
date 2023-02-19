const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routes/User.route");
const { authentication } = require("./middleware/authentication");
const { connection } = require("./config/db");
const { postRouter } = require("./routes/Post.route");

const app = express();
app.use(cors({
    origin: "*"
}))
app.use(express.json());

app.get("/", (req, res) => {
    res.send("HomePage");
})

app.use("/users", userRouter)
app.use(authentication);
app.use("/post",postRouter)


app.listen(process.env.port, async () => {
    try {
        await connection;
        console.log("Connected to DB");
    }
    catch (err) {
        console.log("Error in local host");
        console.log(err);
    }
    console.log(`server is running on port ${process.env.port}`);
})



// const express = require("express");
// // const { connection } = require("./config/db");
// const {connection}=require("./config/db")
// // const { userRoute } = require("./routes/User.route");
// const {userRoute}=require("./routes/User.route");
// // const { authentification } = require("./middleware/authmiddle");


// const cors = require("cors");
// const app = express();
// app.use(
//     cors({
//         origin: "*",
//     })
// );
// app.use(express.json());


// app.get("/", (req, res) => {
//     res.send("home");
// });


// app.use("/users", userRoute);


// app.listen(process.env.port, async () => {
//     try {
//         await connection;
        
//     } catch (err) {
//         console.log("err");
//     }
//     console.log("object");
// });



