function Project(name){
    this.name = name;
    this.todosList = [];
    this.deleteTodo = function(index){

        this.todosList.splice(index,1);
    };
    this.newTodo = function(todo){
        this.todosList.unshift(todo);
    }
};

export default Project;