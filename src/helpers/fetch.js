export const get = (url) =>
    new Promise((resolve, reject) => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                resolve(json);
            })
            .catch(function (res) {
                console.log(res);
            });
    });
