const express = require("express");
const router = express.Router();
const Plan = require("../models/planSchema");
const Activation = require("../models/activationSchema");

router.get("/plans", async (req, res) => {
  try{
    const plans = await Plan.find();
    return res.status(200).json(plans);
  }catch(e){
    console.log('/plans', e.message);
    return res.status(500).json({message:"Internal Server Error"})
  }
});

router.post("/activate", async (req, res) => {
 try{
    const { planId,description } = req.body;
    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + req.body.duration * 60000);

    const activation = new Activation({
      planId,
      startTime,
      endTime,
      description
    });

    await activation.save();
    res.status(200).json({ message: 'Plan activated', activation });
 }catch(e){
    console.log('/activate', e.message);
    return res.status(500).json({message:"Internal Server Error"})
 }
});

module.exports = router;
