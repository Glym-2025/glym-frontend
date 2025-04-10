import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import { S } from "../style";

export default function CustomDatePicker({ value, onChange }) {
    const today = dayjs();
    const fourteenYearsAgo = today.subtract(14, 'year');

    return (
        <S.InputRow.Container>
            <p style={{ width: "100px", textAlign: "left", color: "#222222"}}>생년월일</p>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                <DatePicker
                    value={value}
                    onChange={onChange}
                    maxDate={fourteenYearsAgo}
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
                                    textAlign: 'center',
                                    fontSize: '14px',
                                    fontWeight: 500,        
                                    letterSpacing: '1px',  
                                    width: '100%',          
                                },
                            },
                        },
                    }}
                />
            </LocalizationProvider>
            <span style={{ width: "100px", height: "40px" }}></span>
        </S.InputRow.Container>
    );
}

