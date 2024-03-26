interface ITaskControls {
    taskDone: () => void
    taskDelete: () => void
    taskEdit: () => void
}

class TaskControls implements ITaskControls {
    constructor(task: HTMLLIElement) {}

    public taskDone() {}

    public taskDelete() {}

    public taskEdit() {}
}

export { TaskControls }
