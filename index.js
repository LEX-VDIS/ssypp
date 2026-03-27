const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const id = params.get("id");

