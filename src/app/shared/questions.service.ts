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
  public fireworks = false;

  public questions: IQuestion[] = [
    {
      topic: 'a celebrity',
      clues: [
        {
          text:
            'Työskenteli ennen politiikkaa lakimiehenä ja yliopiston opettajana',
        },
        {
          text: 'Voitti Nobelin rauhanpalkinnon vuonna 2009',
        },
        {
          text: 'Tunnettu puheistaan ja karismastaan',
        },
        {
          text: 'Ensimmäinen afroamerikkalainen presidentti Yhdysvalloissa',
        },
      ],
    },
    {
      topic: 'a celebcity',
      clues: [
        {
          text:
            'Pääsi Rock and Roll Hall of Fameen, muttei osallistunut seremonian',
        },
        {
          text:
            'Tunnettu laajasta äänialastaan ja energisestä esiintymisestään',
        },
        { text: 'Tuurasi AC/DC Angusta' },
        { text: 'Ikoninen pitkä tukka ja punainen bandana' },
      ],
    },
    {
      topic: 'a celebrity',
      clues: [
        {
          text: 'Menestyvä liikenainen, jolla on oma tuotemerkki',
        },
        {
          text: 'Aktiivinen sosiaalisen median käyttäjä',
        },
        {
          text: 'Amerikkalainen perijätär ja mediapersoona',
        },
        {
          text: '"The Simple Life" -realitysarjan tähti',
        },
      ],
    },
    {
      topic: 'a celebcity',
      clues: [
        {
          text: 'Vietti lapsuutensa Irlannissa',
        },
        {
          text: 'Menestyksekäs sooloura suositun duon hajottua',
        },
        {
          text: 'Oma tyyli, joka yhdistää poppia ja iskelmää',
        },
        {
          text: 'Vanha nainen hunningolla',
        },
      ],
    },
    {
      topic: 'a celebrity',
      clues: [
        {
          text:
            '1980-luvun popmusiikin ikoni, julkaisi ensimmäisen albuminsa vuonna 1983',
        },
        {
          text: 'Käyttää usein provokatiivisia teemoja musiikissaan',
        },
        {
          text: 'Toiminut myös ohjaajana ja tuottajana',
        },
        {
          text: 'Popmusiikin kuningatar',
        },
      ],
    },
    {
      topic: 'a celebcity',
      clues: [
        {
          text: 'Työskenteli kaupan alalla ennen poliittista uraansa',
        },
        { text: 'Nyttemmin strateginen neuvonantajana TBIssä' },
        { text: 'Siinä välissä Suomen nuorin pääministeri' },
        { text: 'Puhtaat? jauhot pussissa' },
      ],
    },
    {
      topic: 'a celebcity',
      clues: [
        {
          text: 'Itsenäinen ja päättäväinen fantasia hahmo',
        },
        {
          text: 'Rikkoo prinsessastereotypioita',
        },
        {
          text: 'Skotlantilainen prinsessa',
        },
        {
          text: 'Tunnettu punaisista kiharoistaan ja jousiammuntataidoistaan',
        },
      ],
    },
    {
      topic: 'a celebrity',
      clues: [
        {
          text: 'Aloitti uransa televisiossa nuorena miehenä',
        },
        {
          text: 'Työskenteli Martin Scorsesen kanssa useissa elokuvissa',
        },
        {
          text: '"The Revenant" Oscar-voittaja',
        },
        {
          text: 'Inception',
        },
      ],
    },
    {
      topic: 'a celebrity',
      clues: [
        {
          text: 'Yksi maailman menestyneimmistä kirjailijoista',
        },
        {
          text:
            'Kirjoitti ensimmäisen kirjan suositusta kirjasarjasta kahvilassa',
        },
        {
          text: 'Vaikuttanut lastenkirjallisuuteen merkittävästi',
        },
        {
          text: 'Avadakedavra!',
        },
      ],
    },
    {
      topic: 'a celebcity',
      clues: [
        {
          text: 'Osallistunut "Tanssii tähtien kanssa" -ohjelmaan',
        },
        {
          text: 'Pitkä ura radiotoimittajana',
        },
        {
          text: 'Suomalainen radio- ja TV-juontaja',
        },
        {
          text: 'Tunnettu "Temptation Island Suomi" -ohjelman juontajana',
        },
      ],
    },
    {
      topic: 'a celebrity',
      clues: [
        {
          text: 'Filantrooppi, jätti Harvardin yliopiston kesken',
        },
        {
          text: 'Yksi maailman rikkaimmista ihmisistä',
        },
        {
          text: 'Tunnettu työstään tietokoneiden parissa',
        },
        {
          text: 'Microsoftin perustaja',
        },
      ],
    },
    {
      topic: 'a celebcity',
      clues: [
        {
          text: 'Kivenkova MMA-ottelija, ja todella mukava tyyppi',
        },
        { text: 'Capo di tutti capi' },
        { text: 'Ajelee Teslalla' },
        { text: 'Vienon Hellien' },
      ],
    },
    {
      topic: 'a celebrity',
      clues: [
        {
          text:
            'Brittiläinen laulaja-lauluntekijä, voittanut useita Grammy-palkintoja',
        },
        {
          text: 'Tunnettu voimakkaasta äänestään',
        },
        {
          text: 'Yksi myydyimmistä artisteista maailmassa',
        },
        {
          text: 'James Bond -elokuvan tunnuskappaleen esittäjä',
        },
      ],
    },
    {
      topic: 'a celebrity',
      clues: [
        {
          text: 'Tunnettu erinomaisista vapaapotkuistaan',
        },
        {
          text: 'Omistaa osan Inter Miami CF -jalkapalloseurasta',
        },
        {
          text: 'Englannin maajoukkueen entinen kapteeni',
        },
        {
          text: 'Työskennellyt myös mallina ja hyväntekeväisyydessä',
        },
      ],
    },
    {
      topic: 'a celebrity',
      clues: [
        {
          text: 'Kanadalainen poplaulaja, löydettiin YouTube-videoiden kautta',
        },
        {
          text:
            'Nuorin sooloartisti, jolla on ollut seitsemän Billboard Hot 100 -listan kärkisijaa',
        },
        {
          text: 'Avioliitossa Hailey Baldwinin kanssa',
        },
        {
          text: 'mm. "Baby" ja "Sorry" ovat hänen hittejään',
        },
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
            fireworks: false,
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
          this.fireworks = data.fireworks;
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

  updateFireworks(value: boolean) {
    this.fireworks = value;
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
        fireworks: this.fireworks,
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
