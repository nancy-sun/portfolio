
const toPage = (e, page) => {
    e.stopPropagation();
    window.location.replace(`/${page}`);
}

export { toPage };