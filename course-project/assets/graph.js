function updateGraph(values) {
    const svg = document.querySelector('svg');
    const path = svg.querySelector('path');
    const width = 400;
    const height = 100;
    const padding = 20;
    const points = values.map((val, i) => {
      const x = (i / (values.length - 1)) * (width - padding * 2) + padding;
      const y = height - ((val - Math.min(...values)) / (Math.max(...values) - Math.min(...values))) * (height - padding * 2) - padding;
      return {x, y};
    });
    let pathData = `M${points[0].x},${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prevPoint = points[i-1];
      const currPoint = points[i];
      const controlX1 = (prevPoint.x + currPoint.x) / 2;
      const controlY1 = prevPoint.y;
      const controlX2 = (prevPoint.x + currPoint.x) / 2;
      const controlY2 = currPoint.y;
      
      pathData += ` C${controlX1},${controlY1} ${controlX2},${controlY2} ${currPoint.x},${currPoint.y}`;
    }
    path.setAttribute('d', pathData);
  }
  updateGraph([28, 26, 27, 23, 30, 25]);

  document.addEventListener('DOMContentLoaded', () => {
    updateGraph([30, 26, 27, 23, 30, 25]);
  });