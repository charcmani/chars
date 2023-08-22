import Box from '@mui/material/Box';

export default function Base({ children } : any) {
    const titleStyles = {
        color: '#0f0d0c'
      };
    return (
        <Box
            sx={{
                width: '80%', // Cover 80% of the screen width
                height: '80vh', // Cover 80% of the viewport height
                backgroundColor: '#fff',
                boxShadow: '0px 16px 16px rgba(0, 0, 0, 0.2)', // Shadow
                borderRadius: '2px',
                margin: 'auto', // Center the box horizontally
                marginTop: '10vh', // Add some top margin
                padding: '10px',
                // display: 'flex',
            }}
        >
            {/* Content inside the box */}
            <main>{children}</main>
        </Box>
    )
}