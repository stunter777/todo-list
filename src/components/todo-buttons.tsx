import {Box, Button} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ModeEnum, Task} from "./todo-list.tsx";

export const TodoButtons = ({tasks, setMode, handleClearCompleted}: {
    tasks: Task[],
    setMode: (mode: ModeEnum) => void,
    handleClearCompleted: () => void,
}) => {

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
            <Button onClick={() => setMode(ModeEnum.All)} variant="text">All</Button>
            <Button onClick={() => setMode(ModeEnum.Active)} variant="text">Active</Button>
            <Button onClick={() => setMode(ModeEnum.Completed)} variant="text">Completed</Button>
        </Box>
            <Button onClick={handleClearCompleted} variant="text" color="error">
                Clear completed
            </Button></Box>
    </Box>)
}