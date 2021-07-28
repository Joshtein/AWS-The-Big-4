import React from 'react';
import { TextField, makeStyles, Grid, Button, Box, Typography, InputAdornment } from '@material-ui/core';
import Title from './Title';

const useStyles = makeStyles((theme) => ({
    itb_edit: {
        display: "flex",
        flexDirection: "column",
        width: '100%'
    },
    itb_majors: {
        display: "flex",
        width: '100%',
        alignItems: 'center'
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        width: '40%',
    },
}))

export default function Soshum() {
  const classes = useStyles();
//   const route = ((status === false) ? "/login" : "/recommendation");
  return (
    <Grid container spacing={2} className={classes.itb_edit}>
        <Grid item className={classes.itb_majors}>
            <Title>1. Manajemen</Title>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Grid item md={4}>
                <Typography>Akreditasi: </Typography>
            </Grid>
            <Grid item md={8}>
                <TextField
                    label="Input Accreditation"
                    defaultValue='A'
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Grid item md={4}>
                <Typography>Passing Grade: </Typography>
            </Grid>
            <Grid item md={8}> 
                <TextField
                    label="Input Passing Grade"
                    defaultValue={83}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Grid item md={4}>
                <Typography>Budget: </Typography>
            </Grid>
            <Grid item md={8}> 
                <TextField
                    label="Input Budget"
                    defaultValue={20000000}
                    variant="outlined"
                    fullWidth
                    InputProps={{startAdornment: <InputAdornment position="start">Rp</InputAdornment>,}}
                />
            </Grid>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Typography>Scales</Typography>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Grid item md={4}>
                <Typography>Geografi: </Typography>
            </Grid>
            <Grid item md={8}>
                <TextField
                    label="Input Scale"
                    defaultValue={2}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Grid item md={4}>
                <Typography>Sejarah Minat: </Typography>
            </Grid>
            <Grid item md={8}>
                <TextField
                    label="Input Scale"
                    defaultValue={2}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Grid item md={4}>
                <Typography>Sosiologi: </Typography>
            </Grid>
            <Grid item md={8}>
                <TextField
                    label="Input Scale"
                    defaultValue={2}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Grid item md={4}>
                <Typography>Ekonomi: </Typography>
            </Grid>
            <Grid item md={8}>
                <TextField
                    label="Input Scale"
                    defaultValue={5}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Grid item md={4}>
                <Typography>Bahasa Inggris: </Typography>
            </Grid>
            <Grid item md={8}>
                <TextField
                    label="Input Scale"
                    defaultValue={5}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Grid item md={4}>
                <Typography>Bahasa Indonesia: </Typography>
            </Grid>
            <Grid item md={8}>
                <TextField
                    label="Input Scale"
                    defaultValue={5}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Typography>Deskripsi Jurusan: </Typography>
            <TextField
                label="Input Description"
                defaultValue='Manajemen merupakan bidang keilmuan yang mempelajari tentang kegiatan perusahaan atau korporasi, yang masih memiliki keterkaitan dengan ilmu ekonomi dan bisnis.'
                variant="outlined"
                fullWidth
                multiline
                rows={5}
            />
        </Grid>
        <Box textAlign='center'>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Add Major
            </Button>
        </Box>
    </Grid>
  )
}

