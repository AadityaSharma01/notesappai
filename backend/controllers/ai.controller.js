import aicomponenttitle from "../services/aicomponent.js";
import { aicomponentsummmary } from "../services/aicomponent.js";

const handleAI = async (req, res) => {
    const { input } = req.body;
    const result = await aicomponenttitle(input);
    res.json({ result })
}

export default handleAI;

export const handleAISummary = async (req, res) => {
    const { input } = req.body;
    const result = await aicomponentsummmary(input);
    res.json({ result })
}