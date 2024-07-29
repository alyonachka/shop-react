
export const useLocalStorage = () => {

    const setToLS = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }

    const getFromLS = (key) => {
        try {
            return JSON.parse(localStorage.getItem(key));
        } catch (e) {
            throw new Error(e)
        }
    }

    const removeFromLS = (key, value) => {
        const data = getFromLS(key);
    
        setToLS(key, [
            ...data.filter((el) => value.id !== el.id),
        ]);
    };

    return {
        setToLS,
        getFromLS,
        removeFromLS
    }
}