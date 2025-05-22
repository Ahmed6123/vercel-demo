export default function handler(req, res) {
    setTimeout(() =>
    {
    res.status(200).send("Greetings from Vercel!");
    }, 1000); // Simulate 1s processing time
    }
    