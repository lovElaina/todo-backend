package dev.zyc.todo.controller;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ProjectExceptionAdvice {
    @ExceptionHandler(Exception.class)
    public Result doOtherException(Exception ex){
        System.out.println(ex.getMessage());
        return new Result(Code.SYSTEM_ERR,null,"系统错误，请联系开发者zyc");
    }
}
