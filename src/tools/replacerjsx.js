import React from 'react';

export default function replacerJSX(text = '', element, replacedContent, options = {}) {
    if (!element) return text;
    const splitted = text.split(/{replace}/g);
    return splitted.flatMap((item, index) => {
        const isLast = index == splitted.length - 1;
        return [
            item,
            isLast ? null : React.createElement(element, { key: index, ...options }, replacedContent)
        ].filter(Boolean);
    });
}