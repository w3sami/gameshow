import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface IClue {
  text?: string;
  img?: string;
}

export interface IQuestion {
  topic: string;
  clues: IClue[];
}

export interface IAnswerObject {
  answer?: string;
  correct?: boolean;
  points: number;
}
export interface IAnswer {
  clue1?: IAnswerObject;
  clue2?: IAnswerObject;
  clue3?: IAnswerObject;
  clue4?: IAnswerObject;
}

interface ITeamAnswers {
  [teamName: string]: IAnswer;
}

interface IAnswers {
  [questionIndex: number]: ITeamAnswers;
}

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  public questionIndex = 0;
  public clueIndex = 0;
  public teams: string[] = [];
  public teamNameMode = false;
  public scoreMode = false;
  public answers: IAnswers = {};
  public password = '';
  public passwordLoaded = false;
  public maxPoints: { [teamName: string]: number } = {};

  public questions: IQuestion[] = [
    {
      topic: 'a celebrity',
      clues: [
        {
          text: 'The first step towards video calls',
        },
        { text: 'Not Bell. Before Bell' },
        { text: 'Think railroads' },
        { text: 'S.O.S.' },
      ],
    },
    {
      topic: 'a popular beverage',
      clues: [
        { text: 'associated with health benefits' },
        { text: 'called many times by its color' },
        { text: 'commonly served hot or with bubbles' },
        { text: 'originated in China' },
      ],
    },
    {
      topic: 'a celebrity',
      clues: [
        {
          text:
            'Inducted into the Rock and Roll Hall of Fame, but did not attend the ceremony',
        },
        { text: 'briefly a member of AC/DC' },
        { text: 'Known for a wide vocal range and energetic performances' },
        { text: 'Iconic long ginger hair and head band' },
      ],
    },
    {
      topic: 'a celebcity',
      clues: [
        {
          text: 'A though MMA fighter, yet a really nice guy',
        },
        { text: 'Head honcho, in more ways than one' },
        { text: 'Drives a Tesla' },
        { text: 'Vienon Hellien' },
      ],
    },
  ];

  constructor(private firestore: AngularFirestore) {
    this.initializeFirestoreData();
    this.fetchData();
  }

  private initializeFirestoreData() {
    const dataRef = this.firestore.collection('c4').doc('data');
    dataRef
      .get()
      .toPromise()
      .then((docSnapshot: any) => {
        if (!docSnapshot.exists) {
          dataRef.set({
            questionIndex: 0,
            clueIndex: 0,
            teams: [],
            answers: {},
            teamNameMode: false,
            scoreMode: false,
            // Add any other initial fields here
          });
        }
      });
  }

  private fetchData() {
    this.firestore
      .collection('c4')
      .doc('data')
      .valueChanges()
      .subscribe((data: any) => {
        if (data) {
          this.questionIndex = data.questionIndex;
          this.clueIndex = data.clueIndex;
          this.teams = data.teams;
          this.answers = data.answers;
          this.teamNameMode = data.teamNameMode;
          this.scoreMode = data.scoreMode;
          this.password = data.password;
          this.passwordLoaded = true;
        }
      });
  }

  get currentQuestion(): IQuestion | undefined {
    return this.questions[this.questionIndex];
  }

  updateQuestionIndex(index: number) {
    this.questionIndex = index;
    this.updateFirestore();
  }

  updateClueIndex(index: number) {
    this.clueIndex = index;
    this.updateFirestore();
  }

  updateTeamNameMode(value: boolean) {
    this.teamNameMode = value;
    this.updateFirestore();
  }

  updateScoreMode(value: boolean) {
    this.scoreMode = value;
    this.updateFirestore();
  }

  private updateFirestore() {
    this.firestore
      .collection('c4')
      .doc('data')
      .update({
        questionIndex: this.questionIndex,
        clueIndex: this.clueIndex,
        teams: this.teams,
        answers: this.answers,
        teamNameMode: this.teamNameMode,
        scoreMode: this.scoreMode,
      })
      .catch((error: any) => {
        console.error('Error updating Firestore: ', error);
        // Handle the error appropriately
      });
  }

  addTeam(teamName: string): boolean {
    if (!this.teams.includes(teamName)) {
      this.teams.push(teamName);
      this.updateFirestore();
      return true;
    }
    return false;
  }

  removeTeam(teamName: string) {
    if (this.teams.includes(teamName)) {
      const teamIndex = this.teams.indexOf(teamName);
      if (teamIndex > -1) {
        this.teams.splice(teamIndex, 1);
        this.updateFirestore();
      }
    }
  }

  addAnswer(teamName: string, answer: string) {
    const questionIndex = this.questionIndex;
    const clueIndex = this.clueIndex;
    const clueKey = `clue${clueIndex}` as keyof IAnswer;

    if (!this.answers) {
      this.answers = {};
    }
    if (!this.answers[questionIndex]) {
      this.answers[questionIndex] = {};
    }
    if (!this.answers[questionIndex][teamName]) {
      this.answers[questionIndex][teamName] = {};
    }

    this.answers[questionIndex][teamName][clueKey] = { answer, points: 0 };
    this.updateFirestore();
  }

  correctAnswer(team: string, clue: keyof IAnswer) {
    const answer = this.answers[this.questionIndex]?.[team]?.[clue];
    if (answer) {
      answer.correct = !answer.correct;
      answer.points = answer.correct ? 5 - Number(clue.substring(4, 5)) : 0;
      this.updateFirestore();
    }
  }

  answerPoints(team: string, questionIndex?: number): number {
    const answer = this.answers[
      questionIndex !== undefined ? questionIndex : this.questionIndex
    ]?.[team];
    if (answer) {
      return (
        (answer.clue1?.points ?? 0) +
        (answer.clue2?.points ?? 0) +
        (answer.clue3?.points ?? 0) +
        (answer.clue4?.points ?? 0)
      );
    }
    return 0;
  }

  allPoints(team: string): number {
    let totalPoints = 0;

    for (let i = 0; i <= this.questions.length; i++) {
      totalPoints += this.answerPoints(team, i);
    }

    this.maxPoints[team] = totalPoints;
    return totalPoints;
  }

  hasMaxPoints(team: string): boolean {
    let maxPoints = 0;
    for (const key in this.maxPoints) {
      if (this.maxPoints[key] > maxPoints) {
        maxPoints = this.maxPoints[key];
      }
    }

    return this.maxPoints[team] === maxPoints;
  }

  isTeamInTopPosition(team: string, position: number): boolean {
    if (position < 1 || position > 3) {
      throw new Error('Position must be between 1 and 3.');
    }

    const pointsArray = Object.entries(this.maxPoints).sort(
      (a, b) => b[1] - a[1]
    ); // Sort teams by points

    const uniquePoints = [...new Set(pointsArray.map((item) => item[1]))]; // Unique point values

    if (position > uniquePoints.length) {
      return false; // Position is beyond the number of unique point levels
    }

    const targetPoints = uniquePoints[position - 1]; // Points for the target position
    return this.maxPoints[team] === targetPoints;
  }
}
