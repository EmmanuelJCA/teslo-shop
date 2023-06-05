import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
import { ProductImage } from "./product-image.entity";
import { User } from "../../auth/entities/user.entity";

@Entity({ name: 'products' })
export class Product {

  @ApiProperty({
    example: '0f51ab43-abd3-45b3-862e-513f2fd98db4',
    description: 'Product ID',
    uniqueItems: true
  })
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @ApiProperty({
    example: 'T-Shirt Teslo',
    description: 'Product title',
    uniqueItems: true
  })
  @Column('text',{
    unique: true
  })
  title: string;

  @ApiProperty({
    example: 0,
    description: 'Product price'
  })
  @Column('float', {
    default: 0
  })
  price: number;

  @ApiProperty({
    example: 'Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage',
    description: 'Product description',
    default: null
  })
  @Column('text', {
    nullable: true
  })
  description: string

  @ApiProperty({
    example: 't_shirt_teslo',
    description: 'Product SLUG - for SEO',
    uniqueItems: true
  })
  @Column('text', {
    unique: true
  })
  slug: string;

  @ApiProperty({
    example: 10,
    description: 'Product stock',
    default: 0
  })
  @Column('int', {
    default: 0
  })
  stock: number;

  @ApiProperty({
    example: ['M','L','XL'],
    description: 'Product sizes'
  })
  @Column('text', {
    array: true
  })
  sizes: string[];

  @ApiProperty({
    example: 'women',
    description: 'Product gender'
  })
  @Column('text')
  gender: string;

  @ApiProperty({
    example: ["hoodie"],
    description: 'Product tags'
  })
  @Column('text', {
    array: true,
    default: []
  })
  tags: string[];

  @ApiProperty({
    example: [
      "http://localhost:3000/api/files/product/7654420-00-A_0_2000.jpg",
      "http://localhost:3000/api/files/product/7654420-00-A_1_2000.jpg"
    ],
    description: 'Product Images'
  })
  @OneToMany(
    () => ProductImage,
    (productImage) => productImage.product,
    {cascade: true, eager: true}
  )
  images?: ProductImage[];

  @ManyToOne(
    () => User,
    (user) => user.product,
    {eager: true}
  )
  user: User;

  @BeforeInsert()
  checkSlugInsert() {
    if(!this.slug){
      this.slug = this.title;
    }
    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }

  @BeforeUpdate()
  checkSlugUpdate() {
    this.slug = this.slug
      .toLowerCase()
      .replaceAll(' ', '_')
      .replaceAll("'", '');
  }

}
