import Title from "@/components/title";
import { Card, Grid, Link, Tooltip } from "@mui/material"
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
    <Grid container spacing={1} sx={{textAlign : 'center'}}>
      <Grid item xs={6} md={4}>
      </Grid>
      <Grid item xs={6} md={4}>
        <Title />
      </Grid>
      <Grid item xs={6} md={4}>
      </Grid>
      <Grid item xs={1} md={4}>
        <Tooltip title="LinkedIn">
          <Link href='https://www.linkedin.com/in/shubhanshu-mani-468306106/' target="_blank">
            <Card variant="outlined">
              <LinkedInIcon />
            </Card>
          </Link>
        </Tooltip>
      </Grid>
      <Grid item xs={6} md={4}>
        <Tooltip title="GitHub">
          <Link href='https://github.com/charcmani' target="_blank">
            <Card variant="outlined">
              <GitHubIcon />
            </Card>
          </Link>
        </Tooltip>
      </Grid>
      <Grid item xs={6} md={4}>
        <Tooltip title="Codechef">
          <Link href='https://www.codechef.com/users/shubhu1596' target="_blank">
            <Card variant="outlined">
              <CodeIcon />
            </Card>
          </Link>
        </Tooltip>
      </Grid>
      <Grid item xs={6} md={12} sx={{ height: 'fill', textAlign: 'center' }}>
        <Card variant="outlined"><h1>Everything in one EC2 instance</h1></Card>
      </Grid>
    </Grid>
  )
}
