function Project(name){
    this.name = name;
    this.todosList = [];
    this.deleteTodo = function(index){
        console.log("Deleting todo at index: " + index);
        console.log("Array before deletion:");
        console.log(this.todosList);
        console.log("Array after deletion:");
        this.todosList.splice(index,1);
        console.log(this.todosList);
    };
    this.newTodo = function(todo){
        this.todosList.push(todo);
    };
    this.editTodo = function(todo, index){
        this.todosList.splice(index, 1, todo);
    };
    this.setTodosList = function(todosList){
        this.todosList = [...todosList];
    };
    this.testFunction = function(){
        console.log("Testing the object methods!");
    };
};

export default Project;