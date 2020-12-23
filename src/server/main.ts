import express from "express";
import { Request, Response } from "express";
import * as fs from "fs";

const app = express();

const PORT = 4000;

const msgScore = JSON.parse(fs.readFileSync("./src/server/votes.json", { encoding: "utf-8" }));

function saveJSON(obj: any) {
    fs.writeFile("./src/server/votes.json", JSON.stringify(obj), (err) => {
        if (err) {
            console.log(err);
        }
    });
}

app.get("/getMsgScore", (req: Request, res: Response) => {
    return res.json(msgScore);
})

app.get("/incgood", (req: Request, res: Response) => {
    msgScore.good++;
    saveJSON(msgScore);
    return res.sendStatus(200);
});

app.get("/incpoor", (req: Request, res: Response) => {
    msgScore.poor++;
    saveJSON(msgScore);
    return res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log("server started on port " + PORT);
});
