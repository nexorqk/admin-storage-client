import * as React from 'react'
import {
    Box,
    Link,
    TextField,
    CssBaseline,
    Button,
    Grid,
    Avatar,
    Typography,
    Container,
} from '@mui/material'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import { createTheme, ThemeProvider } from '@mui/material/styles'

function Copyright(props: any) {
    return (
        <Typography
            variant='body2'
            color='text.secondary'
            align='center'
            {...props}
        >
            {'Copyright © '}
            <Link color='inherit' href='#'>
                Store
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const theme = createTheme()

const SignUp = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            lastName: data.get('lastName'),
            firstName: data.get('firstName'),
            password: data.get('password'),
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component='main' maxWidth='xs'>
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockPersonIcon />
                    </Avatar>
                    <Typography component='h1' variant='h5'>
                        Sign up
                    </Typography>
                    <Box
                        component='form'
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete='given-name'
                                    name='firstName'
                                    required
                                    fullWidth
                                    id='firstName'
                                    label='First Name'
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id='lastName'
                                    label='Last Name'
                                    name='lastName'
                                    autoComplete='family-name'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id='email'
                                    label='Email Address'
                                    name='email'
                                    autoComplete='email'
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name='password'
                                    label='Password'
                                    type='password'
                                    id='password'
                                    autoComplete='new-password'
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent='flex-end'>
                            <Grid item>
                                <Link href='/login' variant='body2'>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    )
}

export default SignUp
