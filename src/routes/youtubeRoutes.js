const express = require('express');
const router = express.Router();
const youtubeController = require('../controllers/youtubeController');
const multer = require('multer');
const { storage } = require('../configs/cloudinary');

const upload = multer({ storage });

/**
 * @swagger
 * /api/youtube/upload:
 *   post:
 *     summary: Upload video or image to Cloudinary
 *     tags: [YouTube]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               category:
 *                 type: string
 *               tags:
 *                 type: string
 *                 description: Comma separated tags
 */
router.post('/upload', upload.single('file'), youtubeController.uploadContent);

/**
 * @swagger
 * /api/youtube:
 *   get:
 *     summary: Get all uploaded content
 *     tags: [YouTube]
 */
router.get('/', youtubeController.getAllContent);

/**
 * @swagger
 * /api/youtube/{id}:
 *   delete:
 *     summary: Delete uploaded content
 *     tags: [YouTube]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 */
router.delete('/:id', youtubeController.deleteContent);

module.exports = router;
