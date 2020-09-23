export const $ = (sel, base = document) => base.querySelector(sel);
export const $All = (sel, base = document) => base.querySelectorAll(sel);

export const fetch_get = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
};

export const fetch_post = async (url, data) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const body = await response.json();
    // console.log(body);
    alert(JSON.stringify(body));
};

export const fetch_delete = async (url) => {
    const response = await fetch(url, {
        method: 'DELETE',
    });
    const body = await response.json();
    // console.log(body);
    alert(JSON.stringify(body));
};

export const fetch_put = async function (url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    const body = await response.json();
    console.log('put');
    console.log(body);
};
