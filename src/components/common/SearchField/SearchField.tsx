import { Box, TextField } from "@material-ui/core";
import { KeyboardEvent, FC } from 'react';

interface SearchFieldProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    name?: string;
    onKeyDown: (e: KeyboardEvent<HTMLImageElement>) => void
}

const SearchField: FC<SearchFieldProps> = ({value, onChange, onKeyDown}) => {
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField
                    id="standard-basic" 
                    label="Enter title" 
                    variant="standard" 
                    value={value} 
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
            </Box>
        </div>
    );
};

export default SearchField;