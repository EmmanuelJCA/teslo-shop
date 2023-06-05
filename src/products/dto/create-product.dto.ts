import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsIn, IsInt, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateProductDto {
  
  @ApiProperty({
    example: 'T-Shirt Teslo',
    description: 'Product title (unique)',
    nullable: false,
    minLength: 1
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty({
    example: 0,
    description: 'Product price',
    minimum: 0,
    nullable: true
  })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;
  
  @ApiProperty({
    example: 'Unisex style featuring soft fleece and an adjustable, jersey-lined hood for comfortable coverage',
    description: 'Product description',
    default: null,
    nullable: true
  })
  @IsString()
  @IsOptional()
  desciption?: string;

  @ApiProperty({
    example: 't_shirt_teslo',
    description: 'Product SLUG - for SEO',
    uniqueItems: true,
    nullable: true
  })
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty({
    example: 10,
    description: 'Product stock',
    default: 0,
    minimum: 0
  })
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;

  @ApiProperty({
    example: ['M','L','XL'],
    description: 'Product sizes',
    nullable: false
  })
  @IsString({each: true})
  @IsArray()
  sizes: string[];

  @ApiProperty({
    example: 'women',
    description: 'Product gender',
    enum: ['men','women','kid','unisex'],
    nullable: false
  })
  @IsIn(['men','women','kid','unisex'])
  gender: string;

  @ApiProperty({
    example: ["hoodie"],
    description: 'Product tags',
    nullable: true
  })
  @IsString({each: true})
  @IsArray()
  @IsOptional()
  tags: string[];

  @ApiProperty({
    example: [
      "http://localhost:3000/api/files/product/7654420-00-A_0_2000.jpg",
      "http://localhost:3000/api/files/product/7654420-00-A_1_2000.jpg"
    ],
    description: 'Product Images',
    nullable: true
  })
  @IsString({each: true})
  @IsArray()
  @IsOptional()
  images?: string[];

}
