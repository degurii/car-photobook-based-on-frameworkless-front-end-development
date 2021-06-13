const getDirectoryNodes = async id => {
    try {
        const url = `https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev/${id ?? ''}`;
        const res = await fetch(url);
        return res.json();
    } catch (e) {
        console.error(e);
    }
}

export default {
    getDirectoryNodes,
}