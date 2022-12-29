package dev.zyc.todo.controller;

import dev.zyc.todo.entity.TodoList;
import dev.zyc.todo.service.TodoService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/todo")
public class TodoController {
    @Resource
    private TodoService todoService;

    @PostMapping
    public Result add(@RequestBody TodoList todoList){
        boolean flag = todoService.add(todoList);
        return new Result(flag ? Code.SAVE_OK : Code.SAVE_ERR,flag);
    }

    @PutMapping("/{id}")
    public Result update(@PathVariable Long id){
        boolean flag = todoService.set(id);
        return new Result(flag ? Code.UPDATE_OK : Code.UPDATE_ERR,flag);
    }

    @DeleteMapping("/{id}")
    public Result deleteById(@PathVariable Long id){
        boolean flag = todoService.delete(id);
        return new Result(flag ? Code.DELETE_OK : Code.DELETE_ERR,flag);
    }

    @GetMapping
    public Result getAll(){
        List<TodoList> todoLists = todoService.getAll();
        Integer code = todoLists != null ? Code.GET_OK : Code.GET_ERR;
        String msg = todoLists != null ? "查询成功" : "查询失败，请重试！";
        return new Result(code,todoLists,msg);
    }


}
