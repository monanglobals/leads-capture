import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HttpModule } from '@nestjs/axios';
import { PingModule } from './ping/ping.module';
import { LeadCaptureModule } from './lead-capture/lead-capture.module';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ['.env'] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        autoLoadEntities: true,
        entities: ['dist/**/*.entity{.ts,.js}'],
        host: configService.get('DB_HOST') || process.env.DB_HOST,
        port: configService.get('DB_PORT') || 5432,
        username: configService.get('DB_USERNAME') || process.env.DB_USERNAME,
        password: configService.get('DB_PASSWORD') || process.env.DB_PASSWORD,
        database:
          configService.get('DATABASE_NAME') || process.env.DATABASE_NAME,
        synchronize: true,
      }),
    }),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: configService.get('HTTP_TIMEOUT') || 7000,
        maxRedirects: configService.get('HTTP_MAX_REDIRECTS') || 5,
      }),
    }),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: 6379,
      },
    }),
    PingModule,
    LeadCaptureModule,
  ],
})
export class AppModule {}
