function Project(name, todosList){
    this.name = name;
    this.todosList = todosList;
    this.deleteTodo = function(index){

        this.todosList.splice(index,1);
    };
    this.newTodo = function(todo){
        this.todosList.push(todo);
    }
};

export default Project;