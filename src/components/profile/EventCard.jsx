import { Delete } from '@mui/icons-material'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

const EventCard = () => {
  return (
    <div>
        {/* event item card section start */}
        <Card sx={{ width: 330 }}>
            <CardMedia
                sx={{ height: 345 }}
                image="https://images.pexels.com/photos/1109197/pexels-photo-1109197.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <CardContent>
                <Typography variant="h5">
                    Fast Food
                </Typography>
                <Typography variant="body2">
                    50% off on your first order
                </Typography>
                <div className="py-2 space-y-2">
                    <p>Khulna</p>
                    <p className="text-sm text-blue-500">April 14, 2024 12:00AM</p>
                    <p className="text-sm text-red-500">April 15, 2024 12:00AM</p>
                </div>
            </CardContent>
            {
                false && <CardActions>
                            <IconButton>
                                <Delete />
                            </IconButton>
                        </CardActions>
            }
        </Card>
         {/* event item card section end */}
    </div>
  )
}

export default EventCard