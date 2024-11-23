// File: C:\Users\pavan\Downloads\mavsphere\app\api\articles\articles.js

export default async function handler(req, res) {
  // Ensure the request is a GET request
  if (req.method === 'GET') {
    try {
      // Use your API key securely in the request
      const response = await fetch(
        `http://api.mediastack.com/v1/news?access_key=4b775c7f45d4f1066a649b67e1c90b73&categories=technology&limit=4`
      );
      
      if (!response.ok) {
        throw new Error("Failed to fetch articles");
      }

      const data = await response.json();
      
      // Assuming the articles are under the 'data' field
      const articles = data.data || [];
      
      // Return the fetched articles to the client
      res.status(200).json({ data: articles });
    } catch (error) {
      console.error("Error fetching articles:", error);
      res.status(500).json({ error: "Failed to fetch articles" });
    }
  } else {
    // If it's not a GET request, return a 405 Method Not Allowed
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
        