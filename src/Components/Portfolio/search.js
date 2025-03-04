import { pipeline } from "@xenova/transformers";
import products from "./products";

let searchModel = null;


// Load the AI model
async function loadModel() {
  if (!searchModel) {
    searchModel = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  }
}

// Convert text to vector
async function getEmbedding(text) {
  await loadModel();
  return searchModel(text, { pooling: "mean", normalize: true });
}

// Cosine Similarity Function
function cosineSimilarity(vecA, vecB) {
  let dotProduct = vecA.reduce((sum, val, i) => sum + val * vecB[i], 0);
  let normA = Math.sqrt(vecA.reduce((sum, val) => sum + val ** 2, 0));
  let normB = Math.sqrt(vecB.reduce((sum, val) => sum + val ** 2, 0));
  return dotProduct / (normA * normB);
}

// Search Function
async function searchProducts(query) {
  const queryEmbedding = await getEmbedding(query);
  const results = [];

  for (const product of products) {
    const productEmbedding = await getEmbedding(product.description);
    const similarity = cosineSimilarity(queryEmbedding, productEmbedding);
    results.push({ ...product, score: similarity });
  }

  return results.sort((a, b) => b.score - a.score);
}

export { searchProducts };
