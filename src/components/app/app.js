import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from "../item-add-form/item-add-form";

import './app.css';

export default class App extends Component {

    maxId = 1;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ]
    };

    createTodoItem(label){
        return{
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (elemId) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === elemId);
            const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
            return {
                todoData: newArray
            };
        });
    };

    addItem = (itemText) => {
        const newItem = this.createTodoItem(itemText);

        this.setState(({ todoData }) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            };
        });
    };

    toggleProperty(array, id, propName){
        const idx = array.findIndex((el) => el.id === id);
        const oldItem = array[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};
        return [...array.slice(0, idx), newItem, ...array.slice(idx + 1)];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return{
                todoData: this.toggleProperty(todoData, id,  'important')
            };
        });
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return{
                todoData: this.toggleProperty(todoData, id,  'done')
            };
        });
    };

    render()
    {
        const {todoData} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return(
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={todoData}
                    onDeleted={ this.deleteItem }
                    onToggleImportant={ this.onToggleImportant}
                    onToggleDone={ this.onToggleDone}
                />
                <ItemAddForm
                    onItemAdded={ this.addItem }/>
            </div>
        );
    };
};