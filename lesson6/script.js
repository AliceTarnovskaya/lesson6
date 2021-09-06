// В самом простом виде это будет инпут для ввода задач и список задач с чекбоксами для маркировки задач как сделанных. \
// Дальше можно добавлять: \
// 1. Перечеркивание задачи при маркировке как сделанной
// 2. Удаление задач


const input = document.querySelector('#search'),
    button = document.querySelector('#send'),
    addForm = document.querySelector('#addTask'),
    box = document.querySelector('div');


addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // let div = document.createElement('div');
    let a = input.value;
    box.innerHTML += `<p><input type="checkbox" id="done">${a}</p>`;
    input.value = '';

    document.querySelectorAll('#done').forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.parentElement.style.textDecoration = 'line-through';
        })
    })
});


