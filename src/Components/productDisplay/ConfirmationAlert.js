import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function ConfirmationAlert({Confirm,setConfirm}) {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            {Confirm &&(<Alert variant="filled" severity="success">
                product added to the cart successfully.
            </Alert>)}

        </Stack>
    );
}