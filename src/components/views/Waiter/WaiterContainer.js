import { connect } from 'react-redux';
import Waiter from '../Waiter/Waiter';
import {
  getAll,
  fetchFromAPI,
  getLoadingState,
  update,
} from '../../../redux/tablesRedux';

const mapStateToProps = (state, props) => ({
  tables: getAll(state),
  loading: getLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchTables: () => dispatch(fetchFromAPI()),
  updateStatus: (tableId, newStatus) => dispatch(update(tableId, newStatus)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
