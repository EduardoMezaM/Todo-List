export function createTodo(title, description, dueDate, priority = 'normal', completed = false){
    return{
        title,
        description,
        dueDate,
        priority,
        completed
    }
}