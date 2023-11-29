function Project(name){
    this.name = name;
    this.todosList = [];
    this.deleteTodo = function(index){

        this.todosList.splice(index,1);
    };
    this.newTodo = function(todo){
        this.todosList.unshift(todo);
    };
    this.editTodo = function(todo, index){
        this.todosList.splice(index, 1, todo);
    }
};

export default Project;