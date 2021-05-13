export const LocalStorageMess = {
    LOCAL_STORAGE_KEY: "Local-Storage-Chat:messages",

    getChat: function () {
        return JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY) || '[]');
    },
    setChat: function <T>(data: T[]) {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
}

export const LocalStorageCurUser = {
    LOCAL_STORAGE_KEY: "Local-Storage-Chat:user",
    getUser: function () {
        return localStorage.getItem(this.LOCAL_STORAGE_KEY) || "";
    },
    setUser: function (userName: string) {
        localStorage.setItem(this.LOCAL_STORAGE_KEY, userName);
    }
}

export const LocalStorageSiteVisited = () => {
    const LOCAL_STORAGE_KEY = "Local-Storage-Chat:visited";
    const visited = localStorage.getItem(LOCAL_STORAGE_KEY) || "";
    if (visited) {
        return true;
    } else {
        localStorage.setItem(LOCAL_STORAGE_KEY, "true");
        return false
    }
}

export const LocalStorageOpt = {
    LOCAL_STORAGE_KEY: "Local-Storage-Chat:option",

    CUR_MESSAGE_TYPE_ID: "CUR_MESSAGE_TYPE_ID",
    DIALOGUE_LIST_OPEN: "DIALOGUE_LIST_OPEN",

    getOption: function (user: string, option: string) {
        const ls = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY) || '{}');
        if (!ls[user]) {
            ls[user] = {};
        }
        return ls[user][option] || "";
    },
    setOption: function (user: string, option: string, value: string | number | boolean) {
        const ls = JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY) || '{}');
        if (!ls[user]) {
            ls[user] = {};
        }
        ls[user][option] = value;
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(ls));
    }
}