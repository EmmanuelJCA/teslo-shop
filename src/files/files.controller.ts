import { Response } from 'express';
import { Controller, Get, HttpStatus, Param, ParseFilePipeBuilder, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FilesService } from './files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileNamer } from './helpers/fileNamer.helper';
import { ConfigService } from '@nestjs/config';

@Controller('files')
export class FilesController {

  constructor(
    private readonly filesService: FilesService,
    private readonly configService: ConfigService,
  ) {}

  @Get('product/:imageName')
  findProductImage(
    @Res() res: Response,
    @Param('imageName') imageName: string
  ) {
    const path = this.filesService.getStaticProductImage(imageName);
    res.sendFile(path);
  }

  @Post('product')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: './static/products',
      filename: fileNamer
    })
  }))
  uploadProductImage(
   @UploadedFile(
    new ParseFilePipeBuilder()
      .addFileTypeValidator({
        fileType: /(jpg|jpeg|png)$/,
      })
      .build({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY
      })
   ) file: Express.Multer.File,
  ) {
    const secureUrl = `${this.configService.get('HOST_API')}/files/product/${file.filename}`;
    return secureUrl;
  }

}
