import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActiveTimersDashboardComponent } from './active-timers-dashboard.component';
import { TaskService } from '../task.service';
import { signal } from '@angular/core';
import { Task } from '../task.model';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ActiveTimersDashboardComponent', () => {
  let component: ActiveTimersDashboardComponent;
  let fixture: ComponentFixture<ActiveTimersDashboardComponent>;
  let mockTaskService: jasmine.SpyObj<TaskService>;
  const activeTasksSignal = signal<Task[]>([]);

  beforeEach(async () => {
    mockTaskService = jasmine.createSpyObj('TaskService', ['stopTask'], {
      currentTasks: activeTasksSignal,
    });

    await TestBed.configureTestingModule({
      imports: [ActiveTimersDashboardComponent, NoopAnimationsModule],
      providers: [{ provide: TaskService, useValue: mockTaskService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ActiveTimersDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show dashboard when no tasks are active', () => {
    activeTasksSignal.set([]);
    fixture.detectChanges();
    const container = fixture.nativeElement.querySelector('.dashboard-container');
    expect(container).toBeNull();
  });

  it('should show dashboard when tasks are active', () => {
    activeTasksSignal.set([{ id: 't1', title: 'Task 1', timeSpent: 1000 } as Task]);
    fixture.detectChanges();
    const container = fixture.nativeElement.querySelector('.dashboard-container');
    expect(container).not.toBeNull();
    const title = fixture.nativeElement.querySelector('.task-title');
    expect(title.textContent).toContain('Task 1');
  });

  it('should call stopTask when stop button is clicked', () => {
    activeTasksSignal.set([{ id: 't1', title: 'Task 1', timeSpent: 1000 } as Task]);
    fixture.detectChanges();
    const stopButton = fixture.nativeElement.querySelector('button');
    stopButton.click();
    expect(mockTaskService.stopTask).toHaveBeenCalledWith('t1');
  });
});
