export default function handler(req, res) {
    setTimeout(() =>
    {
    res.status(200).send("Hey , How You Doin ;)");
    }, 1000); // Simulate 1s processing time
    }
    