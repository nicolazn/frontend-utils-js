export async function InjectCode(fileRoute, target) {
    const resp = await fetch(fileRoute);
    const html = await resp.text();
    html.replace('id-to-change', target.id)
    target.insertAdjacentHTML("beforeend", html);
}