import { CalendarToday, LocationOn } from '@mui/icons-material'
import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import MenuCard from './MenuCard'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { getRestaurantById, getRestaurantCategory } from '../state/restaurant/Action'
import { getMenuItemsByRestaurantId } from '../state/menu/Action'

{/* food type array */}
const foodTypes = [
    {label: "All", value: "all"},
    {label: "Vegetarian Only", value: "vegetarian"},
    {label: "Non Vegetarian", value: "non_vegetarian"},
    {label: "Seasonal", value: "seasonal"},
]

const RestaurantDetails = () => {
    {/* all use state */}
    const [foodType, setFoodType] = useState("all")

    {/* restaurant details navigate hook */}
    const navigate = useNavigate()

    {/* restaurant details dispatch hook */}
    const dispatch = useDispatch()

    {/* user token */}
    const jwt = localStorage.getItem("jwt")

    {/* auth reducer store */}
    const {auth, restaurant, menu} = useSelector(store=>store)

    {/* selected category use state hook */}
    const {selectedCategory, setSelectedCategory} = useState(null)

    {/* restaurant params */}
    const {id,city} = useParams()

    console.log("restaurant", restaurant)

    {/* food type handle filter function */}
    const handleFilter = (e) => {
        setFoodType(e.target.value)
        console.log(e.target.value, e.target.name)
    }

    {/* food category handle filter function */}
    const handleFilterCategory = (e) => {
        setSelectedCategory(e.target.value)
        console.log(e.target.value, e.target.name)
    }

    {/* restaurant details of use effect hook */}
    useEffect(() => {
        dispatch(getRestaurantById({jwt, restaurantId: id}))
        dispatch(getRestaurantCategory({jwt, restaurantId: id}))
    }, [])

    {/* restaurant menu item use effect hook */}
    useEffect(() => {
        dispatch(getMenuItemsByRestaurantId({
            jwt, 
            restaurantId: id, 
            vegetarian: foodType === 'vegetarian', 
            nonVegetarian: foodType === 'non_vegetarian', 
            seasonal: foodType === 'seasonal', 
            foodCategory: selectedCategory
        }))
    }, [selectedCategory, foodType])

  return (
    <div className="px-5 lg:px-20">
        {/* restaurant details start */}
        <section>
            <h3 className="py-2 mt-10 text-gray-500">Home/Bangladesh/Fast Food/3</h3>
            <div>
                {/* restaurant images grid start */}
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img 
                            className="w-full h-[40vh] object-cover"
                            src={restaurant.restaurant?.images[0]} 
                            alt="" 
                        />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <img 
                            className="w-full h-[40vh] object-cover"
                            src={restaurant.restaurant?.images[1]} 
                            alt="" 
                        />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <img 
                            className="w-full h-[40vh] object-cover"
                            src="https://cdn.pixabay.com/photo/2020/09/21/05/57/coffee-5589036_640.jpg" 
                            alt="" 
                        />
                    </Grid>
                </Grid>
                {/* restaurant images grid end */}
            </div>
            
            {/* restaurant name, price, description */}
            <div className="pt-3 pb-5">
                <h1 className="text-4xl font-semibold">
                    {restaurant.restaurant?.name}
                </h1>

                <p className="text-gray-500 mt-1">
                    {restaurant.restaurant?.description}
                </p>

                <div className="space-y-3 mt-3">
                    <p className="text-gray-500 flex items-center gap-3">
                        <LocationOn />
                        <span>
                            Khulna, Bangladesh.
                        </span>
                    </p>
                </div>

                <div className="space-y-3 mt-3">
                    <p className="text-gray-500 flex items-center gap-3">
                        <CalendarToday />
                        <span>
                            Mon-Sun: 9:00AM - 9:00PM (Today)
                        </span>
                    </p>
                </div>

            </div>
        </section>
        {/* restaurant details end */}

        <Divider />

        {/* restaurant food filter & menu start */}
        <section className="pt-[2rem] lg:flex relative">

            {/* sidebar start */}
            <div className="space-y-10 lg:w-[20%] filter">
                <div className="box space-y-5 lg:sticky top-28">
                    {/* food type start */}
                    <div>
                        <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                            Food Type
                        </Typography>

                        <FormControl className="py-10 space-y-5" component={"fieldset"}>
                            <RadioGroup 
                                onChange={handleFilter}
                                name="food_type" 
                                value={foodType}
                            >
                                {
                                    foodTypes.map((item) =>
                                        <FormControlLabel 
                                            key={item.value}
                                            value={item.value} 
                                            control={<Radio />} 
                                            label={item.label} 
                                        />
                                    )
                                }
                            </RadioGroup>
                        </FormControl>
                    </div>
                    {/* food type end */}

                    <Divider />

                    {/* food category start */}
                    <div>
                        <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                            Food Category
                        </Typography>

                        <FormControl className="py-10 space-y-5" component={"fieldset"}>
                            <RadioGroup 
                                onChange={handleFilterCategory}
                                name="selectedCategory" 
                                value={selectedCategory}
                            >
                                {
                                    restaurant.categories.map((item) =>
                                        <FormControlLabel 
                                            key={item}
                                            value={item.name} 
                                            control={<Radio />} 
                                            label={item.name} 
                                        />
                                    )
                                }
                            </RadioGroup>
                        </FormControl>
                    </div>
                    {/* food category end */}

                </div>
            </div>
            {/* sidebar start */}

            {/* food menu start */}
            <div className="space-y-5 lg:w-[80%] lg:pl-10">
                {menu.menuItems.map((item) => <MenuCard item={item} />)}
            </div>
            {/* food menu end */}

        </section>
        {/* restaurant food filter & menu end */}

    </div>
  )
}

export default RestaurantDetails