import Perfume from "../model/perfumeModel.js";

export const getPerfumes = async (req, res) => {
  try {
    const perfumes = await Perfume.find();
    res.status(200).json({
      count: perfumes.length,
      data: perfumes,
      message: "Perfumes retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPerfumeById = async (req, res) => {
  const { id } = req.params;
  try {
    const perfume = await Perfume.findById(id);

    if (!perfume) {
      return res.status(404).json({ message: "Perfume not found" });
    }

    res.status(200).json({
      message: "Perfume retrieved successfully",
      data: perfume,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
