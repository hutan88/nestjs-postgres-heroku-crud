import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Contacts } from '../entities/contacts.entity';
import { ContactService } from '../services/contact.service';

@Controller('contact')
export class ContactController {

    constructor(private readonly contactService:ContactService){}


    @Get()
    findAllContancts(): Promise<Contacts[]>
    {
        return this.contactService.findAllContacts()
    }

    @Get(':id')
    findOneContact(@Param() param):Promise<Contacts>
    {
        return this.contactService.findOneContact(param.id);
    }

    @Post()
    addContact(@Body() contact):Promise<Contacts>
    {
        return this.contactService.addContact(contact);
    }

    @Put(':id')
    updateContact(@Param() param,@Body() contact): Promise<Contacts>
    {
        return this.contactService.updateContact(param.id,contact);
    }

    @Delete(':id')
    deleteContact(@Param() param): Promise<Contacts>
    {
        return this.contactService.deleteContact(param.id);
    }
}
