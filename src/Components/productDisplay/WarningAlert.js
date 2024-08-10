import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function WarningAlert({ open, setOpen }) {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            {open && (
                <Alert severity="warning" onClose={() => setOpen(false)}>
                    Please select size and quantity.
                </Alert>
            )}
        </Stack>
    );
}
