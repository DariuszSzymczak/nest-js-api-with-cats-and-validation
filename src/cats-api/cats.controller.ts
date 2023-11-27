import { Body, Controller, Get, Header, HttpCode, Inject, Param, Post } from '@nestjs/common';
import { Cat, CatsService } from './cats.service';
import { CreateCatDto } from './CreateCat.dto';
import {ValidationPipe} from './validation.pipe'
import { Logger } from '@nestjs/common';

@Controller('cats')
export class CatsController {
   private logger = new Logger();
    constructor( private catsService: CatsService) {
       
     }


    @Get()
    findAll(): Cat[] {
        return this.catsService.findAll();
    }

    @Get(':name')
    @Header('Cache-control', 'none')
    getName(@Param('name', ) params) {
        this.logger.log('koty wpisują...')
        return 'kot o imieniu ' + params
    }

    @Get('find/age/:age')
    findByAge(@Param('age',)age) {
        const found = this.catsService.findByAge(age);
        return this.catsService.findByAge(age)
    }

    @Get('find/name/:name')
    findByName(@Param('name',)name) {
        const found = this.catsService.findByName(name);
        return this.catsService.findByName(name)
    }

    @Post()
    async createCat(@Body(new ValidationPipe()) createCatDto: CreateCatDto) {
        console.log(createCatDto)
       return this.catsService.create(createCatDto)
    }


}
