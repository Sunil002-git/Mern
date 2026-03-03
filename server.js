require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

// mongoose.connect("mongodb://127.0.0.1:27017/mernDB")
// .then(() => console.log("MongoDB connetced."))
// .catch((err) => console.log(err));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected."))
    .catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send("Server is running successfully");
});


const User = require('./models/User');

app.post('/create-user', async (req, res) => {
    try{
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({message: "User Created successfully", user: newUser });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

app.get('/users', async(req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.put('/update-user/:id', async(req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new : true, runValidators : true} // returns updated document
        );
        if (!updateUser) {
            return res.status(404).json({message: 'User not Found'});
        }
        res.json({
            message : "User Updated successfully",
            user: updateUser
        });
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

app.delete('/delete-user/:id', async(req, res) => {
    try{
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if(!deletedUser){
            return res.status(404).json({message : "User Not Found"});
        }
        res.json({message : "User Deleted Successfully"});
    } catch (error){
        res.status(400).json({error : error.message});
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server started on http://localhost:5000");
});

