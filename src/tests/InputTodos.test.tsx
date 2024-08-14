import {fireEvent, render, screen} from '@testing-library/react';
import {Task} from "../components/todo-list";
import {InputTodos} from "../components/input-todos";

describe('InputTodos', () => {
    it('should add a task when enter is pressed', () => {
        const tasks: Task[] = [];
        const setTasks = jest.fn();
        const setNewTaskText = jest.fn();

        render(<InputTodos tasks={tasks} setTasks={setTasks} newTaskText="" setNewTaskText={setNewTaskText}/>);

        const input = screen.getByPlaceholderText(/what needs to be done/i);

        fireEvent.change(input, {target: {value: 'New Task'}});
        fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});

        expect(setTasks).toHaveBeenCalledWith(expect.arrayContaining([
            expect.objectContaining({
                text: 'New Task',
                completed: false,
            })
        ]));
        expect(setNewTaskText).toHaveBeenCalledWith('');
    });

    it('should not add a task when input is empty', () => {
        const tasks: Task[] = [];
        const setTasks = jest.fn();
        const setNewTaskText = jest.fn();

        render(<InputTodos tasks={tasks} setTasks={setTasks} newTaskText="" setNewTaskText={setNewTaskText}/>);

        const input = screen.getByPlaceholderText(/what needs to be done/i);

        fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});

        expect(setTasks).not.toHaveBeenCalled();
    });
});
