// // // src/lib/perfumes.js

// // // src/lib/perfumes.js

// export const perfumes = [
//   // --- Men ---
//   {
//     id: 1,
//     title: "Dior Sauvage",
//     category: "Men",
//     image: "/perfume1.jpg",
//     info: "A powerful and fresh fragrance with notes of Bergamot and Sichuan Pepper.",
//     price: 450,
//     rating: 4.8,
//   },
//   {
//     id: 2,
//     title: "Bleu de Chanel",
//     category: "Men",
//     image: "/perfume2.jpg",
//     info: "A woody and aromatic scent combining Citrus, Mint, and Cedar.",
//     price: 580,
//     rating: 4.7,
//   },
//   {
//     id: 3,
//     title: "Versace Eros",
//     category: "Men",
//     image: "/perfume3.jpg",
//     info: "A sensual fragrance featuring Mint, Green Apple, and Vanilla.",
//     price: 380,
//     rating: 4.5,
//   },
//   {
//     id: 4,
//     title: "Giorgio Armani Acqua di Gio",
//     category: "Men",
//     image:
//       "https://www.armanibeauty.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-armani-master-catalog/default/dw9e7f4c5a/products/A001/A001_3605520551104_1.jpg",
//     info: "A fresh marine scent inspired by the Mediterranean Sea. Light and pleasant.",
//     price: 420,
//     rating: 4.6,
//   },
//   {
//     id: 5,
//     title: "Jean Paul Gaultier Le Male",
//     category: "Men",
//     image:
//       "https://www.jeanpaulgaultier.com/dw/image/v2/BDCH_PRD/on/demandware.static/-/Sites-jpg-master-catalog/default/dw7e5a6f2b/images/perfumes/LE-MALE/LE-MALE-EDT-125ML.jpg",
//     info: "An oriental fragrance with Lavender and Vanilla in the iconic bottle.",
//     price: 390,
//     rating: 4.4,
//   },
//   {
//     id: 6,
//     title: "Terre d'Hermès",
//     category: "Men",
//     image:
//       "https://www.hermes.com/dw/image/v2/BDRD_PRD/on/demandware.static/-/Sites-hermes-master-catalog/default/dw5b4c1f9a/product/fragrance/terre-d-hermes-eau-de-toilette/01.jpg",
//     info: "An earthy and woody fragrance with notes of Orange and Flint.",
//     price: 520,
//     rating: 4.8,
//   },

//   // --- Women ---
//   {
//     id: 7,
//     title: "Chanel Coco Mademoiselle",
//     category: "Women",
//     image:
//       "https://www.chanel.com/images/t_one/t_fragrance//q_auto,f_auto,fl_lossy,dpr_2/coco-mademoiselle-eau-de-parfum-spray-100ml.jpg",
//     info: "A floral and oriental scent combining Orange, Jasmine, and Rose.",
//     price: 620,
//     rating: 4.9,
//   },
//   {
//     id: 8,
//     title: "YSL Libre",
//     category: "Women",
//     image:
//       "https://www.yslbeauty.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dw4f1b3e5a/products/3614272648418/3614272648418_1.jpg",
//     info: "A bold combination of Lavender from France and Orange Blossom from Morocco.",
//     price: 490,
//     rating: 4.7,
//   },
//   {
//     id: 9,
//     title: "Dior J'adore",
//     category: "Women",
//     image:
//       "https://www.dior.com/dw/image/v2/BBDM_PRD/on/demandware.static/-/Sites-master_dior/default/dw15053421/assets/Y0066227/Y0066227_E01.jpg",
//     info: "A rich floral bouquet blending Jasmine, Rose, and Ylang-Ylang.",
//     price: 550,
//     rating: 4.8,
//   },
//   {
//     id: 10,
//     title: "Lancôme La Vie Est Belle",
//     category: "Women",
//     image:
//       "https://www.lancome.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-master-catalog/default/dw9e7f4c5a/products/A001/A001_3605532612690_1.jpg",
//     info: "A sweet fragrance featuring Iris, Jasmine, and Patchouli.",
//     price: 430,
//     rating: 4.6,
//   },
//   {
//     id: 11,
//     title: "Carolina Herrera Good Girl",
//     category: "Women",
//     image:
//       "https://www.carolinaherrera.com/dw/image/v2/BDCH_PRD/on/demandware.static/-/Sites-ch-master-catalog/default/dw7e5a6f2b/images/fragrance/GOOD-GIRL/GOOD-GIRL-EDP-80ML.jpg",
//     info: "A mix of Tonka Bean and Jasmine in the famous stiletto-shaped bottle.",
//     price: 510,
//     rating: 4.7,
//   },
//   {
//     id: 12,
//     title: "Gucci Flora",
//     category: "Women",
//     image:
//       "https://www.gucci.com/dw/image/v2/BDRD_PRD/on/demandware.static/-/Sites-gucci-master-catalog/default/dw5b4c1f9a/product/fragrance/gucci-flora-gorgeous-gardenia-100ml/01.jpg",
//     info: "A delicate floral scent based on Gardenia and Pear Blossom.",
//     price: 480,
//     rating: 4.5,
//   },

//   // --- Unisex ---
//   {
//     id: 13,
//     title: "Creed Aventus",
//     category: "Unisex",
//     image:
//       "https://www.creedfragrance.com/dw/image/v2/BDCH_PRD/on/demandware.static/-/Sites-creed-master-catalog/default/dw7e5a6f2b/images/fragrance/AVENTUS/AVENTUS-100ML.jpg",
//     info: "A luxury perfume with notes of Pineapple, Bergamot, and Musk.",
//     price: 1200,
//     rating: 4.9,
//   },
//   {
//     id: 14,
//     title: "Baccarat Rouge 540",
//     category: "Unisex",
//     image:
//       "https://www.franciskurkdjian.com/dw/image/v2/BDRD_PRD/on/demandware.static/-/Sites-kurkdjian-master-catalog/default/dw5b4c1f9a/product/fragrance/baccarat-rouge-540-eau-de-parfum/01.jpg",
//     info: "A sophisticated fragrance of Saffron, Jasmine, and Amberwood.",
//     price: 1450,
//     rating: 5.0,
//   },
//   {
//     id: 15,
//     title: "Tom Ford Black Orchid",
//     category: "Unisex",
//     image:
//       "https://www.tomford.com/dw/image/v2/BDRD_PRD/on/demandware.static/-/Sites-tomford-master-catalog/default/dw5b4c1f9a/product/fragrance/black-orchid-eau-de-parfum/01.jpg",
//     info: "A dark and mysterious scent of Black Orchid and rich spices.",
//     price: 750,
//     rating: 4.6,
//   },
//   {
//     id: 16,
//     title: "Byredo Gypsy Water",
//     category: "Unisex",
//     image:
//       "https://www.byredo.com/dw/image/v2/BDRD_PRD/on/demandware.static/-/Sites-byredo-master-catalog/default/dw5b4c1f9a/product/fragrance/gypsy-water-eau-de-parfum/01.jpg",
//     info: "A bohemian fragrance combining Lemon, Pepper, and Juniper Berries.",
//     price: 820,
//     rating: 4.7,
//   },
//   {
//     id: 17,
//     title: "Le Labo Santal 33",
//     category: "Unisex",
//     image:
//       "https://www.lelabofragrances.com/dw/image/v2/BDRD_PRD/on/demandware.static/-/Sites-lelabo-master-catalog/default/dw5b4c1f9a/product/fragrance/santal-33-eau-de-parfum/01.jpg",
//     info: "A woody and rugged scent of Sandalwood, Leather, and Violet.",
//     price: 950,
//     rating: 4.9,
//   },
//   {
//     id: 18,
//     title: "Molecule 01",
//     category: "Unisex",
//     image:
//       "https://www.escentric.com/dw/image/v2/BDRD_PRD/on/demandware.static/-/Sites-escentric-master-catalog/default/dw5b4c1f9a/product/fragrance/molecule-01/01.jpg",
//     info: "A revolutionary fragrance consisting of a single molecule that reacts to body chemistry.",
//     price: 490,
//     rating: 4.8,
//   },
// ];

export const perfumes = [
  // --- Men ---
  {
    id: 1,
    title: "Dior Sauvage",
    category: "Men",
    image: "/perfume1.jpg",
    info: "A powerful and fresh fragrance with notes of Bergamot and Sichuan Pepper.",
    info2:
      "Dior Sauvage is an act of creation inspired by wide-open spaces. An ozone blue sky that dominates a white-hot rocky landscape. The strong gust of Citrus in Sauvage is powerfully anchored by the ambery nobility of Ambroxan.",
    price: 450, // Default (100ml)
    rating: 4.8,
    sizes: [
      { size: "60ml", price: 320 },
      { size: "100ml", price: 450 },
      { size: "200ml", price: 680 },
    ],
    scent: ["Raw", "Noble", "Fresh", "Citrus", "Woody"],
    performance: { longevity: "Long Lasting", sillage: "Strong" },
    occasion: { season: ["All Seasons"], time: "Day & Night" },
  },
  {
    id: 2,
    title: "Bleu de Chanel",
    category: "Men",
    image: "/perfume2.jpg",
    info: "A woody and aromatic scent combining Citrus, Mint, and Cedar.",
    info2:
      "Bleu de Chanel represents the color of freedom. A fragrance that reveals a masculine spirit through a timeless, woody aromatic trail that pays tribute to masculine freedom.",
    price: 580, // Default (100ml)
    rating: 4.7,
    sizes: [
      { size: "50ml", price: 410 },
      { size: "100ml", price: 580 },
      { size: "150ml", price: 720 },
    ],
    scent: ["Timeless", "Magnetic", "Aromatic", "Dry Woods"],
    performance: { longevity: "Moderate", sillage: "Moderate" },
    occasion: { season: ["Spring", "Summer", "Autumn"], time: "Day & Night" },
  },
  {
    id: 3,
    title: "Versace Eros",
    category: "Men",
    image: "/perfume3.jpg",
    info: "A sensual fragrance featuring Mint, Green Apple, and Vanilla.",
    info2:
      "Eros is the fragrance that interprets the sublime masculinity through a luminous aura with an intense, vibrant and glowing freshness. Inspired by Greek mythology.",
    price: 380, // Default (100ml)
    rating: 4.5,
    sizes: [
      { size: "50ml", price: 270 },
      { size: "100ml", price: 380 },
      { size: "200ml", price: 510 },
    ],
    scent: ["Vibrant", "Passionate", "Oriental", "Sweet", "Minty"],
    performance: { longevity: "Long Lasting", sillage: "Heavy" },
    occasion: { season: ["Winter", "Autumn"], time: "Night" },
  },
  {
    id: 4,
    title: "Giorgio Armani Acqua di Gio",
    category: "Men",
    image:
      "https://www.armanibeauty.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-armani-master-catalog/default/dw9e7f4c5a/products/A001/A001_3605520551104_1.jpg",
    info: "A fresh marine scent inspired by the Mediterranean Sea. Light and pleasant.",
    info2:
      "A legendary scent that captures the essence of the ocean. This aquatic, hyacinth-scented fragrance opens with a splash of fresh, calabrian bergamot, neroli and green tangerine.",
    price: 420, // Default (100ml)
    rating: 4.6,
    sizes: [
      { size: "50ml", price: 300 },
      { size: "100ml", price: 420 },
      { size: "200ml", price: 590 },
    ],
    scent: ["Pure", "Aquatic", "Marine", "Citrus", "Sunny"],
    performance: { longevity: "Moderate", sillage: "Intimate" },
    occasion: { season: ["Summer", "Spring"], time: "Day" },
  },
  {
    id: 5,
    title: "Jean Paul Gaultier Le Male",
    category: "Men",
    image:
      "https://www.jeanpaulgaultier.com/dw/image/v2/BDCH_PRD/on/demandware.static/-/Sites-jpg-master-catalog/default/dw7e5a6f2b/images/perfumes/LE-MALE/LE-MALE-EDT-125ML.jpg",
    info: "An oriental fragrance with Lavender and Vanilla in the iconic bottle.",
    info2:
      "Intensive and sensible, modern, and comfortably warm. Le Male is a magnetically attractive fragrance which seduces with its uniqueness; it is built on contrasts.",
    price: 390, // Default (125ml)
    rating: 4.4,
    sizes: [
      { size: "40ml", price: 210 },
      { size: "75ml", price: 290 },
      { size: "125ml", price: 390 },
    ],
    scent: ["Sexy", "Unconventional", "Lavender", "Warm", "Vanilla"],
    performance: { longevity: "Long Lasting", sillage: "Moderate" },
    occasion: { season: ["Autumn", "Winter"], time: "Night" },
  },
  {
    id: 6,
    title: "Terre d'Hermès",
    category: "Men",
    image:
      "https://www.hermes.com/dw/image/v2/BDRD_PRD/on/demandware.static/-/Sites-hermes-master-catalog/default/dw5b4c1f9a/product/fragrance/terre-d-hermes-eau-de-toilette/01.jpg",
    info: "An earthy and woody fragrance with notes of Orange and Flint.",
    info2:
      "This fragrance is a symbolic narrative exploring the raw material and its metamorphosis. A novel that expresses the alchemical power of the elements.",
    price: 520, // Default (100ml)
    rating: 4.8,
    sizes: [
      { size: "50ml", price: 370 },
      { size: "100ml", price: 520 },
      { size: "200ml", price: 740 },
    ],
    scent: ["Earthy", "Mature", "Mineral", "Spicy", "Orange"],
    performance: { longevity: "Long Lasting", sillage: "Moderate" },
    occasion: { season: ["Autumn", "Spring", "Winter"], time: "Day" },
  },

  // --- Women ---
  {
    id: 7,
    title: "Chanel Coco Mademoiselle",
    category: "Women",
    image:
      "https://www.chanel.com/images/t_one/t_fragrance//q_auto,f_auto,fl_lossy,dpr_2/coco-mademoiselle-eau-de-parfum-spray-100ml.jpg",
    info: "A floral and oriental scent combining Orange, Jasmine, and Rose.",
    info2:
      "Irresistibly sexy, irrepressibly spirited. A sparkling, bold floral-woody fragrance that recalls a daring young Coco Chanel. A modern composition with a strong character.",
    price: 620, // Default (100ml)
    rating: 4.9,
    sizes: [
      { size: "35ml", price: 380 },
      { size: "50ml", price: 440 },
      { size: "100ml", price: 620 },
    ],
    scent: ["Chic", "Rebellious", "Oriental", "Floral", "Elegant"],
    performance: { longevity: "Long Lasting", sillage: "Strong" },
    occasion: { season: ["All Seasons"], time: "Day & Night" },
  },
  {
    id: 8,
    title: "YSL Libre",
    category: "Women",
    image:
      "https://www.yslbeauty.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-ysl-master-catalog/default/dw4f1b3e5a/products/3614272648418/3614272648418_1.jpg",
    info: "A bold combination of Lavender from France and Orange Blossom from Morocco.",
    info2:
      "The fragrance of freedom. A grand floral Eau de Parfum with an unequivocal YSL twist. The burning sensuality of orange blossom twisted with aromatic lavender.",
    price: 490, // Default (100ml)
    rating: 4.7,
    sizes: [
      { size: "30ml", price: 290 },
      { size: "50ml", price: 350 },
      { size: "100ml", price: 490 },
    ],
    scent: ["Fearless", "Free", "Lavender", "Orange Blossom", "Bold"],
    performance: { longevity: "Long Lasting", sillage: "Moderate" },
    occasion: { season: ["Autumn", "Winter", "Spring"], time: "Day & Night" },
  },
  {
    id: 9,
    title: "Dior J'adore",
    category: "Women",
    image:
      "https://www.dior.com/dw/image/v2/BBDM_PRD/on/demandware.static/-/Sites-master_dior/default/dw15053421/assets/Y0066227/Y0066227_E01.jpg",
    info: "A rich floral bouquet blending Jasmine, Rose, and Ylang-Ylang.",
    info2:
      "J'adore is an extraordinary fragrance, because it succeeds in being effortlessly seductive while boasting an original signature. A composition that unites contrasts.",
    price: 550, // Default (100ml)
    rating: 4.8,
    sizes: [
      { size: "30ml", price: 310 },
      { size: "50ml", price: 390 },
      { size: "100ml", price: 550 },
    ],
    scent: ["Luminous", "Golden", "Floral Bouquet", "Radiant", "Classic"],
    performance: { longevity: "Moderate", sillage: "Moderate" },
    occasion: { season: ["Spring", "Autumn"], time: "Day" },
  },
  {
    id: 10,
    title: "Lancôme La Vie Est Belle",
    category: "Women",
    image:
      "https://www.lancome.com/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-lancome-master-catalog/default/dw9e7f4c5a/products/A001/A001_3605532612690_1.jpg",
    info: "A sweet fragrance featuring Iris, Jasmine, and Patchouli.",
    info2:
      "La Vie Est Belle, a French expression meaning 'Life is Beautiful'. A fragrance with a powerful trail, with a perfect balance between the nobility of Iris and depth of Patchouli.",
    price: 430, // Default (100ml)
    rating: 4.6,
    sizes: [
      { size: "30ml", price: 260 },
      { size: "50ml", price: 310 },
      { size: "100ml", price: 430 },
    ],
    scent: ["Sweet", "Joyful", "Gourmand", "Iris", "Praline"],
    performance: { longevity: "Long Lasting", sillage: "Heavy" },
    occasion: { season: ["Winter", "Autumn"], time: "Day & Night" },
  },
  {
    id: 11,
    title: "Carolina Herrera Good Girl",
    category: "Women",
    image:
      "https://www.carolinaherrera.com/dw/image/v2/BDCH_PRD/on/demandware.static/-/Sites-ch-master-catalog/default/dw7e5a6f2b/images/fragrance/GOOD-GIRL/GOOD-GIRL-EDP-80ML.jpg",
    info: "A mix of Tonka Bean and Jasmine in the famous stiletto-shaped bottle.",
    info2:
      "Give a girl the right shoes and she can conquer the world. This fragrance is inspired by the duality of the modern woman: audacious and sexy, elegant and enigmatic.",
    price: 510, // Default (80ml)
    rating: 4.7,
    sizes: [
      { size: "30ml", price: 280 },
      { size: "50ml", price: 360 },
      { size: "80ml", price: 510 },
    ],
    scent: ["Dark", "Light", "Tonka", "Coffee", "Jasmine"],
    performance: { longevity: "Long Lasting", sillage: "Strong" },
    occasion: { season: ["Winter", "Autumn"], time: "Night" },
  },
  {
    id: 12,
    title: "Gucci Flora",
    category: "Women",
    image:
      "https://www.gucci.com/dw/image/v2/BDRD_PRD/on/demandware.static/-/Sites-gucci-master-catalog/default/dw5b4c1f9a/product/fragrance/gucci-flora-gorgeous-gardenia-100ml/01.jpg",
    info: "A delicate floral scent based on Gardenia and Pear Blossom.",
    info2:
      "Escape into a joy-filled fantasy land with Gucci Flora. Evolving into a new delicious Eau de Parfum, floral yet delicately sweet, Gorgeous Gardenia is built around the Gardenia flower.",
    price: 480, // Default (100ml)
    rating: 4.5,
    sizes: [
      { size: "30ml", price: 250 },
      { size: "50ml", price: 340 },
      { size: "100ml", price: 480 },
    ],
    scent: ["Enchanting", "Floral", "Solar", "Gardenia", "Pear Blossom"],
    performance: { longevity: "Moderate", sillage: "Moderate" },
    occasion: { season: ["Spring", "Summer"], time: "Day" },
  },

  // --- Unisex ---
  {
    id: 13,
    title: "Creed Aventus",
    category: "Unisex",
    image:
      "https://www.creedfragrance.com/dw/image/v2/BDCH_PRD/on/demandware.static/-/Sites-creed-master-catalog/default/dw7e5a6f2b/images/fragrance/AVENTUS/AVENTUS-100ML.jpg",
    info: "A luxury perfume with notes of Pineapple, Bergamot, and Musk.",
    info2:
      "The exceptional Aventus celebrates strength, power and success. Inspired by the dramatic life of a historic emperor, it has become the most successful fragrance in Creed history.",
    price: 1200, // Default (100ml)
    rating: 4.9,
    sizes: [
      { size: "50ml", price: 850 },
      { size: "100ml", price: 1200 },
      { size: "250ml", price: 2100 },
    ],
    scent: ["Iconic", "Kingly", "Fruity", "Woody", "Pineapple"],
    performance: { longevity: "Long Lasting", sillage: "Strong" },
    occasion: { season: ["All Seasons"], time: "Day" },
  },
  {
    id: 14,
    title: "Baccarat Rouge 540",
    category: "Unisex",
    image:
      "https://www.franciskurkdjian.com/dw/image/v2/BDRD_PRD/on/demandware.static/-/Sites-kurkdjian-master-catalog/default/dw5b4c1f9a/product/fragrance/baccarat-rouge-540-eau-de-parfum/01.jpg",
    info: "A sophisticated fragrance of Saffron, Jasmine, and Amberwood.",
    info2:
      "Luminous and sophisticated, Baccarat Rouge 540 lays on the skin like an amber, floral and woody breeze. A graphic and highly condensed signature signature.",
    price: 1450, // Default (70ml)
    rating: 5.0,
    sizes: [
      { size: "35ml", price: 850 },
      { size: "70ml", price: 1450 },
      { size: "200ml", price: 2600 },
    ],
    scent: ["Hypnotic", "Airy", "Saffron", "Jasmine", "Amberwood"],
    performance: { longevity: "Eternal", sillage: "Heavy" },
    occasion: { season: ["Autumn", "Winter"], time: "Day & Night" },
  },
  {
    id: 15,
    title: "Tom Ford Black Orchid",
    category: "Unisex",
    image:
      "https://www.tomford.com/dw/image/v2/BDRD_PRD/on/demandware.static/-/Sites-tomford-master-catalog/default/dw5b4c1f9a/product/fragrance/black-orchid-eau-de-parfum/01.jpg",
    info: "A dark and mysterious scent of Black Orchid and rich spices.",
    info2:
      "A luxurious and sensual fragrance of rich, dark accords and an alluring potion of black orchids and spice. Modern and timeless.",
    price: 750, // Default (100ml)
    rating: 4.6,
    sizes: [
      { size: "30ml", price: 420 },
      { size: "50ml", price: 530 },
      { size: "100ml", price: 750 },
    ],
    scent: ["Mysterious", "Opulent", "Dark", "Spicy", "Truffle"],
    performance: { longevity: "Long Lasting", sillage: "Heavy" },
    occasion: { season: ["Winter"], time: "Night" },
  },
  {
    id: 16,
    title: "Byredo Gypsy Water",
    category: "Unisex",
    image:
      "https://www.byredo.com/dw/image/v2/BDRD_PRD/on/demandware.static/-/Sites-byredo-master-catalog/default/dw5b4c1f9a/product/fragrance/gypsy-water-eau-de-parfum/01.jpg",
    info: "A bohemian fragrance combining Lemon, Pepper, and Juniper Berries.",
    info2:
      "Gypsy Water is an ode to the beauty of Romany culture, its unique customs and intimate beliefs. A dream of a free lifestyle close to nature.",
    price: 820, // Default (100ml)
    rating: 4.7,
    sizes: [
      { size: "50ml", price: 580 },
      { size: "100ml", price: 820 },
      { size: "200ml", price: 1150 },
    ],
    scent: ["Bohemian", "Piney", "Fresh", "Incense", "Vanilla"],
    performance: { longevity: "Weak", sillage: "Intimate" },
    occasion: { season: ["Spring", "Summer"], time: "Day" },
  },
  {
    id: 17,
    title: "Le Labo Santal 33",
    category: "Unisex",
    image:
      "https://www.lelabofragrances.com/dw/image/v2/BDRD_PRD/on/demandware.static/-/Sites-lelabo-master-catalog/default/dw5b4c1f9a/product/fragrance/santal-33-eau-de-parfum/01.jpg",
    info: "A woody and rugged scent of Sandalwood, Leather, and Violet.",
    info2:
      "A perfume that touches the sensual universality of this myth. An open fire, the soft drift of smoke, where sensuality rises after the light has gone.",
    price: 950, // Default (100ml)
    rating: 4.9,
    sizes: [
      { size: "50ml", price: 670 },
      { size: "100ml", price: 950 },
      { size: "500ml", price: 2400 },
    ],
    scent: ["Woody", "Rugged", "Sandalwood", "Leather", "Violet"],
    performance: { longevity: "Long Lasting", sillage: "Strong" },
    occasion: { season: ["Autumn", "Winter", "Spring"], time: "Day & Night" },
  },
  {
    id: 18,
    title: "Molecule 01",
    category: "Unisex",
    image:
      "https://www.escentric.com/dw/image/v2/BDRD_PRD/on/demandware.static/-/Sites-escentric-master-catalog/default/dw5b4c1f9a/product/fragrance/molecule-01/01.jpg",
    info: "A revolutionary fragrance consisting of a single molecule that reacts to body chemistry.",
    info2:
      "Molecule 01 consists of the molecule Iso E Super pure and singular. A subtle velvety-woody note which will vanish and then re-surface.",
    price: 490, // Default (100ml)
    rating: 4.8,
    sizes: [
      { size: "30ml", price: 340 },
      { size: "100ml", price: 490 },
      { size: "200ml", price: 720 },
    ],
    scent: ["Minimalist", "Velvety", "Iso E Super", "Clean", "Skin-scent"],
    performance: { longevity: "Moderate", sillage: "Intimate" },
    occasion: { season: ["All Seasons"], time: "Day" },
  },
];
