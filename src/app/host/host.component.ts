import { Component } from '@angular/core';
import { IAnswer, QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.scss'],
})
export class HostComponent {
  constructor(public questionsService: QuestionsService) {}

  nextQuestion() {
    const newIndex = this.questionsService.questionIndex + 1;
    if (newIndex < this.questionsService.questions.length) {
      this.questionsService.updateQuestionIndex(newIndex);
      this.questionsService.updateClueIndex(0);
    }
  }

  previousQuestion() {
    const newIndex = this.questionsService.questionIndex - 1;
    if (newIndex >= 0) {
      this.questionsService.updateQuestionIndex(newIndex);
      this.questionsService.updateClueIndex(0);
    }
  }

  nextClue() {
    const newIndex = this.questionsService.clueIndex + 1;
    if (newIndex < this.questionsService.currentQuestion!.clues?.length + 1) {
      this.questionsService.updateClueIndex(newIndex);
    }
  }

  previousClue() {
    const newIndex = this.questionsService.clueIndex - 1;
    if (newIndex >= 0) {
      this.questionsService.updateClueIndex(newIndex);
    }
  }
}
