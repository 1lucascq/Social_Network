import {
  Card,
  CardHeader,
  Container, Grid, Typography
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { newPostAction } from "../../actions";
// import deleteIcon from "../../assets/delete.svg";
// import editIcon from "../../assets/edit.svg";
import { getElapsedTime } from "../../helpers/getElapsedTime";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";

export default function Post({ title, user, postedAt, content, userId }) {
  // const [openEditModal, setOpenEditModal] = useState(false);
  // const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const { payload } = useSelector(newPostAction);
  const [isAuthor, setIsAuthor] = useState(false);
  // const dispatch = useDispatch();

  // const handleEditButton = () => {
  //   setOpenEditModal(true);
  // };

  // const handleDeleteModal = () => {
  //   setOpenDeleteModal(true);
  // };

  // const closeEditModal = () => {
  //   setOpenEditModal(false);
  // };

  // const closeDeleteModal = () => {
  //   setOpenDeleteModal(false);
  // };

  // const handleDeleteButton = () => {
  //   dispatch(
  //     deletePostAction({
  //         postedAt
  //     })
  //   );
  // };
  // console.log(handleDeleteButton)

  const serializeContent = (content) => {
    if (content.endsWith('.') || content.endsWith('?') || content.endsWith('!')) {
      return content;
    }
    return content + '.';
  }
  
  useEffect(() => {
    if (payload.user.id === userId) {
      setIsAuthor(true);
    }
  }, []);

  const elapsedTime = getElapsedTime(postedAt);
  return (
    <Container sx={{ my: "3em" }}>
      <Card>
        <CardHeader
          title={
            <Typography color="primary.contrastText" align="left" variant="h6" sx={{ px:'.6em' }}>
              {title}
            </Typography>
          }
          action={
            isAuthor && (
              <Grid display='flex' pr='.7em'>
                <DeleteModal postedAt={postedAt}/>

                {/* <IconButton
                  aria-label="delete"
                  sx={{ mr: ".5em" }}
                  // onClick={handleDeleteButton}
                  onClick={handleDeleteModal}
                >
                  <img alt="delete icon" src={deleteIcon} />
                </IconButton> */}


                <EditModal postData={{ title, content, postedAt  }} />





                {/* <IconButton aria-label="edit" onClick={handleEditButton}>
                  <img alt="edit icon" src={editIcon} />
                </IconButton> */}
              </Grid>
            )
          }
          sx={{ backgroundColor: "primary.main" }}
        />

        {/* <Dialog
          open={openDeleteModal}
          onClose={closeDeleteModal}
          fullWidth
          maxWidth="sm"
          // sx={{ position:'absolute', margin:'auto', heifght:'80em' }}
        >
          <DialogContent>
            <DeleteModal handleButtons={{ handleDeleteButton, closeDeleteModal  }} />
          </DialogContent>
        </Dialog> */}


        {/* <Dialog
          open={openEditModal}
          onClose={closeEditModal}
          fullWidth
          maxWidth="custom"
        >
          <DialogContent>
            <EditModal postData={{ title, content, postedAt  }} />
          </DialogContent>
        </Dialog> */}
        
        <Grid container justifyContent="space-between" p="1em">
          <Grid item>
            <Typography align="left" variant="subtitle2" color="primary.light" px='1em'>
              {user}
            </Typography>
          </Grid>

          <Grid item>
            <Typography align="right" variant="subtitle2" color="primary.light" px='1em'>
              {elapsedTime}
            </Typography>
          </Grid>
        </Grid>

        <Typography align="justify" paragraph py='1em' px="1.9em">
          {serializeContent(content)}
        </Typography>
      </Card>
    </Container>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  postedAt: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};


// import {
//   Card,
//   CardHeader,
//   Container,
//   Dialog,
//   DialogContent,
//   Grid,
//   IconButton,
//   Typography
// } from "@mui/material";
// import PropTypes from "prop-types";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deletePostAction, newPostAction } from "../../actions";
// import deleteIcon from "../../assets/delete.svg";
// import editIcon from "../../assets/edit.svg";
// import { getElapsedTime } from "../../helpers/getElapsedTime";
// import DeleteModal from "./DeleteModal";
// import EditModal from "./EditModal";

// export default function Post({ title, user, postedAt, content, userId }) {
//   const [openEditModal, setOpenEditModal] = useState(false);
//   const [openDeleteModal, setOpenDeleteModal] = useState(false);
//   const { payload } = useSelector(newPostAction);
//   const [isAuthor, setIsAuthor] = useState(false);
//   const dispatch = useDispatch();

//   const handleEditButton = () => {
//     setOpenEditModal(true);
//   };

//   const handleDeleteModal = () => {
//     setOpenDeleteModal(true);
//   };

//   const closeEditModal = () => {
//     setOpenEditModal(false);
//   };

//   // const closeDeleteModal = () => {
//   //   setOpenDeleteModal(false);
//   // };

//   const handleDeleteButton = () => {
//     dispatch(
//       deletePostAction({
//           postedAt
//       })
//     );
//   };
//   console.log(handleDeleteButton)

//   const serializeContent = (content) => {
//     if (content.endsWith('.') || content.endsWith('?') || content.endsWith('!')) {
//       return content;
//     }
//     return content + '.';
//   }
  
//   useEffect(() => {
//     if (payload.user.id === userId) {
//       setIsAuthor(true);
//     }
//   }, []);

//   const elapsedTime = getElapsedTime(postedAt);
//   return (
//     <Container sx={{ my: "3em" }}>
//       <Card>
//         <CardHeader
//           title={
//             <Typography color="primary.contrastText" align="left" variant="h6" sx={{ px:'.6em' }}>
//               {title}
//             </Typography>
//           }
//           action={
//             isAuthor && (
//               <Grid>
//                 <IconButton
//                   aria-label="delete"
//                   sx={{ mr: ".5em" }}
//                   // onClick={handleDeleteButton}
//                   onClick={handleDeleteModal}
//                 >
//                   <img alt="delete icon" src={deleteIcon} />
//                 </IconButton>








//                 <IconButton aria-label="edit" onClick={handleEditButton}>
//                   <img alt="edit icon" src={editIcon} />
//                 </IconButton>
//               </Grid>
//             )
//           }
//           sx={{ backgroundColor: "primary.main" }}
//         />

//           <DeleteModal postedAt={postedAt}/>
//         {/* <Dialog
//           open={openDeleteModal}
//           onClose={closeDeleteModal}
//           fullWidth
//           maxWidth="sm"
//           // sx={{ position:'absolute', margin:'auto', heifght:'80em' }}
//         >
//           <DialogContent>
//             <DeleteModal handleButtons={{ handleDeleteButton, closeDeleteModal  }} />
//           </DialogContent>
//         </Dialog> */}


//         <Dialog
//           open={openEditModal}
//           onClose={closeEditModal}
//           fullWidth
//           maxWidth="custom"
//         >
//           <DialogContent>
//             <EditModal postData={{ title, content, postedAt  }} />
//           </DialogContent>
//         </Dialog>
        
//         <Grid container justifyContent="space-between" p="1em">
//           <Grid item>
//             <Typography align="left" variant="subtitle2" color="primary.light" px='1em'>
//               {user}
//             </Typography>
//           </Grid>

//           <Grid item>
//             <Typography align="right" variant="subtitle2" color="primary.light" px='1em'>
//               {elapsedTime}
//             </Typography>
//           </Grid>
//         </Grid>

//         <Typography align="justify" paragraph py='1em' px="1.9em">
//           {serializeContent(content)}
//         </Typography>
//       </Card>
//     </Container>
//   );
// }

// Post.propTypes = {
//   title: PropTypes.string.isRequired,
//   postedAt: PropTypes.number.isRequired,
//   content: PropTypes.string.isRequired,
//   user: PropTypes.string.isRequired,
//   userId: PropTypes.string.isRequired,
// };
