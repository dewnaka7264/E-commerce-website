import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function WarningAlert() {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity="warning" onClose={() => {}}>
                Please select size and quantity.
            </Alert>

        </Stack>
    );
}
