import {fireEvent, render, screen} from '@testing-library/react';
import {ModeEnum, Task} from "../components/todo-list";
import {TodoButtons} from "../components/todo-buttons";

describe('TodoButtons', () => {
    const tasks: Task[] = [
        {id: 1, text: 'Task 1', completed: false, isEditing: false},
        {id: 2, text: 'Task 2', completed: true, isEditing: false},
    ];
    const setTasks = jest.fn();
    const setMode = jest.fn();

    it('should clear completed tasks', () => {
        render(<TodoButtons tasks={tasks} setTasks={setTasks} setMode={setMode}/>);

        const clearButton = screen.getByTestId('clear-completed-button');
        fireEvent.click(clearButton);

        expect(setTasks).toHaveBeenCalledWith([{id: 1, text: 'Task 1', completed: false, isEditing: false}]);
    });

    it('should set mode to all', () => {
        render(<TodoButtons tasks={tasks} setTasks={setTasks} setMode={setMode}/>);

        const allButton = screen.getByTestId('all-button');
        fireEvent.click(allButton);

        expect(setMode).toHaveBeenCalledWith(ModeEnum.All);
    });

    it('should set mode to active', () => {
        render(<TodoButtons tasks={tasks} setTasks={setTasks} setMode={setMode}/>);

        const activeButton = screen.getByTestId('active-button');
        fireEvent.click(activeButton);

        expect(setMode).toHaveBeenCalledWith(ModeEnum.Active);
    });

    it('should set mode to completed', () => {
        render(<TodoButtons tasks={tasks} setTasks={setTasks} setMode={setMode}/>);

        const completedButton = screen.getByTestId('completed-button');
        fireEvent.click(completedButton);

        expect(setMode).toHaveBeenCalledWith(ModeEnum.Completed);
    });
});
