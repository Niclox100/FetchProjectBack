require("dotenv").config();
const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const cookieParser = require("cookie-parser")

const dbConnect = require("../db")
const router = require("../network/routes")

dbConnect(`mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@cluster0.pbro4wt.mongodb.net/db_conexaChallenge?retryWrites=true&w=majority`)

const app = express();
//
app.set("json spaces", 2);

app.use(morgan("dev"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// routes
router(app);

app.listen(process.env.PORT || 3001, ()=> {
    (`Server en http://localhost:${process.env.PORT || 3001}`);
});