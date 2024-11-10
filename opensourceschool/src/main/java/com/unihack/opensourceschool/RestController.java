package com.unihack.opensourceschool;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.security.Principal;

@Controller
public class RestController {

    @GetMapping("/")
    public String index(@AuthenticationPrincipal OAuth2User principal, HttpServletResponse httpServletResponse, Model model) throws IOException {
        if (principal == null) {

            return "login.html";
        }

        model.addAttribute("name", principal.getAttribute("name"));
        model.addAttribute("email", principal.getAttribute("email"));
        model.addAttribute("session", "true");
        return "index.html";
    }

}
