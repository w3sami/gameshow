import { TestBed } from '@angular/core/testing';

import { QuestionsService } from './questions.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { of } from 'rxjs';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

class AngularFirestoreMock {
  data = {
    questionIndex: 0,
    clueIndex: 0,
    teams: [],
    answers: {},
    teamNameMode: false,
    scoreMode: false,
    password: '',
  };

  collection(name: string) {
    return {
      doc: (docId: string) => {
        return {
          valueChanges: () => of(this.data),
          get: () => of({ exists: false }),
          set: (newData: any) => {
            this.data = { ...this.data, ...newData };
          },
          update: (newData: any) => {
            this.data = { ...this.data, ...newData };
          },
        };
      },
    };
  }
}

describe('QuestionsService', () => {
  let service: QuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Provide the mock in place of the actual service
      providers: [
        { provide: AngularFirestore, useClass: AngularFirestoreMock },
        { provide: FIREBASE_OPTIONS, useValue: {} },
        QuestionsService,
      ],
    });
    service = TestBed.inject(QuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('points', () => {
    beforeEach(() => {
      service.maxPoints = {
        TeamA: 100,
        TeamB: 90,
        TeamC: 90,
        TeamD: 80,
      };
    });
    it('should return true for TeamA in 1st position', () => {
      expect(service.isTeamInTopPosition('TeamA', 1)).toBeTrue();
    });

    it('should return true for TeamB in 2nd position', () => {
      expect(service.isTeamInTopPosition('TeamB', 2)).toBeTrue();
    });

    it('should return true for TeamC in 2nd position (tie scenario)', () => {
      expect(service.isTeamInTopPosition('TeamC', 2)).toBeTrue();
    });

    it('should return true for TeamD in 3rd position', () => {
      expect(service.isTeamInTopPosition('TeamD', 3)).toBeTrue();
    });

    it('should return false for TeamA in 3rd position', () => {
      expect(service.isTeamInTopPosition('TeamA', 3)).toBeFalse();
    });
  });
});
