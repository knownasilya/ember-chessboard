import type { PieceType, Square } from 'chess.js';

import Component from '@glimmer/component';

import styles from './styles.css';

const numRows = 8;
const emptyList = [...Array(numRows).keys()];

type Piece = { type: PieceType; color: 'w' | 'b'; square: Square };
type Board = Array<Array<Piece | null>>;
type Signature = {
  Element: HTMLUListElement;
  Args: {
    board: Board;
  };
};

export default class Chessboard extends Component<Signature> {
  emptyList = emptyList;
  styles = styles as Record<string, string>;

  getPiece = (board: Board, column: number, row: number): Piece | null => {
    return board[column][row];
  };
}
