import mongoose from "mongoose"

mongoose.connect("mongodb+srv://rafael:123@cluster0.p4rgi.mongodb.net/Cluster0");

let db = mongoose.connection;

export default db;