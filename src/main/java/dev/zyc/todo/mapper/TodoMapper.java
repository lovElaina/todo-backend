package dev.zyc.todo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import dev.zyc.todo.entity.TodoList;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface TodoMapper extends BaseMapper<TodoList> {
}
