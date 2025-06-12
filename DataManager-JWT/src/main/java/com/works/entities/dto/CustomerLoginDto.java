package com.works.entities.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Value;

import java.io.Serializable;

/**
 * DTO for {@link com.works.entities.Customer}
 */
@Value
public class CustomerLoginDto implements Serializable {
    @NotNull
    @Size(min = 2, max = 100)
    @NotEmpty
    String username;
    @NotNull
    @Size(min = 5, max = 10)
    @NotEmpty
    String password;
}