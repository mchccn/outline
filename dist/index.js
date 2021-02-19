"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseOutline(outline) {
    let html = "";
    const tags = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
    const raw = outline.split("\n");
    raw.forEach((line, i) => {
        const tag = line.trim().split(/\s+/)[0];
        const selectors = tag.split(/(?<=\w)(?=[.#])/);
        const name = selectors.shift();
        const id = selectors.filter((s) => s.startsWith("#"));
        const classes = selectors.filter((s) => !s.startsWith("#"));
        if (id.length >= 2)
            return console.log(`Elements cannot have multiple IDs.`);
        if (name && tags.includes(name))
            html += `<${name}${classes.length ? ` class="${classes.map((c) => c.slice(1)).join(" ")}"` : ""}${id.length ? ` id="${id[0].slice(1)}"` : ""}>${line
                .slice(line.indexOf(tag) + tag.length)
                .trim()}</${name}>`;
        html += "\n";
    });
    return html;
}
exports.default = parseOutline;
