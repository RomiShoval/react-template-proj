export const watchersService ={
    saveToStorage,
    loadFromStorage
}

async function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

async function loadFromStorage(key) {
    const data = localStorage.getItem(key)
    return (data) ? JSON.parse(data) : undefined
}