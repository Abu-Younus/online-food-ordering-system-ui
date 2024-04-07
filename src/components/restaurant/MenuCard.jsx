import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'

{/* category & ingredient array */}
const ingredients = [
    {
        category: "Nuts & Seeds",
        ingredient: ["Cashews"]
    },
    {
        category: "Protein",
        ingredient: ["Ground beef", "Bacon strips"]
    },
    {
        category: "Bread",
        ingredient: ["Hamburger buns"]
    },
]

const MenuCard = () => {
    {/* food ingredient checkbox handle function */}
    const handleCheckboxChange = (value) => {
        console.log(value)
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
                            src="https://cdn.pixabay.com/photo/2020/10/05/19/55/hamburger-5630646_960_720.jpg" 
                            alt="" 
                        />
                        <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                            <p className="font-semibold text-xl">Burger</p>
                            <p>৳499</p>
                            <p className="text-gray-400">
                                Nice Food
                            </p>
                        </div>
                    </div>
                </div>
                {/* food item details end */}
            </AccordionSummary>

            <AccordionDetails>
                {/* food item ingredient & category start */}
                <form>
                    <div className="flex flex-wrap gap-5">
                        {
                            ingredients.map((item) => 
                                <div>
                                    <p>{item.category}</p>
                                    <FormGroup>
                                        {
                                            item.ingredient.map((item) =>
                                                <FormControlLabel control={<Checkbox onChange={() => handleCheckboxChange(item)} />} label={item} />
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