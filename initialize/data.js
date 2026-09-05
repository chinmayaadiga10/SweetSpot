const sampleListings = [
  {
    title: "Luxury Retreat in the Swiss Alps",
    description:
      "Relax in a stunning alpine retreat surrounded by snow-capped mountains and breathtaking Swiss scenery.",
    image:
      "https://images.unsplash.com/photo-1607585011081-241d2bacb7de?q=80&w=2670&auto=format&fit=crop",
    price: 3600,
    location: "Interlaken",
    country: "Switzerland",
    category: "landscapes",
  },
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
    category: "beach",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
    category: "rooms",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
    category: "cabins",
  },
  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Florence",
    country: "Italy",
    category: "trending",
  },
  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Portland",
    country: "United States",
    category: "adventure",
  },
  {
    title: "Beachfront Paradise",
    description:
      "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    category: "beach",
  },
  {
    title: "Rustic Cabin by the Lake",
    description:
      "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Lake Tahoe",
    country: "United States",
    category: "cabins",
  },
  {
    title: "Luxury Penthouse with City Views",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image:
      "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    category: "rooms",
  },
  {
    title: "Ski-In/Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    image:
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    category: "adventure",
  },
  {
    title: "Safari Lodge in the Serengeti",
    description:
      "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    image:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    category: "adventure",
  },
  {
    title: "Historic Canal House",
    description:
      "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    category: "aquatic",
  },
  {
    title: "Private Island Retreat",
    description:
      "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    image:
      "https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60",
    price: 10000,
    location: "Fiji",
    country: "Fiji",
    category: "aquatic",
  },
  {
    title: "Charming Cottage in the Cotswolds",
    description:
      "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    image:
      "https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Cotswolds",
    country: "United Kingdom",
    category: "landscapes",
  },
  {
    title: "Historic Brownstone in Boston",
    description:
      "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    image:
      "https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Boston",
    country: "United States",
    category: "rooms",
  },
  {
    title: "Beachfront Bungalow in Bali",
    description:
      "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    image:
      "https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Bali",
    country: "Indonesia",
    category: "pools",
  },
  {
    title: "Mountain View Cabin in Banff",
    description:
      "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    image:
      "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Banff",
    country: "Canada",
    category: "cabins",
  },
  {
    title: "Art Deco Apartment in Miami",
    description:
      "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    image:
      "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Miami",
    country: "United States",
    category: "trending",
  },
  {
    title: "Tropical Villa in Phuket",
    description:
      "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    image:
      "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Phuket",
    country: "Thailand",
    category: "pools",
  },
  {
    title: "Historic Castle in Scotland",
    description:
      "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    image:
      "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Scottish Highlands",
    country: "United Kingdom",
    category: "castle",
  },
  {
    title: "Desert Oasis in Dubai",
    description:
      "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    image:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "pools",
  },
  {
    title: "Rustic Log Cabin in Montana",
    description:
      "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    image:
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Montana",
    country: "United States",
    category: "cabins",
  },
  {
    title: "Beachfront Villa in Greece",
    description:
      "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    image:
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Mykonos",
    country: "Greece",
    category: "beach",
  },
  {
    title: "Eco-Friendly Treehouse Retreat",
    description:
      "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image:
      "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?auto=format&fit=crop&w=800&q=60",
    price: 750,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "adventure",
  },
  {
    title: "Historic Cottage in Charleston",
    description:
      "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    image:
      "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Charleston",
    country: "United States",
    category: "trending",
  },
  {
    title: "Modern Apartment in Tokyo",
    description:
      "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    image:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Tokyo",
    country: "Japan",
    category: "rooms",
  },
  {
    title: "Lakefront Cabin in New Hampshire",
    description:
      "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    image:
      "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New Hampshire",
    country: "United States",
    category: "cabins",
  },
  {
    title: "Luxury Villa in the Maldives",
    description:
      "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=800&q=60",
    price: 6000,
    location: "Maldives",
    country: "Maldives",
    category: "aquatic",
  },
  {
    title: "Ski Chalet in Aspen",
    description:
      "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Aspen",
    country: "United States",
    category: "adventure",
  },
  {
    title: "Secluded Beach House in Costa Rica",
    description:
      "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    image:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Costa Rica",
    country: "Costa Rica",
    category: "beach",
  },
  {
    title: "Luxury Houseboat in Kerala",
    description:
      "Wake up surrounded by tranquil backwaters in this beautiful luxury houseboat experience.",
    image:
      "https://images.unsplash.com/photo-1654530050931-3b02b28570c1?q=80&w=3520&auto=format&fit=crop",
    price: 1800,
    location: "Alleppey",
    country: "India",
    category: "aquatic",
  },
  {
    title: "Heritage Haveli in Jaipur",
    description:
      "Experience royal Rajasthan from a beautifully restored heritage haveli in the heart of Jaipur.",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Jaipur",
    country: "India",
    category: "trending",
  },
  {
    title: "Cliffside Villa in Santorini",
    description:
      "Enjoy breathtaking Aegean Sea views from this elegant cliffside villa overlooking Santorini.",
    image:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=60",
    price: 4200,
    location: "Santorini",
    country: "Greece",
    category: "landscapes",
  },
  {
    title: "Luxury Apartment in Paris",
    description:
      "Stay in style in this elegant Parisian apartment located close to the city's iconic landmarks.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Paris",
    country: "France",
    category: "rooms",
  },
  {
    title: "Countryside Farmhouse in Provence",
    description:
      "Relax among lavender fields and rolling countryside in this charming Provençal farmhouse.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    price: 1900,
    location: "Provence",
    country: "France",
    category: "landscapes",
  },
  {
    title: "Glass Cabin in Iceland",
    description:
      "Watch the Northern Lights from the comfort of this secluded glass cabin surrounded by Icelandic wilderness.",
    image:
      "https://images.unsplash.com/photo-1637989641855-38c054c40bc9?q=80&w=1287&auto=format&fit=crop",
    price: 3200,
    location: "Reykjavik",
    country: "Iceland",
    category: "cabins",
  },
  {
    title: "Oceanfront Villa in Goa",
    description:
      "Enjoy a relaxing tropical getaway in this stylish villa just steps away from the Arabian Sea.",
    image:
      "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Goa",
    country: "India",
    category: "beach",
  },
  {
    title: "Mountain Lodge in Manali",
    description:
      "Escape to the Himalayas and enjoy stunning mountain views from this cozy wooden lodge.",
    image:
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Manali",
    country: "India",
    category: "landscapes",
  },
  {
    title: "Modern Villa in Bali",
    description:
      "Relax in a contemporary tropical villa featuring lush gardens and a private swimming pool.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=60",
    price: 2600,
    location: "Ubud",
    country: "Indonesia",
    category: "pools",
  },
  {
    title: "Riverside Cabin in Norway",
    description:
      "Reconnect with nature in this peaceful Scandinavian cabin overlooking a pristine river.",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
    price: 2100,
    location: "Bergen",
    country: "Norway",
    category: "cabins",
  },
  {
    title: "Luxury Penthouse in Singapore",
    description:
      "Enjoy panoramic skyline views from this sophisticated penthouse in central Singapore.",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=60",
    price: 3800,
    location: "Singapore",
    country: "Singapore",
    category: "rooms",
  },
  {
    title: "Traditional Ryokan in Kyoto",
    description:
      "Experience traditional Japanese hospitality in this peaceful ryokan surrounded by historic Kyoto.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=60",
    price: 2300,
    location: "Kyoto",
    country: "Japan",
    category: "trending",
  },
  {
    title: "Luxury Chalet in Zermatt",
    description:
      "Stay beneath the Matterhorn in this luxurious alpine chalet with spectacular mountain views.",
    image:
      "https://images.unsplash.com/photo-1520984032042-162d526883e0?auto=format&fit=crop&w=800&q=60",
    price: 4500,
    location: "Zermatt",
    country: "Switzerland",
    category: "landscapes",
  },
  {
    title: "Beach House in Maui",
    description:
      "Enjoy spectacular sunsets and direct beach access from this beautiful Hawaiian beach house.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    price: 3400,
    location: "Maui",
    country: "United States",
    category: "beach",
  },
  {
    title: "Forest Cabin in Oregon",
    description:
      "Spend a peaceful weekend surrounded by towering trees in this cozy forest cabin.",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Oregon",
    country: "United States",
    category: "cabins",
  },
  {
    title: "Luxury Apartment in London",
    description:
      "Explore London from this modern apartment located near the city's most famous attractions.",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "London",
    country: "United Kingdom",
    category: "rooms",
  },
  {
    title: "Desert Camp in Jaisalmer",
    description:
      "Experience the magic of the Thar Desert from a luxurious private tent beneath the stars.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Jaisalmer",
    country: "India",
    category: "adventure",
  },
  {
    title: "Lakeside Villa in Queenstown",
    description:
      "Enjoy dramatic mountain scenery and peaceful lake views from this stunning New Zealand villa.",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=800&q=60",
    price: 2900,
    location: "Queenstown",
    country: "New Zealand",
    category: "landscapes",
  },
  {
    title: "Historic Apartment in Rome",
    description:
      "Stay in a beautifully renovated historic apartment within walking distance of Rome's ancient landmarks.",
    image:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=800&q=60",
    price: 2400,
    location: "Rome",
    country: "Italy",
    category: "rooms",
  },
  {
    title: "Private Villa in Seychelles",
    description:
      "Escape to paradise in this secluded island villa surrounded by turquoise waters and tropical forests.",
    image:
      "https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=800&q=60",
    price: 5500,
    location: "Mahé",
    country: "Seychelles",
    category: "aquatic",
  },
];

// console.log(sampleListings.length);

module.exports = { data: sampleListings };
