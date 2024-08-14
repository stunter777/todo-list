import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Box, Divider} from "@mui/material";
import {useState} from 'react';
import {InputTodos} from "./components/input-todos.tsx";
import {ModeEnum, Task, TodoList} from "./components/todo-list.tsx";
import {TodoButtons} from "./components/todo-buttons.tsx";


export default function App() {
    const [tasks, setTasks] = useState<Task[]>([
        {id: 1, text: 'Тестовое задание', completed: false, isEditing: false},
        {id: 2, text: 'Прекрасный код', completed: true, isEditing: false},
        {id: 3, text: 'Покрытие тестами', completed: false, isEditing: false},
    ]);
    const [newTaskText, setNewTaskText] = useState('');
    const [mode, setMode] = useState<ModeEnum>(ModeEnum.All);

    const handleToggle = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    };

    const handleAddTask = () => {
        if (newTaskText.trim()) {
            setTasks([
                ...tasks,
                {id: Date.now(), text: newTaskText.trim(), completed: false, isEditing: false}
            ]);
            setNewTaskText('');
        }
    };

    const handleEditTask = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, isEditing: true} : task
        ));
    };

    const handleSaveTask = (id: number, newText: string) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, text: newText, isEditing: false} : task
        ));
    };
    const handleClearCompleted = () => {
        setTasks(tasks.filter(task => !task.completed));
    };
    return (
        <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px'}}
                   maxWidth="sm">
            <Box sx={{width: '100%'}}>
                <Typography variant="h1" align="center" color="text.secondary"
                            sx={{fontSize: '100px', fontWeight: '200'}}>
                    todos
                </Typography>
                <InputTodos newTaskText={newTaskText} handleAddTask={handleAddTask} setNewTaskText={setNewTaskText}/>
                <TodoList handleEditTask={handleEditTask} handleSaveTask={handleSaveTask} handleToggle={handleToggle}
                          mode={mode} tasks={tasks}/>
                <Divider/>
                <TodoButtons handleClearCompleted={handleClearCompleted} setMode={setMode} tasks={tasks}/>
            </Box>
        </Container>
    );
}
