import { uuidGenerate } from '@/utils/uuid'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { currentDate } from '@/utils/currentDate'

interface TaskState {
    id: string
    content: string
    isCheck: boolean
    createdAt: string
    updatedAt: string
}

type Payload = PayloadAction<string>

interface TodosState {
    todos: Array<TaskState>
}

const initialState = {
    todos: [
        {
            id: uuidGenerate(),
            content: 'Click twice to input...',
            isCheck: false,
            createdAt: currentDate(),
            updatedAt: '',
        },
    ],
} satisfies TodosState as TodosState

const findElemByID = (array: Array<TaskState>, ID: string): TaskState => {
    return array.find(pay => pay.id === ID) as TaskState
}

export const taskSlice = createSlice({
    name: 'taskManager',
    initialState,
    reducers: {
        addTask: ({ todos }) => {
            todos.push({
                id: uuidGenerate(),
                content: 'Click twice to input...',
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
    },
})

export const { addTask, toggleCheck, editTask, removeTask } = taskSlice.actions
export const taskSelector = (state: RootState) => state.taskManager.todos
export default taskSlice.reducer
