import { Player, GalleryItem, } from './types';


export const players: Player[] = [
  {
    id: 1,
    name: "Yubraj Basnet",
    role: "Batsman",
    specialRole: "Captain",
    photoUrl: "/img/yubb.jpg",
    battingStyle: "Right-handed",
    stats: {
      matches: 12,
      runs: 300,
      average: 52.91,
      highestScore: 31,
      wickets: 0,
      bowlingAverage: 0,
      catches: 15
    },
    bio: "Aggressive batsman and inspirational captain leading from the front."
  },
  {
    id: 2,
    name: "Surendra Basnet",
    role: "All-rounder",
    specialRole: "Vice Captain",
    photoUrl: "/img/surendra.jpg",
    battingStyle: "Right-handed",
    stats: {
      matches: 9,
      runs: 140,
      average: 20.04,
      highestScore: 20,
      wickets: 12,
      bowlingAverage: 38.5,
      catches: 13
    },
    bio: "Technical master and backbone of the batting lineup and bowling attack."
  },
  {
    id: 3,
    name: "Sujan Karki",
    role: "Wicket-keeper Batsman",
    photoUrl: "/img/sujan.jpg",
    battingStyle: "Right-handed",
    stats: {
      matches: 14,
      runs: 300,
      average: 35.76,
      highestScore: 37,
      wickets: 0,
      bowlingAverage: 0,
      catches: 2,
      stumpings: 9
    },
    bio: "Explosive wicket-keeper batsman with lightning-quick reflexes behind the stumps."
  },
  {
    id: 4,
    name: "Nirajan Basnet",
    role: "Opening Bowler",
    photoUrl: "/img/nirajan.jpg",
    bowlingStyle: "Right-arm medium",
    stats: {
      matches: 14,
      runs: 60,
      average: 10.04,
      highestScore: 10,
      wickets: 13,
      bowlingAverage: 22.8,
      catches: 5
    },
    bio: "Lethal Right-arm medium fast bowler known for yorkers and swing bowling."
  },
  {
    id: 5,
    name: "NavRaj BK",
    role: "Fast Bowler",
    photoUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300",
    bowlingStyle: "Right-arm fast",
    stats: {
      matches: 12,
      runs: 61,
      average: 10.54,
      highestScore: 8,
      wickets: 15,
      bowlingAverage: 24.2,
      catches: 1
    },
    bio: "Premier fast bowler with exceptional control and variation."
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: 'image',
    url: '/img/memories.jpg',
    caption: 'Team celebration after winning the local championship'
  },
  {
    id: 2,
    type: 'image',
    url: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800',
    caption: 'Practice session at our home ground'
  },
  {
    id: 3,
    type: 'video',
    url: 'https://player.vimeo.com/video/824804225',
    caption: 'Match highlights - Finals 2023'
  }
];
export const supporters = [
  {
    name: "Rajendra Basnet",
    role: "Supporter",
    bio: "Long-time supporter and sponsor of the team."
  },
  {
    name: "Santosh Basnet",
    role: "Supporter",
    bio: "Club's official photographer and social media manager."
  },
  {
    name: "Ramesh Basnet",
    role: "Supporter",
    bio: "Club's official scorer and statistician."
  },
  {
    name: "Rajesh Basnet",
    role: "Supporter",
    bio: "Club's official physiotherapist and fitness coach."
  },
  {
    name: "Suresh Basnet",
    role: "Supporter",
    bio: "Club's official nutritionist and dietitian."
  }
];
export const sponsors = [
  {
    name: "ABC Sports",
    role: "Main Sponsor",
    logo: "/img/abc-sports-logo.png",
    bio: "Leading sports equipment manufacturer and supplier."
  },
  {
    name: "XYZ Fitness",
    role: "Fitness Partner",
    logo: "/img/xyz-fitness-logo.png",
    bio: "Premium fitness center and gym chain."
  },
  {
    name: "PQR Nutrition",
    role: "Nutrition Partner",
    logo: "/img/pqr-nutrition-logo.png",
    bio: "Specialized nutrition and dietary supplements provider."
    },
    {
      name: "STU Sports",
      role: "Sports Apparel Partner",
      logo: "/img/stu-sports-logo.png",
      bio: "Popular sports apparel and footwear brand."
      },
]