import '@fontsource-variable/playpen-sans'

import { Mail, NotificationsOutlined } from '@mui/icons-material'
import {
  Alert,
  AlertTitle,
  AppBar,
  Badge,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'

export const ExamplePage = () => (
  <div>
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          App
        </Typography>
        <Stack direction="row">
          <IconButton color="inherit">
            <Badge color="primary" badgeContent={3}>
              <Mail />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={2}>
              <NotificationsOutlined />
            </Badge>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>

    <Card>
      <CardHeader title="This is Example App"></CardHeader>
      <CardContent>
        <Typography sx={{ mb: 3 }}>
          Look in the code to see how to create and use this theme.
        </Typography>

        <Alert severity="info">
          <AlertTitle>App has its own theme</AlertTitle>Switching theme in Storybook has no effect.
        </Alert>
      </CardContent>
      <CardActions>
        <Button variant="filled" color="primary">
          Primary button
        </Button>
        <Button variant="filled" color="secondary">
          Secondary button
        </Button>
        <Button variant="filled" color="tertiary">
          Tertiary button
        </Button>
      </CardActions>
    </Card>
  </div>
)
