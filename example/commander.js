#!/usr/bin/env node
const program = require("commander");

program.version(require("./package").version);

program.command("cam1 <arg1> [restArgs...]")
.description('第一个测试命令')
.option('-O, --opt1 <opt1>','第一个option配置','opt1111')
.action(function(arg1,restArgs,cmd){
    console.log('第一个参数：',arg1)
    console.log('第一个配置：',cmd.opt1)
    if(restArgs){
        console.log('剩余参数：',restArgs)
    }
})

  program.parse(process.argv)

/* 
usage(in command line): node <path> cam1 111 222 333 444 -O 777 
*/