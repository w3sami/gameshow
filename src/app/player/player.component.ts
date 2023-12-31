import { Component } from '@angular/core';
import { IAnswer, QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  input: string = '';
  teamName: string = '';
  previousAnswer: string = '';

  constructor(public questionsService: QuestionsService) {
    this.teamName = localStorage.getItem('teamName') || '';
    this.previousAnswer = localStorage.getItem('previousAnswer') || '';
  }

  getCurrentAnswer(): string | undefined {
    const clueIndex = ('clue' +
      this.questionsService.clueIndex) as keyof IAnswer;
    return this.questionsService.answers[this.questionsService.questionIndex]?.[
      this.teamName
    ]?.[clueIndex]?.answer;
  }

  getPreviousAnswer(): string {
    return this.previousAnswer != this.getCurrentAnswer()
      ? this.previousAnswer
      : '';
  }

  copyAnswer(answer: string) {
    this.input = answer;
  }
  submit() {
    if (this.input) {
      if (this.questionsService.teamNameMode) {
        if (this.questionsService.addTeam(this.input)) {
          localStorage.setItem('teamName', this.input);
          this.teamName = this.input;
        }
      } else {
        this.questionsService.addAnswer(this.teamName, this.input);
        localStorage.setItem('previousAnswer', this.input);
        this.previousAnswer = this.input;
      }
      this.input = ''; // Reset the input field after submission
    }
  }
}
