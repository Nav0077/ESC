export interface Player {
  id: number;
  name: string;
  role: string;
  specialRole?: 'Captain' | 'Vice Captain';
  photoUrl: string;
  battingStyle?: string;
  bowlingStyle?: string;
  stats: {
    matches: number;
    runs: number;
    average: number;
    highestScore: number;
    wickets: number;
    bowlingAverage: number;
    catches?: number;
    stumpings?: number;
  };
  bio: string;
}

export interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  caption: string;
}