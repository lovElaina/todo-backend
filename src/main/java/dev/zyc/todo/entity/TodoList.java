package dev.zyc.todo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import lombok.Data;

@Data
public class TodoList {
    @TableId(type = IdType.AUTO)
    private Long id;
    private String item;
    private Integer completed;
    @TableLogic(value = "0",delval = "id")
    private Integer deleted;

}
