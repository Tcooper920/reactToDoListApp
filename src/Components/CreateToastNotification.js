export default function CreateToastNotification({toastText, toastErrorStyling}) {
    return(
        <div className={"toast " + toastErrorStyling}>
            <p>{toastText}</p>
        </div>
    );
}