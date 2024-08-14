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

export const TodoList = ({tasks, setTasks, mode}: {
    tasks: Task[],
    setTasks: (tasks: Task[]) => void,
    mode: ModeEnum,
}) => {
    const handleToggle = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, completed: !task.completed} : task
        ));
    };
    const handleSaveTask = (id: number, newText: string) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, text: newText, isEditing: false} : task
        ));
    };
    const handleEditTask = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? {...task, isEditing: true} : task
        ));
    };
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