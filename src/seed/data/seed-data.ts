interface SeedProduct {
  description: string;
  images: string[];
  stock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  gender: 'men'|'women'|'kid'|'unisex'
}

type ValidSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';

interface SeedData {
  products: SeedProduct[];
}


export const initialData: SeedData = {
  products: [
    {
        title: "Men’s Chill Crew Neck Sweatshirt",
        price: 75,
        description: "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
        slug: "mens_chill_crew_neck_sweatshirt",
        stock: 7,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "men",
        tags: [
            "sweatshirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1740176-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1740176-00-A_1.jpg"
        ]
    },
    {
        title: "Men’s 3D Small Wordmark Tee",
        price: 35,
        description: "Designed for comfort and style in any size, the Tesla Small Wordmark Tee is made from 100% Peruvian cotton and features a 3D silicone-printed wordmark on the left chest.",
        slug: "men_3d_small_wordmark_tee",
        stock: 2,
        sizes: [
            "XS",
            "S",
            "M"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/8528839-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/8528839-00-A_2.jpg"
        ]
    },
    {
        title: "Men's Plaid Mode Tee",
        price: 35,
        description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
        slug: "men_plaid_mode_tee",
        stock: 82,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1549268-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1549268-00-A_2.jpg"
        ]
    },
    {
        title: "Men's Solar Roof Tee",
        price: 35,
        description: "Inspired by our fully integrated home solar and storage system, the Tesla Solar Roof Tee advocates for clean, sustainable energy wherever you go. Designed for fit, comfort and style, the tee features an aerial view of our seamless Solar Roof design on the front with our signature T logo above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
        slug: "men_solar_roof_tee",
        stock: 15,
        sizes: [
            "S",
            "M",
            "L",
            "XL"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1703767-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1703767-00-A_1.jpg"
        ]
    },
    {
        title: "Men's 3D T Logo Tee",
        price: 35,
        description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
        slug: "men_3d_t_logo_tee",
        stock: 5,
        sizes: [
            "XS",
            "S"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/7652426-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/7652426-00-A_1.jpg"
        ]
    },
    {
        title: "Men's Powerwall Tee",
        price: 35,
        description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any environment.",
        slug: "men_powerwall_tee",
        stock: 24,
        sizes: [
            "XL",
            "XXL"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/9877034-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/9877034-00-A_2.jpg"
        ]
    },
    {
        title: "Men's Turbine Short Sleeve Tee",
        price: 40,
        description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
        slug: "men_turbine_short_sleeve_tee",
        stock: 50,
        sizes: [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1741416-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1741416-00-A_1.jpg"
        ]
    },
    {
        title: "Men's Quilted Shirt Jacket",
        price: 200,
        description: "The Men's Quilted Shirt Jacket features a uniquely fit, quilted design for warmth and mobility in cold weather seasons. With an overall street-smart aesthetic, the jacket features subtle silicone injected Tesla logos below the back collar and on the right sleeve, as well as custom matte metal zipper pulls. Made from 87% nylon and 13% polyurethane.",
        slug: "men_quilted_shirt_jacket",
        stock: 5,
        sizes: [
            "XS",
            "S",
            "M",
            "XL",
            "XXL"
        ],
        gender: "men",
        tags: [
            "jacket"
        ],
        images: [
            "http://localhost:3000/api/files/product/1740507-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1740507-00-A_1.jpg"
        ]
    },
    {
        title: "Men's 3D Large Wordmark Tee",
        price: 35,
        description: "Designed for fit, comfort and style, the Men's 3D Large Wordmark Tee is made from 100% Peruvian cotton with a 3D silicone-printed Tesla wordmark printed across the chest.",
        slug: "men_3d_large_wordmark_tee",
        stock: 12,
        sizes: [
            "XS",
            "S",
            "M"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/8764734-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/8764734-00-A_1.jpg"
        ]
    },
    {
        title: "Men's Raven Lightweight Zip Up Bomber Jacket",
        price: 130,
        description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Zip Up Bomber has a premium, modern silhouette made from a sustainable bamboo cotton blend for versatility in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, a concealed chest pocket with custom matte zipper pulls and a french terry interior. Made from 70% bamboo and 30% cotton.",
        slug: "men_raven_lightweight_zip_up_bomber_jacket",
        stock: 10,
        sizes: [
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1740250-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1740250-00-A_1.jpg"
        ]
    },
    {
        title: "Men's Let the Sun Shine Tee",
        price: 35,
        description: "Inspired by the world’s most unlimited resource, the Let the Sun Shine Tee highlights our fully integrated home solar and storage system. Designed for fit, comfort and style, the tee features a sunset graphic along with our Tesla wordmark on the front and our signature T logo printed above 'Solar Roof' on the back. Made from 100% Peruvian cotton.",
        slug: "men_let_the_sun_shine_tee",
        stock: 17,
        sizes: [
            "XS",
            "S",
            "XL",
            "XXL"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1700280-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1700280-00-A_1.jpg"
        ]
    },
    {
        title: "Men's Turbine Long Sleeve Tee",
        price: 45,
        description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Men's Turbine Long Sleeve Tee features a subtle, water-based T logo on the left chest and our Tesla wordmark below the back collar. The lightweight material is double-dyed, creating a soft, casual style for ideal wear in any season. Made from 50% cotton and 50% polyester.",
        slug: "men_turbine_long_sleeve_tee",
        stock: 50,
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1740280-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1740280-00-A_1.jpg"
        ]
    },
    {
        title: "Men's Cybertruck Owl Tee",
        price: 35,
        description: "Designed for comfort, the Cybertruck Owl Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
        slug: "men_cybertruck_owl_tee",
        stock: 0,
        sizes: [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/7654393-00-A_2_2000.jpg",
            "http://localhost:3000/api/files/product/7654393-00-A_3.jpg"
        ]
    },
    {
        title: "Men's Battery Day Tee",
        price: 30,
        description: "Inspired by Tesla Battery Day and featuring the unveiled tabless battery cell, Battery Day Tee celebrates the future of energy storage and cell manufacturing. Designed for fit, comfort and style, Battery Day Tee is made from 100% cotton with a stylized cell printed across the chest. Made in Peru.",
        slug: "men_battery_day_tee",
        stock: 5,
        sizes: [
            "XS",
            "S",
            "XXL"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1633802-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1633802-00-A_2.jpg"
        ]
    },
    {
        title: "Men’s Cybertruck Bulletproof Tee",
        price: 30,
        description: "Designed for exceptional comfort and inspired by the Cybertruck unveil event, the Cybertruck Bulletproof Tee is made from 100% cotton and features our signature Cybertruck icon on the back.",
        slug: "men_cybertruck_bulletproof_tee",
        stock: 150,
        sizes: [
            "M",
            "L"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/7654399-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/7654399-00-A_1.jpg"
        ]
    },
    {
        title: "Men's S3XY Tee",
        price: 35,
        description: "Designed for fit, comfort and style, the limited edition S3XY Tee is made from 100% cotton with a 3D silicone-printed “S3XY” logo across the chest. Made in Peru. Available in black.",
        slug: "men_s3xy_tee",
        stock: 34,
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/8764600-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/8764600-00-A_2.jpg"
        ]
    },
    {
        title: "Men's Haha Yes Tee",
        price: 35,
        description: "Inspired by the Model Y order confirmation graphic, the limited edition Haha Yes Tee is designed for comfort and style. Made from 100% Peruvian cotton and featuring the Tesla wordmark across the chest, the exclusive tee will commemorate your order for years to come.",
        slug: "men_haha_yes_tee",
        stock: 10,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/7652410-00-A_0.jpg",
            "http://localhost:3000/api/files/product/7652410-00-A_1_2000.jpg"
        ]
    },
    {
        title: "Men's Raven Lightweight Hoodie",
        price: 115,
        description: "Introducing the Tesla Raven Collection. The Men's Raven Lightweight Hoodie has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve with a french terry interior for versatility in any season. Made from 70% bamboo and 30% cotton.",
        slug: "men_raven_lightweight_hoodie",
        stock: 10,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "men",
        tags: [
            "hoodie"
        ],
        images: [
            "http://localhost:3000/api/files/product/1740245-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1740245-00-A_1.jpg"
        ]
    },
    {
        title: "Men's 3D Wordmark Long Sleeve Tee",
        price: 40,
        description: "Designed for fit, comfort and style, the Men's 3D Wordmark Long Sleeve Tee is made from 100% cotton and features an understated wordmark logo on the left chest.",
        slug: "men_3d_wordmark_long_sleeve_tee",
        stock: 15,
        sizes: [
            "XL",
            "XXL"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/8764813-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/8764813-00-A_1.jpg"
        ]
    },
    {
        title: "Men's 3D T Logo Long Sleeve Tee",
        price: 40,
        description: "Designed for fit, comfort and style, the Men's 3D T Logo Long Sleeve Tee is made from 100% cotton and features an understated T logo on the left chest.",
        slug: "men_3d_t_logo_long_sleeve_tee",
        stock: 12,
        sizes: [
            "XS",
            "XXL"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/8529198-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/8529198-00-A_1.jpg"
        ]
    },
    {
        title: "Men's Chill Full Zip Hoodie",
        price: 85,
        description: "Introducing the Tesla Chill Collection. The Men's Chill Full Zip Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The hoodie features subtle thermoplastic polyurethane Tesla logos on the left chest and sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
        slug: "men_chill_full_zip_hoodie",
        stock: 100,
        sizes: [
            "XS",
            "L",
            "XL",
            "XXL"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1741111-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1741111-00-A_1.jpg"
        ]
    },
    {
        title: "Chill Pullover Hoodie",
        price: 130,
        description: "Introducing the Tesla Chill Collection. The Chill Pullover Hoodie has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The unisex hoodie features subtle thermoplastic polyurethane Tesla logos across the chest and on the sleeve, a double layer single seam hood and pockets with custom matte zipper pulls. Made from 60% cotton and 40% recycled polyester.",
        slug: "chill_pullover_hoodie",
        stock: 10,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "unisex",
        tags: [
            "hoodie"
        ],
        images: [
            "http://localhost:3000/api/files/product/1740051-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1740051-00-A_1.jpg"
        ]
    },
    {
        title: "Men's Chill Quarter Zip Pullover - Gray",
        price: 85,
        description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
        slug: "men_chill_quarter_zip_pullover_-_gray",
        stock: 7,
        sizes: [
            "XS",
            "S",
            "M"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1740140-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1740140-00-A_1.jpg"
        ]
    },
    {
        title: "Men's Chill Quarter Zip Pullover - White",
        price: 85,
        description: "Introducing the Tesla Chill Collection. The Men’s Chill Quarter Zip Pullover has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The pullover features subtle thermoplastic polyurethane Tesla logos on the left chest and below the back collar, as well as a custom matte zipper pull. Made from 60% cotton and 40% recycled polyester.",
        slug: "men_chill_quarter_zip_pullover_-_white",
        stock: 15,
        sizes: [
            "XS",
            "S",
            "M",
            "L"
        ],
        gender: "men",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1740145-00-A_2_2000.jpg",
            "http://localhost:3000/api/files/product/1740145-00-A_1.jpg"
        ]
    },
    {
        title: "Relaxed T Logo Hat",
        price: 30,
        description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
        slug: "relaxed_t_logo_hat",
        stock: 11,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "unisex",
        tags: [
            "hats"
        ],
        images: [
            "http://localhost:3000/api/files/product/1657932-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1657932-00-A_1.jpg"
        ]
    },
    {
        title: "3D Large Wordmark Pullover Hoodie",
        price: 70,
        description: "The Unisex 3D Large Wordmark Pullover Hoodie features soft fleece and an adjustable, jersey-lined hood for comfort and coverage. Designed in a unisex style, the pullover hoodie includes a tone-on-tone 3D silicone-printed wordmark across the chest.",
        slug: "3d_large_wordmark_pullover_hoodie",
        stock: 15,
        sizes: [
            "XS",
            "S",
            "XL",
            "XXL"
        ],
        gender: "unisex",
        tags: [
            "hoodie"
        ],
        images: [
            "http://localhost:3000/api/files/product/8529107-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/8529107-00-A_1.jpg"
        ]
    },
    {
        title: "Cybertruck Graffiti Hoodie",
        price: 60,
        description: "As with the iconic Tesla logo, the Cybertruck Graffiti Hoodie is a classic in the making. Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage.",
        slug: "cybertruck_graffiti_hoodie",
        stock: 13,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "unisex",
        tags: [
            "hoodie"
        ],
        images: [
            "http://localhost:3000/api/files/product/7654420-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/7654420-00-A_1_2000.jpg"
        ]
    },
    {
        title: "Women's Cropped Puffer Jacket",
        price: 225,
        description: "The Women's Cropped Puffer Jacket features a uniquely cropped silhouette for the perfect, modern style while on the go during the cozy season ahead. The puffer features subtle silicone injected Tesla logos below the back collar and on the right sleeve, custom matte metal zipper pulls and a soft, fleece lined collar. Made from 87% nylon and 13% polyurethane.",
        slug: "women_cropped_puffer_jacket",
        stock: 85,
        sizes: [
            "XS",
            "S",
            "M"
        ],
        gender: "women",
        tags: [
            "hoodie"
        ],
        images: [
            "http://localhost:3000/api/files/product/1740535-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1740535-00-A_1.jpg"
        ]
    },
    {
        title: "Women's Chill Half Zip Cropped Hoodie",
        price: 130,
        description: "Introducing the Tesla Chill Collection. The Women's Chill Half Zip Cropped Hoodie has a premium, soft fleece exterior and cropped silhouette for comfort in everyday lifestyle. The hoodie features an elastic hem that gathers at the waist, subtle thermoplastic polyurethane Tesla logos along the hood and on the sleeve, a double layer single seam hood and a custom ring zipper pull. Made from 60% cotton and 40% recycled polyester.",
        slug: "women_chill_half_zip_cropped_hoodie",
        stock: 10,
        sizes: [
            "XS",
            "S",
            "M",
            "XXL"
        ],
        gender: "women",
        tags: [
            "hoodie"
        ],
        images: [
            "http://localhost:3000/api/files/product/1740226-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1740226-00-A_1.jpg"
        ]
    },
    {
        title: "Women's Turbine Cropped Long Sleeve Tee",
        price: 45,
        description: "Introducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Long Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50%",
        slug: "women_turbine_cropped_long_sleeve_tee",
        stock: 10,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "women",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1740290-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1740290-00-A_1.jpg"
        ]
    },
    {
        title: "Women's Raven Slouchy Crew Sweatshirt",
        price: 110,
        description: "Introducing the Tesla Raven Collection. The Women's Raven Slouchy Crew Sweatshirt has a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The slouchy crew features a subtle thermoplastic polyurethane Tesla wordmark on the left sleeve and a french terry interior for a cozy look and feel in every season. Pair it with your Raven Joggers or favorite on the go fit. Made from 70% bamboo and 30% cotton.",
        slug: "women_raven_slouchy_crew_sweatshirt",
        stock: 9,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "women",
        tags: [
            "hoodie"
        ],
        images: [
            "http://localhost:3000/api/files/product/1740260-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1740260-00-A_1.jpg"
        ]
    },
    {
        title: "Thermal Cuffed Beanie",
        price: 35,
        description: "The Relaxed T Logo Hat is a classic silhouette combined with modern details, featuring a 3D T logo and a custom metal buckle closure. The ultrasoft design is flexible and abrasion resistant, while the inner sweatband includes quilted padding for extra comfort and moisture wicking. The visor is fully made from recycled plastic bottles. 100% Cotton.",
        slug: "thermal_cuffed_beanie",
        stock: 13,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "unisex",
        tags: [
            "hats"
        ],
        images: [
            "http://localhost:3000/api/files/product/1740417-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1740417-00-A_1.jpg"
        ]
    },
    {
        title: "Women's Turbine Cropped Short Sleeve Tee",
        price: 40,
        description: "ntroducing the Tesla Turbine Collection. Designed for style, comfort and everyday lifestyle, the Women's Turbine Cropped Short Sleeve Tee features a subtle, water-based Tesla wordmark across the chest and our T logo below the back collar. The lightweight material is double-dyed, creating a soft, casual style with a cropped silhouette. Made from 50% cotton and 50% polyester.",
        slug: "women_turbine_cropped_short_sleeve_tee",
        stock: 0,
        sizes: [
            "XS",
            "S"
        ],
        gender: "women",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1741441-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1741441-00-A_1.jpg"
        ]
    },
    {
        title: "Women's T Logo Short Sleeve Scoop Neck Tee",
        price: 35,
        description: "Designed for style and comfort, the ultrasoft Women's T Logo Short Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
        slug: "women_t_logo_short_sleeve_scoop_neck_tee",
        stock: 30,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "women",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/8765090-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/8765090-00-A_1.jpg"
        ]
    },
    {
        title: "Women's Small Wordmark Short Sleeve V-Neck Tee",
        price: 35,
        description: "Designed for style and comfort, the Women's Small Wordmark Short Sleeve V-Neck Tee features a tonal 3D silicone-printed wordmark on the left chest. Made of 100% Peruvian cotton.",
        slug: "women_small_wordmark_short_sleeve_v-neck_tee",
        stock: 18,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "women",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/8765120-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/8765120-00-A_1.jpg"
        ]
    },
    {
        title: "Women's Large Wordmark Short Sleeve Crew Neck Tee",
        price: 35,
        description: "Designed for style and comfort, the Women's Large Wordmark Short Sleeve Crew Neck Tee features a tonal 3D silicone-printed wordmark across the chest. Made of 100% Peruvian pima cotton.",
        slug: "women_large_wordmark_short_sleeve_crew_neck_tee",
        stock: 5,
        sizes: [
            "XL",
            "XXL"
        ],
        gender: "women",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/8765115-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/8765115-00-A_1.jpg"
        ]
    },
    {
        title: "Women's T Logo Long Sleeve Scoop Neck Tee",
        price: 40,
        description: "Designed for style and comfort, the ultrasoft Women's T Logo Long Sleeve Scoop Neck Tee features a tonal 3D silicone-printed T logo on the left chest. Made of 50% Peruvian cotton and 50% Peruvian viscose.",
        slug: "women_t_logo_long_sleeve_scoop_neck_tee",
        stock: 16,
        sizes: [
            "XS",
            "S",
            "L",
            "XL",
            "XXL"
        ],
        gender: "women",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/8765100-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/8765100-00-A_1.jpg"
        ]
    },
    {
        title: "Women's Plaid Mode Tee",
        price: 35,
        description: "Designed to celebrate Tesla's incredible performance mode, the Plaid Mode Tee features great fit, comfort and style. Made from 100% cotton, it's the next best thing to riding shotgun at the Nürburgring.",
        slug: "women_plaid_mode_tee",
        stock: 16,
        sizes: [
            "S",
            "M"
        ],
        gender: "women",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1549275-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1549275-00-A_1.jpg"
        ]
    },
    {
        title: "Women's Corp Jacket",
        price: 90,
        description: "Fully customized and uniquely styled, the Women's Corp Jacket features a silicone-printed 'T' logo on the left chest and prominent Tesla wordmark across the back.",
        slug: "women_corp_jacket",
        stock: 3,
        sizes: [
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "women",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/5645680-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/5645680-00-A_3.jpg"
        ]
    },
    {
        title: "Women’s Powerwall Tee",
        price: 130,
        description: "Inspired by our popular home battery, the Tesla Powerwall Tee is made from 100% cotton and features the phrase 'Pure Energy' under our signature logo in the back. Designed for fit, comfort and style, the exclusive tee promotes sustainable energy in any",
        slug: "women_powerwall_tee",
        stock: 10,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "women",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/9877040-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/9877040-00-A_1.jpg"
        ]
    },
    {
        title: "Women's Raven Joggers",
        price: 100,
        description: "Introducing the Tesla Raven Collection. The Women's Raven Joggers have a premium, relaxed silhouette made from a sustainable bamboo cotton blend. The joggers feature a subtle thermoplastic polyurethane Tesla wordmark and T logo and a french terry interior for a cozy look and feel in every season. Pair them with your Raven Slouchy Crew Sweatshirt, Raven Lightweight Zip Up Jacket or other favorite on the go fit. Made from 70% bamboo and 30% cotton.",
        slug: "women_raven_joggers",
        stock: 162,
        sizes: [
            "XS",
            "S",
            "M",
            "L",
            "XL",
            "XXL"
        ],
        gender: "women",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1740270-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1740270-00-A_1.jpg"
        ]
    },
    {
        title: "Kids Cybertruck Long Sleeve Tee",
        price: 30,
        description: "Designed for fit, comfort and style, the Kids Cybertruck Graffiti Long Sleeve Tee features a water-based Cybertruck graffiti wordmark across the chest, a Tesla wordmark down the left arm and our signature T logo on the back collar. Made from 50% cotton and 50% polyester.",
        slug: "kids_cybertruck_long_sleeve_tee",
        stock: 10,
        sizes: [
            "XS",
            "S",
            "M"
        ],
        gender: "kid",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1742694-00-A_1_2000.jpg",
            "http://localhost:3000/api/files/product/1742694-00-A_3.jpg"
        ]
    },
    {
        title: "Kids Scribble T Logo Tee",
        price: 25,
        description: "The Kids Scribble T Logo Tee is made from 100% Peruvian cotton and features a Tesla T sketched logo for every young artist to wear.",
        slug: "kids_scribble_t_logo_tee",
        stock: 0,
        sizes: [
            "XS",
            "S",
            "M"
        ],
        gender: "kid",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/8529312-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/8529312-00-A_1.jpg"
        ]
    },
    {
        title: "Kids Cybertruck Tee",
        price: 25,
        description: "The Kids Cybertruck Tee features the iconic Cybertruck graffiti wordmark and is made from 100% Peruvian cotton for maximum comfort.",
        slug: "kids_cybertruck_tee",
        stock: 10,
        sizes: [
            "XS",
            "S",
            "M"
        ],
        gender: "kid",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/8529342-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/8529342-00-A_1.jpg"
        ]
    },
    {
        title: "Kids Racing Stripe Tee",
        price: 30,
        description: "The refreshed Kids Racing Stripe Tee is made from 100% Peruvian cotton, featuring a newly enhanced racing stripe with a brushed Tesla wordmark that's perfect for any speed racer.",
        slug: "kids_racing_stripe_tee",
        stock: 10,
        sizes: [
            "XS",
            "S",
            "M"
        ],
        gender: "kid",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/8529354-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/8529354-00-A_1.jpg"
        ]
    },
    {
        title: "Kids Checkered Tee",
        price: 30,
        description: "The checkered tee is made from long grain, GMO free Peruvian cotton. Peru is the only country in the world where cotton is picked by hand on a large scale. The 4,500-year-old tradition prevents damage to the fiber during the picking process and removes the need to use chemicals to open the cotton plants before harvest. This environmentally friendly process results in cotton that is soft, strong, and lustrous – and the tee will get even softer with every wash.",
        slug: "kids_checkered_tee",
        stock: 10,
        sizes: [
            "XS",
            "S",
            "M"
        ],
        gender: "kid",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/100042307_0_2000.jpg",
            "http://localhost:3000/api/files/product/100042307_alt_2000.jpg"
        ]
    },
    {
        title: "Kids 3D T Logo Tee",
        price: 30,
        description: "Designed for fit, comfort and style, the Tesla T Logo Tee is made from 100% Peruvian cotton and features a silicone-printed T Logo on the left chest.",
        slug: "kids_3d_t_logo_tee",
        stock: 10,
        sizes: [
            "XS",
            "S",
            "M"
        ],
        gender: "kid",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/7652465-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/7652465-00-A_1.jpg"
        ]
    },
    {
        title: "Made on Earth by Humans Onesie",
        price: 25,
        description: "For the future space traveler with discerning taste, a soft, cotton onesie with snap closure bottom. Clear labeling provided in case of contact with a new spacefaring civilization. 100% Cotton. Made in Peru",
        slug: "made_on_earth_by_humans_onesie",
        stock: 16,
        sizes: [
            "XS",
            "S"
        ],
        gender: "kid",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1473809-00-A_1_2000.jpg",
            "http://localhost:3000/api/files/product/1473809-00-A_alt.jpg"
        ]
    },
    {
        title: "Scribble T Logo Onesie",
        price: 30,
        description: "The Kids Scribble T Logo Onesie is made from 100% Peruvian cotton and features a Tesla T sketched logo for every little artist to wear.",
        slug: "scribble_t_logo_onesie",
        stock: 0,
        sizes: [
            "XS",
            "S"
        ],
        gender: "kid",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/8529387-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/8529387-00-A_1.jpg"
        ]
    },
    {
        title: "Zero Emissions (Almost) Onesie",
        price: 30,
        description: "Show your commitment to sustainable energy with this cheeky onesie for your young one. Note: Does not prevent emissions. 100% Cotton. Made in Peru.",
        slug: "zero_emissions_(almost)_onesie",
        stock: 10,
        sizes: [
            "XS",
            "S"
        ],
        gender: "kid",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1473834-00-A_2_2000.jpg",
            "http://localhost:3000/api/files/product/1473829-00-A_2_2000.jpg"
        ]
    },
    {
        title: "Kids Cyberquad Bomber Jacket",
        price: 65,
        description: "Wear your Kids Cyberquad Bomber Jacket during your adventures on Cyberquad for Kids. The bomber jacket features a graffiti-style illustration of our Cyberquad silhouette and wordmark. With three zippered pockets and our signature T logo and Tesla wordmark printed along the sleeves, Kids Cyberquad Bomber Jacket is perfect for wherever the trail takes you. Made from 60% cotton and 40% polyester.",
        slug: "kids_cyberquad_bomber_jacket",
        stock: 10,
        sizes: [
            "XS",
            "S",
            "M"
        ],
        gender: "kid",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1742702-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1742702-00-A_1.jpg"
        ]
    },
    {
        title: "Kids Corp Jacket",
        price: 30,
        description: "Cruise the playground in style with the Kids Corp Jacket. Modeled after the original Tesla Corp Jacket, the Kids Corp Jacket features the same understated style and high-quality materials but at a pint-sized scale.",
        slug: "kids_corp_jacket",
        stock: 10,
        sizes: [
            "XS",
            "S",
            "M"
        ],
        gender: "kid",
        tags: [
            "shirt"
        ],
        images: [
            "http://localhost:3000/api/files/product/1506211-00-A_0_2000.jpg",
            "http://localhost:3000/api/files/product/1506211-00-A_1_2000.jpg"
        ]
    }
]
}