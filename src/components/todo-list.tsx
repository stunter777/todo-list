import {Checkbox, List, ListItem, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";

export interface Task {
    id: number;
    text: string;
    completed: boolean;
    isEditing: boolean;
}

export enum ModeEnum {
    All = 'all',
    Active = 'active',
    Completed = 'completed',
}

export const TodoList = ({tasks, handleToggle, mode, handleSaveTask, handleEditTask}: {
    tasks: Task[],
    handleToggle: (id: number) => void,
    mode: ModeEnum,
    handleSaveTask: (id: number, newText: string) => void,
    handleEditTask: (id: number) => void
}) => {
    return (<List sx={{height: '300px', overflowY: 'scroll'}}>
        {tasks.filter(task => mode === ModeEnum.All || (mode === ModeEnum.Active && !task.completed) || (mode === ModeEnum.Completed && task.completed)).map(task => (
            <ListItem key={task.id} sx={{padding: '0 16px', display: 'flex', alignItems: 'center'}}>
                <Checkbox
                    checked={task.completed}
                    onChange={() => handleToggle(task.id)}
                />
                {task.isEditing ? (
                    <TextField
                        fullWidth
                        defaultValue={task.text}
                        onBlur={(e) => handleSaveTask(task.id, e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSaveTask(task.id, (e.target as HTMLInputElement).value);
                            }
                        }}
                        autoFocus
                    />
                ) : (
                    <Typography
                        variant="body1"
                        sx={{
                            textDecoration: task.completed ? 'line-through' : 'none',
                            color: task.completed ? 'text.disabled' : 'text.primary',
                            cursor: 'pointer'
                        }}
                        onDoubleClick={() => handleEditTask(task.id)}
                    >
                        {task.text}
                    </Typography>
                )}
            </ListItem>
        ))}
    </List>)

}