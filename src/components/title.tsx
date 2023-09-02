import { Avatar, Box, Card, CardHeader, Grid, IconButton, Typography } from "@mui/material"
import { blue, grey, lightBlue, red } from "@mui/material/colors";

export default function Title() {
    return <center>
        <Box sx={{paddingTop:'35px', paddingBottom:'35px'}}>
            <Typography variant="h4">
                Shubhanshu Mani
            </Typography>
            <Typography variant="h6">
                Software Developer
            </Typography>
        </Box>
    </center>
}