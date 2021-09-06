// В самом простом виде это будет инпут для ввода задач и список задач с чекбоксами для маркировки задач как сделанных. \
// Дальше можно добавлять: \
// 1. Перечеркивание задачи при маркировке как сделанной
// 2. Удаление задач


const input = document.querySelector('#search'),
    button = document.querySelector('#send'),
    addForm = document.querySelector('#addTask'),
    box = document.querySelector('.result');


addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let a = input.value;
    box.innerHTML += `<p class="item"><input type="checkbox" id="done">${a}</p>`;
    input.value = '';

    const checkbox = document.querySelector('#done');
    const itemText = document.querySelector('.item');

    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            itemText.style.textDecoration = 'line-through';

        } else {
            itemText.style.textDecoration = 'none';

        }
    })

});