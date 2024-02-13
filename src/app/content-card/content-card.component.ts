import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList:ContentList;
  constructor(){
    this.contentList = new ContentList();

    this.contentList.addContent({
      id: 1,
      title: ' Whispering Emerald ',
      description: 'A soft, muted green that evokes the tranquility of a secluded forest at dawn.',
      creator: 'Nature Palette',
      imgURL: 'assets/images/Whispering Emerald.webp',
      type: ' Color (Pantone)',
      tags: ['Nature', 'Calm', 'Renewal'],
    }),

    this.contentList.addContent({
      id: 2,
      title: 'Solar Flare Gold',
      description: 'A radiant, vibrant gold that captures the explosive energy and brilliance of a solar flare.',
      creator: 'Cosmic Inspirations',
      imgURL: 'assets/images/Solar Flare Gold.jpg',
      type: 'Color (Metallic)',
      tags: ['Energy', 'Brilliance', ' Power'],
    }),

    this.contentList.addContent({
      id: 3,
      title: 'Midnight Pulse',
      description: 'A deep, intense blue that mirrors the mysterious depths of the night sky.',
      creator: 'Celestial Hues',
      imgURL: 'assets/images/Midnight Pulse.png ',
      type: ' Color (Pantone)',
      tags: ['Mystery', 'Elegance', ' Depth'],
    },);
  }
}