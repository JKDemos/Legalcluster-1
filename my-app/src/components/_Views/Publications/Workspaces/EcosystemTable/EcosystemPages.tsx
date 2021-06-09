import React, {useState} from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import LastPageIcon from '@material-ui/icons/LastPage';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { IState } from '../../../../../reducers';
import { IPostsReducer } from '../../../../../reducers/postReducer';
import { IUsersReducer } from '../../../../../reducers/usersReducers';
import { IPhotosReducer } from '../../../../../reducers/photosReducers';
import { ICommentsReducer } from '../../../../../reducers/commentsReducer';
import { useSelector } from 'react-redux';

import EcosystemPost from './EcosystemPost';
import { WorkspaceTableContainer, WorkPagesSelect, WorkPagesRightMenu } from '../../../../_Components/WorkPages/WorkPages';
import { WorkPanelFilters } from '../../../../_Components/CorporateHoldings/WorkPanel';
import { FlexRow } from '../../../../_Components/Common/DataLayouts';


const useStyles1 = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5),
    },
    button: {
      margin: theme.spacing(1),
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

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
  searchInput:{
    height: '30px',
    padding:'0px'
  },
});

export default function CustomPaginationActionsTable() {

  const { usersList } = useSelector<IState, IUsersReducer>(globalState => globalState.users);
  const {commentsList}=useSelector<IState, ICommentsReducer>(globalState =>globalState.comments);
  const {postsList}=useSelector<IState,IPostsReducer>(globalState=>globalState.posts)
  const {photosList} = useSelector<IState,IPhotosReducer>(globalState=>globalState.photos)

  const [searchInput,setSearchInput] = useState('')
  const classes = useStyles2();
  const [page, setPage] =useState(0);
  const rowsPerPage=20;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, postsList.length - page * rowsPerPage);
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };


  //DATA PREPARATION
  let [postDataArray,setPostDataArray] = useState([{id:commentsList?.[0]?.id,company:usersList?.[0]?.company.name,body:commentsList?.[0]?.body,user:usersList?.[0]?.name, photoUrl:photosList?.[0]?.url}])
  const [showAll, setShowAll] = useState('true');
  var userSelector=0;
  for (let index = 1; index < commentsList.length; index++) {
    if(postDataArray.length < 500){
      if(userSelector<9){
        userSelector++
      }
      else{
        userSelector=0;
      }
    let commentId= index;
    let commentBody = commentsList?.[index]?.body;
    let commentUser = usersList?.[userSelector]?.name;
    let commentCompany=usersList?.[userSelector]?.company.name;
    let commentPhoto=photosList?.[0]?.url;
    postDataArray.push({id:commentId,company:commentCompany,body:commentBody,user:commentUser,photoUrl:commentPhoto})
    }
   }
   postDataArray.pop()
  return (
    <WorkspaceTableContainer>
      <Table className={classes.table} aria-label="custom pagination table">
        <TableBody>
          <TableRow>
              <TableCell>
                <FlexRow>
                <h2>Latest updates</h2>
                <WorkPagesRightMenu>
                <form>
                  <TextField
                    className={classes.searchInput}
                    id="outlined-basic"
                    label="Filter by company..."
                    variant="outlined"
                    onChange={
                     event=>setSearchInput(event.target.value)
                     }
                  />
                </form>
                <WorkPagesSelect value = {showAll} onChange = {e => setShowAll(e.target.value)}>
                    <option value = 'true'>All</option>
                    <option value = 'false'>Followed</option>
                </WorkPagesSelect>
                </WorkPagesRightMenu>
                </FlexRow>
                <WorkPanelFilters>
                  <Button
                  variant="contained"
                  color="default"
                  //className={classes.button}
                  >
                  All
                  </Button>
                  <Button
                  variant="contained"
                  color="default"
                  //className={classes.button}
                  startIcon={<AccountBalanceIcon />}
                  >
                  SAS
                  </Button>
                  <Button
                  variant="contained"
                  color="default"
                  //className={classes.button}
                  startIcon={<AccountBalanceIcon />}
                  >
                  SARL
                  </Button>
                  <Button
                  variant="contained"
                  color="default"
                  //className={classes.button}
                  startIcon={<AccountBalanceIcon />}
                  >
                  Secondary business
                  </Button>
                  <Button
                  variant="contained"
                  color="default"
                  //className={classes.button}
                  startIcon={<AccountBalanceIcon />}
                  >
                  Communities
                  </Button>
                  <Button
                  variant="contained"
                  color="default"
                  //className={classes.button}
                  startIcon={<AccountBalanceIcon />}
                  >
                  POA
                  </Button>
                  <Button
                  variant="contained"
                  color="default"
                  //className={classes.button}
                  startIcon={<AccountBalanceIcon />}
                  >
                  Survey
                  </Button>
                  <Button
                  variant="contained"
                  color="default"
                  //className={classes.button}
                  >
                  ...
                  </Button>
                  
                  
                </WorkPanelFilters>
              </TableCell>
            </TableRow>           
            {postDataArray.filter((val)=>{
              if(searchInput===''){
                  return val;
              }else if(val.company.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())) {
                  return val;
              };
            })
            .filter((value)=>{
              console.log(value)
              if(showAll==='true'){
                return value
              }
              else if(value.user.toLowerCase()===('Leanne Graham').toLowerCase()){
                return value
              }
            })
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((element) => (
            <TableRow>
              <TableCell component="th" scope="row">
                    <EcosystemPost id={element.id} company={element.company} body={element.body} author={element.user} imageUrl={element.photoUrl}/>
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
              count={postDataArray.length}
              rowsPerPage={20}
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
    </WorkspaceTableContainer>
  );
}