function display(message) {
    const el = document.createElement('div');
    el.innerHTML = message;
    document.body.appendChild(el);
}

export { display };