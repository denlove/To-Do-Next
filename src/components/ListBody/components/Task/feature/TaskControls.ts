interface ITaskControls {
    taskDone: () => void
    taskDelete: () => void
    taskEdit: () => void
}

class TaskControls implements ITaskControls {
    constructor() {}

    public taskDone() {}

    public taskDelete() {}

    public taskEdit() {}
}

export { TaskControls }
