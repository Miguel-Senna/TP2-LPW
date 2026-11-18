const getId = (id) => document.querySelector(id);

async function api(method, url, body) {
    const options = {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
    };
    if (body !== undefined) {
        options.body = JSON.stringify(body);
    }
    
    const response = await fetch(url, options);
    const data = await response.json().catch(() => null);
    
    if (!response.ok) {
        throw new Error((data && data.error) || `Request failed (${response.status})`);
    }
    return data;
}

export async function pushNewLevel(level, weapon) {
    getId("#current-level").innerHTML = `level: ${level}`
}