const formDataToJSON = require('formdatatojson')
const _endpoint = 'https://form.castelnuovo.xyz/api';

const sendPost = (site_key, data) => {
    return new Promise(function (resolve, reject) {
        fetch(`${_endpoint}/${site_key}`, {
            headers: {
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: data
        })
            .then(res => res.json())
            .then(res => {
                if (!res.success) reject(res);

                resolve(res);
            }).catch(error => {
                reject(error);
            });
    });
}

const send = (site_key, data) => {
    const jsonData = JSON.stringify(data);

    return sendPost(site_key, jsonData);
}
exports.send = send;

const sendForm = (site_key, form) => {
    if (typeof form === 'string') form = document.querySelector(form);
    if (!form || form.nodeName !== 'FORM') throw 'Expected the HTML form element or the style selector of form';

    const formData = new FormData(form);
    const jsonData = formDataToJSON(formData);

    return sendPost(site_key, jsonData);
}
exports.sendForm = sendForm;
