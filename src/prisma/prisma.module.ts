import {Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client';

@Global()
@Module({
  providers: [PrismaService],
  exports:[PrismaService],
})
export class PrismaModule extends PrismaClient {
  constructor(){
    super({
      datasources:{
      db :{
        url : "postgresql://postgres:admin@localhost:3313/mydb?schema=public"
      },
    },

    })
  }
}
