package com.bin2dec.converter;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class ConverterController {

    @GetMapping("/convert")
    public Integer convert(@RequestParam String inputString) {

        int sum = 0;
        int count = 0;


        for(int i= inputString.length()-1; i>=0;i--)
        {
            System.out.println(inputString.charAt(i));
            if (inputString.charAt(i) == '1'){
                sum += Math.pow(2,count);
            }
            count ++;
        }

        return sum;
    }

}

