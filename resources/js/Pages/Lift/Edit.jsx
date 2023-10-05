import React from 'react'

import {
    Head,
    Link,
    router,
    usePage,
    useForm as inertiaUseForm,
} from '@inertiajs/react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import FormHelperText from '@mui/material/FormHelperText'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormLabel from '@mui/material/FormLabel'
import Autocomplete from '@mui/material/Autocomplete'

import { useForm, Controller } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

import Layout from '../AdminPanel/Layout'

const Edit = ({ lift }) => {

    const serviceCompanies = [
        { id: '0', label: 'Not Set' },
        { id: '1', label: 'RNP Kurzeme' },
        { id: '2', label: 'RNP Purvciems' },
        { id: '3', label: 'Biedrība \'Pirmais Nams\'' },
    ]

    const form = useForm({
        defaultValues: {
            regNumber: lift.reg_number,
            factoryNumber: lift.factory_number,
            liftType: lift.lift_type,
            liftCategory: lift.lift_category,
            model: lift.model,
            speed: lift.speed,
            load: lift.load,
            manufacturer: lift.manufacturer,
            installer: lift.installer,
            installationYear: lift.installation_year,
            floorsServiced: lift.floors_serviced,
            address: lift.address,
            addressCountry: lift.address_country,
            addressPostalCode: lift.address_postal_code,
            // liftManager: lift.lift_manager ? serviceCompanies.find( x => x.id == lift.lift_manager)[label] : null,
            liftManager: lift.lift_manager,
            notes: lift.notes,
        },
    })


    const { register, control, handleSubmit, formState } = form
    const { errors } = formState
    const { errors: inertiaErrors } = usePage().props

    const onSubmit = (data) => {
        console.log(lift.lift_manager)
        router.patch(route('lifts.update', lift.id), data)
    }

    return (
        <Layout>
            {/*<pre>{JSON.stringify(lift, 2, 2)}</pre>*/}
            <Head title="Edit lift"/>
            <h1>Edit lift</h1>
            <Box
                component="form"
                sx={{
                    py: 2,
                    '& .MuiTextField-root': {
                        // width: "25ch",
                    },
                }}
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                // autoComplete="off"
                className="space-y-4"
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* regNumber */}
                        <TextField
                            size="small"
                            label="Reg. Nr."
                            fullWidth
                            // autoComplete
                            helperText={errors.regNumber?.message}
                            {...register('regNumber', {
                                required: {
                                    value: true,
                                    message: 'Registration number is required.',
                                },
                            })}
                            sx={{
                                '& .MuiFormHelperText-root': {
                                    color: 'red',
                                },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* factoryNumber */}
                        <TextField
                            size="small"
                            label="Factory Nr."
                            fullWidth
                            // autoComplete
                            helperText={errors.factoryNumber?.message}
                            {...register('factoryNumber', {
                                required: {
                                    value: true,
                                    message: 'Factory number is required.',
                                },
                            })}
                            sx={{
                                '& .MuiFormHelperText-root': {
                                    color: 'red',
                                },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* liftType */}
                        <FormControl fullWidth>
                            <InputLabel id="liftType" size="small">
                                Lift Type
                            </InputLabel>
                            <Select
                                size="small"
                                defaultValue="elektriskais"
                                // labelId="liftType"
                                id="liftType"
                                label="Lift Type"
                                // onChange={handleChange}
                                {...register('liftType', {
                                    required: {
                                        value: true,
                                        message: 'Lift Type is required.',
                                    },
                                })}
                            >
                                <MenuItem value="elektriskais">
                                    elektriskais
                                </MenuItem>
                                <MenuItem value="hidrauliskais">
                                    hidrauliskais
                                </MenuItem>
                            </Select>
                            {/* {errors.liftType ? (
                                <FormHelperText id="liftType">
                                    {errors.liftType.message}
                                </FormHelperText>
                            ) : null} */}
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* liftCategory */}
                        <FormControl fullWidth>
                            <InputLabel id="liftCategory" size="small">
                                Lift Category
                            </InputLabel>
                            <Select
                                size="small"
                                defaultValue="CE"
                                // labelId="liftType"
                                id="liftCategory"
                                label="Lift Category"
                                // onChange={handleChange}
                                {...register('liftCategory', {
                                    required: {
                                        value: true,
                                        message: 'Lift Type is required.',
                                    },
                                })}
                            >
                                <MenuItem value="1">1</MenuItem>
                                <MenuItem value="2">2</MenuItem>
                                <MenuItem value="3">3</MenuItem>
                                <MenuItem value="CE">CE</MenuItem>
                            </Select>
                            {/* {errors.liftType ? (
                                <FormHelperText id="liftType">
                                    {errors.liftType.message}
                                </FormHelperText>
                            ) : null} */}
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* model */}
                        <TextField
                            size="small"
                            label="Model"
                            fullWidth
                            // autoComplete
                            helperText={errors.model?.message}
                            {...register('model')}
                            sx={{
                                '& .MuiFormHelperText-root': {
                                    color: 'red',
                                },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* speed */}
                        <TextField
                            size="small"
                            label="Speed"
                            fullWidth
                            // autoComplete
                            helperText={errors.speed?.message}
                            {...register('speed')}
                            sx={{
                                '& .MuiFormHelperText-root': {
                                    color: 'red',
                                },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* load */}
                        <TextField
                            size="small"
                            label="Load"
                            fullWidth
                            // autoComplete
                            helperText={errors.load?.message}
                            {...register('load')}
                            sx={{
                                '& .MuiFormHelperText-root': {
                                    color: 'red',
                                },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* manufacturer */}
                        <TextField
                            size="small"
                            label="Manufacturer"
                            fullWidth
                            // autoComplete
                            helperText={errors.manufacturer?.message}
                            {...register('manufacturer')}
                            sx={{
                                '& .MuiFormHelperText-root': {
                                    color: 'red',
                                },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* installer */}
                        <TextField
                            size="small"
                            label="Installer"
                            fullWidth
                            // autoComplete
                            helperText={errors.installer?.message}
                            {...register('installer')}
                            sx={{
                                '& .MuiFormHelperText-root': {
                                    color: 'red',
                                },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* installationYear */}
                        <TextField
                            size="small"
                            label="Installation Year"
                            fullWidth
                            // autoComplete
                            helperText={errors.installationYear?.message}
                            {...register('installationYear')}
                            sx={{
                                '& .MuiFormHelperText-root': {
                                    color: 'red',
                                },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* floorsServiced */}
                        <TextField
                            size="small"
                            label="Floors Serviced"
                            fullWidth
                            // autoComplete
                            helperText={errors.floorsServiced?.message}
                            {...register('floorsServiced')}
                            sx={{
                                '& .MuiFormHelperText-root': {
                                    color: 'red',
                                },
                            }}
                        />
                        {inertiaErrors.floorsServiced && (
                            <p
                                className={
                                    'text-sm text-red-600 dark:text-red-400'
                                }
                            >
                                {inertiaErrors.floorsServiced}
                            </p>
                        )}
                    </Grid>

                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* address */}
                        <TextField
                            size="small"
                            label="Address"
                            fullWidth
                            // autoComplete
                            helperText={errors.address?.message}
                            {...register('address')}
                            sx={{
                                '& .MuiFormHelperText-root': {
                                    color: 'red',
                                },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* addressCountry */}
                        <TextField
                            size="small"
                            label="Address Country"
                            fullWidth
                            // autoComplete
                            helperText={errors.addressCountry?.message}
                            {...register('addressCountry')}
                            sx={{
                                '& .MuiFormHelperText-root': {
                                    color: 'red',
                                },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* addressPostalCode */}
                        <TextField
                            size="small"
                            label="Address Postal Code"
                            fullWidth
                            // autoComplete
                            helperText={errors.addressPostalCode?.message}
                            {...register('addressPostalCode')}
                            sx={{
                                '& .MuiFormHelperText-root': {
                                    color: 'red',
                                },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={3} md={2} xl={1}>
                        {/* liftManager */}
                        <Controller

                            // defaultValue={lift.lift_manager ? serviceCompanies.find( x => x.id == lift.lift_manager).label : null}

                            control={control}
                            name="liftManager"
                            rules={{
                                required: 'this field is requried',
                            }}
                            render={({ field, fieldState: { error } }) => {
                                const { onChange, value, ref } = field
                                return (
                                    <>
                                        <Autocomplete
                                            id="liftManager"
                                            options={serviceCompanies}
                                            defaultValue={{ id: '1', label: 'RNP Kurzeme' }}
                                            // getOptionLabel={(option) => {
                                            //     return option.label
                                            // }}
                                            disablePortal
                                            clearOnEscape
                                            // sx={{ width: 300 }}
                                            fullWidth
                                            autoHighlight
                                            // value={{ id: '1', label: 'RNP Kurzeme' }}
                                            value={lift.lift_manager ?
                                                serviceCompanies.find(
                                                    option => (
                                                        option.id ===
                                                        String(lift.lift_manager)
                                                    ),
                                                ) : { id: '0', label: 'Not Set' }
                                            }
                                            onChange={(event, newValue) => {
                                                onChange(
                                                    newValue
                                                        ? newValue.id
                                                        : null,
                                                )
                                            }}
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    label="Lift Manager"
                                                    fullWidth
                                                    size="small"
                                                    // defaultValue="RNP Kurzeme"
                                                />
                                            )}
                                        />
                                    </>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        {/* notes */}
                        <TextField
                            multiline
                            rows={4}
                            size="small"
                            label="Notes"
                            fullWidth
                            // autoComplete
                            helperText={errors.notes?.message}
                            {...register('notes')}
                            sx={{
                                '& .MuiFormHelperText-root': {
                                    color: 'red',
                                },
                            }}
                        />
                    </Grid>

                    {/* <Grid item xs={12} sm={6} md={2} xl={2}>
                        RadioGroup Gender
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">
                                Gender
                            </FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    {...register("notes", {
                                        required: {
                                            value: true,
                                            message: "Password is required.",
                                        },
                                    })}
                                    value="female"
                                    control={<Radio size="small" />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    {...register("notes", {
                                        required: {
                                            value: true,
                                            message: "Password is required.",
                                        },
                                    })}
                                    value="male"
                                    control={<Radio size="small" />}
                                    label="Male"
                                />
                                <FormControlLabel
                                    {...register("notes", {
                                        required: {
                                            value: true,
                                            message: "Password is required.",
                                        },
                                    })}
                                    value="other"
                                    control={
                                        <Radio
                                            color="secondary"
                                            size="small"
                                            sx={{
                                                color: "red",
                                                "&.Mui-checked": {
                                                    color: "green",
                                                },
                                                "& .MuiSvgIcon-root": {
                                                    fontSize: 18,
                                                },
                                            }}
                                        />
                                    }
                                    label="Other"
                                />
                            </RadioGroup>
                        </FormControl>
                                </Grid> */}
                </Grid>

                {inertiaErrors && (
                    <p className={'text-sm text-red-600 dark:text-red-400'}>
                        {JSON.stringify(inertiaErrors)}
                    </p>
                )}
                <Button
                    type="submit"
                    size="small"
                    variant="contained"
                    color="success"
                    className="mt-4 ml-2"
                    disabled={!formState.isValid}
                >
                    Save
                </Button>
            </Box>
            <DevTool control={control}/>
        </Layout>
    )
}

export default Edit
