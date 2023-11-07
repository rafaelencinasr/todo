function Todo(title, description, dueDate, priority, checkbox){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.checkbox = checkbox;

    this.toggleCheckbox = function(){
        this.checkbox = !checkbox;
    };

    this.setPriority = function(newPriority){
        this.priority = newPriority;
    };
    //const setCheckbox = () => checkbox = true;
    //const unsetCheckbox = () => checkbox = false;
    
};

export default Todo;