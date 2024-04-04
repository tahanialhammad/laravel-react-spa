import React from "react";
import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import {
    Alert,
    Box,
    Button,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

//  validation using react hook form , https://react-hook-form.com/get-started
import { useForm } from "react-hook-form";

// Snackbar (MUI) == sweetalert
import Snackbar from "@mui/material/Snackbar";

const currencies = [
    {
        value: "admin",
        label: "Admin",
    },
    {
        value: "user",
        label: "User",
    },
];

const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function AddUser({ auth }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        //console.log(data)
        alert(data);
        handleClick();
    };

    // snackalert
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <Typography>AddUser</Typography>

            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
                noValidate
                autoComplete="off"
            >
                <Stack sx={{ gap: 2 }} direction={"row"}>
                    <TextField
                        sx={{ flex: 1 }}
                        label="First name"
                        variant="filled"
                        // from mui
                        error={Boolean(errors.firstName)}
                        helperText={
                            Boolean(errors.firstName)
                                ? "This field is required"
                                : ""
                        }
                        //from react hook form
                        {...register("firstName", {
                            required: true,
                            minLength: 3,
                        })}
                    />
                    <TextField
                        sx={{ flex: 1 }}
                        label="Last name"
                        variant="filled"
                    />
                </Stack>

                <TextField
                    label="Email"
                    variant="filled"
                    error={Boolean(errors.email)}
                    helperText={
                        Boolean(errors.email) ? "pleace enter valid email" : ""
                    }
                    //  https://courses4arab.com/javascript-level2/javascript-12.html
                    {...register("email", {
                        required: true,
                        pattern: regEmail,
                    })}
                />
                <TextField label="Phone" variant="filled" />
                <TextField label="Adress" variant="filled" />

                <TextField
                    variant="filled"
                    id="outlined-select-currency"
                    select
                    label="Select role"
                    defaultValue="user"
                    //  helperText="Please select your currency"
                >
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Box sx={{ textAlign: "right" }}>
                    <Button type="submit" variant="contained">
                        Creat new user
                    </Button>
                </Box>

                <Snackbar
                     //position
                     anchorOrigin={{ vertical : "top", horizontal: "right" }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                >
                    <Alert
                   
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                        sx={{ width: "100%" }}
                    >
                        This is a success Alert inside a Snackbar!
                    </Alert>
                </Snackbar>
            </Box>
        </MiniDrawerAuthLayout>
    );
}
