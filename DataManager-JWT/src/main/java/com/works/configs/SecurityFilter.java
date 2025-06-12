package com.works.configs;

import com.works.entities.Info;
import com.works.repositories.InfoRepository;
import com.works.services.CustomerService;
import com.works.services.JWTService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

import java.io.IOException;
import java.io.PrintWriter;

@Configuration
@RequiredArgsConstructor
public class SecurityFilter extends OncePerRequestFilter {

    private final HandlerExceptionResolver handlerExceptionResolver;
    private final JWTService jwtService;
    private final CustomerService customerService;
    private final InfoRepository infoRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");
        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        // info
        String sessionId = request.getSession().getId();
        String agent = request.getHeader("User-Agent");
        String ip = request.getRemoteAddr();
        String url = request.getRequestURI();
        String userName = "Global";
        String roles = "Global_Role";
        String time = System.currentTimeMillis() + "";


        try {
            String jwt = authHeader.substring(7);
            String username = jwtService.extractUsername(jwt);
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            if (username != null && authentication == null) {
                UserDetails userDetails = customerService.loadUserByUsername(username);
                if (userDetails != null && userDetails.isEnabled()) {
                    if (jwtService.isTokenValid(jwt, userDetails)) {
                       UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                       authenticationToken.setDetails( new WebAuthenticationDetailsSource().buildDetails(request) );
                       SecurityContextHolder.getContext().setAuthentication( authenticationToken );
                    }
                }
            }

            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            if (auth != null && auth.getName() != null) {
                userName = auth.getName();
                roles = auth.getAuthorities().toString();
            }

            Info info = new Info(sessionId, agent, ip, url, userName, roles, time);
            infoRepository.save(info);

            filterChain.doFilter(request, response);
        }catch (Exception ex) {
            response.setContentType("application/json");
            response.setStatus(500);
            PrintWriter out = response.getWriter();
            out.write("{ \"status\": false, \"messaage\": "+ex.getMessage()+" }");
            out.flush();
            //handlerExceptionResolver.resolveException(request, response, null, ex);
        }

    }

}
