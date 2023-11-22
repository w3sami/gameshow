import { Component } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  input: string = '';
  teamName: string = '';

  constructor(public questionsService: QuestionsService) {
    this.teamName = localStorage.getItem('teamName') || '';
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
      }
      this.input = ''; // Reset the input field after submission
    }
  }
}
