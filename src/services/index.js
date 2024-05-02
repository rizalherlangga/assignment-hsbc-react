import http from "./http-common";

const getAllArticles = async () => {
  try {
    const response = await http.get("/article");
    return response.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error; // Forward the error to handle it in the component
  }
};

export default { getAllArticles };