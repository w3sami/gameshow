import { Component } from '@angular/core';
import { IQuestion, QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  constructor(private questionsService: QuestionsService) {}

  get teams(): string[] {
    return this.questionsService.teams;
  }

  get questionIndex(): number {
    return this.questionsService.questionIndex;
  }

  get clueIndex(): number {
    return this.questionsService.clueIndex;
  }

  get currentQuestion(): IQuestion | undefined {
    return this.questionsService.currentQuestion;
  }
}
