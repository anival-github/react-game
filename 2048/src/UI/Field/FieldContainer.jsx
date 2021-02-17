/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Background, BackgroundCell, Field, Playground, PlayGroundCell,
} from './StyledComponents';
import { setInitialCells } from '../../redux/field-reducer';

class FieldContainer extends Component {
  componentDidMount() {
    this.props.setInitialCells();
  }

  render() {
    const backgroundCells = Array
      .from(new Array(16), (elem, index) => index)
      .map((elem) => <BackgroundCell key={elem} />);

    const playGroundCells = this.props.cells.map(({
      x, y, value, id,
    }) => (
      <PlayGroundCell key={id} x={x} y={y} value={value}>
        {value}
      </PlayGroundCell>
    ));

    return (
      <Field>
        <Background>
          {backgroundCells}
        </Background>
        <Playground>
          {playGroundCells}
          <PlayGroundCell />
        </Playground>
      </Field>
    );
  }
}

const mapStateToProps = (state) => ({
  cells: state.field.cells,
});

export default connect(mapStateToProps, { setInitialCells })(FieldContainer);