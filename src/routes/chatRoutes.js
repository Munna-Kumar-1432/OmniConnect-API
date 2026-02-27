const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

/**
 * @swagger
 * /api/chat/history/{room}:
 *   get:
 *     summary: Get message history for a specific room
 *     tags: [Chat]
 *     parameters:
 *       - in: path
 *         name: room
 *         required: true
 *         schema:
 *           type: string
 *         default: general
 */
router.get('/history/:room', chatController.getChatHistory);

/**
 * @swagger
 * /api/chat/clear/{room}:
 *   delete:
 *     summary: Clear message history for a room
 *     tags: [Chat]
 */
router.delete('/clear/:room', chatController.clearChat);

module.exports = router;
