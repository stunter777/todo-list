import {Box, Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ModeEnum, Task} from "./todo-list";

export const TodoButtons = ({tasks, setMode, setTasks}: {
    tasks: Task[],
    setMode: (mode: ModeEnum) => void,
    setTasks: (tasks: Task[]) => void
}) => {
    const handleClearCompleted = () => {
        setTasks(tasks.filter(task => !task.completed));
    };
    return (<Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 16px',
        flexDirection: {xs: 'column', md: 'row'}
    }}>
        <Typography variant="body2" color="text.secondary">
            {tasks.filter(task => !task.completed).length} items left
        </Typography>
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: {xs: 'column', md: 'row'}
        }}><Box>
            <Button data-testid="all-button" onClick={() => setMode(ModeEnum.All)} variant="text">All</Button>
            <Button data-testid="active-button" onClick={() => setMode(ModeEnum.Active)} variant="text">Active</Button>
            <Button data-testid="completed-button" onClick={() => setMode(ModeEnum.Completed)}
                    variant="text">Completed</Button>
        </Box>
            <Button data-testid="clear-completed-button" onClick={handleClearCompleted} variant="text" color="error">
                Clear completed
            </Button></Box>
    </Box>)
}