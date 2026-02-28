import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MsToStringPipe } from '../../../ui/duration/ms-to-string.pipe';

@Component({
  selector: 'active-timers-dashboard',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MsToStringPipe],
  templateUrl: './active-timers-dashboard.component.html',
  styleUrl: './active-timers-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActiveTimersDashboardComponent {
  taskService = inject(TaskService);

  stopTask(taskId: string): void {
    this.taskService.stopTask(taskId);
  }
}
