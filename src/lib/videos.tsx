import videosData from "data/videos.json";

export const getVideos = async () => {
  //   GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=disney%20trailer&key=[YOUR_API_KEY] HTTP/1.1

  // Authorization: Bearer [YOUR_ACCESS_TOKEN]
  // Accept: application/json

  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  const response = await fetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=disney%20trailer&key=${YOUTUBE_API_KEY}`
  );

  const data = await response.json();

  console.log({ data });

  return data.items.map((item: any) => {
    return {
      title: item.snippet.title,
      id: item?.id?.videoId,
      imgUrl: item.snippet.thumbnails.high.url,
    };
  });
};
