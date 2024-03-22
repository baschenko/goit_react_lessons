import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'render_item_index';

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  componentDidUpdate(prevProps, prevState) {
    console.log('UpDate');
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  componentDidMount() {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  }

  render() {
    const { items } = this.props;
    const { index } = this.state;
    const currentItem = items[index];
    const totalItems = items.length;
    return (
      <div>
        <Controls
          onChange={this.changeIndex}
          currentIndex={index + 1}
          total={totalItems}
        />

        <Progress currentPages={index + 1} totalPages={totalItems} />

        <Publication item={currentItem} />
      </div>
    );
  }
}
