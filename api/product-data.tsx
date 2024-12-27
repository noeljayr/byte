import rog from "@/public/images/laptops/gaming/rog.png"
import mac from "@/public/images/laptops/productivity/mac.png"
import alien from "@/public/images/laptops/gaming/notebook-alienware-x14-r2-gray-gallery-4.png"
import ideapad from "@/public/images/laptops/budget/Lenovo-IdeaPad.png"
import omen from "@/public/images/laptops/gaming/omen.png"
import xps from "@/public/images/laptops/productivity/notebook-xps-14-9440t-sl-gallery-9.png"
import swift from "@/public/images/laptops/productivity/0-etailer-hero-acer-swift-go-14-sfg14-72t-with-fingerprint-with-backlit-on-wp-ai-pure-silver-01-1.png"
import aspire from "@/public/images/laptops/budget/acer-aspire-5-a514-56p-non-fingerprint-non-backlit-wallpaper-start-screen-steel-gray-01.tif-custom_nx.khrsg.007_nx.khrsn.001.png"
import pavilion from "@/public/images/laptops/budget/pavilion.png"

const products = [
  {
    id: 'f7ba4ec1-7b22-441e-b8d7-2fcc4d4f285c',
    name: "ROG Zephyrus M16",
    price:  7000.56,
    category: "gaming",
    image: rog,
    specs: [
      "Windows 11 Pro",
      "NVIDIA® GeForce RTX™ 3080Ti Laptop GPU",
      "12th Gen Intel® Core™ i9-12900H Processor",
      "QHD+ (2560 x 1600, WQXGA) 16:10 165Hz ROG Nebula Display",
      "16GB DDR5 on board",
      "2TB M.2 NVMe™ PCIe® 4.0 Performance SSD storage",
    ],
  },
  {
    id: 'd2caabec-e22c-4b2b-89b9-ea3d2f3c7de9',
    name: "MacBook Pro",
    price: 12000.00,
    category: "productivity",
    image: mac,
    specs: [
      "macOS 14 Sonoma",
      "M3 chip with 8‑core CPU,10‑core GPU and 16‑core Neural Engine",
      "13.6-inch Liquid Retina display with True Tone²",
      "10‑core GPU",
      "8GB unified memory",
      "512GB SSD storage",
    ],
  },
  {
    id: 'facd1e2e-b523-4a1d-84e2-de2872b02e1f',
    name: "Alienware x14",
    price: 1499.99,
    category: "gaming",
    image: alien,
    specs: [
      "Windows 11 Pro",
      "NVIDIA® GeForce RTX™ 4060, 8 GB GDDR6",
      "32 GB: LPDDR5, 4800 MT/s (onboard)",
      "14'' QHD+ (2560 x 1600)165Hz, 3ms,",
      "1 TB, M.2, PCIe NVMe, SSD",
    ],
  },
  ,
  {
    id: '5f9b784b-77b2-4e2d-a08d-b7e7e2bfa19e',
    name: "Lenovo IdeaPad Flex 5i 14",
    price: 499.00,
    category: "budget",
    image: ideapad,
    specs: [
      "Windows 11 Home Single Language 64",
      "Integrated Intel® Iris® Xe Graphics",
      "16 GB LPDDR4X-4266MHz (Soldered)",
      "14 WUXGA (1920 x 1200), IPS, Glare, Touch, 45%NTSC, 300 nits, 60Hz, LED Backlight",
      "512 GB SSD M.2 2242 PCIe Gen4 TLC",
    ],
  },
  {
    id: 'e27d2f0c-d782-42c2-b02c-2fbc22d3de1a',
    name: "HP OMEN 16",
    price: 1599.99,
    category: "gaming",
    image: omen,
    specs: [
      "Windows 11 Pro",
      "AMD Ryzen™ 9 7940HS Processor",
      "NVIDIA® GeForce RTX™ 4080 Laptop GPU (12 GB GDDR6 dedicated)",
      "QHD (2560 x 1440), 240 Hz, 3 ms response time, IPS display",
      "32 GB DDR5-5600 MHz RAM (2 x 16 GB)",
      "2 TB PCIe® Gen4 NVMe™ TLC M.2 SSD",
    ],
  },
  {
    id: '23c9dcab-a08e-4e22-9b9d-de2c17828e2b',
    name: "Dell Notebook XPS 14",
    price: 1699.00,
    category: "productivity",
    image: xps,
    specs: [
      "Windows 11 Pro",
      "Intel® Core™ Ultra 7 Processor 155H (24MB Cache, 16 cores, up to 4.8 GHz)",
      "Intel® Arc™ graphics",
      "16GB LPDDR5x Dual Channel at 6400MT/s",
      "512GB M.2 PCIe NVMe Solid State Drive",
      "14.5 FHD+ (1920 x 1200) InfinityEdge non-touch display, 500-nit",
    ],
  },
  {
    id: '1b1eaabb-2c8e-4e0d-9a3c-27b8792f3c8d',
    name: "Swift Go 14",
    price: 999.99,
    category: "productivity",
    image: swift,
    specs: [
      "Windows 11 Pro",
      "Intel® Core™ Ultra 7 155H processor Tetradeca-core",
      "Intel® ARC™ Graphics shared memory",
      "14 WUXGA (1920 x 1200) 16:10 IPS 60 Hz Touchscreen",
      "16GB LPDDR5x",
      "512 GB SSD",
    ],
  },
  {
    id: '08f0251c-f781-4a4b-98b2-de8727e98e29',
    name: "Acer Aspire 5",
    price: 549.99,
    category: "budget",
    image: aspire,
    specs: [
      "Windows 11 Home",
      "Intel Core i5-1335U Processor",
      "8 GB LPDDR5 Dual Channel Memory",
      "512 GB SSD NVMe Gen4",
      "Intel Iris Xe Graphics",
    ],
  },
  {
    id: 'caea4b29-8e2b-497e-8987-17ab23c5bfa9',
    name: "HP Pavilion 15",
    price: 429.00,
    category: "budget",
    image: pavilion,
    specs: [
      "Windows 11 Home",
      "Intel® Core™ i3 1215U (12th Generation)",
      "8 GB LPDDR5 Dual Channel Memory",
      "256 GB SSD",
      "Intel® UHD Graphics",
    ],
  },
];

export default products;
