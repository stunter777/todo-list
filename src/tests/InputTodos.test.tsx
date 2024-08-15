import {fireEvent, render, screen} from '@testing-library/react';
import {Task} from "../components/todo-list";
import {InputTodos} from "../components/input-todos";

describe('InputTodos', () => {
    it('should add a task when enter is pressed', () => {
        const tasks: Task[] = [];
        const setTasks = jest.fn();
        const setNewTaskText = jest.fn();

        render(<InputTodos tasks={tasks} setTasks={setTasks} newTaskText="New Task" setNewTaskText={setNewTaskText}/>);

        const input = screen.getByPlaceholderText(/what needs to be done/i);

        fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});

        expect(setTasks).toHaveBeenCalled();
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
    it('should add a task on add-button', () => {
        const tasks: Task[] = [];
        const setTasks = jest.fn();
        const setNewTaskText = jest.fn();
        render(<InputTodos tasks={tasks} setTasks={setTasks} newTaskText="123" setNewTaskText={setNewTaskText}/>);
        const addButton = screen.getByTestId('add-button');
        fireEvent.click(addButton);

        expect(setTasks).toHaveBeenCalled();
    });
});
