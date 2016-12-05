import React from 'react';

export function createItem(page, { name, id }) {
    return (
        <li key={id}><a href={`#/${page}/${id}`}>{name}</a></li>
    );
}
export function createStaticItem(page, name) {
    return (
        <li className="active"><a href={`#/${page}`}>{name}</a></li>
    );
}
export function createListItems(page, items) {
    return items.map(item => createItem(page, item));
}