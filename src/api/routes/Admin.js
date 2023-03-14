const express = require('express');
const router = express.Router();
const {MINT,TRANSFER,GET_TRANSFER_REQUEST,GET_CORRECTION_REQUEST,UPDATE_NFT} = require('../../utils/config').ROUTES.ADMIN;
const { mintNFT,transfer, getTransferRequests, getCorrectionRequests, update} = require('../../controllers/AdminController');

router.use(MINT,mintNFT);
router.use(TRANSFER,transfer);
router.use(GET_TRANSFER_REQUEST,getTransferRequests);
router.use(GET_CORRECTION_REQUEST,getCorrectionRequests);
router.use(UPDATE_NFT,update);

module.exports = router;