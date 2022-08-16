import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Contacts } from './entities/contacts.entity';
import { ContactController } from './controllers/contact.controller';
import { ContactService } from './services/contact.service';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';
import { Users } from './entities/user.entity';


@Module({
  imports: [
    ConfigModule.forRoot( {isGlobal:true}),
    TypeOrmModule.forFeature([Contacts,Users]),

// ======== Connect to DB ==============    
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: process.env.DB_URL,
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        ssl:{rejectUnauthorized: false},
        entities:[Contacts,Users],
        synchronize: true,
        logging: true
      }
    )
  ],
  controllers: [AppController, ContactController, UserController],
  providers: [AppService, ContactService, UserService],
})
export class AppModule {}
