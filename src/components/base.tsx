import { Paper } from '@mui/material';
import Box from '@mui/material/Box';

export default function Base({ children } : any) {
    const titleStyles = {
        color: '#0f0d0c'
      };
    return (
        <Paper sx={{
            width: '80%', // Cover 80% of the screen width
            height: '80vh', // Cover 80% of the viewport height
            margin: 'auto', // Center the box horizontally
            marginTop: '10vh', // Add some top margin
            padding: '10px',
            // display: 'flex',
        }}>
            {/* Content inside the box */}
            <main>{children}</main>
        </Paper>
    )
}