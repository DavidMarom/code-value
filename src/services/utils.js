export function saveJSONtoLocalStorage(key, json) {
    localStorage.setItem(key, JSON.stringify(json));
}

export function getJSONfromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export const isLocalStorageEmpty = () => {
    return (getJSONfromLocalStorage('cv-store-items') === (null)) || (getJSONfromLocalStorage('cv-store-items').length === 0);
}