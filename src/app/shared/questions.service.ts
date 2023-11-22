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

interface IAnswer {
  clue1?: string;
  clue2?: string;
  clue3?: string;
  clue4?: string;
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
  public answers: IAnswers = {};
  public questions: IQuestion[] = [
    {
      topic: 'a celebrity',
      clues: [
        {
          text:
            'born in austria soudob osb obsodb osb dob sbd obsob obodbo bobso dbosbo bosbdosb odbs',
        },
        { text: 'a movie star' },
        { text: 'a politician' },
        { text: 'a bodybuilder' },
      ],
    },
    {
      topic: 'a celebrity',
      clues: [
        { text: 'iq 220' },
        { text: "he's dead" },
        { text: 'a scientist' },
        { text: 'escaped natzies' },
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

    console.log(this.answers);

    this.answers[questionIndex][teamName][clueKey] = answer;
    this.updateFirestore();
  }
}
