import { toast } from "react-hot-toast";


const tSuccess = (text: string) => {
    toast.success(text, {
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
    });
}

const tError = (text: string) => {
    toast.error(text, {
        style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
        },
    });
}

const tPromise = async (myFunction: any, loadingMessage: string, successMessage: string, errorMessage: string) => {
    toast.promise(
        await myFunction.then(() => successMessage = "success"),
        {
            loading: 'Saving...',
            success: <b>{successMessage}</b>,
            error: <b>Could not save.</b>,
        }
    );
}

const Notify = { tSuccess, tError, tPromise };

export default Notify;