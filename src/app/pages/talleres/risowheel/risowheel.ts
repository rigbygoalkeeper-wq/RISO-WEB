import { Component } from '@angular/core';

@Component({
  selector: 'app-risowheel',
  templateUrl: './risowheel.html',
  styleUrls: ['./risowheel.css']
})
export class RisoWheelComponent {
  // Risography-inspired slices
  slices = [
    { label: 'Fluorescent Pink', color: '#ff48b0' },
    { label: 'Sunflower Yellow', color: '#ffe800' },
    { label: 'Aqua Blue', color: '#00a1e4' },
    { label: 'Bright Red', color: '#ff0000' },
    { label: 'Black', color: '#000000' },
    { label: 'Green', color: '#00ff00' }
  ];

  rotation = 0;
  sliceAngle = 360 / this.slices.length;

  // --- Dragging state ---
  isDragging = false;
  lastX = 0;

  // Button spin (still works)
  spin() {
    const randomSpin = 360 * 5 + Math.floor(Math.random() * 360);
    this.rotation += randomSpin;

    const selectedIndex = Math.floor(((this.rotation % 360) / this.sliceAngle));
    setTimeout(() => {
      alert(`🎨 You got: ${this.slices[selectedIndex].label}`);
    }, 4000);
  }

  // --- Mouse drag handlers ---
  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.lastX = event.clientX;
  }

  drag(event: MouseEvent) {
    if (!this.isDragging) return;
    const deltaX = event.clientX - this.lastX;
    this.rotation += deltaX * 0.5; // sensitivity factor
    this.lastX = event.clientX;
  }

  endDrag() {
    this.isDragging = false;
  }
}