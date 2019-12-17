import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ws-animated-item',
  templateUrl: './animated-item.component.html',
  styleUrls: ['./animated-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimatedItemComponent {
}
