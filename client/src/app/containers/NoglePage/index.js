import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NogleActions from 'actions/NogleActions';
import { Grid, Row, Col } from 'react-bootstrap';

import style from './nogle-page.scss';

class NoglePage extends React.Component {

  static propTypes = {
    uncheckList:  PropTypes.array.isRequired,
    checkedList:  PropTypes.array.isRequired,
    nogleActions: PropTypes.object.isRequired,
  };

  constructor() {
    super();
    this.state = {
      orderByAsc: true,
    };
  }

  componentDidMount() {
    this.resetNogles();
    this.tink();
  }

  resetNogles = () => {
    this.props.nogleActions.getUnCheckNogles();
    this.props.nogleActions.setCheckedNogles([]);
  }

  tink = () => {
    setInterval(this.resetNogles, 5000);
  }

  moveToChecked = (nogle) => {
    const {
      uncheckList,
      checkedList,
      nogleActions: {
        setUnCheckNogles,
        setCheckedNogles,
      },
    } = this.props;

    setUnCheckNogles(uncheckList.filter(item => item.id !== nogle.id));
    setCheckedNogles([...checkedList, nogle]);
  }

  moveToUnCheck = (nogle) => {
    const {
      uncheckList,
      checkedList,
      nogleActions: {
        setUnCheckNogles,
        setCheckedNogles,
      },
    } = this.props;

    setCheckedNogles(checkedList.filter(item => item.id !== nogle.id));
    setUnCheckNogles([...uncheckList, nogle]);
  }

  reSort = () => {
    const {
      checkedList,
      nogleActions: {
        setCheckedNogles,
      },
    } = this.props;
    const orderByAsc = !this.state.orderByAsc;
    const reSortcheckedList = checkedList.slice();
    reSortcheckedList.sort((a, b) => {
      return orderByAsc ? a.todo > b.todo : a.todo < b.todo;
    });

    this.setState({ orderByAsc });
    setCheckedNogles(reSortcheckedList);
  }

  render() {
    const {
      uncheckList,
      checkedList,
    } = this.props;
    return (
      <div className={style['nogle-page']}>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} className={style.list}>
              <div className={style.header}>unCheck list</div>
              {uncheckList
                .map(nogle => (
                  <div key={nogle.id}>{nogle.todo}
                    <a
                      className="pull-right"
                      onClick={() => this.moveToChecked(nogle)}
                    >»</a>
                  </div>)
                )}
            </Col>
            <Col sm={6} className={style.list}>
              <a
                className={style.header}
                onClick={this.reSort}
              >
                checked list
                {this.state.orderByAsc ? '⇓' : '⇑' }
              </a>
              {checkedList
                .map(nogle => (
                  <div key={nogle.id}>{nogle.todo}
                    <a
                      className="pull-left"
                      onClick={() => this.moveToUnCheck(nogle)}
                    >«</a>
                  </div>)
                )}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    uncheckList,
    checkedList,
  } = state.nogles.toJS();
  return {
    uncheckList,
    checkedList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nogleActions: bindActionCreators(NogleActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NoglePage);
