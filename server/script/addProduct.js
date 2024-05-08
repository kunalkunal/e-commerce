const mongoose = require("mongoose");
const config = require('../configs')

const productSchema = require('../models/product.model.js')
function getCollection(database = CONFIG.DB_NAME) {
    const connection = mongoose.connection.useDb(database);
    return connection.model("product", productSchema)
}
(async () => {
    console.log(".......Creating System Admin.......");

    const DB_NAME = 'bigmart'
    const products = [
        {
            "productName": "realme 9 pro",
            "brandName": "realme",
            "category": "mobile",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057890/products/mobile/zf7sofsshuqki03godny.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 10000,
            "sellingPrice": 10000
        },
        {
            "productName": "realme 7",
            "brandName": "realme",
            "category": "mobile",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057889/products/mobile/nzka3gidrozsegynz9qs.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 10000,
            "sellingPrice": 10000
        },
        {
            "productName": "motorola 2",
            "brandName": "motorola",
            "category": "mobile",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057886/products/mobile/rmmgd3szedzjm8f11ly8.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 11000,
            "sellingPrice": 11000
        },
        {
            "productName": "redmi 7",
            "brandName": "redmi",
            "category": "mobile",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057882/products/mobile/ptirap6mrbgwc0qe6pdh.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 10000,
            "sellingPrice": 10000
        },
        {
            "productName": "realme c3",
            "brandName": "realme",
            "category": "mobile",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057881/products/mobile/to7tnrzpuq7zknomczlh.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 10000,
            "sellingPrice": 10000
        },
        {
            "productName": "realme c2",
            "brandName": "realme",
            "category": "mobile",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057881/products/mobile/lqkjycscmegqwpx6cmry.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 10000,
            "sellingPrice": 10000
        },
        {
            "productName": "realme 9 pro",
            "brandName": "realme",
            "category": "mobile",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057881/products/mobile/lyl7smvyztnjidj5jdq3.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 10000,
            "sellingPrice": 10000
        },
        {
            "productName": "cannon",
            "brandName": "cannon",
            "category": "camera",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057704/products/camera/jc5j9gzduwmrtpmbqf4w.jpg",
            "description": "DIGIC 8 Image Processor, 4K 24p Video with Crop, Full HD 60p, Dual Pixel CMOS AF with 143 AF Zones, 6.5 fps Electronic Shutter, 2.36m-Dot OLED EVF, 3 1.04m-Dot LCD Screen, Creative Assist Mode, Silent Mode for Quiet Operation, Bluetooth with SD Card Slot Effective Pixels: 24.1 MP Sensor Type: CMOS WiFi Available 4K",
            "price": 20000,
            "sellingPrice": 20000
        },
        {
            "productName": "Canon R100",
            "brandName": "cannon",
            "category": "camera",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057890/products/mobile/zf7sofsshuqki03godny.webp",
            "description": "DIGIC 8 Image Processor, 4K 24p Video with Crop, Full HD 60p, Dual Pixel CMOS AF with 143 AF Zones, 6.5 fps Electronic Shutter, 2.36m-Dot OLED EVF, 3 1.04m-Dot LCD Screen, Creative Assist Mode, Silent Mode for Quiet Operation, Bluetooth with SD Card SlotEffective Pixels: 24.1 MPSensor Type: CMOS WiFi Available 4K",
            "price": 40000,
            "sellingPrice": 40000
        },
        {
            "productName": "SUPERNIC 58 mm ",
            "brandName": "SUPERNIC",
            "category": "tv",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715058417/products/tv/sixws0bvuzwyktazw2fq.webp",
            "description": "58 mm Macro Close up Lens Filter Kit +1 +2 +4 +10 For , EOS LENS with 4 Pocket Carry Pouch",
            "price": 10000,
            "sellingPrice": 10000
        },
        {
            "productName": "Lg 2",
            "brandName": "lg",
            "category": "tv",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715058417/products/tv/gewjqoffyyue9vsdsujk.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 58000,
            "sellingPrice": 58000
        },
        {
            "productName": "m10",
            "brandName": "micromax",
            "category": "tv",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715058416/products/tv/mxt23ipbg5wpmdh3qacl.webp",
            "description": "2 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 10000,
            "sellingPrice": 10000
        },
        {
            "productName": "lg 9 ",
            "brandName": "lg",
            "category": "tv",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715058415/products/tv/snfhbijjcodeewdhh5oj.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 41000,
            "sellingPrice": 41000
        },
        {
            "productName": "a 9 pro",
            "brandName": "c1",
            "category": "mouse",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057956/products/mouse/yzvrcl5xvhb6cxcfmpns.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 500,
            "sellingPrice": 500
        },
        {
            "productName": "m1 pro",
            "brandName": "m1",
            "category": "mouse",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057956/products/mouse/xh64qkq4jhryvwcggsdr.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 400,
            "sellingPrice": 400
        },
        {
            "productName": "m2  pro",
            "brandName": "m2",
            "category": "mouse",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715057954/products/mouse/hxcowhw3mnwuymqrjf0z.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 300,
            "sellingPrice": 300
        },
        {
            "productName": "gd",
            "brandName": "godrej",
            "category": "refrigrator",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715058141/products/refrigerator/rjfkdzmxjc6xfm5tj9lb.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 10000,
            "sellingPrice": 10000
        },
        {
            "productName": "cr 9 pro",
            "brandName": "cr",
            "category": "speaker",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715058251/products/speeker/h63fvzvkymr2hd6tpcwc.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 600,
            "sellingPrice": 600
        },
        {
            "productName": "boat 2",
            "brandName": "boat",
            "category": "speaker",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715058247/products/speeker/wj8msa3vvbufjd8rjxv6.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 10000,
            "sellingPrice": 10000
        },
        {
            "productName": "p 10",
            "brandName": "p10",
            "category": "printer",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715058019/products/printers/ynjzbrvozrjwmc2ltg6q.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 10000,
            "sellingPrice": 10000
        },
        {
            "productName": "p9 pro",
            "brandName": "pq",
            "category": "printer",
            "productImage": "https://res.cloudinary.com/dwwoyezdv/image/upload/v1715058019/products/printers/fl4zvcsftf4v1dysfuks.webp",
            "description": "8 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Display 50MP + 13MP + 10MP | 50MP Front Camera 4500 mAh Battery 7 Gen 3 Mobile Platform Processor",
            "price": 6000,
            "sellingPrice": 6000
        },
       
    ]

    await getCollection(DB_NAME).insertMany(products);

    console.log(".......... Done  .......");
    process.exit();
})();