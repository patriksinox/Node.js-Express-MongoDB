export const keyControl = async (req, res, next) => {
  try {
    const apiKey = req.headers["x-api-key"]; // API kľúč by mal byť poslaný v hlavičke 'x-api-key'

    if (!apiKey || apiKey !== "patrik") {
      return res.status(401).json({ message: "Neplatný API kľúč" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: "Žiadny Api kľúč" });
  }
};
