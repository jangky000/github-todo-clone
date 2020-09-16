export const $ = (sel, base=document)=>base.querySelector(sel);

export const fetch_get = async url=>{
    const response = await fetch(url);
    const json = await response.json();
    return json;
};

export const fetch_post = async (url)=>{
    const data = {id:'user1', pw:'1234'};
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    const body = await response.json();
    console.log(body);
    alert(JSON.stringify(body));
}