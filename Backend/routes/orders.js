const express = require(`express`);
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Orders = require('../models/Orders');
const { findById } = require('../models/User');
// const { body, validationResult } = require('express-validator');


//ROUTE: 1 => Insert Orders to DATABASE : GET "/api/orders/insert" 
router.post(`/insert`, fetchuser, async (req, res) => {

    try {

        const { name, discription, brand, imgUrl, quantity, pincode, address } = req.body;

        const myorder = new Orders({
            name, discription, brand, imgUrl, quantity, pincode, address, user: req.id
        })

        const saveorder = await myorder.save()

        res.send({success: (true), saveorder});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message })
    }


})

//ROUTE: 2 => Fetch All orders From DATABASE : GET "/api/orders/fetch" 
router.get(`/fetch`, fetchuser, async (req, res) => {

    try {
        const myorder = await Orders.find({user: req.id});
        res.json({success: (true), myorder});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message })
    }

})

//ROUTE: 3 => Update Orders  : PUT "/api/arders/update" 
router.put(`/update/:id`, fetchuser, async (req, res) => {

    try {
        const { name, discription, brand, quantity, pincode, address} = req.body;
        
        //create new Order object;
        const newOrder = {};
        if (name) { newOrder.name = name };
        if (discription) { newOrder.discription = discription };
        if (brand) { newOrder.brand = brand };
        if(quantity) {newOrder.quantity = quantity};
        if(pincode) {newOrder.pincode = pincode};
        if(address) {newOrder.address = address};

        //find order to be updated and update it
        var findOrder = await Orders.findById(req.params.id);
        if (!findOrder) {
            return res.status(404).send("Not find");
        }

        if (findOrder.user.toString() !== req.id) {
            return res.status(404).send("Not Allowed to update");
        }

        findOrder = await Orders.findByIdAndUpdate(req.params.id, { $set: newOrder }, { new: true })
        res.json({success: (true), findOrder });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message })
    }

})

//ROUTE: 4 => Deletes Order  : Delete "/api/orders/delete" 
router.delete(`/delete/:id`, fetchuser, async (req, res) => {

    try {
        //find order to be deleted and delete it
        var findOrder = await Orders.findById(req.params.id);
        if (!findOrder) {
            return res.status(404).send("Order Not found");
        }

        //check user 
        if (findOrder.user.toString() !== req.id) {
            return res.status(404).send("Not Allowed to delete");
        }

        findOrder = await Orders.findByIdAndDelete(req.params.id)
        res.json({ successs: (true), OrderDelete: findOrder });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message })
    }

})

module.exports = router;