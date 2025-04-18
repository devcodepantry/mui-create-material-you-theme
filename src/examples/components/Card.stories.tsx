import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ShareIcon from '@mui/icons-material/Share'
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { red } from '@mui/material/colors'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/Card',
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}
export default meta

type Story = StoryObj

const cardContent = {
  title: 'Shrimp and Chorizo Paella',
  subheader: 'September 14, 2016',
  image: 'https://mui.com/static/images/cards/paella.jpg',
  description:
    'This impressive paella is a perfect party dish and a fun meal to cook together with your guests.',
}

const variants: Array<'elevation' | 'outlined' | 'filled'> = ['elevation', 'outlined', 'filled']

export const AllVariants: Story = {
  render: () => (
    <Stack direction="row" spacing={3}>
      {variants.map((variant) => (
        <div key={variant}>
          <Typography variant="h6" gutterBottom>
            {variant}
          </Typography>

          <Card variant={variant} sx={{ maxWidth: 350 }}>
            <CardHeader
              avatar={<Avatar sx={{ bgcolor: red[500] }}>R</Avatar>}
              action={
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              }
              title={cardContent.title}
              subheader={cardContent.subheader}
            />
            <CardMedia component="img" height="140" image={cardContent.image} alt="Paella dish" />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {cardContent.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </div>
      ))}
    </Stack>
  ),
}
