import { Chess, ChessInstance, PieceType, Square } from 'chess.js';

import Controller from '@ember/controller';

import Chessboard from 'ember-chessboard/components/chessboard';

export default class ApplicationController extends Controller {
  Chessboard = Chessboard;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
  chess = new Chess();

  get board(): ({
    type: PieceType;
    color: 'b' | 'w';
    square: Square;
  } | null)[][] {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    return this.chess.board();
  }
}
