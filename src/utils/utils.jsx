
const toPage = (e, page) => {
    e.stopPropagation();
    window.location.replace(`/${page}`);
};

const clickSkills = (e, api) => {
    e.stopPropagation();
    api.velocity.set(0, 3, 0);
}

export { toPage, clickSkills };