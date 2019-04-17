// ?q=mdn+getelementbyid&oq=mdn+getelementbyid+&aqs=chrome..69i57j0l4.5900j0j7&sourceid=chrome&ie=UTF-8

// '' 如果没有

// @param key 想要获取值的key
function getSearchParams(query) {
    // let params = location.search;
    let params = '?q=mdn+getelementbyid&oq=mdn+getelementbyid+&aqs=chrome..69i57j0l4.5900j0j7&sourceid=chrome&ie=UTF-8'
    if (!params) return '';
    params = params.slice(1).split('&');
    for (let i = 0; i < params.length; i++) {
        let [key, value] = params[i].split('=');
        if (key === query) return value
    }
    return '';
}

console.log(getSearchParams(''))