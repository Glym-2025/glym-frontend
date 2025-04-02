import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/ko';

export default function CustomDatePicker({ value, onChange }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
            <DatePicker
                value={value}
                onChange={onChange}
                slotProps={{
                    textField: {
                        placeholder: 'YYYY | MM | DD',
                        fullWidth: false,
                        sx: {
                            width: '250px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: 5,
                            '& .MuiInputBase-root': {
                                height: '40px',
                                border: '1px solid #929292',
                                borderRadius: 1.5,
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                border: 'none',
                            },
                            '& input': {
                                padding: '10px',
                                fontSize: '14px',
                            },
                        },
                    },
                }}
            />
        </LocalizationProvider>
    );
}

