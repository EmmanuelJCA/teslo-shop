import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column('text',{
    unique: true
  })
  title: string;

  @Column('numeric', {
    default: 0
  })
  price: number;

  @Column('text')
  description: string

  @Column('text', {
    unique: true
  })
  slug: number;

  @Column('numeric', {
    default: 0
  })
  stock: number;

  @Column('text', {
    array: true
  })
  sizes: string[];

  @Column('text')
  gender: string;

  // tags
  // images

}