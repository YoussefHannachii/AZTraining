const express = require('express');
const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");

const app = express();
const port = process.env.PORT || 3000;

// Replace with your own Cognitive Services resource key and endpoint
const key = "4c816177232a447e97d7c79fd8fb3a30"; // Your key here
const endpoint = "https://lab8congitiveservices.cognitiveservices.azure.com/"; // Your endpoint here

// Instantiate a new client
const textAnalyticsClient = new TextAnalyticsClient(endpoint, new AzureKeyCredential(key));

// Middleware to parse JSON requests
app.use(express.json());

// Define the API endpoint for sentiment analysis and key phrases extraction
app.post('/analyze', async (req, res) => {
    const documents = req.body.texts; // Expecting an array of texts

    if (!Array.isArray(documents) || documents.length === 0) {
        return res.status(400).json({ error: 'Invalid input. Please provide an array of texts.' });
    }

    try {
        // Sentiment analysis
        const sentimentResult = await textAnalyticsClient.analyzeSentiment(documents);
        const sentiments = sentimentResult.map((document, index) => ({
            text: documents[index],
            sentiment: document.sentiment,
            confidenceScores: document.confidenceScores
        }));

        // Key phrases extraction
        const keyPhrasesResult = await textAnalyticsClient.extractKeyPhrases(documents);
        const keyPhrases = keyPhrasesResult.map((document, index) => ({
            text: documents[index],
            keyPhrases: document.keyPhrases
        }));

        // Return the results
        res.json({
            sentiments,
            keyPhrases
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while analyzing the text.' });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
