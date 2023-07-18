import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CustomTextfield({ onChange, value }) {
    return (
        <Box
            sx={{
                maxWidth: '100%',
            }}
        >
            <TextField value={value} onChange={(e) => onChange(e.target.value)} fullWidth id="fullWidth" />
        </Box>
    );
}