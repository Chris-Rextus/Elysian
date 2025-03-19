// src/blog/dto/create-blog-post.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBlogPostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsNotEmpty()
  author: string; // Add this line
}