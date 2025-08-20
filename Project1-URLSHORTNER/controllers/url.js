const shortid = require("shortid");
const URL = require("../model/url");
async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "Url is required!" });
  const shortID = shortid(8);
  await URL.create({
    shortID: shortID, // yeh wo hai jo abhi hmne banaya hai nanoid se
    redirectURL: body.url, // yeh wo url jisko short karna hai toh pehle body se lenge denge pass krnge
    visitHistory: [],
  });
  return res.json({ id: shortID });
}

module.exports = {
  handleGenerateNewShortURL,
};
