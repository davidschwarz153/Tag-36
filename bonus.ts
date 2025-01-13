let count = 0;

function changeBackgroundColor(color: string): void {
  document.body.style.backgroundColor = color;
}

function updateColorFromSlider(): void {
  const red = document.querySelector('#red-slider') as HTMLInputElement;
  const green = document.querySelector('#green-slider') as HTMLInputElement;
  const blue = document.querySelector('#blue-slider') as HTMLInputElement;

  const redValue = Number(red.value);
  const greenValue = Number(green.value);
  const blueValue = Number(blue.value);

  const hexColor = decimalToHex(redValue) + decimalToHex(greenValue) + decimalToHex(blueValue);
  changeBackgroundColor(`#${hexColor}`);
}

function decimalToHex(decimal: number): string {
  return decimal.toString(16).padStart(2, '0');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#pink-button')?.addEventListener('click', () => changeBackgroundColor('pink'));
  document.querySelector('#purple-button')?.addEventListener('click', () => changeBackgroundColor('purple'));
  document.querySelector('#orange-button')?.addEventListener('click', () => changeBackgroundColor('orange'));

  document.querySelector('#red-slider')?.addEventListener('input', updateColorFromSlider);
  document.querySelector('#green-slider')?.addEventListener('input', updateColorFromSlider);
  document.querySelector('#blue-slider')?.addEventListener('input', updateColorFromSlider);
});