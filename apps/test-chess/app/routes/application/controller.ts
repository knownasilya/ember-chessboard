import Controller from '@ember/controller';

import Chessboard from 'ember-chessboard/components/chessboard';

export default class ApplicationController extends Controller {
  Chessboard = Chessboard;
}
