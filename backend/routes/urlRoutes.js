import express from 'express';
import ShortId from 'shortid';
import Url from '../models/url.js';

const router = express.Router();


// Create Short URL
router.post('/shorten', async (req, res) => {
    const { originalUrl } = req.body;

    if (!originalUrl) return res.status(400).json({ error: 'Original URL is required' });

    try {
        const shortUrl = ShortId.generate();
        const newUrl = new Url({ originalUrl, shortUrl });

        await newUrl.save();
        res.status(201).json(newUrl);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create short URL' });
    }
});

// Redirect to Original URL
router.get('/:shortUrl', async (req, res) => {
    const { shortUrl } = req.params;

    try {
        const urlRecord = await Url.findOne({ shortUrl });
        if (!urlRecord) return res.status(404).json({ error: 'Short URL not found' });

        res.redirect(urlRecord.originalUrl);
    } catch (err) {
        res.status(500).json({ error: 'Failed to retrieve original URL' });
    }
});

export default router;
