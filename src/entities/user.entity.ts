import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Users{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
}