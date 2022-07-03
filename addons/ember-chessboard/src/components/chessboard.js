import Component from '@glimmer/component';

const numRows = 8;
const emptyList = [...Array(numRows).keys()];

export default class Chessboard extends Component {
  emptyList = emptyList;
}
