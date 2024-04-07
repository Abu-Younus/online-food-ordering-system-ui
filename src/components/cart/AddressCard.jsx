import { Home } from '@mui/icons-material'
import { Button, Card } from '@mui/material'
import React from 'react'

const AddressCard = ({item, showBtn, handleSelectAddress}) => {
  return (
    <div>
        {/* address card section start */}
        <Card className="flex gap-5 w-64 p-5">
            <Home />
            <div className="space-y-3 text-gray-500">
                <h1 className="font-semibold text-lg text-white">Home</h1>
                <p>98/2 Goborchaka Main Road, Khulna, Bangladesh.</p>
                {showBtn && <Button variant="outlined" fullWidth onClick={() => handleSelectAddress(item)}>Select</Button>}
            </div>
        </Card>
        {/* address card section end */}
    </div>
  )
}

export default AddressCard