import { Injectable } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { Contacts } from '../entities/contacts.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactService {
    constructor(
        @InjectRepository(Contacts)
        private readonly contactRepository:Repository<Contacts>
    ){}

    findAllContacts():Promise<Contacts[]>
    {
        return this.contactRepository.find()
    }

    findOneContact(id: number):Promise<Contacts>
    {
        return this.contactRepository.findOneBy({id})
    }

    addContact(contact:Contacts): Promise<Contacts>
    {
        return this.contactRepository.save(contact)
    }

    updateContact(id:number,contact: Contacts): Promise<any>
    {
        return this.contactRepository.update(id,contact);
    }

   async deleteContact(id:string): Promise<any>
    {
        await  this.contactRepository.delete(id);
    }
}
