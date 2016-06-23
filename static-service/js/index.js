class App {
    constructor(url) {
        this.url = url;
        this.tasksContainer = $('.all-tasks');
        this.newTask = $('.add');

        this.sitecalls();
        this.getTodos();

    }

    getTodos() {
        $.ajax({
                url: this.url
            })
            .done(response => this.addTasks(response));
    }

    addTasks(tasks) {
        tasks.forEach(task => this.addTask(task.title, task.status));
    }

    addTask(title, done) {
        const taskItem = $(
            `<li>\
              <a href="#" class="task">\
                <span class="checkbox"></span>\
                <span>${title}</span>\
                </a>\
              </li>`);
        this.tasksContainer.append(taskItem);
        if (done) {
            this.toggleTask(taskItem);
        }
    }
    toggleTask(task) {
        task.toggleClass('complete').find('.checkbox').toggleClass('checked');
    }
    addTaskClickHandler() {
        if (this.newTask.val()) {
            this.addTask(this.newTask.val(), false);
            this.newTask.val('');
        }
    }
    sitecalls() {
        this.tasksContainer.on('click', '.task', e => this.toggleTask($(e.currentTarget)))
        $('.add-task').on('click', e => this.addTaskClickHandler());
    }
};

const app = new App('//localhost:7070/v1/todo');
