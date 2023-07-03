const taskInput = document.getElementById('task');

function createTask() {
    const taskText = taskInput.value;
    let list = document.querySelector('.list__point');
    let NewPoint = document.createElement('li');
    NewPoint.textContent = taskText;
    list.append(NewPoint);
    taskInput.value = '';
    if (taskText === '') {
        alert('Введите задачу!');
    }

}

const tasklist = document.querySelector('ol');
tasklist.addEventListener('click', function (evt) {
    if (evt.target.tagName === 'LI') {
        evt.target.classList.toggle('point');
    }
});



























