import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

interface SelectProps {
  options: string[],
  helperText: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string
}

const Select: React.FC<SelectProps> = ({options, helperText, onChange, value, name}) => {
    return (
        <div>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={value}
                    onChange={onChange}
                    helperText={helperText}
                    name={name}
                    >
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                    ))}
                </TextField>

            </Box>
        </div>
    );
};

export default Select;