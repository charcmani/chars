import { Avatar, Box, Card, CardHeader, Grid, IconButton } from "@mui/material"
import { blue, grey, lightBlue, red } from "@mui/material/colors";

export default function Title() {
    return <center>
        <Box>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: grey[400] }}>
                        SM
                    </Avatar>
                }
                title="Shubhanshu Mani"
                subheader="Software Developer"
            />
        </Box>
    </center>
}


// {/*  */}