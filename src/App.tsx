import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Box, Divider} from "@mui/material";
import {useState} from 'react';
import {InputTodos} from "./components/input-todos";
import {ModeEnum, Task, TodoList} from "./components/todo-list";
import {TodoButtons} from "./components/todo-buttons";


export default function App() {
    const [tasks, setTasks] = useState<Task[]>([
        {id: 1, text: 'Тестовое задание', completed: false, isEditing: false},
        {id: 2, text: 'Прекрасный код', completed: true, isEditing: false},
        {id: 3, text: 'Покрытие тестами', completed: false, isEditing: false},
    ]);
    const [newTaskText, setNewTaskText] = useState('');
    const [mode, setMode] = useState<ModeEnum>(ModeEnum.All);
    return (
        <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px'}}
                   maxWidth="sm">
            <Box width={'100%'}>
                <Typography variant="h1" align="center" color="text.secondary"
                            fontSize={'100px'} fontWeight={'200'}
                >
                    todos
                </Typography>
                <InputTodos newTaskText={newTaskText} tasks={tasks} setTasks={setTasks}
                            setNewTaskText={setNewTaskText}/>
                <TodoList tasks={tasks}
                          mode={mode} setTasks={setTasks}/>
                <Divider/>
                <TodoButtons setTasks={setTasks} setMode={setMode} tasks={tasks}/>
            </Box>
        </Container>
    );
}
