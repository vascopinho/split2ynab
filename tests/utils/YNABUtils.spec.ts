import { deepStrictEqual } from 'assert';
import { assert } from 'console';
import { appConfig } from '../../src/config/AppConfig';
import { User } from '../../src/types/Splitwise';
import { YNABUtils } from '../../src/utils/YNABUtils';
import {
  splitwiseMyUserFixture,
  splitwiseOtherUserFixture,
} from '../fixtures/splitwise.fixture';

let mySplitwiseUser: User;
let otherSplitwiseUser: User;
let splitwiseUserList: User[];

describe('YNAB Utils', () => {
  beforeEach(() => {
    mySplitwiseUser = splitwiseMyUserFixture();
    otherSplitwiseUser = splitwiseOtherUserFixture();
    splitwiseUserList = [mySplitwiseUser, otherSplitwiseUser];
  });

  it('should filter my user', () => {
    // When
    const filtered = YNABUtils.filterMyUser(splitwiseUserList);

    // Then
    expect(filtered).toEqual(mySplitwiseUser);
  });
});
