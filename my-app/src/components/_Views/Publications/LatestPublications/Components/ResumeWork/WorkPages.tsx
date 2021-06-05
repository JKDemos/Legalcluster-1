import React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import { IState } from '../../../../../../reducers';
import { IPostsReducer } from '../../../../../../reducers/postReducer';
import { IUsersReducer } from '../../../../../../reducers/usersReducers';
import { useSelector } from 'react-redux';
import WorkPost from './WorkPost';
import { ICommentsReducer } from '../../../../../../reducers/commentsReducer';


const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
  }),
);

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

function createData(userId: number,id: number, title:string, body:string, author:string) {
  return { userId, id, title, body, author };
}

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function CustomPaginationActionsTable() {

  const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
  const {commentsList}=useSelector<IState, ICommentsReducer>(globalState =>globalState.comments);
  const {postsList}=useSelector<IState,IPostsReducer>(globalState=>globalState.posts)

  var postArray:any[];
  postArray=[]
  postsList.forEach(post => {
    postArray.push(createData(post.userId,post.id, post.title, commentsList?.[post.id]?.body, usersList?.[post.userId]?.name))//<WorkPost userId={post.userId} id={post.id} title={post.title} body={post.body}/>
  })
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);

  const rowsPerPage=10;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, postsList.length - page * rowsPerPage);

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody>
          {(rowsPerPage > 0
            ? postArray.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : postArray
          ).map((element) => (
            <TableRow key={element.id}>
              <TableCell component="th" scope="row">
                <WorkPost userId={element.userId} id={element.id} title={element.title} body={element.body} author={element.author}/>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[]}
              colSpan={3}
              count={postsList.length}
              rowsPerPage={10}
              page={page}
              //SelectProps={{
                //inputProps: { 'aria-label': 'rows per page' },
                //native: true,
              //}}
              onChangePage={handleChangePage}
              //onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}