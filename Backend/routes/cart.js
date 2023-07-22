const express = require(`express`);
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Cart = require('../models/Cart');


//ROUTE: 1 => Insert Cart to DATABASE : GET "/api/cart/insert" 
router.post(`/insert`, fetchuser, async (req, res) => {

    try {
        const { name, discription, imgUrl} = req.body;

        const mycart = new Cart({
            name, discription, imgUrl, user: req.id
        })

        const savecart = await mycart.save()

        res.send({success: (true), savecart});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message })
    }


})

//ROUTE: 2 => Fetch All cart From DATABASE : GET "/api/cart/fetch" 
router.get(`/fetch`, fetchuser, async (req, res) => {

    try {
        const mycart = await Cart.find({user: req.id});
        res.json({success: (true), mycart});

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message })
    }

})



//ROUTE: 3 => Deletes CartItem  : Delete "/api/cart/delete" 
router.delete(`/delete/:id`, fetchuser, async (req, res) => {

    try {
        //find cartItem to be deleted and delete it
        var findCartItem = await Cart.findById(req.params.id);
        if (!findCartItem) {
            return res.status(404).send("Item Not found");
        }

        //check user 
        if (findCartItem.user.toString() !== req.id) {
            return res.status(404).send("Not Allowed to delete");
        }

        findCartItem = await Cart.findByIdAndDelete(req.params.id)
        res.json({ successs: (true), itemDelete: findCartItem });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message })
    }

})

module.exports = router;