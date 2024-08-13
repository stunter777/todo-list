import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Button, Checkbox, List, ListItem, TextField} from "@mui/material";


export default function App() {
    const isEdited = true
    return (
        <Container maxWidth="sm">
            <TextField
                variant="outlined"
                label="type your task"
            />
            <Button
                size="large"
                variant={isEdited ? "outlined" : "contained"}
                color="primary"

            >
                {isEdited ? "Edit Task" : "Add Task"}
            </Button>
            <List>


                        <>
                            <ListItem  >
                                <Checkbox
                                    checked={true}
                                />
                                <Typography
                                    style={{ color: true? "green" : "" }}
                                    key={2}
                                >
                                    {'beba'}
                                </Typography>
                                <Button
                                    variant="contained"
                                >
                                    Edit
                                </Button>
                                <Button
                                    color="secondary"
                                    variant="contained"

                                >
                                    delete
                                </Button>
                            </ListItem>
                        </>

            </List>
        </Container>
    );
}