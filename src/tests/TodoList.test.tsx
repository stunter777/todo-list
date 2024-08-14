import {fireEvent, render, screen} from '@testing-library/react';
import {ModeEnum, Task, TodoList} from "../components/todo-list";

describe('TodoList', () => {
    const tasks: Task[] = [
        {id: 1, text: 'Task 1', completed: false, isEditing: false},
        {id: 2, text: 'Task 2', completed: true, isEditing: false},
    ];
    const setTasks = jest.fn();

    it('should toggle task completion', () => {
        render(<TodoList tasks={tasks} setTasks={setTasks} mode={ModeEnum.All}/>);

        const checkbox = screen.getAllByRole('checkbox')[0];
        fireEvent.click(checkbox);

        expect(setTasks).toHaveBeenCalledWith([
            {id: 1, text: 'Task 1', completed: true, isEditing: false},
            {id: 2, text: 'Task 2', completed: true, isEditing: false},
        ]);
    });

    it('should start editing when task is double clicked', () => {
        render(<TodoList tasks={tasks} setTasks={setTasks} mode={ModeEnum.All}/>);

        const taskText = screen.getByText('Task 1');
        fireEvent.doubleClick(taskText);

        expect(setTasks).toHaveBeenCalledWith([
            {id: 1, text: 'Task 1', completed: false, isEditing: true},
            {id: 2, text: 'Task 2', completed: true, isEditing: false},
        ]);
    });

    it('should save task when enter is pressed', () => {
        const editingTasks: Task[] = [
            {id: 1, text: 'Task 1', completed: false, isEditing: true},
            {id: 2, text: 'Task 2', completed: true, isEditing: false},
        ];
        render(<TodoList tasks={editingTasks} setTasks={setTasks} mode={ModeEnum.All}/>);

        const input = screen.getByDisplayValue('Task 1');
        fireEvent.change(input, {target: {value: 'Updated Task 1'}});
        fireEvent.keyDown(input, {key: 'Enter', code: 'Enter'});

        expect(setTasks).toHaveBeenCalledWith([
            {id: 1, text: 'Updated Task 1', completed: false, isEditing: false},
            {id: 2, text: 'Task 2', completed: true, isEditing: false},
        ]);
    });
});
