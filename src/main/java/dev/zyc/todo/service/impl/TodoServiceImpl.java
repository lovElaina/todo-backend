package dev.zyc.todo.service.impl;

import dev.zyc.todo.entity.TodoList;
import dev.zyc.todo.mapper.TodoMapper;
import dev.zyc.todo.service.TodoService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {
    @Resource
    private TodoMapper todoMapper;

    @Override
    public boolean add(TodoList todoList) {
        return todoMapper.insert(todoList) > 0;
    }

    @Override
    public boolean set(Long id) {
        TodoList todoList = todoMapper.selectById(id);
        Integer completed = todoList.getCompleted();
        if(completed > 0){
            todoList.setCompleted(0);
        }else todoList.setCompleted(1);

        return todoMapper.updateById(todoList) > 0;
    }

//    @Override
//    public boolean setAll(List<TodoList> todoLists) {
//        return todoMapper;
//    }


    @Override
    public boolean delete(Long id) {
        return todoMapper.deleteById(id) > 0;
    }

    @Override
    public List<TodoList> getAll() {
        return todoMapper.selectList(null);
    }
}
