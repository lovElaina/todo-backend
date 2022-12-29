package dev.zyc.todo.service;

import dev.zyc.todo.entity.TodoList;

import java.util.List;

public interface TodoService {
    public boolean add(TodoList todoList);
    public boolean set(Long id);
    //public boolean setAll(List<TodoList> todoLists);
    public boolean delete(Long id);
    public List<TodoList> getAll();
}
