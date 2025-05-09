import { Module } from '@nestjs/common';
import { DrawingController } from './drawing.controller';
import { DrawingService } from './drawing.service';

/**
 * DrawingModule encapsulates canvas and drawing management features.
 */
@Module({
  controllers: [DrawingController],
  providers: [DrawingService],
})
export class DrawingModule {} 