import {Box, Button, TextField} from "@mui/material";
import {Task} from "./todo-list";

export const InputTodos = ({newTaskText, setTasks, setNewTaskText, tasks}: {
    newTaskText: string,
    setTasks: (tasks: Task[]) => void
    setNewTaskText: (e: string) => void,
    tasks: Task[],
}) => {

    const handleAddTask = () => {
        if (newTaskText.trim()) {
            setTasks([
                ...tasks,
                {id: Date.now(), text: newTaskText.trim(), completed: false, isEditing: false}
            ]);
            setNewTaskText('');
        }
    };
    return (
        <Box sx={{display: 'flex', alignItems: 'center', marginBottom: '20px'}}>
            <TextField
                placeholder="What needs to be done?"
                variant="outlined"
                fullWidth
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAddTask();
                    }
                }}
            />
            <Button data-testid={'add-button'} onClick={handleAddTask} variant="contained" sx={{marginLeft: '10px'}}>
                Add
            </Button>
        </Box>
    );
}