const canvas = document.getElementById('pixel-canvas');
const ctx = canvas.getContext('2d');
const toolSelector = document.getElementById('tool');
const colorPicker = document.getElementById('color-picker');
const brushSize = document.getElementById('brush-size');
const importImage = document.getElementById('import-image');

let currentTool = 'draw';
let currentColor = colorPicker.value;
let currentBrushSize = brushSize.value;

toolSelector.addEventListener('change', function () {
  currentTool = toolSelector.value;
});

colorPicker.addEventListener('change', function () {
  currentColor = colorPicker.value;
});

brushSize.addEventListener('change', function () {
  currentBrushSize = brushSize.value;
});

importImage.addEventListener('click', function () {
  // Implement image import functionality here
});

canvas.addEventListener('mousedown', function (e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  ctx.beginPath();
  ctx.arc(x, y, currentBrushSize, 0, Math.PI * 2);
  ctx.fillStyle = currentTool === 'draw' ? currentColor : '#fff';
  ctx.fill();
});

