import { Entity, Column,
     PrimaryGeneratedColumn,
      UpdateDateColumn, 
      CreateDateColumn,
       DeleteDateColumn 
    } from 'typeorm';

@Entity()
export class Contacts{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    @Column()

    email: string;

    @Column()
    phone: number;
    
    @CreateDateColumn()
    createdAt: Date 

    @UpdateDateColumn()
    updatedAt: Date 

    @DeleteDateColumn()
    deletedAt: Date 
}