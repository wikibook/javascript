let colors = [
    { id: 1, color: 'green' },
    { id: 2, color: 'blue' },
    { id: 3, color: 'purple' },
];

let filterArray = colors.filter((elm, idx, array) => elm.id > 1);
console.log(filterArray);
