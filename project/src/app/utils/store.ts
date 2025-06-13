export const storeLike = (id: number) => {
    const stLikes = localStorage.getItem('likes')
    if (stLikes) {
        // daha önceden var
        const arr = JSON.parse(stLikes) as number[]
        const index = arr.indexOf(id)
        if (index === -1) {
            // yoksa ekle
            arr.push(id)
            localStorage.setItem('likes', JSON.stringify(arr))
        } else {
            // varsa sil
            arr.splice(index, 1)
            localStorage.setItem('likes', JSON.stringify(arr))
        }
    }else {
        // ilk defa ekleniyor
        const arr = [id]
        localStorage.setItem('likes', JSON.stringify(arr))
    }
}


export const getOneLike = (id: number) => {
    const stLikes = localStorage.getItem('likes')
    if (stLikes) {
        // daha önceden var
        const arr = JSON.parse(stLikes) as number[]
        const index = arr.indexOf(id)
        if (index === -1) {
            return false
        } else {
            return true
        }
    }else {
        return false
    }
}