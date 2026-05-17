import Perfume from "../model/perfumeModel.js";

const data = [
  {
    id: 1,
    name: "Chanel No. 5",
    description: "A timeless classic",
    price: 120,
  },
  {
    id: 2,
    name: "Dior Sauvage",
    description: "A modern classic",
    price: 100,
  },
  {
    id: 3,
    name: "Tom Ford Black Orchid",
    description: "A luxurious and sensual fragrance",
    price: 150,
  },
];

export const getPerfumes = async (req, res) => {
  try {
    // const perfumes = await Perfume.find();
    const perfume = data;
    res
      .status(200)
      .json({ data: perfume, message: "Perfumes retrieved successfully" });
    //  .json({ data: perfumes, message: "Perfumes retrieved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPerfumeById = async (req, res) => {
  const { id } = req.params;
  try {
    // const perfumes = await Perfume.find();
    const perfume = data.find((p) => p.id === Number(id));
    res
      .status(200)
      .json({ data: perfume, message: "Perfume retrieved successfully" });
    //  .json({ data: perfumes, message: "Perfumes retrieved successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
