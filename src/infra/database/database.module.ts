import { Module } from '@nestjs/common';
import { NotificationsRepository } from '../../application/repositories/NotificationsRepository';
import { PrismaNotificationsRepository } from '../../infra/database/prisma/repositories/PrismaNotificationsRepository';

import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
