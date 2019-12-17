export class AnimationBaseComponent {
  items: number[] = [];

  trackByIndex(index) {
    return index;
  }

  setItems(items: number[]) {
    this.items = items;
  }
}
