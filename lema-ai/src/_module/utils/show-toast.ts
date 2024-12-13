import { toast } from 'sonner';

type TAlert = 'success' | 'info' | 'warning' | 'error';

type TAlertMessage = {
    value: string;
    time: number;
    type: TAlert;
};

let listOfAlertMessages: Array<TAlertMessage> = [];

export const showToast = (message: string, type: TAlert = 'info') => {
    if (type) type = type.toLowerCase() as `${TAlert}`;

    const pushMessageIntoArr = (value: string, type: TAlert) => {
        listOfAlertMessages.push({
            value: value,
            time: Date.now(),
            type,
        });
    };

    const toastListInterval = setInterval(function () {
        const time = Date.now();
        listOfAlertMessages = listOfAlertMessages.filter(function (item) {
            return time < item.time + 5000;
        });
        if (listOfAlertMessages.length === 0) clearInterval(toastListInterval);
    }, 200);

    // check if message exists in array
    if (!listOfAlertMessages.some((msg) => msg.value === message)) {
        pushMessageIntoArr(message, type);
        switch (type) {
            case 'success':
                toast.success(message);
                break;
            case 'info':
                toast.info(message);
                break;
            case 'warning':
                toast.warning(message);
                break;
            case 'error':
                toast.error(message);
                break;

            default:
                toast.info(message);
                break;
        }
    } else {
        // console.log('exists');
    }
};
