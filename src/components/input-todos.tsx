import {Box, Button, TextField} from "@mui/material";

export const InputTodos = ({newTaskText, handleAddTask, setNewTaskText}: {
    newTaskText: string,
    handleAddTask: () => void,
    setNewTaskText: (e:string) => void
}) => {
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
            <Button onClick={handleAddTask} variant="contained" sx={{marginLeft: '10px'}}>
                Add
            </Button>
        </Box>
    );
}