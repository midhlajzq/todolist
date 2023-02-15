let add =()=>{
    let todo = todo_input.value
    if(todo){
        todo_output.innerHTML += `
        <P class='border rounded mt-1 p-2'> ${todo}</p>
        `
    }
    else{

        alert("enter the task")
    }

}