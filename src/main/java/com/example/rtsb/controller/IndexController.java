package com.example.rtsb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author Miura Kazuto
 */
@Controller
public class IndexController {

    @RequestMapping(
            path = {
                    "/",
                    "/hello",
                    //add other paths
            }
    )
    public String index() {
        return "index";
    }

}
