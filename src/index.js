require("dotenv").config();
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")

const dbConnect = require("./db")
const router = require("./network/routes")

dbConnect(`mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@cluster0.pbro4wt.mongodb.net/db_conexaChallenge?retryWrites=true&w=majority`)

const app = express();
//
app.set("port", process.env.PORT || 3001);
app.set("json spaces", 2);

app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/",((req, res)=> {
    res.send("Hola")
}))
// routes
router(app);

app.listen(app.get("port"), ()=> {
    (`Server en http://localhost:${process.env.PORT || 3001}`);
});