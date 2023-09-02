import Title from "@/components/title";
import { Box, Card, Grid, Link, Stack, Tooltip, Typography } from "@mui/material"
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';

// const Item = styled(Paper)(({ theme }) => ({
//   // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   // ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   // color: theme.palette.text.secondary,
// }));

export default function Home() {
  return (
    <Grid container spacing={1} sx={{ textAlign: 'center' }}>
      <Grid item xs={6} md={4}>
      </Grid>
      <Grid item xs={6} md={4}>
        <Title />
      </Grid>
      <Grid item xs={6} md={4}>
      </Grid>
      <Grid container item>
        <Grid item xs={3}></Grid>
        <Grid item xs={2}>
          <Tooltip title="Github">
            <Link href='https://github.com/charcmani' color="inherit" target="_blank">
              <Box>
                <GitHubIcon />
              </Box>
            </Link>
          </Tooltip>
        </Grid>
        <Grid item xs={2}>
          <Tooltip title="LinkedIn">
            <Link href='https://www.linkedin.com/in/shubhanshu-mani-468306106/' color="inherit" target="_blank">
              <Box>
                <LinkedInIcon />
              </Box>
            </Link>
          </Tooltip>
        </Grid>
        <Grid item xs={2}>
          <Tooltip title="Codechef">
            <Link href='https://www.codechef.com/users/shubhu1596' color="inherit" target="_blank">
              <Box>
                <CodeIcon />
              </Box>
            </Link>
          </Tooltip>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <Box sx={{ paddingTop: '5vh' }}>
          <center>
          <Typography variant="h5">
          Projects to be listed soon
          </Typography>
          </center>
        </Box>
      </Grid>
    </Grid>
  )
}
