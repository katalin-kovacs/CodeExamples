export class AppComponent {
  onClick() {
    console.log("The button was clicked!");
  }
}

export class AppComponentEvents {
  onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    console.log(inputElement.value);
  }

  preventNavigation(event: Event) {
    event.preventDefault();
  }

  onChildNotification(message: string) {
    console.log(message); // 'Child clicked!'
  }
}
