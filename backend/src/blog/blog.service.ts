import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { UpdateBlogPostDto } from './dto/update-blog-post.dto';
@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async createBlogPost(data: CreateBlogPostDto) {
    return this.prisma.blogPost.create({ data });
  }

  async getBlogPosts() {
    return this.prisma.blogPost.findMany();
  }

  async getBlogPostById(id: number) {
    return this.prisma.blogPost.findUnique({ where: { id } });
  }

  async updateBlogPost(id: number, data: UpdateBlogPostDto) {
    return this.prisma.blogPost.update({ where: { id }, data });
  }

  async deleteBlogPost(id: number) {
    return this.prisma.blogPost.delete({ where: { id } });
  }
}