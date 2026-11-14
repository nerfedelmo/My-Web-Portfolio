export const projects = [
  {
    title: "CCAPathfinder",
    description:
      "CCAPathFinder is a campus navigation app that lets users explore interactive maps and building floor plans, search and browse rooms, and pinpoint exact room locations for easy wayfinding.",
    stack: "Android Studio | Firebase",
    githubUrl: "",
    thumbnail: "/images/ccapathfinderlogo.png",
    isCarousel: false,
  },
  {
    title: "PetTrack",
    description:
      "A pet care app that stores pet profiles, tracks feeding schedules, and sends reminders when it's time to feed them.",
    stack: "Android Studio | Firebase",
    githubUrl: "https://github.com/nerfedelmo/PetTrack.git",
    thumbnail: "/images/pettracknobg.png",
    isCarousel: false,
  },
  {
    title: "Crisis Compass",
    description:
      'Co-developed "Crisis Compass," an Android app featuring an AI first-aid assistant and real-time tracking for evacuation, hospital, and relief centers, presented at the 2024 Cloudstaff Hackathon.',
    stack: "Android Studio | Dify.AI",
    githubUrl: "https://github.com/nerfedelmo/CrisisCompass",
    thumbnail: "/images/Crisis Compass Logo.png",
    isCarousel: false,
  },
  {
    title: "EV Population Analysis",
    description:
      "For our Data Analytics project, our group normalized a dataset of 280,000 electric vehicle records into a Snowflake schema and built a Power BI dashboard to analyze and forecast market trends.",
    stack: "MS Excel | Power BI",
    githubUrl:
      "https://github.com/nerfedelmo/Electronic-Vehicles-Population-Dataset",
    isCarousel: true,
    carouselImages: [
      "/images/DataAnalytics_Overview.png",
      "/images/DataAnalytics_Forecast.png",
      "/images/DataAnalytics_CleanData.png",
      "/images/DataAnalytics_Raw.png",
    ],
  },
];
