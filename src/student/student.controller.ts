import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { StudentService } from './service/student.Service';
@Controller('student')
export class StudentController {
   constructor(private readonly appService: StudentService) {}
   @Get()
   getStudent() {
       return 'OK';
   }
   @Get(':id')
   getOneStudent(@Param('id') id) {
       return 'OK';
   }
   @Post()
   postStudent(@Body() body) {
       return 'OK';
   }
   @Put(':id')
   putStudent(@Body() body, @Param('id') id) {
       return 'OK';
   }
   @Delete(':id')
   deleteStudent(@Param('id') id) {
       return 'OK';
   }
}
