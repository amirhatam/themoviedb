const express = require("express")
const router = express.Router()
const {
    getUsers,
    getUserById,
    getUser,
    updateFavorites
} = require("../controllers/userController")



router.get("/", getUsers) //Pour recuperer les users

router.get("/:id", getUserById) //Pour recuperer le User par ID

router.get("/username/:username", getUser) //Pour recuperer le User par Name

router.patch("/:id/favorites", updateFavorites) //Pour update le User par ID




router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
