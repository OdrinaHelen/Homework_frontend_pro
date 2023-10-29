const root = document.querySelector('#root');

const firstSection = document.createElement('section');
firstSection.classList.add('first_section');
root.appendChild(firstSection);

const header1 = document.createElement('h1');
const paragraph1 = document.createElement('p');
const div1 = document.createElement('div');
firstSection.append(header1, paragraph1, div1);

header1.innerText = 'РЕАЛИЗУЕМ КРУПНЕЙШИЕ ПРОЕКТЫ В МИРЕ';
paragraph1.innerText = 'стадионы, газопроводы, мосты, дамбы';

div1.classList.add('parent_26');

for (let i = 0; i <= 3; i++) {
    const div_child = document.createElement('div');
    const h3_child = document.createElement('h3');
    const h4_child = document.createElement('h4');
    const h5_child = document.createElement('h5');

    div1.append(div_child);
    div_child.append(h3_child, h4_child, h5_child)
    h3_child.innerText = '26';
    h4_child.innerText = 'лет';
    h5_child.innerText = 'на рынке';
}