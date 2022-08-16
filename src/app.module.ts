import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Contacts } from './entities/contacts.entity';
import { ContactController } from './controllers/contact.controller';
import { ContactService } from './services/contact.service';


@Module({
  imports: [
    ConfigModule.forRoot( {isGlobal:true}),
    TypeOrmModule.forFeature([Contacts]),
    
// ======== Connect to DB ==============    
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: process.env.DB_URL,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        ssl:{rejectUnauthorized: false},
        entities:[Contacts],
        synchronize: true,
      }
    )
  ],
  controllers: [AppController, ContactController],
  providers: [AppService, ContactService],
})
export class AppModule {}
