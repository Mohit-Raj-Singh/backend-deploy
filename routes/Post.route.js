const express = require("express");
const { postModel } = require("../model/Post.model");
const postRouter = express.Router();

postRouter.get("/", async (req, res) => {
    try {
        const notes = await postModel.find();
        res.send(notes);
    }
    catch (err) {
        console.log(err);
        res.send({ "msg": "wrong" })
    }
})

postRouter.post("/create", async (req, res) => {
    const payload = req.body;
    try {
        const newNote = new postModel(payload);
        await newNote.save();
        res.send("Created")
    }
    catch (err) {
        console.log(err);
        res.send({ "msg": "wrong" })
    }
})



postRouter.patch("/update/:id", async (req, res) => {
    const payload = req.body;
    const id = req.params.id;
    const note = await postModel.findOne({ "_id": id });
    const userID_in_post = note.userID;
    const userID_making_req = req.body.userID;
    try {
        if (userID_making_req != userID_in_post) {
            res.send({ "msg": "you are not authorised" })
        }
        else {
            await postModel.findByIdAndUpdate({ "_id": id }, payload)
            res.send("updated")
        }
    }
    catch (err) {
        console.log(err);
        res.send("something went wrong")
    }
})




postRouter.delete("/delete/:id", async (req, res) => {
    const payload = req.body;
    const id = req.params.id;
    const note = await postModel.findOne({ "_id": id });
    const userID_in_post = note.userID;
    const userID_making_req = req.body.userID;
    try {
        if (userID_making_req != userID_in_post) {
            res.send({ "msg": "you are not authorised" })
        }
        else {
            await postModel.findByIdAndDelete({ "_id": id })
            res.send("deleted")
        }
    }
    catch (err) {
        console.log(err);
        res.send("something went wrong")
    }
})

module.exports = { postRouter };