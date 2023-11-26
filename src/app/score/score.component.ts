import { Component, OnInit } from '@angular/core';
import { IAnswer, QuestionsService } from '../shared/questions.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  public clues: IAnswer = {
    clue1: { points: 0 },
    clue2: { points: 0 },
    clue3: { points: 0 },
    clue4: { points: 0 },
  };
  getClueKeys(): (keyof IAnswer)[] {
    return Object.keys(this.clues) as (keyof IAnswer)[];
  }
  constructor(public questionsService: QuestionsService) {}

  ngOnInit(): void {}
}
