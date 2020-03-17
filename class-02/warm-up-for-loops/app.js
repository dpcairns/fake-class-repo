const families = [
    {
        name: 'smith',
        address: '123 fake st',
        pet: 4,
    },
    {
        name: 'anderson',
        address: '54 cool st',
        pet: 9,
    },
    {
        name: 'petersons',
        address: '90 bad st',
        pet: 3,
    },
];

const familyContainer = document.getElementById('container');

for (let i = 0; i < families.length; i++) {
    const family = families[i];
    const address = family.address;
    const name = family.name;
    const familyLi = document.createElement('li');
    familyLi.textContent = name + ': ' + address;

    familyContainer.appendChild(familyLi);
}