import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector , useDispatch } from 'react-redux';
import { infoToastMessSelector, setInfoToastMess } from '../../redux';


const ToastMessage = ()=>{
    const dispatch = useDispatch();
    const infoToastMess = useSelector(infoToastMessSelector);
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        const customToastMess = {...infoToastMess};
        customToastMess.openToastMess = false;
        dispatch(setInfoToastMess(customToastMess));
      };
    
    return (
        <Snackbar open={infoToastMess.openToastMess} autoHideDuration={2000} onClose={handleClose}>
            <Alert onClose={handleClose} severiseverrty={infoToastMess.toastMessage} sx={{ width: '100%' }}>
                {infoToastMess.message}
            </Alert>
        </Snackbar>
    )

}
export default ToastMessage;
