const express = require('express');

const {getAllUser,getSingleUser, getAllNote, getSingleNote, deleteUser, deleteNote } = require('../controllers/admin');


const router = express.Router({ mergeParams: true });
const {protect, authorize} = require('../middleware/auth');


router.route('/users').get(protect, authorize('admin'), getAllUser);
router.route('/users/:id').get(protect, authorize('admin'),getSingleUser).delete(protect, authorize('admin'),deleteUser);
router.route('/notes').get(protect, authorize('admin'),getAllNote);
router.route('/notes/:id').get(protect, authorize('admin'),getSingleNote).delete(protect, authorize('admin'),deleteNote);


module.exports = router;