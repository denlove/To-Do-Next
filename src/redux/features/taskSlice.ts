import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TaskState } from '@/types/interfaces'
import { currentDate } from '@/utils/currentDate'
import { uuidGenerate } from '@/utils/uuid'
import { RootState } from '../store'

type Payload = PayloadAction<string>

interface TodosState {
    todos: Array<TaskState>
}

const initialState = {
    todos: [],
} satisfies TodosState as TodosState

const findElemByID = (array: Array<TaskState>, ID: string): TaskState => {
    return array.find(elem => elem.id === ID) as TaskState
}

export const taskSlice = createSlice({
    name: 'taskManager',
    initialState,
    reducers: {
        addTask: ({ todos }) => {
            todos.push({
                id: uuidGenerate(),
                content: '',
                isCheck: false,
                createdAt: currentDate(),
                updatedAt: '',
            })
        },

        toggleCheck: ({ todos }, { payload }: Payload) => {
            const toggledTodo = findElemByID(todos, payload)
            toggledTodo.isCheck = !toggledTodo.isCheck
        },

        editTask: (
            { todos },
            { payload }: PayloadAction<Pick<TaskState, 'id' | 'content'>>,
        ) => {
            const editedTodo = findElemByID(todos, payload.id)
            editedTodo.content = payload.content
            editedTodo.updatedAt = currentDate()
        },

        removeTask: (state, { payload }: Payload) => {
            state.todos = state.todos.filter(todo => todo.id !== payload)
        },

        removeAllEmptyContentTask: state => {
            state.todos = state.todos.filter(todo => todo.content)
        },
    },
})

export const {
    addTask,
    toggleCheck,
    editTask,
    removeTask,
    removeAllEmptyContentTask,
} = taskSlice.actions
export const taskSelector = (state: RootState) =>
    state.taskManager.todos as Array<TaskState>
export default taskSlice.reducer
