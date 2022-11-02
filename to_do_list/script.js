function addTask(event) {
    if (event.keyCode === 13) {
        document.getElementById('container_intro').style.display = 'none';
        document.getElementById('container_tasks').style.display = 'block';
        let task = document.getElementById('task').value;
        let li = document.createElement('li');
        li.textContent = task;
        let list = document.getElementById('list_tasks');
        list.appendChild(li);
        document.getElementById('task').value = '';
        
        li.addEventListener('click', function() {
            if (li.style.textDecoration === 'none') {
                li.style.textDecoration = 'line-through';
            } else {
                li.style.textDecoration = 'none';
            }
        });

        let btnDelete = document.createElement('button');
        btnDelete.textContent = 'Delete';
        li.appendChild(btnDelete);
        

        btnDelete.addEventListener('click', function() {
            btnDelete.parentElement.remove(); 
            if (list.children.length == 0) {
                document.getElementById('container_intro').style.display = 'block';
                document.getElementById('container_tasks').style.display = 'none';
            }
        });

       
    }
}