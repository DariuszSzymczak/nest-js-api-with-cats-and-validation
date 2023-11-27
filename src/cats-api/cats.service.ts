import { BadRequestException, Injectable } from '@nestjs/common';
import CatsDB from './cats-database';
import { CreateCatDto } from './CreateCat.dto';

export interface Cat {
    name: string;
    age: number;
}


@Injectable()
export class CatsService {
    private readonly cats: Cat[] = [...CatsDB];

    async create(cat: CreateCatDto) {
      
      
        return cat;
    }

    public findAll(): Cat[] {
        return this.cats;
    }

    public findByName(name: string): Cat | undefined {
        for (const cat of this.cats) {
            if (cat.name === name) {
                return cat;
            }
        }
        return undefined;
    }


    public findByAge(age: string): Cat[] {
        const found = this.cats.filter((cat) => cat.age === parseInt(age));
        return found;
    }
}