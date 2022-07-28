import { Chess, PieceType, Square } from 'chess.js';

import Controller from '@ember/controller';

import Chessboard from 'ember-chessboard/components/chessboard';

export default class ApplicationController extends Controller {
  Chessboard = Chessboard;
  chess = new Chess();

  get board(): ({
    type: PieceType;
    color: 'b' | 'w';
    square: Square;
  } | null)[][] {
    return this.chess.board();
  }
}
