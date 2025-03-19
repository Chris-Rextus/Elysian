// src/blog/dto/update-blog-post.dto.ts
import { IsString, IsOptional } from 'class-validator';

export class UpdateBlogPostDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  author?: string; // Add this line
}