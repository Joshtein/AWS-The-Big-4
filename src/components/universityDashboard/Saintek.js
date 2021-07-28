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

export default function Saintek() {
  const classes = useStyles();
//   const route = ((status === false) ? "/login" : "/recommendation");
  return (
    <Grid container spacing={2} className={classes.itb_edit}>
        <Grid item className={classes.itb_majors}>
            <Title>1. Teknik Elektro</Title>
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
                    defaultValue='88'
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
                    defaultValue={12500000}
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
                <Typography>Matematika IPA: </Typography>
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
                <Typography>Fisika: </Typography>
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
                <Typography>Kimia: </Typography>
            </Grid>
            <Grid item md={8}>
                <TextField
                    label="Input Scale"
                    defaultValue={3}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Grid item md={4}>
                <Typography>Biologi: </Typography>
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
                <Typography>Bahasa Inggris: </Typography>
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
                <Typography>Bahasa Indonesia: </Typography>
            </Grid>
            <Grid item md={8}>
                <TextField
                    label="Input Scale"
                    defaultValue={4}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Typography>Deskripsi Jurusan: </Typography>
            <TextField
                label="Input Description"
                defaultValue='Program Studi Teknik Elektro menyelenggarakan perkuliahan untuk program S1 Reguler dengan dua program studi yaitu Teknik Elektro  dan Teknik Komputer. Program Studi Teknik Elektro menekankan pengembangan Sumber Daya Manusia (SDM) di bidang elektronika, komputer, tenaga listrik, sistem kendali dan telekomunikasi. Lulusan dari program studi ini diharapkan dapat menjadi tenaga ahli Teknik Elektro yang berkualitas dan memiliki kemampuan untuk mengembangkan pengetahuan dan melakukan penelitian secara mandiri serta mampu bekerja dan menerapkannya pada industri yang sesuai.'
                variant="outlined"
                fullWidth
                multiline
                rows={5}
            />
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Title>2. Farmasi</Title>
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
                    defaultValue='87'
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
                    defaultValue={12500000}
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
                <Typography>Matematika IPA: </Typography>
            </Grid>
            <Grid item md={8}>
                <TextField
                    label="Input Scale"
                    defaultValue={3}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Grid item md={4}>
                <Typography>Fisika: </Typography>
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
                <Typography>Kimia: </Typography>
            </Grid>
            <Grid item md={8}>
                <TextField
                    label="Input Scale"
                    defaultValue={6}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Grid item md={4}>
                <Typography>Biologi: </Typography>
            </Grid>
            <Grid item md={8}>
                <TextField
                    label="Input Scale"
                    defaultValue={6}
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
                    defaultValue={2}
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
                    defaultValue={2}
                    variant="outlined"
                    fullWidth
                />
            </Grid>
        </Grid>
        <Grid item className={classes.itb_majors}>
            <Typography>Deskripsi Jurusan: </Typography>
            <TextField
                label="Input Description"
                defaultValue='Program Studi Sains dan Teknologi Farmasi mengkaji ilmu pengetahuan dan teknologi di bidang farmasi, mencakup berbagai aspek yang berhubungan dengan produk farmasi mulai dari pencarian/penemuan, pengolahan dan pengembangan bahan baku hingga menjadi sediaan farmasi yang siap digunakan.'
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

