import { Component } from '@angular/core';
import { IAnswer, QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  constructor(public questionsService: QuestionsService) {}

  hasCurrentAnswer(team: string): boolean {
    const clueIndex = ('clue' +
      this.questionsService.clueIndex) as keyof IAnswer;
    return !!this.questionsService.answers[
      this.questionsService.questionIndex
    ]?.[team]?.[clueIndex]?.answer;
  }
}
