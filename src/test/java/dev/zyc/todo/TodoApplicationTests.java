package dev.zyc.todo;

import dev.zyc.todo.entity.TodoList;
import dev.zyc.todo.mapper.TodoMapper;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;
import java.util.List;

@SpringBootTest
class TodoApplicationTests {

    @Resource
    private TodoMapper todoMapper;
    @Test
    void contextLoads() {
        List<TodoList> todoLists = todoMapper.selectList(null);
        System.out.println(todoLists);
    }

}
