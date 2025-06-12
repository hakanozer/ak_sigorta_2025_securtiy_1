package com.works.configs;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.lang.reflect.Field;
import java.util.*;

@RestControllerAdvice
public class GlobalException {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<Object> methodArgumentNotValidException(MethodArgumentNotValidException ex) {
        return new ResponseEntity<>( parseError(ex.getFieldErrors() ), HttpStatus.BAD_REQUEST);
    }

    private List parseError(List<FieldError> allErrors) {
        List errors = new ArrayList();
        for (FieldError error : allErrors) {
            Map<String, Object> errorMap = new LinkedHashMap<>();
            errorMap.put("field", error.getField());
            errorMap.put("message", error.getDefaultMessage());
            errorMap.put("rejectedValue", error.getRejectedValue());
            errors.add(errorMap);
        }
        return errors;
    }


}
