// /src/utils/errorToUserFriendlyMessage.jsx

export async function responseToUserFriendlyMessage(response) {
    let msg = "Something went wrong.";
    try {
        const json = await response.json();
        if (json && json.error) msg = json.error;
        if (response.status) {
            msg = msg + ` (Status: ${response.status} ${response.statusText})`;
        }
    } catch(error) {
        console.log(error);
        msg = "Login failed. Try again."
    }
    return msg;
}
