// src/blog/blog.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards, Logger } from '@nestjs/common';
import { BlogService } from './blog.service';
import { UpdateBlogPostDto } from './dto/update-blog-post.dto';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('blog')
export class BlogController {
  private readonly logger = new Logger(BlogController.name);

  constructor(private blogService: BlogService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createBlogPost(@Body() data: CreateBlogPostDto) {
    this.logger.debug('Creating a new blog post');
    return this.blogService.createBlogPost(data);
  }

  @Get()
  async getBlogPosts() {
    this.logger.debug('Fetching all blog posts');
    return this.blogService.getBlogPosts();
  }

  @Get(':id')
  async getBlogPostById(@Param('id') id: string) {
    this.logger.debug(`Fetching blog post with ID: ${id}`);
    return this.blogService.getBlogPostById(+id);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async updateBlogPost(@Param('id') id: string, @Body() data: UpdateBlogPostDto) {
    this.logger.debug(`Updating blog post with ID: ${id}`);
    return this.blogService.updateBlogPost(+id, data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async deleteBlogPost(@Param('id') id: string) {
    this.logger.debug(`Deleting blog post with ID: ${id}`);
    return this.blogService.deleteBlogPost(+id);
  }
}