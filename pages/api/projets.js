import * as fs from "fs";

export default function handler(req, res) {
  fs.readFile("data/projets.json", "utf-8", (err, data) => {
    return res.status(200).json(JSON.parse(data));
});
}
