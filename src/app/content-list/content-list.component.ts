import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { NgFor, NgStyle } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [NgFor, NgStyle, ContentCardComponent],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
})
export class ContentListComponent {
  contentArray: Content[];

  constructor() {
    this.contentArray = [
      {
        id: 1,
        title: 'Whispering Emerald',
        description: 'A soft, muted green that evokes the tranquility of a secluded forest at dawn.',
        creator: 'Nature Palette',
        imgURL: 'assets/images/Whispering Emerald.jpg',
        type: 'Color (Pantone)',
        tags: ['Nature', 'Calm', ' Renewal'],
      },
      {
        id: 2,
        title: 'Solar Flare Gold',
        description: 'A radiant, vibrant gold that captures the explosive energy and brilliance of a solar flare.',
        creator: 'Cosmic Inspirations',
        imgURL: 'assets/images/Solar Flare Gold.jpg',
        type: 'Color (Metallic)',
        tags: ['Energy', 'Warmth', ' Inspiration'],
      },
      {
        id: 3,
        title: 'Midnight Pulse',
        description: 'A deep, intense blue that mirrors the mysterious depths of the night sky.',
        creator: ' Celestial Hues',
        imgURL: 'assets/images/Midnight Pulse.png',
        type: ' Color (Pantone)',
        tags: ['Mystery', 'Depth', 'Night', 'Elegance'],
      },
      {
        id: 4,
        title: 'Zenith Violet',
        description: 'A tranquil yet profound shade of violet.',
        creator: 'Twilight Shades',
        imgURL: 'assets/images/Zenith Violet.png',
        type: 'Color (Pantone)',
        tags: ['Dusk', 'Depth', 'Reflective'],
      },
      {
        id: 5,
        title: 'Inferno Scarlet',
        description: 'A deep, fiery red that simmers with intensity, capturing the essence of an unbridled blaze.',
        creator: 'Elemental Spectra',
        imgURL: 'assets/images/Inferno Scarlet.jpg',
        type: 'Color (Pantone)',
        tags: [' Fire', ' Intensity', 'Warmth'],
      },
      {
        id: 6,
        title: 'Frostbite Cyan',
        description: ' A crisp, icy blue that evokes the chilling thrill of a winter breeze over a frozen lake.',
        creator: 'Arctic Hues',
        imgURL: 'assets/images/Frostbite Cyan.jpg',
        type: 'Color (Pantone)',
        tags: ['Cold', 'Winter', ' Serene'],
      },
     
    ];
  }
}