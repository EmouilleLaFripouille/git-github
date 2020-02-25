let cpt = 0;



function createTodo(todoTxt){

    const todoHTML = 
    `
    <div class="to-do">
        <input type="checkbox" id="checkbox-${cpt}">
        <label for="checkbox-${cpt}">${todoTxt}</label>
        <button onclick="closeTodo(this.previousElementSibling.previousElementSibling, this.parentNode)" class="cross-end">&times;</button>
       
    </div>
    `
    
    document.querySelector('#todolist').innerHTML += todoHTML;
}

function checkValue(val){
    return val.length >2;
}

function closeTodo(checkboxTag, todoTag){
    if (checkboxTag.checked){
        document.querySelector('#todolist').removeChild(todoTag);
    } else {
        const response = confirm('Est tu sûr de vouloir supprimer ?');
        if (!response) return;
        else document.querySelector('#todolist').removeChild(todoTag);
    }
}

document.forms.formAddTodo.addEventListener(
    'submit',
    function(e){
        e.preventDefault();
        if (checkValue(this.todoTxt.value)){
            createTodo(this.todoTxt.value);
            document.forms.formAddTodo.reset();
            cpt++;
            localStorage.setItem('lacle', JSON.stringify(this.todoHTML))
        } else {
            const errorTxt = document.querySelector('.error');
            errorTxt.style.display = 'block';
            setTimeout(() => {
                errorTxt.style.display = 'none'
            }, 2000);
        } 
    } 
);
