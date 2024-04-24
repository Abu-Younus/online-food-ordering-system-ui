import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React, { useState } from 'react'
import { CategorizeIngredients } from '../util/CategorizeIngredients'
import { useDispatch } from 'react-redux'
import { addItemToCart } from '../state/cart/Action'

const MenuCard = ({item}) => {
    {/* select ingredients hook */}
    const [selectedIngredients, setSelectedIngredients] = useState([])

    {/* use dispatch hook */}
    const dispatch = useDispatch()

    {/* food ingredient checkbox handle function */}
    const handleCheckboxChange = (itemName) => {
        if(selectedIngredients.includes(itemName)) {
            setSelectedIngredients(selectedIngredients.filter((item) => item !== itemName))
        } else {
            setSelectedIngredients([...selectedIngredients, itemName])
        }
    }

    {/* add item to cart handle function */}
    const handleAddItemToCart = (e) => {
        e.preventDefault()
        const requestData = {
            token: localStorage.getItem('jwt'),
            cartItem: {
                foodId: item.id,
                quantity: 1,
                ingredients: selectedIngredients
            }
        }
        dispatch(addItemToCart(requestData))
        console.log("cart data ", requestData)
    }

  return (
    <>
        {/* food menu item start */}
        <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
                {/* food item details start */}
                <div className="lg:flex items-center justify-between">
                    <div className="lg:flex items-center lg:gap-5">
                        <img 
                            className="w-[7rem] h-[7rem] object-cover"
                            src={item.images[0]}
                            alt={item.name} 
                        />
                        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                            <p className="font-semibold text-xl">{item.name}</p>
                            <p>৳{item.price}</p>
                            <p className="text-gray-400">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
                {/* food item details end */}
            </AccordionSummary>

            <AccordionDetails>
                {/* food item ingredient & category start */}
                <form onSubmit={handleAddItemToCart}>
                    <div className="flex flex-wrap gap-5">
                        {
                            Object.keys(CategorizeIngredients(item.ingredientsItems)).map((category) => 
                                <div>
                                    <p>{category}</p>
                                    <FormGroup>
                                        {
                                            CategorizeIngredients(item.ingredientsItems)[category].map((item) =>
                                                <FormControlLabel 
                                                    key={item.id}
                                                    control={<Checkbox onChange={() => handleCheckboxChange(item.name)} />}
                                                    label={item.name} 
                                                 />
                                            )
                                        }
                                    </FormGroup>
                                </div>
                            )
                        }
                    </div>

                    <div className="pt-5">
                        <Button variant="contained" disabled={false} type="submit">{true ? "Add To Cart" : "Out Of Stock"}</Button>
                    </div>
                </form>
                {/* food item ingredient & category end */}
            </AccordionDetails>
        </Accordion>
        {/* food menu item end */}
    </>
  )
}

export default MenuCard