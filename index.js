// need require the file which we needed 
const express = require("express")
const fs = require("fs")
const app = express();
app.get("/timestamp", (req, res) => {
    let date = new Date();
    const timeStampDate = date.toUTCString().slice(0, -3);
    fs.writeFileSync("./current-date-time.txt", timeStampDate, (err) => {
        if (err) {
            res.send({ message: "error on writing" })

        } else {
            console.log("job done successfully")
        }
    })

    res.send({ timeStamp: timeStampDate })

})
//http://localhost:8000/timestamp
app.listen(8000, () => console.log("server start"))