import { Component } from '@angular/core';
import { IAnswer, QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  constructor(public questionsService: QuestionsService) {
    this.fireworks();
  }

  hasCurrentAnswer(team: string): boolean {
    const clueIndex = ('clue' +
      this.questionsService.clueIndex) as keyof IAnswer;
    return !!this.questionsService.answers[
      this.questionsService.questionIndex
    ]?.[team]?.[clueIndex]?.answer;
  }

  fireworks() {
    const defaults = {
      startVelocity: 15,
      spread: 360,
      ticks: 60,
      zIndex: 0,
      shapes: ['star'],
      colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'],
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const particleCount = 50;

    setInterval(() => {
      if (this.questionsService.fireworks) {
        // @ts-ignore
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0, 1), y: Math.random() - 0.2 },
          })
        );
      }
    }, 100 + Math.random() * 500);
  }
}
