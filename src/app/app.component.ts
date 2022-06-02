import { ChangeDetectionStrategy, Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public title = 'live';
  public actionEvents = {
    continue: new EventEmitter<void>()
  }

  public onClickContinueAction() {
    this.actionEvents.continue.next();
  }
}
