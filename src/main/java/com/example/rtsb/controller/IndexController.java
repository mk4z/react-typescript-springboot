package com.example.rtsb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Miura Kazuto
 */
@Controller
public class IndexController {

    @RequestMapping(path = "/**")
    public String index() {
        return "index";
    }

}
