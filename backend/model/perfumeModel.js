import mongoose from "mongoose";

const perfumeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      enum: ["Men", "Women", "Unisex"],
    },

    image: {
      type: String,
      required: true,
    },

    info: {
      type: String,
      required: true,
    },

    info2: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },

    sizes: [
      {
        size: {
          type: String,
          required: true,
        },

        price: {
          type: Number,
          required: true,
        },
      },
    ],

    scent: [
      {
        type: String,
      },
    ],

    performance: {
      longevity: {
        type: String,
        required: true,
      },

      sillage: {
        type: String,
        required: true,
      },
    },

    occasion: {
      season: [
        {
          type: String,
        },
      ],

      time: {
        type: String,
        required: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

const Perfume = mongoose.model("Perfume", perfumeSchema);

export default Perfume;
