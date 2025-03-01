async function copy(id) {
    const script = document.getElementById(id);

    if (!navigator.clipboard) {
        alert("Please copy manually");
        return;
    }

    await navigator.clipboard.writeText(script.textContent);
}
document.documentElement.style.cssText = "filter:hue-rotate(4deg)";

