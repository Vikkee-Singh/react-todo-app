
export interface initialListInterface{
    taskName: string,
    position: string,
    id: string
}
export function generateString(length:Number): string {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function setDataInLocalStore(list: Array<initialListInterface>) {
    localStorage.setItem("task-list", JSON.stringify( list ));
}
export function getDataFromLocalStore() {
    return localStorage.getItem("task-list") || "";
}
